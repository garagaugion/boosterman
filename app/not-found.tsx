import Link from 'next/link';

export const metadata = {
  title: 'Pagina non trovata | BOOSTERMAN Elettrauto H24 Roma',
  description: 'Pagina non trovata. Per emergenze auto H24 a Roma chiama o scrivi su WhatsApp: batteria scarica, apertura veicolo, diagnosi.',
};

export default function NotFound() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600&display=swap');

        .nf-body {
          background: #0a0a0a;
          color: #f0f0f0;
          font-family: 'DM Sans', sans-serif;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 24px 16px;
          overflow-x: hidden;
          position: relative;
        }

        .nf-body::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image:
            linear-gradient(rgba(177,58,58,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(177,58,58,0.04) 1px, transparent 1px);
          background-size: 40px 40px;
          pointer-events: none;
          z-index: 0;
        }

        .nf-container {
          position: relative;
          z-index: 1;
          max-width: 560px;
          width: 100%;
          text-align: center;
        }

        .nf-brand {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-bottom: 40px;
          animation: fadeDown 0.6s ease both;
        }

        .nf-brand-icon {
          width: 48px;
          height: 48px;
          background: #B13A3A;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
        }

        .nf-brand-name {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 2.2rem;
          letter-spacing: 2px;
          color: #f0f0f0;
        }

        .nf-status-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(177,58,58,0.12);
          border: 1px solid rgba(177,58,58,0.3);
          color: #e07070;
          padding: 6px 16px;
          border-radius: 100px;
          font-size: 0.78rem;
          font-weight: 500;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin-bottom: 28px;
          animation: fadeDown 0.6s 0.1s ease both;
        }

        .nf-status-dot {
          width: 7px;
          height: 7px;
          background: #B13A3A;
          border-radius: 50%;
          animation: pulse 1.5s infinite;
        }

        .nf-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.8rem, 8vw, 4.5rem);
          line-height: 1;
          margin-bottom: 16px;
          animation: fadeDown 0.6s 0.2s ease both;
        }

        .nf-title span { color: #B13A3A; }

        .nf-subtitle {
          color: #888;
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 40px;
          animation: fadeDown 0.6s 0.3s ease both;
        }

        .nf-divider {
          width: 48px;
          height: 3px;
          background: #B13A3A;
          margin: 0 auto 40px;
          animation: fadeDown 0.6s 0.35s ease both;
        }

        .nf-cta-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-bottom: 32px;
          animation: fadeUp 0.6s 0.4s ease both;
        }

        .nf-cta-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          padding: 20px 16px;
          border-radius: 14px;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.95rem;
          transition: transform 0.2s, box-shadow 0.2s;
          cursor: pointer;
        }

        .nf-cta-btn:active { transform: scale(0.97); }

        .nf-cta-btn .icon {
          font-size: 1.8rem;
          line-height: 1;
        }

        .nf-cta-btn.phone {
          background: #B13A3A;
          color: white;
          box-shadow: 0 4px 24px rgba(177,58,58,0.35);
        }

        .nf-cta-btn.phone:hover {
          background: #8a2c2c;
          box-shadow: 0 6px 30px rgba(177,58,58,0.5);
          transform: translateY(-2px);
        }

        .nf-cta-btn.home {
          background: #181818;
          color: #f0f0f0;
          border: 1px solid #2a2a2a;
          box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        }

        .nf-cta-btn.home:hover {
          background: #222;
          transform: translateY(-2px);
        }

        .nf-cta-label {
          font-size: 0.75rem;
          font-weight: 400;
          opacity: 0.8;
        }

        .nf-info-card {
          background: #181818;
          border: 1px solid #2a2a2a;
          border-radius: 16px;
          padding: 24px;
          margin-bottom: 32px;
          text-align: left;
          animation: fadeUp 0.6s 0.5s ease both;
        }

        .nf-info-card h3 {
          font-size: 0.75rem;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #B13A3A;
          margin-bottom: 16px;
          font-weight: 500;
        }

        .nf-service-list {
          list-style: none;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          padding: 0;
        }

        .nf-service-list li {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.88rem;
          color: #ccc;
        }

        .nf-service-list li::before {
          content: '';
          width: 6px;
          height: 6px;
          background: #B13A3A;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .nf-hours-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          color: #888;
          font-size: 0.85rem;
          margin-bottom: 28px;
          animation: fadeUp 0.6s 0.6s ease both;
        }

        .nf-hours-row strong { color: #f0f0f0; }

        .nf-footer {
          color: #888;
          font-size: 0.78rem;
          animation: fadeUp 0.6s 0.7s ease both;
        }

        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-16px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }

        @media (max-width: 400px) {
          .nf-service-list { grid-template-columns: 1fr; }
          .nf-cta-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="nf-body">
        <div className="nf-container">

          <div className="nf-brand">
            <div className="nf-brand-icon">⚡</div>
            <span className="nf-brand-name">BOOSTERMAN</span>
          </div>

          <div className="nf-status-badge">
            <div className="nf-status-dot"></div>
            Pagina non trovata
          </div>

          <h1 className="nf-title">Pagina<br /><span>inesistente.</span></h1>

          <p className="nf-subtitle">
            La pagina che cerchi non esiste o è stata spostata.<br />
            Per emergenze siamo comunque <strong style={{ color: '#f0f0f0' }}>operativi H24</strong>.
          </p>

          <div className="nf-divider"></div>

          <div className="nf-cta-grid">
            <a className="nf-cta-btn phone" href="tel:+393270447124">
              <span className="icon">📞</span>
              <span>Chiama ora</span>
              <span className="nf-cta-label">Risposta immediata</span>
            </a>
            <Link className="nf-cta-btn home" href="/">
              <span className="icon">🏠</span>
              <span>Torna alla home</span>
              <span className="nf-cta-label">Pagina principale</span>
            </Link>
          </div>

          <div className="nf-info-card">
            <h3>Servizi disponibili H24</h3>
            <ul className="nf-service-list">
              <li>Batteria scarica</li>
              <li>Apertura veicolo</li>
              <li>Diagnosi elettronica</li>
              <li>Sostituzione batteria</li>
              <li>Avviamento auto</li>
              <li>Assistenza su strada</li>
            </ul>
          </div>

          <div className="nf-hours-row">
            🕐 Disponibili <strong>24 ore su 24</strong>, <strong>7 giorni su 7</strong> — tutta Roma
          </div>

          <div className="nf-footer">
            © 2026 BOOSTERMAN Elettrauto H24 Roma
          </div>

        </div>
      </div>
    </>
  );
}
