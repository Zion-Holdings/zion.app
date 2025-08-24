
import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from './SEO';
import { completeSitemap } from '../config/sitemap';

export default function SitemapPage() {
  const publicRoutes = completeSitemap.filter(route => !route.requiredAuth);
  const talentRoutes = completeSitemap.filter(route => 
    route.requiredAuth && 
    route.requiredRoles && 
    (route.requiredRoles.includes('jobSeeker') ||
     route.requiredRoles.includes('creator'))
  );
  const employerRoutes = completeSitemap.filter(route => 
    route.requiredAuth && 
    route.requiredRoles && 
    (route.requiredRoles.includes('employer') ||
     route.requiredRoles.includes('buyer'))
  );
  const adminRoutes = completeSitemap.filter(route => 
    route.requiredAuth && 
    route.requiredRoles && 
    route.requiredRoles.includes('admin')
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <SEO 
        title="Sitemap"
        description="Complete navigation guide for Zion Tech Group website"
        keywords="sitemap, navigation, website structure, Zion Tech Group"
        canonical="https://ziontechgroup.com/content/sitemap-page"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Site Map</h1>
          <p className="text-xl text-zion-slate-light">
            Complete navigation guide for Zion Tech Group
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Public Routes */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-zion-cyan mb-4">Public Pages</h2>
            <ul className="space-y-2">
              {publicRoutes.map((route) => (
                <li key={route.path}>
                  <Link 
                    to={route.path} 
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors block"
                  >
                    {route.label || route.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Talent Routes */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-zion-cyan mb-4">Talent & Job Seeker Pages</h2>
            <ul className="space-y-2">
              {talentRoutes.map((route) => (
                <li key={route.path}>
                  <Link 
                    to={route.path} 
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors block"
                  >
                    {route.label || route.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Employer Routes */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-zion-cyan mb-4">Employer & Buyer Pages</h2>
            <ul className="space-y-2">
              {employerRoutes.map((route) => (
                <li key={route.path}>
                  <Link 
                    to={route.path} 
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors block"
                  >
                    {route.label || route.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Admin Routes */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-zion-cyan mb-4">Administrative Pages</h2>
            <ul className="space-y-2">
              {adminRoutes.map((route) => (
                <li key={route.path}>
                  <Link 
                    to={route.path} 
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors block"
                  >
                    {route.label || route.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* All Routes List */}
        <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-zion-cyan mb-6">Complete Route List</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {completeSitemap.map((route) => (
              <div key={route.path} className="bg-white/5 rounded p-3">
                <Link 
                  to={route.path} 
                  className="text-zion-cyan hover:text-zion-cyan-light transition-colors font-medium"
                >
                  {route.path}
                </Link>
                <span className="ml-2 text-xs italic text-zion-slate-light">
                  ({route.priority})
                </span>
                <p className="text-sm text-zion-slate-light mt-1">
                  {route.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
