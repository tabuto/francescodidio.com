# AGENT.md — francescodidio.com

Sito personale statico di Francesco Di Dio. Non richiede runtime server-side: viene servito da
un web server e pubblicato in modo incrementale via FTP da GitHub Actions — vedi *Deploy*.

**Stack:** HTML5 · Tailwind CSS 3.4 (con build step) · Vanilla JS

---

## Struttura delle directory

```
index.html            # Homepage
cv.html               # Curriculum Vitae
privacy-policy.html   # Privacy policy
assets/css/input.css  # Sorgente Tailwind (NON pubblicato)
assets/css/main.css   # CSS generato e minificato (pubblicato)
assets/js/            # theme.js, cookie-consent.js
assets/img/           # Immagini
backlog/              # Schede di lavoro (NON pubblicate)
bak/                  # Backup di lavoro (NON pubblicati)
```

## Build

```bash
npm install
npm run dev     # watcher Tailwind
npm run build   # genera assets/css/main.css minificato
```

`assets/css/main.css` è committato nel repo **ma il deploy non si fida di quella copia**: il
workflow rigenera il CSS in CI prima di caricarlo (vedi sotto). Resta comunque buona pratica
lanciare `npm run build` prima di committare, così la copia in repo non divergere dall'HTML.

---

## Deploy — GitHub Actions via FTP

Il sito viene pubblicato dal workflow `.github/workflows/deploy-ftp.yml` (nome: *Deploy FTP*),
che carica via FTPS **solo i file modificati** usando `SamKirkland/FTP-Deploy-Action@v4.3.5`.

### Trigger

| Trigger | Comportamento |
|---|---|
| `push` su `main` | deploy reale su `./`, protocollo `ftps`, log `standard` |
| `workflow_dispatch` | avvio manuale dalla tab *Actions*, con gli input qui sotto |

Input del run manuale:

- **`dry_run`** (boolean, default `true`) — simula senza caricare nulla. Un run in dry run dura
  pochi secondi: se un run "riuscito" è durato 2-3 secondi, non ha pubblicato niente.
- **`server_dir`** (string, default `_deploytest/`) — cartella remota di destinazione, deve
  finire con `/`. `./` pubblica sul sito reale.
- **`protocol`** (choice, default `ftps`) — `ftp` invia **la password in chiaro**: usarlo solo
  come diagnostica e cambiare la password dopo.
- **`log_level`** (choice, default `standard`) — `verbose` stampa il dialogo FTP comando per
  comando, indispensabile per diagnosticare i fallimenti.

Gli input valgono solo per il run manuale: nel workflow ogni valore è protetto da
`github.event_name == 'workflow_dispatch' && inputs.x || '<default>'`, così un push usa sempre i
default di produzione.

Per committare senza innescare un deploy, includere **`[skip ci]`** nel messaggio di commit.

### Step di build in CI

Prima dell'upload il job esegue `actions/setup-node@v4` (Node 20, cache npm), `npm ci` e
`npm run build`. Il CSS pubblicato è quindi **sempre** quello generato dall'HTML corrente, non
quello committato. Questo nasce da un problema reale: al momento di introdurre il deploy,
`assets/css/main.css` in repo era stale e gli mancavano le classi `from-amber-100`,
`via-fuchsia-100`, `to-sky-100` e le rispettive varianti `dark:`.

`local-dir` resta `./` perché Tailwind scrive l'output dentro l'albero del sito: non esiste una
cartella `dist/` da pubblicare.

### Credenziali e percorsi

- Secret del repository (Settings → Secrets and variables → Actions): `FTP_SERVER`,
  `FTP_USERNAME`, `FTP_PASSWORD`. Nei log appaiono come `***`; non sono disponibili in locale.
- `server-dir: ./` corrisponde alla **root di login dell'utente FTP, che coincide con la
  document root** del sito. Non serve alcun prefisso. Se cambiasse, va sostituito `'./'` nel
  fallback di `server-dir` con es. `httpdocs/`.
- `concurrency: ftp-deploy` con `cancel-in-progress: false`: due deploy non si sovrappongono mai.

### Esclusioni dal deploy

Specificare `exclude` sostituisce i default dell'action, quindi i pattern `.git*` vanno ripetuti.
Non vengono pubblicati:

| Pattern | Perché |
|---|---|
| `**/.git*`, `**/.git*/**` | default dell'action |
| `.github/**`, `.claude/**` | workflow e configurazione agenti |
| `node_modules/**`, `dist/**` | artefatti di build |
| `backlog/**`, `bak/**` | cartelle di lavoro (tracciate nel repo nonostante `.gitignore`) |
| `**/.gitkeep` | placeholder |
| `package.json`, `package-lock.json`, `tailwind.config.js` | toolchain |
| `assets/css/input.css` | sorgente Tailwind: il pubblicato è `main.css` |
| `assets/content.md`, `assets/project-summary.md`, `assets/Screenshot_v_2_0_b2.png` | materiale di lavoro dentro `assets/` |
| `CLAUDE.md`, `AGENT.md`, `SPECS.md`, `README.md`, `prompt.md` | documentazione di sviluppo |

### Il file di stato `.ftp-deploy-sync-state.json`

È il cuore del meccanismo incrementale. L'action **non elenca mai la cartella remota**: scarica
questo manifest dalla root di destinazione, lo confronta con i file locali e carica solo le
differenze.

- Contiene una voce per cartella (`{"type":"folder","name":…}`) e una per file, con `size` e
  **`hash` = sha256 del contenuto**.
- Viene riscritto **solo al termine di un sync riuscito**. Se un run muore a metà, lo stato resta
  quello precedente e il run successivo ricalcola lo stesso diff: l'operazione è idempotente.
- Se manca, l'action entra in modalità "prima pubblicazione" e tenta di caricare *tutti* i file
  creando *tutte* le cartelle — vedi il punto aperto sotto.
- È servito via HTTP come qualunque altro file della root: non contiene credenziali, ma espone
  l'elenco dei file con dimensioni e hash. Conviene negarne l'accesso via `.htaccess` (il deploy
  continua a funzionare perché l'action lo legge via FTP).

### Punto aperto: la prima pubblicazione sulla root

Su `occhipintiantonio.com` (hosting Plesk + ProFTPD) la **prima** pubblicazione su una cartella
senza file di stato è morta con `Error: Client is closed because read ECONNRESET (data socket)`
subito dopo una riga `creating folder "..."`. Ipotesi già escluse con prove: non è un ban IP né
Fail2Ban (il login riesce in ~2s anche nei run falliti), non è il riuso della sessione TLS
(fallisce anche con `protocol: ftp` in chiaro), non è la cartella di destinazione sbagliata.

Il sync incrementale invece non ha mai fallito. Il rimedio è portarsi in quella modalità
seminando a mano un `.ftp-deploy-sync-state.json` nella cartella di destinazione, che contenga
**tutte le cartelle** e **solo i file già identici** (confrontando lo sha256 della versione live
scaricata via HTTP con quello locale), omettendo quelli da pubblicare. Dopo il primo sync
riuscito l'action riscrive da sé il file di stato, quindi il seed serve una volta sola.

### Punto aperto: cache del CSS

`index.html`, `cv.html` e `privacy-policy.html` linkano `assets/css/main.css` **senza
cache-buster** (nessun `?v=`). Dopo una pubblicazione che cambia il CSS, chi ha già visitato il
sito può continuare a vedere la versione in cache fino alla scadenza degli header. Da valutare
l'aggiunta di un parametro di versione.
