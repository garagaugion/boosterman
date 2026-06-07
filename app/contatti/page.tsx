import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyBar from '@/components/StickyBar';
import ChatWidget from '@/components/ChatWidget';

export const metadata: Metadata = {
  title: 'Contatti Elettrauto H24 Roma | BOOSTERMAN — 327 044 7124',
  description: 'Contatta BOOSTERMAN per un intervento H24 a Roma. Chiama il 327 044 7124 o scrivi su WhatsApp. Risposta immediata, intervento in 20-40 minuti.',
  alternates: { canonical: 'https://www.elettrautoh24roma.it/contatti' },
  openGraph: {
    title: 'Contatti | BOOSTERMAN Elettrauto H24 Roma',
    description: 'Chiama o scrivi su WhatsApp: 327 044 7124. Risposta immediata H24. Elettrauto mobile Roma.',
    url: 'https://www.elettrautoh24roma.it/contatti',
    siteName: 'BOOSTERMAN',
    type: 'website',
    images: [{ url: 'https://www.elettrautoh24roma.it/og-image.png', width: 1200, height: 630 }],
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contatti BOOSTERMAN Elettrauto H24 Roma",
  "url": "https://www.elettrautoh24roma.it/contatti",
  "mainEntity": {
    "@type": "LocalBusiness",
    "name": "BOOSTERMAN Elettrauto H24 Roma",
    "telephone": "+393270447124",
    "url": "https://www.elettrautoh24roma.it",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+393270447124",
      "contactType": "customer service",
      "availableLanguage": "Italian",
      "hoursAvailable": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      }
    }
  }
};

export default function ContattiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <Header />
      <div className="page-hero">
        <div className="section-label">— Siamo sempre raggiungibili</div>
        <h1 className="section-title">Contatti</h1>
        <div className="hero-badge" style={{marginBottom:'0'}}>🟢 Online H24 — Risposta immediata</div>
      </div>
      <section className="section" style={{paddingTop:'16px'}}>
        <div style={{display:'flex',flexDirection:'column',gap:'12px',marginBottom:'32px'}}>
          <a href="tel:+393270447124" className="btn-primary" style={{fontSize:'21px',padding:'20px'}}>📞 327 044 7124</a>
          <a href="https://wa.me/393270447124" target="_blank" rel="noopener noreferrer" className="btn-whatsapp" style={{fontSize:'19px',padding:'18px'}}>💬 WhatsApp H24</a>
        </div>
        <div style={{display:'flex',flexDirection:'column',gap:'12px',marginBottom:'32px'}}>
          {[
            {e:'🕐',t:'Orari',d:'24 ore su 24, 7 giorni su 7. Festivi e notti incluse. Nessuna eccezione.'},
            {e:'📍',t:'Area di servizio',d:'Roma e provincia. Per zone fuori Roma, contattaci per verificare la disponibilità.'},
            {e:'⏱',t:'Tempo di arrivo',d:'Mediamente 20-40 minuti dalla chiamata, a seconda della zona.'},
            {e:'💰',t:'Pagamenti',d:'Contanti, carta di credito/debito, Satispay, PayPal.'},
          ].map(c => (
            <div key={c.t} className="info-card">
              <span className="info-icon">{c.e}</span>
              <div>
                <div className="info-title">{c.t}</div>
                <div className="info-text">{c.d}</div>
              </div>
            </div>
          ))}
        </div>
        <h2 style={{fontFamily:'var(--font-display)',fontSize:'22px',fontWeight:900,textTransform:'uppercase',marginBottom:'14px'}}>Scrivici per:</h2>
        <div style={{display:'flex',flexDirection:'column',gap:'8px'}}>
          {[
            {label:'🔋 Batteria scarica',msg:'Ciao BOOSTERMAN, ho la batteria scarica.'},
            {label:'🚗 Auto non parte',msg:"Ciao BOOSTERMAN, la mia auto non parte."},
            {label:'🛞 Gomma forata',msg:'Ciao BOOSTERMAN, ho una gomma forata.'},
            {label:'🔑 Chiavi in auto',msg:"Ciao BOOSTERMAN, ho le chiavi bloccate in auto."},
            {label:'💰 Richiedere un preventivo',msg:'Ciao BOOSTERMAN, vorrei un preventivo.'},
            {label:'❓ Altro',msg:'Ciao BOOSTERMAN, ho bisogno di assistenza.'},
          ].map(opt => (
            <a key={opt.label} href={`https://wa.me/393270447124?text=${encodeURIComponent(opt.msg)}`} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              {opt.label}
            </a>
          ))}
        </div>
      </section>
      <Footer />
      <StickyBar />
      <ChatWidget />
    </>
  );
}
