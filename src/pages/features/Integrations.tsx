import React, { useEffect } from "react";
import { Header } from "@/components/Header";
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/button";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import Link from 'next/link';
import { useAdvancedOnboardingStatus } from "@/hooks/useAdvancedOnboardingStatus";

export default function IntegrationsFeature() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "API & Integrations",
    "description": "Connect Zion with Slack, your website and other tools via our API and widgets.",
    "url": "https://app.ziontechgroup.com/features/integrations"
  };

  const { markSlackConnected } = useAdvancedOnboardingStatus();

  useEffect(() => {
    markSlackConnected();
  }, [markSlackConnected]);

  return (
    <>
      <SEO
        title="API & Integrations"
        description="Extend Zion by embedding widgets or using our REST API for custom workflows."
        keywords="Zion API, Slack integration, embed widget"
        canonical="https://app.ziontechgroup.com/features/integrations"
      />
      {/* Use a normal script tag so JSON-LD is correctly parsed */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      ></script>
      <Header />
      <main className="bg-background text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <GradientHeading className="mb-4 text-center">API & Integrations</GradientHeading>
          <p className="text-center text-zion-slate-light max-w-3xl mx-auto mb-8">
            Automate your workflows by connecting Zion with the tools you already use.
          </p>
          <div className="relative w-full h-auto aspect-video mx-auto mb-12 rounded-lg shadow-xl overflow-hidden">
            <OptimizedImage
              src="https://placehold.co/800x400"
              alt="Screenshot showing integrations"
              className="object-cover"
              fill
            />
          </div>
          <h2 className="text-2xl font-bold mb-4">Benefits &amp; Use Cases</h2>
          <ul className="list-disc list-inside space-y-2 mb-8 text-zion-slate-light">
            <li>Trigger Slack notifications for new orders or messages.</li>
            <li>Embed talent search or job listings directly on your site.</li>
            <li>Build custom analytics by pulling data from our REST endpoints.</li>
          </ul>
          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4 mb-12">
            <div>
              <p className="font-semibold">Where can I find the API docs?</p>
              <p className="text-zion-slate-light">Visit our Developer Portal for authentication guides and endpoint references.</p>
            </div>
            <div>
              <p className="font-semibold">Is there a rate limit?</p>
              <p className="text-zion-slate-light">Yes, free tier requests are limited per hour. Contact sales for higher limits.</p>
            </div>
          </div>
          <div className="text-center">
            <Button size="lg" className="bg-zion-purple text-white" asChild>
              <Link href="/developers">Learn More</Link>
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}
