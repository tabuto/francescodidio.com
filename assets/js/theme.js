// Applica il tema PRIMA del primo paint per evitare FOUC
(function () {
  var saved = localStorage.getItem('theme');
  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (saved === 'dark' || (!saved && prefersDark)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
})();

function toggleTheme() {
  var isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  _updateToggleLabels(isDark);
}

function _updateToggleLabels(isDark) {
  var label = isDark ? 'Passa al tema chiaro' : 'Passa al tema scuro';
  // Aggiorna tutti i pulsanti toggle presenti nella pagina
  document.querySelectorAll('[id="theme-toggle"]').forEach(function (btn) {
    btn.setAttribute('aria-label', label);
  });
}

// Sincronizza l'aria-label al caricamento
document.addEventListener('DOMContentLoaded', function () {
  var isDark = document.documentElement.classList.contains('dark');
  _updateToggleLabels(isDark);

  // Ascolta i cambiamenti di sistema (es. cambio da light a dark mentre la pagina è aperta)
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
    if (!localStorage.getItem('theme')) {
      if (e.matches) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      _updateToggleLabels(e.matches);
    }
  });
});
