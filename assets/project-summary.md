# Project Summary — francescodidio.com

> Documento di riepilogo per l'articolo sulla realizzazione del sito personale con approccio **spec-driven** assistito da AI.

---

## Obiettivo del progetto

Realizzare un sito personale **minimal, responsive e ad alte prestazioni** per francescodidio.com che fungesse da hub digitale per identità professionale, curriculum, portfolio e contatti — il tutto senza framework JavaScript, senza CMS e senza dipendenze runtime.

Il progetto è stato condotto interamente con approccio **spec-driven**: prima le specifiche, poi la generazione dei task, poi l'esecuzione sequenziale.

---

## Setup dell'ambiente

| Strumento | Ruolo |
|---|---|
| **GitHub Copilot CLI** | Agente AI principale — esecuzione task, refactoring, generazione codice, shell commands |
| **Claude Sonnet 4.6** | Modello LLM sottostante a Copilot CLI (via Anthropic) |
| **Visual Studio Code** | Editor con Copilot integrato, preview HTML, gestione file |
| **Node.js / npm** | Esecuzione build Tailwind CSS (`npm run build`) |
| **Git** | Versionamento con commit atomici per ogni task |

### Stack tecnologico scelto

- **HTML5** semantico (section, article, nav, header, footer, dl)
- **Tailwind CSS v3** — utility-first, dark mode via classe, palette brand custom
- **Vanilla JS** — zero framework, solo theme.js e cookie-consent.js
- **No build runtime** — `main.css` compilato localmente, deploy di soli file statici

---

## Approccio Spec-Driven

Il flusso di lavoro è stato:

```
1. SPECS.md       ← definizione del "cosa" con criteri di accettazione
2. BACKLOG        ← 21 task generati dalle specs, uno per file markdown
3. ESECUZIONE     ← task eseguiti in sequenza, commit atomico per ognuno
4. CONTENT SYNC   ← aggiornamenti da content.md propagati all'HTML
```

**`SPECS.md`** ha definito:
- Struttura delle pagine (index.html, cv.html)
- Requisiti di design (minimal, WCAG AA, dark/light)
- Requisiti SEO, performance e accessibilità
- Requisiti legali (GDPR, Garante Privacy Italiano)

**`content.md`** ha funzionato come **fonte unica di verità** per tutti i testi: bio, esperienze, portfolio, skill. È stato generato a partire dalle informazioni presenti nel vecchio sito e dal CV esistente, consolidando tutto in un unico file strutturato.

Il workflow di aggiornamento è semplice e non richiede di toccare l'HTML direttamente:

- Per **aggiungere un progetto al portfolio** → modifica la sezione Portfolio in `content.md` e chiedi all'AI di aggiornare le relative card in `index.html`
- Per **aggiornare il CV** (nuova esperienza, nuova skill, ecc.) → modifica la sezione Esperienze o Competenze in `content.md` e chiedi di propagare le modifiche in `cv.html` e nella CV Preview di `index.html`
- Per **aggiornare la bio o l'hero** → modifica la sezione About/Hero in `content.md` e chiedi l'aggiornamento della sezione corrispondente

Questo approccio mantiene il contenuto separato dalla presentazione e rende ogni aggiornamento rapido, preciso e privo di rischio di regressioni nel layout.

---

## Elenco dei 21 Task

### Setup & Configurazione

| # | Task | Descrizione |
|---|---|---|
| 01 | **Inizializzazione struttura progetto** | Cartelle, `package.json`, `.gitignore`, struttura asset |
| 02 | **Configurazione Tailwind CSS v3** | `tailwind.config.js`, palette brand custom (50–950), darkMode class, font Inter |
| 03 | **Raccolta e preparazione asset** | `content.md` come fonte unica dei testi, immagini profilo e portfolio |

### Layout & Componenti Homepage

| # | Task | Descrizione |
|---|---|---|
| 04 | **Struttura HTML semantica (index.html)** | Skeleton semantico, anchor section, meta base |
| 05 | **Navbar e Footer** | Navbar sticky con hamburger mobile, footer con copyright dinamico |
| 06 | **Sezione Hero** | Nome, titolo, tagline, badge tech, CTA (Portfolio / CV) |
| 07 | **Sezione About** | Bio, foto profilo, skill badges |
| 08 | **Sezione Social Links** | LinkedIn, GitHub, Twitter/X con icone SVG inline |
| 09 | **Sezione Portfolio** | Grid 3 card responsive con immagini, descrizione e link progetti |
| 10 | **Sezione CV Preview** | Timeline esperienze recenti, CTA verso cv.html |
| 11 | **Sezione Contact** | Mailto CTA con contrasto WCAG AA su entrambi i temi |

### CV & Tema

| # | Task | Descrizione |
|---|---|---|
| 12 | **CV: Struttura HTML (cv.html)** | 7 esperienze in ordine cronologico inverso, formazione, skill, lingue |
| 13 | **CV: Ottimizzazione stampa e PDF** | `@media print` inline, layout ottimizzato, pulsante stampa |
| 14 | **Tema Dark / Light Toggle** | `theme.js` IIFE in `<head>` per evitare FOUC, toggle su navbar e footer |

### SEO, Performance & Accessibilità

| # | Task | Descrizione |
|---|---|---|
| 15 | **SEO: Meta tag, Open Graph, Twitter Card** | Title, description, OG image, Twitter Card su entrambe le pagine |
| 16 | **SEO: Structured Data JSON-LD** | Schema `Person` su index, `BreadcrumbList` su cv.html |
| 17 | **SEO: Sitemap XML e robots.txt** | `sitemap.xml` con 3 URL, `robots.txt` con whitelist AI crawler (GPTBot, Claude-Web) |
| 18 | **Performance: Core Web Vitals** | `preconnect` Google Fonts, `loading="eager"` su foto profilo, favicon completo |
| 19 | **Accessibilità** | ARIA label, role=dialog, focus management, navigazione tastiera, contrasto WCAG AA |
| 20 | **QA: Lighthouse e cross-browser** | *(manuale — target: Performance ≥ 90, Accessibility ≥ 90, SEO ≥ 95)* |

