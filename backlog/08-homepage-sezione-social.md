# Task 08 — Homepage: Sezione Social Links

**Area:** HOMEPAGE
**Dipendenze:** Task 04, Task 03

## Descrizione

Implementare la sezione `<nav id="social">` con i link ai profili social di Francesco Didio. I link devono essere chiari, accessibili e aprirsi in nuova scheda.

## Contenuto

Link da includere (adattare in base ai profili reali):
- LinkedIn
- GitHub
- Twitter / X
- Altri profili rilevanti (Dribbble, Behance, ecc. se presenti)

## Implementazione

- Ogni link: icona SVG (Heroicons o simili) + testo descrittivo
- Attributi obbligatori:
  ```html
  <a href="https://..." target="_blank" rel="noopener noreferrer" aria-label="Profilo LinkedIn di Francesco Didio">
  ```
- Icone SVG inline (per controllo colore via Tailwind)
- Hover effect: colore brand o scala leggera

## Stile Tailwind

- Layout flex orizzontale centrato: `flex gap-6 justify-center`
- Icone: `w-6 h-6` o `w-8 h-8`
- Transizione hover: `hover:text-blue-500 transition-colors duration-150`

## Criteri di accettazione (Done When)

- [ ] Tutti i link social sono presenti con URL corretti
- [ ] Ogni link ha `target="_blank"` e `rel="noopener noreferrer"`
- [ ] Ogni link ha `aria-label` descrittivo
- [ ] Le icone sono SVG con testo visibile o `aria-label`
- [ ] Sezione identificabile con `id="social"` e `aria-label="Social links"`
