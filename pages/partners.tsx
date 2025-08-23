import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Handshake, Users, Globe, Award, 
  TrendingUp, Zap, CheckCircle, Mail,
  Send, Building, Star, Target
} from 'lucide-react';
import SEO from '../components/SEO';
import Layout from '../components/layout/Layout';

const PartnersPage: React.FC = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    partnershipType: '',
    description: '',
    website: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        companyName: '',
        contactName: '',
        email: '',
        phone: '',
        partnershipType: '',
        description: '',
        website: ''
      });
    }, 5000);
  };

  const partnershipTypes = [
    'Technology Partner',
    'Reseller Partner',
    'System Integrator',
    'Consulting Partner',
    'Channel Partner',
    'Strategic Alliance',
    'Research Partner',
    'Other'
  ];

  const partnershipBenefits = [
    {
      title: 'Revenue Growth',
      description: 'Access to our innovative technology portfolio and customer base for mutual revenue growth.',
      icon: <TrendingUp className="w-12 h-12 text-green-400" />
    },
    {
      title: 'Technology Access',
      description: 'Early access to cutting-edge AI, quantum computing, and space technology solutions.',
      icon: <Zap className="w-12 h-12 text-yellow-400" />
    },
    {
      title: 'Market Expansion',
      description: 'Expand your market reach with our global presence and industry expertise.',
      icon: <Globe className="w-12 h-12 text-blue-400" />
    },
    {
      title: 'Joint Innovation',
      description: 'Collaborate on research and development projects to create breakthrough solutions.',
      icon: <Award className="w-12 h-12 text-purple-400" />
    }
  ];

  const partnerCategories = [
    {
      title: 'Technology Partners',
      description: 'Companies that provide complementary technologies or platforms that enhance our solutions.',
      benefits: [
        'API access and integration support',
        'Joint go-to-market strategies',
        'Technical collaboration and support',
        'Revenue sharing opportunities'
      ]
    },
    {
      title: 'Reseller Partners',
      description: 'Organizations that sell our solutions to their customers with added value services.',
      benefits: [
        'Competitive pricing and margins',
        'Sales and technical training',
        'Marketing support and materials',
        'Dedicated partner success manager'
      ]
    },
    {
      title: 'System Integrators',
      description: 'Partners who implement and customize our solutions for enterprise customers.',
      benefits: [
        'Implementation training and certification',
        'Custom development support',
        'Joint project delivery',
        'Technical expertise sharing'
      ]
    },
    {
      title: 'Consulting Partners',
      description: 'Advisory firms that help customers implement and optimize our technology solutions.',
      benefits: [
        'Solution architecture training',
        'Best practices and methodologies',
        'Joint customer engagements',
        'Thought leadership opportunities'
      ]
    }
  ];

  const successStories = [
    {
      company: 'TechFlow Solutions',
      partnership: 'Technology Partner',
      description: 'Successfully integrated our AI platform with their workflow automation tools, resulting in 40% efficiency gains for joint customers.',
      logo: 'TF'
    },
    {
      company: 'Global Systems Inc.',
      partnership: 'Reseller Partner',
      description: 'Achieved 200% revenue growth in their first year by selling our quantum computing solutions to financial services clients.',
      logo: 'GSI'
    },
    {
      company: 'InnovateCorp',
      partnership: 'System Integrator',
      description: 'Delivered complex AI implementations for Fortune 500 companies, establishing us as a leader in enterprise AI solutions.',
      logo: 'IC'
    }
  ];

  return (
    <Layout>
      <SEO 
        title="Partners | Zion Tech Group"
        description="Partner with Zion Tech Group to expand your business with cutting-edge AI, quantum computing, and space technology solutions. Explore partnership opportunities and benefits."
        keywords={["partners", "partnership", "Zion Tech Group", "technology partners", "reseller partners", "system integrators", "consulting partners"]}
      />

      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Partner With Us
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/80 mb-8 max-w-4xl mx-auto">
                Join our ecosystem of innovative partners and together, let's transform the future of technology. 
                Access cutting-edge solutions, expand your market reach, and drive mutual success.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full px-4 py-2">
                  <Handshake className="w-5 h-5 text-cyan-400" />
                  <span className="text-white">Strategic Partnerships</span>
                </div>
                <div className="flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full px-4 py-2">
                  <TrendingUp className="w-5 h-5 text-purple-400" />
                  <span className="text-white">Growth Opportunities</span>
                </div>
                <div className="flex items-center space-x-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 rounded-full px-4 py-2">
                  <Globe className="w-5 h-5 text-indigo-400" />
                  <span className="text-white">Global Reach</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Partnership Benefits */}
        <section className="py-16 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Why Partner With Zion Tech Group?</h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Our partnerships are built on mutual success, innovation, and shared vision for the future of technology.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partnershipBenefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
                >
                  <div className="flex justify-center mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{benefit.title}</h3>
                  <p className="text-white/70">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partner Categories */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Partnership Categories</h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                We offer various partnership models to fit your business needs and strategic objectives.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {partnerCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold mb-4 text-cyan-400">{category.title}</h3>
                  <p className="text-white/80 mb-6">{category.description}</p>
                  
                  <h4 className="text-lg font-semibold mb-3 text-white">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {category.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-white/70">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-16 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Partner Success Stories</h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                See how our partners have achieved remarkable success by collaborating with Zion Tech Group.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {successStories.map((story, index) => (
                <motion.div
                  key={story.company}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                      {story.logo}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{story.company}</h3>
                      <span className="text-sm text-cyan-400">{story.partnership}</span>
                    </div>
                  </div>
                  
                  <p className="text-white/70 text-sm">{story.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Application */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Become a Partner</h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Ready to join our partner ecosystem? Tell us about your company and how we can work together.
              </p>
            </motion.div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center p-8 bg-gradient-to-br from-green-900/20 to-green-800/20 border border-green-500/30 rounded-xl"
              >
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Application Submitted!</h3>
                <p className="text-white/70">
                  Thank you for your interest in partnering with us. We'll review your application and get back to you within 48 hours.
                </p>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-xl border border-white/10 p-8"
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="companyName" className="block text-sm font-medium text-white/80 mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                        placeholder="Enter your company name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="contactName" className="block text-sm font-medium text-white/80 mb-2">
                        Contact Name *
                      </label>
                      <input
                        type="text"
                        id="contactName"
                        name="contactName"
                        value={formData.contactName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                        placeholder="Enter contact person's name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                        placeholder="Enter your email address"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="partnershipType" className="block text-sm font-medium text-white/80 mb-2">
                      Partnership Type *
                    </label>
                    <select
                      id="partnershipType"
                      name="partnershipType"
                      value={formData.partnershipType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                    >
                      <option value="">Select partnership type</option>
                      {partnershipTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="website" className="block text-sm font-medium text-white/80 mb-2">
                      Company Website
                    </label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                      placeholder="Enter your company website"
                    />
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-white/80 mb-2">
                      Partnership Proposal *
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent resize-none"
                      placeholder="Describe your company, partnership goals, and how we can work together..."
                    />
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Submit Partnership Application
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </motion.div>
            )}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Questions About Partnership?</h2>
              <p className="text-xl text-white/70 mb-8 max-w-3xl mx-auto">
                Our partnership team is here to help. Reach out to learn more about our partnership programs and opportunities.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Our Partnership Team
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default PartnersPage;