### Legale & Privacy

| # | Task | Descrizione |
|---|---|---|
| 21 | **Cookie Banner GDPR + Google Consent Mode v2** | Banner vanilla JS conforme GDPR/Garante IT, pannello personalizzazione, GA iniettato solo su consenso |
| — | **Pagina Privacy Policy** | `privacy-policy.html` con struttura semantica, summary evidenziato, dark mode, collegata da tutti i footer |

---

## Dettaglio Task 21 — Cookie Consent

Il componente `assets/js/cookie-consent.js` (230 righe, zero dipendenze) implementa:

- **3 pulsanti** con parità visiva: `Accetta tutti` / `Rifiuta tutti` / `Personalizza`
- **Pulsante ✕** in alto a destra (equivale a rifiuto) — requisito Garante Privacy IT
- **Pannello espandibile** con checkbox per consenso granulare analytics
- **Cookie `cc_status`** con scadenza 6 mesi, `SameSite=Lax`
- **Google Consent Mode v2**: tutti i consensi `denied` di default, aggiornati su accettazione
- **GA iniettato dinamicamente** solo su consenso esplicito (mai in pre-caricamento)
- **Pulsante flottante `🍪 Privacy`** riappare dopo la prima scelta
- **Dark mode automatica** (legge classe `dark` su `<html>`)
- **Accessibilità**: `role=dialog`, `aria-modal`, focus automatico, ESC = rifiuto

```
Consent Mode v2 default (in <head> di tutte le pagine):
  analytics_storage:     denied
  ad_storage:            denied
  ad_user_data:          denied
  ad_personalization:    denied
  functionality_storage: granted
  security_storage:      granted
```

---

## Sessioni di lavoro

| Sessione | Data/Ora | Durata | Attività principali |
|---|---|---|---|
| **Sessione 1** | 13 mar 2026 — 22:20→22:41 | ~20 min | Setup progetto, Tailwind, struttura base, navbar/footer |
| **Sessione 2** | 14 mar 2026 — 14:02→15:49 | ~1h 47min | Hero, About, Portfolio, CV, SEO, cookie banner, privacy policy |

**Tempo totale: ~4 ore e 7 minuti**

> Di cui ~2 ore non deducibili dai commit git: generazione delle specifiche (`SPECS.md`), definizione e revisione dei 21 task del backlog, sessioni di prompt engineering e iterazioni di affinamento dei contenuti.

### Breakdown Sessione 2

| Orario | Durata | Task |
|---|---|---|
| 14:02–14:42 | 40 min | Sezioni Hero, About, Portfolio, CV Preview, Contact |
| 14:42–15:01 | 19 min | Content sync da `content.md`, immagini portfolio, esperienza Technical Manager |
| 15:01–15:36 | 35 min | Fix contrasto contact, NerdsLand nel portfolio, hero "AAA", SEO/JSON-LD/sitemap |
| 15:36–15:49 | 13 min | Cookie banner GDPR + Consent Mode v2 |
| 15:44–15:50 | 6 min | Privacy policy page |

> **Stima equivalente senza AI: 3–5 giorni lavorativi. Rapporto stimato: ~20:1**

---

## Statistiche finali

| Metrica | Valore |
|---|---|
| File HTML | 3 (`index.html`, `cv.html`, `privacy-policy.html`) |
| File JS | 2 (`theme.js`, `cookie-consent.js`) |
| Commit git | 24 |
| Task completati | 21/21 (+ privacy policy) |
| Dipendenze runtime | 0 |
| Framework JS | 0 |
| Linee di codice stimate | ~2.500 |

### Stima token consumati

> ⚠️ Stima approssimativa — non disponibile un contatore esatto dalla sessione Copilot CLI.

| Voce | Stima |
|---|---|
| Turni di conversazione | ~60–70 |
| Dimensione media contesto per turno (input) | ~25.000 token |
| **Token di input totali** | **~1.500.000** |
| Token di output totali (codice + spiegazioni) | **~120.000** |
| **Token totali** | **~1.620.000** |

**Metodologia:** i file prodotti pesano ~175 KB (~44.000 token di output puro). Il contesto di input cresce ad ogni turno perché include la cronologia della conversazione + i file letti (HTML, JS, MD) che in alcuni turni superavano i 40 KB ciascuno. La sessione ha subito una compattazione automatica della cronologia a metà progetto, segno che il contesto era vicino al limite della finestra.

**Costo stimato** (Claude Sonnet 4.6 — prezzi indicativi):

| | Token | Costo/MTok | Costo |
|---|---|---|---|
| Input | ~1.500.000 | $3,00 | ~$4,50 |
| Output | ~120.000 | $15,00 | ~$1,80 |
| **Totale** | **~1.620.000** | | **~$6,30** |

---

## Note e prossimi passi

- **GA ID**: `UA-11438577-7` è Universal Analytics (deprecato 2023) — da migrare a GA4 (`G-XXXXXXXXXX`)
- **og-image.png**: placeholder 0 bytes — da sostituire con immagine reale per preview social
- **Task 20 (QA)**: da eseguire manualmente con Lighthouse su Chrome Desktop e Mobile
- **privacy.html**: già presente come `privacy-policy.html` e linkata da tutti i footer
