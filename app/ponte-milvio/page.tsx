import type { Metadata } from 'next';
import LocalLandingPage from '@/components/LocalLandingPage';
import { localAreas } from '@/lib/localAreas';

const area = localAreas.find((item) => item.slug === "ponte-milvio")!;

export const metadata: Metadata = {
  title: area.title,
  description: area.description,
  alternates: { canonical: `https://www.elettrautoh24roma.it/${area.slug}` },
  openGraph: {
    title: area.title,
    description: area.description,
    url: `https://www.elettrautoh24roma.it/${area.slug}`,
    siteName: 'BOOSTERMAN',
    images: ['/android-chrome-512x512.png'],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: area.title,
    description: area.description,
    images: ['/android-chrome-512x512.png']
  }
};

export default function Page() {
  return <LocalLandingPage area={area} />;
}
