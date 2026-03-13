# Task 16 — SEO: Structured Data JSON-LD

**Area:** SEO
**Dipendenze:** Task 15, Task 03

## Descrizione

Aggiungere dati strutturati JSON-LD per migliorare la comprensione del contenuto da parte dei motori di ricerca e degli AI crawler, secondo SPECS.md §5.2.

## Schema Person — index.html

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Francesco Didio",
  "url": "https://francescodidio.com",
  "image": "https://francescodidio.com/assets/img/profile.webp",
  "jobTitle": "[Titolo professionale]",
  "description": "[Bio breve]",
  "email": "mailto:[email]",
  "sameAs": [
    "https://linkedin.com/in/[username]",
    "https://github.com/[username]",
    "https://twitter.com/[username]"
  ]
}
</script>
```

## Schema BreadcrumbList — cv.html

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://francescodidio.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Curriculum",
      "item": "https://francescodidio.com/cv.html"
    }
  ]
}
</script>
```

## Passi

1. Aggiungere il blocco `<script type="application/ld+json">` prima di `</head>` in entrambe le pagine
2. Compilare tutti i campi con i dati reali da Task 03
3. Validare con Google Rich Results Test: https://search.google.com/test/rich-results
4. Validare con Schema.org Validator: https://validator.schema.org/

## Criteri di accettazione (Done When)

- [ ] Schema `Person` presente e valido in `index.html`
- [ ] Schema `BreadcrumbList` presente e valido in `cv.html`
- [ ] Tutti i campi compilati con dati reali (no placeholder)
- [ ] Nessun errore nel Google Rich Results Test
- [ ] I link `sameAs` puntano ai profili social reali
