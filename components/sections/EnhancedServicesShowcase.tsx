import React from 'react';
import { motion } from 'framer-motion';
import { 
  Star, 
  Check, 
  ExternalLink, 
  Phone, 
  Mail, 
  MapPin, 
  TrendingUp, 
  Users, 
  Award,
  Zap,
  Shield,
  Brain,
  Rocket,
  DollarSign,
  Clock,
  Target
} from 'lucide-react';
import { realMicroSaasServices } from '../../data/real-micro-saas-services-enhanced';

const EnhancedServicesShowcase: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Futuristic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Revolutionary Micro SAAS Services
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover our portfolio of cutting-edge micro SAAS solutions that are transforming industries worldwide. 
            From quantum AI to autonomous manufacturing, each service delivers unprecedented ROI and innovation.
          </p>
          
          {/* Market Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400">400+</div>
              <div className="text-gray-400">Real Services</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">2000%+</div>
              <div className="text-gray-400">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400">99.99%</div>
              <div className="text-gray-400">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">21 Days</div>
              <div className="text-gray-400">Free Trial</div>
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {realMicroSaasServices.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="group relative"
            >
              <div className="relative h-full bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 overflow-hidden hover:border-slate-600/50 transition-all duration-500 hover:scale-105">
                {/* Service Header */}
                <div className={`p-6 bg-gradient-to-r ${service.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-4xl">{service.icon}</span>
                      {service.popular && (
                        <div className="flex items-center bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm font-medium">
                          <Star className="w-4 h-4 mr-1" />
                          Popular
                        </div>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-white/90 text-sm">{service.tagline}</p>
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-6">
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Pricing */}
                  <div className="mb-6">
                    <div className="flex items-baseline mb-2">
                      <span className="text-3xl font-bold text-white">{service.price}</span>
                      <span className="text-gray-400 ml-1">{service.period}</span>
                    </div>
                    <div className="text-sm text-gray-400">
                      {service.marketPrice}
                    </div>
                  </div>

                  {/* Key Benefits */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3 flex items-center">
                      <Zap className="w-4 h-4 mr-2 text-yellow-400" />
                      Key Benefits
                    </h4>
                    <ul className="space-y-2">
                      {service.benefits.slice(0, 3).map((benefit, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-300">
                          <Check className="w-4 h-4 mr-2 mt-0.5 text-green-400 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Capabilities */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3 flex items-center">
                      <Brain className="w-4 h-4 mr-2 text-blue-400" />
                      Core Capabilities
                    </h4>
                    <ul className="space-y-2">
                      {service.capabilities.slice(0, 3).map((capability, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-300">
                          <Target className="w-4 h-4 mr-2 mt-0.5 text-purple-400 flex-shrink-0" />
                          {capability}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Market Info */}
                  <div className="mb-6 p-4 bg-slate-800/30 rounded-lg">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="text-gray-400">Market Size</div>
                        <div className="text-white font-medium">{service.marketSize}</div>
                      </div>
                      <div>
                        <div className="text-gray-400">Growth Rate</div>
                        <div className="text-white font-medium">{service.growthRate}</div>
                      </div>
                      <div>
                        <div className="text-gray-400">ROI</div>
                        <div className="text-white font-medium">{service.roi}</div>
                      </div>
                      <div>
                        <div className="text-gray-400">Setup Time</div>
                        <div className="text-white font-medium">{service.setupTime}</div>
                      </div>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="space-y-3">
                    <a
                      href={service.link}
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-105"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Learn More
                    </a>
                    <a
                      href={`mailto:${contactInfo.email}?subject=Inquiry about ${service.name}`}
                      className="w-full bg-slate-700 hover:bg-slate-600 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center transition-all duration-300"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-8">
            <h3 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto">
              Join thousands of companies already leveraging our revolutionary micro SAAS services. 
              Get started with a 21-day free trial and experience the future of business technology.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center text-center">
                <Phone className="w-6 h-6 text-cyan-400 mr-3" />
                <div>
                  <div className="text-white font-semibold">Call Us</div>
                  <div className="text-gray-400">{contactInfo.mobile}</div>
                </div>
              </div>
              <div className="flex items-center justify-center text-center">
                <Mail className="w-6 h-6 text-purple-400 mr-3" />
                <div>
                  <div className="text-white font-semibold">Email Us</div>
                  <div className="text-gray-400">{contactInfo.email}</div>
                </div>
              </div>
              <div className="flex items-center justify-center text-center">
                <MapPin className="w-6 h-6 text-pink-400 mr-3" />
                <div>
                  <div className="text-white font-semibold">Visit Us</div>
                  <div className="text-gray-400">{contactInfo.address}</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`mailto:${contactInfo.email}?subject=Micro SAAS Services Inquiry`}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:scale-105"
              >
                Start Free Trial
              </a>
              <a
                href={contactInfo.website}
                className="bg-slate-700 hover:bg-slate-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300"
              >
                Explore Services
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedServicesShowcase;