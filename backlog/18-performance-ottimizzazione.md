# Task 18 — Performance: Ottimizzazione Core Web Vitals

**Area:** PERFORMANCE
**Dipendenze:** Task 06, Task 07, Task 09, Task 12, Task 14

## Descrizione

Ottimizzare le performance di `index.html` e `cv.html` per raggiungere i target definiti in SPECS.md §7:
- LCP ≤ 2.5s
- CLS ≤ 0.1
- INP ≤ 200ms
- Lighthouse Performance ≥ 90
- Peso totale pagina ≤ 300KB

## Checklist ottimizzazioni

### CSS
- [ ] Usare il build Tailwind minificato (`npm run build`) in produzione
- [ ] Aggiungere CSS critico inline nel `<head>` per il fold iniziale (opzionale, se LCP non soddisfatto)
- [ ] Rimuovere CSS inutilizzato (Tailwind purge è automatico con `content` config)

### Immagini
- [ ] Tutte le immagini in formato WebP
- [ ] Attributo `loading="lazy"` su tutte le immagini tranne hero/fold (`loading="eager"`)
- [ ] Attributi `width` e `height` espliciti su ogni `<img>` per prevenire CLS
- [ ] Usare `<picture>` con `srcset` per immagini responsive

### Font
- [ ] Usare `font-display: swap` per Google Fonts
- [ ] Aggiungere `<link rel="preconnect" href="https://fonts.googleapis.com">`
- [ ] Valutare system font stack come alternativa a zero latenza

### Script
- [ ] `theme.js` è già inline/in head per prevenire FOUC (nessun blocco rendering)
- [ ] Nessun altro script bloccante — tutti gli script con `defer` o `async`

### Generali
- [ ] Verificare che nessuna risorsa CSS/JS blocchi il rendering
- [ ] Abilitare compressione gzip/brotli sul server (da configurare in fase di deploy)

## Strumenti di verifica

- Chrome DevTools → Lighthouse (modalità Desktop e Mobile)
- https://pagespeed.web.dev/
- Chrome DevTools → Performance tab

## Criteri di accettazione (Done When)

- [ ] Lighthouse Performance ≥ 90 su mobile
- [ ] LCP ≤ 2.5s (verificato con PageSpeed Insights)
- [ ] CLS ≤ 0.1
- [ ] Nessuna risorsa CSS/JS bloccante il rendering
- [ ] Tutte le immagini hanno `width`, `height`, `loading` e `alt`
- [ ] Font con `font-display: swap`
