import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
export default function PageShell({ title, description, canonical, jsonLd, children }) {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col">
      <Navigation />
      <main className="flex-1">{children}</main>
      <Footer />
      {jsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}></script>
      )}
    </div>
  );
}
