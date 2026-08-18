import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'New AI Services | Zion Tech Group',
  description: 'Redirecting to services.',
  alternates: { canonical: '/services/' },
  robots: { index: false, follow: true },
};

export default function NewAiServicesRedirect() {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="refresh" content="0; url=/services/" />
        <link rel="canonical" href="https://ziontechgroup.com/services/" />
      </head>
      <body>
        <main className="min-h-screen flex items-center justify-center bg-slate-950">
          <p className="text-slate-400">
            Redirecting to <a href="/services/" className="text-purple-300 hover:text-purple-200">services</a>…
          </p>
        </main>
      </body>
    </html>
  );
}
