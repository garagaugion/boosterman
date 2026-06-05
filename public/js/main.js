// BOOSTERMAN - Script condiviso

// Anno dinamico
document.addEventListener('DOMContentLoaded', function() {
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
});

// Drawer mobile
const mobileBtn = document.getElementById('mobileMenuBtn');
const drawer = document.getElementById('mobileDrawer');
const overlay = document.getElementById('drawerOverlay');
const closeBtn = document.getElementById('closeDrawerBtn');

function openDrawer() {
    if (!drawer || !overlay) return;
    drawer.classList.add('open');
    overlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeDrawer() {
    if (!drawer || !overlay) return;
    drawer.classList.remove('open');
    overlay.classList.add('hidden');
    document.body.style.overflow = '';
}

if (mobileBtn) mobileBtn.addEventListener('click', openDrawer);
if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
if (overlay) overlay.addEventListener('click', closeDrawer);

document.querySelectorAll('#mobileDrawer a').forEach(link => {
    link.addEventListener('click', closeDrawer);
});

// Modali Privacy e Cookie
document.getElementById('privacyLink')?.addEventListener('click', (e) => { e.preventDefault(); document.getElementById('modalPrivacy').classList.remove('hidden'); });
document.getElementById('cookieLink')?.addEventListener('click', (e) => { e.preventDefault(); document.getElementById('modalCookie').classList.remove('hidden'); });

// Tenda servizi rapida
const servicesDropdown = [
    { name: 'Avviamento Batteria', price: 'stima su richiesta', emoji: '⚡', desc: 'Jump start con booster' },
    { name: 'Sostituzione Batteria', price: 'stima su richiesta', emoji: '🔋', desc: 'Batterie originali' },
    { name: 'Gomma Forata', price: 'stima su richiesta', emoji: '🛞', desc: 'Sostituzione ruota' },
    { name: 'Apertura Porte', price: 'stima su richiesta', emoji: '🔑', desc: 'Apertura non distruttiva' },
    { name: 'Diagnosi Elettronica', price: 'stima su richiesta', emoji: '🔧', desc: 'Lettura errori OBD' },
    { name: 'Sostituzione Lampadine', price: 'stima su richiesta', emoji: '💡', desc: 'Anabbaglianti, stop' }
];
const ddMenu = document.getElementById('ddMenu');
const ddBtn = document.getElementById('ddBtn');
const ddLabel = document.getElementById('ddLabel');
const ddPrice = document.getElementById('ddPrice');
const ddChev = document.getElementById('ddChev');
const sendBtn = document.getElementById('sendBtn');
let activeService = servicesDropdown[0];

if (ddMenu) {
    ddMenu.innerHTML = servicesDropdown.map((s, i) => `<button data-i="${i}" class="svcOpt w-full text-left px-4 py-3 hover:bg-white/5 border-b border-white/5 last:border-b-0 transition flex items-center gap-3"><span class="text-xl">${s.emoji}</span><span class="flex-1"><span class="block font-semibold text-white text-sm">${s.name}</span><span class="block text-xs text-white/50 truncate">${s.desc}</span></span><span class="text-bolt text-sm font-semibold">${s.price}</span></button>`).join('');
    ddBtn.addEventListener('click', (e) => { e.stopPropagation(); ddMenu.classList.toggle('hidden'); ddChev.classList.toggle('rot-180'); });
    document.addEventListener('click', (e) => { if (!ddMenu.contains(e.target) && e.target !== ddBtn) { ddMenu.classList.add('hidden'); ddChev.classList.remove('rot-180'); } });
    document.querySelectorAll('.svcOpt').forEach(opt => { opt.addEventListener('click', () => { const idx = parseInt(opt.dataset.i); activeService = servicesDropdown[idx]; ddLabel.textContent = activeService.name; ddPrice.textContent = activeService.price; ddMenu.classList.add('hidden'); ddChev.classList.remove('rot-180'); }); });
}
if (sendBtn) {
    sendBtn.addEventListener('click', () => {
        const problemDesc = `${activeService.emoji} ${activeService.name} - ${activeService.price}`;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => { const lat = position.coords.latitude.toFixed(6); const lng = position.coords.longitude.toFixed(6); const mapsLink = `https://maps.google.com/?q=${lat},${lng}`; const msg = `BOOSTERMAN - Richiesta intervento\n\n${problemDesc}\nOrario: ${new Date().toLocaleString('it-IT')}\n📍 Posizione GPS: ${mapsLink}`; window.open(`https://wa.me/393270447124?text=${encodeURIComponent(msg)}`, '_blank'); },
                () => { const msg = `BOOSTERMAN - Richiesta intervento\n\n${problemDesc}\nOrario: ${new Date().toLocaleString('it-IT')}\n📍 Posizione: (da inviare manualmente)`; window.open(`https://wa.me/393270447124?text=${encodeURIComponent(msg)}`, '_blank'); },
                { enableHighAccuracy: true, timeout: 6000 }
            );
        } else { const msg = `BOOSTERMAN - Richiesta intervento\n\n${problemDesc}\nOrario: ${new Date().toLocaleString('it-IT')}\n📍 Posizione: (invia manualmente per favore)`; window.open(`https://wa.me/393270447124?text=${encodeURIComponent(msg)}`, '_blank'); }
    });
}



