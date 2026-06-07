'use client';
import { useMemo, useState } from 'react';

const PHONE_NUMBER = '393270447124';
const PHONE = `tel:+${PHONE_NUMBER}`;
const WA_BASE = `https://wa.me/${PHONE_NUMBER}?text=`;

type Step = 'start' | 'auto' | 'battery' | 'tyre' | 'keys' | 'warning' | 'summary';
type Answer = { question: string; answer: string };

type ProblemConfig = {
  emoji: string;
  label: string;
  intro: string;
  questions: { question: string; answers: string[] }[];
  fallback: string;
};

const PROBLEMS: Record<string, ProblemConfig> = {
  auto: {
    emoji: '🚗',
    label: 'Auto non parte',
    intro: 'Ok, ti faccio 3 domande rapide per capire se può essere batteria, motorino o diagnosi elettronica.',
    questions: [
      { question: 'Il quadro si accende quando giri la chiave o premi Start?', answers: ['Sì, si accende', 'No, tutto spento', 'Si accende debole'] },
      { question: 'Quando provi ad avviare cosa succede?', answers: ['Fa click', 'Il motore gira ma non parte', 'Non fa nessun rumore'] },
      { question: 'Hai luci/spie strane o messaggi sul cruscotto?', answers: ['Sì, spie accese', 'No, nessuna spia', 'Non lo so'] },
    ],
    fallback: 'Potrebbe essere batteria scarica, motorino di avviamento oppure un problema elettronico. Conviene parlare con un tecnico e inviare la posizione.',
  },
  battery: {
    emoji: '🔋',
    label: 'Batteria scarica',
    intro: 'Ti aiuto a capire se serve solo avviamento o sostituzione batteria.',
    questions: [
      { question: 'Il quadro si accende?', answers: ['No, tutto spento', 'Sì ma debole', 'Sì normalmente'] },
      { question: 'Da quanto tempo l’auto è ferma?', answers: ['Da poche ore', 'Da 1-2 giorni', 'Da più giorni'] },
      { question: 'Hai già provato con booster o cavi?', answers: ['No', 'Sì ma non parte', 'Sì ed è partita'] },
    ],
    fallback: 'Sembra un problema di batteria. Possiamo fare avviamento sul posto o valutare sostituzione batteria a domicilio.',
  },
  tyre: {
    emoji: '🛞',
    label: 'Gomma forata',
    intro: 'Vediamo subito se si può risolvere sul posto in sicurezza.',
    questions: [
      { question: 'Hai la ruota di scorta o kit gonfia-ripara?', answers: ['Ruota di scorta', 'Kit gonfia-ripara', 'Non lo so'] },
      { question: 'La macchina è in una zona sicura?', answers: ['Sì, parcheggiata', 'No, strada trafficata', 'Sono in emergenza'] },
      { question: 'La gomma è completamente a terra?', answers: ['Sì', 'No, perde piano', 'Non lo so'] },
    ],
    fallback: 'Serve verificare il punto esatto e il tipo di danno. Un tecnico può guidarti o intervenire sul posto.',
  },
  keys: {
    emoji: '🔑',
    label: 'Chiavi in auto',
    intro: 'Ti faccio due domande per capire se serve apertura non distruttiva.',
    questions: [
      { question: 'Le chiavi sono visibili dentro l’auto?', answers: ['Sì', 'No', 'Non sono sicuro'] },
      { question: 'L’auto è chiusa completamente?', answers: ['Sì', 'No, un finestrino aperto poco', 'Non lo so'] },
      { question: 'Che tipo di veicolo è?', answers: ['Auto', 'SUV', 'Furgone'] },
    ],
    fallback: 'Potrebbe servire apertura non distruttiva. Meglio parlare con un tecnico prima di fare tentativi che possono danneggiare il veicolo.',
  },
  warning: {
    emoji: '⚠️',
    label: 'Spie accese / diagnosi',
    intro: 'Ti aiuto a capire se puoi muovere l’auto o se conviene fermarti.',
    questions: [
      { question: 'Che spia vedi?', answers: ['Motore', 'Batteria', 'Temperatura/olio', 'Non lo so'] },
      { question: 'L’auto cammina normalmente?', answers: ['Sì', 'No, va male', 'Non voglio rischiare'] },
      { question: 'La spia lampeggia o resta fissa?', answers: ['Lampeggia', 'Fissa', 'Non lo so'] },
    ],
    fallback: 'Potrebbe servire diagnosi elettronica OBD. Se la spia è rossa o lampeggia, meglio non rischiare e parlare con un tecnico.',
  },
};

