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
| `push` su `main` | deploy reale su `./`, protocollo **`ftp` in chiaro**, log `standard` |
| `workflow_dispatch` | avvio manuale dalla tab *Actions*, con gli input qui sotto |

Input del run manuale:

- **`dry_run`** (boolean, default `true`) — simula senza caricare nulla. Un run in dry run dura
  pochi secondi: se un run "riuscito" è durato 2-3 secondi, non ha pubblicato niente.
- **`server_dir`** (string, default `_deploytest/`) — cartella remota di destinazione, deve
  finire con `/`. `./` pubblica sul sito reale.
- **`protocol`** (choice, default `ftp`) — su questo hosting **solo `ftp` funziona**: `ftps` ha
  il canale dati rifiutato e `ftps-legacy` la porta 990 chiusa. Vedi il guasto noto piu' sotto.
- **`port`** (string, default vuoto) — vuoto significa il default dell'action, la 21. Serve solo
  per `ftps-legacy`, che vuole la 990.
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
  document root** del sito: verificato il 18 novembre 2026: i file pubblicati in `_deploytest/`
  sono risultati raggiungibili via HTTP su `https://francescodidio.com/_deploytest/`. Non serve
  alcun prefisso. Se cambiasse, va sostituito `'./'` nel
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

### Guasto noto: il canale dati FTPS viene rifiutato, in chiaro funziona

Diagnosi verificata il 18 novembre 2026 con una serie di run manuali a `log_level: verbose`.

**Il deploy funziona solo con `protocol: ftp`, in chiaro.** Con `ftps` (explicit, `PROT P` sulla
porta 21) il canale dati non trasporta nulla; con `ftps-legacy` (implicit) la porta 990 non
risponde affatto.

Cosa funziona con qualunque protocollo: login (`230 User ... logged in`), i comandi di controllo
(`MKD` → `257`, `CWD` → `250`) e l'`EPSV`, che risponde `229 Entering Extended Passive Mode`
annunciando la porta, con il socket TCP che si connette (`Optimal transfer strategy found.`).

Cosa fallisce con `ftps`: **qualunque trasferimento reale sul socket dati**.

- su `server-dir: ./` → `FTPError: 425 Unable to build data connection: Operation not permitted`;
- su `server-dir: _deploytest/` → `Error: Client is closed because read ECONNRESET (data socket)`.
  Da non leggere male: basic-ftp considera fatale un errore sul socket dati e chiude l'intero
  client, per cui l'eccezione salta fuori sul comando di controllo che si trova in volo —
  tipicamente la riga dopo `creating folder "assets/"`. La creazione della cartella è una
  vittima, non la causa.
- `ftps-legacy` sulla 990 → `Error: Timeout (control socket)`: porta chiusa.

La prova che discrimina il TLS e non il range passivo in assoluto: lo stesso run con
`protocol: ftp` ha pubblicato 2,79 MB in 27,9 secondi e ha scritto il manifest, usando lo stesso
`EPSV` e la stessa famiglia di porte alte.

Sul **perché** il canale dati cifrato venga rifiutato restano due ipotesi, e dai log a
disposizione non si distinguono. Non attribuirla alla prima senza verificare:

1. **Il riuso della sessione TLS sul canale dati non riesce.** ProFTPD per default pretende che
   la connessione dati riprenda la sessione TLS del canale di controllo, e `TLSOptions
   NoSessionReuseRequired` è l'opt-out. Attenzione però: basic-ftp **tenta** il riuso — in
   `transfer.js` passa `session: ftp.socket.getSession()` quando apre il socket dati — quindi
   l'ipotesi regge solo se quella sessione non è riusabile o il server non la accetta, non perché
   il client non ci provi.
2. **Un firewall o un ALG FTP lato hosting fa da gatekeeper sulle porte passive.** Un connection
   tracker come `nf_conntrack_ftp` scopre la porta passiva **leggendo il canale di controllo in
   chiaro** e la apre dinamicamente. Con FTPS il controllo è cifrato, il tracker non vede la
   risposta `229 Entering Extended Passive Mode` e la porta resta chiusa: il `425 Unable to build
   data connection: Operation not permitted` è esattamente ciò che produce un blocco in
   bind/accept lato server.

