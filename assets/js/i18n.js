// Applica la lingua PRIMA del primo paint per evitare FOUC linguistico
(function () {
  var saved = localStorage.getItem('lang');
  var browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase().startsWith('en') ? 'en' : 'it';
  var lang = saved || browserLang;
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('data-lang', lang);
})();

var I18N = {
  it: {
    /* ─── META ─── */
    'meta.title.index':       'Francesco di Dio — Technical Manager & Engineering Leader',
    'meta.description.index': 'Francesco di Dio, Technical Manager: adozione della GenAI e industrializzazione dei workflow agentici nel software enterprise (GitHub Copilot, MCP, RAG, Spec-Driven). Background Java EE/Quarkus.',
    'meta.title.cv':          'CV — Francesco di Dio · Technical Manager',
    'meta.description.cv':    'Curriculum vitae di Francesco di Dio, Technical Manager ed Engineering Leader specializzato in Java, Quarkus, OAuth2/OIDC e sviluppo GenAI Spec-Driven.',
    'meta.title.privacy':     'Privacy Policy — Francesco di Dio',
    'meta.description.privacy': 'Privacy Policy di francescodidio.com. Informazioni sul trattamento dei dati personali degli utenti ai sensi del GDPR.',
    'meta.og.locale': 'it_IT',

    /* ─── TOGGLE ─── */
    'lang.toggle.label': 'Switch to English',

    /* ─── NAVBAR (index) ─── */
    'nav.about':     'About',
    'nav.portfolio': 'Portfolio',
    'nav.cv':        'CV',
    'nav.contact':   'Contatti',

    /* ─── HERO ─── */
    'hero.cta.portfolio': 'Vedi Portfolio',
    'hero.cta.cv':        'Curriculum →',

    /* ─── ABOUT ─── */
    'about.p1': 'Technical Manager che guida l\'adozione della <strong>GenAI</strong> nella produzione di software enterprise: industrializzo i workflow agentici end to end, dai requisiti, offerte tecniche e stime fino a design, scomposizione in task e codice. Uso sul campo <strong>GitHub Copilot</strong>, server <strong>MCP</strong>, <strong>RAG</strong>, <strong>Spec-Driven Development</strong>, agent skill e workflow basati su LLM.',
    'about.p2': 'Provengo da oltre 15 anni come <strong>Technical Lead</strong> su progetti enterprise <strong>Java EE</strong> e <strong>Quarkus</strong>: architetture a microservizi, <strong>SSO &amp; Identity Management</strong> per oltre 5 milioni di account, sicurezza <strong>OAuth2/OIDC</strong>, nei settori GDO, energia e pubblica amministrazione.',
    'about.p3': 'Sempre interessato a confrontarmi su come la GenAI stia ridefinendo i processi di sviluppo enterprise. Parliamone!',

    /* ─── SOCIAL ─── */
    'social.label': 'Trovami su',

    /* ─── PORTFOLIO ─── */
    'portfolio.h2':       'Portfolio',
    'portfolio.subtitle': 'Alcuni progetti personali a cui ho lavorato nel tempo libero.',
    'portfolio.jsimlife.desc':    'Simulatore A-Life in Java 6. Ambiente dinamico con forme di vita dotate di codice genetico e reti neurali. Licenza MIT.',
    'portfolio.pyspendless.desc': 'Web app per la gestione condivisa delle spese familiari in Python 3 e Flask, deployata su PythonAnywhere con integrazione OAuth2 Google. Sviluppata interamente con approccio spec-driven.',
    'portfolio.nerdsland.desc':   'Laboratorio creativo dove la cultura geek incontra la comunicazione strategica. Trend complessi, innovazioni tecnologiche e pop culture trasformati in contenuti narrativi capaci di generare community.',
    'portfolio.occhipinti.desc':  'Sito portfolio per Antonio Occhipinti, maestro dell\'acquerello. Progettato e sviluppato interamente con approccio GenAI Spec-Driven, con stack statico senza framework o build step, contenuti Markdown caricati a runtime, toggle IT/EN, lightbox per le gallerie e cache-busting sugli asset dinamici.',
    'portfolio.cta':           'Vedi progetto →',
    'portfolio.cta.occhipinti':'Vedi il sito →',

    /* ─── CV PREVIEW (sezione in index.html) ─── */
    'cv.h2':          'Curriculum',
    'cv.subtitle':    'Un riepilogo della mia carriera professionale.',
    'cv.exp.label':   'Esperienze',
    'cv.skills.label':'Competenze',
    'cv.edu.label':   'Formazione',
    'cv.exp1.date':   '01/2026 – attualmente',
    'cv.exp1.role':   'Technical Manager',
    'cv.exp1.desc':   'Monitoraggio economico, allocazione e crescita risorse, guida tecnica di progetti con focus su GenAI.',
    'cv.exp2.date':   '09/2025 – 01/2026',
    'cv.exp2.role':   'Team Leader — Batch Anonimizzazione',
    'cv.exp2.desc':   'Anonimizzazione GDPR di 5M record con workflow 100% Spec-Driven GenAI. Stack: Java 8, Spring Batch, DB2.',
    'cv.exp3.date':   '09/2019 – 09/2025',
    'cv.exp3.role':   'Team Leader — Project Manager',
    'cv.exp3.desc':   'Progetti GDO: SSO con 5M+ account, MFA, OAuth2/OIDC. Stack: Quarkus, Oracle DB 19, Angular.js.',
    'cv.edu.degree':  'Laurea in Ingegneria Informatica',
    'cv.edu.uni':     'Università degli Studi di Palermo · 100/110 · 2010',
    'cv.cta':         'Vedi il curriculum completo',

    /* ─── CONTACT ─── */
    'contact.h2':  'Contattami',
    'contact.p':   'Sono disponibile per collaborazioni, opportunità professionali o semplicemente per una chiacchierata tecnica.',
    'contact.cta': 'Scrivimi',

    /* ─── FOOTER (index) ─── */
    'footer.credit':   'Realizzato con amore, IA, HTML5 + Tailwind CSS',
    'footer.about':    'About',
    'footer.portfolio':'Portfolio',
    'footer.cv':       'CV',
    'footer.contact':  'Contatti',
    'footer.privacy':  'Privacy',

    /* ─── PAGINA CV ─── */
    'cv.page.nav.print':       'Stampa / PDF',
    'cv.page.nav.print.label': 'Stampa o salva come PDF',
    'cv.page.subtitle':        'IT Consultant — JavaEE & Python',
    'cv.page.summary.h2':      'Profilo',
    'cv.page.summary.p':       'Manager tecnico con oltre 2 anni di esperienza nella guida di progetti critici per la GDO, focalizzato sull\'integrazione tra ingegneria del software tradizionale e innovazione GenAI. Leadership nell\'adozione di metodologie <strong>Spec-Driven</strong> per la produzione di software enterprise. Gestione di progetti <strong>SSO &amp; Identity Management</strong> per oltre 5 milioni di account, coordinando team multidisciplinari. Architetture microservizi (<strong>Quarkus</strong>), sicurezza (<strong>OAuth2/OIDC</strong>) e integrazione di sistemi complessi. Laureato in Ingegneria Informatica all\'Università di Palermo con 100/110.',
    'cv.page.exp.h2':          'Esperienze',
    'cv.page.exp.1.date':      '01/2026 – attualmente',
    'cv.page.exp.1.desc':      'Responsabilità del monitoraggio e avanzamento economico di progetti, allocazione, crescita e valutazione delle risorse. Guida tecnica di progetti promuovendo i driver e i behavior aziendali.',
    'cv.page.exp.1.skills':    '<strong>Skill:</strong> Project Management, Team Leading, GenAI',
    'cv.page.exp.2.date':      '09/2025 – 01/2026',
    'cv.page.exp.2.project':   'Engineering S.p.A. — Batch Anonimizzazione',
    'cv.page.exp.2.desc':      'Soluzione enterprise per l\'anonimizzazione GDPR di 5 milioni di record per un primario player nazionale. Banco di prova per l\'adozione di un workflow 100% Spec-Driven GenAI: trasformazione di requisiti funzionali complessi in codice di produzione tramite GitHub Copilot CLI. Elaborazione di 2 batch massivi (5M+ dati) con elevati standard di sicurezza e performance.',
    'cv.page.exp.2.stack':     '<strong>Stack:</strong> Java 8, Spring Batch, DB2, spec-driven development, GitHub Copilot CLI',
    'cv.page.exp.3.date':      '09/2019 – 09/2025',
    'cv.page.exp.3.project':   'Engineering S.p.A. — Settore GDO',
    'cv.page.exp.3.desc':      'Project Manager e referente tecnico per progetti strategici di un grande player nel settore della GDO. Gestione end-to-end di un sistema SSO con oltre 5 milioni di account: MFA, OAuth2/OpenID Connect, architettura microservizi in Quarkus e interfacce Angular.js. Coordinamento di team cross-funzionali e comunicazione tecnica verso gli stakeholder.',
    'cv.page.exp.3.stack':     '<strong>Stack:</strong> Java 8, OracleWebLogic 12.2, Quarkus, Oracle DB 19, Angular.js, OAuth2/OIDC',
    'cv.page.exp.4.date':      '08/2018 – 09/2019',
    'cv.page.exp.4.project':   'Engineering S.p.A. — Progetto EBAAS Poste',
    'cv.page.exp.4.desc':      'Analisi AS IS delle competenze e dei processi operativi di un gruppo di sviluppo proveniente da una nuova società acquisita. Definizione dei processi e delle risorse TO BE per la costituzione di laboratori dedicati sul territorio nazionale. Il progetto riguarda la piattaforma eBAAS di gestione di prodotti assicurativi e finanziari di Poste Italiane.',
    'cv.page.exp.4.stack':     '<strong>Stack:</strong> Java 8, OracleWebLogic 12.2, JAX-WS, Oracle DB 12',
    'cv.page.exp.5.date':      '05/2016 – 08/2018',
    'cv.page.exp.5.project':   'Engineering S.p.A. — Progetto Exabeat',
    'cv.page.exp.5.desc':      'Team Leader sul modulo "Control Process Module" del progetto Exabeat: piattaforma BigData internazionale (Italia–Spagna) per la gestione di misure elettriche per ENDESA.',
    'cv.page.exp.5.stack':     '<strong>Stack:</strong> Java 7, Scala 1.0, Spark 1.6, HBase 0.97, Phoenix, Maven, PostgreSQL, Hadoop, WildFly 9, SVN',
    'cv.page.exp.6.date':      '09/2013 – 05/2016',
    'cv.page.exp.6.desc':      'Analisi, progettazione e sviluppo sul progetto Prince, Document Management System che implementa la normativa sul Protocollo Informatico per INAIL.',
    'cv.page.exp.6.stack':     '<strong>Stack:</strong> Java 6 J2EE, EJB 3.0, Spring, Oracle DB 11g, WebLogic 10.3.6, Quartz, Maven, SVN, NEXUS, RTC',
    'cv.page.exp.7.date':      '04/2011 – 09/2013',
    'cv.page.exp.7.project':   'DSTech',
    'cv.page.exp.7.desc':      'Sviluppo di un DMS per il Protocollo Informatico per INAIL. Bug fixing, sviluppo di nuove funzionalità, integrazione con web service di firma digitale e data remediation.',
    'cv.page.exp.7.stack':     '<strong>Stack:</strong> Java 6 J2EE, EJB 3.0, JSF, Oracle DB 11g, JBoss EAP 5.1, JasperReport, JavaMail, SVN',
    'cv.page.exp.8.date':      '03/2011 – 04/2011',
    'cv.page.exp.8.desc':      'Stage full-time su tecnologie JavaEE: Servlet, JSP, JavaScript, Struts2, Hibernate, Oracle PL-SQL.',
    'cv.page.edu.h2':          'Formazione',
    'cv.page.edu.1.title':     'Laurea in Ingegneria Informatica',
    'cv.page.edu.1.uni':       'Università degli Studi di Palermo',
    'cv.page.edu.1.score':     'Voto: 100/110 · Tesi: File System in Linux System',
    'cv.page.edu.2.title':     'Training Oracle WebCenter Content 11g (32h)',
    'cv.page.edu.2.uni':       'Oracle University · Engineering, Roma',
    'cv.page.edu.2.desc':      'Installazione e amministrazione di Oracle WebCenter Content 11g.',
    'cv.page.edu.3.title':     'Diploma Scientifico',
    'cv.page.edu.3.uni':       'Liceo Scientifico "Elio Vittorini", Gela (CL)',
    'cv.page.edu.3.score':     'Voto: 90/100',
    'cv.page.skills.h2':       'Competenze',
    'cv.page.skills.languages':'Linguaggi & Framework',
    'cv.page.skills.tools':    'Ambienti & Strumenti',
    'cv.page.lang.h2':         'Lingue',
    'cv.page.lang.it.name':    'Italiano',
    'cv.page.lang.it.level':   'Madrelingua',
    'cv.page.lang.en.name':    'Inglese',
    'cv.page.lang.en.level':   'Professionale',
    'cv.page.footer.date':     'Ultimo aggiornamento: marzo 2026',
    'cv.page.footer.privacy':  'Privacy Policy',

    /* ─── PAGINA PRIVACY ─── */
    'privacy.page.legal.label': 'Informativa legale',
    'privacy.page.h1':          'Privacy Policy',
    'privacy.page.print.hint':  'Questa pagina può essere stampata utilizzando il comando di stampa presente nelle impostazioni di qualsiasi browser.',
    'privacy.page.nav.home':    '← Home',
    'privacy.page.nav.cv':      'CV',

    /* ─── PRIVACY BODY ─── */
    'privacy.summary.label': 'Riepilogo',
    'privacy.summary.p1': 'Questa Applicazione raccoglie alcuni Dati Personali dei propri Utenti.',
    'privacy.summary.p2': 'Dati Personali trattati per le seguenti finalità e utilizzando i seguenti servizi:',
    'privacy.summary.stats.name': 'Statistica',
    'privacy.summary.stats.detail': 'Google Analytics (Universal Analytics) — <span class="italic">Dati Personali: Dati di utilizzo; Strumenti di Tracciamento</span>',
    'privacy.body.intro.p': 'Questa Applicazione raccoglie alcuni Dati Personali dei propri Utenti.',
    'privacy.body.titolare.h2': 'Titolare del Trattamento dei Dati',
    'privacy.body.tipologie.h2': 'Tipologie di Dati raccolti',
    'privacy.body.tipologie.p1': 'Fra i Dati Personali raccolti da questa Applicazione, in modo autonomo o tramite terze parti, ci sono: <strong>Strumenti di Tracciamento</strong> e <strong>Dati di utilizzo</strong>.',
    'privacy.body.tipologie.p2': 'Dettagli completi su ciascuna tipologia di Dati Personali raccolti sono forniti nelle sezioni dedicate di questa privacy policy o mediante specifici testi informativi visualizzati prima della raccolta dei Dati stessi.',
    'privacy.body.tipologie.p3': 'I Dati Personali possono essere liberamente forniti dall\'Utente o, nel caso di Dati di Utilizzo, raccolti automaticamente durante l\'uso di questa Applicazione.',
    'privacy.body.tipologie.p4': 'Se non diversamente specificato, tutti i Dati richiesti da questa Applicazione sono obbligatori. Se l\'Utente rifiuta di comunicarli, potrebbe essere impossibile per questa Applicazione fornire il Servizio. Nei casi in cui questa Applicazione indichi alcuni Dati come facoltativi, gli Utenti sono liberi di astenersi dal comunicare tali Dati, senza che ciò abbia alcuna conseguenza sulla disponibilità del Servizio o sulla sua operatività. Gli Utenti che dovessero avere dubbi su quali Dati siano obbligatori sono incoraggiati a contattare il Titolare.',
    'privacy.body.tipologie.p5': 'L\'eventuale utilizzo di Cookie — o di altri strumenti di tracciamento — da parte di questa Applicazione o dei titolari dei servizi terzi utilizzati da questa Applicazione ha la finalità di fornire il Servizio richiesto dall\'Utente, oltre alle ulteriori finalità descritte nel presente documento.',
    'privacy.body.tipologie.p6': 'L\'Utente si assume la responsabilità dei Dati Personali di terzi ottenuti, pubblicati o condivisi mediante questa Applicazione.',
    'privacy.body.modalita.h2': 'Modalità e luogo del trattamento dei Dati raccolti',
    'privacy.body.modalita.h3': 'Modalità di trattamento',
    'privacy.body.modalita.p1': 'Il Titolare adotta le opportune misure di sicurezza volte ad impedire l\'accesso, la divulgazione, la modifica o la distruzione non autorizzate dei Dati Personali.',
    'privacy.body.modalita.p2': 'Il trattamento viene effettuato mediante strumenti informatici e/o telematici, con modalità organizzative e con logiche strettamente correlate alle finalità indicate. Oltre al Titolare, in alcuni casi, potrebbero avere accesso ai Dati altri soggetti coinvolti nell\'organizzazione di questa Applicazione (personale amministrativo, commerciale, marketing, legali, amministratori di sistema) ovvero soggetti esterni (come fornitori di servizi tecnici terzi, corrieri postali, hosting provider, società informatiche, agenzie di comunicazione) nominati anche, se necessario, Responsabili del Trattamento da parte del Titolare. L\'elenco aggiornato dei Responsabili potrà sempre essere richiesto al Titolare del Trattamento.',
    'privacy.body.luogo.h3': 'Luogo',
    'privacy.body.luogo.p1': 'I Dati sono trattati presso le sedi operative del Titolare ed in ogni altro luogo in cui le parti coinvolte nel trattamento siano localizzate. Per ulteriori informazioni, contatta il Titolare.',
    'privacy.body.luogo.p2': 'I Dati Personali dell\'Utente potrebbero essere trasferiti in un paese diverso da quello in cui l\'Utente si trova. Per ottenere ulteriori informazioni sul luogo del trattamento l\'Utente può fare riferimento alla sezione relativa ai dettagli sul trattamento dei Dati Personali.',
    'privacy.body.conservazione.h3': 'Periodo di conservazione',
    'privacy.body.conservazione.p': 'Se non diversamente indicato in questo documento, i Dati Personali sono trattati e conservati per il tempo richiesto dalla finalità per la quale sono stati raccolti e potrebbero essere conservati per un periodo più lungo a causa di eventuali obbligazioni legali o sulla base del consenso degli Utenti.',
    'privacy.body.finalita.h2': 'Finalità del Trattamento dei Dati raccolti',
    'privacy.body.finalita.p1': 'I Dati dell\'Utente sono raccolti per consentire al Titolare di fornire il Servizio, adempiere agli obblighi di legge, rispondere a richieste o azioni esecutive, tutelare i propri diritti ed interessi (o quelli di Utenti o di terze parti), individuare eventuali attività dolose o fraudolente, nonché per le seguenti finalità: <strong>Statistica</strong>.',
    'privacy.body.finalita.p2': 'Per ottenere informazioni dettagliate sulle finalità del trattamento e sui Dati Personali trattati per ciascuna finalità, l\'Utente può fare riferimento alla sezione "Dettagli sul trattamento dei Dati Personali".',
    'privacy.body.dettagli.h2': 'Dettagli sul trattamento dei Dati Personali',
    'privacy.body.dettagli.p': 'I Dati Personali sono raccolti per le seguenti finalità ed utilizzando i seguenti servizi:',
    'privacy.body.dettagli.statistica.h3': 'Statistica',
    'privacy.body.dettagli.statistica.p1': 'I servizi contenuti nella presente sezione permettono al Titolare di monitorare e analizzare i dati di traffico e servono a tener traccia del comportamento dell\'Utente.',
    'privacy.body.dettagli.statistica.p2': '<strong>Google Analytics</strong> — Servizio di analisi web fornito da Google LLC. Google utilizza i Dati raccolti per tracciare ed esaminare l\'utilizzo di questa Applicazione, compilare report e condividerli con gli altri servizi sviluppati da Google. Google potrebbe utilizzare i Dati raccolti per contestualizzare e personalizzare gli annunci del proprio network pubblicitario. L\'integrazione di Google Analytics rispetta le disposizioni della Google Consent Mode v2: i cookie di analytics vengono attivati <strong>solo previo consenso esplicito</strong> dell\'Utente tramite il banner cookies presente su questo sito.',
    'privacy.body.dettagli.statistica.p3': 'Dati Personali trattati: Strumenti di Tracciamento; Dati di utilizzo.<br>Luogo del trattamento: Stati Uniti — <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.',
    'privacy.body.ulteriori.h2': 'Ulteriori informazioni per gli utenti',
    'privacy.body.baselegale.h3': 'Base giuridica del trattamento',
    'privacy.body.baselegale.p': 'Il Titolare tratta Dati Personali relativi all\'Utente in caso sussista una delle seguenti condizioni:',
    'privacy.body.baselegale.li1': 'l\'Utente ha prestato il consenso per una o più finalità specifiche;',
    'privacy.body.baselegale.li2': 'il trattamento è necessario all\'esecuzione di un contratto con l\'Utente e/o all\'esecuzione di misure precontrattuali;',
    'privacy.body.baselegale.li3': 'il trattamento è necessario per adempiere un obbligo legale al quale è soggetto il Titolare;',
    'privacy.body.baselegale.li4': 'il trattamento è necessario per l\'esecuzione di un compito di interesse pubblico o per l\'esercizio di pubblici poteri di cui è investito il Titolare;',
    'privacy.body.baselegale.li5': 'il trattamento è necessario per il perseguimento del legittimo interesse del Titolare o di terzi.',
    'privacy.body.baselegale.p2': 'È comunque sempre possibile richiedere al Titolare di chiarire la concreta base giuridica di ciascun trattamento ed in particolare di specificare se il trattamento sia basato sulla legge, previsto da un contratto o necessario per concludere un contratto.',
    'privacy.body.conservazione2.h3': 'Ulteriori informazioni sul tempo di conservazione',
    'privacy.body.conservazione2.p1': 'Se non diversamente indicato in questo documento, i Dati Personali sono trattati e conservati per il tempo richiesto dalla finalità per la quale sono stati raccolti e potrebbero essere conservati per un periodo più lungo a causa di eventuali obbligazioni legali o sulla base del consenso degli Utenti. Pertanto:',
    'privacy.body.conservazione2.li1': 'I Dati Personali raccolti per scopi collegati all\'esecuzione di un contratto tra il Titolare e l\'Utente saranno trattenuti sino a quando sia completata l\'esecuzione di tale contratto.',
    'privacy.body.conservazione2.li2': 'I Dati Personali raccolti per finalità riconducibili all\'interesse legittimo del Titolare saranno trattenuti sino al soddisfacimento di tale interesse. L\'Utente può ottenere ulteriori informazioni in merito all\'interesse legittimo perseguito dal Titolare nelle relative sezioni di questo documento o contattando il Titolare.',
    'privacy.body.conservazione2.li3': 'Quando il trattamento è basato sul consenso dell\'Utente, il Titolare può conservare i Dati Personali più a lungo sino a quando detto consenso non venga revocato. Inoltre, il Titolare potrebbe essere obbligato a conservare i Dati Personali per un periodo più lungo per adempiere ad un obbligo di legge o per ordine di un\'autorità.',
    'privacy.body.conservazione2.p2': 'Al termine del periodo di conservazione i Dati Personali saranno cancellati. Pertanto, allo spirare di tale termine il diritto di accesso, cancellazione, rettificazione ed il diritto alla portabilità dei Dati non potranno più essere esercitati.',
    'privacy.body.diritti.h2': 'Diritti dell\'Utente sulla base del Regolamento Generale sulla Protezione dei Dati (GDPR)',
    'privacy.body.diritti.p1': 'Gli Utenti possono esercitare determinati diritti con riferimento ai Dati trattati dal Titolare. In particolare, nei limiti previsti dalla legge, l\'Utente ha il diritto di:',
    'privacy.body.diritti.li1': '<strong>Revocare il consenso in ogni momento.</strong> L\'Utente può revocare il consenso al trattamento dei propri Dati Personali precedentemente espresso.',
    'privacy.body.diritti.li2': '<strong>Opporsi al trattamento dei propri Dati.</strong> L\'Utente può opporsi al trattamento dei propri Dati quando esso avviene in virtù di una base giuridica diversa dal consenso.',
    'privacy.body.diritti.li3': '<strong>Accedere ai propri Dati.</strong> L\'Utente ha diritto ad ottenere informazioni sui Dati trattati dal Titolare, su determinati aspetti del trattamento ed a ricevere una copia dei Dati trattati.',
    'privacy.body.diritti.li4': '<strong>Verificare e chiedere la rettificazione.</strong> L\'Utente può verificare la correttezza dei propri Dati e richiederne l\'aggiornamento o la correzione.',
    'privacy.body.diritti.li5': '<strong>Ottenere la limitazione del trattamento.</strong> L\'Utente può richiedere la limitazione del trattamento dei propri Dati. In tal caso il Titolare non tratterà i Dati per alcun altro scopo se non la loro conservazione.',
    'privacy.body.diritti.li6': '<strong>Ottenere la cancellazione o rimozione dei propri Dati Personali.</strong> L\'Utente può richiedere la cancellazione dei propri Dati da parte del Titolare.',
    'privacy.body.diritti.li7': '<strong>Ricevere i propri Dati o farli trasferire ad altro titolare.</strong> L\'Utente ha diritto di ricevere i propri Dati in formato strutturato, di uso comune e leggibile da dispositivo automatico e, ove tecnicamente fattibile, di ottenerne il trasferimento senza ostacoli ad un altro titolare.',
    'privacy.body.diritti.li8': '<strong>Proporre reclamo.</strong> L\'Utente può proporre un reclamo all\'autorità di controllo della protezione dei dati personali competente o agire in sede giudiziale.',
    'privacy.body.diritti.p2': 'Gli Utenti hanno diritto di ottenere informazioni in merito alla base giuridica per il trasferimento di Dati all\'estero incluso verso qualsiasi organizzazione internazionale regolata dal diritto internazionale o costituita da due o più paesi, come ad esempio l\'ONU, nonché in merito alle misure di sicurezza adottate dal Titolare per proteggere i loro Dati.',
    'privacy.body.opposizione.h3': 'Dettagli sul diritto di opposizione',
    'privacy.body.opposizione.p1': 'Quando i Dati Personali sono trattati nell\'interesse pubblico, nell\'esercizio di pubblici poteri di cui è investito il Titolare oppure per perseguire un interesse legittimo del Titolare, gli Utenti hanno diritto ad opporsi al trattamento per motivi connessi alla loro situazione particolare.',
    'privacy.body.opposizione.p2': 'Si fa presente agli Utenti che, ove i loro Dati fossero trattati con finalità di marketing diretto, possono opporsi al trattamento in qualsiasi momento, gratuitamente e senza fornire alcuna motivazione. Qualora gli Utenti si oppongano al trattamento per finalità di marketing diretto, i Dati Personali non sono più oggetto di trattamento per tali finalità. Per scoprire se il Titolare tratti Dati con finalità di marketing diretto gli Utenti possono fare riferimento alle rispettive sezioni di questo documento.',
    'privacy.body.esercizio.h3': 'Come esercitare i diritti',
    'privacy.body.esercizio.p': 'Eventuali richieste di esercizio dei diritti dell\'Utente possono essere indirizzate al Titolare attraverso i recapiti forniti in questo documento. La richiesta è gratuita e il Titolare risponderà nel più breve tempo possibile, in ogni caso entro un mese, fornendo all\'Utente tutte le informazioni previste dalla legge. Eventuali rettifiche, cancellazioni o limitazioni del trattamento saranno comunicate dal Titolare a ciascuno dei destinatari, se esistenti, a cui sono stati trasmessi i Dati Personali, salvo che ciò si riveli impossibile o implichi uno sforzo sproporzionato. Il Titolare comunica all\'Utente tali destinatari qualora egli lo richieda.',
    'privacy.body.info2.h2': 'Ulteriori informazioni sul trattamento',
    'privacy.body.difesa.h3': 'Difesa in giudizio',
    'privacy.body.difesa.p1': 'I Dati Personali dell\'Utente possono essere utilizzati da parte del Titolare in giudizio o nelle fasi preparatorie alla sua eventuale instaurazione per la difesa da abusi nell\'utilizzo di questa Applicazione o dei Servizi connessi da parte dell\'Utente.',
    'privacy.body.difesa.p2': 'L\'Utente dichiara di essere consapevole che il Titolare potrebbe essere obbligato a rivelare i Dati per ordine delle autorità pubbliche.',
    'privacy.body.specifiche.h3': 'Informative specifiche',
    'privacy.body.specifiche.p': 'Su richiesta dell\'Utente, in aggiunta alle informazioni contenute in questa privacy policy, questa Applicazione potrebbe fornire all\'Utente delle informative aggiuntive e contestuali riguardanti Servizi specifici, o la raccolta ed il trattamento di Dati Personali.',
    'privacy.body.log.h3': 'Log di sistema e manutenzione',
    'privacy.body.log.p': 'Per necessità legate al funzionamento ed alla manutenzione, questa Applicazione e gli eventuali servizi terzi da essa utilizzati potrebbero raccogliere log di sistema, ossia file che registrano le interazioni e che possono contenere anche Dati Personali, quali l\'indirizzo IP Utente.',
    'privacy.body.noncontenute.h3': 'Informazioni non contenute in questa policy',
    'privacy.body.noncontenute.p': 'Ulteriori informazioni in relazione al trattamento dei Dati Personali potranno essere richieste in qualsiasi momento al Titolare del Trattamento utilizzando gli estremi di contatto.',
    'privacy.body.modifiche.h3': 'Modifiche a questa privacy policy',
    'privacy.body.modifiche.p1': 'Il Titolare del Trattamento si riserva il diritto di apportare modifiche alla presente privacy policy in qualunque momento notificandolo agli Utenti su questa pagina e, se possibile, su questa Applicazione nonché, qualora tecnicamente e legalmente fattibile, inviando una notifica agli Utenti attraverso uno degli estremi di contatto di cui è in possesso. Si prega dunque di consultare con frequenza questa pagina, facendo riferimento alla data di ultima modifica indicata in fondo.',
    'privacy.body.modifiche.p2': 'Qualora le modifiche interessino trattamenti la cui base giuridica è il consenso, il Titolare provvederà a raccogliere nuovamente il consenso dell\'Utente, se necessario.',
    'privacy.body.definizioni.h2': 'Definizioni e riferimenti legali',
    'privacy.body.def.personali.dt': 'Dati Personali (o Dati)',
    'privacy.body.def.personali.dd': 'Costituisce dato personale qualunque informazione che, direttamente o indirettamente, anche in collegamento con qualsiasi altra informazione, ivi compreso un numero di identificazione personale, renda identificata o identificabile una persona fisica.',
    'privacy.body.def.utilizzo.dt': 'Dati di Utilizzo',
    'privacy.body.def.utilizzo.dd': 'Sono le informazioni raccolte automaticamente attraverso questa Applicazione, tra cui: gli indirizzi IP o i nomi a dominio dei computer utilizzati dall\'Utente che si connette con questa Applicazione, gli indirizzi in notazione URI, l\'orario della richiesta, il metodo utilizzato nell\'inoltrare la richiesta al server, la dimensione del file ottenuto in risposta, il codice numerico indicante lo stato della risposta dal server, il paese di provenienza, le caratteristiche del browser e del sistema operativo utilizzati dal visitatore, le varie connotazioni temporali della visita e i dettagli relativi all\'itinerario seguito all\'interno dell\'Applicazione.',
    'privacy.body.def.utente.dt': 'Utente',
    'privacy.body.def.utente.dd': 'L\'individuo che utilizza questa Applicazione che, salvo ove diversamente specificato, coincide con l\'Interessato.',
    'privacy.body.def.interessato.dt': 'Interessato',
    'privacy.body.def.interessato.dd': 'La persona fisica cui si riferiscono i Dati Personali.',
    'privacy.body.def.responsabile.dt': 'Responsabile del Trattamento (o Responsabile)',
    'privacy.body.def.responsabile.dd': 'La persona fisica, giuridica, la pubblica amministrazione e qualsiasi altro ente che tratta dati personali per conto del Titolare, secondo quanto esposto nella presente privacy policy.',
    'privacy.body.def.titolare.dt': 'Titolare del Trattamento (o Titolare)',
    'privacy.body.def.titolare.dd': 'La persona fisica o giuridica, l\'autorità pubblica, il servizio o altro organismo che, singolarmente o insieme ad altri, determina le finalità e i mezzi del trattamento di dati personali e gli strumenti adottati, ivi comprese le misure di sicurezza relative al funzionamento ed alla fruizione di questa Applicazione. Il Titolare del Trattamento, salvo quanto diversamente specificato, è il titolare di questa Applicazione.',
    'privacy.body.def.applicazione.dt': 'Questa Applicazione',
    'privacy.body.def.applicazione.dd': 'Lo strumento hardware o software mediante il quale sono raccolti e trattati i Dati Personali degli Utenti.',
    'privacy.body.def.servizio.dt': 'Servizio',
    'privacy.body.def.servizio.dd': 'Il Servizio fornito da questa Applicazione così come definito nei relativi termini (se presenti) su questo sito/applicazione.',
    'privacy.body.def.ue.dt': 'Unione Europea (o UE)',
    'privacy.body.def.ue.dd': 'Salvo ove diversamente specificato, ogni riferimento all\'Unione Europea contenuto in questo documento si intende esteso a tutti gli attuali stati membri dell\'Unione Europea e dello Spazio Economico Europeo.',
    'privacy.body.def.cookie.dt': 'Cookie',
    'privacy.body.def.cookie.dd': 'I Cookie sono Strumenti di Tracciamento che consistono in piccole porzioni di dati conservate all\'interno del browser dell\'Utente.',
    'privacy.body.def.strumento.dt': 'Strumento di Tracciamento',
    'privacy.body.def.strumento.dd': 'Per Strumento di Tracciamento s\'intende qualsiasi tecnologia — es. Cookie, identificativi univoci, web beacons, script integrati, e-tag e fingerprinting — che consenta di tracciare gli Utenti, per esempio raccogliendo o salvando informazioni sul dispositivo dell\'Utente.',
    'privacy.body.def.riferimenti.dt': 'Riferimenti legali',
    'privacy.body.def.riferimenti.dd': 'Ove non diversamente specificato, questa policy riguarda esclusivamente questa Applicazione.',
    'privacy.body.lastmod': 'Ultima modifica:',
    'privacy.body.lastmod.date': '14 marzo 2026',
    'privacy.footer.credit': 'Realizzato con amore, IA, HTML5 + Tailwind CSS',
    'privacy.footer.home': 'Home',
    'privacy.footer.cv': 'CV',
    'privacy.footer.privacy': 'Privacy',

    /* ─── COOKIE CONSENT BANNER ─── */
    'cc.dialog.label': 'Preferenze cookie',
    'cc.close.label': 'Chiudi e rifiuta tutti i cookie',
    'cc.text': 'Questo sito usa cookie tecnici necessari e, previo consenso, cookie analitici (Google Analytics) per misurare le visite e migliorare l\'esperienza.',
    'cc.accept': 'Accetta tutti',
    'cc.reject': 'Rifiuta tutti',
    'cc.customize': 'Personalizza',
    'cc.analytics.label': 'Cookie analitici (Google Analytics) — misurazione anonima delle visite',
    'cc.save': 'Salva preferenze',
    'cc.reopen.label': 'Gestisci preferenze cookie',
  },

  en: {
    /* ─── META ─── */
    'meta.title.index':       'Francesco di Dio — Technical Manager & Engineering Leader',
    'meta.description.index': 'Francesco di Dio, Technical Manager: GenAI adoption and agentic workflows industrialized across enterprise software delivery (GitHub Copilot, MCP, RAG, Spec-Driven). Java EE/Quarkus background.',
    'meta.title.cv':          'Resume — Francesco di Dio · Technical Manager',
    'meta.description.cv':    'Resume of Francesco di Dio, Technical Manager and Engineering Leader specialised in Java, Quarkus, OAuth2/OIDC and GenAI Spec-Driven development.',
    'meta.title.privacy':     'Privacy Policy — Francesco di Dio',
    'meta.description.privacy': 'Privacy Policy for francescodidio.com. Information on the processing of personal data under GDPR.',
    'meta.og.locale': 'en_US',

    /* ─── TOGGLE ─── */
    'lang.toggle.label': 'Passa all\'italiano',

    /* ─── NAVBAR (index) ─── */
    'nav.about':     'About',
    'nav.portfolio': 'Portfolio',
    'nav.cv':        'CV',
    'nav.contact':   'Contact',

    /* ─── HERO ─── */
    'hero.cta.portfolio': 'View Portfolio',
    'hero.cta.cv':        'Resume →',

    /* ─── ABOUT ─── */
    'about.p1': 'Technical Manager driving <strong>GenAI</strong> adoption in enterprise software delivery: industrializing agentic workflows end to end, from requirements, technical proposals and estimates to design, task breakdown and code. Hands-on with <strong>GitHub Copilot</strong>, <strong>MCP</strong> servers, <strong>RAG</strong>, <strong>Spec-Driven Development</strong>, agent skills and LLM-based workflows.',
    'about.p2': 'My background is 15+ years as <strong>Technical Lead</strong> on enterprise <strong>Java EE</strong> and <strong>Quarkus</strong> projects: microservices architectures, <strong>SSO &amp; Identity Management</strong> for over 5 million accounts, <strong>OAuth2/OIDC</strong> security, across retail (GDO), energy and public sector.',
    'about.p3': 'Always keen to discuss how GenAI is redefining enterprise development processes. Let\'s talk!',

    /* ─── SOCIAL ─── */
    'social.label': 'Find me on',

    /* ─── PORTFOLIO ─── */
    'portfolio.h2':       'Portfolio',
    'portfolio.subtitle': 'Some personal side projects I have worked on over the years.',
    'portfolio.jsimlife.desc':    'A-Life simulator in Java 6. Dynamic environment with life forms equipped with genetic code and neural networks. MIT licence.',
    'portfolio.pyspendless.desc': 'Web app for shared household expense tracking built with Python 3 and Flask, deployed on PythonAnywhere with Google OAuth2 integration. Built entirely with a spec-driven approach.',
    'portfolio.nerdsland.desc':   'Creative lab where geek culture meets strategic communication. Complex trends, tech innovations and pop culture transformed into narrative content that builds community.',
    'portfolio.occhipinti.desc':  'Portfolio website for Antonio Occhipinti, watercolour master. Designed and built with a GenAI Spec-Driven approach: static stack with no build step, Markdown content loaded at runtime, IT/EN toggle, lightbox galleries and cache-busting on dynamic assets.',
    'portfolio.cta':           'View project →',
    'portfolio.cta.occhipinti':'View site →',

    /* ─── CV PREVIEW (sezione in index.html) ─── */
    'cv.h2':          'Resume',
    'cv.subtitle':    'A summary of my professional career.',
    'cv.exp.label':   'Experience',
    'cv.skills.label':'Skills',
    'cv.edu.label':   'Education',
    'cv.exp1.date':   '01/2026 – present',
    'cv.exp1.role':   'Technical Manager',
    'cv.exp1.desc':   'Economic monitoring, resource allocation, growth and evaluation; technical guidance for projects with a GenAI focus.',
    'cv.exp2.date':   '09/2025 – 01/2026',
    'cv.exp2.role':   'Team Leader — Anonymisation Batch',
    'cv.exp2.desc':   'GDPR anonymisation of 5M records with a 100% Spec-Driven GenAI workflow. Stack: Java 8, Spring Batch, DB2.',
    'cv.exp3.date':   '09/2019 – 09/2025',
    'cv.exp3.role':   'Team Leader — Project Manager',
    'cv.exp3.desc':   'Retail (GDO) projects: SSO with 5M+ accounts, MFA, OAuth2/OIDC. Stack: Quarkus, Oracle DB 19, Angular.js.',
    'cv.edu.degree':  'B.Sc. in Computer Engineering',
    'cv.edu.uni':     'University of Palermo · 100/110 · 2010',
    'cv.cta':         'View full resume',

    /* ─── CONTACT ─── */
    'contact.h2':  'Contact me',
    'contact.p':   'I am available for collaborations, professional opportunities or simply a technical chat.',
    'contact.cta': 'Write me',

    /* ─── FOOTER (index) ─── */
    'footer.credit':   'Built with love, AI, HTML5 + Tailwind CSS',
    'footer.about':    'About',
    'footer.portfolio':'Portfolio',
    'footer.cv':       'CV',
    'footer.contact':  'Contact',
    'footer.privacy':  'Privacy',

    /* ─── PAGINA CV ─── */
    'cv.page.nav.print':       'Print / PDF',
    'cv.page.nav.print.label': 'Print or save as PDF',
    'cv.page.subtitle':        'IT Consultant — JavaEE & Python',
    'cv.page.summary.h2':      'Profile',
    'cv.page.summary.p':       'Technical Manager with over 2 years of experience leading critical projects in the retail (GDO) sector, focused on bridging traditional software engineering with GenAI innovation. Leadership in adopting <strong>Spec-Driven</strong> methodologies for enterprise software delivery. Management of <strong>SSO &amp; Identity Management</strong> projects for over 5 million accounts, coordinating multidisciplinary teams. Microservices architectures (<strong>Quarkus</strong>), security (<strong>OAuth2/OIDC</strong>) and complex systems integration. Computer Engineering degree from the University of Palermo, 100/110.',
    'cv.page.exp.h2':          'Experience',
    'cv.page.exp.1.date':      '01/2026 – present',
    'cv.page.exp.1.desc':      'Responsible for economic monitoring and project progress, resource allocation, growth and evaluation. Technical guidance for projects promoting company drivers and behaviours.',
    'cv.page.exp.1.skills':    '<strong>Skills:</strong> Project Management, Team Leading, GenAI',
    'cv.page.exp.2.date':      '09/2025 – 01/2026',
    'cv.page.exp.2.project':   'Engineering S.p.A. — Anonymisation Batch',
    'cv.page.exp.2.desc':      'Enterprise solution for GDPR anonymisation of 5 million records for a leading national player. Test bed for adopting a 100% Spec-Driven GenAI workflow: transforming complex functional requirements into production code via GitHub Copilot CLI. Processing of 2 massive batches (5M+ records) with high security and performance standards.',
    'cv.page.exp.2.stack':     '<strong>Stack:</strong> Java 8, Spring Batch, DB2, spec-driven development, GitHub Copilot CLI',
    'cv.page.exp.3.date':      '09/2019 – 09/2025',
    'cv.page.exp.3.project':   'Engineering S.p.A. — Retail (GDO) sector',
    'cv.page.exp.3.desc':      'Project Manager and technical lead for strategic projects with a major retail player. End-to-end management of an SSO system with over 5 million accounts: MFA, OAuth2/OpenID Connect, microservices in Quarkus and Angular.js interfaces. Coordination of cross-functional teams and technical communication with stakeholders.',
    'cv.page.exp.3.stack':     '<strong>Stack:</strong> Java 8, OracleWebLogic 12.2, Quarkus, Oracle DB 19, Angular.js, OAuth2/OIDC',
    'cv.page.exp.4.date':      '08/2018 – 09/2019',
    'cv.page.exp.4.project':   'Engineering S.p.A. — EBAAS Poste Project',
    'cv.page.exp.4.desc':      'AS IS analysis of the skills and operational processes of a development team from a newly acquired company. Definition of TO BE processes and resources for establishing dedicated labs nationwide. The project concerns the eBAAS platform for managing insurance and financial products at Poste Italiane.',
    'cv.page.exp.4.stack':     '<strong>Stack:</strong> Java 8, OracleWebLogic 12.2, JAX-WS, Oracle DB 12',
    'cv.page.exp.5.date':      '05/2016 – 08/2018',
    'cv.page.exp.5.project':   'Engineering S.p.A. — Exabeat Project',
    'cv.page.exp.5.desc':      'Team Leader on the "Control Process Module" of Exabeat: an international BigData platform (Italy–Spain) for managing electricity measurements for ENDESA.',
    'cv.page.exp.5.stack':     '<strong>Stack:</strong> Java 7, Scala 1.0, Spark 1.6, HBase 0.97, Phoenix, Maven, PostgreSQL, Hadoop, WildFly 9, SVN',
    'cv.page.exp.6.date':      '09/2013 – 05/2016',
    'cv.page.exp.6.desc':      'Analysis, design and development on the Prince project, a Document Management System implementing the Italian Digital Protocol regulations for INAIL.',
    'cv.page.exp.6.stack':     '<strong>Stack:</strong> Java 6 J2EE, EJB 3.0, Spring, Oracle DB 11g, WebLogic 10.3.6, Quartz, Maven, SVN, NEXUS, RTC',
    'cv.page.exp.7.date':      '04/2011 – 09/2013',
    'cv.page.exp.7.project':   'DSTech',
    'cv.page.exp.7.desc':      'Development of a DMS for the Italian Digital Protocol for INAIL. Bug fixing, new feature development, integration with digital signature web services and data remediation.',
    'cv.page.exp.7.stack':     '<strong>Stack:</strong> Java 6 J2EE, EJB 3.0, JSF, Oracle DB 11g, JBoss EAP 5.1, JasperReport, JavaMail, SVN',
    'cv.page.exp.8.date':      '03/2011 – 04/2011',
    'cv.page.exp.8.desc':      'Full-time internship on JavaEE technologies: Servlet, JSP, JavaScript, Struts2, Hibernate, Oracle PL-SQL.',
    'cv.page.edu.h2':          'Education',
    'cv.page.edu.1.title':     'B.Sc. in Computer Engineering',
    'cv.page.edu.1.uni':       'University of Palermo',
    'cv.page.edu.1.score':     'Grade: 100/110 · Thesis: File System in Linux System',
    'cv.page.edu.2.title':     'Training Oracle WebCenter Content 11g (32h)',
    'cv.page.edu.2.uni':       'Oracle University · Engineering, Rome',
    'cv.page.edu.2.desc':      'Installation and administration of Oracle WebCenter Content 11g.',
    'cv.page.edu.3.title':     'Scientific High School Diploma',
    'cv.page.edu.3.uni':       'Liceo Scientifico "Elio Vittorini", Gela (CL)',
    'cv.page.edu.3.score':     'Grade: 90/100',
    'cv.page.skills.h2':       'Skills',
    'cv.page.skills.languages':'Languages & Frameworks',
    'cv.page.skills.tools':    'Environments & Tools',
    'cv.page.lang.h2':         'Languages',
    'cv.page.lang.it.name':    'Italian',
    'cv.page.lang.it.level':   'Native',
    'cv.page.lang.en.name':    'English',
    'cv.page.lang.en.level':   'Professional',
    'cv.page.footer.date':     'Last updated: March 2026',
    'cv.page.footer.privacy':  'Privacy Policy',

    /* ─── PAGINA PRIVACY ─── */
    'privacy.page.legal.label': 'Legal notice',
    'privacy.page.h1':          'Privacy Policy',
    'privacy.page.print.hint':  'This page can be printed using the print command in your browser settings.',
    'privacy.page.nav.home':    '← Home',
    'privacy.page.nav.cv':      'CV',

    /* ─── PRIVACY BODY ─── */
    'privacy.summary.label': 'Summary',
    'privacy.summary.p1': 'This Application collects some Personal Data from its Users.',
    'privacy.summary.p2': 'Personal Data processed for the following purposes and using the following services:',
    'privacy.summary.stats.name': 'Statistics',
    'privacy.summary.stats.detail': 'Google Analytics (Universal Analytics) — <span class="italic">Personal Data: Usage Data; Tracking Tools</span>',
    'privacy.body.intro.p': 'This Application collects some Personal Data from its Users.',
    'privacy.body.titolare.h2': 'Data Controller',
    'privacy.body.tipologie.h2': 'Types of Data collected',
    'privacy.body.tipologie.p1': 'Among the types of Personal Data that this Application collects, by itself or through third parties, there are: <strong>Tracking Tools</strong> and <strong>Usage Data</strong>.',
    'privacy.body.tipologie.p2': 'Complete details on each type of Personal Data collected are provided in the dedicated sections of this privacy policy or by specific explanation texts displayed prior to the Data collection.',
    'privacy.body.tipologie.p3': 'Personal Data may be freely provided by the User, or, in case of Usage Data, collected automatically when using this Application.',
    'privacy.body.tipologie.p4': 'Unless specified otherwise, all Data requested by this Application is mandatory and failure to provide this Data may make it impossible for this Application to provide its services. In cases where this Application specifically states that some Data is not mandatory, Users are free to not communicate this Data without consequences to the availability or the functioning of the Service. Users who are uncertain about which Personal Data is mandatory are welcome to contact the Owner.',
    'privacy.body.tipologie.p5': 'Any use of Cookies – or of other tracking tools – by this Application or by the owners of third-party services used by this Application serves the purpose of providing the Service required by the User, in addition to any other purposes described in the present document.',
    'privacy.body.tipologie.p6': 'Users are responsible for any third-party Personal Data obtained, published or shared through this Application.',
    'privacy.body.modalita.h2': 'Methods and place of processing the Data collected',
    'privacy.body.modalita.h3': 'Methods of processing',
    'privacy.body.modalita.p1': 'The Owner takes appropriate security measures to prevent unauthorized access, disclosure, modification, or unauthorized destruction of the Data.',
    'privacy.body.modalita.p2': 'The Data processing is carried out using computers and/or IT enabled tools, following organizational procedures and modes strictly related to the purposes indicated. In addition to the Owner, in some cases, the Data may be accessible to certain types of persons in charge, involved with the operation of this Application (administration, sales, marketing, legal, system administration) or external parties (such as third-party technical service providers, mail carriers, hosting providers, IT companies, communications agencies) appointed, if necessary, as Data Processors by the Owner. The updated list of these parties may be requested from the Owner at any time.',
    'privacy.body.luogo.h3': 'Place',
    'privacy.body.luogo.p1': 'The Data is processed at the Owner\'s operating offices and in any other places where the parties involved in the processing are located. For further information, please contact the Owner.',
    'privacy.body.luogo.p2': 'Depending on the User\'s location, data transfers may involve transferring the User\'s Data to a country other than their own. To find out more about the place of processing of such transferred Data, Users can check the section containing details about the processing of Personal Data.',
    'privacy.body.conservazione.h3': 'Retention time',
    'privacy.body.conservazione.p': 'Unless specified otherwise in this document, Personal Data shall be processed and stored for as long as required by the purpose they have been collected for and may be retained for longer due to applicable legal obligations or based on the Users\' consent.',
    'privacy.body.finalita.h2': 'Purposes of processing the Data collected',
    'privacy.body.finalita.p1': 'The Data concerning the User is collected to allow the Owner to provide its Service, comply with its legal obligations, respond to enforcement requests, protect its rights and interests (or those of its Users or third parties), detect any malicious or fraudulent activity, as well as the following: <strong>Statistics</strong>.',
    'privacy.body.finalita.p2': 'For specific information about the Personal Data used for each purpose, the User may refer to the section "Detailed information on the processing of Personal Data".',
    'privacy.body.dettagli.h2': 'Detailed information on the processing of Personal Data',
    'privacy.body.dettagli.p': 'Personal Data is collected for the following purposes and using the following services:',
    'privacy.body.dettagli.statistica.h3': 'Statistics',
    'privacy.body.dettagli.statistica.p1': 'The services contained in this section enable the Owner to monitor and analyze web traffic and can be used to keep track of User behavior.',
    'privacy.body.dettagli.statistica.p2': '<strong>Google Analytics</strong> — Web analysis service provided by Google LLC. Google uses the Data collected to track and examine the use of this Application, to prepare reports on its activities and share them with other Google services. Google may use the Data collected to contextualize and personalize the ads of its own advertising network. The Google Analytics integration complies with the Google Consent Mode v2 provisions: analytics cookies are enabled <strong>only upon explicit consent</strong> of the User via the cookie banner on this site.',
    'privacy.body.dettagli.statistica.p3': 'Personal Data processed: Tracking Tools; Usage Data.<br>Place of processing: United States — <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.',
    'privacy.body.ulteriori.h2': 'Further information for Users',
    'privacy.body.baselegale.h3': 'Legal basis of processing',
    'privacy.body.baselegale.p': 'The Owner may process Personal Data relating to Users if one of the following applies:',
    'privacy.body.baselegale.li1': 'Users have given their consent for one or more specific purposes.',
    'privacy.body.baselegale.li2': 'provision of Data is necessary for the performance of an agreement with the User and/or for any pre-contractual obligations thereof;',
    'privacy.body.baselegale.li3': 'processing is necessary for compliance with a legal obligation to which the Owner is subject;',
    'privacy.body.baselegale.li4': 'processing is related to a task that is carried out in the public interest or in the exercise of official authority vested in the Owner;',
    'privacy.body.baselegale.li5': 'processing is necessary for the purposes of the legitimate interests pursued by the Owner or by a third party.',
    'privacy.body.baselegale.p2': 'In any case, the Owner will gladly help to clarify the specific legal basis that applies to the processing, and in particular whether the provision of Personal Data is a statutory or contractual requirement, or a requirement necessary to enter into a contract.',
    'privacy.body.conservazione2.h3': 'Further information about retention time',
    'privacy.body.conservazione2.p1': 'Unless specified otherwise in this document, Personal Data shall be processed and stored for as long as required by the purpose they have been collected for and may be retained for longer due to applicable legal obligations or based on the Users\' consent. Therefore:',
    'privacy.body.conservazione2.li1': 'Personal Data collected for purposes related to the performance of a contract between the Owner and the User shall be retained until such contract has been fully performed.',
    'privacy.body.conservazione2.li2': 'Personal Data collected for the purposes of the Owner\'s legitimate interests shall be retained as long as needed to fulfill such purposes. Users may find specific information regarding the legitimate interests pursued by the Owner within the relevant sections of this document or by contacting the Owner.',
    'privacy.body.conservazione2.li3': 'The Owner may be allowed to retain Personal Data for a longer period whenever the User has given consent to such processing, as long as such consent is not withdrawn. Furthermore, the Owner may be obliged to retain Personal Data for a longer period whenever required to do so for the performance of a legal obligation or upon order of an authority.',
    'privacy.body.conservazione2.p2': 'Once the retention period expires, Personal Data shall be deleted. Therefore, the right of access, the right to erasure, the right to rectification and the right to data portability cannot be enforced after expiration of the retention period.',
    'privacy.body.diritti.h2': 'Rights of Users based on the General Data Protection Regulation (GDPR)',
    'privacy.body.diritti.p1': 'Users may exercise certain rights regarding their Data processed by the Owner. In particular, Users have the right to do the following, to the extent permitted by law:',
    'privacy.body.diritti.li1': '<strong>Withdraw their consent at any time.</strong> Users have the right to withdraw consent where they have previously given their consent to the processing of their Personal Data.',
    'privacy.body.diritti.li2': '<strong>Object to processing of their Data.</strong> Users have the right to object to the processing of their Data if the processing is carried out on a legal basis other than consent.',
    'privacy.body.diritti.li3': '<strong>Access their Data.</strong> Users have the right to learn if Data is being processed by the Owner, obtain disclosure regarding certain aspects of the processing and obtain a copy of the Data undergoing processing.',
    'privacy.body.diritti.li4': '<strong>Verify and seek rectification.</strong> Users have the right to verify the accuracy of their Data and ask for it to be updated or corrected.',
    'privacy.body.diritti.li5': '<strong>Restrict the processing of their Data.</strong> Users have the right to restrict the processing of their Data. In this case, the Owner will not process their Data for any purpose other than storing it.',
    'privacy.body.diritti.li6': '<strong>Have their Personal Data deleted or otherwise removed.</strong> Users have the right to obtain the erasure of their Data from the Owner.',
    'privacy.body.diritti.li7': '<strong>Receive their Data and have it transferred to another controller.</strong> Users have the right to receive their Data in a structured, commonly used and machine readable format and, if technically feasible, to have it transmitted to another controller without any hindrance.',
    'privacy.body.diritti.li8': '<strong>Lodge a complaint.</strong> Users have the right to bring a claim before their competent data protection authority.',
    'privacy.body.diritti.p2': 'Users are also entitled to learn about the legal basis for Data transfers abroad including to any international organisation governed by public international law or set up by two or more countries, such as the UN, and about the security measures taken by the Owner to safeguard their Data.',
    'privacy.body.opposizione.h3': 'Details about the right to object to processing',
    'privacy.body.opposizione.p1': 'Where Personal Data is processed for a public interest, in the exercise of an official authority vested in the Owner or for the purposes of the legitimate interests pursued by the Owner, Users may object to such processing by providing a ground related to their particular situation to justify the objection.',
    'privacy.body.opposizione.p2': 'Users must know that, however, should their Personal Data be processed for direct marketing purposes, they can object to that processing at any time, free of charge and without providing any justification. Where the User objects to processing for direct marketing purposes, the Personal Data will no longer be processed for such purposes. To find out whether the Owner is processing Personal Data for direct marketing purposes, Users may refer to the relevant sections of this document.',
    'privacy.body.esercizio.h3': 'How to exercise these rights',
    'privacy.body.esercizio.p': 'Any requests to exercise User rights can be directed to the Owner through the contact details provided in this document. Such requests are free of charge and will be answered by the Owner as early as possible and always within one month, providing Users with the information required by law. Any rectification or erasure of Personal Data or restriction of processing will be communicated by the Owner to each recipient to whom the Personal Data has been disclosed unless this proves impossible or involves disproportionate effort. The Owner will inform the User about those recipients if the User requests it.',
    'privacy.body.info2.h2': 'Further information about processing',
    'privacy.body.difesa.h3': 'Legal action',
    'privacy.body.difesa.p1': 'The User\'s Personal Data may be used for legal purposes by the Owner in Court or in the stages leading to possible legal action arising from improper use of this Application or the related Services.',
    'privacy.body.difesa.p2': 'The User declares to be aware that the Owner may be required to reveal personal data upon request of public authorities.',
    'privacy.body.specifiche.h3': 'Specific information',
    'privacy.body.specifiche.p': 'Upon request of the User, in addition to the information contained in this privacy policy, this Application may provide the User with additional and contextual information concerning particular Services or the collection and processing of Personal Data.',
    'privacy.body.log.h3': 'System logs and maintenance',
    'privacy.body.log.p': 'For operation and maintenance purposes, this Application and any third-party services may collect files that record interaction with this Application (System logs) use other Personal Data (such as the IP Address) for this purpose.',
    'privacy.body.noncontenute.h3': 'Information not contained in this policy',
    'privacy.body.noncontenute.p': 'More details concerning the collection or processing of Personal Data may be requested from the Owner at any time using the contact information.',
    'privacy.body.modifiche.h3': 'Changes to this privacy policy',
    'privacy.body.modifiche.p1': 'The Owner reserves the right to make changes to this privacy policy at any time by notifying its Users on this page and possibly within this Application and/or — as far as technically and legally feasible — sending a notice to Users via any contact information available to the Owner. It is strongly recommended to check this page often, referring to the date of the last modification listed at the bottom.',
    'privacy.body.modifiche.p2': 'Should the changes affect processing activities performed on the basis of the User\'s consent, the Owner shall collect new consent from the User, where required.',
    'privacy.body.definizioni.h2': 'Definitions and legal references',
    'privacy.body.def.personali.dt': 'Personal Data (or Data)',
    'privacy.body.def.personali.dd': 'Any information that directly, indirectly, or in connection with other information — including a personal identification number — allows for the identification or identifiability of a natural person.',
    'privacy.body.def.utilizzo.dt': 'Usage Data',
    'privacy.body.def.utilizzo.dd': 'Information collected automatically through this Application (or third-party services employed in this Application), which can include: the IP addresses or domain names of the computers utilized by the Users who use this Application, the URI addresses (Uniform Resource Identifier), the time of the request, the method utilized to submit the request to the server, the size of the file received in response, the numerical code indicating the status of the server\'s answer (successful outcome, error, etc.), the country of origin, the features of the browser and the operating system utilized by the User, the various time details per visit (e.g., the time spent on each page within the Application) and the details about the path followed within the Application with special reference to the sequence of pages visited, and other parameters about the device operating system and/or the User\'s IT environment.',
    'privacy.body.def.utente.dt': 'User',
    'privacy.body.def.utente.dd': 'The individual using this Application who, unless otherwise specified, coincides with the Data Subject.',
    'privacy.body.def.interessato.dt': 'Data Subject',
    'privacy.body.def.interessato.dd': 'The natural person to whom the Personal Data refers.',
    'privacy.body.def.responsabile.dt': 'Data Processor (or Processor)',
    'privacy.body.def.responsabile.dd': 'The natural or legal person, public authority, agency or other body which processes Personal Data on behalf of the Controller, as described in this privacy policy.',
    'privacy.body.def.titolare.dt': 'Data Controller (or Owner)',
    'privacy.body.def.titolare.dd': 'The natural or legal person, public authority, agency or other body which, alone or jointly with others, determines the purposes and means of the processing of Personal Data, including the security measures concerning the operation and use of this Application. The Data Controller, unless otherwise specified, is the Owner of this Application.',
    'privacy.body.def.applicazione.dt': 'This Application',
    'privacy.body.def.applicazione.dd': 'The means by which the Personal Data of the User is collected and processed.',
    'privacy.body.def.servizio.dt': 'Service',
    'privacy.body.def.servizio.dd': 'The service provided by this Application as described in the relative terms (if available) and on this site/application.',
    'privacy.body.def.ue.dt': 'European Union (or EU)',
    'privacy.body.def.ue.dd': 'Unless otherwise specified, all references made within this document to the European Union include all current member states to the European Union and the European Economic Area.',
    'privacy.body.def.cookie.dt': 'Cookie',
    'privacy.body.def.cookie.dd': 'Cookies are Tracking Tools that consist of small sets of data stored in the User\'s browser.',
    'privacy.body.def.strumento.dt': 'Tracking Tool',
    'privacy.body.def.strumento.dd': 'Tracking Tool indicates any technology - e.g Cookies, unique identifiers, web beacons, embedded scripts, e-tags and fingerprinting - that enables the tracking of Users, for instance by accessing or storing information on the User\'s device.',
    'privacy.body.def.riferimenti.dt': 'Legal information',
    'privacy.body.def.riferimenti.dd': 'This privacy statement has been prepared based on provisions of multiple legislations. This privacy policy relates solely to this Application, if not stated otherwise within this document.',
    'privacy.body.lastmod': 'Last updated:',
    'privacy.body.lastmod.date': 'March 14, 2026',
    'privacy.footer.credit': 'Built with love, AI, HTML5 + Tailwind CSS',
    'privacy.footer.home': 'Home',
    'privacy.footer.cv': 'CV',
    'privacy.footer.privacy': 'Privacy',

    /* ─── COOKIE CONSENT BANNER ─── */
    'cc.dialog.label': 'Cookie preferences',
    'cc.close.label': 'Close and reject all cookies',
    'cc.text': 'This site uses necessary technical cookies and, with your consent, analytics cookies (Google Analytics) to measure visits and improve the experience.',
    'cc.accept': 'Accept all',
    'cc.reject': 'Reject all',
    'cc.customize': 'Customize',
    'cc.analytics.label': 'Analytics cookies (Google Analytics) — anonymous visit measurement',
    'cc.save': 'Save preferences',
    'cc.reopen.label': 'Manage cookie preferences',
  }
};

