import React from 'react';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { BookOpen, MessageCircle, Video, FileText, Search } from "lucide-react";
import { Link } from "react-router-dom";

const helpCategories = [
  {
    title: "Getting Started",
    description: "Learn the basics of using Zion Tech Group",
    icon: BookOpen,
    articles: [
      "How to create an account",
      "Setting up your profile",
      "First steps on the platform"
    ]
  },
  {
    title: "Marketplace",
    description: "Buy and sell services on our platform",
    icon: FileText,
    articles: [
      "How to post a service",
      "Finding the right talent",
      "Payment and escrow"
    ]
  },
  {
    title: "Talent",
    description: "For AI professionals and creators",
    icon: MessageCircle,
    articles: [
      "Creating your talent profile",
      "Portfolio management",
      "Getting hired"
    ]
  },
  {
    title: "Support",
    description: "Get help when you need it",
    icon: Video,
    articles: [
      "Contact support",
      "Dispute resolution",
      "Community guidelines"
    ]
  }
];

export default function Help() {
  return (
    <>
      <SEO
        title="Help Center | Zion Tech Group"
        description="Get help and support for using Zion Tech Group. Find tutorials, guides, and answers to common questions."
        keywords="help center, support, tutorials, guides, Zion Tech Group, FAQ"
        canonical="https://ziontechgroup.com/help"
      />
      <Header />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <GradientHeading>Help Center</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Find answers, tutorials, and support for using Zion Tech Group
            </p>
          </div>

          {/* Search */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-zion-slate-light" />
              <input
                type="text"
                placeholder="Search for help articles..."
                className="w-full pl-12 pr-4 py-4 bg-zion-blue-dark border border-zion-blue-light rounded-lg text-white placeholder-zion-slate-light focus:border-zion-purple focus:outline-none"
              />
            </div>
          </div>

          {/* Help Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {helpCategories.map((category, index) => (
              <div
                key={index}
                className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 hover:border-zion-purple transition-colors"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-zion-blue p-3 rounded-lg mr-4">
                    <category.icon className="h-6 w-6 text-zion-cyan" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
                <p className="text-zion-slate-light mb-4">{category.description}</p>
                <ul className="space-y-2">
                  {category.articles.map((article, articleIndex) => (
                    <li key={articleIndex}>
                      <a
                        href="#"
                        className="text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm"
                      >
                        {article}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Quick Links */}
          <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-8 mb-16 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Quick Links</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <Link to="/faq" className="block text-zion-cyan hover:text-zion-cyan-light transition-colors">
                  Frequently Asked Questions
                </Link>
                <Link to="/contact" className="block text-zion-cyan hover:text-zion-cyan-light transition-colors">
                  Contact Support
                </Link>
                <Link to="/community" className="block text-zion-cyan hover:text-zion-cyan-light transition-colors">
                  Community Forum
                </Link>
              </div>
              <div className="space-y-3">
                <Link to="/terms" className="block text-zion-cyan hover:text-zion-cyan-light transition-colors">
                  Terms of Service
                </Link>
                <Link to="/privacy" className="block text-zion-cyan hover:text-zion-cyan-light transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/sitemap" className="block text-zion-cyan hover:text-zion-cyan-light transition-colors">
                  Sitemap
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Support */}
          <div className="text-center">
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">Still need help?</h3>
              <p className="text-zion-slate-light mb-6">
                Can't find what you're looking for? Our support team is here to help.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-zion-purple text-white font-medium rounded-lg hover:bg-zion-purple-light transition-colors"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}