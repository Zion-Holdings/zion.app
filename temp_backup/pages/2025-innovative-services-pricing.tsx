import React, { useState } from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Check, Star, Users, Zap, Shield, Globe, Heart, Building,
  ArrowRight, Phone, Mail, MapPin, ExternalLink
} from 'lucide-react';

// Import our new service data
import { innovativeRealWorldServices } from '../data/2025-innovative-real-world-services';
import { cuttingEdgeEnterpriseSolutions } from '../data/2025-cutting-edge-enterprise-solutions';

const InnovativeServicesPricing: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const allServices = [...innovativeRealWorldServices, ...cuttingEdgeEnterpriseSolutions];
  
  const categories = ['All', 'Micro SAAS', 'IT Services', 'AI Services', 'Enterprise Solutions', 'Digital Transformation', 'Innovation Services', 'Strategic Consulting'];

  const filteredServices = allServices.filter(service => 
    selectedCategory === 'All' || service.category === selectedCategory
  );

  const getPrice = (service: any) => {
    if (service.price.monthly > 0) {
      return billingCycle === 'monthly' ? service.price.monthly : service.price.yearly;
    }
    return service.price.enterprise;
  };

  const getPriceLabel = (service: any) => {
    if (service.price.monthly > 0) {
      return billingCycle === 'monthly' ? '/month' : '/year';
    }
    return '';
  };

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <SEO 
        title="2025 Innovative Services Pricing | Zion Tech Group"
        description="Comprehensive pricing for our innovative micro SAAS, IT services, AI solutions, and enterprise services. Transparent pricing with proven ROI and enterprise options."
        keywords={["pricing", "micro SAAS pricing", "IT services pricing", "AI services pricing", "enterprise solutions pricing"]}
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            2025 Innovative Services Pricing
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transparent pricing for our comprehensive portfolio of market-validated services. 
            Choose the plan that fits your business needs and budget.
          </motion.p>
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-3 flex items-center gap-2">
              <Zap className="w-5 h-5" />
              <span>Proven ROI</span>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-3 flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span>Enterprise Security</span>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-3 flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span>24/7 Support</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="bg-white py-6 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-700">
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-blue-600" />
              <span className="font-semibold">Website:</span>
              <a href="https://ziontechgroup.com" className="text-blue-600 hover:underline">ziontechgroup.com</a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-green-600" />
              <span className="font-semibold">Contact:</span>
              <a href="tel:+13024640950" className="text-green-600 hover:underline">+1 302 464 0950</a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-red-600" />
              <span className="font-semibold">Email:</span>
              <a href="mailto:kleber@ziontechgroup.com" className="text-red-600 hover:underline">kleber@ziontechgroup.com</a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-purple-600" />
              <span className="font-semibold">Address:</span>
              <span>364 E Main St STE 1008 Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>

      {/* Billing Toggle */}
      <section className="bg-white py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-6">
            <h2 className="text-2xl font-bold text-gray-900">Choose Your Billing Cycle</h2>
            <div className="flex items-center bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  billingCycle === 'monthly'
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Monthly Billing
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  billingCycle === 'yearly'
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Yearly Billing
                <span className="ml-2 text-sm text-green-600 font-semibold">Save 20%</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                {/* Service Header */}
                <div className={`h-32 bg-gradient-to-r ${service.color} flex items-center justify-center text-6xl`}>
                  {service.icon}
                </div>

                {/* Service Info */}
                <div className="p-6">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.name}</h3>
                    <p className="text-gray-600 mb-4">{service.tagline}</p>
                    
                    {/* Pricing */}
                    <div className="mb-6">
                      {service.price.monthly > 0 ? (
                        <div className="text-4xl font-bold text-blue-600">
                          ${getPrice(service)}
                          <span className="text-lg text-gray-500 font-normal">{getPriceLabel(service)}</span>
                        </div>
                      ) : (
                        <div className="text-2xl font-bold text-blue-600">
                          {getPrice(service)}
                        </div>
                      )}
                      
                      {service.price.monthly > 0 && (
                        <div className="text-sm text-gray-500 mt-2">
                          {service.price.trialDays > 0 && `${service.price.trialDays}-day free trial`}
                          {service.price.setupTime && ` • Setup in ${service.price.setupTime}`}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 6).map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.slice(0, 3).map((benefit, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Zap className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Service Details */}
                  <div className="mb-6 space-y-3 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-blue-500" />
                      <span>{service.customers.toLocaleString()} customers</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span>{service.rating} rating ({service.reviews} reviews)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-green-500" />
                      <span>{service.compliance.slice(0, 2).join(', ')}</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="text-center">
                    <a
                      href={service.link}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold flex items-center justify-center gap-2"
                    >
                      Learn More <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No services found</h3>
              <p className="text-gray-600">Try selecting a different category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Enterprise Solutions Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Enterprise Solutions & Custom Pricing</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Need a custom solution or enterprise pricing? Our team will work with you to create 
              a tailored package that meets your specific requirements and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Custom Implementation</h3>
              <p className="text-gray-600 mb-4">Tailored solutions designed specifically for your business needs and existing infrastructure.</p>
              <div className="text-2xl font-bold text-blue-600">Custom Pricing</div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Enterprise Security</h3>
              <p className="text-gray-600 mb-4">Advanced security features, compliance automation, and dedicated security teams.</p>
              <div className="text-2xl font-bold text-green-600">Custom Pricing</div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Dedicated Support</h3>
              <p className="text-gray-600 mb-4">24/7 dedicated support, account managers, and priority response times.</p>
              <div className="text-2xl font-bold text-purple-600">Custom Pricing</div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">ROI Calculator</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Calculate the potential return on investment for our services based on your business metrics.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-gray-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Input Your Metrics</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Current Monthly Operational Costs
                    </label>
                    <input
                      type="number"
                      placeholder="$10,000"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Employees
                    </label>
                    <input
                      type="number"
                      placeholder="50"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service Category
                    </label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>AI Business Process Automation</option>
                      <option>Digital Transformation</option>
                      <option>Smart Invoice Automation</option>
                      <option>Zero Trust Security</option>
                    </select>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Projected ROI</h3>
                <div className="bg-white rounded-xl p-6 space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monthly Savings:</span>
                    <span className="font-semibold text-green-600">$3,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Annual Savings:</span>
                    <span className="font-semibold text-green-600">$42,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">ROI Timeline:</span>
                    <span className="font-semibold text-blue-600">6 months</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">3-Year ROI:</span>
                    <span className="font-semibold text-green-600">420%</span>
                  </div>
                </div>
                <button className="w-full mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                  Calculate Your ROI
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact our team to discuss your needs, get a custom quote, or schedule a consultation. 
            We're here to help you choose the right solution for your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300 flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Email kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-8 text-center">
            <p className="text-blue-100">
              <strong>Address:</strong> 364 E Main St STE 1008 Middletown DE 19709<br />
              <strong>Website:</strong> <a href="https://ziontechgroup.com" className="underline hover:text-white">https://ziontechgroup.com</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InnovativeServicesPricing;