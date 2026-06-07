'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV = [
  { href: '/', label: 'Home', emoji: '🏠' },
  { href: '/chi-siamo', label: 'Chi siamo', emoji: '👥' },
  { href: '/zone', label: 'Zone', emoji: '📍' },
  { href: '/prezzi', label: 'Prezzi', emoji: '💰' },
  { href: '/faq', label: 'FAQ', emoji: '❓' },
  { href: '/come-funziona', label: 'Come funziona', emoji: '🔧' },
  { href: '/contatti', label: 'Contatti', emoji: '📞' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('menu-open');
    } else {
      document.body.style.overflow = '';
      document.body.classList.remove('menu-open');
    }
    return () => {
      document.body.style.overflow = '';
      document.body.classList.remove('menu-open');
    };
  }, [open]);

  return (
    <>
      <header className="header">
        <Link href="/" className="header-logo" onClick={() => setOpen(false)}>
          <span>⚡ BOOSTERMAN</span>
          <span className="header-logo-tagline">SOS Batterie &amp; Assistenza Auto H24 · Roma</span>
        </Link>
        <div className="header-phone">
          <a href="tel:+393270447124" className="btn-call-header" data-boosterman-cta="phone_header">
            📞 +39 327 044 7124
          </a>
          <button
            className={`hamburger ${open ? 'open' : ''}`}
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Chiudi menu' : 'Apri menu'}
            aria-expanded={open}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <nav
        className={`mobile-menu ${open ? 'open' : ''}`}
        aria-hidden={!open}
      >
        {NAV.map(({ href, label, emoji }) => (
          <Link key={href} href={href} onClick={() => setOpen(false)}>
            <span>{emoji}</span> {label}
          </Link>
        ))}
        <div className="mobile-menu-cta">
          <a href="tel:+393270447124" className="btn-call" data-boosterman-cta="phone_menu">
            📞 Chiama ora — H24 · 7/7
          </a>
          <a
            href="https://wa.me/393270447124"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
            data-boosterman-cta="whatsapp_menu"
          >
            💬 WhatsApp H24
          </a>
        </div>
      </nav>
    </>
  );
}
