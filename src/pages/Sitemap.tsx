import { SEO } from "@/components/SEO";
import { completeSitemap } from "@/config/sitemap";
import { Link } from "react-router-dom";
import { AppLayout } from "@/layout";

export default function Sitemap() {
  return (
    <AppLayout>
      <SEO
        title="Sitemap | Zion Tech Group"
        description="Complete sitemap for Zion Tech Group - navigate through all our services, pages, and resources"
        keywords="sitemap, navigation, Zion Tech Group, services, pages"
        canonical="https://ziontechgroup.com/sitemap"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-white">Site Map</h1>
            <p className="text-zion-slate-light mb-8 text-lg">
              Navigate through all our services, pages, and resources
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-zion-cyan">Main Pages</h2>
                <ul className="space-y-2">
                  {completeSitemap.filter(route => 
                    ['/', '/about', '/contact', '/careers', '/partners'].includes(route.path)
                  ).map(route => (
                    <li key={route.path}>
                      <Link to={route.path} className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        {route.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-zion-cyan">Services</h2>
                <ul className="space-y-2">
                  {completeSitemap.filter(route => 
                    ['/services', '/it-onsite-services', '/green-it', '/zion-hire-ai'].includes(route.path)
                  ).map(route => (
                    <li key={route.path}>
                      <Link to={route.path} className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        {route.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-zion-cyan">Marketplace</h2>
                <ul className="space-y-2">
                  {completeSitemap.filter(route => 
                    ['/marketplace', '/talent', '/equipment', '/categories'].includes(route.path)
                  ).map(route => (
                    <li key={route.path}>
                      <Link to={route.path} className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        {route.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </AppLayout>
  );
}
