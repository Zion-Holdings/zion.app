import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/button";

export default function SearchFeature() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Advanced Search",
    "description": "Quickly locate products, services and talent using intelligent search filters.",
    "url": "https://app.ziontechgroup.com/features/search"
  };

  return (
    <>
      <SEO
        title="Advanced Search"
        description="Find exactly what you need with fast, filterable search powered by Elasticsearch."
        keywords="search engine, filtering, tech marketplace search"
        canonical="https://app.ziontechgroup.com/features/search"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />
      <main className="bg-background text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <GradientHeading className="mb-4 text-center">Advanced Search</GradientHeading>
          <p className="text-center text-zion-slate-light max-w-3xl mx-auto mb-8">
            Filter listings by skills, price, availability and more. Our engine helps you discover relevant results instantly.
          </p>
          <img src="https://placehold.co/800x400" alt="Search screenshot" className="rounded-lg shadow-xl mx-auto mb-12" />
          <h2 className="text-2xl font-bold mb-4">Benefits &amp; Use Cases</h2>
          <ul className="list-disc list-inside space-y-2 mb-8 text-zion-slate-light">
            <li>Find the right expert or product without endless scrolling.</li>
            <li>Save favorite searches and get notified of new matches.</li>
            <li>Sort by rating, price, or recency to surface the best options.</li>
          </ul>
          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4 mb-12">
            <div>
              <p className="font-semibold">Can I search in multiple languages?</p>
              <p className="text-zion-slate-light">Yes, the search engine supports queries in all interface languages.</p>
            </div>
            <div>
              <p className="font-semibold">How are results ranked?</p>
              <p className="text-zion-slate-light">A combination of relevance scoring and community ratings determines the order.</p>
            </div>
          </div>
          <div className="text-center">
            <Button size="lg" className="bg-zion-purple text-white" asChild>
              <a href="/search">Try Search</a>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
