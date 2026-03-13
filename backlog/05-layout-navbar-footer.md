# Task 05 — Navigazione principale e Footer

**Area:** LAYOUT
**Dipendenze:** Task 04

## Descrizione

Implementare la navbar fissa/sticky in cima alla pagina e il footer comune a tutte le pagine. Entrambi devono essere responsive e includere il toggle dark/light (il cui comportamento verrà completato nel Task 14).

## Navbar

- Logo/nome a sinistra, link di navigazione a destra
- Su mobile: hamburger menu o link compatti
- Sticky (rimane visibile durante lo scroll) con sfondo semi-trasparente in dark/light
- Contiene placeholder per il toggle tema (pulsante con icona sole/luna)
- Highlight del link attivo (via `aria-current="page"` o classe Tailwind)

## Footer

- Copyright `© {anno} Francesco Didio`
- Link rapidi: About, CV, Portfolio, Contatti
- Link social (icone SVG Heroicons o simili)
- Toggle tema (alternativo o duplicato)
- Nota "Realizzato con HTML5 + Tailwind CSS"

## Stile Tailwind

- Navbar: `sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur`
- Footer: `bg-gray-50 dark:bg-gray-900 border-t`
- Responsive: `flex flex-col md:flex-row`

## Criteri di accettazione (Done When)

- [ ] La navbar è sticky e visibile su scroll
- [ ] Il footer contiene copyright, link social e toggle tema
- [ ] Entrambi sono responsive (mobile e desktop)
- [ ] Il markup usa `<nav aria-label="...">` per la navigazione
- [ ] Il toggle tema è presente (anche se non ancora funzionante)
- [ ] Nessun overflow orizzontale su mobile
