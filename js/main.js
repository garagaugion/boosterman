// BOOSTERMAN - Script condiviso

document.addEventListener('DOMContentLoaded', function() {
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
});

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

document.getElementById('privacyLink')?.addEventListener('click', (e) => { e.preventDefault(); document.getElementById('modalPrivacy').classList.remove('hidden'); });
document.getElementById('cookieLink')?.addEventListener('click', (e) => { e.preventDefault(); document.getElementById('modalCookie').classList.remove('hidden'); });

const servicesDropdown = [
    { name: 'Avviamento Batteria', price: 'da 30€', emoji: '⚡', desc: 'Jump start con booster professionale' },
    { name: 'Sostituzione Batteria', price: 'da 50€ + batteria', emoji: '🔋', desc: 'Batterie originali sempre a bordo' },
    { name: 'Gomma Forata', price: 'da 40€', emoji: '🛞', desc: 'Sostituzione con ruota di scorta' },
    { name: 'Apertura Porte Auto', price: 'da 50€', emoji: '🔑', desc: 'Apertura non distruttiva' },
    { name: 'Diagnosi Elettronica', price: 'da 40€', emoji: '🔧', desc: 'Lettura errori OBD' },
    { name: 'Sostituzione Lampadine', price: 'da 20€', emoji: '💡', desc: 'Anabbaglianti, stop, abbaglianti' }
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
function resetInactiveTimer() { if (inactiveTimeout) clearTimeout(inactiveTimeout); inactiveTimeout = setTimeout(() => { addMessage("👀 Sei ancora lì? Se vuoi, mandami subito la tua posizione su WhatsApp così il tecnico parte immediatamente."); }, 30000); }
function openWhatsAppWithLocation(problemDesc = "Richiesta assistenza") { let baseMsg = `BOOSTERMAN - Richiesta intervento\n\n${problemDesc}\nOrario: ${new Date().toLocaleString('it-IT')}\n\n`; addMessage("📲 Apro WhatsApp... Il tecnico ti risponderà in pochi minuti.", false, true); if (navigator.geolocation) { navigator.geolocation.getCurrentPosition( (position) => { const lat = position.coords.latitude.toFixed(6); const lng = position.coords.longitude.toFixed(6); const mapsLink = `https://maps.google.com/?q=${lat},${lng}`; const msgWithLocation = baseMsg + `📍 Posizione GPS: ${mapsLink}\n\n(Il tecnico vedrà esattamente dove sei)`; window.open(`https://wa.me/393270447124?text=${encodeURIComponent(msgWithLocation)}`, '_blank'); }, (error) => { let errorMsg = ""; if (error.code === 1) errorMsg = "📍 Non hai condiviso la posizione. Puoi inviarla manualmente su WhatsApp quando vuoi."; else errorMsg = "📍 Posizione non rilevata. Puoi inviarla manualmente su WhatsApp."; const msgNoLocation = baseMsg + `📍 Posizione: (da inviare manualmente)`; window.open(`https://wa.me/393270447124?text=${encodeURIComponent(msgNoLocation)}`, '_blank'); addMessage(errorMsg, false, false); }, { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 } ); } else { const msgNoGPS = baseMsg + "📍 Posizione: (invia manualmente per favore)"; window.open(`https://wa.me/393270447124?text=${encodeURIComponent(msgNoGPS)}`, '_blank'); addMessage("📍 Il tuo browser non supporta la geolocalizzazione. Puoi inviare la posizione manualmente su WhatsApp.", false, false); } }
function handleProblem(problem) { const responses = { battery: () => { addMessage("🔋 Batteria scarica? Quando giri la chiave, senti:", false, true); setTimeout(() => { addMessage("🅰️ **Click secco** (batteria a terra al 99%)\n🅱️ **Gira lento** (batteria molto scarica)\n🅲️ **Non fa niente** (potrebbe essere elettrico/motorino)", false); addMessage("📍 Mandami la tua posizione su WhatsApp così il tecnico parte subito!", false); }, 2000); }, tire: () => { addMessage("🛞 Gomma forata? 😤 Accendi le **4 frecce** e metti il **triangolo** se sei in strada.", false, true); setTimeout(() => { addMessage("Il nostro tecnico arriva con ruotino di scorta e attrezzi professionali.\n\n📍 Mandami la posizione su WhatsApp, parto subito!", false); }, 2000); }, key: () => { addMessage("🔑 Chiavi chiuse in auto? Che scocciatura!", false, true); setTimeout(() => { addMessage("**Non forzare la portiera**! Rischia di rompere il vetro o la serratura.\n\nUsiamo attrezzi per apertura **non distruttiva** in 10-15 minuti.\n\n📍 Mandami la posizione su WhatsApp, ti liberiamo subito!", false); }, 2000); }, light: () => { addMessage("💡 Spia accesa? Dipende dal colore:", false, true); setTimeout(() => { addMessage("🟡 **Gialla/arancione** → puoi guidare ma fai controllare\n🔴 **Rossa** → FERMATI subito e chiamaci!\n\n📸 Fai una foto al cruscotto e inviala su WhatsApp. Il tecnico ti dice subito cosa fare.", false); }, 2000); }, electrical: () => { addMessage("🔌 Guasto elettrico? Cosa succede esattamente?", false, true); setTimeout(() => { addMessage("Luci che si accendono/spegnono da sole? Motorino che non gira? Alzacristalli lenti?\n\n📞 Descrivi il problema su WhatsApp e ti aiutiamo subito.", false); }, 2000); } }; if (responses[problem]) responses[problem](); else addMessage("📞 Contattaci su WhatsApp per assistenza immediata.", false); }
function handleInfo(info) { const infoResponses = { prices: () => { addMessage("💰 **Prezzi in base alla distanza** (nessun sovrapprezzo notturno/festivi):", false); addMessage("• Roma Centro: Avviamento 30€, Gomma 40€, Apertura 50€\n• Semi-centro: +5€\n• GRA: +10€\n• Fiumicino/Ciampino: +20€\n• Castelli Romani: +30€", false); setTimeout(() => addMessage("📍 Se vuoi un preventivo esatto, dimmi in che zona sei o inviami la posizione!", false), 2000); }, zones: () => { addMessage("📍 **Copriamo tutta Roma e provincia**:\n\nCentro, GRA, Fiumicino, Ciampino, Castelli Romani, EUR, e tutti i quadranti (Nord, Sud, Est, Ovest).\n\nTempo medio: 20-40 minuti.", false); setTimeout(() => addMessage("📲 Mandami la posizione per il tempo esatto di arrivo!", false), 2000); }, times: () => { addMessage("⏱ **Tempi di arrivo medi:**\n\n• Roma Centro: 15-25 min\n• Quartieri semi-centrali: 20-30 min\n• GRA: 25-40 min\n• Fiumicino/Ciampino: 30-45 min\n• Castelli Romani: 30-50 min", false); }, towing: () => { addMessage("🚛 **Servizio traino** disponibile su richiesta.\n\nIl 90% degli interventi viene risolto sul posto. Se serve il traino, lo organizziamo noi con mezzi convenzionati.\n\n📞 Contattaci su WhatsApp per maggiori info.", false); } }; if (infoResponses[info]) infoResponses[info](); else addMessage("📞 Chiama o scrivi su WhatsApp. Siamo qui H24!", false); }
function handleFreeText(text) { const lower = text.toLowerCase(); if (lower.includes('batteria') || lower.includes('non parte') || lower.includes('click')) handleProblem('battery'); else if (lower.includes('gomma') || lower.includes('pneumatico') || lower.includes('forata')) handleProblem('tire'); else if (lower.includes('chiavi') || lower.includes('chiuso') || lower.includes('porta')) handleProblem('key'); else if (lower.includes('spia') || lower.includes('lampadina') || lower.includes('luce')) handleProblem('light'); else if (lower.includes('elettrico') || lower.includes('motorino') || lower.includes('alternatore')) handleProblem('electrical'); else if (lower.includes('prezzo') || lower.includes('costo') || lower.includes('quanto')) handleInfo('prices'); else if (lower.includes('dove') || lower.includes('zona') || lower.includes('arrivi')) handleInfo('zones'); else if (lower.includes('tempo') || lower.includes('minuti')) handleInfo('times'); else if (lower.includes('traino') || lower.includes('carro')) handleInfo('towing'); else { addMessage(`📝 Ho capito: "${text}"`, false, true); setTimeout(() => { addMessage("Il modo più veloce per aiutarti? **Mandami la tua posizione su WhatsApp**. Il tecnico parte subito!\n\n📍 Clicca il pulsante verde qui sotto 👇", false); }, 1500); } }

if (helpClosed && helpOpen) { helpClosed.addEventListener('click', () => { helpClosed.style.display = 'none'; helpOpen.style.display = 'flex'; if (helpMessages.children.length === 0) { addMessage(`${getGreeting()}! 👋\n\nSono HELP, l'assistente di BOOSTERMAN.\n\nSei in panne? Posso aiutarti in due modi:\n\n🔴 **Emergenza** → clicca "Invia posizione" qui sotto, calcolo il tempo di arrivo e apro WhatsApp\n\nℹ️ **Solo info** → seleziona un argomento o scrivimi cosa ti serve\n\n📍 Clicca il pulsante verde qui sotto 👇`, false); } resetInactiveTimer(); }); }
if (closeHelpChatBtn && helpOpen && helpClosed) { closeHelpChatBtn.addEventListener('click', function() { helpOpen.style.display = 'none'; helpClosed.style.display = 'flex'; if (inactiveTimeout) clearTimeout(inactiveTimeout); }); }
document.querySelectorAll('.problem-btn').forEach(btn => btn.addEventListener('click', () => handleProblem(btn.dataset.problem)));
document.querySelectorAll('.info-btn').forEach(btn => btn.addEventListener('click', () => handleInfo(btn.dataset.info)));
if (helpSendBtn && helpInput) { helpSendBtn.addEventListener('click', () => { const text = helpInput.value.trim(); if (text) { addMessage(text, true); helpInput.value = ''; handleFreeText(text); } }); }
if (helpInput) { helpInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') helpSendBtn.click(); }); }
if (helpCallBtn) { helpCallBtn.addEventListener('click', () => { window.location.href = 'tel:+393270447124'; addMessage("📞 Apro la chiamata... Il tecnico risponderà subito.", false, true); }); }
if (helpWABtn) { helpWABtn.addEventListener('click', () => { openWhatsAppWithLocation("Richiesta assistenza"); }); }
if (sendLocationBtn) { sendLocationBtn.addEventListener('click', () => { openWhatsAppWithLocation("Richiesta assistenza con posizione"); }); }

if (!localStorage.getItem('cookieConsent')) { const banner = document.getElementById('cookieBanner'); if (banner) banner.classList.remove('hidden'); }
window.acceptCookies = function() { localStorage.setItem('cookieConsent', 'all'); const banner = document.getElementById('cookieBanner'); if (banner) banner.classList.add('hidden'); };
window.declineCookies = function() { localStorage.setItem('cookieConsent', 'necessary'); const banner = document.getElementById('cookieBanner'); if (banner) banner.classList.add('hidden'); };