import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Handshake, 
  Users, 
  Globe, 
  Award, 
  Zap, 
  Rocket, 
  Shield, 
  Star,
  CheckCircle,
  ArrowRight,
  Send,
  Building,
  Target,
  TrendingUp,
  Lightbulb,
  Network
} from 'lucide-react';

export default function Partners() {
  const [selectedPartnershipType, setSelectedPartnershipType] = useState('all');
  const [selectedIndustry, setSelectedIndustry] = useState('all');

  const partnershipTypes = [
    { id: 'all', name: 'All Types', icon: <Handshake className="w-5 h-5" /> },
    { id: 'technology', name: 'Technology Partners', icon: <Zap className="w-5 h-5" /> },
    { id: 'reseller', name: 'Reseller Partners', icon: <Users className="w-5 h-5" /> },
    { id: 'consulting', name: 'Consulting Partners', icon: <Building className="w-5 h-5" /> },
    { id: 'research', name: 'Research Partners', icon: <Lightbulb className="w-5 h-5" /> },
    { id: 'strategic', name: 'Strategic Partners', icon: <Target className="w-5 h-5" /> }
  ];

  const industries = [
    { id: 'all', name: 'All Industries', icon: <Globe className="w-5 h-5" /> },
    { id: 'healthcare', name: 'Healthcare', icon: <Shield className="w-5 h-5" /> },
    { id: 'finance', name: 'Financial Services', icon: <TrendingUp className="w-5 h-5" /> },
    { id: 'manufacturing', name: 'Manufacturing', icon: <Rocket className="w-5 h-5" /> },
    { id: 'government', name: 'Government', icon: <Building className="w-5 h-5" /> },
    { id: 'education', name: 'Education', icon: <Lightbulb className="w-5 h-5" /> }
  ];

  const partnershipPrograms = [
    {
      id: 1,
      type: 'technology',
      industry: 'all',
      title: 'Technology Integration Partner',
      description: 'Integrate our AI and quantum solutions into your existing technology stack.',
      benefits: [
        'Access to cutting-edge AI and quantum technologies',
        'Technical support and integration assistance',
        'Joint go-to-market initiatives',
        'Revenue sharing on integrated solutions'
      ],
      requirements: [
        'Established technology company',
        'Technical expertise in relevant domains',
        'Customer base in target markets',
        'Commitment to innovation and quality'
      ],
      icon: <Zap className="w-8 h-8" />,
      color: 'text-cyan-400'
    },
    {
      id: 2,
      type: 'reseller',
      industry: 'all',
      title: 'Reseller Partnership',
      description: 'Resell our solutions to your customers with competitive margins and support.',
      benefits: [
        'Competitive pricing and margins',
        'Marketing and sales support',
        'Training and certification programs',
        'Dedicated partner success manager'
      ],
      requirements: [
        'Proven sales and marketing capabilities',
        'Established customer relationships',
        'Technical support infrastructure',
        'Commitment to customer success'
      ],
      icon: <Users className="w-8 h-8" />,
      color: 'text-purple-400'
    },
    {
      id: 3,
      type: 'consulting',
      industry: 'all',
      title: 'Consulting Partnership',
      description: 'Leverage our expertise to enhance your consulting services and offerings.',
      benefits: [
        'Access to our technology experts',
        'Joint consulting engagements',
        'Shared intellectual property',
        'Enhanced service portfolio'
      ],
      requirements: [
        'Established consulting practice',
        'Domain expertise in target industries',
        'Strong client relationships',
        'Commitment to excellence'
      ],
      icon: <Building className="w-8 h-8" />,
      color: 'text-blue-400'
    },
    {
      id: 4,
      type: 'research',
      industry: 'all',
      title: 'Research Collaboration',
      description: 'Collaborate on cutting-edge research in AI, quantum computing, and space technology.',
      benefits: [
        'Joint research initiatives',
        'Access to research facilities',
        'Publication and patent opportunities',
        'Academic and industry connections'
      ],
      requirements: [
        'Research capabilities and track record',
        'Alignment with our research areas',
        'Commitment to open collaboration',
        'Intellectual property framework'
      ],
      icon: <Lightbulb className="w-8 h-8" />,
      color: 'text-green-400'
    },
    {
      id: 5,
      type: 'strategic',
      industry: 'all',
      title: 'Strategic Alliance',
      description: 'Form strategic alliances for joint ventures and market expansion.',
      benefits: [
        'Joint venture opportunities',
        'Market expansion support',
        'Shared resources and expertise',
        'Long-term strategic planning'
      ],
      requirements: [
        'Strategic alignment with our vision',
        'Complementary capabilities',
        'Long-term commitment',
        'Strong leadership and execution'
      ],
      icon: <Target className="w-8 h-8" />,
      color: 'text-orange-400'
    }
  ];

  const filteredPrograms = partnershipPrograms.filter(program => {
    const typeMatch = selectedPartnershipType === 'all' || program.type === selectedPartnershipType;
    const industryMatch = selectedIndustry === 'all' || program.industry === selectedIndustry;
    return typeMatch && industryMatch;
  });

  const benefits = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Reach',
      description: 'Access to our global network of clients and markets.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Premium Support',
      description: 'Dedicated partner success managers and technical support.'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Revenue Growth',
      description: 'New revenue streams and business opportunities.'
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: 'Network Access',
      description: 'Connect with other partners and industry leaders.'
    }
  ];

  const successStories = [
    {
      company: 'TechCorp Solutions',
      industry: 'Technology Consulting',
      partnership: 'Technology Integration',
      result: 'Increased revenue by 40% through joint AI solutions',
      testimonial: 'Partnering with Zion Tech Group has transformed our service offerings and opened new markets for us.'
    },
    {
      company: 'Quantum Dynamics',
      industry: 'Research & Development',
      partnership: 'Research Collaboration',
      result: 'Published 5 joint research papers and secured 2 patents',
      testimonial: 'The collaboration has accelerated our research and expanded our capabilities significantly.'
    },
    {
      company: 'Global Systems Inc.',
      industry: 'Enterprise Solutions',
      partnership: 'Reseller Partnership',
      result: 'Expanded customer base by 60% in first year',
      testimonial: 'Zion Tech Group\'s support and technology have been instrumental in our growth.'
    }
  ];

  return (
    <>
      <Head>
        <title>Partnerships - Zion Tech Group | Partner With Us</title>
        <meta name="description" content="Partner with Zion Tech Group to leverage our AI, quantum computing, and space technology solutions. Explore partnership opportunities and grow your business." />
        <meta name="keywords" content="partnerships Zion Tech Group, technology partners, reseller partners, consulting partners, strategic alliances" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com/partners" />
        <meta property="og:title" content="Partnerships - Zion Tech Group" />
        <meta property="og:description" content="Partner with Zion Tech Group to leverage our AI, quantum computing, and space technology solutions." />
        <meta property="og:url" content="https://ziontechgroup.com/partners" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Partnerships - Zion Tech Group" />
        <meta name="twitter:description" content="Partner with Zion Tech Group to leverage our AI, quantum computing, and space technology solutions." />
      </Head>

      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-pink-900/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Partner With Us
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Join forces with Zion Tech Group to revolutionize technology and create unprecedented value for your customers. Together, we can shape the future of AI, quantum computing, and space technology.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="#partnership-programs" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Explore Partnerships
                </a>
                <a href="/contact" className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-300">
                  Get in Touch
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Partner Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                Why Partner With Zion Tech Group?
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                We offer unique partnership opportunities that combine cutting-edge technology with proven business models to drive mutual success.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-gradient-to-br from-white/5 to-white/10 rounded-xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
                >
                  <div className="flex justify-center mb-4 text-cyan-400">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Programs Section */}
        <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50" id="partnership-programs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                Partnership Programs
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Choose the partnership model that best fits your business goals and capabilities. We offer flexible programs designed for mutual success.
              </p>
            </motion.div>

            {/* Filters */}
            <div className="mb-8 flex flex-wrap gap-4 justify-center">
              <div className="flex flex-wrap gap-2">
                {partnershipTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedPartnershipType(type.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                      selectedPartnershipType === type.id
                        ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400'
                        : 'bg-white/5 border-white/20 text-gray-300 hover:border-cyan-500/30 hover:text-cyan-400'
                    }`}
                  >
                    {type.icon}
                    <span>{type.name}</span>
                  </button>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {industries.map((industry) => (
                  <button
                    key={industry.id}
                    onClick={() => setSelectedIndustry(industry.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                      selectedIndustry === industry.id
                        ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400'
                        : 'bg-white/5 border-white/20 text-gray-300 hover:border-cyan-500/30 hover:text-cyan-400'
                    }`}
                  >
                    {industry.icon}
                    <span>{industry.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Program Cards */}
            <div className="grid md:grid-cols-2 gap-8">
              {filteredPrograms.map((program, index) => (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 p-6"
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center ${program.color}`}>
                      {program.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {program.title}
                      </h3>
                      <p className="text-gray-300">
                        {program.description}
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-white mb-3">Benefits:</h4>
                      <ul className="space-y-2">
                        {program.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-400">
                            <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-3">Requirements:</h4>
                      <ul className="space-y-2">
                        {program.requirements.map((requirement, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-400">
                            <Star className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                            <span>{requirement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <a
                    href={`/contact?partnership=${encodeURIComponent(program.title)}`}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </motion.div>
              ))}
            </div>

            {filteredPrograms.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <p className="text-gray-400 text-lg">
                  No partnership programs match your current filters. Try adjusting your selection or contact us to discuss custom partnership opportunities.
                </p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                Partner Success Stories
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                See how our partners have grown their businesses and expanded their capabilities through strategic partnerships with Zion Tech Group.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {successStories.map((story, index) => (
                <motion.div
                  key={story.company}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 p-6"
                >
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {story.company}
                    </h3>
                    <p className="text-cyan-400 text-sm mb-2">
                      {story.industry}
                    </p>
                    <p className="text-gray-400 text-sm">
                      Partnership: {story.partnership}
                    </p>
                  </div>

                  <div className="mb-4 p-3 bg-green-500/20 border border-green-500/30 rounded-lg">
                    <p className="text-green-400 text-sm font-medium">
                      Result: {story.result}
                    </p>
                  </div>

                  <blockquote className="text-gray-300 text-sm italic">
                    "{story.testimonial}"
                  </blockquote>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Process Section */}
        <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                How to Become a Partner
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Our partnership process is designed to ensure mutual success and long-term collaboration.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Initial Contact',
                  description: 'Reach out to discuss partnership opportunities and alignment.',
                  icon: <Send className="w-8 h-8" />
                },
                {
                  step: '02',
                  title: 'Assessment',
                  description: 'We evaluate mutual fit and explore collaboration opportunities.',
                  icon: <Target className="w-8 h-8" />
                },
                {
                  step: '03',
                  title: 'Agreement',
                  description: 'Define partnership terms, goals, and success metrics.',
                  icon: <Handshake className="w-8 h-8" />
                },
                {
                  step: '04',
                  title: 'Launch',
                  description: 'Begin partnership activities with full support and resources.',
                  icon: <Rocket className="w-8 h-8" />
                }
              ].map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                    {step.icon}
                  </div>
                  <div className="text-2xl font-bold text-cyan-400 mb-2">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {step.title}
                  </h3>
                  <p className="text-gray-400">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                Ready to Partner With Us?
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
                Join our network of successful partners and help us revolutionize technology while growing your business. Let's discuss how we can create value together.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Start Partnership Discussion
                </a>
                <a href="/about" className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-300">
                  Learn More About Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}