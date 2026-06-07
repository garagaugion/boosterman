import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyBar from '@/components/StickyBar';
import ChatWidget from '@/components/ChatWidget';

export const metadata: Metadata = {
  title: 'Come Funziona | BOOSTERMAN Elettrauto H24 Roma',
  description: 'Come funziona il servizio BOOSTERMAN: chiama o scrivi su WhatsApp, il tecnico arriva in 20-40 minuti e risolve il problema sul posto. Preventivo prima dell\'intervento.',
};

const STEPS = [
  {
    n: '1',
    title: 'Ci contatti',
    desc: 'Chiama il 327 044 7124 o scrivi su WhatsApp descrivendo il problema e comunicando dove ti trovi. Rispondiamo H24.',
    icon: '📞',
  },
  {
    n: '2',
    title: 'Ti diamo il preventivo',
    desc: 'Il tecnico valuta il problema e ti comunica il prezzo esatto prima di fare qualsiasi cosa. Nessuna sorpresa.',
    icon: '💬',
  },
  {
    n: '3',
    title: 'Approvi e aspetti',
    desc: 'Se accetti il preventivo, il tecnico parte subito. Tempo medio di arrivo: 20-40 minuti.',
    icon: '✅',
  },
  {
    n: '4',
    title: 'Problema risolto',
    desc: 'Il tecnico interviene sul posto con l\'attrezzatura necessaria. Nella maggior parte dei casi il problema viene risolto in pochi minuti.',
    icon: '⚡',
  },
];

export default function ComeFunzionaPage() {
  return (
    <>
      <Header />
      <div className="page-hero">
        <div className="section-label">— Il processo</div>
        <h1 className="section-title">Come<br /><span className="text-yellow">Funziona</span></h1>
        <p style={{color:'#aaa',fontSize:'16px',lineHeight:'1.6'}}>
          Semplice e veloce. Quattro passi per tornare a guidare.
        </p>
      </div>

      <section className="section" style={{paddingTop:'0'}}>
        <div className="steps-list">
          {STEPS.map(s => (
            <div key={s.n} className="step-item">
              <div className="step-num">{s.n}</div>
              <div className="step-content">
                <div className="step-title">{s.icon} {s.title}</div>
                <div className="step-desc">{s.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{marginTop:'32px',display:'flex',flexDirection:'column',gap:'16px'}}>
          <h2 style={{fontFamily:'var(--font-display)',fontSize:'25px',fontWeight:900,textTransform:'uppercase'}}>
            Cosa portiamo con noi
          </h2>
          {[
            {e:'🔋',t:'Batterie',d:'Diverse tipologie per auto, SUV e furgoni, sempre a bordo.'},
            {e:'⚡',t:'Avviatore di emergenza',d:'Per avviamento rapido senza svuotare la batteria dell\'altro veicolo.'},
            {e:'🔧',t:'Strumenti diagnostici',d:'Lettore OBD2 professionale per diagnosi elettronica immediata.'},
            {e:'🛞',t:'Attrezzatura pneumatici',d:'Per sostituzione rapida gomme forate.'},
            {e:'🔑',t:'Strumenti apertura',d:'Per apertura non distruttiva di auto con chiavi bloccate.'},
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

        <div style={{marginTop:'28px',display:'flex',flexDirection:'column',gap:'12px'}}>
          <a href="tel:+393270447124" className="btn-primary">📞 Chiama ora H24</a>
          <a href="https://wa.me/393270447124" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">💬 WhatsApp H24</a>
        </div>
      </section>

      <Footer />
      <StickyBar />
      <ChatWidget />
    </>
  );
}
