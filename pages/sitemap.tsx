import React from 'react';
import Layout from '../components/layout/Layout';
import { Brain, Sparkles, Zap, Target, Users, Award, Clock, CheckCircle, Shield, Globe, Lock, TrendingUp, Building, Star, Map, Navigation, ExternalLink, ArrowRight, Handshake, MessageCircle, FileText, Briefcase, BookOpen, Gavel, ShoppingCart, Heart } from 'lucide-react';

export default function Sitemap() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-blue-500/10"></div>
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm mb-6">
                <Sparkles className="w-4 h-4" />
                Site Navigation
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
                  Sitemap
                </span>
                <br />
                <span className="text-white">Navigate Our Website</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Explore all the pages and sections of our website. Find the information 
                you need quickly and easily.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105">
                  Download Sitemap
                </button>
                <button className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-xl hover:bg-blue-400 hover:text-black transition-all duration-300">
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Main Navigation */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Main Navigation
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Core pages and sections that form the foundation of our website.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Building className="w-12 h-12" />,
                  title: "Home",
                  description: "Main homepage with company overview and key services.",
                  url: "/",
                  color: "from-blue-500 to-indigo-500"
                },
                {
                  icon: <Users className="w-12 h-12" />,
                  title: "About",
                  description: "Company information, mission, values, and team details.",
                  url: "/about",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  icon: <Target className="w-12 h-12" />,
                  title: "Services",
                  description: "Comprehensive overview of our technology services.",
                  url: "/services",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  icon: <Shield className="w-12 h-12" />,
                  title: "Solutions",
                  description: "Industry-specific solutions and use cases.",
                  url: "/solutions",
                  color: "from-orange-500 to-red-500"
                },
                {
                  icon: <Handshake className="w-12 h-12" />,
                  title: "Partners",
                  description: "Partnership opportunities and current partners.",
                  url: "/partners",
                  color: "from-yellow-500 to-orange-500"
                },
                {
                  icon: <MessageCircle className="w-12 h-12" />,
                  title: "Contact",
                  description: "Get in touch with our team for inquiries and support.",
                  url: "/contact",
                  color: "from-indigo-500 to-purple-500"
                }
              ].map((page, index) => (
                <div key={index} className="group p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${page.color} p-5 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {page.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{page.title}</h3>
                  <p className="text-gray-400 mb-6">{page.description}</p>
                  <a 
                    href={page.url}
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300"
                  >
                    <span>Visit Page</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Pages */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-500/5 to-indigo-500/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Service Pages
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Detailed information about our core technology services and capabilities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "AI Consciousness Evolution",
                  url: "/ai-consciousness-evolution-2040",
                  category: "AI Services"
                },
                {
                  title: "AI Emotional Intelligence",
                  url: "/ai-emotional-intelligence-2040",
                  category: "AI Services"
                },
                {
                  title: "AI Autonomous Research",
                  url: "/ai-autonomous-research-2041",
                  category: "AI Services"
                },
                {
                  title: "AI Content Personalization",
                  url: "/ai-content-personalization-2041",
                  category: "AI Services"
                },
                {
                  title: "AI Ethics & Governance",
                  url: "/ai-ethics-governance-2041",
                  category: "AI Services"
                },
                {
                  title: "AI Customer Success",
                  url: "/ai-customer-success-2041",
                  category: "AI Services"
                },
                {
                  title: "AI Sales Intelligence",
                  url: "/ai-sales-intelligence-2041",
                  category: "AI Services"
                },
                {
                  title: "AI Autonomous Ecosystem",
                  url: "/ai-autonomous-ecosystem-2041",
                  category: "AI Services"
                },
                {
                  title: "AI Predictive Maintenance",
                  url: "/ai-predictive-maintenance-2041",
                  category: "AI Services"
                },
                {
                  title: "Autonomous Vehicle AI",
                  url: "/autonomous-vehicle-ai-2040",
                  category: "AI Services"
                },
                {
                  title: "Quantum Internet Security",
                  url: "/quantum-internet-security-2041",
                  category: "Quantum Services"
                },
                {
                  title: "Quantum Cloud Infrastructure",
                  url: "/quantum-cloud-infrastructure-2041",
                  category: "Quantum Services"
                },
                {
                  title: "Quantum Bio-Computing",
                  url: "/quantum-bio-computing-2041",
                  category: "Quantum Services"
                },
                {
                  title: "Quantum Materials Discovery",
                  url: "/quantum-materials-discovery-2040",
                  category: "Quantum Services"
                },
                {
                  title: "Quantum Financial Intelligence",
                  url: "/quantum-financial-intelligence-2040",
                  category: "Quantum Services"
                }
              ].map((service, index) => (
                <div key={index} className="group p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl hover:border-blue-500/50 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full">
                      {service.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <a 
                    href={service.url}
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 text-sm"
                  >
                    <span>View Service</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solution Pages */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Solution Pages
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Industry-specific solutions and implementation guides.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Heart className="w-12 h-12" />,
                  title: "Healthcare Solutions",
                  description: "AI and quantum computing solutions for healthcare industry.",
                  url: "/healthcare-solutions",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  icon: <TrendingUp className="w-12 h-12" />,
                  title: "Financial Solutions",
                  description: "Advanced technology solutions for financial services.",
                  url: "/financial-solutions",
                  color: "from-blue-500 to-indigo-500"
                },
                {
                  icon: <ShoppingCart className="w-12 h-12" />,
                  title: "Retail Technology",
                  description: "Innovative solutions for retail and e-commerce.",
                  url: "/retail-technology-solutions",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  icon: <Building className="w-12 h-12" />,
                  title: "Government Technology",
                  description: "Secure technology solutions for government agencies.",
                  url: "/government-technology-solutions",
                  color: "from-orange-500 to-red-500"
                }
              ].map((solution, index) => (
                <div key={index} className="group p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${solution.color} p-5 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {solution.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{solution.title}</h3>
                  <p className="text-gray-400 mb-6">{solution.description}</p>
                  <a 
                    href={solution.url}
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Support & Resources */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-500/5 to-indigo-500/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Support & Resources
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Additional pages for support, resources, and company information.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <MessageCircle className="w-12 h-12" />,
                  title: "Support",
                  description: "Technical support, help documentation, and contact information.",
                  url: "/support",
                  color: "from-blue-500 to-indigo-500"
                },
                {
                  icon: <BookOpen className="w-12 h-12" />,
                  title: "Blog",
                  description: "Latest insights, updates, and thought leadership articles.",
                  url: "/blog",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  icon: <FileText className="w-12 h-12" />,
                  title: "Resources",
                  description: "Whitepapers, case studies, and educational materials.",
                  url: "/resources",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  icon: <Briefcase className="w-12 h-12" />,
                  title: "Careers",
                  description: "Job opportunities and company culture information.",
                  url: "/careers",
                  color: "from-orange-500 to-red-500"
                },
                {
                  icon: <Shield className="w-12 h-12" />,
                  title: "Privacy Policy",
                  description: "How we collect, use, and protect your personal data.",
                  url: "/privacy-policy",
                  color: "from-yellow-500 to-orange-500"
                },
                {
                  icon: <Gavel className="w-12 h-12" />,
                  title: "Terms of Service",
                  description: "Legal terms and conditions for using our services.",
                  url: "/terms-of-service",
                  color: "from-indigo-500 to-purple-500"
                }
              ].map((page, index) => (
                <div key={index} className="group p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${page.color} p-5 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {page.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{page.title}</h3>
                  <p className="text-gray-400 mb-6">{page.description}</p>
                  <a 
                    href={page.url}
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300"
                  >
                    <span>Visit Page</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* XML Sitemap */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              XML Sitemap
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              For search engines and developers, we provide an XML sitemap with all 
              our pages and their metadata.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/sitemap.xml"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
              >
                <Map className="w-5 h-5" />
                View XML Sitemap
              </a>
              <button className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-xl hover:bg-blue-400 hover:text-black transition-all duration-300">
                Download Sitemap
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}