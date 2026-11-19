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

### Guasto del canale dati FTPS: causa accertata il 19 novembre 2026

Per un giorno il deploy ha funzionato solo in chiaro. La causa non era l'hosting: era la
configurazione del client.

**Causa:** `security: loose`, che è il default dell'action e vale `rejectUnauthorized: false`.
L'action gira su **Node 24** — il log di ogni run si chiude con `The following actions target
Node.js 20 but are being forced to run on Node.js 24` — e da Node 22.23.0 / 24.17.0 / 26.3.1 il
fix di CVE-2026-48934 vincola il riuso di una sessione TLS a un host *autenticato*. basic-ftp
riusa la sessione del canale di controllo quando apre il socket dati (`session:
ftp.socket.getSession()` in `transfer.js`); senza un'identità verificata del server quel riuso
non avviene, e ProFTPD scarta una connessione dati che non riprende la sessione. Da qui il
`425 Unable to build data connection: Operation not permitted`.

**Rimedio in esercizio:** `security: strict` **e** `FTP_SERVER` impostato all'hostname del
certificato, non all'IP. Il certificato FTPS di questo server è emesso per
`web.ariel.vhosting-it.com`, che risolve allo stesso indirizzo del sito (86.105.14.20) e supera
la verifica della catena di sistema. Con l'IP numerico nessun certificato può validare, quindi
`strict` fallirebbe in handshake: **le due impostazioni vanno cambiate insieme.**

**Prova** (run 44480156323): con `ftps` + `strict`, 11 file pubblicati sul canale dati cifrato,
`Uploading to 86.105.14.20:56688 (TLSv1.3)`, comprese immagini da 404 KB e 1,1 MB. Con `loose`,
sullo stesso server e dallo stesso runner, non passava un byte.

Cadono quindi entrambe le ipotesi del 18 novembre: non è un firewall né un ALG FTP che gatekeepa
le porte passive — dal runner GitHub il canale dati cifrato funziona — e non è ProFTPD che
pretende un riuso di sessione che il client non tenta: il client lo tenta, ed è Node a negarglielo
quando il server non è autenticato.

#### Restano due guasti aperti

**1. Il `RETR` del manifest assente può resettare il socket dati e uccidere il run.** Non è
legato al TLS: il 18 novembre un run in chiaro ci è passato, il 19 ha fallito 3 volte su 3 (due
in `ftps`, una in `ftp`), sempre con `Error: Client is closed because read ECONNRESET (data
socket)` e zero upload. L'action apre l'`EPSV` **prima** del `RETR`; quando il `RETR` fallisce il
server resetta un socket dati già aperto, e basic-ftp considera fatale qualunque errore su quel
socket e chiude l'intero client. Si presenta **solo in assenza di manifest**, cioè alla prima
pubblicazione di una directory, e il successo di una volta non lo rende affidabile: è una corsa.
*Rimedio:* caricare a mano il manifest seed come `<server-dir>/.ftp-deploy-sync-state.json`
prima del primo run. Il contenuto sta in `ftp-deploy-seed-state.json` accanto alla cartella del
repository; ha `data: []`, quindi l'action ripubblica tutto e poi riscrive il manifest da sé.

**2. Ipotesi non ancora verificata: i file da 0 byte fanno fallire l'upload in FTPS.** Nel run
44480156323 gli 11 upload riusciti sono seguiti da due `425 ... Operation not permitted`
consecutivi sullo stesso file, `assets/img/og-image.png`, che è **lungo 0 byte**; in chiaro quel
file passa in 0,6 secondi (run 44371095381). L'alternativa non esclusa è un limite lato server
sulle connessioni dati cifrate, dato che il guasto cade alla dodicesima. Il test che le separa è
pronto sul ramo `test-ftps-zerobyte`, che esclude quel solo file: se con l'esclusione il run
FTPS arriva in fondo la causa è il file vuoto, se fallisce al dodicesimo file qualunque esso sia
è il limite. Richiede prima il manifest seed del punto 1.

#### Conseguenza ancora in vigore: si pubblica in chiaro

Decisione del 18 novembre 2026, **non ancora revocata**: il deploy sul `push` usa `protocol:
ftp`, quindi la password FTP e il contenuto dei file transitano non cifrati a ogni
pubblicazione. Il contenuto è un sito pubblico e non è un problema; la password sì: va trattata
come esposta per costruzione. Conviene che l'account FTP del deploy sia **dedicato e limitato
alla sola document root**, senza shell, database o altre sottoscrizioni.

Per passare a `ftps` servono tre cose insieme, e la terza non è ancora verificata: `FTP_SERVER`
all'hostname del certificato (fatto il 19 novembre), il fallback `protocol` portato a `ftps` in
`.github/workflows/deploy-ftp.yml` (una riga), e un run non-dry che arrivi in fondo sulla
document root — che oggi inciampa sui due guasti aperti qui sopra.

#### Errori di deduzione da non ripetere

Durante la diagnosi ci sono cascato, e ogni volta hanno portato fuori strada:

- **Un dry run che "riesce" non prova niente sul canale dati.** Se il manifest remoto non c'è, il
  `RETR` riceve un `550` e non trasferisce un byte: il run finisce in pochi secondi con esito
  positivo pur non avendo mai usato il canale dati. Solo un run con il manifest già presente,
  oppure un run non-dry, esercita davvero i trasferimenti.
- **La risposta al `RETR` di un file assente non è deterministica**: a volte arriva un `550 No
  such file` pulito, a volte un RST che chiude il client. Dall'assenza del `550` non si può
  concludere che il file ci fosse, e da un `550` ricevuto una volta non si può concludere che il
  passaggio sia affidabile.
- **Questo ProFTPD risponde `257 ... created` a `MKD` anche su una directory che esiste già**: da
  quel codice non si deduce che la cartella non ci fosse.
- **Il nome del file di stato è `.ftp-deploy-sync-state.json`**, col punto iniziale, ed è il
  default dell'input `state-name` della libreria. Un seed caricato a mano con un altro nome è
  invisibile all'action.
- **Un test da FileZilla sulla macchina dell'amministratore non dice nulla sul runner**: cambia
  client *e* rete insieme. Il 18 novembre quel test riusciva e mi ha fatto sospettare la rete,
  mentre la causa era il client — ma il client dell'action, non FileZilla.
- **`ftps-legacy` sulla 990 non è una via d'uscita**: `Error: Timeout (control socket)`, porta
  chiusa.

### Difetto del sito: `og-image.png` è vuoto

`assets/img/og-image.png` è lungo **0 byte**, nel repository dal commit iniziale e anche sul
sito live (`HTTP 200`, 0 byte). È l'immagine indicata dai meta Open Graph, quindi le anteprime
dei link condivisi su social e chat sono rotte. Accanto c'è `assets/img/og-image.svg`, che ha
contenuto: va generato il PNG da quello, nelle dimensioni attese (tipicamente 1200×630).

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
