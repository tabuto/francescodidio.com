# Task 14 — Tema Dark / Light Toggle

**Area:** THEME
**Dipendenze:** Task 02, Task 05

## Descrizione

Implementare il sistema di toggle dark/light tema in `assets/js/theme.js`. Il tema deve persistere in `localStorage`, rispettare `prefers-color-scheme` come default e non causare FOUC (Flash of Unstyled Content).

## Implementazione `assets/js/theme.js`

```js
// Eseguito prima del rendering (in <head>) per evitare FOUC
(function () {
  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (saved === 'dark' || (!saved && prefersDark)) {
    document.documentElement.classList.add('dark');
  }
})();

function toggleTheme() {
  const isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  updateToggleIcon(isDark);
}

function updateToggleIcon(isDark) {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;
  btn.setAttribute('aria-label', isDark ? 'Passa al tema chiaro' : 'Passa al tema scuro');
  // Aggiornare icona luna/sole
}
```

## Markup del pulsante toggle

```html
<button
  id="theme-toggle"
  onclick="toggleTheme()"
  aria-label="Passa al tema scuro"
  class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
>
  <!-- Icona sole (light mode) -->
  <svg class="dark:hidden w-5 h-5" ...>...</svg>
  <!-- Icona luna (dark mode) -->
  <svg class="hidden dark:block w-5 h-5" ...>...</svg>
</button>
```

## CSS transizione

```css
html { transition: background-color 150ms ease, color 150ms ease; }
```

## Passi

1. Creare `assets/js/theme.js` con la logica IIFE anti-FOUC
2. Aggiungere `<script src="assets/js/theme.js"></script>` nella `<head>` di entrambe le pagine
3. Aggiornare il pulsante toggle in navbar e footer
4. Verificare persistenza ricaricando la pagina

## Criteri di accettazione (Done When)

- [ ] Il tema persiste dopo ricaricamento della pagina
- [ ] Default segue `prefers-color-scheme` del sistema
- [ ] Nessun FOUC (tema applicato prima del primo paint)
- [ ] Toggle visibile e funzionante su mobile e desktop
- [ ] Il pulsante ha `aria-label` aggiornato dinamicamente
- [ ] Transizione 150ms su background e colore testo
