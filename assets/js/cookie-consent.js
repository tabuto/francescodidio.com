/**
 * Cookie Consent + Google Consent Mode v2
 * Vanilla JS — zero dipendenze
 * Conforme GDPR e Garante Privacy Italiano (provv. 2021)
 *
 * ⚠️  NOTE: L'ID UA-11438577-7 è Universal Analytics (deprecato luglio 2023).
 *     Aggiornare a un Measurement ID GA4 (formato G-XXXXXXXXXX) al più presto.
 */

(function () {
  'use strict';

  var GA_ID = 'G-FEB9WK0152';
  var COOKIE_NAME = 'cc_status';
  var COOKIE_DAYS = 180; // 6 mesi

  // ─── Utilità cookie ──────────────────────────────────────────────────────────

  function setCookie(name, value, days) {
    var expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = name + '=' + encodeURIComponent(value) +
      '; expires=' + expires + '; path=/; SameSite=Lax';
  }

  function getCookie(name) {
    var match = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
    return match ? decodeURIComponent(match[1]) : null;
  }

  // ─── Google Consent Mode v2 ───────────────────────────────────────────────────

  function grantAnalytics() {
    if (window.gtag) {
      window.gtag('consent', 'update', { analytics_storage: 'granted' });
    }
  }

  function denyAnalytics() {
    if (window.gtag) {
      window.gtag('consent', 'update', { analytics_storage: 'denied' });
    }
  }

  function injectGA() {
    if (document.getElementById('ga-script')) return;
    var s = document.createElement('script');
    s.id = 'ga-script';
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    if (!window.gtag) {
      window.gtag = function () { window.dataLayer.push(arguments); };
    }
    window.gtag('js', new Date());
    window.gtag('config', GA_ID);
  }

  // ─── Applica stato salvato ────────────────────────────────────────────────────

  function applyConsent(status) {
    if (status === 'accepted') {
      grantAnalytics();
      injectGA();
    } else if (status && status.indexOf('custom:') === 0) {
      var analytics = status.indexOf('analytics:true') !== -1;
      if (analytics) { grantAnalytics(); injectGA(); }
      else { denyAnalytics(); }
    } else {
      denyAnalytics();
    }
  }

  // ─── Stili inline ─────────────────────────────────────────────────────────────

  function injectStyles() {
    if (document.getElementById('cc-styles')) return;
    var isDark = document.documentElement.classList.contains('dark');
    var style = document.createElement('style');
    style.id = 'cc-styles';
    style.textContent = [
      '#cc-banner{',
        'position:fixed;bottom:0;left:0;right:0;z-index:9999;',
        'background:' + (isDark ? '#111827' : '#ffffff') + ';',
        'color:' + (isDark ? '#f3f4f6' : '#111827') + ';',
        'border-top:1px solid ' + (isDark ? '#374151' : '#e5e7eb') + ';',
        'padding:1rem 1.25rem;',
        'box-shadow:0 -4px 24px rgba(0,0,0,0.12);',
        'font-family:inherit;font-size:0.875rem;line-height:1.5;',
        'animation:cc-slide-up 0.3s ease;',
      '}',
      '@keyframes cc-slide-up{from{transform:translateY(100%)}to{transform:translateY(0)}}',
      '#cc-banner .cc-inner{max-width:900px;margin:0 auto;position:relative;}',
      '#cc-close{',
        'position:absolute;top:0;right:0;',
        'background:none;border:none;cursor:pointer;',
        'font-size:1.125rem;padding:0.25rem 0.5rem;',
        'color:' + (isDark ? '#9ca3af' : '#6b7280') + ';',
        'line-height:1;',
      '}',
      '#cc-close:hover{color:' + (isDark ? '#f3f4f6' : '#111827') + ';}',
      '#cc-banner p{margin:0 2rem 0.75rem 0;}',
      '#cc-banner a{color:#0284c7;text-decoration:underline;}',
      '#cc-actions{display:flex;flex-wrap:wrap;gap:0.5rem;margin-top:0.75rem;}',
      '#cc-accept-all,#cc-reject-all,#cc-customize{',
        'padding:0.5rem 1rem;border-radius:0.5rem;cursor:pointer;',
        'font-size:0.8125rem;font-weight:600;border:1.5px solid transparent;',
        'transition:background 0.15s,color 0.15s;',
      '}',
      '#cc-accept-all{background:#0284c7;color:#fff;border-color:#0284c7;}',
      '#cc-accept-all:hover{background:#0369a1;border-color:#0369a1;}',
      '#cc-reject-all{',
        'background:transparent;',
        'border-color:' + (isDark ? '#4b5563' : '#d1d5db') + ';',
        'color:' + (isDark ? '#f3f4f6' : '#374151') + ';',
      '}',
      '#cc-reject-all:hover{border-color:#0284c7;color:#0284c7;}',
      '#cc-customize{',
        'background:transparent;',
        'border-color:' + (isDark ? '#4b5563' : '#d1d5db') + ';',
        'color:' + (isDark ? '#9ca3af' : '#6b7280') + ';',
      '}',
      '#cc-customize:hover{border-color:#0284c7;color:#0284c7;}',
      '#cc-preferences{',
        'margin-top:0.875rem;padding:0.875rem;border-radius:0.5rem;',
        'background:' + (isDark ? '#1f2937' : '#f9fafb') + ';',
        'border:1px solid ' + (isDark ? '#374151' : '#e5e7eb') + ';',
      '}',
      '#cc-preferences label{display:flex;align-items:flex-start;gap:0.5rem;cursor:pointer;font-size:0.8125rem;}',
      '#cc-preferences input{margin-top:0.2rem;cursor:pointer;accent-color:#0284c7;}',
      '#cc-save-prefs{',
        'margin-top:0.75rem;padding:0.4rem 0.875rem;',
        'background:#0284c7;color:#fff;border:none;border-radius:0.5rem;',
        'cursor:pointer;font-size:0.8125rem;font-weight:600;',
      '}',
      '#cc-save-prefs:hover{background:#0369a1;}',
      /* Pulsante flottante */
      '#cc-reopen{',
        'position:fixed;bottom:1rem;left:1rem;z-index:9998;',
        'padding:0.35rem 0.75rem;border-radius:999px;',
        'background:' + (isDark ? '#1f2937' : '#f3f4f6') + ';',
        'color:' + (isDark ? '#9ca3af' : '#6b7280') + ';',
        'border:1px solid ' + (isDark ? '#374151' : '#e5e7eb') + ';',
        'font-size:0.75rem;font-weight:600;cursor:pointer;',
        'box-shadow:0 1px 4px rgba(0,0,0,0.15);',
        'transition:background 0.15s,color 0.15s;',
      '}',
      '#cc-reopen:hover{background:#0284c7;color:#fff;border-color:#0284c7;}',
    ].join('');
    document.head.appendChild(style);
  }

  // ─── Banner HTML ──────────────────────────────────────────────────────────────

  function createBanner() {
    var div = document.createElement('div');
    div.id = 'cc-banner';
    div.setAttribute('role', 'dialog');
    div.setAttribute('aria-modal', 'true');
    div.setAttribute('aria-label', 'Preferenze cookie');
    div.innerHTML =
      '<div class="cc-inner">' +
        '<button id="cc-close" aria-label="Chiudi e rifiuta tutti i cookie" title="Rifiuta e chiudi">✕</button>' +
        '<p>Questo sito usa cookie tecnici necessari e, previo consenso, cookie analitici ' +
        '(Google Analytics) per misurare le visite e migliorare l\'esperienza.</p>' +
        '<div id="cc-actions">' +
          '<button id="cc-accept-all">Accetta tutti</button>' +
          '<button id="cc-reject-all">Rifiuta tutti</button>' +
          '<button id="cc-customize">Personalizza</button>' +
        '</div>' +
        '<div id="cc-preferences" hidden>' +
          '<label>' +
            '<input type="checkbox" id="cc-analytics" />' +
            '<span>Cookie analitici (Google Analytics) — misurazione anonima delle visite</span>' +
          '</label>' +
          '<br><button id="cc-save-prefs">Salva preferenze</button>' +
        '</div>' +
      '</div>';
    return div;
  }

  function createReopenBtn() {
    var btn = document.createElement('button');
    btn.id = 'cc-reopen';
    btn.setAttribute('aria-label', 'Gestisci preferenze cookie');
    btn.textContent = '🍪 Privacy';
    return btn;
  }

  // ─── Logica principale ────────────────────────────────────────────────────────

  function hideBanner(banner) {
    if (banner) banner.remove();
  }

  function showReopenBtn() {
    if (document.getElementById('cc-reopen')) return;
    var btn = createReopenBtn();
    document.body.appendChild(btn);
    btn.addEventListener('click', function () {
      if (!document.getElementById('cc-banner')) {
        var b = createBanner();
        document.body.appendChild(b);
        bindBannerEvents(b);
        b.querySelector('#cc-accept-all').focus();
      }
    });
  }

  function accept(banner) {
    setCookie(COOKIE_NAME, 'accepted', COOKIE_DAYS);
    grantAnalytics();
    injectGA();
    hideBanner(banner);
    showReopenBtn();
  }

  function reject(banner) {
    setCookie(COOKIE_NAME, 'rejected', COOKIE_DAYS);
    denyAnalytics();
    hideBanner(banner);
    showReopenBtn();
  }

  function savePrefs(banner) {
    var analytics = document.getElementById('cc-analytics').checked;
    var value = 'custom:analytics:' + analytics;
    setCookie(COOKIE_NAME, value, COOKIE_DAYS);
    if (analytics) { grantAnalytics(); injectGA(); }
    else { denyAnalytics(); }
    hideBanner(banner);
    showReopenBtn();
  }

  function bindBannerEvents(banner) {
    banner.querySelector('#cc-close').addEventListener('click', function () { reject(banner); });
    banner.querySelector('#cc-reject-all').addEventListener('click', function () { reject(banner); });
    banner.querySelector('#cc-accept-all').addEventListener('click', function () { accept(banner); });
    banner.querySelector('#cc-customize').addEventListener('click', function () {
      var prefs = banner.querySelector('#cc-preferences');
      prefs.hidden = !prefs.hidden;
      if (!prefs.hidden) prefs.querySelector('#cc-analytics').focus();
    });
    banner.querySelector('#cc-save-prefs').addEventListener('click', function () { savePrefs(banner); });

    // Tasto ESC = rifiuta
    document.addEventListener('keydown', function onKey(e) {
      if (e.key === 'Escape') { reject(banner); document.removeEventListener('keydown', onKey); }
    });
  }

  // ─── Init ─────────────────────────────────────────────────────────────────────

  function init() {
    injectStyles();
    var status = getCookie(COOKIE_NAME);

    if (status) {
      // Consenso già espresso: applica e mostra pulsante flottante
      applyConsent(status);
      showReopenBtn();
    } else {
      // Prima visita: mostra banner
      var banner = createBanner();
      document.body.appendChild(banner);
      bindBannerEvents(banner);
      // Focus primo pulsante per accessibilità
      banner.querySelector('#cc-accept-all').focus();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
