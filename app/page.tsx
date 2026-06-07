import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyBar from '@/components/StickyBar';
import ChatWidget from '@/components/ChatWidget';
import EmergencyChatSection from '@/components/EmergencyChatSection';

export const metadata: Metadata = {
  title: 'BOOSTERMAN — SOS Batterie & Assistenza Auto H24 Roma',
  description: 'Batteria scarica? Auto bloccata? Pronto intervento mobile H24, 7 giorni su 7, festivi inclusi. Avviamento batteria, sostituzione, gomma forata, apertura porte. Roma e provincia.',
};

const SERVICES = [
  { emoji: '⚡', name: 'Batteria Scarica', desc: 'Il tuo motore non parte? Arriviamo noi con il booster e ti rimettiamo in moto. Intervento in 20–40 minuti, direttamente dove sei.', badge: 'H24', highlight: true },
  { emoji: '🔋', name: 'Nuova Batteria', desc: 'Batteria da sostituire? Portiamo la batteria giusta per la tua auto e la installiamo sul posto, senza che tu debba andare in officina.', badge: 'H24', highlight: true },
  { emoji: '🛞', name: 'Gomma Forata', desc: 'Pneumatico a terra? Montiamo il tuo ruotino di scorta oppure, quando possibile, ripariamo la gomma sul posto.', badge: 'H24', highlight: false },
  { emoji: '🔑', name: 'Chiavi in Auto', desc: 'Hai lasciato le chiavi dentro? Apriamo la tua auto senza danneggiarla — intervento non distruttivo, in totale sicurezza.', badge: 'H24', highlight: false },
  { emoji: '🔧', name: 'Diagnosi Elettronica', desc: 'Spia accesa sul cruscotto? Colleghiamo lo scanner OBD2 e ti diciamo subito cosa non va, in linguaggio semplice.', badge: 'H24', highlight: false },
  { emoji: '💡', name: 'Lampadine Fulminate', desc: 'Faro spento, luce stop bruciata? Sostituiamo sul posto anabbaglianti, abbaglianti, frecce e stop.', badge: 'H24', highlight: false },
  { emoji: '🎥', name: 'Dash Cam', desc: 'Installiamo la tua telecamera da cruscotto in modo pulito e professionale, cavi nascosti inclusi.', badge: 'Appunt.', highlight: false },
  { emoji: '📡', name: 'GPS Antifurto', desc: 'Localizzatore satellitare installato in modo discreto sulla tua auto. Saprai sempre dov\'è il tuo veicolo.', badge: 'Appunt.', highlight: false },
  { emoji: '🎵', name: 'Impianti Hi-Fi', desc: 'Autoradio, altoparlanti, amplificatori e subwoofer installati a regola d\'arte sul tuo veicolo.', badge: 'Appunt.', highlight: false },
];

const REVIEWS = [
  { text: 'Competenza, educazione e velocità. Lo consiglio a tutti.', author: 'Massimo Tomanin', initials: 'MT', color: '#2563eb' },
  { text: 'Super efficienti e gentilissimi. Arrivati in meno di 30 minuti, batteria sostituita in pochissimo.', author: 'Giorgia De Carolis', initials: 'GD', color: '#7c3aed' },
  { text: 'Intervento rapido e professionale per la batteria. Prezzi onesti e comunicati prima. Ottimo!', author: 'Alessia R.', initials: 'AR', color: '#db2777' },
  { text: 'Arrivati in 25 minuti, problema risolto subito. Servizio eccellente, li richiamerò sicuramente.', author: 'Marco R.', initials: 'MR', color: '#059669' },
];

const TICKER_ITEMS = [
  '⚡ SOS Batterie H24', '🔋 Sostituzione Batteria', '🛞 Gomma Forata',
  '🔑 Apertura Porte', '🔧 Diagnosi Elettronica', '📡 GPS Antifurto', '🎥 Dash Cam',
  '🎵 Hi-Fi Auto', '⚡ Pronto Intervento Mobile · H24 · 7/7',
];

