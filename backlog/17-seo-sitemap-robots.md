# Task 17 — SEO: Sitemap XML e robots.txt

**Area:** SEO
**Dipendenze:** Task 15

## Descrizione

Creare `sitemap.xml` e `robots.txt` per facilitare l'indicizzazione del sito da parte dei motori di ricerca e degli AI crawler, come definito in SPECS.md §5.3.

## sitemap.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://francescodidio.com/</loc>
    <lastmod>2026-03-13</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://francescodidio.com/cv.html</loc>
    <lastmod>2026-03-13</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
```

## robots.txt

```
User-agent: *
Allow: /

User-agent: GPTBot
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: Googlebot
Allow: /

Sitemap: https://francescodidio.com/sitemap.xml
```

## Aggiornamenti da fare dopo ogni rilascio

- Aggiornare `<lastmod>` in `sitemap.xml` a ogni modifica significativa delle pagine

## Criteri di accettazione (Done When)

- [ ] `sitemap.xml` valido (verificare con https://www.xml-sitemaps.com/validate-xml-sitemap.html)
- [ ] `robots.txt` accessibile a `https://francescodidio.com/robots.txt`
- [ ] `robots.txt` include il riferimento alla sitemap
- [ ] AI crawler (GPTBot, Claude-Web) esplicitamente permessi
- [ ] Link a `sitemap.xml` aggiunto nel `<head>` di ogni pagina:
  ```html
  <link rel="sitemap" type="application/xml" href="/sitemap.xml">
  ```
