import Script from 'next/script';

type LocalArea = {
  slug: string;
  name: string;
  title: string;
  description: string;
  h1?: string;
  intro?: string;
  quartieri: readonly string[];
  roads: readonly string[];
  time: string;
  faq?: readonly (readonly [string, string])[];
};

const PHONE = '393270447124';

export default function LocalLandingPage({ area }: { area: LocalArea }) {
  const heading = area.h1 || `Elettrauto H24 ${area.name}`;
  const intro = area.intro || `Interveniamo a ${area.name} con assistenza elettrauto mobile H24 per batteria scarica, auto non parte, gomma forata, apertura veicolo e diagnosi elettronica.`;
  const whatsappText = encodeURIComponent(`Ciao BOOSTERMAN, ho bisogno di assistenza elettrauto H24 in zona ${area.name}.`);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',
    name: `BOOSTERMAN - ${heading}`,
    url: `https://www.elettrautoh24roma.it/${area.slug}`,
    telephone: '+393270447124',
    areaServed: area.name,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Roma',
      addressRegion: 'RM',
      addressCountry: 'IT'
    },
    openingHours: 'Mo-Su 00:00-23:59',
    description: area.description
  };

  const faqSchema = area.faq?.length ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: area.faq.map(([q, a]) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a }
    }))
  } : null;

  return (
    <>
      <header className="sticky-header backdrop-blur bg-ink/80 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-bolt text-ink grid place-items-center font-black text-xl shadow-glow">⚡</div>
              <div className="leading-tight">
                <div className="font-display font-bold text-lg tracking-tight"><span className="text-bolt">BOOSTER</span><span className="text-white">MAN</span></div>
                <div className="text-[9px] uppercase tracking-[0.2em] text-white/50">Pronto Intervento Elettrauto Mobile</div>
              </div>
            </a>
            <nav className="hidden lg:flex items-center gap-8 text-sm">
              <a href="/" className="text-white/70 hover:text-bolt transition">Home</a>
              <a href="/chi-siamo" className="text-white/70 hover:text-bolt transition">Chi siamo</a>
              <a href="/zone" className="text-bolt transition">Zone</a>
              <a href="/prezzi" className="text-white/70 hover:text-bolt transition">Prezzi</a>
              <a href="/faq" className="text-white/70 hover:text-bolt transition">FAQ</a>
              <a href="/contatti" className="text-white/70 hover:text-bolt transition">Contatti</a>
            </nav>
            <div className="flex items-center gap-2">
              <a href={`tel:+${PHONE}`} className="btn-emergency hidden sm:inline-flex items-center gap-2 font-semibold text-sm px-4 py-2.5 rounded-lg transition">Chiama ora H24</a>
              <button id="mobileMenuBtn" className="mobile-menu-btn lg:hidden" aria-label="Apri menu" type="button">
                <span className="mobile-menu-label">MENU</span>
                <span className="mobile-menu-icon" aria-hidden="true"><span></span><span></span><span></span></span>
              </button>
            </div>
          </div>
          <div id="mobileDrawer" className="fixed top-0 right-0 h-full w-64 bg-carbon z-50 transform translate-x-full transition-transform duration-300 ease-in-out shadow-xl">
            <div className="flex justify-end p-4"><button id="closeDrawerBtn" className="drawer-close-btn" type="button">Chiudi ✕</button></div>
            <nav className="flex flex-col gap-4 px-6 py-2">
              <a href="/" className="text-white/80 hover:text-bolt py-2 border-b border-white/10 flex items-center gap-2">🏠 Home</a>
              <a href="/chi-siamo" className="text-white/80 hover:text-bolt py-2 border-b border-white/10 flex items-center gap-2">👥 Chi siamo</a>
              <a href="/zone" className="text-white/80 hover:text-bolt py-2 border-b border-white/10 flex items-center gap-2">📍 Zone</a>
              <a href="/prezzi" className="text-white/80 hover:text-bolt py-2 border-b border-white/10 flex items-center gap-2">💰 Prezzi</a>
              <a href="/faq" className="text-white/80 hover:text-bolt py-2 border-b border-white/10 flex items-center gap-2">❓ FAQ</a>
              <a href="/contatti" className="text-white/80 hover:text-bolt py-2 border-b border-white/10 flex items-center gap-2">📞 Contatti</a>
            </nav>
          </div>
          <div id="drawerOverlay" className="fixed inset-0 bg-black/50 z-40 hidden"></div>
        </div>
      </header>

      <div className="ticker-wrapper bg-bolt text-ink py-2 overflow-hidden border-y border-bolt/50">
        <div className="ticker-track whitespace-nowrap animate-marquee">
          <span className="mx-4">⚡ Avviamento Batteria</span><span className="mx-4">•</span>
          <span className="mx-4">🔋 Batteria Scarica</span><span className="mx-4">•</span>
          <span className="mx-4">🛞 Gomma Forata</span><span className="mx-4">•</span>
          <span className="mx-4">🔑 Apertura Veicolo</span><span className="mx-4">•</span>
          <span className="mx-4">🔧 Diagnosi Elettronica</span><span className="mx-4">•</span>
          <span className="mx-4">⚡ H24/7 · Festivi inclusi</span>
        </div>
      </div>

      <main>
        <section className="relative overflow-hidden py-24 px-4">
          <div className="absolute inset-0 grid-bg opacity-40"></div>
          <div className="absolute inset-0 radial-spot"></div>
          <div className="relative max-w-6xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs mb-6">
              <span className="live-dot"></span> Operativi H24 · {area.name}
            </div>
            <h1 className="font-display text-5xl sm:text-6xl font-bold leading-tight">{heading}</h1>
            <p className="text-lg text-white/70 max-w-3xl mt-6">{intro}</p>
            <div className="flex flex-wrap gap-4 mt-9">
              <a href={`tel:+${PHONE}`} className="btn-emergency font-bold px-8 py-4 rounded-xl text-lg transition">Chiama ora H24</a>
              <a href={`https://wa.me/${PHONE}?text=${whatsappText}`} target="_blank" className="border border-white/20 hover:border-bolt px-8 py-4 rounded-xl text-lg font-semibold transition">WhatsApp</a>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-carbon border-y border-white/5">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="bg-ink border border-white/10 rounded-2xl p-6">
                <h2 className="font-display text-2xl font-bold mb-4 text-bolt">Servizi disponibili</h2>
                <ul className="space-y-3 text-white/70">
                  <li>🔋 Batteria scarica e avviamento</li>
                  <li>🚗 Auto non parte</li>
                  <li>🛞 Gomma forata</li>
                  <li>🔑 Apertura veicolo</li>
                  <li>⚠️ Spie accese e diagnosi elettronica</li>
                </ul>
              </div>
              <div className="bg-ink border border-white/10 rounded-2xl p-6">
                <h2 className="font-display text-2xl font-bold mb-4 text-bolt">Zone e riferimenti</h2>
                <div className="flex flex-wrap gap-2">
                  {area.quartieri.map((q) => (
                    <span key={q} className="px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-white/75">{q}</span>
                  ))}
                </div>
              </div>
              <div className="bg-ink border border-white/10 rounded-2xl p-6">
                <h2 className="font-display text-2xl font-bold mb-4 text-bolt">Tempi indicativi</h2>
                <p className="text-white/70 leading-relaxed">{area.time}</p>
                <p className="text-white/50 text-sm mt-4">I tempi vengono sempre confermati in base a traffico, meteo e posizione esatta del veicolo.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-3xl font-bold mb-6">Strade e aree servite</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {area.roads.map((r) => (
                <div key={r} className="bg-carbon border border-white/10 rounded-xl p-4 text-white/75">{r}</div>
              ))}
            </div>
          </div>
        </section>

        {area.faq?.length ? (
          <section className="py-16 px-4 bg-carbon border-y border-white/5">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl font-bold mb-6 text-center">Domande frequenti in zona {area.name}</h2>
              <div className="space-y-4">
                {area.faq.map(([q, a]) => (
                  <details key={q} className="bg-ink border border-white/10 rounded-xl p-5">
                    <summary className="cursor-pointer font-semibold text-white">{q}</summary>
                    <p className="text-white/70 text-sm pt-3 leading-relaxed">{a}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">Hai bisogno di assistenza in zona {area.name}?</h2>
            <p className="text-white/70 mb-7">Puoi chiamare subito o inviare la posizione su WhatsApp. Il prezzo viene comunicato e approvato prima dell'intervento.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={`tel:+${PHONE}`} className="btn-emergency font-bold px-8 py-4 rounded-xl text-lg">Chiama ora H24</a>
              <a href={`https://wa.me/${PHONE}?text=${whatsappText}`} target="_blank" className="border border-white/20 hover:border-bolt px-8 py-4 rounded-xl text-lg font-semibold">WhatsApp</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-ink border-t border-white/5 pt-16 pb-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-bolt text-ink grid place-items-center text-xl">⚡</div>
                <div>
                  <div className="font-display font-bold"><span className="text-bolt">BOOSTER</span><span className="text-white">MAN</span></div>
                  <div className="text-[10px] uppercase text-white/50">Elettrauto Mobile H24</div>
                </div>
              </div>
              <p className="text-sm text-white/60">Assistenza auto a domicilio H24 a Roma e provincia.</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4 text-sm uppercase">Navigazione</h3>
              <ul className="space-y-2 text-sm text-white/60">
                <li><a href="/" className="hover:text-bolt">Home</a></li>
                <li><a href="/zone" className="hover:text-bolt">Zone</a></li>
                <li><a href="/prezzi" className="hover:text-bolt">Tariffe e trasparenza</a></li>
                <li><a href="/faq" className="hover:text-bolt">FAQ</a></li>
                <li><a href="/contatti" className="hover:text-bolt">Contatti</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4 text-sm uppercase">Aree principali</h3>
              <ul className="space-y-2 text-sm text-white/60">
                <li><a href="/roma-nord" className="hover:text-bolt">Roma Nord</a></li>
                <li><a href="/roma-sud" className="hover:text-bolt">Roma Sud</a></li>
                <li><a href="/roma-est" className="hover:text-bolt">Roma Est</a></li>
                <li><a href="/roma-ovest" className="hover:text-bolt">Roma Ovest</a></li>
                <li><a href="/ostia" className="hover:text-bolt">Ostia</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4 text-sm uppercase">Contatti</h3>
              <ul className="space-y-2 text-sm">
                <li><a href={`tel:+${PHONE}`} className="text-white/70 hover:text-bolt">📞 327 044 7124</a></li>
                <li><a href={`https://wa.me/${PHONE}`} target="_blank" className="text-white/70 hover:text-bolt">💬 WhatsApp H24</a></li>
                <li className="text-white/50">📍 Roma e provincia</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-xs text-white/50">© 2026 BOOSTERMAN — Elettrauto Mobile H24 Roma</div>
        </div>
      </footer>

      <Script id={`local-schema-${area.slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {faqSchema ? <Script id={`faq-schema-${area.slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} /> : null}
    </>
  );
}
