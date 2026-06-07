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

  function buildWaUrl(message: string) {
    return `${WA_BASE}${encodeURIComponent(message)}`;
  }

  function sendLocation() {
    trackBoostermanEvent('sos_gps_confirm');
    if (!navigator.geolocation) {
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
      <div className={`sos-gps-box ${compact ? 'compact' : ''}`}>
        <button
          type="button"
          onClick={() => { setConfirmed(true); trackBoostermanEvent('sos_gps_click'); }}
          className="sos-gps-btn"
        >
          <span className="sos-gps-target">⌖</span>
          <span className="sos-gps-label">SOS — Invia posizione</span>
        </button>
        <p className="sos-gps-note">
          Premendo il pulsante, autorizzi l’invio della tua posizione per ricevere assistenza immediata. La posizione verrà utilizzata solo per questo servizio.
        </p>
      </div>
    );
  }

  return (
    <div className={`sos-gps-box ${compact ? 'compact' : ''} confirmed`}>
      <p className="sos-gps-confirm-text">
        📍 Premendo <strong>Conferma SOS</strong> accetti di inviare la tua posizione GPS al tecnico tramite WhatsApp.
      </p>
      <button
        type="button"
        onClick={sendLocation}
        disabled={loading}
        className="sos-gps-confirm-btn"
      >
        {loading ? '📡 Sto rilevando la posizione GPS...' : '🚨 Conferma SOS — Invia posizione'}
      </button>
      <button
        type="button"
        onClick={() => setConfirmed(false)}
        className="sos-gps-cancel-btn"
      >
        Annulla
      </button>
    </div>
  );
}
