import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">⚡ BOOSTERMAN</div>
      <div className="footer-tagline">SOS Batterie &amp; Assistenza Auto H24 · Roma</div>
      <div className="footer-pronto">Pronto Intervento Mobile · 7 giorni su 7 · Festivi inclusi</div>
      <div className="footer-links">
        <Link href="/">🏠 Home</Link>
        <Link href="/chi-siamo">👥 Chi siamo</Link>
        <Link href="/zone">📍 Zone coperte</Link>
        <Link href="/prezzi">💰 Prezzi</Link>
        <Link href="/faq">❓ FAQ</Link>
        <Link href="/come-funziona">🔧 Come funziona</Link>
        <Link href="/contatti">📞 Contatti</Link>
      </div>
      <a
        href="tel:+393270447124"
        data-boosterman-cta="phone_footer"
        style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '20px', fontWeight: 700, marginBottom: '14px' }}
      >
        📞 +39 327 044 7124
      </a>
      <a
        href="https://wa.me/393270447124"
        target="_blank"
        rel="noopener noreferrer"
        data-boosterman-cta="whatsapp_footer"
        style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '17px', color: '#25D366', marginBottom: '24px' }}
      >
        💬 WhatsApp H24
      </a>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} BOOSTERMAN — SOS Batterie &amp; Assistenza Auto H24 Roma</p>
        <p style={{ marginTop: '6px' }}>
          <Link href="/privacy" style={{ marginRight: '12px' }}>Privacy Policy</Link>
          <Link href="/cookie">Cookie Policy</Link>
        </p>
      </div>
    </footer>
  );
}
