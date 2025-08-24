import "./globals.css";
import type { ReactNode } from "react";
import { Metadata, Viewport } from "next";

export const metadata = {
  metadataBase: new URL('https://ziontechgroup.com'),
  title: "Zion Tech Group - Leading AI-Powered Technology Solutions",
  description: "Transform your business with Zion Tech Group's cutting-edge AI solutions, autonomous systems, quantum computing, and enterprise innovation. Leading provider of next-generation technology.",
  keywords: [
    "AI", "artificial intelligence", "autonomous systems", "quantum computing", 
    "enterprise technology", "Zion Tech Group", "machine learning", "business intelligence",
    "AI solutions", "quantum neural networks", "enterprise security", "content generation",
    "research automation", "technology consulting", "digital transformation"
  ].join(", "),
  authors: [{ name: "Zion Tech Group", url: "https://ziontechgroup.com" }],
  creator: "Zion Tech Group",
  publisher: "Zion Tech Group",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ziontechgroup.com",
    siteName: "Zion Tech Group",
    title: "Zion Tech Group - Leading AI-Powered Technology Solutions",
    description: "Transform your business with Zion Tech Group's cutting-edge AI solutions, autonomous systems, quantum computing, and enterprise innovation.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zion Tech Group - AI Technology Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zion Tech Group - Leading AI-Powered Technology Solutions",
    description: "Transform your business with cutting-edge AI solutions, autonomous systems, and quantum computing.",
    images: ["/og-image.jpg"],
    creator: "@ziontechgroup",
    site: "@ziontechgroup",
  },
  alternates: {
    canonical: "https://ziontechgroup.com",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#8b5cf6" },
    { media: "(prefers-color-scheme: dark)", color: "#1e293b" },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Zion Tech Group",
              "url": "https://ziontechgroup.com",
              "logo": "https://ziontechgroup.com/logo.png",
              "description": "Leading provider of AI-powered technology solutions, autonomous systems, and quantum computing innovations.",
              "foundingDate": "2020",
              "sameAs": [
                "https://linkedin.com/company/ziontechgroup",
                "https://twitter.com/ziontechgroup",
                "https://github.com/ziontechgroup",
                "https://youtube.com/@ziontechgroup",
                "https://discord.gg/ziontechgroup"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-302-464-0950",
                "contactType": "customer service",
                "email": "info@ziontechgroup.com"
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US"
              },
              "serviceType": [
                "AI Solutions",
                "Quantum Computing",
                "Enterprise Security",
                "Business Intelligence",
                "Content Generation",
                "Research Automation"
              ]
            })
          }}
        />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Security Headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
      </head>
      <body className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white antialiased">
        <Header />
        <main className="min-h-screen" role="main">
          {children}
        </main>
        <Footer />
        
        {/* Performance Monitoring */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Performance monitoring
              if ('performance' in window) {
                window.addEventListener('load', () => {
                  const perfData = performance.getEntriesByType('navigation')[0];
                  if (perfData) {
                    console.log('Page Load Time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
                  }
                });
              }
            `
          }}
        />
      </body>
    </html>
  );
}