import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zion Tech Group - AI-Powered Digital Transformation Solutions",
  description: "Pioneering the future of digital transformation through innovative AI, blockchain, and cloud solutions. Launch sovereign AI-powered digital economies with one click.",
  keywords: "AI, digital transformation, blockchain, cloud solutions, machine learning, cybersecurity, enterprise IT, Zion Tech Group",
  authors: [{ name: "Zion Tech Group" }],
  openGraph: {
    title: "Zion Tech Group - AI-Powered Digital Transformation Solutions",
    description: "Pioneering the future of digital transformation through innovative AI, blockchain, and cloud solutions.",
    type: "website",
    locale: "en_US",
    url: "https://ziontechgroup.com",
    siteName: "Zion Tech Group",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Zion Tech Group - AI-Powered Digital Transformation"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Zion Tech Group - AI-Powered Digital Transformation Solutions",
    description: "Pioneering the future of digital transformation through innovative AI, blockchain, and cloud solutions.",
    images: ["/og-image.svg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function HomePage() {
  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Zion Tech Group",
            "url": "https://ziontechgroup.com",
            "logo": "https://ziontechgroup.com/logo.svg",
            "description": "Pioneering the future of digital transformation through innovative AI, blockchain, and cloud solutions.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Middletown",
              "addressRegion": "DE",
              "addressCountry": "US"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-302-464-0950",
              "contactType": "customer service",
              "email": "kleber@ziontechgroup.com"
            },
            "sameAs": [
              "https://linkedin.com/company/ziontechgroup",
              "https://twitter.com/ziontechgroup",
              "https://github.com/Zion-Holdings"
            ]
          })
        }}
      />

      <div className="min-h-screen space-y-12">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="hero-heading">
          <div className="max-w-7xl mx-auto text-center">
            <div className="animate-fade-in">
              <h1 id="hero-heading" className="text-5xl md:text-7xl font-bold mb-6">
                <span className="gradient-text">Zion Tech Group</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Pioneering the future of digital transformation through innovative AI, blockchain, and cloud solutions. 
                Launch sovereign AI-powered digital economies with one click.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm mb-8" role="list" aria-label="Company highlights">
                <div className="flex items-center gap-2" role="listitem">
                  <span aria-hidden="true">📍</span>
                  <span>Middletown, DE</span>
                </div>
                <div className="flex items-center gap-2" role="listitem">
                  <span aria-hidden="true">🌍</span>
                  <span>Global Reach</span>
                </div>
                <div className="flex items-center gap-2" role="listitem">
                  <span aria-hidden="true">🚀</span>
                  <span>Innovation First</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link 
                  href="/multiverse/launch" 
                  className="btn-primary text-lg px-8 py-4"
                  aria-label="Launch your digital economy"
                >
                  Launch Your Economy
                </Link>
                <Link 
                  href="/services" 
                  className="btn-secondary text-lg px-8 py-4"
                  aria-label="Explore our services"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
          
          {/* Background Elements */}
          <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full blur-3xl animate-pulse-slow"></div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="quick-actions-heading">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 id="quick-actions-heading" className="text-3xl md:text-4xl font-bold mb-4">
                Quick Actions
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Get started with our comprehensive solutions and services
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" role="list" aria-label="Quick action cards">
              <a className="card group" href="/services" role="listitem" aria-label="Explore our services">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors" aria-hidden="true">
                  <span className="text-2xl">🛠️</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Our Services</h3>
                <p className="text-gray-400">
                  Explore our comprehensive micro SAAS, IT, and AI solutions
                </p>
              </a>
              
              <a className="card group" href="/solutions" role="listitem" aria-label="View industry solutions">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-500/30 transition-colors" aria-hidden="true">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Industry Solutions</h3>
                <p className="text-gray-400">
                  Tailored solutions for healthcare, education, legal, and more
                </p>
              </a>
              
              <a className="card group" href="/contact" role="listitem" aria-label="Contact us to get started">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-500/30 transition-colors" aria-hidden="true">
                  <span className="text-2xl">📞</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Get Started</h3>
                <p className="text-gray-400">
                  Contact us to discuss your digital transformation project
                </p>
              </a>
              
              <a className="card group" href="/multiverse/launch" role="listitem" aria-label="Use the launch wizard">
                <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-500/30 transition-colors" aria-hidden="true">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Launch Wizard</h3>
                <p className="text-gray-400">
                  Spin up a new instance with marketplace, governance, and more
                </p>
              </a>
            </div>
          </div>
        </section>

        {/* Featured Services */}
        <section className="py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="featured-services-heading">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 id="featured-services-heading" className="text-3xl md:text-4xl font-bold mb-4">
                Featured Services
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Discover our cutting-edge solutions that drive digital transformation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8" role="list" aria-label="Featured services">
              <div className="card group" role="listitem">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors" aria-hidden="true">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">AI & Machine Learning</h3>
                <p className="text-gray-400">
                  Advanced AI solutions including ZionGPT Enterprise, content moderation, and intelligent automation.
                </p>
                <a href="/services" className="text-blue-400 hover:underline text-sm mt-4 inline-block" aria-label="Learn more about AI services">Learn More →</a>
              </div>
              
              <div className="card group" role="listitem">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-500/30 transition-colors" aria-hidden="true">
                  <span className="text-2xl">☁️</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Cloud & Infrastructure</h3>
                <p className="text-gray-400">
                  Scalable cloud solutions, DevOps automation, and infrastructure management services.
                </p>
                <a href="/services" className="text-blue-400 hover:underline text-sm mt-4 inline-block" aria-label="Learn more about cloud services">Learn More →</a>
              </div>
              
              <div className="card group" role="listitem">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-500/30 transition-colors" aria-hidden="true">
                  <span className="text-2xl">🔒</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Cybersecurity</h3>
                <p className="text-gray-400">
                  Comprehensive security solutions, compliance management, and threat detection systems.
                </p>
                <a href="/services" className="text-blue-400 hover:underline text-sm mt-4 inline-block" aria-label="Learn more about cybersecurity services">Learn More →</a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="contact-cta-heading">
          <div className="max-w-4xl mx-auto">
            <div className="card bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30 text-center">
              <h2 id="contact-cta-heading" className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join hundreds of organizations that have already transformed their operations with our cutting-edge solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="btn-primary text-lg px-8 py-4"
                  aria-label="Call us at +1 302 464 0950"
                >
                  Call Now: +1 302 464 0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="btn-secondary text-lg px-8 py-4"
                  aria-label="Send us an email"
                >
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Admin Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="admin-section-heading">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 id="admin-section-heading" className="text-3xl md:text-4xl font-bold mb-4">
                Admin & Management
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Manage your Zion OS instances and deployments
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8" role="list" aria-label="Admin tools">
              <a className="card group" href="/admin/os-deploy" role="listitem" aria-label="Access admin deploy tool">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-yellow-500/30 transition-colors" aria-hidden="true">
                  <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Admin Deploy</h3>
                <p className="text-gray-400">
                  Deploy and manage Zion OS instances with advanced configuration options.
                </p>
              </a>
              
              <a className="card group" href="/admin/instances" role="listitem" aria-label="Manage admin instances">
                <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-500/30 transition-colors" aria-hidden="true">
                  <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Admin Instances</h3>
                <p className="text-gray-400">
                  Manage deployed instances, API keys, and governance settings.
                </p>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}