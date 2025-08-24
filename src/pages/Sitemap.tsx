import { AppHeader } from "@/layout/AppHeader";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { completeSitemap } from "@/config/sitemap";
import { Link } from "react-router-dom";

export default function Sitemap() {
  return (
    <>
      <SEO
        title="Sitemap | Zion Tech Group"
        description="Complete sitemap for all public routes and pages on Zion Tech Group"
        keywords="sitemap, navigation, Zion Tech Group"
        canonical="https://ziontechgroup.com/sitemap"
      />
      <AppHeader />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-white">Sitemap</h1>
            <p className="text-zion-slate-light mb-8 text-lg">
              Navigate through all the pages and sections of Zion Tech Group
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {completeSitemap.map(route => (
                <div key={route.path} className="bg-zion-blue-dark p-4 rounded-lg border border-zion-blue-light">
                  <Link 
                    to={route.path} 
                    className="text-zion-cyan hover:text-zion-purple-light transition-colors font-medium block mb-2"
                  >
                    {route.label}
                  </Link>
                  {route.description && (
                    <p className="text-zion-slate-light text-sm">
                      {route.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
