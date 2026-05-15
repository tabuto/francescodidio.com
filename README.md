# francescodidio.com

Sito personale di Francesco Didio — minimal, responsive, ad alte prestazioni.

**Stack:** HTML5 · CSS3 · Tailwind CSS · Vanilla JS

## Struttura

```
index.html          → Homepage
cv.html             → Curriculum Vitae
privacy-policy.html → Privacy Policy
assets/
  css/main.css      → CSS generato da Tailwind
  js/
    theme.js        → Toggle dark/light (IIFE anti-FOUC + persistenza localStorage)
    i18n.js         → Internazionalizzazione IT/EN (IIFE anti-FOUC + persistenza localStorage)
    cookie-consent.js → Cookie banner (Google Consent Mode v2)
  img/              → Immagini ottimizzate (WebP/JPEG)
backlog/            → Task spec-driven (piano implementativo per area)
```

## Sviluppo

```bash
npm install
npm run dev     # watcher Tailwind con hot-reload
```

## Build produzione

```bash
npm run build   # genera assets/css/main.css minificato
```

## Dark / Light toggle

Il tema è gestito da `assets/js/theme.js`:

- Un **IIFE** in `<head>` legge `localStorage('theme')` e aggiunge/rimuove la classe `dark` sull'elemento `<html>` prima del primo paint (nessun FOUC).
- Il default segue `prefers-color-scheme` del sistema operativo.
- La funzione globale `toggleTheme()` è invocata dai pulsanti `#theme-toggle` presenti in navbar e footer.

## Internazionalizzazione IT / EN

Il sito supporta due lingue (italiano e inglese) tramite `assets/js/i18n.js`:

### Architettura

| Componente | Descrizione |
|---|---|
| **IIFE anti-FOUC** | Legge `localStorage('lang')` e imposta `<html lang>` e `data-lang` prima del rendering |
| **Dizionario `I18N`** | Oggetto `{ it: {}, en: {} }` con tutte le stringhe tradotte, incluse a runtime nel file JS |
| **Attributi HTML** | `data-i18n="key"` per testo puro, `data-i18n-html="key"` per testo con markup, `data-i18n-label="key"` per `aria-label` |
| **`applyLang(lang)`** | Sostituisce `textContent` / `innerHTML` / `aria-label` di ogni elemento marcato; aggiorna meta tag SEO e `<html lang>` |
| **`toggleLang()`** | Legge `data-lang` corrente, chiama `applyLang` con la lingua opposta |
| **Persistenza** | La lingua scelta è salvata in `localStorage('lang')` |
| **Default** | `navigator.language` del browser (EN se inizia con "en", altrimenti IT) |

### Utilizzo nel markup

```html
<!-- Testo puro -->
<h2 data-i18n="cv.h2">Curriculum</h2>

<!-- Testo con markup interno -->
<p data-i18n-html="about.p1">Manager tecnico con <strong>GenAI</strong>...</p>

<!-- aria-label -->
<button data-i18n-label="lang.toggle.label" aria-label="Switch to English">…</button>
```

### Toggle button

Un pulsante `IT|EN` è presente in navbar e footer di ogni pagina, affiancato al toggle dark/light:

```html
<button id="lang-toggle" onclick="toggleLang()" aria-label="Switch to English"
  class="px-2 py-1 rounded text-xs font-semibold border border-gray-300 dark:border-gray-700 …">
  <span data-lang-label>EN</span>
</button>
```

Il testo del pulsante mostra sempre la lingua **verso cui si passerà** (se attivo IT → mostra EN).

### Pagine supportate

Il dizionario include traduzioni per `index.html`, `cv.html` e `privacy-policy.html`.  
Ogni pagina ha `data-i18n-page="<id>"` sul `<body>` per il selettore dei meta tag SEO.

## Specifiche

Vedi [SPECS.md](./SPECS.md) per le specifiche complete del progetto.