// Cookie banner + Google Ads Consent Mode
(function() {
    const banner = document.getElementById('cookieBanner');
    const consent = localStorage.getItem('cookieConsent');

    if (!consent && banner) {
        banner.classList.remove('hidden');
    }

    function updateGoogleConsent(status) {
        if (typeof window.gtag !== 'function') return;

        const granted = status === 'all';

        window.gtag('consent', 'update', {
            ad_storage: granted ? 'granted' : 'denied',
            ad_user_data: granted ? 'granted' : 'denied',
            ad_personalization: granted ? 'granted' : 'denied',
            analytics_storage: granted ? 'granted' : 'denied'
        });
    }

    window.acceptCookies = function() {
        localStorage.setItem('cookieConsent', 'all');
        updateGoogleConsent('all');
        if (banner) banner.classList.add('hidden');
    };

    window.declineCookies = function() {
        localStorage.setItem('cookieConsent', 'necessary');
        updateGoogleConsent('necessary');
        if (banner) banner.classList.add('hidden');
    };

    if (consent) updateGoogleConsent(consent);
})();

// Fullscreen chat controller
(function() {
    const assistant = document.getElementById('helpAssistant');
    const opened = document.getElementById('helpOpen');
    const closed = document.getElementById('helpClosed');

    if (!assistant || !opened || !closed) return;

    function activateFullscreen() {
        assistant.classList.add('chat-active');
        opened.classList.add('chat-fullscreen');
        document.body.classList.add('chat-open');
    }

    function deactivateFullscreen() {
        assistant.classList.remove('chat-active');
        opened.classList.remove('chat-fullscreen');
        document.body.classList.remove('chat-open');
    }

    closed.addEventListener('click', activateFullscreen);

    document.querySelectorAll('#closeHelpChatBtn, #closeHelpChatBtn2, [data-chat-close]').forEach(btn => {
        btn.addEventListener('click', deactivateFullscreen);
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && assistant.classList.contains('chat-active')) {
            deactivateFullscreen();
            if (opened.style.display !== 'none') {
                opened.style.display = 'none';
                closed.style.display = 'flex';
            }
        }
    });
})();


// Extra fix: garantisce che il testo digitato nella chat sia visibile
document.addEventListener('DOMContentLoaded', function(){
    const input = document.getElementById('helpInput');
    if (input) {
        input.style.color = '#ffffff';
        input.style.backgroundColor = '#050505';
        input.style.caretColor = '#F5A623';
    }
});


// REV3 chat/menu safety fixes
document.addEventListener('DOMContentLoaded', function(){
    const input = document.getElementById('helpInput');
    if (input) {
        input.style.color = '#ffffff';
        input.style.backgroundColor = '#000000';
        input.style.webkitTextFillColor = '#ffffff';
        input.style.caretColor = '#F5A623';
    }

    const assistant = document.getElementById('helpAssistant');
    const opened = document.getElementById('helpOpen');
    const closed = document.getElementById('helpClosed');

    function activateChat(){
        if (!assistant || !opened) return;
        assistant.classList.add('chat-active');
        opened.classList.add('chat-fullscreen');
        document.body.classList.add('chat-open');
    }

    function deactivateChat(){
        if (!assistant || !opened) return;
        assistant.classList.remove('chat-active');
        opened.classList.remove('chat-fullscreen');
        document.body.classList.remove('chat-open');
    }

    if (closed) {
        closed.addEventListener('click', activateChat, true);
    }

    document.querySelectorAll('#closeHelpChatBtn,#closeHelpChatBtn2,[data-chat-close]').forEach(btn=>{
        btn.addEventListener('click', deactivateChat, true);
    });
});


