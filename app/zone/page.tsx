import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyBar from '@/components/StickyBar';
import ChatWidget from '@/components/ChatWidget';

export const metadata: Metadata = {
  title: 'Zone Coperte Roma | BOOSTERMAN Elettrauto H24 — Tutte le Aree',
  description: 'BOOSTERMAN interviene su tutta Roma e provincia: Parioli, EUR, Ostia, Trastevere, Tiburtina, Flaminio, Prati e molte altre zone. Elettrauto H24 a domicilio in 20-40 minuti.',
  alternates: { canonical: 'https://www.elettrautoh24roma.it/zone' },
  openGraph: {
    title: 'Zone Coperte | BOOSTERMAN Elettrauto H24 Roma',
    description: 'Interveniamo in tutta Roma e provincia: consulta le zone con pagine dedicate per Parioli, EUR, Ostia, Trastevere e molte altre.',
    url: 'https://www.elettrautoh24roma.it/zone',
    siteName: 'BOOSTERMAN',
    type: 'website',
    images: [{ url: 'https://www.elettrautoh24roma.it/og-image.png', width: 1200, height: 630 }],
  },
};

const ZONE_CON_PAGINA = [
  { slug: 'centro-storico', name: 'Centro Storico' },
  { slug: 'prati', name: 'Prati' },
  { slug: 'trastevere', name: 'Trastevere' },
  { slug: 'testaccio', name: 'Testaccio' },
  { slug: 'flaminio', name: 'Flaminio' },
  { slug: 'parioli', name: 'Parioli' },
  { slug: 'nomentano', name: 'Nomentano' },
  { slug: 'tiburtina', name: 'Tiburtina' },
  { slug: 'centocelle', name: 'Centocelle' },
  { slug: 'aurelio', name: 'Aurelio' },
  { slug: 'eur', name: 'EUR' },
  { slug: 'garbatella', name: 'Garbatella' },
  { slug: 'ostia', name: 'Ostia' },
  { slug: 'ciampino', name: 'Ciampino' },
  { slug: 'fiumicino', name: 'Fiumicino' },
];

const ZONE_CENTRO_EXTRA = ['Aventino','Celio'];
const ZONE_NORD = ['Salario','Trieste','Talenti','Prima Porta'];
const ZONE_SUD = ['Laurentino','Ardeatino','Torrino'];
const ZONE_EST = ['Prenestina','Casilina','Torpignattara','Tor Bella Monaca'];
const ZONE_OVEST = ['Boccea','Primavalle','Ottavia','Casalotti','Casal Lumbroso'];
const ZONE_PROVINCIA = ['Frascati','Albano Laziale','Marino','Velletri','Grottaferrata','Cerveteri'];

function ZoneGroup({ title, zones }: { title: string; zones: string[] }) {
  return (
    <div style={{marginBottom:'28px'}}>
      <h3 style={{fontFamily:'var(--font-display)',fontSize:'17px',fontWeight:800,textTransform:'uppercase',letterSpacing:'2px',color:'var(--yellow)',marginBottom:'12px'}}>{title}</h3>
      <div className="zone-grid">
        {zones.map(z => (
          <div key={z} className="zone-item">{z}</div>
        ))}
      </div>
    </div>
  );
}

export default function ZonePage() {
  return (
    <>
      <Header />
      <div className="page-hero">
        <div className="section-label">— Zone di intervento</div>
        <h1 className="section-title">Dove<br /><span className="text-yellow">Interveniamo</span></h1>
        <p style={{color:'#aaa',fontSize:'16px',lineHeight:'1.6'}}>Operiamo su tutta Roma e provincia. Tempo medio di arrivo 20-40 minuti.</p>
      </div>
      <section className="section" style={{paddingTop:'0'}}>
        <div className="info-card" style={{marginBottom:'28px',background:'rgba(255,214,0,0.08)',border:'1px solid rgba(255,214,0,0.25)'}}>
          <span className="info-icon">📍</span>
          <div>
            <div className="info-title">Copertura totale Roma</div>
            <div className="info-text">Non trovi la tua zona? Chiamaci o scrivi su WhatsApp — valutiamo subito la disponibilità.</div>
          </div>
        </div>

        <div style={{marginBottom:'32px'}}>
          <h2 style={{fontFamily:'var(--font-display)',fontSize:'17px',fontWeight:800,textTransform:'uppercase',letterSpacing:'2px',color:'var(--yellow)',marginBottom:'14px'}}>
            Zone con pagina dedicata →
          </h2>
          <div className="zone-grid">
            {ZONE_CON_PAGINA.map(z => (
              <Link
                key={z.slug}
                href={`/zone/${z.slug}`}
                className="zone-item"
                style={{textDecoration:'none',border:'1px solid rgba(255,214,0,0.4)',color:'var(--yellow)'}}
              >
                {z.name} ↗
              </Link>
            ))}
          </div>
        </div>

        <ZoneGroup title="Centro (altre zone)" zones={ZONE_CENTRO_EXTRA} />
        <ZoneGroup title="Roma Nord" zones={ZONE_NORD} />
        <ZoneGroup title="Roma Sud" zones={ZONE_SUD} />
        <ZoneGroup title="Roma Est" zones={ZONE_EST} />
        <ZoneGroup title="Roma Ovest" zones={ZONE_OVEST} />
        <ZoneGroup title="Provincia di Roma" zones={ZONE_PROVINCIA} />

        <div style={{display:'flex',flexDirection:'column',gap:'12px',marginTop:'8px'}}>
          <a href="tel:+393270447124" className="btn-primary">📞 Chiama per verificare la tua zona</a>
          <a href="https://wa.me/393270447124?text=Ciao%20BOOSTERMAN%2C%20intervenite%20nella%20mia%20zona%3F%20Sono%20a..." target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
            💬 Invia la tua posizione
          </a>
        </div>
      </section>
      <Footer />
      <StickyBar />
      <ChatWidget />
    </>
  );
}
