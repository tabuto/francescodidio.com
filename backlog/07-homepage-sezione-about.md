# Task 07 — Homepage: Sezione About

**Area:** HOMEPAGE
**Dipendenze:** Task 04, Task 03

## Descrizione

Implementare la sezione `<section id="about">` con foto profilo e bio breve. Deve trasmettere personalità e professionalità in poche righe.

## Contenuto

- Foto profilo (formato WebP, `loading="eager"` se near the fold, altrimenti `lazy`)
  - `<picture>` con `<source type="image/webp">` e fallback `<img>` JPG
  - Attributo `alt="Foto profilo di Francesco Didio"`
- Bio breve (4-6 righe): chi sono, cosa faccio, cosa mi appassiona
- Eventuale lista di "highlight" (tecnologie principali, anni di esperienza)

## Layout Tailwind

- Desktop: 2 colonne — foto a sinistra, testo a destra (`grid grid-cols-1 md:grid-cols-2`)
- Mobile: colonna singola, foto sopra testo
- Foto rotonda: `rounded-full object-cover`
- Sezione con padding verticale generoso: `py-20`

## Criteri di accettazione (Done When)

- [ ] Foto profilo visibile con attributo `alt` corretto
- [ ] Bio di 4-6 righe presente e leggibile
- [ ] Layout a 2 colonne su desktop, 1 colonna su mobile
- [ ] Sezione identificabile con `id="about"`
- [ ] Foto in formato `<picture>` con WebP + fallback