export default function Home() {
  return (
    <>
      <Header />

      {/* Ticker */}
      <div className="ticker-wrap" style={{marginTop:'60px'}}>
        <div className="ticker-inner">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span key={i} className="ticker-item">{item} •</span>
          ))}
        </div>
      </div>

      {/* Hero */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-badge">● Operativi ora · Festivi inclusi</div>
        <h1>
          SOS<br />
          Batterie<br />
          <span>&amp; Assistenza</span><br />
          Auto H24
        </h1>
        <p className="hero-sub">
          Auto bloccata? Arriviamo noi da te. Pronto Intervento Mobile · H24 · 7 giorni su 7 · Festivi inclusi. Roma e provincia.
        </p>

        {/* Assistente emergenza PRIMA delle statistiche */}
        <EmergencyChatSection />

        <div className="hero-stats" style={{marginTop:'20px'}}>
          <div className="hero-stat">
            <span className="hero-stat-value">24/7</span>
            <span className="hero-stat-label">Sempre attivi</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-value">10+</span>
            <span className="hero-stat-label">Anni a Roma</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-value">4,8★</span>
            <span className="hero-stat-label">Su Google</span>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Servizi */}
      <section className="section">
        <div className="section-label">— I nostri servizi</div>
        <h2 className="section-title">Cosa facciamo</h2>
        <div className="services-grid">
          {SERVICES.map((s) => (
            <div key={s.name} className={`service-card ${s.highlight ? 'highlight' : ''}`}>
              <span className="service-icon">{s.emoji}</span>
              <span className="service-name">{s.name}</span>
              <span className="service-desc">{s.desc}</span>
              <span className="service-badge">{s.badge}</span>
            </div>
          ))}
        </div>
        <div style={{marginTop:'20px'}}>
          <a href="tel:+393270447124" className="btn-call" data-boosterman-cta="phone_services">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="white" style={{flexShrink:0}}><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg>
            Chiama ora — +39 327 044 7124
          </a>
        </div>
      </section>

      <div className="divider" />

      {/* Recensioni */}
      <section className="section">
        <div className="section-label">— Recensioni Google</div>
        <h2 className="section-title">4,8/5 su Google</h2>
        <div className="rating-big">
          <div className="rating-number">4,8</div>
          <div className="rating-info">
            <div className="rating-stars">★★★★★</div>
            <div className="rating-count">20 recensioni verificate</div>
          </div>
        </div>
        <div className="reviews-list">
          {REVIEWS.map((r) => (
            <div key={r.author} className="review-card">
              <div className="review-header">
                <div className="review-avatar" style={{background: r.color}}>
                  {r.initials}
                </div>
                <div className="review-meta">
                  <div className="review-author">{r.author}</div>
                  <div className="review-stars">★★★★★</div>
                </div>
              </div>
              <div className="review-text">&ldquo;{r.text}&rdquo;</div>
            </div>
          ))}
        </div>
        <div style={{marginTop:'16px'}}>
          <a
            href="https://share.google/ynhIXsgbCMS54B33q"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            ⭐ Leggi tutte le recensioni su Google
          </a>
        </div>
      </section>

      <div className="divider" />

      {/* CTA finale — solo WhatsApp, niente SOS ridondante né Facebook */}
      <section className="section">
        <div className="info-card" style={{flexDirection:'column',gap:'16px'}}>
          <div style={{fontSize:'42px',textAlign:'center'}}>🚗</div>
          <div style={{textAlign:'center'}}>
            <div className="info-title" style={{textAlign:'center',fontSize:'26px',marginBottom:'10px'}}>Auto bloccata? Chiamaci ora</div>
            <div className="info-text" style={{textAlign:'center'}}>
              Tecnico operativo H24 · 7 giorni su 7 · Festivi inclusi. Arriviamo da te in media in 20–40 minuti. Roma e provincia.
            </div>
          </div>
          <a href="tel:+393270447124" className="btn-call" data-boosterman-cta="phone_cta_bottom">
            📞 +39 327 044 7124
          </a>
          <a
            href="https://wa.me/393270447124"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
            data-boosterman-cta="whatsapp_cta_bottom"
          >
            💬 Scrivici su WhatsApp H24
          </a>
        </div>
      </section>

      <Footer />
      <StickyBar />
      <ChatWidget hideMobileFab />
    </>
  );
}
