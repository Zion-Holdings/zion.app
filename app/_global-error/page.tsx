'use client';

const jsonLd = {"@context": "https://schema.org", "@type": "WebPage", "name": "", "description": "", "url": "https://ziontechgroup.com/_global-error/"};

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <html>
      <body>
        <h1>Something went wrong</h1>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}