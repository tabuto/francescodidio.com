# Task 09 — Homepage: Sezione Portfolio

**Area:** HOMEPAGE
**Dipendenze:** Task 04, Task 03

## Descrizione

Implementare la sezione `<section id="portfolio">` con una griglia di card che mostrano i progetti principali di Francesco Didio. Ogni card deve essere informativa e rimandare al progetto o a una pagina di dettaglio.

## Struttura card progetto

```html
<article class="...">
  <picture>
    <source srcset="assets/img/project-X.webp" type="image/webp">
    <img src="assets/img/project-X.jpg" alt="Screenshot di [Nome Progetto]" loading="lazy">
  </picture>
  <h3>[Nome Progetto]</h3>
  <p>[Breve descrizione — 1-2 righe]</p>
  <ul>[Tag tecnologie usate]</ul>
  <a href="[URL]">Vedi progetto →</a>
</article>
```

## Layout Tailwind

- Griglia responsiva: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8`
- Card con shadow e hover lift: `shadow-md hover:shadow-xl hover:-translate-y-1 transition`
- Immagine card: `aspect-video object-cover w-full`
- Sezione con titolo `<h2>Portfolio</h2>`

## Contenuto minimo

- Almeno 2-3 progetti con titolo, descrizione, screenshot e link
- Tag tecnologie (badge Tailwind)

## Criteri di accettazione (Done When)

- [ ] Griglia responsiva: 1 col mobile, 2 col tablet, 3 col desktop
- [ ] Ogni card ha immagine WebP con `alt` e `loading="lazy"`
- [ ] Ogni card ha titolo, descrizione e link funzionante
- [ ] Il titolo della sezione usa `<h2>` con `id="portfolio"`
- [ ] Hover effect visibile su card
