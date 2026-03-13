# Task 06 — Homepage: Sezione Hero

**Area:** HOMEPAGE
**Dipendenze:** Task 04, Task 03

## Descrizione

Implementare la sezione `<header id="hero">` della homepage. È la prima cosa che l'utente vede (above the fold). Deve comunicare immediatamente chi è Francesco Didio e cosa fa, con CTA principali verso CV e Portfolio.

## Contenuto

- Nome completo (`<h1>`)
- Titolo professionale / ruolo (`<p>` o `<h2>`)
- Tagline breve (1 riga)
- Due CTA principali:
  - "Vedi Portfolio" → `#portfolio`
  - "Scarica CV" → `cv.html`
- Foto profilo (opzionale in hero, alternativa in #about)

## Stile Tailwind

- Layout centrato verticalmente, full-screen o almeno 80vh
- Typography grande e impattante: `text-5xl md:text-7xl font-bold`
- CTA con stile button primario/secondario Tailwind
- Animazione fade-in leggera (CSS, no JS library)

## Criteri di accettazione (Done When)

- [ ] Nome e titolo professionale visibili above the fold su tutti i breakpoint
- [ ] Le due CTA sono cliccabili e portano alla destinazione corretta
- [ ] Il layout è centrato e responsive (mobile/tablet/desktop)
- [ ] `<h1>` contiene il nome completo
- [ ] La sezione usa il tag `<header>` con `id="hero"`
