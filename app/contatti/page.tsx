import type { Metadata } from 'next';
import RawHtmlPage from '@/components/RawHtmlPage';
import { pages } from '@/lib/pageData';

const page = pages["contatti.html"];

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: page.canonical },
  openGraph: {
    title: page.title,
    description: page.description,
    url: page.canonical,
    siteName: 'BOOSTERMAN',
    images: ['/android-chrome-512x512.png'],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: page.title,
    description: page.description,
    images: ['/android-chrome-512x512.png']
  }
};

export default function Page() {
  return <RawHtmlPage html={page.body} scripts={page.scripts} />;
}
