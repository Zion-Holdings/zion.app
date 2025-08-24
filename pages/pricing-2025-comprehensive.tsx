import React, { useState } from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Check, Star, ArrowRight, Phone, Mail, MapPin,
  Brain, Atom, Rocket, Target, Server, Building,
  Shield, Globe, Zap, TrendingUp, Users, Award,
  DollarSign, Clock, Users as UsersIcon, Shield as ShieldIcon
} from 'lucide-react';

// Import all our new services
import { advancedAIAutomationPlatforms2025 } from '../data/2025-advanced-ai-automation-platforms';
import { innovativeITInfrastructureSolutions2025 } from '../data/2025-innovative-it-infrastructure-solutions';
import { specializedMicroSaasSolutions2025 } from '../data/2025-specialized-micro-saas-solutions';
import { emergingTechnologyServices2025 } from '../data/2025-emerging-technology-services';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const PricingCard = ({ service, index }: { service: any; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`relative overflow-hidden rounded-2xl p-6 shadow-xl transition-all duration-300 ${
        service.popular ? 'ring-2 ring-blue-500 scale-105' : ''
      } ${isHovered ? 'scale-105' : ''}`}
      style={{
        background: `linear-gradient(135deg, ${service.color})`
      }}
    >
      {service.popular && (
        <div className="absolute -right-2 -top-2 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
          Most Popular
        </div>
      )}
      
      <div className="text-white">
        <div className="text-4xl mb-4">{service.icon}</div>
        <h3 className="text-xl font-bold mb-2">{service.name}</h3>
        <p className="text-sm opacity-90 mb-4">{service.tagline}</p>
        
        <div className="mb-6">
          <div className="text-3xl font-bold">${service.price.monthly}</div>
          <div className="text-sm opacity-75">per month</div>
          <div className="text-sm opacity-75 mt-1">
            ${service.price.yearly}/year (save ${Math.round((service.price.monthly * 12 - service.price.yearly) / (service.price.monthly * 12) * 100)}%)
          </div>
        </div>
        
        <div className="mb-6">
          <div className="flex items-center mb-2">
            <Star className="w-4 h-4 text-yellow-300 mr-1" />
            <span className="text-sm">{service.rating} ({service.reviews} reviews)</span>
          </div>
          <div className="text-sm opacity-75">{service.customers} customers</div>
        </div>
        
        <div className="mb-6">
          <h4 className="font-semibold mb-3">Key Features:</h4>
          <ul className="space-y-2">
            {service.features.slice(0, 5).map((feature: string, idx: number) => (
              <li key={idx} className="text-sm flex items-start">
                <Check className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mb-6">
          <h4 className="font-semibold mb-2">Setup Time:</h4>
          <div className="text-sm opacity-75 flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {service.price.setupTime}
          </div>
        </div>
        
        <div className="mb-6">
          <h4 className="font-semibold mb-2">Trial Period:</h4>
          <div className="text-sm opacity-75">{service.price.trialDays} days free trial</div>
        </div>
        
        <div className="mb-6">
          <h4 className="font-semibold mb-2">ROI Promise:</h4>
          <div className="text-sm opacity-75">{service.roi}</div>
        </div>
        
        <div className="space-y-3">
          <a
            href={service.link}
            className="inline-flex items-center justify-center w-full px-4 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Start Free Trial <ArrowRight className="w-4 h-4 ml-2" />
          </a>
          <a
            href={`tel:${contactInfo.mobile}`}
            className="inline-flex items-center justify-center w-full px-4 py-2 bg-transparent border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
          >
            <Phone className="w-4 h-4 mr-2" />
            Talk to Sales
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const ServiceCategory = ({ title, services, icon: Icon, color, description }: { 
  title: string; 
  services: any[]; 
  icon: any; 
  color: string;
  description: string;
}) => (
  <div className="mb-20">
    <div className="text-center mb-12">
      <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 ${color}`}>
        <Icon className="w-10 h-10 text-white" />
      </div>
      <h2 className="text-5xl font-bold text-gray-900 mb-6">{title}</h2>
      <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
        {description}
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <PricingCard key={service.id} service={service} index={index} />
      ))}
    </div>
  </div>
);

const ComparisonTable = () => (
  <div className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Service Comparison</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Compare our services to find the perfect solution for your business needs
        </p>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded-lg shadow-lg">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Service Category</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Starting Price</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Setup Time</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Trial Period</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Average ROI</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 text-sm font-medium text-gray-900">AI Automation Platforms</td>
              <td className="px-6 py-4 text-sm text-gray-600">$149/month</td>
              <td className="px-6 py-4 text-sm text-gray-600">1-2 weeks</td>
              <td className="px-6 py-4 text-sm text-gray-600">14-21 days</td>
              <td className="px-6 py-4 text-sm text-gray-600">300-400%</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-sm font-medium text-gray-900">IT Infrastructure Solutions</td>
              <td className="px-6 py-4 text-sm text-gray-600">$199/month</td>
              <td className="px-6 py-4 text-sm text-gray-600">1-4 weeks</td>
              <td className="px-6 py-4 text-sm text-gray-600">14-30 days</td>
              <td className="px-6 py-4 text-sm text-gray-600">350-500%</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-sm font-medium text-gray-900">Specialized Micro SAAS</td>
              <td className="px-6 py-4 text-sm text-gray-600">$199/month</td>
              <td className="px-6 py-4 text-sm text-gray-600">1-3 weeks</td>
              <td className="px-6 py-4 text-sm text-gray-600">14-21 days</td>
              <td className="px-6 py-4 text-sm text-gray-600">300-400%</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-sm font-medium text-gray-900">Emerging Technology</td>
              <td className="px-6 py-4 text-sm text-gray-600">$599/month</td>
              <td className="px-6 py-4 text-sm text-gray-600">2-6 weeks</td>
              <td className="px-6 py-4 text-sm text-gray-600">21-30 days</td>
              <td className="px-6 py-4 text-sm text-gray-600">400-1000%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const ContactSection = () => (
  <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold mb-8">Ready to Get Started?</h2>
      <p className="text-xl mb-12 max-w-3xl mx-auto">
        Our team of experts is ready to help you choose the perfect solution and get you up and running quickly.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="text-center">
          <Phone className="w-12 h-12 mx-auto mb-4 text-blue-200" />
          <h3 className="text-xl font-semibold mb-2">Call Us</h3>
          <p className="text-blue-100">{contactInfo.mobile}</p>
          <p className="text-sm text-blue-200">Available 24/7</p>
        </div>
        <div className="text-center">
          <Mail className="w-12 h-12 mx-auto mb-4 text-blue-200" />
          <h3 className="text-xl font-semibold mb-2">Email Us</h3>
          <p className="text-blue-100">{contactInfo.email}</p>
          <p className="text-sm text-blue-200">Response within 2 hours</p>
        </div>
        <div className="text-center">
          <MapPin className="w-12 h-12 mx-auto mb-4 text-blue-200" />
          <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
          <p className="text-blue-100">{contactInfo.address}</p>
          <p className="text-sm text-blue-200">Schedule a meeting</p>
        </div>
      </div>
      
      <div className="space-y-4">
        <a
          href={`tel:${contactInfo.mobile}`}
          className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors mr-4"
        >
          <Phone className="w-5 h-5 mr-2" />
          Call Now
        </a>
        <a
          href={`mailto:${contactInfo.email}`}
          className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
        >
          <Mail className="w-5 h-5 mr-2" />
          Send Email
        </a>
      </div>
    </div>
  </div>
);

const BenefitsSection = () => (
  <div className="py-20 bg-white">
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Zion Tech Group?</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We deliver exceptional value through innovative technology, expert support, and proven results.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <DollarSign className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Competitive Pricing</h3>
          <p className="text-gray-600">Up to 60% less than enterprise alternatives with better features</p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Clock className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Implementation</h3>
          <p className="text-gray-600">Get up and running in days, not months</p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <UsersIcon className="w-8 h-8 text-purple-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Support</h3>
          <p className="text-gray-600">24/7 support with dedicated success managers</p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <ShieldIcon className="w-8 h-8 text-orange-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise Security</h3>
          <p className="text-gray-600">SOC 2 Type II, ISO 27001, and industry compliance</p>
        </div>
      </div>
    </div>
  </div>
);

export default function Pricing2025Comprehensive() {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="2025 Comprehensive Pricing - Zion Tech Group"
        description="Transparent pricing for our comprehensive portfolio of AI, IT, and micro SAAS services. Start your free trial today."
        keywords={["pricing", "AI services", "IT solutions", "micro SAAS", "Zion Tech Group", "free trial"]}
      />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-bold mb-6"
          >
            2025 Comprehensive Pricing
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl mb-8 max-w-4xl mx-auto"
          >
            Transparent pricing for our innovative technology solutions. Start with a free trial and 
            scale as you grow. No hidden fees, no surprises.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#pricing"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              View Pricing <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a
              href={`tel:${contactInfo.mobile}`}
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              Get Custom Quote
            </a>
          </motion.div>
        </div>
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <ServiceCategory
            title="Advanced AI Automation Platforms"
            services={advancedAIAutomationPlatforms2025}
            icon={Brain}
            color="bg-gradient-to-r from-blue-500 to-cyan-500"
            description="Transform your business operations with AI-powered automation that learns and improves over time. Reduce manual work by up to 80% and improve efficiency by 300%."
          />
          
          <ServiceCategory
            title="Innovative IT Infrastructure Solutions"
            services={innovativeITInfrastructureSolutions2025}
            icon={Server}
            color="bg-gradient-to-r from-indigo-500 to-purple-500"
            description="Build future-proof infrastructure with quantum-ready databases, edge computing, and AI-powered DevOps. Achieve 90% latency reduction and 500% performance improvement."
          />
          
          <ServiceCategory
            title="Specialized Micro SAAS Solutions"
            services={specializedMicroSaasSolutions2025}
            icon={Target}
            color="bg-gradient-to-r from-orange-500 to-red-500"
            description="Industry-specific solutions for real estate, healthcare, legal, and manufacturing. Leverage AI and IoT to gain competitive advantages in your sector."
          />
          
          <ServiceCategory
            title="Emerging Technology Services"
            services={emergingTechnologyServices2025}
            icon={Rocket}
            color="bg-gradient-to-r from-purple-500 to-pink-500"
            description="Stay ahead of the curve with quantum computing, metaverse development, blockchain AI, and autonomous robotics. Future-proof your business with cutting-edge technology."
          />
        </div>
      </div>

      {/* Comparison Table */}
      <ComparisonTable />

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}