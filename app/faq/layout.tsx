import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ Elettrauto H24 Roma | BOOSTERMAN — Domande Frequenti',
  description: 'Risposte alle domande più comuni su BOOSTERMAN: orari H24, tempi di arrivo, prezzi, pagamenti, zone coperte. Leggi la FAQ del tuo elettrauto mobile a Roma.',
  alternates: { canonical: 'https://www.elettrautoh24roma.it/faq' },
  openGraph: {
    title: 'FAQ | BOOSTERMAN Elettrauto H24 Roma',
    description: 'Domande frequenti su interventi, prezzi, pagamenti e zone coperte da BOOSTERMAN.',
    url: 'https://www.elettrautoh24roma.it/faq',
    siteName: 'BOOSTERMAN',
    type: 'website',
    images: [{ url: 'https://www.elettrautoh24roma.it/og-image.png', width: 1200, height: 630 }],
  },
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
