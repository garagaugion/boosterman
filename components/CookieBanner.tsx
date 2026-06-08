'use client';

import { useEffect, useState } from 'react';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('bm_consent');
    if (!saved) {
      setVisible(true);
    } else {
      applyConsent(saved === 'granted');
    }
  }, []);

  function applyConsent(granted: boolean) {
    if (typeof window === 'undefined' || typeof (window as any).gtag !== 'function') return;
    const status = granted ? 'granted' : 'denied';
    (window as any).gtag('consent', 'update', {
      ad_storage: status,
      analytics_storage: status,
      ad_user_data: status,
      ad_personalization: status,
    });
  }

  function handleAccept() {
    localStorage.setItem('bm_consent', 'granted');
    applyConsent(true);
    setVisible(false);
  }

  function handleReject() {
    localStorage.setItem('bm_consent', 'denied');
    applyConsent(false);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 99999,
      background: '#111',
      borderTop: '1px solid #333',
      padding: '16px 20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      fontFamily: 'sans-serif',
    }}>
      <p style={{ margin: 0, color: '#ccc', fontSize: '13px', lineHeight: '1.5' }}>
        Utilizziamo cookie per migliorare l&apos;esperienza e misurare le conversioni pubblicitarie.{' '}
        <a href="/cookie" style={{ color: '#facc15', textDecoration: 'underline' }}>Cookie Policy</a>
      </p>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <button
          onClick={handleAccept}
          style={{
            background: '#facc15',
            color: '#000',
            border: 'none',
            borderRadius: '6px',
            padding: '10px 20px',
            fontWeight: 700,
            fontSize: '14px',
            cursor: 'pointer',
          }}
        >
          Accetta tutto
        </button>
        <button
          onClick={handleReject}
          style={{
            background: 'transparent',
            color: '#aaa',
            border: '1px solid #444',
            borderRadius: '6px',
            padding: '10px 20px',
            fontWeight: 600,
            fontSize: '14px',
            cursor: 'pointer',
          }}
        >
          Rifiuta
        </button>
      </div>
    </div>
  );
}
