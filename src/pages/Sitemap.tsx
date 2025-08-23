import { SEO } from "@/components/SEO";
import { completeSitemap } from "@/config/sitemap";
import Link from "next/link";

export default function Sitemap() {
  return (
    <>
      <SEO
        title="Sitemap | Zion AI Marketplace"
        description="Human readable sitemap for all public routes"
        keywords="sitemap, navigation"
        canonical="https://app.ziontechgroup.com/sitemap"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">Sitemap</h1>
          <ul className="space-y-2">
            {completeSitemap.map(route => (
              <li key={route.path}>
                <Link href={route.path} className="text-zion-cyan hover:underline">
                  {route.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}
