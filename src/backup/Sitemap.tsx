import React from 'react';
import { Link } from 'react-router-dom';

export default function Sitemap() {
  const sitemapData = {
    main: [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
      { name: 'Contact', path: '/contact' },
      { name: 'Sitemap', path: '/sitemap' }
    ],
    services: [
      { name: 'AI Services', path: '/ai-services' },
      { name: 'Comprehensive Services', path: '/comprehensive-services' },
      { name: 'Enterprise Solutions', path: '/enterprise-solutions' }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-zion-blue mb-8">Sitemap</h1>
        <p className="text-lg text-zion-slate-light mb-12">
          Navigate through all the pages and sections of Zion Tech Group.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Main Pages */}
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">Main Pages</h2>
            <ul className="space-y-2">
              {sitemapData.main.map((item) => (
                <li key={item.path}>
                  <Link 
                    to={item.path} 
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">Services</h2>
            <ul className="space-y-2">
              {sitemapData.services.map((item) => (
                <li key={item.path}>
                  <Link 
                    to={item.path} 
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Additional Information */}
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">Company Info</h2>
            <div className="space-y-4 text-zion-slate-light">
              <div>
                <h3 className="font-semibold text-white mb-2">Contact Information</h3>
                <p>Email: info@ziontechgroup.com</p>
                <p>Phone: +1 302 464 0950</p>
                <p>Address: 364 E Main St STE 1008 Middletown DE 19709</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-white mb-2">Social Media</h3>
                <p>Twitter: @ziontechgroup</p>
                <p>LinkedIn: Zion Tech Group</p>
                <p>Facebook: ziontechgroup</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
