import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/button";

export default function Internationalization() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Internationalization",
    "description": "Use Zion in multiple languages and attract clients worldwide with localized listings.",
    "url": "https://app.ziontechgroup.com/features/internationalization"
  };

  return (
    <>
      <SEO
        title="Internationalization"
        description="Reach a global audience with multi-language support across the Zion platform."
        keywords="i18n, multi-language marketplace, localized listings"
        canonical="https://app.ziontechgroup.com/features/internationalization"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />
      <main className="bg-background text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <GradientHeading className="mb-4 text-center">Internationalization</GradientHeading>
          <p className="text-center text-zion-slate-light max-w-3xl mx-auto mb-8">
            Our interface and search support multiple languages so you can collaborate without barriers.
          </p>
          <img src="https://placehold.co/800x400" alt="Language options screenshot" className="rounded-lg shadow-xl mx-auto mb-12" />
          <h2 className="text-2xl font-bold mb-4">Benefits &amp; Use Cases</h2>
          <ul className="list-disc list-inside space-y-2 mb-8 text-zion-slate-light">
            <li>Publish product and service pages in your native language.</li>
            <li>Attract international clients and expand your reach.</li>
            <li>Automatic language detection ensures a localized experience.</li>
          </ul>
          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4 mb-12">
            <div>
              <p className="font-semibold">Which languages are supported?</p>
              <p className="text-zion-slate-light">The platform currently supports English, Spanish, Portuguese and more.</p>
            </div>
            <div>
              <p className="font-semibold">Can I suggest new translations?</p>
              <p className="text-zion-slate-light">Yes, community contributions help us continually add new languages.</p>
            </div>
          </div>
          <div className="text-center">
            <Button size="lg" className="bg-zion-purple text-white" asChild>
              <a href="/">Explore Zion</a>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
