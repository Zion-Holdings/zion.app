import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Brain, Shield, Target, Building, Cpu, 
  ArrowRight, Check, Star, TrendingUp, Zap,
  Globe, Lock, ChartBar, Rocket, Users
} from 'lucide-react';

// Import our new innovative services
import { innovativeAIEnterpriseServices2025 } from '../data/2025-innovative-ai-enterprise-services';
import { innovativeITInfrastructureEnterpriseServices2025 } from '../data/2025-innovative-it-infrastructure-enterprise';
import { innovativeMicroSaasEnterpriseServices2025 } from '../data/2025-innovative-micro-saas-enterprise';
import { innovativeCybersecurityServices2025 } from '../data/2025-innovative-cybersecurity-services';
import { innovativeDataAnalyticsServices2025 } from '../data/2025-innovative-data-analytics-services';

const InnovativeServicesShowcase2025 = () => {
  const allNewServices = [
    ...innovativeAIEnterpriseServices2025,
    ...innovativeITInfrastructureEnterpriseServices2025,
    ...innovativeMicroSaasEnterpriseServices2025,
    ...innovativeCybersecurityServices2025,
    ...innovativeDataAnalyticsServices2025
  ];

  const serviceCategories = [
    {
      name: 'AI Enterprise Services',
      icon: <Brain className="w-8 h-8" />,
      color: 'from-blue-600 to-purple-600',
      services: innovativeAIEnterpriseServices2025
    },
    {
      name: 'IT Infrastructure',
      icon: <Building className="w-8 h-8" />,
      color: 'from-indigo-600 to-purple-600',
      services: innovativeITInfrastructureEnterpriseServices2025
    },
    {
      name: 'Micro SAAS Solutions',
      icon: <Target className="w-8 h-8" />,
      color: 'from-green-600 to-emerald-600',
      services: innovativeMicroSaasEnterpriseServices2025
    },
    {
      name: 'Cybersecurity',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-red-600 to-orange-600',
      services: innovativeCybersecurityServices2025
    },
    {
      name: 'Data Analytics',
      icon: <ChartBar className="w-8 h-8" />,
      color: 'from-cyan-600 to-blue-600',
      services: innovativeDataAnalyticsServices2025
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <SEO 
        title="2025 Innovative Services Showcase | Zion Tech Group"
        description="Discover our comprehensive portfolio of innovative AI, IT infrastructure, micro SAAS, cybersecurity, and data analytics services designed for the future of business."
        keywords={["AI services", "IT infrastructure", "micro SAAS", "cybersecurity", "data analytics", "enterprise solutions", "2025"]}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              2025 Innovative Services
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Showcase
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Discover our comprehensive portfolio of cutting-edge AI, IT infrastructure, micro SAAS, 
              cybersecurity, and data analytics services designed to transform your business
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>25+ New Services</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span>Market Leading</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Zap className="w-4 h-4 text-blue-400" />
                <span>AI-Powered</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-white py-12 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Business?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Website</h3>
                <a 
                  href="https://ziontechgroup.com" 
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ziontechgroup.com
                </a>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Contact</h3>
                <a 
                  href="mailto:kleber@ziontechgroup.com"
                  className="text-green-600 hover:text-green-800 transition-colors"
                >
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Rocket className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                <a 
                  href="tel:+13024640950"
                  className="text-purple-600 hover:text-purple-800 transition-colors"
                >
                  +1 302 464 0950
                </a>
              </div>
            </div>
            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-600">
                <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      {serviceCategories.map((category, categoryIndex) => (
        <section key={category.name} className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${category.color} text-white mb-6`}>
                {category.icon}
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {category.name}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Cutting-edge solutions designed to drive innovation and growth in your organization
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {category.services.map((service, serviceIndex) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
                >
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="text-4xl">{service.icon}</div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-gray-900">{service.price}</div>
                        <div className="text-gray-500">{service.period}</div>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <Check className="w-5 h-5 text-green-500" />
                        Key Features
                      </h4>
                      <div className="grid grid-cols-1 gap-2">
                        {service.features.slice(0, 5).map((feature, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                      <div>
                        <span className="text-gray-500">Market Size:</span>
                        <div className="font-semibold text-gray-900">{service.marketSize}</div>
                      </div>
                      <div>
                        <span className="text-gray-500">Growth Rate:</span>
                        <div className="font-semibold text-green-600">{service.growthRate}</div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">ROI Benefits</h4>
                      <p className="text-sm text-gray-600 bg-blue-50 p-3 rounded-lg">
                        {service.roi}
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'fill-current' : ''}`} 
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">
                          {service.rating} ({service.reviews} reviews)
                        </span>
                      </div>
                      <a
                        href={service.link}
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Market Overview */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Market Overview & Competitive Advantage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our services are positioned at the forefront of innovation, addressing the most pressing 
              business challenges with cutting-edge technology solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Market Growth</h3>
              <p className="text-gray-600 mb-4">
                Our services address markets with 20-35% annual growth rates, positioning clients 
                for exponential success in rapidly expanding sectors
              </p>
              <div className="text-3xl font-bold text-blue-600">25%+ CAGR</div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Technology Leadership</h3>
              <p className="text-gray-600 mb-4">
                Leveraging the latest AI, quantum computing, and emerging technologies to deliver 
                solutions that are 2-3 years ahead of the market
              </p>
              <div className="text-3xl font-bold text-green-600">Future-Ready</div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise Security</h3>
              <p className="text-gray-600 mb-4">
                Built with enterprise-grade security, compliance, and scalability to meet the 
                most demanding business requirements
              </p>
              <div className="text-3xl font-bold text-purple-600">Enterprise-Grade</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Lead the Future?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join hundreds of forward-thinking organizations that have already transformed their 
              operations with our innovative services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                <Users className="w-5 h-5" />
                Schedule a Consultation
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300"
              >
                <Rocket className="w-5 h-5" />
                Call Now
              </a>
            </div>
            <div className="mt-8 text-blue-100">
              <p>Visit us at: <a href="https://ziontechgroup.com" className="underline hover:text-white">ziontechgroup.com</a></p>
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default InnovativeServicesShowcase2025;