// REV5 runtime visual fix: chat input leggibile
document.addEventListener('DOMContentLoaded', function(){
    const input = document.getElementById('helpInput');
    const send = document.getElementById('helpSendBtn');

    if (input) {
        input.style.setProperty('color', '#ffffff', 'important');
        input.style.setProperty('-webkit-text-fill-color', '#ffffff', 'important');
        input.style.setProperty('background-color', '#050505', 'important');
        input.style.setProperty('border', '2px solid rgba(245,166,35,.65)', 'important');
        input.style.setProperty('caret-color', '#F5A623', 'important');
        input.style.setProperty('opacity', '1', 'important');
    }

    if (send) {
        send.classList.add('chat-send-btn');
        send.style.setProperty('color', '#0a0a0a', 'important');
        send.style.setProperty('background-color', '#F5A623', 'important');
    }
});


// REV6 dropdown stacking fix
document.addEventListener('DOMContentLoaded', function(){
    const ddBtn = document.getElementById('ddBtn');
    const ddMenu = document.getElementById('ddMenu');

    if (!ddBtn || !ddMenu) return;

    const wrapper = ddBtn.closest('.relative');

    function updateDropdownStack() {
        if (!wrapper) return;
        if (!ddMenu.classList.contains('hidden')) {
            wrapper.style.zIndex = '99998';
            wrapper.style.position = 'relative';
        } else {
            wrapper.style.zIndex = '';
        }
    }

    ddBtn.addEventListener('click', function(){
        setTimeout(updateDropdownStack, 0);
    }, true);

    document.addEventListener('click', function(){
        setTimeout(updateDropdownStack, 0);
    }, true);

    ddMenu.addEventListener('click', function(){
        setTimeout(updateDropdownStack, 0);
    }, true);
});


