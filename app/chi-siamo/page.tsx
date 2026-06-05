import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyBar from '@/components/StickyBar';
import ChatWidget from '@/components/ChatWidget';

export const metadata: Metadata = {
  title: 'Chi Siamo | BOOSTERMAN Elettrauto H24 Roma',
  description: 'BOOSTERMAN è il servizio di elettrauto mobile H24 a Roma con oltre 10 anni di esperienza. Tecnici certificati, intervento rapido, prezzi trasparenti.',
};

export default function ChiSiamoPage() {
  return (
    <>
      <Header />
      <div className="page-hero">
        <div className="section-label">— Chi siamo</div>
        <h1 className="section-title">Chi è<br /><span className="text-yellow">BOOSTERMAN</span></h1>
      </div>

      <section className="section" style={{paddingTop:'0'}}>
        <p style={{fontSize:'17px',lineHeight:'1.7',color:'#ccc',marginBottom:'24px'}}>
          BOOSTERMAN è il servizio di pronto intervento elettrauto mobile più rapido di Roma. 
          Operativi 24 ore su 24, 7 giorni su 7, festivi inclusi. Da oltre 10 anni 
          aiutiamo automobilisti in difficoltà su tutto il territorio di Roma e provincia.
        </p>

        <div style={{display:'flex',flexDirection:'column',gap:'12px',marginBottom:'32px'}}>
          {[
            { emoji:'⚡', title:'Risposta rapida', text:'Tempo medio di arrivo 20-40 minuti. Operiamo su tutta Roma e provincia.' },
            { emoji:'🔧', title:'Tecnici certificati', text:'Il nostro team ha oltre 10 anni di esperienza su tutti i tipi di veicoli: auto, SUV, furgoni.' },
            { emoji:'💰', title:'Prezzi trasparenti', text:'Il preventivo viene comunicato prima dell\'intervento. Nessuna sorpresa, nessun costo nascosto.' },
            { emoji:'🛡️', title:'Lavoro garantito', text:'Ogni intervento è garantito. Se non siamo soddisfatti del risultato, troviamo una soluzione.' },
            { emoji:'📱', title:'Sempre raggiungibili', text:'Disponibili via telefono e WhatsApp H24. Risposta immediata anche di notte.' },
            { emoji:'🚐', title:'Officina mobile attrezzata', text:'Il nostro furgone porta sempre le batterie e gli strumenti necessari per risolvere il problema sul posto.' },
          ].map(c => (
            <div key={c.title} className="info-card">
              <span className="info-icon">{c.emoji}</span>
              <div>
                <div className="info-title">{c.title}</div>
                <div className="info-text">{c.text}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{background:'rgba(255,214,0,0.08)',border:'1px solid rgba(255,214,0,0.25)',borderRadius:'12px',padding:'20px',marginBottom:'24px'}}>
          <div style={{fontFamily:'var(--font-display)',fontSize:'22px',fontWeight:900,textTransform:'uppercase',marginBottom:'8px'}}>
            La nostra promessa
          </div>
          <p style={{fontSize:'16px',color:'#ccc',lineHeight:'1.6'}}>
            Quando sei in difficoltà con l'auto, ogni minuto conta. Per questo ci impegniamo ad arrivare 
            nel minor tempo possibile, a comunicarti il prezzo prima di toccare l'auto, e a non andarcene 
            finché il problema non è risolto.
          </p>
        </div>

        <div style={{display:'flex',flexDirection:'column',gap:'12px'}}>
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
