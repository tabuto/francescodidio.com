// Applica il tema PRIMA del primo paint per evitare FOUC
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
  updateToggleLabel(isDark);
}

function updateToggleLabel(isDark) {
  document.querySelectorAll('[id="theme-toggle"]').forEach(function (btn) {
    btn.setAttribute('aria-label', isDark ? 'Passa al tema chiaro' : 'Passa al tema scuro');
  });
}
