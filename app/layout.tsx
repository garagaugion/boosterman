import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.elettrautoh24roma.it'),
  title: 'BOOSTERMAN Elettrauto H24 Roma',
  description: 'Elettrauto mobile H24 a Roma. Assistenza auto a domicilio, batteria scarica, gomma forata, apertura veicolo e diagnosi elettronica.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='22' fill='%23F5A623'/%3E%3Ctext x='50' y='52' font-family='Segoe UI, Arial, sans-serif' font-size='46' font-weight='bold' fill='%230a0a0a' text-anchor='middle'%3E%E2%9A%A1H24%3C/text%3E%3C/svg%3E" />
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="/css/style.css" />
        <Script id="google-ads-consent" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied',
              'analytics_storage': 'denied'
            });
          `}
        </Script>
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-862362843" strategy="afterInteractive" />
        <Script id="google-ads-config" strategy="afterInteractive">
          {`
            gtag('js', new Date());
            gtag('config', 'AW-862362843');
          `}
        </Script>
      </head>
      <body className="bg-ink text-white">
        {children}
        <Script src="/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
