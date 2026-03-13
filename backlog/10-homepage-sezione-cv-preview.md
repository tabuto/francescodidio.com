# Task 10 — Homepage: Sezione CV Preview

**Area:** HOMEPAGE
**Dipendenze:** Task 04, Task 12

## Descrizione

Implementare la sezione `<section id="cv">` nella homepage che funge da anteprima/riassunto del curriculum e invita a visitare `cv.html`. Deve mostrare i punti salienti dell'esperienza professionale.

## Contenuto

- Titolo sezione: "Curriculum"
- Riassunto delle ultime 2-3 esperienze lavorative (ruolo, azienda, anno)
- Riassunto delle skill principali (max 8-10 tag)
- CTA prominente: "Vedi il curriculum completo →" → link a `cv.html`

## Layout Tailwind

- Layout a 2 colonne su desktop: esperienze a sinistra, skill a destra
- Timeline semplice per le esperienze: `border-l-2 pl-4`
- Badge pill per le skill: `rounded-full px-3 py-1 text-sm`
- CTA: pulsante outline o filled

## Criteri di accettazione (Done When)

- [ ] Sezione identificabile con `id="cv"`
- [ ] Almeno 2-3 esperienze elencate in formato cronologico inverso
- [ ] Badge skill visibili e stilizzati
- [ ] CTA link a `cv.html` funzionante
- [ ] Layout responsive (1 col mobile, 2 col desktop)
