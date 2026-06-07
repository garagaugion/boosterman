import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyBar from '@/components/StickyBar';
import ChatWidget from '@/components/ChatWidget';
import EmergencyChatSection from '@/components/EmergencyChatSection';
import SosGpsButton from '@/components/SosGpsButton';

export const metadata: Metadata = {
  title: 'BOOSTERMAN — SOS Batterie & Assistenza Auto H24 Roma',
  description: 'Batteria scarica? Auto bloccata? Pronto intervento mobile H24, 7 giorni su 7, festivi inclusi. Avviamento batteria, sostituzione, gomma forata, apertura porte. Roma e provincia.',
};

const SERVICES = [
  { icon: '⛓️', name: 'Avviamento Batteria', tag: 'Jump start rapido', desc: 'La batteria è scarica? Arriviamo subito e avviamo la tua auto sul posto.', highlight: true },
  { icon: '🔋', name: 'Sostituzione Batteria', tag: '+ costo batteria', desc: 'Sostituiamo la batteria con ricambi di qualità e smaltiamo quella usata.', highlight: true },
  { icon: '🛞', name: 'Gomma Forata', tag: 'ruotino/scorta o riparazione ove possibile', desc: 'Cambio con ruotino o scorta, oppure riparazione sul posto quando possibile.', highlight: false },
  { icon: '🚪', name: 'Apertura Porte Auto', tag: 'senza danni', desc: 'Hai lasciato le chiavi dentro? Apriamo la tua auto con intervento non distruttivo.', highlight: false },
  { icon: '🔎', name: 'Diagnosi Elettronica', tag: 'OBD2', desc: 'Lettura errori e diagnostica completa del sistema elettronico.', highlight: false },
  { icon: '💡', name: 'Problemi Elettrici e Lampadine', tag: 'fari e guasti elettrici', desc: 'Risolviamo guasti elettrici e sostituiamo lampadine bruciate.', highlight: false },
];

const REVIEWS = [
  { text: 'Competenza, educazione e velocità. Lo consiglio a tutti.', author: 'Massimo Tomanin', initials: 'MT', color: '#FFD600' },
  { text: 'Super efficienti e gentilissimi. Arrivati in meno di 30 minuti, batteria sostituita in pochissimo.', author: 'Giorgia De Carolis', initials: 'GD', color: '#FFD600' },
  { text: 'Intervento rapido e professionale per la batteria. Prezzi onesti e comunicati prima. Ottimo!', author: 'Alessia R.', initials: 'AR', color: '#FFD600' },
  { text: 'Arrivati in 25 minuti, problema risolto subito. Servizio eccellente, li richiamerò sicuramente.', author: 'Marco R.', initials: 'MR', color: '#FFD600' },
];

const TICKER_ITEMS = [
  '⚡ Roma e provincia', 'H24', '7 giorni su 7', 'Interventi rapidi e professionali',
  'SOS Batterie', 'Assistenza auto H24', 'Festivi inclusi', 'Pronto intervento mobile',
];

export default function Home() {
  return (
    <>
      <Header />

      <div className="ticker-wrap" style={{ marginTop: '72px' }}>
        <div className="ticker-inner">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span key={i} className="ticker-item">{item}</span>
          ))}
        </div>
      </div>

      <section className="hero hero-black-edition">
        <div className="hero-bg" />
        <div className="hero-badge">● Operativi ora · Festivi inclusi</div>
        <h1>
          SOS Batterie<br />
          <span>&amp; Assistenza</span><br />
          Auto H24 · 7/7
        </h1>
        <p className="hero-sub">
          Soccorso immediato per la tua auto a Roma e provincia. Interveniamo subito, sempre: H24, 7 giorni su 7.
        </p>

        <EmergencyChatSection />

        <div className="hero-stats" style={{ marginTop: '22px' }}>
          <div className="hero-stat">
            <span className="hero-stat-value">20–40′</span>
            <span className="hero-stat-label">Tempo medio</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-value">24/7</span>
            <span className="hero-stat-label">Sempre attivi</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-value">4,8★</span>
            <span className="hero-stat-label">Su Google</span>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="section services-section">
        <div className="section-label">⚡ Servizi H24</div>
        <h2 className="section-title">Servizi H24</h2>
        <p className="section-intro">
          Interventi rapidi, professionali e trasparenti. Siamo operativi 24 ore su 24 a Roma e provincia, 7 giorni su 7.
        </p>
        <div className="services-grid services-list-grunge">
          {SERVICES.map((s) => (
            <div key={s.name} className={`service-card ${s.highlight ? 'highlight' : ''}`}>
              <span className="service-icon">{s.icon}</span>
              <span className="service-name">{s.name}</span>
              <span className="service-badge">{s.tag}</span>
              <span className="service-desc">{s.desc}</span>
            </div>
          ))}
        </div>

        <div className="how-strip" aria-label="Come funziona">
          <strong>Come funziona?</strong>
          <span><b>1</b> Scegli il problema</span>
          <span><b>2</b> Invia posizione SOS</span>
          <span><b>3</b> Ricevi assistenza</span>
        </div>

        <div style={{ marginTop: '22px' }}>
          <SosGpsButton compact />
        </div>
      </section>

      <div className="divider" />

      <section className="section">
        <div className="section-label">— Recensioni Google</div>
        <h2 className="section-title">Cosa dicono di noi</h2>
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
                <div className="review-avatar" style={{ background: r.color }}>
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
        <div style={{ marginTop: '16px' }}>
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

      <section className="section final-cta-section">
        <div className="info-card final-cta-card" style={{ flexDirection: 'column', gap: '16px' }}>
          <div style={{ textAlign: 'center' }}>
            <div className="info-title" style={{ textAlign: 'center', fontSize: '30px', marginBottom: '10px' }}>Auto bloccata?</div>
            <div className="info-text" style={{ textAlign: 'center' }}>
              Premi SOS per inviare la posizione oppure contattaci subito. Tecnico operativo H24 · 7/7 · Roma e provincia.
            </div>
          </div>
          <SosGpsButton compact />
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
