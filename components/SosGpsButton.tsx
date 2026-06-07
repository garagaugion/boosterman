'use client';
import { useState } from 'react';

const PHONE_NUMBER = '393270447124';
const WA_BASE = `https://wa.me/${PHONE_NUMBER}?text=`;

function trackBoostermanEvent(action: string) {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new CustomEvent('boosterman-cta', { detail: { action } }));
}

export default function SosGpsButton({ compact = false }: { compact?: boolean }) {
  const [confirmed, setConfirmed] = useState(false);
  const [loading, setLoading] = useState(false);

  const btnStyle = compact
    ? { padding: '14px 20px', fontSize: '17px', borderRadius: '14px' }
    : { padding: '18px 20px', fontSize: '19px', borderRadius: '18px' };

  const labelStyle = compact
    ? { fontSize: '17px' }
    : { fontSize: '22px' };

  const subStyle = compact
    ? { fontSize: '13px' }
    : { fontSize: '13px' };

  function buildWaUrl(message: string) {
    return `${WA_BASE}${encodeURIComponent(message)}`;
  }

  function sendLocation() {
    trackBoostermanEvent('sos_gps_confirm');
    if (!navigator.geolocation) {
      // GPS non supportato — apri WhatsApp con messaggio fallback tramite link nativo
      const url = buildWaUrl(
        "🚨 SOS BOOSTERMAN\n\nHo un'emergenza urgente. Il mio telefono non supporta la posizione GPS. Vi scrivo la posizione manualmente."
      );
      window.location.href = url;
      return;
    }
    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLoading(false);
        const { latitude, longitude } = pos.coords;
        const url = buildWaUrl(
          `🚨 SOS BOOSTERMAN\n\nHo un'emergenza urgente. Ho premuto il pulsante SOS.\n\nPosizione GPS:\nhttps://maps.google.com/?q=${latitude},${longitude}`
        );
        // Link nativo — funziona su tutti i browser Android (MIUI, Samsung, OnePlus) senza popup blocker
        window.location.href = url;
        trackBoostermanEvent('sos_gps_sent');
      },
      () => {
        setLoading(false);
        const url = buildWaUrl(
          "🚨 SOS BOOSTERMAN\n\nHo un'emergenza urgente. Ho premuto SOS ma non ho autorizzato la posizione GPS. Eccola manualmente:"
        );
        window.location.href = url;
        trackBoostermanEvent('sos_gps_denied');
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 0 }
    );
  }

  if (!confirmed) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <button
          type="button"
          onClick={() => { setConfirmed(true); trackBoostermanEvent('sos_gps_click'); }}
          style={{
            width: '100%',
            background: '#B13A3A',
            border: 'none',
            borderRadius: btnStyle.borderRadius,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '4px',
            cursor: 'pointer',
            WebkitTapHighlightColor: 'transparent',
            touchAction: 'manipulation',
            animation: 'sos-pulse 2.4s ease-in-out infinite',
            boxShadow: '0 6px 24px rgba(177,58,58,0.32)',
            padding: btnStyle.padding,
          }}
        >
          <span style={{ fontSize: compact ? '26px' : '30px', lineHeight: 1 }}>🆘</span>
          <span style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 900,
            color: '#fff',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            ...labelStyle,
          }}>
            SOS — Invia posizione
          </span>
          <span style={{ color: 'rgba(255,255,255,0.82)', textAlign: 'center', lineHeight: 1.4, ...subStyle }}>
            Premi per inviare la tua posizione GPS al tecnico via WhatsApp
          </span>
        </button>
        <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.45)', textAlign: 'center', lineHeight: 1.4, margin: 0 }}>
          📍 La posizione GPS verrà condivisa con il tecnico tramite WhatsApp
        </p>
      </div>
    );
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      background: 'rgba(177,58,58,0.10)',
      border: '1px solid rgba(177,58,58,0.30)',
      borderRadius: '18px',
      padding: '16px',
    }}>
      <p style={{ fontSize: '14px', color: '#ddd', lineHeight: 1.5, textAlign: 'center', margin: 0 }}>
        📍 Premendo <strong>Conferma SOS</strong> accetti di inviare la tua posizione GPS al tecnico tramite WhatsApp.
      </p>
      <button
        type="button"
        onClick={sendLocation}
        disabled={loading}
        style={{
          width: '100%',
          background: '#B13A3A',
          color: '#fff',
          border: 'none',
          borderRadius: '14px',
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: compact ? '17px' : '18px',
          fontWeight: 900,
          padding: '16px',
          cursor: loading ? 'wait' : 'pointer',
          opacity: loading ? 0.75 : 1,
          boxShadow: '0 4px 18px rgba(177,58,58,0.32)',
          touchAction: 'manipulation',
          WebkitTapHighlightColor: 'transparent',
        }}
      >
        {loading ? '📡 Sto rilevando la posizione GPS...' : '🚨 Conferma SOS — Invia posizione'}
      </button>
      <button
        type="button"
        onClick={() => setConfirmed(false)}
        style={{
          width: '100%',
          background: 'transparent',
          color: '#888',
          border: '1px solid #333',
          borderRadius: '14px',
          fontSize: '15px',
          fontWeight: 600,
          padding: '12px',
          cursor: 'pointer',
          touchAction: 'manipulation',
          WebkitTapHighlightColor: 'transparent',
        }}
      >
        Annulla
      </button>
    </div>
  );
}
