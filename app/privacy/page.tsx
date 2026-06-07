import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyBar from '@/components/StickyBar';

export const metadata: Metadata = {
  title: 'Privacy Policy | BOOSTERMAN Elettrauto H24 Roma',
  description: 'Informativa sul trattamento dei dati personali di BOOSTERMAN ai sensi del Regolamento UE 2016/679 (GDPR).',
  alternates: { canonical: 'https://www.elettrautoh24roma.it/privacy' },
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <div className="page-hero">
        <div className="section-label">— Documenti legali</div>
        <h1 className="section-title">Privacy<br /><span className="text-yellow">Policy</span></h1>
        <p style={{color:'#aaa',fontSize:'14px'}}>Ultimo aggiornamento: giugno 2025</p>
      </div>
      <section className="section" style={{paddingTop:'0'}}>
        <div style={{display:'flex',flexDirection:'column',gap:'28px',fontSize:'16px',lineHeight:'1.7',color:'#ccc'}}>

          <div>
            <h2 style={{fontFamily:'var(--font-display)',fontSize:'21px',fontWeight:800,textTransform:'uppercase',color:'var(--white)',marginBottom:'10px'}}>1. Titolare del trattamento</h2>
            <p>Il titolare del trattamento dei dati personali è <strong>BOOSTERMAN — Pronto Intervento Elettrauto Mobile H24</strong>, raggiungibile al numero <a href="tel:+393270447124" style={{color:'var(--yellow)'}}>327 044 7124</a> e tramite WhatsApp allo stesso numero.</p>
          </div>

          <div>
            <h2 style={{fontFamily:'var(--font-display)',fontSize:'21px',fontWeight:800,textTransform:'uppercase',color:'var(--white)',marginBottom:'10px'}}>2. Dati raccolti</h2>
            <p>Il sito raccoglie i seguenti dati:</p>
            <ul style={{paddingLeft:'20px',marginTop:'8px',display:'flex',flexDirection:'column',gap:'6px'}}>
              <li><strong>Dati di navigazione:</strong> indirizzo IP, tipo di browser, pagine visitate, orari di accesso. Raccolti automaticamente dai sistemi informatici del sito.</li>
              <li><strong>Dati forniti volontariamente:</strong> numero di telefono, nome, descrizione del problema quando l'utente contatta il servizio tramite telefono o WhatsApp.</li>
              <li><strong>Dati di localizzazione:</strong> posizione GPS condivisa volontariamente dall'utente su WhatsApp per agevolare l'intervento.</li>
            </ul>
          </div>

          <div>
            <h2 style={{fontFamily:'var(--font-display)',fontSize:'21px',fontWeight:800,textTransform:'uppercase',color:'var(--white)',marginBottom:'10px'}}>3. Finalità e base giuridica</h2>
            <ul style={{paddingLeft:'20px',display:'flex',flexDirection:'column',gap:'6px'}}>
              <li><strong>Erogazione del servizio richiesto</strong> (art. 6.1.b GDPR — esecuzione di un contratto).</li>
              <li><strong>Obblighi legali e contabili</strong> (art. 6.1.c GDPR).</li>
              <li><strong>Interesse legittimo</strong> per la sicurezza del sito e prevenzione frodi (art. 6.1.f GDPR).</li>
              <li><strong>Consenso</strong> per eventuali comunicazioni promozionali (art. 6.1.a GDPR), previo consenso esplicito.</li>
            </ul>
          </div>

          <div>
            <h2 style={{fontFamily:'var(--font-display)',fontSize:'21px',fontWeight:800,textTransform:'uppercase',color:'var(--white)',marginBottom:'10px'}}>4. Conservazione dei dati</h2>
            <p>I dati relativi agli interventi sono conservati per il tempo necessario all'adempimento degli obblighi contabili e fiscali (max 10 anni). I dati di navigazione sono conservati per un massimo di 12 mesi.</p>
          </div>

          <div>
            <h2 style={{fontFamily:'var(--font-display)',fontSize:'21px',fontWeight:800,textTransform:'uppercase',color:'var(--white)',marginBottom:'10px'}}>5. Condivisione dei dati</h2>
            <p>I dati personali non vengono venduti né ceduti a terzi. Possono essere condivisi esclusivamente con:</p>
            <ul style={{paddingLeft:'20px',marginTop:'8px',display:'flex',flexDirection:'column',gap:'6px'}}>
              <li>Fornitori di servizi tecnici (hosting, analytics) che operano come responsabili del trattamento.</li>
              <li>Autorità competenti, se richiesto dalla legge.</li>
            </ul>
          </div>

          <div>
            <h2 style={{fontFamily:'var(--font-display)',fontSize:'21px',fontWeight:800,textTransform:'uppercase',color:'var(--white)',marginBottom:'10px'}}>6. Cookie</h2>
            <p>Per i dettagli sull'utilizzo dei cookie, consultare la <a href="/cookie" style={{color:'var(--yellow)'}}>Cookie Policy</a>.</p>
          </div>

          <div>
            <h2 style={{fontFamily:'var(--font-display)',fontSize:'21px',fontWeight:800,textTransform:'uppercase',color:'var(--white)',marginBottom:'10px'}}>7. Diritti dell'interessato</h2>
            <p>Ai sensi degli artt. 15-22 GDPR, l'utente ha diritto di:</p>
            <ul style={{paddingLeft:'20px',marginTop:'8px',display:'flex',flexDirection:'column',gap:'6px'}}>
              <li>Accedere ai propri dati personali</li>
              <li>Rettificare o aggiornare i dati inesatti</li>
              <li>Ottenere la cancellazione ("diritto all'oblio")</li>
              <li>Limitare o opporsi al trattamento</li>
              <li>Richiedere la portabilità dei dati</li>
              <li>Revocare il consenso in qualsiasi momento</li>
            </ul>
            <p style={{marginTop:'10px'}}>Per esercitare questi diritti, contattare il titolare al numero <a href="tel:+393270447124" style={{color:'var(--yellow)'}}>327 044 7124</a>.</p>
          </div>

          <div>
            <h2 style={{fontFamily:'var(--font-display)',fontSize:'21px',fontWeight:800,textTransform:'uppercase',color:'var(--white)',marginBottom:'10px'}}>8. Reclami</h2>
            <p>È possibile presentare reclamo al <strong>Garante per la Protezione dei Dati Personali</strong> (www.garanteprivacy.it).</p>
          </div>

        </div>
      </section>
      <Footer />
      <StickyBar />
    </>
  );
}
