'use client';
import { useMemo, useState } from 'react';

const PHONE_NUMBER = '393270447124';
const PHONE = `tel:+${PHONE_NUMBER}`;
const WA_BASE = `https://wa.me/${PHONE_NUMBER}?text=`;

type ProblemKey = 'battery' | 'auto' | 'tyre' | 'keys' | 'warning' | 'other';
type Answer = { question: string; answer: string };

const PROBLEMS: Record<ProblemKey, {
  emoji: string;
  label: string;
  intro: string;
  questions: { question: string; answers: string[] }[];
  result: string;
}> = {
  battery: {
    emoji: '🔋',
    label: 'Batteria scarica',
    intro: 'Ti faccio poche domande per capire se serve avviamento o sostituzione batteria.',
    questions: [
      { question: 'Il quadro si accende?', answers: ['No, tutto spento', 'Sì ma debole', 'Sì normalmente'] },
      { question: 'Quando provi ad avviare senti click?', answers: ['Sì, fa click', 'No, niente rumore', 'Il motore gira'] },
    ],
    result: 'Potrebbe essere batteria scarica. Possiamo fare jump start sul posto o valutare sostituzione batteria.',
  },
  auto: {
    emoji: '🚗',
    label: 'Auto non parte',
    intro: 'Capisco. Ti aiuto a capire se può essere batteria, motorino o diagnosi elettronica.',
    questions: [
      { question: 'Il quadro si accende?', answers: ['Sì', 'No', 'Si accende debole'] },
      { question: 'Il motore gira quando provi?', answers: ['Gira ma non parte', 'Fa solo click', 'Non fa niente'] },
      { question: 'Vedi spie o messaggi sul cruscotto?', answers: ['Sì', 'No', 'Non lo so'] },
    ],
    result: 'Potrebbe essere batteria, motorino di avviamento o problema elettronico. Meglio inviare posizione e parlare con un tecnico.',
  },
  tyre: {
    emoji: '🛞',
    label: 'Gomma forata',
    intro: 'Vediamo subito se possiamo risolvere sul posto in sicurezza.',
    questions: [
      { question: 'Hai ruotino o ruota di scorta?', answers: ['Sì', 'No', 'Non lo so'] },
      { question: 'Sei in una zona sicura?', answers: ['Sì, parcheggiato', 'No, strada trafficata', 'Sono in emergenza'] },
    ],
    result: 'Montiamo il tuo ruotino o la ruota di scorta. Quando possibile effettuiamo la riparazione sul posto.',
  },
  keys: {
    emoji: '🔑',
    label: 'Chiavi in auto',
    intro: 'Ti faccio due domande per capire se serve apertura non distruttiva.',
    questions: [
      { question: 'Le chiavi sono visibili dentro?', answers: ['Sì', 'No', 'Non sono sicuro'] },
      { question: "L'auto è completamente chiusa?", answers: ['Sì', 'No', 'Non lo so'] },
    ],
    result: 'Potrebbe servire apertura non distruttiva. Non forzare porte o finestrini: meglio parlare con un tecnico.',
  },
  warning: {
    emoji: '⚠️',
    label: 'Spie accese',
    intro: "Ti aiuto a capire se puoi muovere l'auto o se serve diagnosi.",
    questions: [
      { question: 'La spia è rossa o lampeggia?', answers: ['Rossa/lampeggia', 'Gialla fissa', 'Non lo so'] },
      { question: "L'auto va male o perde potenza?", answers: ['Sì', 'No', 'Non voglio rischiare'] },
    ],
    result: 'Potrebbe servire diagnosi elettronica OBD. Se la spia è rossa o lampeggia, meglio fermarsi.',
  },
  other: {
    emoji: '❓',
    label: 'Altro problema',
    intro: 'Nessun problema, raccogliamo le informazioni essenziali.',
    questions: [
      { question: 'Sei fermo o riesci a muoverti?', answers: ['Sono fermo', 'Riesco a muovermi', 'Non lo so'] },
      { question: 'Vuoi parlare subito con un tecnico?', answers: ['Sì, subito', 'Prima WhatsApp', 'Invio posizione'] },
    ],
    result: 'Serve valutazione rapida del tecnico. Puoi chiamare, inviare WhatsApp o mandare la posizione GPS.',
  },
};

