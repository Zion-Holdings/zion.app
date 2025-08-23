import React from "react";
import { Header } from "@/components/Header";
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/button";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import Link from 'next/link';

export default function Ecommerce() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "E-commerce Platform",
    "description": "Sell or purchase AI solutions and IT equipment through our secure marketplace.",
    "url": "https://app.ziontechgroup.com/features/e-commerce"
  };

  return (
    <>
      <SEO
        title="E-commerce Platform"
        description="Buy and sell hardware, software and services in the Zion marketplace."
        keywords="tech marketplace, buy IT hardware, sell AI solutions"
        canonical="https://app.ziontechgroup.com/features/e-commerce"
      />
      {/* Use a normal script tag so JSON-LD is correctly parsed */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      ></script>
      <Header />
      <main className="bg-background text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <GradientHeading className="mb-4 text-center">E-commerce Platform</GradientHeading>
          <p className="text-center text-zion-slate-light max-w-3xl mx-auto mb-8">
            Showcase your products with rich media listings and accept payments with Stripe-powered checkout.
          </p>
          <div className="relative w-full h-auto aspect-video mx-auto mb-12 rounded-lg shadow-xl overflow-hidden">
            <OptimizedImage
              src="https://placehold.co/800x400"
              alt="Screenshot of marketplace interface"
              className="object-cover"
              fill
            />
          </div>
          <h2 className="text-2xl font-bold mb-4">Benefits &amp; Use Cases</h2>
          <ul className="list-disc list-inside space-y-2 mb-8 text-zion-slate-light">
            <li>Support for videos and 3D models to highlight your offerings.</li>
            <li>Secure transactions with Stripe and fraud protection.</li>
            <li>Reach new customers around the world via our global platform.</li>
          </ul>
          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4 mb-12">
            <div>
              <p className="font-semibold">How do I list a new product?</p>
              <p className="text-zion-slate-light">Sign in and click "Publish Product" from your dashboard to add pricing, images and details.</p>
            </div>
            <div>
              <p className="font-semibold">Do you support international shipping?</p>
              <p className="text-zion-slate-light">Yes, sellers can offer shipping to over 100 countries with real-time rates.</p>
            </div>
          </div>
          <div className="text-center">
            <Button size="lg" className="bg-zion-purple text-white" asChild>
              <Link href="/marketplace">Start Shopping</Link>
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}
