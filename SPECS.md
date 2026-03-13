# SPECS.md — francescodidio.com
> Specifiche funzionali e tecniche per la realizzazione del sito personale.
> Approccio **spec-driven**: ogni sezione definisce il *cosa* e i criteri di accettazione che guidano la generazione dei task.

---

## 1. Visione generale

Sito personale **minimal**, responsive, ad alte prestazioni per **francescodidio.com**.
Funge da hub digitale che raccoglie identità professionale, curriculum, portfolio e contatti.

| Attributo        | Valore                          |
|------------------|---------------------------------|
| Tecnologie       | HTML5, CSS3, Tailwind CSS       |
| Pagine           | `index.html`, `cv.html`         |
| Tema             | Dark / Light con toggle         |
| Target           | Desktop, tablet, mobile         |
| Lingua           | Italiano (IT), inglese (EN)     |
| SEO              | Metadati ottimizzati per motori di ricerca e AI crawler |

---

## 2. Struttura delle pagine

### 2.1 `index.html` — Homepage

**Sezioni obbligatorie** (in ordine semantico):

| ID sezione    | Tag HTML5    | Contenuto                                                                 |
|---------------|--------------|---------------------------------------------------------------------------|
| `#hero`       | `<header>`   | Nome, titolo professionale, tagline, CTA principali                      |
| `#about`      | `<section>`  | Breve bio (4-6 righe), foto profilo                                      |
| `#social`     | `<nav>`      | Link a LinkedIn, GitHub, Twitter/X, altri profili rilevanti              |
| `#portfolio`  | `<section>`  | Card/griglia dei progetti principali, link a dettaglio                   |
| `#cv`         | `<section>`  | Anteprima/riassunto CV con link a `cv.html`                              |
| `#contact`    | `<section>`  | Form di contatto o link mailto + eventuali altri canali                  |
| `footer`      | `<footer>`   | Copyright, link legali, toggle tema                                       |

**Criteri di accettazione:**
- [ ] Ogni sezione è identificabile da un anchor `#id`
- [ ] La navigazione interna (smooth scroll) funziona su tutti i browser moderni
- [ ] Il layout è a singola colonna su mobile, multi-colonna su desktop
- [ ] Le CTA principali sono visibili above the fold senza scroll

---

### 2.2 `cv.html` — Curriculum

**Sezioni obbligatorie:**

| Sezione             | Tag HTML5    | Contenuto                                      |
|---------------------|--------------|------------------------------------------------|
| Intestazione        | `<header>`   | Nome, contatti, link social                    |
| Sommario            | `<section>`  | Profilo professionale (3-5 righe)              |
| Esperienze          | `<section>`  | Lista cronologica inversa, ruolo, azienda, date, descrizione |
| Formazione          | `<section>`  | Titoli di studio, corsi rilevanti              |
| Competenze          | `<section>`  | Skill tecniche e soft skill                    |
| Lingue              | `<section>`  | Livello per ogni lingua                        |
| Footer              | `<footer>`   | Link torna a homepage, data aggiornamento CV   |

**Criteri di accettazione:**
- [ ] La pagina è ottimizzata per la stampa (CSS `@media print`)
- [ ] È possibile salvare/stampare come PDF dal browser senza perdita di layout
- [ ] Tutte le date sono in formato standard (es. `MM/YYYY`)

---

## 3. Design & UX

### 3.1 Principi di design

- **Minimal**: massimo 2-3 font, palette ridotta, ampio uso di whitespace
- **Leggibilità**: contrasto WCAG AA minimo su entrambi i temi
- **Velocità percettita**: nessuna animazione pesante, transizioni ≤ 200ms
- **No framework JS**: zero JavaScript framework, al massimo vanilla JS per toggle tema e interazioni minimali

### 3.2 Tema Dark / Light

| Attributo          | Requisito                                                        |
|--------------------|------------------------------------------------------------------|
| Persistenza        | La preferenza è salvata in `localStorage`                        |
| Default            | Segue `prefers-color-scheme` del sistema operativo              |
| Toggle             | Pulsante accessibile con `aria-label` e icona luna/sole          |
| Transizione        | Smooth transition su `background-color` e `color` (150ms)       |

**Criteri di accettazione:**
- [ ] Il tema persiste al ricaricamento della pagina
- [ ] Il toggle è visibile e funzionante su mobile e desktop
- [ ] Nessun "flash of unstyled content" (FOUC) al caricamento

### 3.3 Responsive Breakpoints (Tailwind defaults)

| Nome   | Min-width | Layout                        |
|--------|-----------|-------------------------------|
| `sm`   | 640px     | Mobile ottimizzato            |
| `md`   | 768px     | Tablet                        |
| `lg`   | 1024px    | Desktop standard              |
| `xl`   | 1280px    | Desktop wide                  |

---

## 4. Tecnologie e dipendenze

### 4.1 Stack tecnico

```
HTML5
CSS3
Tailwind CSS (via CDN o build locale con CLI)
Vanilla JavaScript (solo per tema toggle e micro-interazioni)
```

> **Nota**: non sono ammessi framework JavaScript (React, Vue, ecc.) né CSS framework aggiuntivi oltre Tailwind.

### 4.2 Tailwind CSS

- Usare i **UI Blocks** di Tailwind Plus come riferimento visivo: https://tailwindcss.com/plus/ui-blocks
- Configurare `tailwind.config.js` per:
  - `darkMode: 'class'` (toggle manuale)
  - Font personalizzati se necessario
  - Palette colori del brand

