# Task 22 — Sezione Articoli: articles.html + pagine post/

**Area:** Contenuto / Blog
**Dipendenze:** Task 04, Task 05, Task 14, Task 15, Task 21

---

## Descrizione

Realizzare una sezione articoli composta da:

1. **`articles.html`** — pagina indice con l'elenco di tutti gli articoli
2. **`post/`** — cartella che contiene una pagina HTML per ogni articolo

La sezione deve essere coerente con il design system esistente (Tailwind, dark mode, navbar, footer, cookie banner) e ottimizzata per SEO con structured data `Article` (JSON-LD).

---

## Struttura file

```
francescodidio.com/
├── articles.html               ← pagina indice articoli
└── post/
    ├── nome-articolo-slug.html ← pagina singolo articolo
    └── ...
```

---

## 1. `articles.html` — Pagina indice

### Layout

- Stesso header/navbar/footer di `index.html` e `cv.html`
- Breadcrumb: Home → Articoli
- Titolo sezione `<h1>Articoli</h1>` con sottotitolo descrittivo
- Griglia di card articoli (1 colonna mobile, 2 colonne desktop)

### Card articolo

Ogni card deve mostrare:

| Campo | Descrizione |
|---|---|
| Titolo | `<h2>` — link alla pagina del post |
| Data di pubblicazione | formato leggibile (es. "14 marzo 2026") + `<time datetime="YYYY-MM-DD">` |
| Abstract | testo breve, max 200 caratteri |
| Tag/categoria | uno o più badge (es. "AI", "Dev", "Spec-Driven") |
| CTA | link "Leggi →" verso `post/slug.html` |

### Criteri di accettazione

- [ ] Lista articoli in ordine cronologico inverso (più recente in cima)
- [ ] Card responsive con hover state coerente col design system
- [ ] Breadcrumb visibile
- [ ] Link "← Home" nella navbar
- [ ] SEO: title, description, canonical, OG, Twitter Card
- [ ] `robots: index, follow`

---

## 2. `post/nome-articolo.html` — Pagina singolo articolo

### Layout

- Stesso header/navbar/footer degli altri pagine
- Breadcrumb: Home → Articoli → Titolo articolo
- Larghezza max contenuto: `max-w-2xl` centrata (ottimale per lettura)
- Tipografia `prose` Tailwind (stessa di `privacy-policy.html`)

### Struttura semantica obbligatoria

```html
<article>
  <header>
    <p class="categoria/tag">...</p>
    <h1>Titolo articolo</h1>
    <p class="meta">
      <time datetime="YYYY-MM-DD">Data pubblicazione</time>
      · X min di lettura
    </p>
    <p class="abstract">Abstract / sottotitolo</p>
  </header>

  <section class="corpo">
    <!-- contenuto dell'articolo con h2, h3, p, ul, ol, code, blockquote -->
  </section>

  <footer>
    <nav>← Articoli precedenti / Tutti gli articoli →</nav>
  </footer>
</article>
```

### Campi obbligatori per ogni articolo

| Campo | Obbligatorio | Note |
|---|---|---|
| `title` | ✅ | Max 60 caratteri per SEO |
| `description` | ✅ | Abstract, max 160 caratteri |
| `date` | ✅ | Formato `YYYY-MM-DD` nel `<time>` |
| `slug` | ✅ | Nome file = slug URL (es. `sito-con-ai-spec-driven.html`) |
| `category` | ✅ | Categoria principale (es. "AI", "Dev", "Career") |
| `tags` | ⬜ | Tag aggiuntivi, array |
| `reading_time` | ⬜ | Stimato automaticamente (~200 parole/min) |
| `og_image` | ⬜ | Immagine specifica per condivisione social |

### SEO — JSON-LD `Article`

Ogni pagina post deve includere:

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Titolo articolo",
  "description": "Abstract",
  "datePublished": "YYYY-MM-DD",
  "author": {
    "@type": "Person",
    "name": "Francesco di Dio",
    "url": "https://francescodidio.com"
  },
  "publisher": {
    "@type": "Person",
    "name": "Francesco di Dio"
  },
  "url": "https://francescodidio.com/post/slug.html"
}
```

### Criteri di accettazione

- [ ] `<article>` semantico con header/section/footer interni
- [ ] `<h1>` unico per pagina
- [ ] `<time>` con attributo `datetime` corretto
- [ ] Breadcrumb con JSON-LD `BreadcrumbList` aggiornato (Home → Articoli → Titolo)
- [ ] JSON-LD `Article` completo
- [ ] SEO: title, description, canonical, OG, Twitter Card specifici per ogni post
- [ ] Link "← Tutti gli articoli" verso `articles.html`
- [ ] Stima tempo di lettura visibile
- [ ] Supporto `<code>` e `<blockquote>` stilizzati con Tailwind prose

---

## 3. Collegamento con il sito esistente

- Aggiungere link **"Articoli"** nella navbar di `index.html`, `cv.html` e `privacy-policy.html`
- Aggiungere link **"Articoli"** nel footer di tutte le pagine
- Aggiornare `sitemap.xml` con `articles.html` e ogni `post/*.html`
- Aggiungere voce nel JSON-LD `BreadcrumbList` dove appropriato

---

## 4. Primo articolo da creare

Come parte dell'esecuzione di questo task, creare il primo articolo:

| Campo | Valore |
|---|---|
| Titolo | *Come ho realizzato il mio sito personale in 4 ore con AI e approccio Spec-Driven* |
| Slug | `post/sito-personale-ai-spec-driven.html` |
| Categoria | AI |
| Tag | Spec-Driven, Copilot, Claude, Tailwind |
| Contenuto | Da `assets/project-summary.md` — rielaborato in forma narrativa |

---

## Note tecniche

- **Nessuna dipendenza runtime**: niente generatori statici, niente Node.js a runtime — solo HTML statico
- **Nessun database**: gli articoli sono file HTML, l'indice in `articles.html` è mantenuto a mano (o aggiornato su richiesta all'AI)
- **Aggiornamento indice**: per aggiungere un articolo basta aggiungere la card in `articles.html` e creare il file in `post/`
- **Dark mode**: ereditata da `theme.js` già presente, zero configurazione aggiuntiva
- **Cookie banner**: `cookie-consent.js` incluso in tutte le pagine come per le altre
