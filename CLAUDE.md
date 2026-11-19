# CLAUDE.md — francescodidio.com

Leggi [AGENT.md](./AGENT.md) per la struttura del progetto, il build step e il meccanismo di
deploy. [SPECS.md](./SPECS.md) contiene le specifiche del sito.

## Regole

- **Ogni commit che non deve pubblicare sul sito va marcato `[skip ci]` nel messaggio**: un push
  su `main` innesca il deploy FTP reale su `./`, senza dry run e senza conferme.
- Il deploy pubblica in **FTPS** (TLS esplicito). Regge su due impostazioni che vanno insieme:
  `security: strict` nel workflow e il secret `FTP_SERVER` impostato all'**hostname del
  certificato**, non all'IP. Se qualcuno rimette l'IP, il canale dati cifrato smette di
  funzionare: il perche' e' in [AGENT.md](./AGENT.md).
- **Alla prima pubblicazione di una directory nuova** carica a mano il manifest seed come
  `<server-dir>/.ftp-deploy-sync-state.json`, col punto e con quel nome esatto: senza, il `RETR`
  del file assente resetta il socket dati e il run muore quasi sempre.
- Prima di committare modifiche alle classi Tailwind, lancia `npm run build` così la copia di
  `assets/css/main.css` in repo resta allineata all'HTML (il deploy la rigenera comunque in CI).
- Le credenziali FTP esistono solo come secret del repository (`FTP_SERVER`, `FTP_USERNAME`,
  `FTP_PASSWORD`): non vanno scritte in nessun file né passate a comandi di shell.
- Non lanciare run non-dry sul sito reale senza conferma esplicita.
