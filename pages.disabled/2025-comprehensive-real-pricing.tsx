import React, { useState } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, Star, Users, Zap, Shield, Clock, ArrowRight,
  Phone, Mail, MapPin, Globe, Award, TrendingUp, Brain,
  Building, Cpu, Target, Rocket, Palette, Heart, Truck,
  GraduationCap, Atom
} from 'lucide-react';

// Import our new real service data
import { realInnovativeMicroSaas2025Expansion } from '../data/2025-real-innovative-micro-saas-expansion';
import { realInnovativeITServices2025Expansion } from '../data/2025-real-innovative-it-services-expansion';
import { realInnovativeAIServices2025Expansion } from '../data/2025-real-innovative-ai-services-expansion';

const ComprehensiveRealPricing2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  // Combine all services
  const allServices = [
    ...realInnovativeMicroSaas2025Expansion,
    ...realInnovativeITServices2025Expansion,
    ...realInnovativeAIServices2025Expansion
  ];

  // Filter services by category
  const filteredServices = allServices.filter(service => {
    if (selectedCategory === 'all') return true;
    return service.category.toLowerCase().includes(selectedCategory.toLowerCase());
  });

  const categories = [
    { id: 'all', name: 'All Services', icon: Target, count: allServices.length },
    { id: 'micro-saas', name: 'Micro SAAS', icon: Building, count: realInnovativeMicroSaas2025Expansion.length },
    { id: 'it services', name: 'IT Services', icon: Cpu, count: realInnovativeITServices2025Expansion.length },
    { id: 'ai services', name: 'AI Services', icon: Brain, count: realInnovativeAIServices2025Expansion.length }
  ];

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  // Calculate annual discount
  const getAnnualPrice = (monthlyPrice: string) => {
    const price = parseInt(monthlyPrice.replace('$', ''));
    const annualPrice = price * 12 * 0.8; // 20% discount
    return `$${Math.round(annualPrice)}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <SEO 
        title="2025 Comprehensive Real Services Pricing | Zion Tech Group"
        description="Transparent pricing for our comprehensive portfolio of real, innovative micro SAAS, IT, and AI services. Competitive rates with proven ROI."
        keywords={["pricing", "micro SAAS pricing", "IT services pricing", "AI services pricing", "business solutions pricing", "Zion Tech Group"]}
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            Transparent Pricing
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
          >
            Competitive pricing for market-ready solutions that deliver real value and measurable ROI
          </motion.p>
          
          {/* Contact Information Banner */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-8 border border-white/20"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
              <div className="flex flex-col items-center">
                <Phone className="w-6 h-6 text-blue-400 mb-2" />
                <span className="text-sm text-gray-300">Phone</span>
                <span className="font-semibold text-blue-400">{contactInfo.mobile}</span>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-6 h-6 text-purple-400 mb-2" />
                <span className="text-sm text-gray-300">Email</span>
                <span className="font-semibold text-purple-400">{contactInfo.email}</span>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-6 h-6 text-green-400 mb-2" />
                <span className="text-sm text-gray-300">Address</span>
                <span className="font-semibold text-green-400 text-sm">{contactInfo.address}</span>
              </div>
              <div className="flex flex-col items-center">
                <Globe className="w-6 h-6 text-pink-400 mb-2" />
                <span className="text-sm text-gray-300">Website</span>
                <a href={contactInfo.website} className="font-semibold text-pink-400 hover:text-pink-300 transition-colors">
                  {contactInfo.website.replace('https://', '')}
                </a>
              </div>
            </div>
          </motion.div>

          {/* Billing Toggle */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
              className={`relative w-16 h-8 rounded-full transition-all duration-300 ${
                billingCycle === 'annual' ? 'bg-blue-600' : 'bg-gray-600'
              }`}
            >
              <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-all duration-300 ${
                billingCycle === 'annual' ? 'right-1' : 'left-1'
              }`} />
            </button>
            <span className={`text-lg ${billingCycle === 'annual' ? 'text-white' : 'text-gray-400'}`}>
              Annual
              <span className="ml-2 text-sm text-green-400">(Save 20%)</span>
            </span>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-xl transition-all duration-200 flex items-center gap-3 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <category.icon className="w-5 h-5" />
                {category.name}
                <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 ${
                  service.popular ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{service.name}</h3>
                  <p className="text-gray-400 mb-4">{service.tagline}</p>
                  
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-blue-400">
                      {billingCycle === 'annual' ? getAnnualPrice(service.price) : service.price}
                    </span>
                    <span className="text-gray-400">
                      {billingCycle === 'annual' ? '/year' : service.period}
                    </span>
                  </div>
                  
                  {billingCycle === 'annual' && (
                    <div className="text-sm text-green-400 mb-4">
                      Save ${Math.round(parseInt(service.price.replace('$', '')) * 12 * 0.2)} annually
                    </div>
                  )}
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-gray-300">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 6).map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm">{service.rating}</span>
                      <span className="text-gray-400 text-sm">({service.reviews} reviews)</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-400">
                      <Users className="w-4 h-4" />
                      <span>{service.customers}</span>
                    </div>
                  </div>
                  
                  <div className="text-sm text-gray-400 mb-2">Setup Time: {service.setupTime}</div>
                  <div className="text-sm text-gray-400">Trial: {service.trialDays} days</div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-2 text-gray-300">ROI Highlights:</h4>
                  <p className="text-sm text-green-400">{service.roi}</p>
                </div>
                
                <div className="space-y-3">
                  <a
                    href={service.link}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center gap-2 font-semibold"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  
                  <a
                    href={`mailto:${contactInfo.email}?subject=Inquiry about ${service.name}`}
                    className="w-full bg-white/10 text-white py-3 rounded-xl hover:bg-white/20 transition-all duration-200 flex items-center justify-center gap-2 border border-white/20"
                  >
                    <Mail className="w-4 h-4" />
                    Contact Sales
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Solutions */}
      <section className="px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 backdrop-blur-lg rounded-3xl p-12 border border-white/20"
          >
            <h2 className="text-4xl font-bold mb-6">Need Enterprise Solutions?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Custom enterprise packages with dedicated support, custom integrations, and volume discounts
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Shield className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Dedicated Support</h3>
                <p className="text-gray-400 text-sm">24/7 priority support with dedicated account manager</p>
              </div>
              <div className="text-center">
                <Zap className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Custom Integration</h3>
                <p className="text-gray-400 text-sm">Tailored solutions for your specific business needs</p>
              </div>
              <div className="text-center">
                <TrendingUp className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Volume Discounts</h3>
                <p className="text-gray-400 text-sm">Competitive pricing for enterprise deployments</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`mailto:${contactInfo.email}?subject=Enterprise Solutions Inquiry`}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center gap-2 text-lg font-semibold"
              >
                <Mail className="w-5 h-5" />
                Contact Enterprise Sales
              </a>
              <a
                href={`tel:${contactInfo.mobile}`}
                className="bg-white/10 text-white px-8 py-4 rounded-xl hover:bg-white/20 transition-all duration-200 flex items-center justify-center gap-2 text-lg font-semibold border border-white/20"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold mb-3">What's included in the pricing?</h3>
              <p className="text-gray-300">
                All our pricing includes the core service, standard features, basic support, and regular updates. 
                Additional features, premium support, and custom integrations are available as add-ons.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold mb-3">Do you offer free trials?</h3>
              <p className="text-gray-300">
                Yes! Most of our services offer free trials ranging from 14-30 days. This allows you to test 
                the service and ensure it meets your business needs before committing.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold mb-3">Can I cancel anytime?</h3>
              <p className="text-gray-300">
                Absolutely! We believe in no-strings-attached service. You can cancel your subscription at any 
                time with no penalties or hidden fees.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold mb-3">What support is included?</h3>
              <p className="text-gray-300">
                All plans include email support and documentation. Premium support with phone and live chat 
                is available on higher-tier plans and as add-ons.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer Contact */}
      <footer className="px-4 py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span>{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-green-400" />
                  <span>{contactInfo.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-pink-400" />
                  <a href={contactInfo.website} className="hover:text-pink-400 transition-colors">
                    {contactInfo.website.replace('https://', '')}
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Service Categories</h3>
              <div className="space-y-2">
                <div>• Micro SAAS Solutions</div>
                <div>• IT Infrastructure Services</div>
                <div>• AI & Machine Learning</div>
                <div>• Cloud & DevOps</div>
                <div>• Cybersecurity Solutions</div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Why Choose Us</h3>
              <div className="space-y-2">
                <div>• Market-Validated Solutions</div>
                <div>• Proven ROI & Results</div>
                <div>• Expert Implementation</div>
                <div>• 24/7 Support</div>
                <div>• Competitive Pricing</div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Business Hours</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-400" />
                  <span>Mon-Fri: 9AM-6PM EST</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-green-400" />
                  <span>24/7 Support Available</span>
                </div>
                <div className="text-sm text-gray-400 mt-4">
                  Ready to discuss pricing? Contact us anytime for a consultation.
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Zion Tech Group. All rights reserved. | Transparent pricing for real business solutions.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ComprehensiveRealPricing2025;