### 4.3 Asset

| Tipo          | Requisito                                                     |
|---------------|---------------------------------------------------------------|
| Immagini      | Formato WebP con fallback JPG/PNG, attributo `alt` sempre presente |
| Icone         | SVG inline o libreria icon-font minimale (es. Heroicons)      |
| Font          | Google Fonts o system font stack per performance              |
| Favicon       | ICO + PNG 192px + PNG 512px (per PWA readiness)               |

---

## 5. SEO & Metadati

### 5.1 Meta tag obbligatori (ogni pagina)

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="...">
<meta name="author" content="Francesco Didio">
<meta name="robots" content="index, follow">

<!-- Open Graph -->
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<meta property="og:image" content="...">
<meta property="og:url" content="https://francescodidio.com/...">
<meta property="og:type" content="website">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="...">
<meta name="twitter:description" content="...">
<meta name="twitter:image" content="...">
```

### 5.2 Structured Data (JSON-LD)

- `Person` schema su `index.html` con nome, URL, social, occupazione
- `BreadcrumbList` su `cv.html`

### 5.3 AI Crawler Optimization

- `<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large">` 
- Contenuto testuale chiaro e ben strutturato (no testo in immagini)
- Sitemap XML (`sitemap.xml`)
- `robots.txt` permissivo

### 5.4 Criteri di accettazione SEO

- [ ] Lighthouse SEO score ≥ 95
- [ ] Tutti i link hanno testo descrittivo (no "clicca qui")
- [ ] Heading hierarchy corretta (`h1` unico per pagina, poi `h2`, `h3`...)
- [ ] Canonical tag presente su ogni pagina

---

## 6. Accessibilità

| Requisito                              | Standard    |
|----------------------------------------|-------------|
| Contrasto testo/sfondo                 | WCAG 2.1 AA |
| Navigazione da tastiera                | Supportata  |
| Attributi `aria-*` su elementi interattivi | Obbligatori |
| Focus visibile                         | Sempre presente |
| Immagini con `alt`                     | Obbligatorio |

**Criteri di accettazione:**
- [ ] Lighthouse Accessibility score ≥ 90
- [ ] Il sito è navigabile completamente da tastiera (Tab, Shift+Tab, Enter)
- [ ] Screen reader compatibile (testato con VoiceOver o NVDA)

---

## 7. Performance

| Metrica              | Target       |
|----------------------|--------------|
| LCP (Largest Contentful Paint) | ≤ 2.5s |
| CLS (Cumulative Layout Shift)  | ≤ 0.1  |
| FID / INP                      | ≤ 200ms |
| Lighthouse Performance score   | ≥ 90    |
| Peso totale pagina (index)     | ≤ 300KB |

**Criteri di accettazione:**
- [ ] Nessuna risorsa bloccante il rendering (CSS inline critico o preload)
- [ ] Immagini con `loading="lazy"` eccetto hero
- [ ] Font con `font-display: swap`

---

## 8. Struttura file del progetto

```
francescodidio.com/
├── index.html
├── cv.html
├── sitemap.xml
├── robots.txt
├── favicon.ico
├── assets/
│   ├── css/
│   │   └── main.css          # Output Tailwind build
│   ├── js/
│   │   └── theme.js          # Toggle dark/light
│   └── img/
│       ├── profile.webp
│       └── og-image.png
├── tailwind.config.js
├── package.json
└── SPECS.md
```

---

## 9. Contenuti

I contenuti testuali (bio, esperienze, skill, ecc.) sono da recuperare dal sito attuale **francescodidio.com** e/o forniti direttamente dall'autore.

### Checklist contenuti

- [ ] Foto profilo (formato quadrato, min 400×400px)
- [ ] Tagline / headline professionale
- [ ] Bio breve (4-6 righe)
- [ ] Elenco esperienze lavorative con date e descrizione
- [ ] Elenco formazione
- [ ] Lista skill tecniche
- [ ] Link profili social
- [ ] Immagini/screenshot progetti portfolio
- [ ] Immagine OG (`og-image.png`, 1200×630px)

---

## 10. Generazione Task (backlog)

Le specifiche di questa sezione guidano la creazione dei task in `/backlog`.

### Raggruppamento task per area

| Area              | Descrizione                                                   |
|-------------------|---------------------------------------------------------------|
| **SETUP**         | Inizializzazione progetto, Tailwind, struttura cartelle       |
| **LAYOUT**        | Struttura HTML semantica, navigazione, footer                 |
| **HOMEPAGE**      | Implementazione di ogni sezione di `index.html`               |
| **CV**            | Implementazione di `cv.html` e stile stampa                   |
| **THEME**         | Dark/light toggle, persistenza, FOUC prevention               |
| **SEO**           | Meta tag, JSON-LD, sitemap, robots.txt                        |
| **PERFORMANCE**   | Ottimizzazione immagini, font, CSS critico                    |
| **ACCESSIBILITÀ** | ARIA, contrasto, navigazione tastiera                         |
| **QA**            | Test Lighthouse, cross-browser, responsive check              |

### Formato task (backlog.md)

Ogni task deve includere:
- **Titolo** descrittivo e breve
- **Area** di appartenenza
- **Descrizione** con contesto sufficiente per l'esecuzione
- **Criteri di accettazione** (Done When)
- **Dipendenze** da altri task (se presenti)

---

*Documento generato il 2026-03-13 — da aggiornare al variare dei requisiti.*
