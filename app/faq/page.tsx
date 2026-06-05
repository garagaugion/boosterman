'use client';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyBar from '@/components/StickyBar';
import ChatWidget from '@/components/ChatWidget';

const FAQS = [
  { q: 'Siete davvero operativi H24, anche di notte e nei festivi?', a: 'Sì, siamo operativi 24 ore su 24, 7 giorni su 7, festivi e notti incluse. Non ci sono orari di chiusura.' },
  { q: 'Quanto tempo ci vuole per arrivare?', a: 'Il tempo medio di arrivo è 20-40 minuti dalla chiamata, a seconda della zona. Per Roma centro e le aree principali solitamente arriviamo anche prima.' },
  { q: 'Quanto costa un intervento?', a: 'Il prezzo dipende dal tipo di intervento. Puoi trovare i prezzi orientativi nella sezione Prezzi. Prima di iniziare qualsiasi lavoro ti comunichiamo sempre il costo esatto — senza sorprese.' },
  { q: 'Devo pagare anche se non riuscite a risolvere il problema?', a: 'No. Il preventivo viene comunicato e approvato da te prima di iniziare. Se non siamo in grado di risolvere il problema, non ti viene addebitato nulla per il tentativo.' },
  { q: 'Venite anche in autostrada o fuori città?', a: 'Operiamo su Roma e provincia. Per autostrade o zone molto distanti, contattaci e valutiamo insieme la fattibilità.' },
  { q: 'Cosa serve avere pronto quando chiamate?', a: 'Basta che tu ci dica dove sei (indirizzo o punto di riferimento), che tipo di auto hai e qual è il problema. Se puoi, condividi la posizione GPS su WhatsApp per velocizzare tutto.' },
  { q: 'Quali metodi di pagamento accettate?', a: "Accettiamo contanti, carta di credito/debito e pagamenti digitali (Satispay, PayPal). Chiedi al tecnico al momento dell'intervento." },
  { q: 'Le batterie che installate sono originali?', a: 'Installiamo batterie di qualità certificata, compatibili con il tuo veicolo. Il tipo e la garanzia vengono specificati nel preventivo.' },
  { q: 'Lavorate anche su furgoni e veicoli commerciali?', a: 'Sì, interveniamo su auto, SUV, furgoni e veicoli commerciali di ogni tipo.' },
  { q: 'Come posso contattarvi?', a: 'Puoi chiamarci al 327 044 7124 oppure scriverci su WhatsApp allo stesso numero. Rispondiamo H24.' },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": FAQS.map(f => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": { "@type": "Answer", "text": f.a }
  }))
};

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item ${open ? 'open' : ''}`}>
      <button className="faq-question" onClick={() => setOpen(!open)}>
        <span>{q}</span>
        <span className="faq-chevron">▼</span>
      </button>
      <div className="faq-answer">
        <div className="faq-answer-inner">{a}</div>
      </div>
    </div>
  );
}

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <div className="page-hero">
        <div className="section-label">— Domande frequenti</div>
        <h1 className="section-title">FAQ</h1>
        <p style={{color:'#aaa',fontSize:'16px',lineHeight:'1.6'}}>Le domande che ci fanno più spesso. Non trovi la risposta? Scrivici su WhatsApp.</p>
      </div>
      <section className="section" style={{paddingTop:'0'}}>
        <div className="faq-list">
          {FAQS.map(f => <FaqItem key={f.q} q={f.q} a={f.a} />)}
        </div>
        <div style={{marginTop:'28px',background:'rgba(255,214,0,0.08)',border:'1px solid rgba(255,214,0,0.25)',borderRadius:'12px',padding:'20px'}}>
          <div style={{fontFamily:'var(--font-display)',fontSize:'19px',fontWeight:800,textTransform:'uppercase',marginBottom:'8px'}}>Hai altre domande?</div>
          <p style={{fontSize:'15px',color:'#aaa',marginBottom:'16px'}}>Scrivici su WhatsApp o chiamaci direttamente. Rispondiamo sempre.</p>
          <div style={{display:'flex',flexDirection:'column',gap:'10px'}}>
            <a href="tel:+393270447124" className="btn-primary">📞 Chiama H24</a>
            <a href="https://wa.me/393270447124" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">💬 WhatsApp</a>
          </div>
        </div>
      </section>
      <Footer />
      <StickyBar />
      <ChatWidget />
    </>
  );
}
