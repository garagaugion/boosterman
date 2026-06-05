'use client';

import { useEffect, useRef } from 'react';

type Props = {
  html: string;
  scripts?: readonly string[];
};

export default function RawHtmlPage({ html, scripts = [] }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Esegue gli script inline della pagina dopo che l'HTML è nel DOM.
    const added: HTMLScriptElement[] = [];
    scripts.forEach((code, index) => {
      const script = document.createElement('script');
      script.text = code;
      script.dataset.boostermanInline = String(index);
      document.body.appendChild(script);
      added.push(script);
    });

    return () => {
      added.forEach((script) => script.remove());
    };
  }, [scripts]);

  return <div ref={ref} dangerouslySetInnerHTML={{ __html: html }} />;
}
