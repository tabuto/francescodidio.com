# Task 21 — Cookie Banner GDPR + Google Consent Mode v2

**Area:** PRIVACY / ANALYTICS  
**Dipendenze:** Task 04, Task 05

---

## Descrizione

Realizzare un componente JavaScript **vanilla** (zero dipendenze) per un cookie banner minimale, responsive e conforme al **GDPR** e alle linee guida del **Garante Privacy Italiano**.

Il componente deve integrare la **Google Consent Mode v2**, impostando tutti i consensi a `denied` per default e aggiornandoli a `granted` solo su accettazione esplicita dell'utente.

---

## File da creare

| File | Descrizione |
|------|-------------|
| `assets/js/cookie-consent.js` | Logica banner + Consent Mode v2 |
| _(opzionale)_ `assets/css/cookie-consent.css` | Stili banner se non gestiti inline |

---

## Specifiche tecniche

### 1. Struttura HTML del banner (iniettata via JS)

```html
<div id="cc-banner" role="dialog" aria-modal="true" aria-label="Preferenze cookie">
  <!-- X in alto a destra — equivale a rifiuta -->
  <button id="cc-close" aria-label="Chiudi e rifiuta tutti i cookie">✕</button>

  <div class="cc-content">
    <p>
      Questo sito usa cookie tecnici necessari e, previo consenso, cookie analitici
      (Google Analytics) per migliorare l'esperienza. Per saperne di più consulta la
      <a href="/privacy.html">Privacy Policy</a>.
    </p>
    <div class="cc-actions">
      <button id="cc-accept-all">Accetta tutti</button>
      <button id="cc-reject-all">Rifiuta tutti</button>
      <button id="cc-customize">Personalizza</button>
    </div>
  </div>
</div>
```

### 2. Pannello "Personalizza" (espandibile inline)

```html
<div id="cc-preferences" hidden>
  <label>
    <input type="checkbox" id="cc-analytics" />
    Cookie analitici (Google Analytics) — misurazione delle visite
  </label>
  <button id="cc-save-prefs">Salva preferenze</button>
</div>
```

### 3. Pulsante flottante "Privacy"

```html
<button id="cc-reopen" aria-label="Gestisci preferenze cookie">
  Privacy
</button>
```

- Sempre visibile in basso a sinistra dopo la prima scelta
- Al click riapre il banner (reset visuale, non cancella il cookie)

---

## Cookie `cc_status`

| Campo | Valore |
|-------|--------|
| Nome | `cc_status` |
| Valori possibili | `accepted` · `rejected` · `custom:{analytics:true\|false}` |
| Scadenza | 6 mesi |
| SameSite | `Lax` |
| Path | `/` |

Logica all'avvio:
- Se `cc_status` **non esiste** → mostra il banner
- Se `cc_status === 'accepted'` → inietta GA, nascondi banner, mostra pulsante flottante
- Se `cc_status === 'rejected'` → non iniettare GA, nascondi banner, mostra pulsante flottante
- Se `cc_status === 'custom:...'` → applica preferenze parziali

---

## Google Consent Mode v2

### Default (da inserire PRIMA del tag GA, nel `<head>`)

```html
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }
  gtag('consent', 'default', {
    analytics_storage:    'denied',
    ad_storage:           'denied',
    ad_user_data:         'denied',
    ad_personalization:   'denied',
    functionality_storage:'granted',
    security_storage:     'granted',
    wait_for_update: 500
  });
</script>
```

### Update su consenso (chiamato da `cookie-consent.js`)

```js
// Solo se utente accetta analytics
gtag('consent', 'update', {
  analytics_storage: 'granted'
});

// Se rifiuta
gtag('consent', 'update', {
  analytics_storage: 'denied'
});
```

### Iniezione script GA (solo dopo consenso)

```js
function injectGA(measurementId) {
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + measurementId;
  document.head.appendChild(s);
  gtag('js', new Date());
  gtag('config', measurementId);
}
```

> ⚠️ Il Measurement ID (`G-XXXXXXXXXX`) deve essere configurato prima del deploy.

---

## Stile (Tailwind-compatible, no classi custom richieste)

Il banner deve:
- Apparire in **basso**, larghezza piena su mobile, max-width contenuta su desktop
- Avere sfondo bianco/dark con bordo superiore (coerente col tema del sito)
- Supportare **dark mode** (`prefers-color-scheme` o classe `dark` su `<html>`)
- Essere **responsive** a tutti i breakpoint

Suggerimento classi Tailwind da usare nell'HTML iniettato:
```
fixed bottom-0 left-0 right-0 z-[9999]
bg-white dark:bg-gray-900
border-t border-gray-200 dark:border-gray-700
p-4 sm:p-6
shadow-lg
```

---

## Integrazione nelle pagine

In `index.html` e `cv.html`, aggiungere prima di `</body>`:

```html
<script src="assets/js/cookie-consent.js"></script>
```

Il blocco **Consent Mode default** va inserito nel `<head>`, prima di qualsiasi altro script GA.

---

## Criteri di accettazione (Done When)

- [ ] Banner appare al primo accesso (nessun cookie `cc_status` presente)
- [ ] `X` chiude il banner e salva `cc_status=rejected`
- [ ] "Rifiuta tutti" salva `cc_status=rejected`, non inietta GA
- [ ] "Accetta tutti" salva `cc_status=accepted`, inietta GA, aggiorna Consent Mode
- [ ] "Personalizza" mostra il pannello con checkbox analytics
- [ ] "Salva preferenze" salva `cc_status=custom:...` e applica consensi selettivi
- [ ] Cookie `cc_status` scade dopo 6 mesi
- [ ] Al secondo accesso il banner NON appare (cookie presente)
- [ ] Pulsante flottante "Privacy" visibile dopo la prima scelta
- [ ] Google Consent Mode v2 default impostato a `denied` prima del caricamento GA
- [ ] GA iniettato **solo** se `analytics_storage: granted`
- [ ] Banner accessibile: `role="dialog"`, `aria-modal`, focus trap, navigabile da tastiera
- [ ] Dark mode supportata
- [ ] Nessuna libreria esterna — vanilla JS puro
- [ ] Funziona su Chrome, Firefox, Safari, Edge

---

## Note legali

- Il banner deve consentire il **rifiuto facile** quanto l'accettazione (Garante IT, 2021)
- La `X` equivale a rifiuto esplicito (non semplice chiusura)
- Non usare pattern ingannevoli (dark patterns): i pulsanti "Accetta" e "Rifiuta" devono avere la stessa prominenza visiva
- Aggiungere link alla Privacy Policy (da creare in futuro come `privacy.html`)
