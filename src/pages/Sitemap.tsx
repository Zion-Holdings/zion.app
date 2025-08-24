import { SEO } from "@/components/SEO";
import { completeSitemap } from "@/config/sitemap";
import { Link } from "react-router-dom";

export default function Sitemap() {
  return (
    <>
      <SEO
        title="Sitemap | Zion Tech Group"
        description="Complete sitemap for all public routes and pages on Zion Tech Group"
        keywords="sitemap, navigation, Zion Tech Group, routes"
        canonical="https://ziontechgroup.com/sitemap"
      />
      
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Sitemap
            </h1>
            <p className="text-zion-slate-light mb-8 text-lg">
              Complete navigation guide for Zion Tech Group. Find all our pages, services, and resources.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Main Pages */}
              <div>
                <h2 className="text-xl font-semibold text-white mb-4 border-b border-zion-purple/30 pb-2">
                  Main Pages
                </h2>
                <ul className="space-y-2">
                  {completeSitemap.filter(route => 
                    ['/', '/about', '/contact', '/blog', '/careers', '/partners'].includes(route.path)
                  ).map(route => (
                    <li key={route.path}>
                      <Link 
                        to={route.path} 
                        className="text-zion-cyan hover:text-zion-cyan-light hover:underline transition-colors block py-1"
                      >
                        {route.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Marketplace */}
              <div>
                <h2 className="text-xl font-semibold text-white mb-4 border-b border-zion-purple/30 pb-2">
                  Marketplace
                </h2>
                <ul className="space-y-2">
                  {completeSitemap.filter(route => 
                    ['/marketplace', '/services', '/categories', '/equipment', '/green-it', '/it-onsite-services'].includes(route.path)
                  ).map(route => (
                    <li key={route.path}>
                      <Link 
                        to={route.path} 
                        className="text-zion-cyan hover:text-zion-cyan-light hover:underline transition-colors block py-1"
                      >
                        {route.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Talent & Community */}
              <div>
                <h2 className="text-xl font-semibold text-white mb-4 border-b border-zion-purple/30 pb-2">
                  Talent & Community
                </h2>
                <ul className="space-y-2">
                  {completeSitemap.filter(route => 
                    ['/talent', '/talents', '/community', '/zion-hire-ai', '/match'].includes(route.path)
                  ).map(route => (
                    <li key={route.path}>
                      <Link 
                        to={route.path} 
                        className="text-zion-cyan hover:text-zion-cyan-light hover:underline transition-colors block py-1"
                      >
                        {route.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Support & Resources */}
              <div>
                <h2 className="text-xl font-semibold text-white mb-4 border-b border-zion-purple/30 pb-2">
                  Support & Resources
                </h2>
                <ul className="space-y-2">
                  {completeSitemap.filter(route => 
                    ['/help', '/support', '/request-quote', '/search'].includes(route.path)
                  ).map(route => (
                    <li key={route.path}>
                      <Link 
                        to={route.path} 
                        className="text-zion-cyan hover:text-zion-cyan-light hover:underline transition-colors block py-1"
                      >
                        {route.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Legal */}
              <div>
                <h2 className="text-xl font-semibold text-white mb-4 border-b border-zion-purple/30 pb-2">
                  Legal
                </h2>
                <ul className="space-y-2">
                  {completeSitemap.filter(route => 
                    ['/privacy', '/terms'].includes(route.path)
                  ).map(route => (
                    <li key={route.path}>
                      <Link 
                        to={route.path} 
                        className="text-zion-cyan hover:text-zion-cyan-light hover:underline transition-colors block py-1"
                      >
                        {route.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Mobile */}
              <div>
                <h2 className="text-xl font-semibold text-white mb-4 border-b border-zion-purple/30 pb-2">
                  Mobile
                </h2>
                <ul className="space-y-2">
                  {completeSitemap.filter(route => 
                    ['/mobile-launch', '/open-app'].includes(route.path)
                  ).map(route => (
                    <li key={route.path}>
                      <Link 
                        to={route.path} 
                        className="text-zion-cyan hover:text-zion-cyan-light hover:underline transition-colors block py-1"
                      >
                        {route.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* All Routes List */}
            <div className="mt-12 pt-8 border-t border-zion-purple/30">
              <h2 className="text-2xl font-semibold text-white mb-6">
                Complete Route List
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {completeSitemap.map(route => (
                  <div key={route.path} className="p-3 bg-zion-blue-light/10 rounded-lg border border-zion-purple/20">
                    <Link 
                      to={route.path} 
                      className="text-zion-cyan hover:text-zion-cyan-light hover:underline transition-colors font-medium"
                    >
                      {route.label}
                    </Link>
                    <p className="text-zion-slate-light text-sm mt-1">
                      {route.path}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
