# Task 11 — Homepage: Sezione Contact

**Area:** HOMEPAGE
**Dipendenze:** Task 04

## Descrizione

Implementare la sezione `<section id="contact">` con i canali di contatto. Non è richiesto un backend, quindi la forma più semplice è un link `mailto:` stilizzato come CTA, eventualmente affiancato da un form HTML statico con `action` mailto.

## Contenuto

- Titolo: "Contattami" / "Get in touch"
- Breve testo invito (es. "Sono disponibile per collaborazioni e opportunità")
- CTA email: `<a href="mailto:info@francescodidio.com">` stilizzato come pulsante
- Link social (ripetizione compatta da #social)
- Opzionale: form HTML con `method="GET"` action mailto

## Stile Tailwind

- Sezione centrata con sfondo leggermente diverso per separazione visiva
- CTA email: pulsante grande e prominente
- Padding verticale generoso: `py-24`

## Criteri di accettazione (Done When)

- [ ] Sezione identificabile con `id="contact"`
- [ ] Link `mailto:` funzionante e ben visibile
- [ ] Testo invito presente
- [ ] Layout centrato e responsive
- [ ] Sezione visivamente distinta dalla precedente
