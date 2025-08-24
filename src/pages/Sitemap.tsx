import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";

export default function Sitemap() {
  const completeSitemap = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact' },
    { path: '/services', label: 'Services' },
    { path: '/talent', label: 'Talent Directory' },
    { path: '/equipment', label: 'Equipment' },
    { path: '/categories', label: 'Categories' },
    { path: '/blog', label: 'Blog' },
    { path: '/partners', label: 'Partners' },
    { path: '/careers', label: 'Careers' },
    { path: '/privacy', label: 'Privacy Policy' },
    { path: '/terms', label: 'Terms of Service' },
    { path: '/green-it', label: 'Green IT' },
    { path: '/marketplace', label: 'Marketplace' },
    { path: '/community', label: 'Community' },
    { path: '/login', label: 'Login' },
    { path: '/signup', label: 'Sign Up' }
  ];

  return (
    <>
      <SEO
        title="Sitemap | Zion AI Marketplace"
        description="Human readable sitemap for all public routes"
        keywords="sitemap, navigation"
        canonical="https://ziontechgroup.com/sitemap"
      />
      <Header />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8 text-white">Sitemap</h1>
          <p className="text-zion-slate-light mb-8">
            Navigate through all the pages and sections of Zion Tech Group.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {completeSitemap.map(route => (
              <div key={route.path} className="bg-zion-blue-dark p-4 rounded-lg border border-zion-blue-light">
                <Link 
                  to={route.path} 
                  className="text-zion-cyan hover:text-zion-purple transition-colors text-lg font-medium"
                >
                  {route.label}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
