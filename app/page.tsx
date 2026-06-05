import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyBar from '@/components/StickyBar';
import ChatWidget from '@/components/ChatWidget';
import EmergencyChatSection from '@/components/EmergencyChatSection';

export const metadata: Metadata = {
  title: 'BOOSTERMAN Elettrauto H24 Roma | Batteria Scarica, Apertura Veicolo e Diagnosi',
};

const SERVICES = [
  { emoji: '⚡', name: 'Avviamento Batteria', desc: 'Colleghiamo il booster alla batteria e avviamo il veicolo in 20-40 min', badge: 'H24', highlight: true },
  { emoji: '🔋', name: 'Sostituzione Batteria', desc: 'Batterie originali a bordo', badge: 'H24', highlight: true },
  { emoji: '🛞', name: 'Gomma Forata', desc: 'Montiamo ruotino/scorta o ripariamo ove possibile', badge: 'H24', highlight: false },
  { emoji: '🔑', name: 'Apertura Porte', desc: 'Non distruttiva, senza danni', badge: 'H24', highlight: false },
  { emoji: '🔧', name: 'Diagnosi Elettronica', desc: 'Lettura OBD e check completo', badge: 'H24', highlight: false },
  { emoji: '💡', name: 'Lampadine', desc: 'Fari, anabbaglianti, stop', badge: 'H24', highlight: false },
  { emoji: '🎥', name: 'Dash Cam', desc: 'Installazione professionale', badge: 'Appunt.', highlight: false },
  { emoji: '📡', name: 'GPS Tracker', desc: 'Antifurto satellitare', badge: 'Appunt.', highlight: false },
  { emoji: '🎵', name: 'Impianti Hi-Fi', desc: 'Autoradio, amplificatori, sub', badge: 'Appunt.', highlight: false },
];

const REVIEWS = [
  { text: 'Competenza, educazione e velocità. Lo consiglio.', author: 'Massimo Tomanin' },
  { text: 'Super efficienti e gentilissimi.', author: 'Giorgia De Carolis' },
  { text: 'Intervento rapido e professionale per la batteria.', author: 'Alessia' },
  { text: 'Arrivati in 25 minuti, problema risolto subito. Ottimo servizio!', author: 'Marco R.' },
];

const TICKER_ITEMS = [
  '⚡ Avviamento Batteria', '🔋 Sostituzione Batteria', '🛞 Gomma Forata',
  '🔑 Apertura Porte', '🔧 Diagnosi Elettronica', '📡 GPS', '🎥 Dash Cam',
  '🎵 Hi-Fi', '⚡ H24 · 7 giorni su 7',
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
        <div className="hero-badge">🟢 Operativi 24/7 · Festivi inclusi</div>
        <h1>
          Pronto<br />
          Intervento<br />
          <span>Elettrauto</span><br />
          Mobile H24
        </h1>
        <p className="hero-sub">
          Avviamento Batteria, Sostituzione Batteria e assistenza Gomma Forata a domicilio.
          Auto, SUV, Furgoni. Roma e provincia.
        </p>
        <div className="hero-stats">
          <div className="hero-stat">
            <span className="hero-stat-value">20-40′</span>
            <span className="hero-stat-label">Tempo medio</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-value">24/7</span>
            <span className="hero-stat-label">Sempre attivi</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-value">10+</span>
            <span className="hero-stat-label">Anni a Roma</span>
          </div>
        </div>

        {/* Assistente emergenza con SOS integrato */}
        <EmergencyChatSection />

        {/* CTA secondarie sotto il blocco SOS */}
        <div className="hero-cta">
          <a href="tel:+393270447124" className="btn-call">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="white" style={{flexShrink:0}}><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg>
            Chiama ora H24
          </a>
          <a
            href="https://wa.me/393270447124"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            💬 WhatsApp H24
          </a>
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
        <div style={{marginTop:'16px'}}>
          <a href="tel:+393270447124" className="btn-call">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="white" style={{flexShrink:0}}><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg>
            Chiama per un intervento
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
              <div className="review-stars">★★★★★</div>
              <div className="review-text">"{r.text}"</div>
              <div className="review-author">— {r.author}</div>
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
            ⭐ Leggi tutte le recensioni
          </a>
        </div>
      </section>

      <div className="divider" />

      {/* CTA finale */}
      <section className="section">
        <div className="info-card" style={{flexDirection:'column',gap:'16px'}}>
          <div style={{fontSize:'40px',textAlign:'center'}}>🚨</div>
          <div style={{textAlign:'center'}}>
            <div className="info-title" style={{textAlign:'center',fontSize:'25px',marginBottom:'8px'}}>In panne? Chiamaci ora</div>
            <div className="info-text" style={{textAlign:'center'}}>
              Tecnico operativo H24. Tempo medio di arrivo 20-40 minuti. Roma e provincia.
            </div>
          </div>
          <a href="tel:+393270447124" className="btn-call">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="white" style={{flexShrink:0}}><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg>
            327 044 7124
          </a>
          <a
            href="https://wa.me/393270447124"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            💬 WhatsApp H24
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100063653716764"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            📘 Seguici su Facebook
          </a>
        </div>
      </section>

      <Footer />
      <StickyBar />
      <ChatWidget hideMobileFab />
    </>
  );
}