function applyLang(lang) {
  if (!I18N[lang]) return;
  var dict = I18N[lang];

  // 1. Aggiorna attributi radice
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('data-lang', lang);

  // 2. Testo semplice (textContent)
  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    var key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      el.textContent = dict[key];
    }
  });

  // 3. HTML con markup interno (innerHTML)
  document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
    var key = el.getAttribute('data-i18n-html');
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  // 4. aria-label
  document.querySelectorAll('[data-i18n-label]').forEach(function (el) {
    var key = el.getAttribute('data-i18n-label');
    if (dict[key] !== undefined) {
      el.setAttribute('aria-label', dict[key]);
    }
  });

  // 5. Meta tag SEO
  var page = (document.body && document.body.getAttribute('data-i18n-page')) || 'index';
  _updateMeta('description',    dict['meta.description.' + page]);
  _updateMeta('og:description', dict['meta.description.' + page]);
  _updateMeta('og:title',       dict['meta.title.' + page]);
  _updateMeta('og:locale',      dict['meta.og.locale']);
  _updateMeta('twitter:description', dict['meta.description.' + page]);
  _updateMeta('twitter:title',       dict['meta.title.' + page]);
  if (dict['meta.title.' + page]) {
    document.title = dict['meta.title.' + page];
  }

  // 6. Toggle button: label + testo visibile
  document.querySelectorAll('[id="lang-toggle"]').forEach(function (btn) {
    if (dict['lang.toggle.label']) {
      btn.setAttribute('aria-label', dict['lang.toggle.label']);
    }
    var span = btn.querySelector('[data-lang-label]');
    if (span) {
      span.textContent = lang === 'it' ? 'EN' : 'IT';
    }
  });

  localStorage.setItem('lang', lang);
}

function toggleLang() {
  var current = document.documentElement.getAttribute('data-lang') || 'it';
  applyLang(current === 'it' ? 'en' : 'it');
}

function _updateMeta(nameOrProperty, content) {
  if (!content) return;
  var el = document.querySelector(
    'meta[name="' + nameOrProperty + '"], meta[property="' + nameOrProperty + '"]'
  );
  if (el) el.setAttribute('content', content);
}

document.addEventListener('DOMContentLoaded', function () {
  var saved = localStorage.getItem('lang');
  var browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase().startsWith('en') ? 'en' : 'it';
  applyLang(saved || browserLang);
});
