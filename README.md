# BOOSTERMAN Next.js — Pronto per il Deploy

Sito BOOSTERMAN Elettrauto H24 Roma — Next.js 15 pronto per Vercel.

## Struttura pagine

| Percorso | File | Note |
|---|---|---|
| `/` | `app/page.tsx` | Home |
| `/chi-siamo` | `app/chi-siamo/page.tsx` | |
| `/zone` | `app/zone/page.tsx` | Lista tutte le zone |
| `/zone/[quartiere]` | `app/zone/*/page.tsx` | 15 pagine SEO locali |
| `/prezzi` | `app/prezzi/page.tsx` | |
| `/faq` | `app/faq/page.tsx` | Accordion client-side |
| `/come-funziona` | `app/come-funziona/page.tsx` | |
| `/contatti` | `app/contatti/page.tsx` | |
| `/privacy` | `app/privacy/page.tsx` | noindex |
| `/cookie` | `app/cookie/page.tsx` | noindex |
| `/api/weather` | `app/api/weather/route.ts` | Meteo Roma (opzionale) |

## Zone con pagina dedicata (SEO locale)

centro-storico, prati, trastevere, testaccio, flaminio, parioli,
nomentano, tiburtina, centocelle, aurelio, eur, garbatella,
ostia, ciampino, fiumicino

## Installazione e sviluppo locale

```bash
npm install
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000)

## Deploy su Vercel

1. Carica il progetto su GitHub
2. Connetti il repository a Vercel
3. Imposta la variabile ambiente (opzionale):

```
OPENWEATHER_API_KEY=la_tua_chiave
```

4. Deploy automatico ad ogni push su `main`

## Componenti principali

- **Header** — nav mobile hamburger + bottone telefono H24
- **StickyBar** — barra fissa mobile con Chiama/WhatsApp (nascosta su desktop)
- **ChatWidget** — FAB 🤖 con opzioni emergenza → apre WhatsApp con messaggio pre-compilato
- **Footer** — link a tutte le pagine + link Privacy/Cookie

## SEO

- Schema markup `LocalBusiness` nel layout (globale)
- Schema `FAQPage` nella pagina FAQ
- Schema `Service` con prezzi nella pagina Prezzi
- Schema `ContactPage` nella pagina Contatti
- Schema `LocalBusiness` con coordinate geo in ogni pagina zona
- Metadata OpenGraph + Twitter Card per tutte le pagine
- `sitemap.xml` generata automaticamente (22 URL)
- `robots.txt` automatico
- `/privacy` e `/cookie` escluse dalla sitemap (robots: noindex)

## Immagini da sostituire (opzionale)

Le immagini in `public/` sono placeholder generati automaticamente.
Per il sito definitivo, sostituire con immagini reali:
- `og-image.png` (1200×630) — anteprima social
- `android-chrome-192x192.png` / `android-chrome-512x512.png` — icone PWA
- `apple-touch-icon.png` (180×180) — icona iOS
- `favicon.ico` — favicon browser

## Note mobile

- `viewport-fit=cover` + `safe-area-inset` per iPhone con notch
- `-webkit-tap-highlight-color: transparent` su tutti i bottoni
- `touch-action: manipulation` per risposta immediata ai tap
- Tutti i bottoni CTA hanno `min-height: 48-56px`
- StickyBar rispetta `env(safe-area-inset-bottom)` su iPhone
- ChatWidget non sfora mai in alto su schermi piccoli
