import type { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.elettrautoh24roma.it'),
  title: {
    default: 'BOOSTERMAN Elettrauto H24 Roma | Batteria Scarica, Apertura Veicolo e Diagnosi',
    template: '%s | BOOSTERMAN Elettrauto H24 Roma',
  },
  description: 'Elettrauto H24 Roma. Assistenza auto a domicilio per batteria scarica, auto che non parte, apertura veicolo, gomma forata e diagnosi elettronica. Operativi 24 ore su 24 a Roma e provincia.',
  keywords: ['elettrauto h24 roma', 'batteria scarica roma', 'apertura auto roma', 'soccorso stradale roma', 'gomma forata roma', 'diagnosi auto roma', 'elettrauto mobile roma'],
  openGraph: {
    title: 'BOOSTERMAN Elettrauto H24 Roma',
    description: 'Pronto intervento elettrauto mobile H24. Batteria scarica, apertura veicolo, gomma forata. Roma e provincia.',
    url: 'https://www.elettrautoh24roma.it',
    siteName: 'BOOSTERMAN',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BOOSTERMAN Elettrauto H24 Roma',
    description: 'Pronto intervento elettrauto mobile H24. Roma e provincia.',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://www.elettrautoh24roma.it' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#0a0a0a" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        {/* Google Ads */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-862362843" />
        <script dangerouslySetInnerHTML={{__html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent','default',{ad_storage:'denied',analytics_storage:'denied'});
          gtag('js', new Date());
          gtag('config','AW-862362843');

          // Tracking unico per CTA: Chiama, WhatsApp, GPS, chat.
          // IMPORTANTE: sostituisci CONVERSION_LABEL con la label reale creata in Google Ads.
          var boostermanLastConversionAt = 0;
          window.boostermanTrack = function(action){
            try {
              // Evita doppie conversioni se un click attiva sia onClick React sia il listener globale.
              var now = Date.now();
              if (now - boostermanLastConversionAt < 900) return;
              boostermanLastConversionAt = now;

              if (typeof gtag === 'function') {
                gtag('event', 'conversion', {
                  send_to: 'AW-862362843/ss3kCNjk_rgcENu5mpsD',
                  event_category: 'CTA',
                  event_label: action || 'click',
                  value: 1
                });
              }
            } catch(e) {}
          };

          document.addEventListener('click', function(e){
            var target = e.target && e.target.closest ? e.target.closest('a,button') : null;
            if (!target) return;
            var href = target.getAttribute('href') || '';
            var custom = target.getAttribute('data-boosterman-cta');
            if (custom) window.boostermanTrack(custom);
            else if (href.indexOf('tel:') === 0) window.boostermanTrack('phone_click');
            else if (href.indexOf('wa.me') !== -1 || href.indexOf('whatsapp') !== -1) window.boostermanTrack('whatsapp_click');
          }, true);

          window.addEventListener('boosterman-cta', function(e){
            window.boostermanTrack(e.detail && e.detail.action ? e.detail.action : 'custom_cta');
          });
        `}} />
        {/* Schema LocalBusiness */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "BOOSTERMAN Elettrauto H24 Roma",
          "description": "Pronto intervento elettrauto mobile H24. Batteria scarica, apertura veicolo, gomma forata. Roma e provincia.",
          "url": "https://www.elettrautoh24roma.it",
          "telephone": "+393270447124",
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
            "opens": "00:00",
            "closes": "23:59"
          },
          "areaServed": { "@type": "City", "name": "Roma" },
          "priceRange": "€€",
          "image": "https://www.elettrautoh24roma.it/og-image.png"
        })}} />
      </head>
      <body>{children}</body>
    </html>
  );
}
