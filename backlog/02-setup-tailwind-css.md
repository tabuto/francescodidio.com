# Task 02 — Configurazione Tailwind CSS

**Area:** SETUP
**Dipendenze:** Task 01

## Descrizione

Installare e configurare Tailwind CSS CLI per il progetto. Configurare `tailwind.config.js` con `darkMode: 'class'`, font personalizzati e palette colori del brand. Impostare lo script di build per generare `assets/css/main.css`.

## Passi

1. Installare Tailwind CSS:
   ```bash
   npm install -D tailwindcss
   npx tailwindcss init
   ```
2. Configurare `tailwind.config.js`:
   ```js
   module.exports = {
     content: ['./*.html'],
     darkMode: 'class',
     theme: {
       extend: {
         fontFamily: { /* font personalizzati */ },
         colors: { /* palette brand */ }
       }
     }
   }
   ```
3. Creare `assets/css/input.css` con le direttive Tailwind (`@tailwind base/components/utilities`)
4. Aggiungere script npm in `package.json`:
   - `"build": "tailwindcss -i ./assets/css/input.css -o ./assets/css/main.css --minify"`
   - `"dev": "tailwindcss -i ./assets/css/input.css -o ./assets/css/main.css --watch"`
5. Verificare la build con `npm run build`

## Criteri di accettazione (Done When)

- [ ] `npm run build` genera `assets/css/main.css` senza errori
- [ ] `npm run dev` avvia il watcher correttamente
- [ ] `darkMode: 'class'` è configurato in `tailwind.config.js`
- [ ] Il CSS generato include le utility Tailwind base
