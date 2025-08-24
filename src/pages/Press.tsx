import React from 'react';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { Calendar, Download, Mail, Phone, MapPin } from "lucide-react";

const pressReleases = [
  {
    id: 1,
    title: "Zion Tech Group Launches World's First Free AI Marketplace",
    date: "2024-01-15",
    excerpt: "Revolutionary platform connects AI talent with opportunities, democratizing access to cutting-edge technology solutions.",
    category: "Product Launch"
  },
  {
    id: 2,
    title: "Zion Secures $50M Series A Funding for Global Expansion",
    date: "2024-02-20",
    excerpt: "Investment will fuel international growth and enhance platform capabilities for AI professionals and businesses worldwide.",
    category: "Funding"
  },
  {
    id: 3,
    title: "Partnership with Leading Tech Universities Announced",
    date: "2024-03-10",
    excerpt: "Strategic collaboration to create talent pipeline and research opportunities in artificial intelligence and emerging technologies.",
    category: "Partnership"
  },
  {
    id: 4,
    title: "Zion Tech Group Named Top 10 AI Companies to Watch in 2024",
    date: "2024-04-05",
    excerpt: "Industry recognition for innovative approach to connecting AI talent with global opportunities.",
    category: "Awards"
  }
];

const mediaAssets = [
  {
    name: "Zion Tech Group Logo",
    description: "High-resolution logo in various formats",
    formats: ["PNG", "SVG", "PDF"]
  },
  {
    name: "Brand Guidelines",
    description: "Complete brand identity and usage guidelines",
    formats: ["PDF"]
  },
  {
    name: "Product Screenshots",
    description: "High-quality screenshots of the platform",
    formats: ["PNG", "JPG"]
  },
  {
    name: "Team Photos",
    description: "Professional headshots and team photos",
    formats: ["JPG", "PNG"]
  }
];

export default function Press() {
  return (
    <>
      <SEO
        title="Press & Media | Zion Tech Group"
        description="Latest press releases, media resources, and press contact information for Zion Tech Group. Stay updated with our latest news and announcements."
        keywords="press, media, press releases, Zion Tech Group, AI marketplace, tech news"
        canonical="https://ziontechgroup.com/press"
      />
      <Header />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <GradientHeading>Press & Media</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Stay updated with the latest news, announcements, and media resources from Zion Tech Group
            </p>
          </div>

          {/* Press Contact */}
          <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-8 mb-16 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6">Press Contact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center text-zion-slate-light">
                  <Mail className="h-5 w-5 mr-3 text-zion-cyan" />
                  <span>press@ziontechgroup.com</span>
                </div>
                <div className="flex items-center text-zion-slate-light">
                  <Phone className="h-5 w-5 mr-3 text-zion-cyan" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center text-zion-slate-light">
                  <MapPin className="h-5 w-5 mr-3 text-zion-cyan" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
              <div>
                <p className="text-zion-slate-light mb-4">
                  For media inquiries, interview requests, or press materials, please contact our press team.
                </p>
                <a
                  href="mailto:press@ziontechgroup.com"
                  className="inline-flex items-center px-6 py-3 bg-zion-purple text-white font-medium rounded-lg hover:bg-zion-purple-light transition-colors"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Contact Press Team
                </a>
              </div>
            </div>
          </div>

          {/* Latest Press Releases */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Latest Press Releases</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {pressReleases.map((release) => (
                <div
                  key={release.id}
                  className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 hover:border-zion-purple transition-colors"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center px-3 py-1 bg-zion-purple/20 text-zion-cyan text-sm rounded-full">
                      {release.category}
                    </span>
                    <div className="flex items-center text-zion-slate-light text-sm">
                      <Calendar className="h-4 w-4 mr-2" />
                      {new Date(release.date).toLocaleDateString()}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{release.title}</h3>
                  <p className="text-zion-slate-light leading-relaxed">{release.excerpt}</p>
                  <button className="mt-4 text-zion-cyan hover:text-zion-cyan-light transition-colors font-medium">
                    Read Full Release →
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Media Resources */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Media Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {mediaAssets.map((asset, index) => (
                <div
                  key={index}
                  className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 text-center hover:border-zion-purple transition-colors"
                >
                  <div className="bg-zion-blue inline-flex p-3 rounded-full mb-4">
                    <Download className="h-6 w-6 text-zion-cyan" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{asset.name}</h3>
                  <p className="text-zion-slate-light text-sm mb-4">{asset.description}</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {asset.formats.map((format) => (
                      <span
                        key={format}
                        className="px-2 py-1 bg-zion-blue-light/20 text-zion-cyan text-xs rounded"
                      >
                        {format}
                      </span>
                    ))}
                  </div>
                  <button className="mt-4 w-full px-4 py-2 bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/30 transition-colors rounded-lg text-sm font-medium">
                    Download
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Company Facts */}
          <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Company Facts</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-zion-cyan mb-2">10,000+</div>
                <div className="text-zion-slate-light">AI Professionals</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-zion-purple mb-2">500+</div>
                <div className="text-zion-slate-light">Companies Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-zion-cyan mb-2">50+</div>
                <div className="text-zion-slate-light">Countries</div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}