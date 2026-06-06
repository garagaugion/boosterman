import { MetadataRoute } from 'next';

const ZONE_SLUGS = [
  'parioli', 'eur', 'ostia', 'trastevere', 'tiburtina',
  'centro-storico', 'flaminio', 'testaccio', 'garbatella',
  'prati', 'nomentano', 'aurelio', 'ciampino', 'fiumicino', 'centocelle',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.elettrautoh24roma.it';
  // /privacy e /cookie sono robots noindex — escluse dalla sitemap correttamente
  const staticPages = ['', '/chi-siamo', '/zone', '/prezzi', '/faq', '/come-funziona', '/contatti'];

  const staticEntries = staticPages.map(path => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: path === '' ? 1 : 0.8,
  }));

  const zoneEntries = ZONE_SLUGS.map(slug => ({
    url: `${base}/zone/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  return [...staticEntries, ...zoneEntries];
}
