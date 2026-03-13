# Task 19 — Accessibilità: ARIA, contrasto e navigazione tastiera

**Area:** ACCESSIBILITÀ
**Dipendenze:** Task 06, Task 07, Task 08, Task 09, Task 11, Task 14

## Descrizione

Verificare e completare l'implementazione dell'accessibilità su tutte le pagine secondo WCAG 2.1 AA, come definito in SPECS.md §6. Lighthouse Accessibility score target ≥ 90.

## Checklist accessibilità

### Struttura e semantica
- [ ] `<html lang="it">` (o `lang="en"` per versione inglese)
- [ ] `<h1>` unico per pagina, gerarchia heading corretta (h1 → h2 → h3)
- [ ] Landmark regions: `<header>`, `<main>`, `<nav>`, `<footer>`, `<section>`
- [ ] Ogni `<nav>` ha `aria-label` univoco

### Contrasto colori
- [ ] Contrasto testo/sfondo ≥ 4.5:1 in light mode (WCAG AA)
- [ ] Contrasto testo/sfondo ≥ 4.5:1 in dark mode
- [ ] Verificare con: https://webaim.org/resources/contrastchecker/

### Immagini
- [ ] Ogni `<img>` ha attributo `alt` descrittivo (non vuoto, tranne decorative)
- [ ] Immagini decorative: `alt=""` e `role="presentation"`

### Interattività
- [ ] Tutti i link e pulsanti sono raggiungibili con Tab
- [ ] Focus visibile su tutti gli elementi interattivi (non nascosto con `outline: none`)
- [ ] Il pulsante toggle tema ha `aria-label` aggiornato dinamicamente
- [ ] I link social hanno `aria-label` descrittivo
- [ ] Form (se presente) con `<label>` associato a ogni `<input>`

### Screen reader
- [ ] Contenuto nascosto visivamente ma utile per SR: usare classe `sr-only`
- [ ] Icone SVG decorative: `aria-hidden="true"`
- [ ] Icone SVG informative: `role="img"` + `<title>`

## Strumenti di verifica

- Chrome DevTools → Lighthouse → Accessibility
- axe DevTools browser extension
- Navigazione manuale con Tab e Shift+Tab
- Test con VoiceOver (macOS: Cmd+F5)

## Criteri di accettazione (Done When)

- [ ] Lighthouse Accessibility ≥ 90
- [ ] Nessun errore critico con axe DevTools
- [ ] Il sito è navigabile completamente da tastiera
- [ ] Contrasto WCAG AA su entrambi i temi
- [ ] `<html lang="it">` presente
- [ ] Tutte le immagini hanno `alt`