// BOOSTERMAN 2.0 - Assistente aperto in Home + interventi recenti
document.addEventListener('DOMContentLoaded', function () {
  const convo = document.getElementById('assistant2Conversation');
  const locationBtn = document.getElementById('assistant2Location');
  const photoBtn = document.getElementById('assistant2Photo');
  const PHONE = '393270447124';

  const problemMessages = {
    battery: {
      label: 'Batteria scarica',
      reply: 'Capito. Quando provi ad avviare l’auto cosa succede?<br><br>• senti solo un click?<br>• il quadro si accende ma il motore non parte?<br>• non si accende nulla?<br><br>Se vuoi, puoi inviarci una foto della batteria o del quadro strumenti su WhatsApp.',
      photo: 'Ciao BOOSTERMAN, ho un problema di batteria scarica. Ti invio una foto della batteria o del quadro strumenti.'
    },
    nostart: {
      label: 'Auto non parte',
      reply: 'Va bene, proviamo a capire rapidamente. Il motore gira ma non parte, oppure non succede proprio nulla?<br><br>Con una foto del quadro strumenti o con la posizione possiamo aiutarti meglio.',
      photo: 'Ciao BOOSTERMAN, la mia auto non parte. Ti invio una foto del quadro strumenti o del problema.'
    },
    tire: {
      label: 'Gomma forata',
      reply: 'Nessun problema. La gomma è completamente a terra oppure riesci ancora a muovere il veicolo?<br><br>Una foto dello pneumatico ci aiuta a capire subito il tipo di intervento.',
      photo: 'Ciao BOOSTERMAN, ho una gomma forata. Ti invio una foto dello pneumatico.'
    },
    lock: {
      label: 'Apertura veicolo',
      reply: 'Capito. Le chiavi sono rimaste dentro il veicolo oppure la serratura non apre?<br><br>Evita di forzare la portiera: puoi chiamarci o inviare la posizione.',
      photo: 'Ciao BOOSTERMAN, ho bisogno di apertura veicolo. Ti invio una foto/situazione.'
    },
    warning: {
      label: 'Spie accese',
      reply: 'Va bene. Se riesci, inviaci una foto del quadro strumenti con la spia accesa.<br><br>Questo ci aiuta a capire meglio il problema prima dell’arrivo del tecnico.',
      photo: 'Ciao BOOSTERMAN, ho una spia accesa sul quadro strumenti. Ti invio una foto.'
    },
    other: {
      label: 'Altro problema',
      reply: 'Raccontaci brevemente cosa succede alla tua auto.<br><br>Puoi scriverci su WhatsApp, inviare una foto o condividere la posizione per ricevere assistenza più rapidamente.',
      photo: 'Ciao BOOSTERMAN, ho un problema con la mia auto. Ti invio una foto e ti spiego la situazione.'
    }
  };

  function addAssistant2Message(html, type) {
    if (!convo) return;
    const div = document.createElement('div');
    div.className = 'assistant2-message ' + (type || 'bot');
    div.innerHTML = html;
    convo.appendChild(div);
    convo.scrollTop = convo.scrollHeight;
  }

  document.querySelectorAll('.assistant2-option').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const data = problemMessages[btn.dataset.problem];
      if (!data) return;

      addAssistant2Message(data.label, 'user');
      setTimeout(function () {
        addAssistant2Message(data.reply, 'bot');
      }, 280);

      if (photoBtn) {
        photoBtn.href = 'https://wa.me/' + PHONE + '?text=' + encodeURIComponent(data.photo);
      }
    });
  });

  if (locationBtn) {
    locationBtn.addEventListener('click', function () {
      if (!navigator.geolocation) {
        window.open('https://wa.me/' + PHONE + '?text=' + encodeURIComponent('Ciao BOOSTERMAN, ho bisogno di assistenza. Ti invio la mia posizione manualmente.'), '_blank');
        return;
      }

      locationBtn.textContent = '📍 Preparazione posizione...';

      navigator.geolocation.getCurrentPosition(async function (pos) {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;
        let weatherText = '';

        try {
          const res = await fetch('/api/weather?lat=' + encodeURIComponent(lat) + '&lng=' + encodeURIComponent(lng));
          if (res.ok) {
            const weather = await res.json();
            if (typeof weather.temp !== 'undefined') {
              weatherText = '\nMeteo zona: ' + weather.temp + '°C, ' + (weather.description || '');
            }
          }
        } catch (e) {}

        const msg = 'Ciao BOOSTERMAN, ho bisogno di assistenza.\nPosizione: https://maps.google.com/?q=' + lat + ',' + lng + weatherText;
        window.open('https://wa.me/' + PHONE + '?text=' + encodeURIComponent(msg), '_blank');
        addAssistant2Message('Perfetto ✅<br>Ti apro WhatsApp con la posizione già pronta. Il tecnico potrà verificare meglio zona, disponibilità e tempi.', 'bot');
        locationBtn.textContent = '📍 Invia posizione';
      }, function () {
        window.open('https://wa.me/' + PHONE + '?text=' + encodeURIComponent('Ciao BOOSTERMAN, ho bisogno di assistenza. Ti invio la mia posizione manualmente.'), '_blank');
        addAssistant2Message('Nessun problema. Puoi inviare la posizione manualmente da WhatsApp.', 'bot');
        locationBtn.textContent = '📍 Invia posizione';
      }, { enableHighAccuracy: true, timeout: 8000 });
    });
  }

  const recentItems = [
    ['Batteria scarica risolta a EUR', 'Oggi'],
    ['Apertura veicolo effettuata a Ostia', 'Oggi'],
    ['Avviamento auto effettuato ad Acilia', 'Oggi'],
    ['Diagnosi elettronica completata a Tiburtina', 'Oggi'],
    ['Gomma forata assistita a Casal Palocco', 'Oggi'],
    ['Batteria verificata a Fiumicino', 'Oggi'],
    ['Spia motore controllata a Laurentina', 'Oggi'],
    ['Apertura auto effettuata a Ponte Milvio', 'Oggi']
  ];

  const oneTitle = document.getElementById('recentOneTitle');
  const oneTime = document.getElementById('recentOneTime');
  const twoTitle = document.getElementById('recentTwoTitle');
  const twoTime = document.getElementById('recentTwoTime');

  if (oneTitle && twoTitle) {
    const slot = Math.floor(Date.now() / (30 * 60 * 1000));
    const i = (slot * 2) % recentItems.length;
    const first = recentItems[i];
    const second = recentItems[(i + 1) % recentItems.length];

    oneTitle.textContent = first[0];
    oneTime.textContent = first[1];
    twoTitle.textContent = second[0];
    twoTime.textContent = second[1];
  }
});