Come distinguerle senza accesso al server: in FileZilla, connessione **FTPS explicit** e un
semplice listing di cartella, che è già un trasferimento sul canale dati. Se il listing e un
upload funzionano, il canale dati TLS del server è sano per quel client e l'ipotesi 2 regge solo
se il firewall discrimina per indirizzo di origine; se non funzionano nemmeno da lì, l'ipotesi 2
diventa la più probabile.

Per tornare a cifrare, le cose da chiedere all'hosting sono quattro: il log TLS di ProFTPD alla
data e ora di un run fallito, per vedere se compare un handshake rifiutato sul canale dati; se un
firewall o un ALG FTP gatekeepa le porte passive e come si comporta quando il controllo è
cifrato; se `TLSOptions NoSessionReuseRequired` è impostato in `mod_tls`; e se si può aprire la
990 per il TLS implicito.

#### Conseguenza accettata: si pubblica in chiaro

Decisione del 18 novembre 2026: il deploy sul `push` usa `protocol: ftp`, quindi **la password
FTP e il contenuto dei file transitano non cifrati a ogni pubblicazione**. Il contenuto e' un
sito pubblico e non e' un problema; la password si: va trattata come esposta per costruzione.
Conviene quindi che l'account FTP usato dal deploy sia **dedicato e limitato alla sola document
root**, senza accesso a shell, database o altre sottoscrizioni. Appena l'hosting sistema il
canale dati TLS, il valore va riportato a `ftps` in `.github/workflows/deploy-ftp.yml` (una sola
riga, il fallback del campo `protocol`).

#### Errori di deduzione da non ripetere

Durante la diagnosi ci sono cascato, e ogni volta hanno portato fuori strada:

- **Un dry run che "riesce" non prova niente sul canale dati.** Se il manifest remoto non c'è, il
  `RETR` riceve un `550` e non trasferisce un byte: il run finisce in pochi secondi con esito
  positivo pur non avendo mai usato il canale dati. Solo un run con il manifest già presente,
  oppure un run non-dry, esercita davvero i trasferimenti.
- **La risposta al `RETR` di un file assente non è deterministica**: a volte arriva un `550 No
  such file` pulito, a volte nessuna risposta, perché l'RST sul socket dati corre contro la
  risposta del server. Dall'assenza del `550` non si può concludere che il file ci fosse.
- **Questo ProFTPD risponde `257 ... created` a `MKD` anche su una directory che esiste già**: da
  quel codice non si deduce che la cartella non ci fosse.
- **Il nome del file di stato è `.ftp-deploy-sync-state.json`**, col punto iniziale, ed è il
  default dell'input `state-name` della libreria. Un seed caricato a mano con un altro nome è
  invisibile all'action.

### Punto aperto: cache del CSS

`index.html` linka `assets/css/main.css?v=20260314`, ma `cv.html` e `privacy-policy.html` lo
linkano **senza cache-buster**. Dopo una pubblicazione che cambia il CSS, chi ha già visitato
quelle due pagine può continuare a vedere la versione in cache fino alla scadenza degli header.
Conviene allineare le tre pagine allo stesso parametro di versione.

### Nota storica: repo e sito live divergenti

Fino al 18 novembre 2026 il sito live conteneva lavoro mai committato: `assets/js/i18n.js`
(65 KB, switch di lingua IT/EN con attributi `data-i18n`), `llms.txt`, e versioni più recenti di
`cv.html`, `privacy-policy.html` e `cookie-consent.js`. La divergenza è stata risolta portando
quel lavoro nel repository, che ora corrisponde al live file per file. Da qui in avanti il
repository è l'unica sorgente: **non modificare i file direttamente via FTP**, perché il primo
deploy riuscito li sovrascriverebbe con la versione del repo.