function trackBoostermanEvent(action: string) {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new CustomEvent('boosterman-cta', { detail: { action } }));
}

export default function EmergencyChatSection() {
  const [problem, setProblem] = useState<ProblemKey | null>(null);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [locationLoading, setLocationLoading] = useState(false);
  const [manualAddress, setManualAddress] = useState('');
  const [sosConfirmed, setSosConfirmed] = useState(false);

  const current = problem ? PROBLEMS[problem] : null;
  const question = current?.questions[answers.length];
  const finished = !!current && answers.length >= current.questions.length;

  const summary = useMemo(() => {
    if (!current) return 'Ciao BOOSTERMAN, ho bisogno di assistenza urgente.';
    const details = answers.map((a) => `- ${a.question}: ${a.answer}`).join('\n');
    return `🚨 SOS BOOSTERMAN\n\nProblema: ${current.label}\n${details ? `Risposte:\n${details}\n` : ''}Nota: ${current.result}`;
  }, [answers, current]);

  function openWhatsApp(message: string, action = 'whatsapp_home_chat') {
    trackBoostermanEvent(action);
    window.open(`${WA_BASE}${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  }

  function chooseProblem(key: ProblemKey) {
    setProblem(key);
    setAnswers([]);
    trackBoostermanEvent(`home_chat_${key}`);
  }

  function answer(value: string) {
    if (!current || !question) return;
    setAnswers([...answers, { question: question.question, answer: value }]);
  }

  function reset() {
    setProblem(null);
    setAnswers([]);
    setManualAddress('');
    setSosConfirmed(false);
  }

  function sendManualAddress() {
    const address = manualAddress.trim();
    openWhatsApp(
      `${summary}\n\nIndirizzo inserito dal cliente:\n${address || 'Il cliente vuole scrivere via e civico su WhatsApp.'}`,
      address ? 'home_chat_manual_address' : 'home_chat_manual_address_empty'
    );
  }

  function sendLocation() {
    trackBoostermanEvent('home_chat_sos_gps_click');
    if (!navigator.geolocation) {
      openWhatsApp(
        `${summary}\n\nHo premuto SOS ma il telefono non supporta la posizione. Scrivo via e civico manualmente.`,
        'home_chat_gps_unsupported'
      );
      return;
    }
    setLocationLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocationLoading(false);
        const { latitude, longitude } = pos.coords;
        openWhatsApp(
          `${summary}\n\nPosizione GPS inviata tramite pulsante SOS.\nPosizione Google Maps:\nhttps://maps.google.com/?q=${latitude},${longitude}`,
          'home_chat_gps_sent'
        );
      },
      () => {
        setLocationLoading(false);
        openWhatsApp(
          `${summary}\n\nHo premuto SOS ma non ho autorizzato la posizione. Scrivo via e civico manualmente.`,
          'home_chat_gps_denied'
        );
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  }

  // SOS rapido dalla schermata iniziale (senza scegliere problema)
  function sendQuickSOS() {
    trackBoostermanEvent('home_chat_quick_sos');
    if (!navigator.geolocation) {
      openWhatsApp(
        'Ciao BOOSTERMAN, ho un\'emergenza urgente. Il mio telefono non supporta la posizione GPS, vi scrivo la posizione manualmente.',
        'home_chat_quick_sos_unsupported'
      );
      return;
    }
    setLocationLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocationLoading(false);
        const { latitude, longitude } = pos.coords;
        openWhatsApp(
          `🚨 SOS BOOSTERMAN\n\nHo un\'emergenza urgente. Ho premuto il pulsante SOS.\n\nPosizione GPS:\nhttps://maps.google.com/?q=${latitude},${longitude}`,
          'home_chat_quick_sos_sent'
        );
      },
      () => {
        setLocationLoading(false);
        openWhatsApp(
          'Ciao BOOSTERMAN, ho un\'emergenza urgente. Ho premuto SOS ma non ho autorizzato la posizione. Eccola manualmente:',
          'home_chat_quick_sos_denied'
        );
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  }

  return (
    <section className="home-emergency-chat" aria-label="Assistente emergenza BOOSTERMAN">
      <div className="home-emergency-chat-head">
        <span className="home-emergency-chat-icon">🚨</span>
        <div>
          <div className="home-emergency-chat-kicker">Assistente H24</div>
          <h2>Che emergenza hai?</h2>
          <p>Scegli il problema o premi SOS per inviare subito la posizione al tecnico via WhatsApp.</p>
        </div>
      </div>

      {!current && (
        <>
          {/* Pulsante SOS principale */}
          <div className="home-sos-main-wrap">
            {!sosConfirmed ? (
              <button
                type="button"
                className="home-sos-main-btn"
                onClick={() => setSosConfirmed(true)}
              >
                <span className="home-sos-icon">🆘</span>
                <span className="home-sos-label">SOS — Invia posizione</span>
                <span className="home-sos-sub">Premi per inviare la tua posizione GPS al tecnico via WhatsApp</span>
              </button>
            ) : (
              <div className="home-sos-confirm">
                <p className="home-sos-confirm-text">
                  📍 Premendo <strong>Conferma SOS</strong> accetti di inviare la tua posizione GPS al tecnico tramite WhatsApp.
                </p>
                <button
                  type="button"
                  className="home-sos-confirm-btn"
                  onClick={sendQuickSOS}
                  disabled={locationLoading}
                >
                  {locationLoading ? '📡 Sto rilevando la posizione...' : '🚨 Conferma SOS — Invia posizione'}
                </button>
                <button
                  type="button"
                  className="home-sos-cancel-btn"
                  onClick={() => setSosConfirmed(false)}
                >
                  Annulla
                </button>
              </div>
            )}
          </div>

          {/* Scelta problema */}
          <div className="home-emergency-options">
            {(Object.keys(PROBLEMS) as ProblemKey[]).map((key) => (
              <button key={key} type="button" onClick={() => chooseProblem(key)}>
                <span>{PROBLEMS[key].emoji}</span>
                {PROBLEMS[key].label}
              </button>
            ))}
          </div>
        </>
      )}

      {current && !finished && question && (
        <div className="home-emergency-step">
          <button type="button" className="home-emergency-back" onClick={reset}>← cambia problema</button>
          <div className="home-emergency-bubble">
            <strong>{current.emoji} {current.label}</strong>
            {answers.length === 0 ? current.intro : 'Ok, continuo con la prossima domanda.'}
          </div>
          <div className="home-emergency-question">
            <strong>Domanda {answers.length + 1} di {current.questions.length}</strong>
            <span>{question.question}</span>
          </div>
          <div className="home-emergency-options single">
            {question.answers.map((value) => (
              <button key={value} type="button" onClick={() => answer(value)}>{value}</button>
            ))}
            <button type="button" onClick={() => setAnswers(current.questions.map((q) => ({ question: q.question, answer: 'Non lo so' })))}>
              Non lo so, voglio un tecnico
            </button>
          </div>
        </div>
      )}

      {current && finished && (
        <div className="home-emergency-step">
          <button type="button" className="home-emergency-back" onClick={reset}>← nuova emergenza</button>
          <div className="home-emergency-bubble result">
            <strong>Prima valutazione</strong>
            {current.result}
          </div>
          <div className="home-emergency-actions">
            <button type="button" className="home-sos-button" onClick={sendLocation} disabled={locationLoading}>
              🚨 {locationLoading ? 'Sto rilevando la posizione...' : 'SOS — Invia posizione GPS'}
            </button>
            <p className="home-sos-consent">
              📍 Premendo SOS accetti di inviare la tua posizione GPS al tecnico via WhatsApp.
            </p>
            <a href={PHONE} onClick={() => trackBoostermanEvent('home_chat_phone')}>📞 Chiama tecnico</a>
            <button type="button" onClick={() => openWhatsApp(summary, 'home_chat_whatsapp_summary')}>💬 WhatsApp</button>
          </div>
          <div className="home-manual-address">
            <label htmlFor="home-chat-address">Oppure inserisci via e civico manualmente</label>
            <input
              id="home-chat-address"
              value={manualAddress}
              onChange={(e) => setManualAddress(e.target.value)}
              placeholder="Esempio: Via Tuscolana 123, Roma"
            />
            <button type="button" onClick={sendManualAddress}>📍 Invia via/civico su WhatsApp</button>
          </div>
        </div>
      )}
    </section>
  );
}
