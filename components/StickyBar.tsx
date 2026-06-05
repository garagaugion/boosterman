export default function StickyBar() {
  return (
    <div className="sticky-bar">
      <a
        href="tel:+393270447124"
        className="btn-primary"
        data-boosterman-cta="phone_sticky"
        style={{ fontSize: '16px', minHeight: '48px' }}
      >
        📞 Chiama H24
      </a>
      <a
        href="https://wa.me/393270447124"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-whatsapp"
        data-boosterman-cta="whatsapp_sticky"
        style={{ fontSize: '16px', minHeight: '48px' }}
      >
        💬 WhatsApp
      </a>
    </div>
  );
}
