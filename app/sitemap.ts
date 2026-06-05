import type { MetadataRoute } from 'next';
import { localAreas } from '@/lib/localAreas';

const base = 'https://www.elettrautoh24roma.it';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: `${base}/`, priority: 1.0 },
    { url: `${base}/chi-siamo`, priority: 0.8 },
    { url: `${base}/come-funziona`, priority: 0.8 },
    { url: `${base}/contatti`, priority: 0.8 },
    { url: `${base}/faq`, priority: 0.8 },
    { url: `${base}/prezzi`, priority: 0.8 },
    { url: `${base}/zone`, priority: 0.8 }
  ];

  const localPages = localAreas.map((area) => ({
    url: `${base}/${area.slug}`,
    priority: area.slug.startsWith('roma-') || area.slug === 'fiumicino' || area.slug === 'ciampino' ? 0.9 : 0.82
  }));

  return [...staticPages, ...localPages];
}
