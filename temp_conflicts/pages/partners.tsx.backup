import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Handshake, Globe, Rocket, Brain, Shield, Users, 
  Award, Star, Zap, Building, Target, CheckCircle
} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';

export default function PartnersPage() {
  const partnershipTypes = [
    {
      icon: Brain,
      title: "Technology Partners",
      description: "Collaborate on cutting-edge AI and quantum computing solutions",
      benefits: [
        "Access to our AI platform and APIs",
        "Joint research and development",
        "Co-marketing opportunities",
        "Technical support and training"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Building,
      title: "Enterprise Partners",
      description: "Deliver comprehensive solutions to enterprise clients",
      benefits: [
        "White-label solutions",
        "Revenue sharing opportunities",
        "Dedicated account management",
        "Custom integration support"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Globe,
      title: "Global Partners",
      description: "Expand our reach to international markets",
      benefits: [
        "Regional exclusivity options",
        "Local market expertise",
        "Cultural adaptation support",
        "Multi-language resources"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Rocket,
      title: "Innovation Partners",
      description: "Co-create breakthrough technologies and solutions",
      benefits: [
        "Joint patent opportunities",
        "Research collaboration",
        "Innovation lab access",
        "Thought leadership programs"
      ],
      color: "from-orange-500 to-red-500"
    }
  ];

  const currentPartners = [
    {
      name: "QuantumTech Solutions",
      logo: "🔬",
      type: "Technology Partner",
      description: "Leading quantum computing research and development",
      achievements: ["Joint quantum algorithm development", "Co-published research papers", "Shared patent portfolio"]
    },
    {
      name: "AI Nexus Corp",
      logo: "🧠",
      type: "Enterprise Partner",
      description: "Enterprise AI solutions and consulting services",
      achievements: ["$50M+ joint revenue", "200+ enterprise clients", "Industry-leading AI implementations"]
    },
    {
      name: "Global Innovation Labs",
      logo: "🌍",
      type: "Global Partner",
      description: "International technology innovation and deployment",
      achievements: ["15+ countries covered", "Local market penetration", "Cultural adaptation success"]
    },
    {
      name: "Future Systems Inc",
      logo: "⚡",
      type: "Innovation Partner",
      description: "Breakthrough technology research and development",
      achievements: ["Joint innovation lab", "Shared IP portfolio", "Industry disruption initiatives"]
    }
  ];

  const partnershipBenefits = [
    {
      icon: Zap,
      title: "Revenue Growth",
      description: "Access new markets and revenue streams through strategic partnerships"
    },
    {
      icon: Users,
      title: "Expanded Network",
      description: "Connect with industry leaders and potential clients worldwide"
    },
    {
      icon: Shield,
      title: "Risk Mitigation",
      description: "Share development costs and risks in emerging technology markets"
    },
    {
      icon: Star,
      title: "Innovation Acceleration",
      description: "Faster time-to-market through collaborative development"
    },
    {
      icon: Target,
      title: "Market Access",
      description: "Enter new markets with local expertise and established relationships"
    },
    {
      icon: Award,
      title: "Brand Enhancement",
      description: "Strengthen your brand through association with cutting-edge technology"
    }
  ];

  const partnershipProcess = [
    {
      step: "01",
      title: "Initial Discussion",
      description: "Schedule a call to discuss partnership opportunities and alignment"
    },
    {
      step: "02",
      title: "Strategic Assessment",
      description: "Evaluate mutual benefits and create partnership roadmap"
    },
    {
      step: "03",
      title: "Agreement & Launch",
      description: "Finalize partnership terms and begin collaborative initiatives"
    },
    {
      step: "04",
      title: "Growth & Optimization",
      description: "Continuously optimize partnership for maximum mutual value"
    }
  ];

  return (
    <>
      <Head>
        <title>Partners - Zion Tech Group | Strategic Partnerships</title>
        <meta name="description" content="Partner with Zion Tech Group to accelerate innovation in AI, quantum computing, and autonomous technology. Explore strategic partnership opportunities." />
        <meta name="keywords" content="Zion Tech Group partners, strategic partnerships, AI collaboration, quantum computing partnerships, technology alliances" />
        <meta property="og:title" content="Partners - Zion Tech Group" />
        <meta property="og:description" content="Strategic partnerships for technology innovation and growth." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/partners" />
      </Head>

      <EnhancedNavigation />

      <main className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6">
                Strategic Partnerships
              </h1>
              <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-8">
                Join forces with Zion Tech Group to accelerate innovation, expand market reach, 
                and create breakthrough technologies that shape the future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#partnerships"
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                >
                  Explore Partnerships
                </a>
                <a
                  href="/contact"
                  className="px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
                >
                  Get in Touch
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Partnership Types */}
        <section id="partnerships" className="py-20 px-6 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Partnership Types
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Choose the partnership model that best fits your business objectives
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {partnershipTypes.map((type, index) => (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="p-8 rounded-2xl bg-slate-700/50 border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-slate-700/70">
                    <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${type.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <type.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{type.title}</h3>
                    <p className="text-white/80 mb-6 leading-relaxed">{type.description}</p>
                    
                    <h4 className="font-semibold text-white mb-3">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {type.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-white/70 flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Current Partners */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Our Partners
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Meet some of our strategic partners who are helping us shape the future of technology
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {currentPartners.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="p-8 rounded-2xl bg-slate-800/50 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:bg-slate-800/70">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="text-4xl">{partner.logo}</div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{partner.name}</h3>
                        <span className="px-3 py-1 bg-blue-600/20 text-blue-400 text-sm font-medium rounded-full border border-blue-500/30">
                          {partner.type}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-white/80 mb-6 leading-relaxed">{partner.description}</p>
                    
                    <h4 className="font-semibold text-white mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {partner.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-white/70 flex items-start gap-2">
                          <Star className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Benefits */}
        <section className="py-20 px-6 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Why Partner With Us?
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Strategic partnerships that deliver mutual value and accelerate growth
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partnershipBenefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="p-6 rounded-2xl bg-slate-700/50 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:bg-slate-700/70 text-center">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                    <p className="text-white/70 leading-relaxed">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Process */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Partnership Process
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Simple steps to establish a successful strategic partnership
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partnershipProcess.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="p-6 rounded-2xl bg-slate-800/50 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:bg-slate-800/70 text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl font-bold text-white">{step.step}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-white/70 leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-blue-600/20 to-cyan-600/20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 text-white">
                Ready to Partner With Us?
              </h2>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Let's discuss how we can create mutual value through strategic collaboration. 
                Together, we can accelerate innovation and achieve remarkable results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Handshake className="w-5 h-5" />
                  <span>Start Partnership Discussion</span>
                </a>
                <a
                  href="mailto:partnerships@ziontechgroup.com"
                  className="px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Users className="w-5 h-5" />
                  <span>Partnership Team</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <EnhancedFooter />
    </>
  );
}