function trackBoostermanEvent(action: string) {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new CustomEvent('boosterman-cta', { detail: { action } }));
}

export default function ChatWidget({ hideMobileFab = false }: { hideMobileFab?: boolean }) {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>('start');
  const [problemKey, setProblemKey] = useState<string>('');
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [locationLoading, setLocationLoading] = useState(false);
  const [manualAddress, setManualAddress] = useState('');

  const currentProblem = problemKey ? PROBLEMS[problemKey] : null;
  const currentQuestion = currentProblem?.questions[answers.length];

  const summaryText = useMemo(() => {
    if (!currentProblem) return 'Ciao BOOSTERMAN, ho bisogno di assistenza per la mia auto.';
    const details = answers.map((a) => `- ${a.question}: ${a.answer}`).join('\n');
    return `Ciao BOOSTERMAN, ho bisogno di assistenza.\nProblema: ${currentProblem.label}\n${details ? `Risposte:\n${details}\n` : ''}Nota chat: ${currentProblem.fallback}`;
  }, [answers, currentProblem]);

  function openWhatsApp(message: string, action = 'whatsapp_chat') {
    trackBoostermanEvent(action);
    window.open(`${WA_BASE}${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  }

  function startProblem(key: string) {
    setProblemKey(key);
    setAnswers([]);
    setStep(key as Step);
    trackBoostermanEvent(`chat_start_${key}`);
  }

  function answerQuestion(answer: string) {
    if (!currentProblem || !currentQuestion) return;
    const nextAnswers = [...answers, { question: currentQuestion.question, answer }];
    setAnswers(nextAnswers);
    if (nextAnswers.length >= currentProblem.questions.length) {
      setStep('summary');
    }
  }

  function resetChat() {
    setStep('start');
    setProblemKey('');
    setAnswers([]);
    setManualAddress('');
  }

  function sendManualAddress() {
    const address = manualAddress.trim();
    if (!address) {
      openWhatsApp(`🚨 SOS BOOSTERMAN

${summaryText}

Ho bisogno di assistenza urgente. Inserirò via e civico su WhatsApp.`, 'whatsapp_manual_address_empty');
      return;
    }
    openWhatsApp(`🚨 SOS BOOSTERMAN - INDIRIZZO MANUALE

${summaryText}

Indirizzo scritto dal cliente:
${address}`, 'whatsapp_manual_address');
  }

  function sendLocation() {
    trackBoostermanEvent('sos_location_click');
    if (!navigator.geolocation) {
      openWhatsApp(`🚨 SOS BOOSTERMAN\n\n${summaryText}\n\nHo premuto SOS ma il telefono non supporta la posizione GPS. Vi scrivo via e civico su WhatsApp.`, 'whatsapp_location_fallback');
      return;
    }
    setLocationLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocationLoading(false);
        const { latitude, longitude } = pos.coords;
        const message = `🚨 SOS BOOSTERMAN - POSIZIONE CLIENTE\n\n${summaryText}\n\nHo premuto il pulsante SOS / Invia posizione GPS.\nCoordinate Google Maps:\nhttps://maps.google.com/?q=${latitude},${longitude}`;
        openWhatsApp(message, 'whatsapp_location_sent');
      },
      () => {
        setLocationLoading(false);
        openWhatsApp(`🚨 SOS BOOSTERMAN\n\n${summaryText}\n\nHo premuto SOS ma non sono riuscito ad autorizzare la posizione GPS. Vi scrivo via e civico manualmente su WhatsApp.`, 'whatsapp_location_denied');
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  }

  return (
    <>
      <button
        className={`chat-fab ${hideMobileFab ? 'chat-fab-hide-mobile' : ''}`}
        onClick={() => setOpen(!open)}
        aria-label="Apri assistente BOOSTERMAN"
        aria-expanded={open}
        type="button"
      >
        {open ? '✕' : '🤖'}
        {!open && <span className="chat-fab-badge" />}
      </button>

      <div
        className={`chat-panel ${open ? 'open' : ''}`}
        role="dialog"
        aria-label="Assistente BOOSTERMAN"
        aria-modal="true"
      >
        <div className="chat-header">
          <div className="chat-header-info">
            <div className="chat-avatar">🤖</div>
            <div>
              <div className="chat-name">BOOSTERMAN</div>
              <div className="chat-status">Online H24</div>
            </div>
          </div>
          <button className="chat-close" onClick={() => setOpen(false)} aria-label="Chiudi chat" type="button">✕</button>
        </div>

        <div className="chat-body">
          {step === 'start' && (
            <>
              <div className="chat-bubble">
                <strong>Ciao! 👋</strong>
                Ti aiuto a capire cosa può essere successo. Scegli il problema: se non sai rispondere, alla fine puoi parlare subito con un tecnico.
              </div>
              <div className="chat-options">
                {Object.entries(PROBLEMS).map(([key, opt]) => (
                  <button key={key} className="chat-option" onClick={() => startProblem(key)} type="button">
                    <span>{opt.emoji}</span>
                    {opt.label}
                    <span className="chat-arrow">→</span>
                  </button>
                ))}
                <button className="chat-option" onClick={() => openWhatsApp('Ciao BOOSTERMAN, ho bisogno di assistenza urgente ma non so spiegare il problema.', 'whatsapp_chat_unsure')} type="button">
                  <span>❓</span>
                  Non lo so / voglio un tecnico
                  <span className="chat-arrow">→</span>
                </button>
              </div>
              <div className="gap-note">💡 Il prezzo viene sempre comunicato e approvato prima dell'intervento.</div>
            </>
          )}

          {step !== 'start' && step !== 'summary' && currentProblem && currentQuestion && (
            <>
              <div className="chat-bubble">
                <strong>{currentProblem.emoji} {currentProblem.label}</strong>
                {answers.length === 0 ? currentProblem.intro : 'Perfetto, continuo con la prossima domanda.'}
              </div>
              <div className="chat-bubble chat-bubble-question">
                <strong>Domanda {answers.length + 1} di {currentProblem.questions.length}</strong>
                {currentQuestion.question}
              </div>
              <div className="chat-options">
                {currentQuestion.answers.map((answer) => (
                  <button key={answer} className="chat-option" onClick={() => answerQuestion(answer)} type="button">
                    {answer}
                    <span className="chat-arrow">→</span>
                  </button>
                ))}
                <button className="chat-option" onClick={() => setStep('summary')} type="button">
                  Non lo so, voglio parlare con un tecnico
                  <span className="chat-arrow">→</span>
                </button>
              </div>
            </>
          )}

          {step === 'summary' && currentProblem && (
            <>
              <div className="chat-bubble">
                <strong>Prima valutazione</strong>
                {currentProblem.fallback}
              </div>
              {answers.length > 0 && (
                <div className="chat-summary">
                  <strong>Risposte raccolte:</strong>
                  {answers.map((a) => (
                    <div key={`${a.question}-${a.answer}`}>
                      <span>{a.question}</span>
                      <b>{a.answer}</b>
                    </div>
                  ))}
                </div>
              )}
              <div className="chat-options">
                <button className="chat-option chat-option-strong" onClick={() => openWhatsApp(summaryText, 'whatsapp_chat_diagnosis')} type="button">
                  <span>💬</span>
                  Invia diagnosi su WhatsApp
                </button>
                <button className="chat-option chat-option-sos" onClick={sendLocation} type="button" disabled={locationLoading}>
                  <span>🚨</span>
                  {locationLoading ? 'Sto prendendo la posizione...' : 'SOS - Invia posizione GPS'}
                </button>
                <div className="chat-manual-address">
                  <label htmlFor="chat-address">Oppure inserisci via e civico manualmente</label>
                  <input
                    id="chat-address"
                    value={manualAddress}
                    onChange={(e) => setManualAddress(e.target.value)}
                    placeholder="Esempio: Via Tuscolana 123, Roma"
                  />
                  <button className="chat-option chat-option-strong" onClick={sendManualAddress} type="button">
                    <span>📍</span>
                    Invia via/civico su WhatsApp
                  </button>
                </div>
                <a className="chat-option chat-option-strong" href={PHONE} onClick={() => trackBoostermanEvent('phone_chat')}>
                  <span>📞</span>
                  Parla con un tecnico
                </a>
                <button className="chat-option" onClick={resetChat} type="button">
                  ↻ Ricomincia diagnosi
                </button>
              </div>
            </>
          )}
        </div>

        <div className="chat-actions-new">
          <button onClick={sendLocation} className="chat-sos-main" type="button" disabled={locationLoading}>
            🚨 {locationLoading ? 'Rilevamento posizione...' : 'SOS — Invia posizione al tecnico'}
          </button>
          <p className="chat-sos-consent">Premendo accetti che la tua posizione GPS venga rilevata e condivisa con il tecnico via WhatsApp.</p>
          <button onClick={() => openWhatsApp(summaryText, 'whatsapp_chat_footer')} className="chat-wa-btn" type="button">
            💬 Scrivi su WhatsApp
          </button>
        </div>
      </div>
    </>
  );
}
