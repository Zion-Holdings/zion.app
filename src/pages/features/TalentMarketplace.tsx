import React from "react";
import { Header } from "@/components/Header";
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/button";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import Link from 'next/link';

export default function TalentMarketplace() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Talent Marketplace",
    "description": "Hire vetted AI and tech professionals from around the world on Zion.",
    "url": "https://app.ziontechgroup.com/features/talent-marketplace"
  };

  return (
    <>
      <SEO
        title="Talent Marketplace"
        description="Discover and hire top AI specialists through the Zion talent marketplace."
        keywords="AI talent marketplace, hire developers, tech freelancers"
        canonical="https://app.ziontechgroup.com/features/talent-marketplace"
      />
      {/* Use a normal script tag so JSON-LD is correctly parsed */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      ></script>
      <Header />
      <main className="bg-background text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <GradientHeading className="mb-4 text-center">Talent Marketplace</GradientHeading>
          <p className="text-center text-zion-slate-light max-w-3xl mx-auto mb-8">
            Browse thousands of verified AI engineers, data scientists and other tech professionals.
          </p>
          <div className="relative w-full h-auto aspect-video mx-auto mb-12 rounded-lg shadow-xl overflow-hidden">
            <OptimizedImage
              src="https://placehold.co/800x400"
              alt="Screenshot of talent directory"
              className="object-cover"
              fill
            />
          </div>
          <h2 className="text-2xl font-bold mb-4">Benefits &amp; Use Cases</h2>
          <ul className="list-disc list-inside space-y-2 mb-8 text-zion-slate-light">
            <li>Find pre-screened experts for short or long term projects.</li>
            <li>AI-powered matching recommends the best candidates for your needs.</li>
            <li>Secure escrow and milestone tracking keep payments safe.</li>
          </ul>
          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4 mb-12">
            <div>
              <p className="font-semibold">How do I contact a freelancer?</p>
              <p className="text-zion-slate-light">Create a free account and send a message or job invite directly from their profile.</p>
            </div>
            <div>
              <p className="font-semibold">Are payments protected?</p>
              <p className="text-zion-slate-light">Yes, funds are held in escrow until you approve completed milestones.</p>
            </div>
          </div>
          <div className="text-center">
            <Button size="lg" className="bg-zion-purple text-white" asChild>
              <Link href="/talent">Browse Talent</Link>
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}
