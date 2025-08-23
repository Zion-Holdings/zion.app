import React from 'react';
import SEOOptimizer from '../components/ui/SEOOptimizer';
import EnhancedNavigation from '../components/layout/EnhancedNavigation';
import EnhancedHeroSection2025 from '../components/sections/EnhancedHeroSection2025';
import UltraAdvancedServicesShowcase2025 from '../components/sections/UltraAdvancedServicesShowcase2025';
import EnhancedFooter from '../components/layout/EnhancedFooter';
import PerformanceMonitor from '../components/ui/PerformanceMonitor';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRight, Star, Zap, Brain, Rocket, Shield, 
  Atom, Cpu, Cloud, Target, Users, Award,
  CheckCircle, TrendingUp, Globe, Sparkles,
  Phone, Mail, MapPin, ChevronDown,
  ArrowUpRight, Lightbulb, Code, Database, Server,
  Network, Palette, GraduationCap, DollarSign, Heart,
  DollarSign as Finance, Factory as Manufacturing, Scale as Legal
} from 'lucide-react';

export default function HomePage() {
  const repoBaseUrl = 'https://github.com/Zion-Holdings/zion.app/blob/main';
  return (
    <>
      <SEOOptimizer
        title="Revolutionary AI & Quantum Computing Solutions"
        description="Transform your business with Zion Tech Group's revolutionary AI, quantum computing, and micro SAAS solutions. Leading-edge technology for unprecedented growth."
        keywords={[
          'AI', 'quantum computing', 'micro SAAS', 'technology solutions', 
          'business transformation', 'Zion Tech Group', 'machine learning',
          'deep learning', 'neural networks', 'quantum algorithms'
        ]}
        type="website"
        canonicalUrl="https://ziontechgroup.com"
      />

      {/* Enhanced Navigation */}
      <EnhancedNavigation />

      {/* Hero Section */}
      <EnhancedHeroSection2025 />

        {/* Why Choose Us Section */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Why Choose Zion Tech Group?
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're not just another tech company. We're the architects of tomorrow's digital landscape.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className={`w-20 h-20 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* AUTO-GENERATED: HOME_LATEST_CONTENT_START */}
          <section className="mx-auto max-w-7xl px-6 pb-14">
            <h2 className="text-center text-3xl font-bold tracking-wide text-white/90 mb-12">Cutting-Edge Technologies</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center group hover:border-cyan-400/30 transition-all duration-300">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="font-semibold text-cyan-400">Next.js 14</h3>
                <p className="text-xs text-white/60 mt-2">React Framework</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center group hover:border-fuchsia-400/30 transition-all duration-300">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="font-semibold text-fuchsia-400">AI Agents</h3>
                <p className="text-xs text-white/60 mt-2">Autonomous Systems</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center group hover:border-blue-400/30 transition-all duration-300">
                <div className="text-4xl mb-4">☁️</div>
                <h3 className="font-semibold text-blue-400">Cloud Native</h3>
                <p className="text-xs text-white/60 mt-2">Scalable Infrastructure</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center group hover:border-green-400/30 transition-all duration-300">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="font-semibold text-green-400">Zero Trust</h3>
                <p className="text-xs text-white/60 mt-2">Security First</p>
              </div>
            </div>
          </section>

          {/* Client Testimonials */}
          <section className="mx-auto max-w-7xl px-6 pb-14">
            <h2 className="text-center text-3xl font-bold tracking-wide text-white/90 mb-12">What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl font-bold">J</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-400">John Chen</h4>
                    <p className="text-sm text-white/60">CTO, TechFlow Inc.</p>
                  </div>
                </div>
                <p className="text-white/80 italic">
                  "Zion Tech Group's autonomous systems have transformed our operations. 
                  We've seen a 300% increase in efficiency with zero downtime."
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl font-bold">S</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-fuchsia-400">Sarah Martinez</h4>
                    <p className="text-sm text-white/60">VP Engineering, DataSphere</p>
                  </div>
                </div>
                <p className="text-white/80 italic">
                  "The AI-powered content generation and optimization tools have revolutionized 
                  our marketing efforts. ROI increased by 450% in just 3 months."
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl font-bold">M</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-400">Mike Thompson</h4>
                    <p className="text-sm text-white/60">CEO, AutoScale Solutions</p>
                  </div>
                </div>
                <p className="text-white/80 italic">
                  "Their self-healing infrastructure is incredible. We haven't had a single 
                  manual intervention in 6 months. It's like having a perfect team that never sleeps."
                </p>
              </div>
            </div>
          </section>

          {/* AUTO-GENERATED: HOME_LATEST_CONTENT_START */}
          <section className="mx-auto max-w-7xl px-6 pb-14 mb-16">
            <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Latest Autonomous Content</h2>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Link href="/reports/updates/update-2025-01-17-1200" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">Autonomous Update — 2025: 01: 17: 1200</h3>
                <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </Link>
              <Link href="/blog/quantum-ai-revolution" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">Quantum AI Revolution: The Future of Autonomous Systems</h3>
                <p className="mt-1 text-sm text-white/75">Exploring quantum computing and AI convergence.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Read More <span aria-hidden>→</span></div>
              </Link>
              <Link href="/blog/sustainable-ai-future" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">Sustainable AI: Building a Greener Future</h3>
                <p className="mt-1 text-sm text-white/75">AI solutions for environmental sustainability.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Read More <span aria-hidden>→</span></div>
              </Link>
              <Link href="/reports/updates/update-2025-08-15-0406" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 15: 0406</h3>
                <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </Link>
              <Link href="/reports/updates/update-2025-08-15-0405" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 15: 0405</h3>
                <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span></span></div>
              </Link>
              <Link href="/reports/updates/update-2025-08-15-0404" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 15: 0404</h3>
                <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
              </Link>
            </div>
          </section>
          {/* AUTO-GENERATED: HOME_LATEST_CONTENT_END */}

          {/* Testimonials Section */}
          <section className="mx-auto max-w-7xl px-6 pb-16">
            <h2 className="text-center text-3xl font-bold tracking-wide text-white/90 mb-12">What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-3">
                    JD
                  </div>
                  <div>
                    <div className="font-semibold text-white">John Doe</div>
                    <div className="text-sm text-white/60">CTO, TechCorp</div>
                  </div>
                </div>
                <p className="text-white/80 text-sm">
                  "Zion Tech Group transformed our entire automation infrastructure. The AI systems they built are now running 24/7, improving our efficiency by 300%."
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-3">
                    SJ
                  </div>
                  <div>
                    <div className="font-semibold text-white">Sarah Johnson</div>
                    <div className="text-sm text-white/60">VP Operations, DataFlow</div>
                  </div>
                </div>
                <p className="text-white/80 text-sm">
                  "Their autonomous content generation system has revolutionized our marketing. We're producing 10x more content with better quality than ever before."
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-3">
                    MR
                  </div>
                  <div>
                    <div className="font-semibold text-white">Mike Rodriguez</div>
                    <div className="text-sm text-white/60">CEO, CloudScale</div>
                  </div>
                </div>
                <p className="text-white/80 text-sm">
                  "The cloud infrastructure optimization they delivered cut our costs in half while improving performance. Their autonomous monitoring is game-changing."
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Footer */}
        <EnhancedFooter />

        {/* Performance Monitor */}
        <PerformanceMonitor />
      </>
    );
  };

export default Home;
