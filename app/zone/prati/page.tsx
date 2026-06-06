import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyBar from '@/components/StickyBar';
import ChatWidget from '@/components/ChatWidget';

export const metadata: Metadata = {
  title: 'Elettrauto H24 Prati Roma | BOOSTERMAN - Pronto Intervento',
  description: 'Elettrauto H24 a Prati. Batteria scarica, auto non parte, apertura porta, gomma forata: interveniamo in 20-40 minuti. Chiamaci ora: 327 044 7124.',
  alternates: { canonical: 'https://www.elettrautoh24roma.it/zone/prati' },
  openGraph: {
    title: 'Elettrauto H24 Prati | BOOSTERMAN Roma',
    description: 'Pronto intervento elettrauto a Prati: batteria scarica, apertura auto, gomma forata. H24, 7 giorni su 7.',
    url: 'https://www.elettrautoh24roma.it/zone/prati',
    siteName: 'BOOSTERMAN',
    type: 'website',
    images: [{ url: 'https://www.elettrautoh24roma.it/og-image.png', width: 1200, height: 630 }],
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "BOOSTERMAN Elettrauto H24 Roma",
  "description": "Pronto intervento elettrauto mobile H24 a Prati. Batteria scarica, apertura veicolo, gomma forata.",
  "url": "https://www.elettrautoh24roma.it/zone/prati",
  "telephone": "+393270447124",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    "opens": "00:00",
    "closes": "23:59"
  },
  "areaServed": {
    "@type": "Place",
    "name": "Prati, Roma",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 41.9028,
      "longitude": 12.4636
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
        <h1 className="section-title">Elettrauto H24<br /><span className="text-yellow">Prati</span></h1>
        <p style={{color:'#aaa',fontSize:'16px',lineHeight:'1.6'}}>
          Pronto intervento elettrauto a Prati (Roma Centro). Arriviamo in 20-40 minuti, H24, 7 giorni su 7.
        </p>
        <div className="hero-badge" style={{marginTop:'12px'}}>🟢 Disponibile ora</div>
      </div>

      <section className="section" style={{paddingTop:'0'}}>

        {/* CTA rapide */}
        <div style={{display:'flex',flexDirection:'column',gap:'12px',marginBottom:'32px'}}>
          <a href="tel:+393270447124" className="btn-primary" style={{fontSize:'19px',padding:'18px'}}>
            📞 Chiama ora — Arriviamo a Prati
          </a>
          <a
            href="https://wa.me/393270447124?text=Ciao%20BOOSTERMAN%2C%20ho%20bisogno%20di%20assistenza%20a%20Prati."
            target="_blank" rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            💬 WhatsApp H24 — Prati
          </a>
        </div>

        {/* Descrizione zona */}
        <div className="info-card" style={{marginBottom:'28px',background:'rgba(255,214,0,0.08)',border:'1px solid rgba(255,214,0,0.25)'}}>
          <span className="info-icon">📍</span>
          <div>
            <div className="info-title">Copertura Prati</div>
            <div className="info-text">Prati è un quartiere residenziale e commerciale con molti hotel, studi professionali e ristoranti. Alta frequentazione turistica grazie alla vicinanza con il Vaticano.</div>
          </div>
        </div>

        {/* Servizi */}
        <h2 className="section-title" style={{fontSize:'27px',marginBottom:'16px'}}>
          Cosa facciamo a <span className="text-yellow">Prati</span>
        </h2>
        <div style={{display:'flex',flexDirection:'column',gap:'10px',marginBottom:'28px'}}>
          {[
            { icon:'🔋', title:'Batteria scarica / Auto non parte', desc:'Avviamento immediato da €39 o sostituzione batteria da €49 + costo batteria.' },
            { icon:'🔑', title:'Apertura porta auto', desc:'Chiavi bloccate dentro? Apriamo senza danni. Da €79.' },
            { icon:'🛞', title:'Gomma forata', desc:'Montiamo il tuo ruotino o la ruota di scorta. Quando possibile ripariamo sul posto a Prati. Da €49.' },
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
            <div className="info-title">Come raggiungiamo Prati</div>
            <div className="info-text">Interveniamo in Piazza Risorgimento, Lungotevere, Via Cola di Rienzo e nei garage degli hotel del quartiere Prati.</div>
          </div>
        </div>

        {/* Veicoli */}
        <div className="info-card" style={{marginBottom:'28px'}}>
          <span className="info-icon">🚗</span>
          <div>
            <div className="info-title">Veicoli più comuni a Prati</div>
            <div className="info-text">
              A Prati interveniamo spesso su auto a noleggio, auto di hotel, veicoli turistici. Trattiamo auto di qualsiasi marca e modello.
            </div>
          </div>
        </div>

        {/* Zone vicine */}
        <div style={{marginBottom:'28px'}}>
          <h3 style={{fontFamily:'var(--font-display)',fontSize:'15px',fontWeight:800,textTransform:'uppercase',letterSpacing:'2px',color:'var(--yellow)',marginBottom:'12px'}}>
            Zone limitrofe coperte
          </h3>
          <div className="zone-grid">
            <div className="zone-item">Centro Storico</div>
            <div className="zone-item">Flaminio</div>
            <div className="zone-item">Aurelio</div>
            <div className="zone-item">Borgo</div>
          </div>
        </div>


        {/* Approfondimento locale */}
        <div className="local-seo-content" style={{marginBottom:'28px'}}>
          <h2 className="section-title" style={{fontSize:'25px',marginBottom:'14px'}}>
            Intervento elettrauto a <span className="text-yellow">Prati</span>: cosa sapere
          </h2>
          <div className="info-card" style={{marginBottom:'12px'}}>
            <span className="info-icon">⏱️</span>
            <div>
              <div className="info-title">Tempo medio di arrivo</div>
              <div className="info-text">
                In condizioni normali interveniamo a Prati in circa 20-40 minuti. Di notte, nei festivi o in caso di traffico intenso il tecnico conferma sempre il tempo stimato prima della partenza.
              </div>
            </div>
          </div>
          <div className="info-card" style={{marginBottom:'12px'}}>
            <span className="info-icon">🧭</span>
            <div>
              <div className="info-title">Punti di riferimento e strade servite</div>
              <div className="info-text">
                Copriamo Via Cola di Rienzo, Viale Giulio Cesare, Piazza Cavour, Piazza Risorgimento, Lungotevere e strade vicine al Vaticano. Se non conosci l&apos;indirizzo preciso, puoi usare il pulsante SOS GPS o inviare un punto di riferimento su WhatsApp.
              </div>
            </div>
          </div>
          <div className="info-card" style={{marginBottom:'12px'}}>
            <span className="info-icon">🅿️</span>
            <div>
              <div className="info-title">Dove interveniamo</div>
              <div className="info-text">
                Il servizio è pensato per garage, parcheggi hotel, aree residenziali e vie commerciali molto trafficate. Interveniamo su auto, SUV, furgoni e veicoli commerciali, anche quando il mezzo è fermo sotto casa o in un garage accessibile.
              </div>
            </div>
          </div>
          <div className="info-card" style={{marginBottom:'12px',background:'rgba(255,214,0,0.06)',border:'1px solid rgba(255,214,0,0.20)'}}>
            <span className="info-icon">📌</span>
            <div>
              <div className="info-title">Zone vicine coperte</div>
              <div className="info-text">
                Oltre a Prati, copriamo anche Borgo, Della Vittoria, Flaminio, Balduina e Centro Storico. Se sei al confine tra due quartieri, chiamaci: il tecnico più vicino verifica subito la disponibilità.
              </div>
            </div>
          </div>
        </div>

        {/* FAQ locali */}
        <div className="local-faq" style={{marginBottom:'28px'}}>
          <h2 className="section-title" style={{fontSize:'25px',marginBottom:'14px'}}>
            Domande frequenti a <span className="text-yellow">Prati</span>
          </h2>
          <div style={{display:'flex',flexDirection:'column',gap:'10px'}}>
            <div className="info-card">
              <span className="info-icon">❓</span>
              <div>
                <div className="info-title">Intervenite a Prati anche di notte?</div>
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
