import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Play, 
  Calendar, 
  Clock, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Brain,
  Atom,
  Rocket,
  Shield,
  Zap,
  Globe,
  Video,
  Phone,
  Mail
} from 'lucide-react';
import Link from 'next/link';

const DemoPage: React.FC = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [demoType, setDemoType] = useState('virtual');
  const [companySize, setCompanySize] = useState('');

  const services = [
    {
      id: 'ai-automation',
      name: 'AI & Automation',
      description: 'Intelligent automation solutions for business processes',
      icon: <Brain className="w-6 h-6" />,
      category: 'ai'
    },
    {
      id: 'quantum-computing',
      name: 'Quantum Computing',
      description: 'Next-generation computing power and algorithms',
      icon: <Atom className="w-6 h-6" />,
      category: 'quantum'
    },
    {
      id: 'space-technology',
      name: 'Space Technology',
      description: 'Space exploration and resource mining solutions',
      icon: <Rocket className="w-6 h-6" />,
      category: 'space'
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity',
      description: 'Advanced threat detection and protection',
      icon: <Shield className="w-6 h-6" />,
      category: 'security'
    },
    {
      id: 'cloud-infrastructure',
      name: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions',
      icon: <Globe className="w-6 h-6" />,
      category: 'cloud'
    },
    {
      id: 'enterprise-it',
      name: 'Enterprise IT',
      description: 'Comprehensive IT infrastructure solutions',
      icon: <Zap className="w-6 h-6" />,
      category: 'enterprise'
    }
  ];

  const demoTypes = [
    {
      id: 'virtual',
      name: 'Virtual Demo',
      description: 'Interactive online demonstration',
      icon: <Video className="w-6 h-6" />,
      duration: '45-60 minutes'
    },
    {
      id: 'onsite',
      name: 'On-Site Demo',
      description: 'In-person demonstration at your location',
      icon: <Users className="w-6 h-6" />,
      duration: '2-3 hours'
    },
    {
      id: 'custom',
      name: 'Custom Workshop',
      description: 'Tailored workshop for your team',
      icon: <Brain className="w-6 h-6" />,
      duration: '4-6 hours'
    }
  ];

  const companySizes = [
    { value: 'startup', label: 'Startup (1-50 employees)' },
    { value: 'small', label: 'Small Business (51-200 employees)' },
    { value: 'medium', label: 'Medium Business (201-1000 employees)' },
    { value: 'large', label: 'Large Enterprise (1000+ employees)' }
  ];

  const handleServiceToggle = (serviceId: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-black">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6"
          >
            See Our Solutions in Action
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Experience firsthand how our cutting-edge AI, quantum computing, and space technology solutions can transform your business.
          </motion.p>
        </div>
      </section>

      {/* Demo Types */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Choose Your Demo Experience</h2>
            <p className="text-xl text-gray-300">
              Select the type of demonstration that works best for your team
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {demoTypes.map((type, index) => (
              <motion.div
                key={type.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`text-center p-8 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  demoType === type.id
                    ? 'bg-blue-600/20 border-blue-500/50'
                    : 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10'
                }`}
                onClick={() => setDemoType(type.id)}
              >
                <div className="bg-blue-600/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="text-blue-400">
                    {type.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{type.name}</h3>
                <p className="text-gray-300 mb-4">{type.description}</p>
                <div className="flex items-center justify-center gap-2 text-blue-400">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{type.duration}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Selection */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Select Services to Demo</h2>
            <p className="text-xl text-gray-300">
              Choose which solutions you'd like to see demonstrated
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  selectedServices.includes(service.id)
                    ? 'bg-blue-600/20 border-blue-500/50'
                    : 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10'
                }`}
                onClick={() => handleServiceToggle(service.id)}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600/20 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="text-blue-400">
                      {service.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-300 text-sm">{service.description}</p>
                  </div>
                  {selectedServices.includes(service.id) && (
                    <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0" />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Request Form */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Request Your Demo</h2>
            <p className="text-xl text-gray-300">
              Tell us about your needs and we'll schedule a personalized demonstration
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="firstName" className="block text-white font-semibold mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your first name"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-white font-semibold mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="email" className="block text-white font-semibold mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your email address"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-white font-semibold mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="company" className="block text-white font-semibold mb-2">
                  Company *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your company name"
                />
              </div>
              <div>
                <label htmlFor="companySize" className="block text-white font-semibold mb-2">
                  Company Size *
                </label>
                <select
                  id="companySize"
                  name="companySize"
                  value={companySize}
                  onChange={(e) => setCompanySize(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select company size</option>
                  {companySizes.map((size) => (
                    <option key={size.value} value={size.value}>
                      {size.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="jobTitle" className="block text-white font-semibold mb-2">
                Job Title
              </label>
              <input
                type="text"
                id="jobTitle"
                name="jobTitle"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your job title"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="useCase" className="block text-white font-semibold mb-2">
                Primary Use Case *
              </label>
              <textarea
                id="useCase"
                name="useCase"
                rows={4}
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                placeholder="Describe your primary use case or the problem you're trying to solve..."
              />
            </div>

            <div className="mb-6">
              <label htmlFor="timeline" className="block text-white font-semibold mb-2">
                Implementation Timeline
              </label>
              <select
                id="timeline"
                name="timeline"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select timeline</option>
                <option value="immediate">Immediate (0-3 months)</option>
                <option value="short">Short term (3-6 months)</option>
                <option value="medium">Medium term (6-12 months)</option>
                <option value="long">Long term (12+ months)</option>
                <option value="exploring">Just exploring options</option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="additionalInfo" className="block text-white font-semibold mb-2">
                Additional Information
              </label>
              <textarea
                id="additionalInfo"
                name="additionalInfo"
                rows={3}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                placeholder="Any additional information that would help us prepare for your demo..."
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                <Play className="w-5 h-5 mr-2" />
                Request Demo
              </button>
            </div>
          </motion.form>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">What to Expect</h2>
            <p className="text-xl text-gray-300">
              Your demo experience will be tailored to your specific needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Calendar className="w-8 h-8" />,
                title: "Personalized Setup",
                description: "We'll prepare a custom demo based on your selected services and use cases"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Expert Team",
                description: "Meet with our solution architects and technical experts"
              },
              {
                icon: <Play className="w-8 h-8" />,
                title: "Interactive Demo",
                description: "See real-time demonstrations of our solutions in action"
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "Next Steps",
                description: "Get a clear roadmap for implementation and next steps"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-blue-600/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600/30 transition-colors">
                  <div className="text-blue-400">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Questions About Our Demo?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our team is here to help you get the most out of your demonstration
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <div className="flex items-center gap-3 text-blue-400">
                <Phone className="w-5 h-5" />
                <span>+1 (800) ZION-TECH</span>
              </div>
              <div className="flex items-center gap-3 text-purple-400">
                <Mail className="w-5 h-5" />
                <span>demo@ziontechgroup.com</span>
              </div>
            </div>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                Contact our team directly
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default DemoPage;