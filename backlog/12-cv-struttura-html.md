# Task 12 — CV: Struttura HTML e contenuto (cv.html)

**Area:** CV
**Dipendenze:** Task 02, Task 03

## Descrizione

Creare `cv.html` con struttura HTML5 semantica completa del curriculum vitae di Francesco Didio, seguendo le specifiche di SPECS.md §2.2. Il documento deve essere ben leggibile a video e ottimizzato per la stampa/PDF (vedi Task 13).

## Struttura HTML

```html
<header>    <!-- Nome, contatti, link social -->
<main>
  <section id="summary">    <!-- Profilo professionale -->
  <section id="experience"> <!-- Esperienze lavorative -->
  <section id="education">  <!-- Formazione -->
  <section id="skills">     <!-- Competenze teciche e soft -->
  <section id="languages">  <!-- Lingue -->
</main>
<footer>    <!-- Link homepage, data aggiornamento -->
```

## Contenuto sezione Esperienze

Per ogni esperienza:
```html
<article>
  <h3>[Ruolo]</h3>
  <p><strong>[Azienda]</strong> · <time>[MM/YYYY – MM/YYYY]</time></p>
  <p>[Descrizione attività e risultati]</p>
</article>
```
- Ordine cronologico inverso (più recente prima)
- Usare tag `<time>` per le date

## Stile Tailwind

- Colonna singola, max-width: `max-w-3xl mx-auto`
- Separatori tra sezioni: `border-t my-8`
- Typography chiara: `prose` o classi Tailwind dirette

## Criteri di accettazione (Done When)

- [ ] Tutte le sezioni del CV sono presenti con tag semantici corretti
- [ ] Le esperienze sono in ordine cronologico inverso
- [ ] Le date usano il tag `<time>` e formato MM/YYYY
- [ ] Header contiene nome, email, link social
- [ ] Footer contiene link a homepage e data aggiornamento
- [ ] `h1` unico nella pagina (nome completo)
