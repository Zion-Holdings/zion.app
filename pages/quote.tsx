import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calculator, FileText, Send, CheckCircle, 
  ArrowRight, Brain, Atom, Rocket, Shield, 
  Zap, Globe, Users, DollarSign, Clock,
  Mail, Phone, MapPin, Building, Target
} from 'lucide-react';

export default function Quote() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectDescription: '',
    timeline: '',
    budget: '',
    teamSize: ''
  });

  const serviceCategories = [
    {
      name: 'AI & Machine Learning',
      icon: <Brain className="w-6 h-6" />,
      services: [
        'AI Consciousness Development',
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision Systems',
        'Predictive Analytics',
        'AI Automation'
      ],
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/30'
    },
    {
      name: 'Quantum Computing',
      icon: <Atom className="w-6 h-6" />,
      services: [
        'Quantum Algorithms',
        'Quantum Cryptography',
        'Quantum Machine Learning',
        'Quantum Simulation',
        'Post-Quantum Security',
        'Quantum Cloud Infrastructure'
      ],
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30'
    },
    {
      name: 'Autonomous Systems',
      icon: <Rocket className="w-6 h-6" />,
      services: [
        'Business Process Automation',
        'DevOps Automation',
        'Infrastructure Automation',
        'Security Automation',
        'Data Pipeline Automation',
        'Customer Success Automation'
      ],
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30'
    },
    {
      name: 'Enterprise Solutions',
      icon: <Building className="w-6 h-6" />,
      services: [
        'Cloud Infrastructure',
        'Cybersecurity Platforms',
        'Data Management',
        'API Development',
        'Microservices Architecture',
        'Legacy System Modernization'
      ],
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30'
    }
  ];

  const timelineOptions = [
    { value: 'immediate', label: 'Immediate (1-2 weeks)', description: 'Urgent project requiring immediate attention' },
    { value: '1-3-months', label: '1-3 months', description: 'Standard project timeline' },
    { value: '3-6-months', label: '3-6 months', description: 'Complex project with multiple phases' },
    { value: '6+months', label: '6+ months', description: 'Long-term strategic initiative' }
  ];

  const budgetRanges = [
    { value: 'under-50k', label: 'Under $50K', description: 'Small to medium projects' },
    { value: '50k-100k', label: '$50K - $100K', description: 'Medium complexity projects' },
    { value: '100k-500k', label: '$100K - $500K', description: 'Large enterprise projects' },
    { value: '500k+', label: '$500K+', description: 'Strategic initiatives and transformations' }
  ];

  const teamSizeOptions = [
    { value: '1-5', label: '1-5 people', description: 'Small team or startup' },
    { value: '6-25', label: '6-25 people', description: 'Growing company' },
    { value: '26-100', label: '26-100 people', description: 'Medium enterprise' },
    { value: '100+', label: '100+ people', description: 'Large enterprise' }
  ];

  const handleServiceToggle = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service) 
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', { ...formData, selectedServices });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-pink-900/20" />
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              Get Your Quote
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Ready to transform your business with AI consciousness, quantum computing, 
              and autonomous systems? Let's discuss your project and get you a detailed quote.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2 text-cyan-400">
                <Calculator className="w-6 h-6" />
                <span>Custom Pricing</span>
              </div>
              <div className="flex items-center gap-2 text-purple-400">
                <FileText className="w-6 h-6" />
                <span>Detailed Proposal</span>
              </div>
              <div className="flex items-center gap-2 text-green-400">
                <Clock className="w-6 h-6" />
                <span>24h Response</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Selection */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Select Your Services
            </h2>
            <p className="text-xl text-gray-400">Choose the services you need for your project</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="p-6 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-gray-800/50"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={category.color}>{category.icon}</div>
                  <h3 className="text-xl font-bold text-white">{category.name}</h3>
                </div>
                
                <div className="space-y-3">
                  {category.services.map((service) => (
                    <label key={service} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={selectedServices.includes(service)}
                        onChange={() => handleServiceToggle(service)}
                        className="w-5 h-5 text-cyan-500 bg-gray-800 border-gray-600 rounded focus:ring-cyan-500 focus:ring-2"
                      />
                      <span className="text-gray-300 group-hover:text-white transition-colors duration-200">
                        {service}
                      </span>
                    </label>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Project Details
            </h2>
            <p className="text-xl text-gray-400">Tell us about your project and requirements</p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-br from-gray-900/30 to-black/30 rounded-2xl p-8 border border-gray-800/50"
              >
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <Users className="w-6 h-6 text-cyan-400" />
                  Contact Information
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                      placeholder="Enter your email address"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Company Name</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                      placeholder="Enter your company name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Project Details */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="bg-gradient-to-br from-gray-900/30 to-black/30 rounded-2xl p-8 border border-gray-800/50"
              >
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <Target className="w-6 h-6 text-purple-400" />
                  Project Details
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Project Description *</label>
                    <textarea
                      required
                      rows={6}
                      value={formData.projectDescription}
                      onChange={(e) => handleInputChange('projectDescription', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                      placeholder="Describe your project, goals, and requirements in detail..."
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Timeline *</label>
                      <select
                        required
                        value={formData.timeline}
                        onChange={(e) => handleInputChange('timeline', e.target.value)}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                      >
                        <option value="">Select timeline</option>
                        {timelineOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Budget Range *</label>
                      <select
                        required
                        value={formData.budget}
                        onChange={(e) => handleInputChange('budget', e.target.value)}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                      >
                        <option value="">Select budget</option>
                        {budgetRanges.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Team Size</label>
                      <select
                        value={formData.teamSize}
                        onChange={(e) => handleInputChange('teamSize', e.target.value)}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                      >
                        <option value="">Select team size</option>
                        {teamSizeOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Selected Services Summary */}
              {selectedServices.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 border border-cyan-500/20"
                >
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                    <CheckCircle className="w-6 h-6 text-cyan-400" />
                    Selected Services
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    {selectedServices.map((service) => (
                      <div key={service} className="flex items-center gap-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400" />
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-center"
              >
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-12 py-4 rounded-2xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 text-lg"
                >
                  <Send className="w-5 h-5" />
                  Get Your Quote
                </button>
                <p className="text-gray-400 mt-4 text-sm">
                  We'll respond within 24 hours with a detailed proposal
                </p>
              </motion.div>
            </form>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-400">Leading the revolution in AI consciousness and quantum computing</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Brain className="w-8 h-8 text-cyan-400" />,
                title: 'AI Pioneers',
                description: 'Leading research in AI consciousness and emotional intelligence'
              },
              {
                icon: <Atom className="w-8 h-8 text-purple-400" />,
                title: 'Quantum Experts',
                description: 'Cutting-edge quantum computing and cryptography solutions'
              },
              {
                icon: <Rocket className="w-8 h-8 text-green-400" />,
                title: 'Autonomous Systems',
                description: 'Building self-managing and self-optimizing business systems'
              },
              {
                icon: <Shield className="w-8 h-8 text-blue-400" />,
                title: 'Enterprise Grade',
                description: 'Production-ready solutions with enterprise security and compliance'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center p-6 bg-gradient-to-br from-gray-900/30 to-black/30 rounded-2xl border border-gray-800/50 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Have questions or need to discuss your project in detail? 
              Our team is here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300"
              >
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/services"
                className="inline-flex items-center gap-2 border border-cyan-500/30 text-cyan-400 px-8 py-4 rounded-2xl font-semibold hover:bg-cyan-500/10 transition-all duration-300"
              >
                Explore Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}