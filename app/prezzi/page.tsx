import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyBar from '@/components/StickyBar';
import ChatWidget from '@/components/ChatWidget';

export const metadata: Metadata = {
  title: 'Prezzi Elettrauto H24 Roma | BOOSTERMAN — Tariffe Trasparenti',
  description: "Prezzi trasparenti per avviamento batteria da €39, sostituzione batteria da €49 più costo batteria, apertura veicolo, gomma forata e diagnosi elettronica a Roma. Preventivo gratuito prima dell'intervento.",
  alternates: { canonical: 'https://www.elettrautoh24roma.it/prezzi' },
  openGraph: {
    title: 'Prezzi | BOOSTERMAN Elettrauto H24 Roma',
    description: "Tariffe per batteria scarica, sostituzione batteria, apertura auto, gomma forata, diagnosi OBD2. Preventivo chiaro prima dell’intervento.",
    url: 'https://www.elettrautoh24roma.it/prezzi',
    siteName: 'BOOSTERMAN',
    type: 'website',
    images: [{ url: 'https://www.elettrautoh24roma.it/og-image.png', width: 1200, height: 630 }],
  },
};

const PRICES = [
  { service: 'Avviamento Batteria', note: 'Jump start sul posto per batteria scarica', price: 'da €39', priceMin: 39 },
  { service: 'Sostituzione Batteria', note: 'Manodopera da €49 + costo batteria, sempre comunicato prima', price: 'da €49 + batteria', priceMin: 49 },
  { service: 'Apertura Porta', note: 'Non distruttiva, senza danni', price: 'da €79', priceMin: 79 },
  { service: 'Gomma Forata', note: 'Montiamo il tuo ruotino o la ruota di scorta. Quando possibile effettuiamo la riparazione sul posto', price: 'da €49', priceMin: 49 },
  { service: 'Diagnosi Elettronica', note: 'Lettura errori OBD2', price: 'da €49', priceMin: 49 },
  { service: 'Sostituzione Lampadine', note: 'Anabbaglianti, abbaglianti, stop', price: 'da €29', priceMin: 29 },
  { service: 'Installazione Dash Cam', note: 'Su appuntamento', price: 'Su richiesta', priceMin: null },
  { service: 'GPS Tracker', note: 'Su appuntamento', price: 'Su richiesta', priceMin: null },
  { service: 'Impianti Hi-Fi', note: 'Autoradio, amplificatori, sub', price: 'Su richiesta', priceMin: null },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Elettrauto H24 Mobile Roma — BOOSTERMAN",
  "provider": {
    "@type": "LocalBusiness",
    "name": "BOOSTERMAN Elettrauto H24 Roma",
    "telephone": "+393270447124",
    "url": "https://www.elettrautoh24roma.it"
  },
  "areaServed": { "@type": "City", "name": "Roma" },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Servizi Elettrauto H24",
    "itemListElement": PRICES.filter(p => p.priceMin !== null).map(p => ({
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": p.service,
        "description": p.note
      },
      "priceSpecification": {
        "@type": "PriceSpecification",
        "price": p.priceMin,
        "priceCurrency": "EUR",
        "valueAddedTaxIncluded": true
      }
    }))
  }
};

export default function PrezziPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Header />
      <div className="page-hero">
        <div className="section-label">— Prezzi</div>
        <h1 className="section-title">Prezzi<br /><span className="text-yellow">Trasparenti</span></h1>
        <p style={{color:'#aaa',fontSize:'16px',lineHeight:'1.6',marginBottom:'8px'}}>
          Il prezzo esatto viene sempre comunicato e approvato prima dell&apos;intervento. Nessuna sorpresa. Nessun costo nascosto.
        </p>
      </div>
      <section className="section" style={{paddingTop:'0'}}>
        <div className="gap-note" style={{marginBottom:'20px'}}>
          💡 I prezzi indicati sono orientativi. Il preventivo definitivo viene fornito dopo valutazione del problema. Sempre gratuito e senza impegno.
        </div>
        <div className="price-table">
          {PRICES.map((p) => (
            <div key={p.service} className="price-row">
              <div className="price-service">
                {p.service}
                <small>{p.note}</small>
              </div>
              <div className="price-value">{p.price}</div>
            </div>
          ))}
        </div>
        <div style={{marginTop:'24px',display:'flex',flexDirection:'column',gap:'12px'}}>
          <a href="tel:+393270447124" className="btn-primary">📞 Chiedi un preventivo</a>
          <a href="https://wa.me/393270447124?text=Ciao%20BOOSTERMAN%2C%20vorrei%20un%20preventivo." target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
            💬 Preventivo su WhatsApp
          </a>
        </div>
        <div style={{marginTop:'32px'}}>
          <h2 className="section-title" style={{fontSize:'29px',marginBottom:'16px'}}>Come funziona il preventivo</h2>
          <div style={{display:'flex',flexDirection:'column',gap:'12px'}}>
            {[
              {n:'1', t:'Ci contatti', d:'Chiami o scriva su WhatsApp descrivendo il problema.'},
              {n:'2', t:'Valutiamo', d:'Il tecnico valuta il problema e ti dà il prezzo esatto.'},
              {n:'3', t:'Approvi', d:'Decidi tu se procedere. Nessun obbligo.'},
              {n:'4', t:'Interveniamo', d:'Il tecnico arriva in 20-40 minuti e risolve il problema.'},
            ].map(s => (
              <div key={s.n} className="info-card">
                <div style={{width:'36px',height:'36px',borderRadius:'50%',background:'var(--yellow)',color:'var(--black)',fontFamily:'var(--font-display)',fontWeight:900,fontSize:'19px',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>{s.n}</div>
                <div>
                  <div className="info-title">{s.t}</div>
                  <div className="info-text">{s.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
      <StickyBar />
      <ChatWidget />
    </>
  );
}
