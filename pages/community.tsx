import React from 'react';
import SEO from '../components/SEO';

export default function CommunityPage() {
  return (
    <>
      <SEO
        title="Community | Zion Tech Group"
        description="Join our community on LinkedIn, GitHub, Instagram, and YouTube."
        canonical="https://ziontechgroup.com/community/"
      />
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 max-w-4xl text-white space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Community</h1>
          <p className="text-gray-300">Connect with us, get updates, and contribute.</p>
          <ul className="space-y-3 text-cyan-400">
            <li><a className="underline" href="https://linkedin.com/company/ziontechgroup" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a className="underline" href="https://github.com/Zion-Holdings" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a className="underline" href="https://instagram.com/ziontechgroup" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a className="underline" href="https://youtube.com/@ziontechgroup" target="_blank" rel="noopener noreferrer">YouTube</a></li>
          </ul>
        </div>
      </section>
    </>
  );
}