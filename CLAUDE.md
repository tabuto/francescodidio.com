# CLAUDE.md — francescodidio.com

Leggi [AGENT.md](./AGENT.md) per la struttura del progetto, il build step e il meccanismo di
deploy. [SPECS.md](./SPECS.md) contiene le specifiche del sito.

## Regole

- **Ogni commit che non deve pubblicare sul sito va marcato `[skip ci]` nel messaggio**: un push
  su `main` innesca il deploy FTP reale su `./`, senza dry run e senza conferme.
- Il deploy pubblica in **FTP in chiaro**, perche' questo hosting rifiuta il canale dati FTPS:
  ogni push non marcato `[skip ci]` manda la password FTP non cifrata sulla rete. Il dettaglio e
  la via d'uscita sono in [AGENT.md](./AGENT.md).
- Prima di committare modifiche alle classi Tailwind, lancia `npm run build` così la copia di
  `assets/css/main.css` in repo resta allineata all'HTML (il deploy la rigenera comunque in CI).
- Le credenziali FTP esistono solo come secret del repository (`FTP_SERVER`, `FTP_USERNAME`,
  `FTP_PASSWORD`): non vanno scritte in nessun file né passate a comandi di shell.
- Non lanciare run non-dry sul sito reale senza conferma esplicita.
