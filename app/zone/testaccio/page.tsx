import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyBar from '@/components/StickyBar';
import ChatWidget from '@/components/ChatWidget';

export const metadata: Metadata = {
  title: 'Elettrauto H24 Testaccio Roma | BOOSTERMAN - Pronto Intervento',
  description: 'Elettrauto H24 a Testaccio. Batteria scarica, auto non parte, apertura porta, gomma forata: interveniamo in 20-40 minuti. Chiamaci ora: 327 044 7124.',
  alternates: { canonical: 'https://www.elettrautoh24roma.it/zone/testaccio' },
  openGraph: {
    title: 'Elettrauto H24 Testaccio | BOOSTERMAN Roma',
    description: 'Pronto intervento elettrauto a Testaccio: batteria scarica, apertura auto, gomma forata. H24, 7 giorni su 7.',
    url: 'https://www.elettrautoh24roma.it/zone/testaccio',
    siteName: 'BOOSTERMAN',
    type: 'website',
    images: [{ url: 'https://www.elettrautoh24roma.it/og-image.png', width: 1200, height: 630 }],
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "BOOSTERMAN Elettrauto H24 Roma",
  "description": "Pronto intervento elettrauto mobile H24 a Testaccio. Batteria scarica, apertura veicolo, gomma forata.",
  "url": "https://www.elettrautoh24roma.it/zone/testaccio",
  "telephone": "+393270447124",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    "opens": "00:00",
    "closes": "23:59"
  },
  "areaServed": {
    "@type": "Place",
    "name": "Testaccio, Roma",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 41.8780,
      "longitude": 12.4765
    }
  },
  "priceRange": "€€",
  "image": "https://www.elettrautoh24roma.it/og-image.png"
};

