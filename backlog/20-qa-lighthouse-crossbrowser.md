# Task 20 — QA: Lighthouse, cross-browser e responsive check

**Area:** QA
**Dipendenze:** Task 01–19 (tutti)

## Descrizione

Eseguire il ciclo completo di QA sul sito prima del deploy in produzione. Verificare i target Lighthouse, la compatibilità cross-browser e il comportamento responsive su tutti i breakpoint definiti in SPECS.md.

## Checklist Lighthouse (su entrambe le pagine)

Eseguire Lighthouse in modalità **Mobile** e **Desktop** per `index.html` e `cv.html`:

| Categoria       | Target |
|-----------------|--------|
| Performance     | ≥ 90   |
| Accessibility   | ≥ 90   |
| Best Practices  | ≥ 90   |
| SEO             | ≥ 95   |

Strumento: Chrome DevTools → Lighthouse oppure https://pagespeed.web.dev/

## Checklist cross-browser

Verificare le funzionalità principali nei seguenti browser:

| Browser         | Versione minima |
|-----------------|-----------------|
| Chrome          | Ultima stabile  |
| Firefox         | Ultima stabile  |
| Safari          | 15+             |
| Edge            | Ultima stabile  |
| Safari iOS      | 15+ (mobile)    |
| Chrome Android  | Ultima stabile  |

Per ogni browser verificare:
- [ ] Layout homepage corretto
- [ ] Dark/light toggle funzionante
- [ ] Smooth scroll funzionante
- [ ] Stampa/PDF da cv.html corretta
- [ ] Immagini WebP caricate (o fallback JPG)

## Checklist responsive

| Breakpoint | Risoluzione | Check |
|------------|-------------|-------|
| Mobile S   | 375px       | Layout singola colonna, no overflow |
| Mobile L   | 430px       | Layout singola colonna, no overflow |
| Tablet     | 768px       | Layout 2 colonne dove previsto |
| Desktop    | 1280px      | Layout completo multi-colonna |
| Wide       | 1440px      | Nessun elemento sproporzionato |

## Checklist validazione codice

- [ ] HTML valido: https://validator.w3.org/
- [ ] CSS valido: https://jigsaw.w3.org/css-validator/
- [ ] JSON-LD valido: https://search.google.com/test/rich-results
- [ ] Sitemap valida: https://www.xml-sitemaps.com/validate-xml-sitemap.html

## Criteri di accettazione (Done When)

- [ ] Tutti i target Lighthouse raggiunti su entrambe le pagine (mobile e desktop)
- [ ] Nessun bug critico nei browser testati
- [ ] Nessun overflow orizzontale a nessuna risoluzione
- [ ] HTML e CSS validati senza errori critici
- [ ] Dark/light toggle funziona correttamente su tutti i browser
- [ ] cv.html stampabile correttamente su tutti i browser testati
- [ ] Il sito è pronto per il deploy su francescodidio.com
