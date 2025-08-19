import React from 'react';
import Head from 'next/head';

export default function SitemapPage() {
  return (
    <>
      <Head>
        <title>Sitemap | Zion Tech Group</title>
        <meta name="description" content="Complete sitemap of Zion Tech Group website pages and resources." />
        <meta name="robots" content="noindex" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Sitemap
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Complete overview of all pages and resources on our website
            </p>
          </section>

          <section className="mx-auto max-w-4xl">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-cyan-400">Main Pages</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <a href="/" className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all">
                  <div className="font-semibold text-cyan-300">Home</div>
                  <div className="text-sm text-white/70">Main landing page</div>
                </a>
                <a href="/about" className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all">
                  <div className="font-semibold text-fuchsia-300">About</div>
                  <div className="text-sm text-white/70">Company information</div>
                </a>
                <a href="/services" className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all">
                  <div className="font-semibold text-blue-300">Services</div>
                  <div className="text-sm text-white/70">Our offerings</div>
                </a>
                <a href="/automation" className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all">
                  <div className="font-semibold text-purple-300">Automation</div>
                  <div className="text-sm text-white/70">Autonomous systems</div>
                </a>
                <a href="/blog" className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all">
                  <div className="font-semibold text-green-300">Blog</div>
                  <div className="text-sm text-white/70">Latest insights</div>
                </a>
                <a href="/resources" className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all">
                  <div className="font-semibold text-yellow-300">Resources</div>
                  <div className="text-sm text-white/70">Tools and guides</div>
                </a>
                <a href="/contact" className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all">
                  <div className="font-semibold text-red-300">Contact</div>
                  <div className="text-sm text-white/70">Get in touch</div>
                </a>
              </div>

              <h2 className="text-2xl font-bold mb-6 text-fuchsia-400">Reports & Updates</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <a href="/reports/updates/update-2025-08-15-0406" className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all">
                  <div className="font-semibold text-cyan-300">Update 2025-08-15-0406</div>
                  <div className="text-sm text-white/70">Latest autonomous update</div>
                </a>
                <a href="/reports/updates/update-2025-08-15-0405" className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all">
                  <div className="font-semibold text-cyan-300">Update 2025-08-15-0405</div>
                  <div className="text-sm text-white/70">Autonomous system update</div>
                </a>
                <a href="/reports/updates/update-2025-08-15-0404" className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all">
                  <div className="font-semibold text-cyan-300">Update 2025-08-15-0404</div>
                  <div className="text-sm text-white/70">System performance update</div>
                </a>
              </div>

              <h2 className="text-2xl font-bold mb-6 text-green-400">Quick Navigation</h2>
              <div className="text-center">
                <a href="/" className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity">
                  Back to Home
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}