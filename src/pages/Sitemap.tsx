import { Header } from "@/components/Header";
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
      <Header />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-white">Sitemap</h1>
            <p className="text-zion-slate-light mb-8 text-lg">
              Navigate through all the pages and sections of Zion Tech Group
            </p>
            
            <div className="space-y-8">
              {completeSitemap.map((section, sectionIndex) => (
                <div key={sectionIndex} className="bg-zion-blue-dark p-6 rounded-lg border border-zion-blue-light">
                  <h2 className="text-2xl font-semibold text-white mb-4">{section.title}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {section.links.map((link, linkIndex) => (
                      <Link 
                        key={linkIndex}
                        to={link.url} 
                        className="text-zion-cyan hover:text-zion-purple-light transition-colors font-medium block p-3 rounded hover:bg-zion-blue/20"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
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
