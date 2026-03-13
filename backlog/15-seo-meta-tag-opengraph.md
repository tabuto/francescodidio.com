# Task 15 — SEO: Meta tag, Open Graph e Twitter Card

**Area:** SEO
**Dipendenze:** Task 04, Task 12, Task 03

## Descrizione

Aggiungere tutti i meta tag SEO obbligatori a `index.html` e `cv.html` come definito in SPECS.md §5.1. Includere Open Graph per la condivisione sui social e Twitter Card.

## Meta tag da aggiungere — index.html

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Francesco Didio — [Titolo Professionale]</title>
  <meta name="description" content="[Bio breve, max 160 caratteri]">
  <meta name="author" content="Francesco Didio">
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large">
  <link rel="canonical" href="https://francescodidio.com/">

  <!-- Open Graph -->
  <meta property="og:title" content="Francesco Didio — [Titolo]">
  <meta property="og:description" content="[Descrizione, max 200 caratteri]">
  <meta property="og:image" content="https://francescodidio.com/assets/img/og-image.png">
  <meta property="og:url" content="https://francescodidio.com/">
  <meta property="og:type" content="website">
  <meta property="og:locale" content="it_IT">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Francesco Didio — [Titolo]">
  <meta name="twitter:description" content="[Descrizione]">
  <meta name="twitter:image" content="https://francescodidio.com/assets/img/og-image.png">

  <!-- Favicon -->
  <link rel="icon" href="/favicon.ico">
  <link rel="icon" type="image/png" sizes="192x192" href="/assets/img/favicon-192.png">
  <link rel="icon" type="image/png" sizes="512x512" href="/assets/img/favicon-512.png">
</head>
```

## Meta tag da aggiungere — cv.html

Stessa struttura con:
- `<title>CV — Francesco Didio</title>`
- Description orientata al curriculum
- `<link rel="canonical" href="https://francescodidio.com/cv.html">`
- `og:url` → `https://francescodidio.com/cv.html`

## Criteri di accettazione (Done When)

- [ ] Tutti i meta tag obbligatori presenti su entrambe le pagine
- [ ] `<title>` unico e descrittivo per ogni pagina
- [ ] `description` max 160 caratteri
- [ ] Open Graph completo (title, description, image, url, type)
- [ ] Twitter Card completa
- [ ] `canonical` presente su ogni pagina
- [ ] Favicon collegato in tutti i formati