export default function ZonePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <Header />
      <div className="page-hero">
        <div className="section-label">— Zona di intervento</div>
        <h1 className="section-title">Elettrauto H24<br /><span className="text-yellow">Testaccio</span></h1>
        <p style={{color:'#aaa',fontSize:'16px',lineHeight:'1.6'}}>
          Pronto intervento elettrauto a Testaccio (Roma Centro-Sud). Arriviamo in 20-40 minuti, H24, 7 giorni su 7.
        </p>
        <div className="hero-badge" style={{marginTop:'12px'}}>🟢 Disponibile ora</div>
      </div>

      <section className="section" style={{paddingTop:'0'}}>

        {/* CTA rapide */}
        <div style={{display:'flex',flexDirection:'column',gap:'12px',marginBottom:'32px'}}>
          <a href="tel:+393270447124" className="btn-primary" style={{fontSize:'19px',padding:'18px'}}>
            📞 Chiama ora — Arriviamo a Testaccio
          </a>
          <a
            href="https://wa.me/393270447124?text=Ciao%20BOOSTERMAN%2C%20ho%20bisogno%20di%20assistenza%20a%20Testaccio."
            target="_blank" rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            💬 WhatsApp H24 — Testaccio
          </a>
        </div>

        {/* Descrizione zona */}
        <div className="info-card" style={{marginBottom:'28px',background:'rgba(255,214,0,0.08)',border:'1px solid rgba(255,214,0,0.25)'}}>
          <span className="info-icon">📍</span>
          <div>
            <div className="info-title">Copertura Testaccio</div>
            <div className="info-text">Testaccio è un quartiere popolare e autentico, con il famoso mercato e una vita notturna intensa. Parcheggi sempre affollati e auto spesso lasciate per giorni.</div>
          </div>
        </div>

        {/* Servizi */}
        <h2 className="section-title" style={{fontSize:'27px',marginBottom:'16px'}}>
          Cosa facciamo a <span className="text-yellow">Testaccio</span>
        </h2>
        <div style={{display:'flex',flexDirection:'column',gap:'10px',marginBottom:'28px'}}>
          {[
            { icon:'🔋', title:'Batteria scarica / Auto non parte', desc:'Avviamento immediato da €39 o sostituzione batteria da €49 + costo batteria.' },
            { icon:'🔑', title:'Apertura porta auto', desc:'Chiavi bloccate dentro? Apriamo senza danni. Da €79.' },
            { icon:'🛞', title:'Gomma forata', desc:'Montiamo il tuo ruotino o la ruota di scorta. Quando possibile ripariamo sul posto a Testaccio. Da €49.' },
            { icon:'🔌', title:'Diagnosi elettronica OBD2', desc:'Lettura errori e diagnosi completa. Da €49.' },
            { icon:'💡', title:'Sostituzione lampadine', desc:'Anabbaglianti, stop, frecce. Da €29.' },
          ].map(s => (
            <div key={s.title} className="info-card">
              <span className="info-icon">{s.icon}</span>
              <div>
                <div className="info-title">{s.title}</div>
                <div className="info-text">{s.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Note locali */}
        <div className="info-card" style={{marginBottom:'28px',background:'rgba(255,255,255,0.04)'}}>
          <span className="info-icon">🗺️</span>
          <div>
            <div className="info-title">Come raggiungiamo Testaccio</div>
            <div className="info-text">Conosciamo bene le ZTL di Testaccio e le sue strade. Raggiungiamo il Mattatoio, il Mercato di Testaccio e le vie residenziali del quartiere.</div>
          </div>
        </div>

        {/* Veicoli */}
        <div className="info-card" style={{marginBottom:'28px'}}>
          <span className="info-icon">🚗</span>
          <div>
            <div className="info-title">Veicoli più comuni a Testaccio</div>
            <div className="info-text">
              A Testaccio interveniamo spesso su auto di ogni tipo, furgoni del mercato. Trattiamo auto di qualsiasi marca e modello.
            </div>
          </div>
        </div>

        {/* Zone vicine */}
        <div style={{marginBottom:'28px'}}>
          <h3 style={{fontFamily:'var(--font-display)',fontSize:'15px',fontWeight:800,textTransform:'uppercase',letterSpacing:'2px',color:'var(--yellow)',marginBottom:'12px'}}>
            Zone limitrofe coperte
          </h3>
          <div className="zone-grid">
            <div className="zone-item">Trastevere</div>
            <div className="zone-item">Aventino</div>
            <div className="zone-item">Ostiense</div>
            <div className="zone-item">Garbatella</div>
          </div>
        </div>


        {/* Approfondimento locale */}
        <div className="local-seo-content" style={{marginBottom:'28px'}}>
          <h2 className="section-title" style={{fontSize:'25px',marginBottom:'14px'}}>
            Intervento elettrauto a <span className="text-yellow">Testaccio</span>: cosa sapere
          </h2>
          <div className="info-card" style={{marginBottom:'12px'}}>
            <span className="info-icon">⏱️</span>
            <div>
              <div className="info-title">Tempo medio di arrivo</div>
              <div className="info-text">
                In condizioni normali interveniamo a Testaccio in circa 20-40 minuti. Di notte, nei festivi o in caso di traffico intenso il tecnico conferma sempre il tempo stimato prima della partenza.
              </div>
            </div>
          </div>
          <div className="info-card" style={{marginBottom:'12px'}}>
            <span className="info-icon">🧭</span>
            <div>
              <div className="info-title">Punti di riferimento e strade servite</div>
              <div className="info-text">
                Copriamo Via Marmorata, Monte Testaccio, Lungotevere, Porta Portese e zona mercato. Se non conosci l&apos;indirizzo preciso, puoi usare il pulsante SOS GPS o inviare un punto di riferimento su WhatsApp.
              </div>
            </div>
          </div>
          <div className="info-card" style={{marginBottom:'12px'}}>
            <span className="info-icon">🅿️</span>
            <div>
              <div className="info-title">Dove interveniamo</div>
              <div className="info-text">
                Il servizio è pensato per strade residenziali, locali serali, mercato e parcheggi lungo il Tevere. Interveniamo su auto, SUV, furgoni e veicoli commerciali, anche quando il mezzo è fermo sotto casa o in un garage accessibile.
              </div>
            </div>
          </div>
          <div className="info-card" style={{marginBottom:'12px',background:'rgba(255,214,0,0.06)',border:'1px solid rgba(255,214,0,0.20)'}}>
            <span className="info-icon">📌</span>
            <div>
              <div className="info-title">Zone vicine coperte</div>
              <div className="info-text">
                Oltre a Testaccio, copriamo anche Aventino, Ostiense, Trastevere, Garbatella e Centro. Se sei al confine tra due quartieri, chiamaci: il tecnico più vicino verifica subito la disponibilità.
              </div>
            </div>
          </div>
        </div>

        {/* FAQ locali */}
        <div className="local-faq" style={{marginBottom:'28px'}}>
          <h2 className="section-title" style={{fontSize:'25px',marginBottom:'14px'}}>
            Domande frequenti a <span className="text-yellow">Testaccio</span>
          </h2>
          <div style={{display:'flex',flexDirection:'column',gap:'10px'}}>
            <div className="info-card">
              <span className="info-icon">❓</span>
              <div>
                <div className="info-title">Intervenite a Testaccio anche di notte?</div>
                <div className="info-text">Sì, il servizio è H24: notti, domeniche e festivi inclusi. Puoi chiamare o scrivere su WhatsApp in qualsiasi momento.</div>
              </div>
            </div>
            <div className="info-card">
              <span className="info-icon">💰</span>
              <div>
                <div className="info-title">Quanto costa l&apos;intervento?</div>
                <div className="info-text">Avviamento batteria da €39, sostituzione batteria da €49 + costo batteria, gomma forata da €49. Il prezzo definitivo viene comunicato prima dell&apos;intervento.</div>
              </div>
            </div>
            <div className="info-card">
              <span className="info-icon">📍</span>
              <div>
                <div className="info-title">Come vi mando la posizione?</div>
                <div className="info-text">Puoi premere SOS GPS nella chat oppure scrivere via, civico e punto di riferimento. Riceveremo un link Google Maps su WhatsApp.</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA finale */}
        <div style={{display:'flex',flexDirection:'column',gap:'12px'}}>
          <a href="tel:+393270447124" className="btn-primary">📞 327 044 7124 — H24</a>
          <a href="/zone" className="btn-secondary">← Tutte le zone coperte</a>
        </div>

      </section>
      <Footer />
      <StickyBar />
      <ChatWidget />
    </>
  );
}
