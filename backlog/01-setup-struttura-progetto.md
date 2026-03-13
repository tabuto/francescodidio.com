# Task 01 — Inizializzazione struttura progetto

**Area:** SETUP
**Dipendenze:** nessuna

## Descrizione

Creare la struttura di cartelle e file base del progetto secondo quanto definito in SPECS.md §8.
Inizializzare il repository git (se non esistente), creare `package.json` e predisporre tutte le directory necessarie.

## Passi

1. Creare la struttura di cartelle:
   ```
   assets/
     css/
     js/
     img/
   ```
2. Creare i file placeholder vuoti: `index.html`, `cv.html`, `sitemap.xml`, `robots.txt`, `favicon.ico`
3. Inizializzare `package.json` con `npm init`
4. Aggiungere `.gitignore` (node_modules, .DS_Store, dist/)
5. Creare `README.md` con descrizione progetto e istruzioni avvio

## Criteri di accettazione (Done When)

- [ ] La struttura di cartelle corrisponde esattamente a SPECS.md §8
- [ ] `package.json` è presente e valido
- [ ] `.gitignore` esclude `node_modules/` e file di sistema
- [ ] Il repository git è inizializzato con primo commit
