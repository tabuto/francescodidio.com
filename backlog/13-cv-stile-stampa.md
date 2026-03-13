# Task 13 — CV: Ottimizzazione stampa e PDF

**Area:** CV
**Dipendenze:** Task 12

## Descrizione

Aggiungere stili CSS `@media print` a `cv.html` per garantire che il documento sia stampabile o salvabile come PDF dal browser senza perdita di layout, colori inappropriati o elementi superflui.

## Regole @media print da implementare

```css
@media print {
  /* Nascondi elementi non necessari */
  nav, .no-print, footer nav { display: none; }

  /* Forza sfondo bianco e testo nero */
  body { background: white; color: black; }

  /* Evita interruzioni di pagina nel mezzo delle sezioni */
  section, article { break-inside: avoid; }

  /* Link: mostra l'URL dopo il testo */
  a[href]::after { content: " (" attr(href) ")"; font-size: 0.8em; }

  /* Font size leggibile su carta */
  body { font-size: 11pt; line-height: 1.4; }

  /* Margini pagina A4 */
  @page { margin: 1.5cm 2cm; size: A4; }
}
```

## Passi

1. Aggiungere le regole print in `assets/css/input.css` o in un `<style>` inline in `cv.html`
2. Verificare l'anteprima di stampa nel browser (Chrome/Safari: File → Stampa → Anteprima)
3. Esportare un PDF di test e verificare che il layout sia corretto su 1-2 pagine A4
4. Aggiungere un pulsante "Stampa / Salva PDF" visibile a video ma nascosto in stampa

## Criteri di accettazione (Done When)

- [ ] L'anteprima di stampa mostra layout pulito su A4
- [ ] Navbar, toggle tema e elementi UI superflui sono nascosti in stampa
- [ ] Sfondo bianco e testo nero forzati in stampa
- [ ] Nessuna sezione viene spezzata a metà tra due pagine
- [ ] Il PDF generato è leggibile e professionale
- [ ] Pulsante "Stampa" presente e funzionante
