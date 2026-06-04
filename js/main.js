// BOOSTERMAN - Script condiviso

// ============ ANNO DINAMICO ============
document.addEventListener('DOMContentLoaded', function() {
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
});

// ============ MOBILE MENU ============
const mobileBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        mobileMenu.classList.toggle('hidden');
    });
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
    });
    document.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && !mobileBtn.contains(e.target)) {
            mobileMenu.classList.add('hidden');
        }
    });
}

// ============ MODALI PRIVACY E COOKIE ============
document.getElementById('privacyLink')?.addEventListener('click', (e) => { e.preventDefault(); document.getElementById('modalPrivacy').classList.remove('hidden'); });
document.getElementById('cookieLink')?.addEventListener('click', (e) => { e.preventDefault(); document.getElementById('modalCookie').classList.remove('hidden'); });

// ============ TENDA SERVIZI (RAPIDA) ============
const servicesDropdown = [
    { name: 'Avviamento Batteria', price: 'da 30€', emoji: '⚡', desc: 'Jump start con booster' },
    { name: 'Sostituzione Batteria', price: 'da 50€ + batteria', emoji: '🔋', desc: 'Batterie originali' },
    { name: 'Gomma Forata', price: 'da 40€', emoji: '🛞', desc: 'Sostituzione ruota' },
    { name: 'Apertura Porte', price: 'da 50€', emoji: '🔑', desc: 'Apertura non distruttiva' },
    { name: 'Diagnosi Elettronica', price: 'da 40€', emoji: '🔧', desc: 'Lettura errori OBD' },
    { name: 'Sostituzione Lampadine', price: 'da 20€', emoji: '💡', desc: 'Anabbaglianti, stop' }
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

// ============ ASSISTENTE HELP (con domande corte) ============
const helpClosed = document.getElementById('helpClosed');
const helpOpen = document.getElementById('helpOpen');
const helpMessages = document.getElementById('helpMessages');
const helpInput = document.getElementById('helpInput');
const helpSendBtn = document.getElementById('helpSendBtn');
const helpCallBtn = document.getElementById('helpCallBtn');
const helpWABtn = document.getElementById('helpWABtn');
const sendLocationBtn = document.getElementById('sendLocationBtn');
const closeHelpChatBtn = document.getElementById('closeHelpChatBtn');
let inactiveTimeout = null;

function getGreeting() { const hour = new Date().getHours(); if (hour < 12) return '🌞 Buongiorno'; if (hour < 18) return '☀️ Buon pomeriggio'; if (hour < 22) return '🌙 Buonasera'; return '🌃 Buonanotte'; }
function showTyping(callback) { const typingDiv = document.createElement('div'); typingDiv.className = 'flex items-center gap-2 text-white/50 text-sm p-2'; typingDiv.id = 'typing-indicator'; typingDiv.innerHTML = '<span>HELP</span><div class="typing-dots flex gap-1"><span>●</span><span>●</span><span>●</span></div>'; helpMessages.appendChild(typingDiv); helpMessages.scrollTop = helpMessages.scrollHeight; setTimeout(() => { document.getElementById('typing-indicator')?.remove(); if (callback) callback(); }, 1500); }
function addMessage(text, isUser = false, isTyping = false) { if (isTyping) { showTyping(() => addMessage(text, isUser, false)); return; } const div = document.createElement('div'); div.className = `message-in ${isUser ? 'text-right' : ''}`; div.innerHTML = `<div class="${isUser ? 'bg-bolt/20 text-white' : 'bg-carbon border border-white/10'} rounded-xl p-3 inline-block max-w-[85%] ${isUser ? 'text-left' : ''}"><span class="text-sm whitespace-pre-line">${text}</span></div>`; if (!isUser) div.classList.add('text-left'); else div.classList.add('text-right'); helpMessages.appendChild(div); helpMessages.scrollTop = helpMessages.scrollHeight; resetInactiveTimer(); }
function resetInactiveTimer() { if (inactiveTimeout) clearTimeout(inactiveTimeout); inactiveTimeout = setTimeout(() => { addMessage("👀 Sei ancora lì? Mandami la posizione su WhatsApp!"); }, 30000); }
function openWhatsAppWithLocation(problemDesc = "Richiesta assistenza") { let baseMsg = `BOOSTERMAN - Richiesta intervento\n\n${problemDesc}\nOrario: ${new Date().toLocaleString('it-IT')}\n\n`; addMessage("📲 Apro WhatsApp...", false, true); if (navigator.geolocation) { navigator.geolocation.getCurrentPosition( (position) => { const lat = position.coords.latitude.toFixed(6); const lng = position.coords.longitude.toFixed(6); const mapsLink = `https://maps.google.com/?q=${lat},${lng}`; const msgWithLocation = baseMsg + `📍 Posizione GPS: ${mapsLink}`; window.open(`https://wa.me/393270447124?text=${encodeURIComponent(msgWithLocation)}`, '_blank'); }, (error) => { let errorMsg = ""; if (error.code === 1) errorMsg = "📍 Non hai condiviso la posizione. Invia manualmente."; else errorMsg = "📍 Posizione non rilevata. Invia manualmente."; const msgNoLocation = baseMsg + `📍 Posizione: (da inviare manualmente)`; window.open(`https://wa.me/393270447124?text=${encodeURIComponent(msgNoLocation)}`, '_blank'); addMessage(errorMsg, false, false); }, { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 } ); } else { const msgNoGPS = baseMsg + "📍 Posizione: (invia manualmente)"; window.open(`https://wa.me/393270447124?text=${encodeURIComponent(msgNoGPS)}`, '_blank'); addMessage("📍 Invia la posizione manualmente su WhatsApp.", false, false); } }

// DOMANDE PIÙ CORTE
function handleProblem(problem) { 
    const responses = { 
        battery: () => { 
            addMessage("🔋 Click secco o gira lento?", false, true); 
            setTimeout(() => { addMessage("📍 Invia posizione su WhatsApp!", false); }, 2000); 
        }, 
        tire: () => { 
            addMessage("🛞 Gomma a terra? Accendi le 4 frecce.", false, true); 
            setTimeout(() => { addMessage("📍 Invia posizione su WhatsApp!", false); }, 2000); 
        }, 
        key: () => { 
            addMessage("🔑 Chiavi in auto? Non forzare!", false, true); 
            setTimeout(() => { addMessage("📍 Invia posizione su WhatsApp!", false); }, 2000); 
        }, 
        light: () => { 
            addMessage("💡 Spia accesa? Foto al cruscotto su WhatsApp.", false, true); 
        }, 
        electrical: () => { 
            addMessage("🔌 Descrivi il problema su WhatsApp.", false, true); 
        } 
    }; 
    if (responses[problem]) responses[problem](); 
    else addMessage("📞 Contattaci su WhatsApp!", false); 
}

function handleInfo(info) { 
    const infoResponses = { 
        prices: () => { addMessage("💰 Prezzi: Avviamento 30€, Gomma 40€, Apertura 50€. +5/30€ in base alla zona.", false); }, 
        zones: () => { addMessage("📍 Copriamo tutta Roma: centro, GRA, Fiumicino, Ciampino, Castelli.", false); }, 
        times: () => { addMessage("⏱ Tempi: Centro 15-25′, GRA 25-40′, Fiumicino 30-45′.", false); }, 
        towing: () => { addMessage("🚛 Traino disponibile su richiesta. Contattaci su WhatsApp.", false); } 
    }; 
    if (infoResponses[info]) infoResponses[info](); 
    else addMessage("📞 Chiama o scrivi su WhatsApp. Siamo H24!", false); 
}

function handleFreeText(text) { 
    const lower = text.toLowerCase(); 
    if (lower.includes('batteria') || lower.includes('non parte')) handleProblem('battery'); 
    else if (lower.includes('gomma') || lower.includes('pneumatico')) handleProblem('tire'); 
    else if (lower.includes('chiavi') || lower.includes('chiuso')) handleProblem('key'); 
    else if (lower.includes('spia') || lower.includes('luce')) handleProblem('light'); 
    else if (lower.includes('elettrico') || lower.includes('motorino')) handleProblem('electrical'); 
    else if (lower.includes('prezzo') || lower.includes('costo')) handleInfo('prices'); 
    else if (lower.includes('dove') || lower.includes('zona')) handleInfo('zones'); 
    else if (lower.includes('tempo') || lower.includes('minuti')) handleInfo('times'); 
    else if (lower.includes('traino')) handleInfo('towing'); 
    else { addMessage(`📝 "${text}" - Mandami la posizione su WhatsApp!`, false, true); } 
}

if (helpClosed && helpOpen) { helpClosed.addEventListener('click', () => { helpClosed.style.display = 'none'; helpOpen.style.display = 'flex'; if (helpMessages.children.length === 0) { addMessage(`${getGreeting()}! 👋\n\nSono HELP.\n\n🔴 Per emergenza → clicca "Invia posizione"\nℹ️ Per info → seleziona un argomento`, false); } resetInactiveTimer(); }); }
if (closeHelpChatBtn && helpOpen && helpClosed) { closeHelpChatBtn.addEventListener('click', function() { helpOpen.style.display = 'none'; helpClosed.style.display = 'flex'; if (inactiveTimeout) clearTimeout(inactiveTimeout); }); }
document.querySelectorAll('.problem-btn').forEach(btn => btn.addEventListener('click', () => handleProblem(btn.dataset.problem)));
document.querySelectorAll('.info-btn').forEach(btn => btn.addEventListener('click', () => handleInfo(btn.dataset.info)));
if (helpSendBtn && helpInput) { helpSendBtn.addEventListener('click', () => { const text = helpInput.value.trim(); if (text) { addMessage(text, true); helpInput.value = ''; handleFreeText(text); } }); }
if (helpInput) { helpInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') helpSendBtn.click(); }); }
if (helpCallBtn) { helpCallBtn.addEventListener('click', () => { window.location.href = 'tel:+393270447124'; addMessage("📞 Chiamata in corso...", false, true); }); }
if (helpWABtn) { helpWABtn.addEventListener('click', () => { openWhatsAppWithLocation("Richiesta assistenza"); }); }
if (sendLocationBtn) { sendLocationBtn.addEventListener('click', () => { openWhatsAppWithLocation("Richiesta assistenza con posizione"); }); }

// ============ COOKIE BANNER ============
if (!localStorage.getItem('cookieConsent')) { const banner = document.getElementById('cookieBanner'); if (banner) banner.classList.remove('hidden'); }
window.acceptCookies = function() { localStorage.setItem('cookieConsent', 'all'); const banner = document.getElementById('cookieBanner'); if (banner) banner.classList.add('hidden'); };
window.declineCookies = function() { localStorage.setItem('cookieConsent', 'necessary'); const banner = document.getElementById('cookieBanner'); if (banner) banner.classList.add('hidden'); };