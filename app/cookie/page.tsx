import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyBar from '@/components/StickyBar';

export const metadata: Metadata = {
  title: 'Cookie Policy | BOOSTERMAN Elettrauto H24 Roma',
  description: 'Informativa sull\'utilizzo dei cookie sul sito BOOSTERMAN ai sensi del D.Lgs. 196/2003 e del Regolamento UE 2016/679.',
  alternates: { canonical: 'https://www.elettrautoh24roma.it/cookie' },
  robots: { index: false, follow: false },
};

export default function CookiePage() {
  return (
    <>
      <Header />
      <div className="page-hero">
        <div className="section-label">— Documenti legali</div>
        <h1 className="section-title">Cookie<br /><span className="text-yellow">Policy</span></h1>
        <p style={{color:'#aaa',fontSize:'14px'}}>Ultimo aggiornamento: giugno 2025</p>
      </div>
      <section className="section" style={{paddingTop:'0'}}>
        <div style={{display:'flex',flexDirection:'column',gap:'28px',fontSize:'16px',lineHeight:'1.7',color:'#ccc'}}>

          <div>
            <h2 style={{fontFamily:'var(--font-display)',fontSize:'21px',fontWeight:800,textTransform:'uppercase',color:'var(--white)',marginBottom:'10px'}}>Cosa sono i cookie</h2>
            <p>I cookie sono piccoli file di testo che i siti web memorizzano sul dispositivo dell'utente durante la navigazione. Servono a far funzionare il sito correttamente e, in alcuni casi, a raccogliere informazioni statistiche sulla navigazione.</p>
          </div>

          <div>
            <h2 style={{fontFamily:'var(--font-display)',fontSize:'21px',fontWeight:800,textTransform:'uppercase',color:'var(--white)',marginBottom:'10px'}}>Cookie utilizzati da questo sito</h2>

            <div style={{display:'flex',flexDirection:'column',gap:'16px',marginTop:'8px'}}>
              <div className="info-card">
                <span className="info-icon">⚙️</span>
                <div>
                  <div className="info-title">Cookie tecnici (necessari)</div>
                  <div className="info-text">Indispensabili al funzionamento del sito. Non richiedono consenso. Includono cookie di sessione e preferenze di navigazione.</div>
                </div>
              </div>

              <div className="info-card">
                <span className="info-icon">📊</span>
                <div>
                  <div className="info-title">Google Tag Manager / Google Ads</div>
                  <div className="info-text">Il sito utilizza Google Tag Manager (GTM) con Google Ads (ID: AW-862362843) per misurare le conversioni delle campagne pubblicitarie. Il consenso al trattamento dei dati pubblicitari viene gestito tramite il tag gtag con impostazione predefinita "denied" fino all'eventuale consenso dell'utente.</div>
                </div>
              </div>

              <div className="info-card">
                <span className="info-icon">📱</span>
                <div>
                  <div className="info-title">Cookie di terze parti (WhatsApp / Google Maps)</div>
                  <div className="info-text">I link a WhatsApp e Google Maps non installano cookie di profilazione su questo sito. Eventuali cookie di Meta o Google vengono gestiti dalle rispettive piattaforme.</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 style={{fontFamily:'var(--font-display)',fontSize:'21px',fontWeight:800,textTransform:'uppercase',color:'var(--white)',marginBottom:'10px'}}>Come disabilitare i cookie</h2>
            <p>È possibile disabilitare i cookie dal proprio browser. Di seguito i link alle istruzioni per i browser più comuni:</p>
            <ul style={{paddingLeft:'20px',marginTop:'8px',display:'flex',flexDirection:'column',gap:'6px'}}>
              <li><strong>Chrome:</strong> Impostazioni → Privacy e sicurezza → Cookie</li>
              <li><strong>Safari:</strong> Preferenze → Privacy → Gestisci dati siti web</li>
              <li><strong>Firefox:</strong> Impostazioni → Privacy e sicurezza → Cookie e dati dei siti</li>
              <li><strong>Edge:</strong> Impostazioni → Cookie e autorizzazioni del sito</li>
            </ul>
            <p style={{marginTop:'10px'}}>La disabilitazione dei cookie tecnici potrebbe compromettere il corretto funzionamento del sito.</p>
          </div>

          <div>
            <h2 style={{fontFamily:'var(--font-display)',fontSize:'21px',fontWeight:800,textTransform:'uppercase',color:'var(--white)',marginBottom:'10px'}}>Opt-out Google Ads</h2>
            <p>Per disattivare la pubblicità personalizzata di Google, visita <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" style={{color:'var(--yellow)'}}>adssettings.google.com</a>.</p>
          </div>

          <div>
            <h2 style={{fontFamily:'var(--font-display)',fontSize:'21px',fontWeight:800,textTransform:'uppercase',color:'var(--white)',marginBottom:'10px'}}>Contatti</h2>
            <p>Per qualsiasi informazione relativa ai cookie, contattare BOOSTERMAN al <a href="tel:+393270447124" style={{color:'var(--yellow)'}}>327 044 7124</a>. Per l'informativa completa sul trattamento dei dati, consultare la <a href="/privacy" style={{color:'var(--yellow)'}}>Privacy Policy</a>.</p>
          </div>

        </div>
      </section>
      <Footer />
      <StickyBar />
    </>
  );
}
