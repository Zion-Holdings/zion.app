import React, { useState } from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Brain, Atom, Shield,
  ArrowRight,
  Building, Cpu, Phone, Mail, MapPin
} from 'lucide-react';

// Import our new innovative services
import { innovativeAIAutonomousServicesExpansion2025 } from '../data/2025-innovative-ai-autonomous-services-expansion';
import { innovativeITInfrastructureExpansion2025 } from '../data/2025-innovative-it-infrastructure-expansion';
import { innovativeMicroSaasExpansionV32025 } from '../data/2025-innovative-micro-saas-expansion-v3';

// Import existing service data
import { realMicroSaasServices } from '../data/real-micro-saas-services';
import { innovativeAIServices } from '../data/innovative-ai-services';
import { enterpriseITServices } from '../data/enterprise-it-services';
import { emergingTechServices } from '../data/emerging-tech-services';
import { newRealServices } from '../data/new-real-services';
import { realOperationalServices } from '../data/real-operational-services';
import { marketReadyServices } from '../data/market-ready-services';
import { marketValidatedServices } from '../data/market-validated-services';
import { industryRealServices } from '../data/industry-real-services';

// Import our new futuristic components
import UltraFuturisticNeonBackground from '../components/ui/UltraFuturisticNeonBackground';
import UltraFuturisticNavigation2026 from '../components/layout/UltraFuturisticNavigation2026';
import UltraFuturisticFooter2026 from '../components/layout/UltraFuturisticFooter2026';

// Helper function to get service website safely
const getServiceWebsite = (service: { website?: string; link?: string; id?: string; name: string }) => {
  if (service.website) return service.website;
  if (service.link) return service.link;
  return `/services/${service.id || service.name.toLowerCase().replace(/\s+/g, '-')}`;
};

const HomePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Combine all services for showcase
  const allServices = [
    ...innovativeAIAutonomousServicesExpansion2025,
    ...innovativeITInfrastructureExpansion2025,
    ...innovativeMicroSaasExpansionV32025,
    ...realMicroSaasServices,
    ...innovativeAIServices,
    ...enterpriseITServices,
    ...emergingTechServices,
    ...newRealServices,
    ...realOperationalServices,
    ...marketReadyServices,
    ...marketValidatedServices,
    ...industryRealServices
  ];

  // Get featured services
  const featuredServices = allServices.slice(0, 6);

  const categories = [
    { id: 'all', name: 'All Services', icon: Brain, color: 'from-purple-500 to-pink-500' },
    { id: 'ai', name: 'AI & Autonomous', icon: Brain, color: 'from-cyan-500 to-blue-500' },
    { id: 'quantum', name: 'Quantum Technology', icon: Atom, color: 'from-blue-500 to-indigo-500' },
    { id: 'infrastructure', name: 'IT Infrastructure', icon: Cpu, color: 'from-green-500 to-teal-500' },
    { id: 'micro-saas', name: 'Micro SAAS', icon: Building, color: 'from-orange-500 to-red-500' }
  ];

  return (
    <UltraFuturisticNeonBackground>
      <SEO 
        title="Zion Tech Group - Innovative AI, IT & Micro SAAS Solutions"
        description="Transform your business with our cutting-edge AI autonomous systems, quantum computing infrastructure, and revolutionary micro SAAS solutions. Leading innovation since 2025."
        keywords={[
          'AI autonomous systems',
          'quantum computing',
          'IT infrastructure',
          'micro SAAS',
          'innovative technology',
          'Zion Tech Group'
        ]}
      />

      {/* Futuristic Navigation */}
      <UltraFuturisticNavigation2026 />

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0 }}
        className="relative min-h-screen flex items-center justify-center pt-32 pb-20"
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.2 }}
            className="max-w-6xl mx-auto"
          >
            {/* Main Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.4 }}
              className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-tight"
            >
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.6 }}
              className="text-2xl md:text-3xl lg:text-4xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              Pioneering the Future of Technology with Revolutionary AI Autonomous Systems, 
              Quantum Computing Infrastructure, and Innovative Micro SAAS Solutions
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            >
              <a
                href="/services"
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl text-white font-bold text-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-purple-500/25"
              >
                <span className="relative z-10">Explore Our Services</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              
              <a
                href="/2025-innovative-services-showcase-v2"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl text-white font-bold text-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-blue-500/25"
              >
                <span className="relative z-10">2025 Innovation Showcase</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>

              <a
                href="tel:+13024640950"
                className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl text-white font-bold text-xl hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-green-500/25"
              >
                <span className="relative z-10">Call Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 1.0 }}
              className="flex flex-wrap justify-center gap-8 text-gray-300"
            >
              <div className="flex items-center gap-3">
                <Phone className="w-6 h-6 text-purple-400" />
                <span className="text-lg">+1 302 464 0950</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-6 h-6 text-blue-400" />
                <span className="text-lg">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-cyan-400" />
                <span className="text-lg">364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Overview Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0 }}
        className="py-20 relative"
      >
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Revolutionary Services Portfolio
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
              Discover our comprehensive range of cutting-edge services designed to transform 
              businesses and drive innovation across industries
            </p>
          </motion.div>

          {/* Category Navigation */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl border transition-all duration-300 ${
                  selectedCategory === category.id
                    ? `bg-gradient-to-r ${category.color} border-transparent text-white shadow-lg`
                    : 'bg-gray-800/50 border-gray-600/50 text-gray-300 hover:bg-gray-700/50'
                }`}
              >
                <category.icon className="w-5 h-5" />
                {category.name}
              </button>
            ))}
          </motion.div>

          {/* Featured Services Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.id || index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  {/* Service Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Brain className="w-8 h-8 text-white" />
                  </div>

                  {/* Service Info */}
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors duration-300">
                    {service.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Category Badge */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                      {service.category || 'Innovative Service'}
                    </span>
                  </div>

                  {/* Action Button */}
                  <a
                    href={getServiceWebsite(service)}
                    className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-300 text-sm font-medium"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* View All Services CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <a
              href="/services"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl text-white font-bold text-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-purple-500/25"
            >
              View All Services
              <ArrowRight className="w-6 h-6" />
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* Innovation Highlights Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0 }}
        className="py-20 relative"
      >
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Innovation at the Edge
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
              Pushing the boundaries of what's possible with cutting-edge technologies
            </p>
          </motion.div>

          {/* Innovation Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: 'AI Autonomous Systems',
                description: 'Revolutionary AI systems that operate independently with human-like reasoning capabilities',
                color: 'from-cyan-500 to-blue-500'
              },
              {
                icon: Atom,
                title: 'Quantum Computing',
                description: 'Next-generation quantum computing solutions for complex problem-solving',
                color: 'from-blue-500 to-indigo-500'
              },
              {
                icon: Cpu,
                title: 'Advanced Infrastructure',
                description: 'Cutting-edge IT infrastructure designed for the future',
                color: 'from-green-500 to-teal-500'
              },
              {
                icon: Building,
                title: 'Micro SAAS Solutions',
                description: 'Innovative business solutions that scale with your needs',
                color: 'from-orange-500 to-red-500'
              },
              {
                icon: Shield,
                title: 'Cybersecurity',
                description: 'Advanced security solutions for the digital age',
                color: 'from-red-500 to-orange-500'
              },
              {
                icon: ArrowRight, // Changed from Rocket to ArrowRight for consistency
                title: 'Emerging Technologies',
                description: 'Exploring the frontiers of technological innovation',
                color: 'from-purple-500 to-pink-500'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-purple-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact CTA Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0 }}
        className="py-20 relative"
      >
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20 rounded-3xl p-16 text-center border border-gray-700/50"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
              Our innovative services are designed to give you a competitive edge in the rapidly evolving technology landscape. 
              Contact us today to learn how we can help you achieve your goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <a
                href="tel:+13024640950"
                className="flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-500 px-8 py-4 rounded-2xl text-white font-bold text-xl hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-6 h-6" />
                +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-4 rounded-2xl text-white font-bold text-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                <Mail className="w-6 h-6" />
                kleber@ziontechgroup.com
              </a>
            </div>

            <div className="text-gray-400 text-lg">
              <p className="mb-2">364 E Main St STE 1008, Middletown DE 19709</p>
              <p>Visit us at: <a href="https://ziontechgroup.com" className="text-purple-400 hover:text-purple-300 font-medium">ziontechgroup.com</a></p>
            </div>
          </motion.div>
        </div>
      </motion.section>

        {/* Features */}
        <section className="mx-auto max-w-7xl px-6 pb-14">
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Features</h2>
          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Self‑Improving', desc: 'Agents continuously analyze, invent, and evolve automations.' },
              { title: 'Repo Sync', desc: 'Changes are committed and pushed automatically to main.' },
              { title: 'Zero Ops', desc: 'Runs fully in the cloud—no servers or manual intervention.' },
              { title: 'Safety‑First', desc: 'Conservative edits with logs, reports, and guardrails.' },
              { title: 'Scalable', desc: 'Generates domain‑specific factories on demand.' },
              { title: 'Observability', desc: 'Dashboards, reports, and artifacts across hubs.' },
              { title: 'Futuristic UI', desc: 'Neon, animated, holographic surfaces with tilt and beams.' },
              { title: 'Cloud Automations', desc: 'Scheduled functions that replace GitHub Actions.' },
              { title: 'Edge‑Optimized', desc: 'Global performance with smart bundling and caching.' },
            ].map((f) => (
              <article key={f.title} className="group glow-card relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md hover:border-cyan-400/30">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="mt-1 text-sm text-white/75">{f.desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="mx-auto max-w-7xl px-6 pb-14">
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">How it works</h2>
          <div className="mx-auto mt-6 max-w-4xl grid grid-cols-1 gap-4 md:grid-cols-4">
            {[
              ['Discover', 'Scan code, issues, UX, and ops signals'],
              ['Plan', 'Draft safe, high‑impact improvements'],
              ['Apply', 'Open edits with conservative diffs'],
              ['Validate', 'Audit builds, links, a11y, and performance'],
            ].map(([title, desc]) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 text-left backdrop-blur-xl">
                <div className="text-sm font-semibold text-white">{title}</div>
                <div className="mt-1 text-xs text-white/70">{desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Capabilities */}
        <section className="mx-auto max-w-7xl px-6 pb-14">
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Capabilities</h2>
          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">
            {[
              { title: 'Code Quality & Refactors', desc: 'Lints, fixes, and proposes refactors with type‑safety improvements.' },
              { title: 'Performance & A11y', desc: 'Optimizes bundles, assets, and accessibility with continuous checks.' },
              { title: 'Content & SEO', desc: 'Curates content, updates promotions, and tunes metadata for reach.' },
              { title: 'Front Systems', desc: 'Futuristic front with animated templates and layouts.' },
              { title: 'Automation Hub', desc: 'Orchestrate cloud agents and review outputs.' },
              { title: 'Reports & Insights', desc: 'Health, SEO and AI trend dashboards.' },
            ].map((c) => (
              <article key={c.title} className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl">
                <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[4rem] bg-cyan-400/10 blur-2xl" />
                <h3 className="text-lg font-semibold">{c.title}</h3>
                <p className="mt-1 text-sm text-white/75">{c.desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Futuristic Templates */}
        <section className="mx-auto max-w-7xl px-6 pb-14">
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Futuristic Templates</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Beautiful, animated surfaces and layouts ready to accelerate front‑of‑house experiences.</p>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/main/front"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold">Front Systems Hub</h3>
              <p className="mt-1 text-sm text-white/75">Explore comprehensive templates, effects, and layouts.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
            </a></Link>
            <Link href="/automation"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold">Automation‑Driven UI</h3>
              <p className="mt-1 text-sm text-white/75">Live promos and content curated by continuous automations.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
            </a></Link>
            <a href="/.netlify/functions/front-enhancer" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold">On‑Demand Front Enhancer</h3>
              <p className="mt-1 text-sm text-white/75">Trigger the curator now and see updates flow to main.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
            </a>
          </div>
        </section>

        {/* Automation Engine — New Tools */}
        <section className="mx-auto max-w-7xl px-6 pb-20">
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Automation Engine — New Tools</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Now powered by scheduled cloud functions — no GitHub Actions required. Live homepage promos, health checks, and link integrity run automatically.</p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Frontpage Enhancer', desc: 'Auto‑advertises features and refreshes homepage content hourly.', href: '/.netlify/functions/frontpage-enhancer' },
              { title: 'Link & Health Scheduler', desc: 'Runs link checks, health scans, and sitemap updates every 6h.', href: '/.netlify/functions/link-and-health-scheduler' },
              { title: 'Marketing & Features Promo', desc: 'Regenerates homepage promos and deep links every 2h.', href: '/.netlify/functions/marketing-and-features-promo' },
              { title: 'Front Enhancer (fast)', desc: 'Runs front improvements every 10 minutes.', href: '/.netlify/functions/front-enhancer' },
              { title: 'Homepage Advertiser', desc: 'Pushes fresh highlights every 15 minutes.', href: '/.netlify/functions/homepage_advertiser' },
              { title: 'Cloud Orchestrator', desc: 'Coordinates broader agents on a 4h cadence.', href: '/.netlify/functions/cloud_orchestrator' },
              { title: 'Fast Orchestrator (1m)', desc: 'Continuously refreshes front + homepage and commits to main every minute.', href: '/.netlify/functions/fast-orchestrator' },
              { title: 'Continuous Orchestrator (5m)', desc: 'Runs a lightweight pipeline including sitemap and UI futurizer.', href: '/.netlify/functions/continuous-orchestrator' },
              { title: 'Front Maximizer', desc: 'High‑frequency auto‑advertising and futurizing every 5m.', href: '/.netlify/functions/front-maximizer' },
              { title: 'Continuous Front Runner', desc: 'Ultra‑fast subset runner every 3m.', href: '/.netlify/functions/continuous-front-runner' },
              { title: 'README Advertiser', desc: 'Refresh README and docs indexes every 6h.', href: '/.netlify/functions/readme-advertiser' },
              { title: 'Features/Capabilities/Benefits Advertiser (2m)', desc: 'Continuously advertises new features with deep links on the front pages.', href: '/.netlify/functions/features-capabilities-benefits-advertiser' },
              { title: 'Hyper Front Index Accelerator (1m)', desc: 'Ultra-fast front index futurizer and directory builder.', href: '/.netlify/functions/hyper-front-index-accelerator' },
              { title: 'Dead Code Report', desc: 'Scans the codebase and updates reports with dead and unused code.', href: '/.netlify/functions/dead-code-report' },
              { title: 'Security Audit Runner', desc: 'Runs security checks and commits actionable findings.', href: '/.netlify/functions/security-audit-runner' },
              { title: 'Docs Index Runner', desc: 'Refreshes docs indexes and README for better discovery.', href: '/.netlify/functions/docs-index-runner' },
              { title: 'Repo Knowledge Graph', desc: 'Regenerates the repository knowledge graph and radar metrics.', href: '/.netlify/functions/repo-knowledge-graph-runner' },
              { title: 'Image Optimizer', desc: 'Optimizes media assets for performance and quality.', href: '/.netlify/functions/image-optimizer-runner' },
              { title: 'AI Changelog Runner', desc: 'Generates human-friendly release notes automatically.', href: '/.netlify/functions/ai-changelog-runner' },
              { title: 'Newsroom Runner', desc: 'Publishes autonomous product updates to the newsroom.', href: '/.netlify/functions/newsroom-runner' },
              { title: 'TODO Scanner', desc: 'Generates a consolidated TODO report and dashboard.', href: '/.netlify/functions/todo-scanner-runner' },
              { title: 'Broken Image Scanner', desc: 'Detects broken images and proposes or applies fixes.', href: '/.netlify/functions/broken-image-scanner-runner' },
              { title: 'External Link Check', desc: 'Crawls external links and opens fixes for rot and redirects.', href: '/.netlify/functions/external-link-check-runner' },
              { title: 'OG Image Update', desc: 'Regenerates Open Graph images for rich social sharing.', href: '/.netlify/functions/og-image-update-runner' },
              { title: 'Docs Search Index', desc: 'Refreshes the site search index for instant discovery.', href: '/.netlify/functions/docs-search-index-runner' },
              { title: 'SEO Audit Runner', desc: 'Generates SEO report for all pages.', href: '/.netlify/functions/seo-audit-runner' },
              { title: 'AI Trends Radar', desc: 'Aggregates trending AI topics and publishes a live report.', href: '/reports/ai-trends' },
              { title: 'Website Search Index Runner', desc: 'Regenerates the full site search index.', href: '/.netlify/functions/website-search-index-runner' },
              { title: 'Netlify Auto‑Healer', desc: 'Monitors and self-heals Netlify deploy issues.', href: '/.netlify/functions/netlify-auto-healer-runner' },
              { title: 'Innovation Lab (10m)', desc: 'Invents, curates, and promotes fresh ideas across the site.', href: '/.netlify/functions/innovation-lab' },
              { title: 'Autonomous Innovation Generator (2m)', desc: 'Synthesizes front promos and homepage refresh, then syncs to main.', href: '/.netlify/functions/autonomous-innovation-generator' },
              { title: 'Auto Scheduler (15m)', desc: 'Smart time-based runner that chooses and executes the best tasks.', href: '/.netlify/functions/auto-scheduler' },
              { title: 'Broken Image Scanner (6h)', desc: 'Finds broken images, optimizes assets, and syncs fixes.', href: '/.netlify/functions/broken-image-scanner' },
              { title: 'Automation Guardian (10m)', desc: 'Runs improvement, orchestrators, quick fixes and syncs to main.', href: '/.netlify/functions/automation-guardian-runner' },
              { title: 'Auto Discovery Runner (30m)', desc: 'Discovers and runs high‑value orchestrators autonomously.', href: '/.netlify/functions/auto-discovery-runner' },
              { title: 'Cloud Autonomous Orchestrator (15m)', desc: 'Runs cloud orchestrations, then syncs and rebuilds.', href: '/.netlify/functions/cloud-autonomous-orchestrator-runner' },
              { title: 'Smart Redirect Manager', desc: 'Fixes internal 404s by auto-adding redirects; writes a public report.', href: '/.netlify/functions/redirect-manager' },
              { title: 'A11y Alt-Text Auditor', desc: 'Scans for missing alt text and publishes a report.', href: '/.netlify/functions/a11y-audit-runner' },
              { title: 'Branch Cleanup Runner (daily)', desc: 'Deletes merged or stale ephemeral branches via GitHub API.', href: '/.netlify/functions/branch-cleanup-runner' },
              { title: 'Redirect Healer', desc: 'Heals broken internal links by auto-adding smart redirects.', href: '/.netlify/functions/redirect-healer' },
              { title: 'Sitemap Prioritizer', desc: 'Regenerates sitemap with popularity-weighted priorities.', href: '/.netlify/functions/sitemap-prioritizer' },
            ].map((tool) => (
              <a key={tool.title} href={tool.href} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">{tool.title}</h3>
                <p className="mt-1 text-sm text-white/75">{tool.desc}</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
              </a>
            ))}

            <a href="/.netlify/functions/content-gap-analyzer" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold">Content Gap Analyzer</h3>
              <p className="mt-1 text-sm text-white/75">Finds missing high‑value pages from sitemap and publishes a report.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
            </a>

            <a href="/.netlify/functions/cta-optimizer" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold">CTA Optimizer</h3>
              <p className="mt-1 text-sm text-white/75">Analyzes homepage CTAs and commits suggestions to reports.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
            </a>

            <a href="/.netlify/functions/ultra-innovation-accelerator" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold">Ultra Innovation Accelerator</h3>
              <p className="mt-1 text-sm text-white/75">Orchestrates new analyzers for rapid insights and commits outputs.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
            </a>

          </div>
        </section>

        {/* New: Autonomous Automations */}
        <section className="mx-auto max-w-7xl px-6 pb-14">
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">New Autonomous Automations</h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <a href="/.netlify/functions/stale-content-auditor-runner" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold">Stale Content Auditor</h3>
              <p className="mt-1 text-sm text-white/75">Finds stale files across pages, docs and components; publishes a report and summary.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
            </a>

            <a href="/.netlify/functions/deps-auto-upgrade-runner" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold">Dependency Auto‑Upgrade</h3>
              <p className="mt-1 text-sm text-white/75">Auto-upgrades dependencies on a safe cadence, validates with build, and syncs.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
            </a>
          </div>
        </section>

        {/* AUTO-GENERATED: HOME_UPDATER_START */}
 <section className="mx-auto max-w-7xl px-6 pb-16">
   <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Explore more</h2>
   <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

            <Link href="/automation"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Automation Hub — live agents & reports</span></a></Link>
  
            <Link href="/newsroom"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Newsroom — latest autonomous updates</span></a></Link>
  
            <Link href="/site-health"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Site Health — audits & insights</span></a></Link>
  
            <Link href="/.netlify/functions/netlify-auto-healer-runner"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Site Health — Netlify Auto‑Healer</span></a></Link>
  
            <Link href="/.netlify/functions/docs-index-runner"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Docs — technical notes & guides</span></a></Link>
  
   </div>
 </section>
   {/* AUTO-GENERATED: HOME_UPDATER_END */}
  
        {/* AUTO-GENERATED: HOME_VISIONARY_START */}

        <section id="home-visionary" className="mx-auto max-w-7xl px-6 pb-20">
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">New Visionary Automations</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Futuristic templates, animated backgrounds, and deep links — continuously curated by cloud functions.</p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

              <a key="Front Visionary Expander" href="/.netlify/functions/front-visionary-expander" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-base font-semibold">Front Visionary Expander</div>
                <div className="mt-1 text-sm text-white/75">Enhances main/front with animated sections and deep links.</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
              </a>

              <a key="Home Visionary Expander" href="/.netlify/functions/home-visionary-expander" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-base font-semibold">Home Visionary Expander</div>
                <div className="mt-1 text-sm text-white/75">Refreshes homepage highlights and links.</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
              </a>

              <a key="Continuous Orchestrator" href="/.netlify/functions/continuous-orchestrator" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-base font-semibold">Continuous Orchestrator</div>
                <div className="mt-1 text-sm text-white/75">Runs multi‑tool refresh and sitemap on a fast cadence.</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
              </a>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-2">

            <Link href="/main/front#features"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Features — explore capabilities</span></a></Link>

            <Link href="/main/front#capabilities"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Capabilities — what agents can do</span></a></Link>

            <Link href="/main/front#benefits"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Benefits — outcomes & ROI</span></a></Link>

            <Link href="/automation"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Automation Hub — live agents & reports</span></a></Link>

            <Link href="/site-health"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Site Health — audits & insights</span></a></Link>
          </div>
        </section>
        {/* AUTO-GENERATED: HOME_VISIONARY_END */}

      {/* Futuristic Footer */}
      <UltraFuturisticFooter2026 />
    </UltraFuturisticNeonBackground>
              { title: 'Fast Orchestrator (1m)', desc: 'Continuously refreshes front + homepage and commits to main every minute.', href: '/.netlify/functions/fast-orchestrator' },
              { title: 'Continuous Orchestrator (5m)', desc: 'Runs a lightweight pipeline including sitemap and UI futurizer.', href: '/.netlify/functions/continuous-orchestrator' },
              { title: 'Front Maximizer', desc: 'High‑frequency auto‑advertising and futurizing every 5m.', href: '/.netlify/functions/front-maximizer' },
              { title: 'Continuous Front Runner', desc: 'Ultra‑fast subset runner every 3m.', href: '/.netlify/functions/continuous-front-runner' },
              { title: 'README Advertiser', desc: 'Refresh README and docs indexes every 6h.', href: '/.netlify/functions/readme-advertiser' },
              { title: 'Features/Capabilities/Benefits Advertiser (2m)', desc: 'Continuously advertises new features with deep links on the front pages.', href: '/.netlify/functions/features-capabilities-benefits-advertiser' },
              { title: 'Hyper Front Index Accelerator (1m)', desc: 'Ultra-fast front index futurizer and directory builder.', href: '/.netlify/functions/hyper-front-index-accelerator' },
              { title: 'Dead Code Report', desc: 'Scans the codebase and updates reports with dead and unused code.', href: '/.netlify/functions/dead-code-report' },
              { title: 'Security Audit Runner', desc: 'Runs security checks and commits actionable findings.', href: '/.netlify/functions/security-audit-runner' },
              { title: 'Docs Index Runner', desc: 'Refreshes docs indexes and README for better discovery.', href: '/.netlify/functions/docs-index-runner' },
              { title: 'Repo Knowledge Graph', desc: 'Regenerates the repository knowledge graph and radar metrics.', href: '/.netlify/functions/repo-knowledge-graph-runner' },
              { title: 'Image Optimizer', desc: 'Optimizes media assets for performance and quality.', href: '/.netlify/functions/image-optimizer-runner' },
              { title: 'AI Changelog Runner', desc: 'Generates human-friendly release notes automatically.', href: '/.netlify/functions/ai-changelog-runner' },
              { title: 'Newsroom Runner', desc: 'Publishes autonomous product updates to the newsroom.', href: '/.netlify/functions/newsroom-runner' },
              { title: 'TODO Scanner', desc: 'Generates a consolidated TODO report and dashboard.', href: '/.netlify/functions/todo-scanner-runner' },
              { title: 'Broken Image Scanner', desc: 'Detects broken images and proposes or applies fixes.', href: '/.netlify/functions/broken-image-scanner-runner' },
              { title: 'External Link Check', desc: 'Crawls external links and opens fixes for rot and redirects.', href: '/.netlify/functions/external-link-check-runner' },
              { title: 'OG Image Update', desc: 'Regenerates Open Graph images for rich social sharing.', href: '/.netlify/functions/og-image-update-runner' },
              { title: 'Docs Search Index', desc: 'Refreshes the site search index for instant discovery.', href: '/.netlify/functions/docs-search-index-runner' },
              { title: 'SEO Audit Runner', desc: 'Generates SEO report for all pages.', href: '/.netlify/functions/seo-audit-runner' },
              { title: 'AI Trends Radar', desc: 'Aggregates trending AI topics and publishes a live report.', href: '/reports/ai-trends' },
              { title: 'Website Search Index Runner', desc: 'Regenerates the full site search index.', href: '/.netlify/functions/website-search-index-runner' },
              { title: 'Netlify Auto‑Healer', desc: 'Monitors and self-heals Netlify deploy issues.', href: '/.netlify/functions/netlify-auto-healer-runner' },
              { title: 'Innovation Lab (10m)', desc: 'Invents, curates, and promotes fresh ideas across the site.', href: '/.netlify/functions/innovation-lab' },
              { title: 'Autonomous Innovation Generator (2m)', desc: 'Synthesizes front promos and homepage refresh, then syncs to main.', href: '/.netlify/functions/autonomous-innovation-generator' },
              { title: 'Auto Scheduler (15m)', desc: 'Smart time-based runner that chooses and executes the best tasks.', href: '/.netlify/functions/auto-scheduler' },
              { title: 'Broken Image Scanner (6h)', desc: 'Finds broken images, optimizes assets, and syncs fixes.', href: '/.netlify/functions/broken-image-scanner' },
              { title: 'Automation Guardian (10m)', desc: 'Runs improvement, orchestrators, quick fixes and syncs to main.', href: '/.netlify/functions/automation-guardian-runner' },
              { title: 'Auto Discovery Runner (30m)', desc: 'Discovers and runs high‑value orchestrators autonomously.', href: '/.netlify/functions/auto-discovery-runner' },
              { title: 'Cloud Autonomous Orchestrator (15m)', desc: 'Runs cloud orchestrations, then syncs and rebuilds.', href: '/.netlify/functions/cloud-autonomous-orchestrator-runner' },
              { title: 'Smart Redirect Manager', desc: 'Fixes internal 404s by auto-adding redirects; writes a public report.', href: '/.netlify/functions/redirect-manager' },
              { title: 'A11y Alt-Text Auditor', desc: 'Scans for missing alt text and publishes a report.', href: '/.netlify/functions/a11y-audit-runner' },
              { title: 'Branch Cleanup Runner (daily)', desc: 'Deletes merged or stale ephemeral branches via GitHub API.', href: '/.netlify/functions/branch-cleanup-runner' },
              { title: 'Redirect Healer', desc: 'Heals broken internal links by auto-adding smart redirects.', href: '/.netlify/functions/redirect-healer' },
              { title: 'Sitemap Prioritizer', desc: 'Regenerates sitemap with popularity-weighted priorities.', href: '/.netlify/functions/sitemap-prioritizer' },
            ].map((tool) => (
              <a key={tool.title} href={tool.href} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">{tool.title}</h3>
                <p className="mt-1 text-sm text-white/75">{tool.desc}</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
              </a>
            ))}

            <a href="/.netlify/functions/content-gap-analyzer" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold">Content Gap Analyzer</h3>
              <p className="mt-1 text-sm text-white/75">Finds missing high‑value pages from sitemap and publishes a report.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
            </a>

            <a href="/.netlify/functions/cta-optimizer" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold">CTA Optimizer</h3>
              <p className="mt-1 text-sm text-white/75">Analyzes homepage CTAs and commits suggestions to reports.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
            </a>

            <a href="/.netlify/functions/ultra-innovation-accelerator" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold">Ultra Innovation Accelerator</h3>
              <p className="mt-1 text-sm text-white/75">Orchestrates new analyzers for rapid insights and commits outputs.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
            </a>

          </div>
        </section>

        {/* New: Autonomous Automations */}
        <section className="mx-auto max-w-7xl px-6 pb-14">
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">New Autonomous Automations</h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <a href="/.netlify/functions/stale-content-auditor-runner" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold">Stale Content Auditor</h3>
              <p className="mt-1 text-sm text-white/75">Finds stale files across pages, docs and components; publishes a report and summary.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
            </a>

            <a href="/.netlify/functions/deps-auto-upgrade-runner" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold">Dependency Auto‑Upgrade</h3>
              <p className="mt-1 text-sm text-white/75">Auto-upgrades dependencies on a safe cadence, validates with build, and syncs.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
            </a>
          </div>
        </section>

        {/* AUTO-GENERATED: HOME_UPDATER_START */}
 <section className="mx-auto max-w-7xl px-6 pb-16">
   <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Explore more</h2>
   <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

            <Link href="/automation"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Automation Hub — live agents & reports</span></a></Link>
  
            <Link href="/newsroom"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Newsroom — latest autonomous updates</span></a></Link>
  
            <Link href="/site-health"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Site Health — audits & insights</span></a></Link>
  
            <Link href="/.netlify/functions/netlify-auto-healer-runner"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Site Health — Netlify Auto‑Healer</span></a></Link>
  
            <Link href="/.netlify/functions/docs-index-runner"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Docs — technical notes & guides</span></a></Link>
  
   </div>
 </section>
   {/* AUTO-GENERATED: HOME_UPDATER_END */}
  
        {/* AUTO-GENERATED: HOME_VISIONARY_START */}

        <section id="home-visionary" className="mx-auto max-w-7xl px-6 pb-20">
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">New Visionary Automations</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Futuristic templates, animated backgrounds, and deep links — continuously curated by cloud functions.</p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

              <a key="Front Visionary Expander" href="/.netlify/functions/front-visionary-expander" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-base font-semibold">Front Visionary Expander</div>
                <div className="mt-1 text-sm text-white/75">Enhances main/front with animated sections and deep links.</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
              </a>

              <a key="Home Visionary Expander" href="/.netlify/functions/home-visionary-expander" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-base font-semibold">Home Visionary Expander</div>
                <div className="mt-1 text-sm text-white/75">Refreshes homepage highlights and links.</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
              </a>

              <a key="Continuous Orchestrator" href="/.netlify/functions/continuous-orchestrator" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-base font-semibold">Continuous Orchestrator</div>
                <div className="mt-1 text-sm text-white/75">Runs multi‑tool refresh and sitemap on a fast cadence.</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
              </a>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-2">

            <Link href="/main/front#features"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Features — explore capabilities</span></a></Link>

            <Link href="/main/front#capabilities"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Capabilities — what agents can do</span></a></Link>

            <Link href="/main/front#benefits"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Benefits — outcomes & ROI</span></a></Link>

            <Link href="/automation"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Automation Hub — live agents & reports</span></a></Link>

            <Link href="/site-health"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Site Health — audits & insights</span></a></Link>
          </div>
        </section>
{/* AUTO-GENERATED: HOME_VISIONARY_END */}
</main>
    </div>
>>>>>>> origin/courses/cursor/invent-and-deploy-autonomous-cloud-automations-8982
  );
};

export default HomePage;
