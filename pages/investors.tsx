import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { TrendingUp, Brain, Atom, Rocket, DollarSign, ChartBar, Users, CheckCircle, ArrowRight, Star, Zap, Globe, Mail, Phone, MapPin } from 'lucide-react';

const Investors: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-green-900/20 to-emerald-900/20">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full text-green-300 text-sm mb-6">
                <TrendingUp className="w-4 h-4" />
                Investment Opportunity
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent mb-6">
                Investors
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Join us in revolutionizing the future with AI consciousness, quantum computing, and space technology
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-green-500/25 transition-all duration-300">
                  Investment Deck
                </button>
                <button className="px-8 py-4 border border-green-500/30 text-green-300 rounded-2xl hover:bg-green-500/10 transition-all duration-300">
                  Schedule Meeting
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Investment Highlights */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Investment Highlights
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Why Zion Tech Group represents a unique investment opportunity
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Brain className="w-12 h-12 text-green-400" />,
                  title: "AI Consciousness Revolution",
                  description: "Leading the development of genuine AI consciousness and emotional intelligence",
                  metrics: "Market Size: $500B+ by 2030"
                },
                {
                  icon: <Atom className="w-12 h-12 text-emerald-400" />,
                  title: "Quantum Computing Breakthrough",
                  description: "Pioneering quantum computing solutions for enterprise applications",
                  metrics: "Market Size: $1.2T+ by 2030"
                },
                {
                  icon: <Rocket className="w-12 h-12 text-teal-400" />,
                  title: "Space Technology Innovation",
                  description: "Revolutionary space resource mining and exploration technology",
                  metrics: "Market Size: $800B+ by 2030"
                },
                {
                  icon: <TrendingUp className="w-12 h-12 text-blue-400" />,
                  title: "Exponential Growth",
                  description: "Consistent 300%+ year-over-year revenue growth",
                  metrics: "Growth Rate: 300%+ YoY"
                },
                {
                  icon: <Globe className="w-12 h-12 text-purple-400" />,
                  title: "Global Market Reach",
                  description: "Expanding presence in 50+ countries worldwide",
                  metrics: "Global Reach: 50+ Countries"
                },
                {
                  icon: <Star className="w-12 h-12 text-yellow-400" />,
                  title: "Proven Track Record",
                  description: "Successfully delivered 100+ enterprise solutions",
                  metrics: "Success Rate: 99.9%"
                }
              ].map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 bg-black/40 border border-green-500/20 rounded-2xl hover:border-green-500/40 transition-all duration-300"
                >
                  <div className="mb-6">{highlight.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{highlight.title}</h3>
                  <p className="text-gray-400 mb-4">{highlight.description}</p>
                  <div className="text-green-400 font-semibold">{highlight.metrics}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Financial Performance */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Financial Performance
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Strong financial metrics demonstrating our growth and potential
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  metric: "$50M+",
                  label: "Annual Recurring Revenue",
                  change: "+300% YoY",
                  color: "text-green-400"
                },
                {
                  metric: "500+",
                  label: "Enterprise Customers",
                  change: "+150% YoY",
                  color: "text-emerald-400"
                },
                {
                  metric: "99.9%",
                  label: "Customer Retention Rate",
                  change: "Industry Leading",
                  color: "text-teal-400"
                },
                {
                  metric: "$2B+",
                  label: "Customer Lifetime Value",
                  change: "+400% YoY",
                  color: "text-blue-400"
                }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-8 bg-black/40 border border-green-500/20 rounded-2xl"
                >
                  <div className={`text-5xl font-bold ${stat.color} mb-2`}>{stat.metric}</div>
                  <div className="text-white font-semibold mb-2">{stat.label}</div>
                  <div className="text-green-400 text-sm">{stat.change}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Investment Opportunities */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Investment Opportunities
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Multiple ways to participate in our growth story
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {[
                {
                  title: "Series B Funding",
                  amount: "$50M",
                  description: "Expanding global operations and accelerating product development",
                  use: [
                    "International market expansion",
                    "R&D acceleration",
                    "Talent acquisition",
                    "Infrastructure scaling"
                  ],
                  timeline: "Q4 2025",
                  status: "Open"
                },
                {
                  title: "Strategic Partnership",
                  amount: "Flexible",
                  description: "Joint ventures and strategic alliances in key markets",
                  use: [
                    "Market access",
                    "Technology sharing",
                    "Joint development",
                    "Distribution networks"
                  ],
                  timeline: "Ongoing",
                  status: "Open"
                }
              ].map((opportunity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="p-8 bg-black/40 border border-green-500/20 rounded-2xl"
                >
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-white">{opportunity.title}</h3>
                    <span className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold">
                      {opportunity.status}
                    </span>
                  </div>

                  <div className="mb-6">
                    <div className="text-4xl font-bold text-green-400 mb-2">{opportunity.amount}</div>
                    <p className="text-gray-400">{opportunity.description}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Use of Funds:</h4>
                    <ul className="space-y-2">
                      {opportunity.use.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-400">
                      Timeline: <span className="text-white">{opportunity.timeline}</span>
                    </div>
                    <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-green-500/25 transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team & Leadership */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Leadership Team
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Experienced leaders driving innovation and growth
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Dr. Kleber Vasconcelos",
                  position: "Founder & CEO",
                  background: "20+ years in AI, quantum computing, and space technology",
                  expertise: ["AI Consciousness", "Quantum Computing", "Space Technology"]
                },
                {
                  name: "Sarah Chen",
                  position: "CTO",
                  background: "Former lead engineer at leading tech companies",
                  expertise: ["System Architecture", "AI Development", "Quantum Systems"]
                },
                {
                  name: "Michael Rodriguez",
                  position: "CFO",
                  background: "15+ years in financial management and growth",
                  expertise: ["Financial Strategy", "Growth Management", "Investor Relations"]
                }
              ].map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 bg-black/40 border border-green-500/20 rounded-2xl text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <div className="text-green-400 font-semibold mb-3">{member.position}</div>
                  <p className="text-gray-400 text-sm mb-4">{member.background}</p>
                  <div className="space-y-2">
                    {member.expertise.map((skill, idx) => (
                      <div key={idx} className="text-xs text-gray-300 bg-gray-800/50 px-2 py-1 rounded-full inline-block mx-1">
                        {skill}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Get in Touch
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Ready to discuss investment opportunities? Contact our team
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Phone className="w-8 h-8 text-green-400" />,
                  title: "Call Us",
                  contact: "+1 302 464 0950",
                  description: "Speak directly with our leadership team"
                },
                {
                  icon: <Mail className="w-8 h-8 text-emerald-400" />,
                  title: "Email Us",
                  contact: "kleber@ziontechgroup.com",
                  description: "Send us your investment inquiry"
                },
                {
                  icon: <MapPin className="w-8 h-8 text-teal-400" />,
                  title: "Visit Us",
                  contact: "364 E Main St STE 1008, Middletown DE 19709",
                  description: "Schedule an in-person meeting"
                }
              ].map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 bg-black/40 border border-green-500/20 rounded-2xl"
                >
                  <div className="mb-4">{method.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{method.title}</h3>
                  <div className="text-green-400 font-semibold mb-2">{method.contact}</div>
                  <p className="text-gray-400 text-sm">{method.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Invest in the Future?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Join us in revolutionizing technology and creating unprecedented value
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-green-500/25 transition-all duration-300 flex items-center gap-2">
                  Download Investment Deck
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-8 py-4 border border-green-500/30 text-green-300 rounded-2xl hover:bg-green-500/10 transition-all duration-300">
                  Schedule Investment Call
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Investors;