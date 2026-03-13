# Task 04 — Struttura HTML semantica di base (index.html)

**Area:** LAYOUT
**Dipendenze:** Task 02, Task 03

## Descrizione

Creare la struttura HTML5 semantica completa di `index.html` con tutte le sezioni definite in SPECS.md §2.1. La pagina deve includere `<head>` completo (charset, viewport, link CSS), lo scheletro delle sezioni con tag semantici corretti e anchor ID.

## Passi

1. Creare il `<head>` con:
   - `charset`, `viewport`
   - Link a `assets/css/main.css`
   - Placeholder per meta SEO (verranno completati nel Task 15)
   - Script `assets/js/theme.js` in head (per evitare FOUC)

2. Creare lo scheletro delle sezioni nell'ordine:
   ```html
   <header id="hero">…</header>
   <main>
     <section id="about">…</section>
     <nav id="social" aria-label="Social links">…</nav>
     <section id="portfolio">…</section>
     <section id="cv">…</section>
     <section id="contact">…</section>
   </main>
   <footer>…</footer>
   ```

3. Aggiungere navigazione interna con smooth scroll:
   ```html
   <nav aria-label="Navigazione principale">
     <a href="#about">About</a>
     <a href="#portfolio">Portfolio</a>
     <a href="#cv">CV</a>
     <a href="#contact">Contatti</a>
   </nav>
   ```

4. Aggiungere `scroll-behavior: smooth` via Tailwind o CSS

## Criteri di accettazione (Done When)

- [ ] Tutti gli ID sezione sono presenti (`#hero`, `#about`, `#social`, `#portfolio`, `#cv`, `#contact`)
- [ ] I tag HTML5 semantici sono usati correttamente (`header`, `main`, `section`, `nav`, `footer`)
- [ ] La navigazione interna con smooth scroll funziona
- [ ] La pagina è valida W3C (nessun errore critico)
- [ ] `h1` è unico nella pagina
