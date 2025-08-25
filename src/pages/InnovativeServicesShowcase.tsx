import React, { useState, useEffect } from 'react';
import { SEO } from '../components/SEO';
import { 
  Search, 
  Filter, 
  Star, 
  TrendingUp, 
  Zap, 
  Globe, 
  Shield, 
  Cpu,
  Brain,
  Atom,
  Bot,
  Leaf,
  Building,
  Car,
  Lock,
  ChartBar,
  Users,
  Code,
  Database,
  Cloud,
  Smartphone,
  Camera,
  Microscope,
  Truck,
  Factory,
  Hospital,
  Building2,
  ShoppingCart,
  Wifi,
  Satellite,
  Rocket
} from 'lucide-react';

// Import all service data
import { enhancedRealMicroSaasServices } from '../../data/enhanced-real-micro-saas-services';
import { advancedAIAutomationServices } from '../../data/2026-advanced-ai-automation-services';
import { blockchainWeb3Services } from '../../data/2026-blockchain-web3-innovations';
import { healthcareBiotechServices } from '../../data/2026-healthcare-biotech-innovations';
import { iotSmartCityServices } from '../../data/2026-iot-smart-city-innovations';
import { roboticsAutomationServices } from '../../data/2026-robotics-automation-innovations';
import { quantumComputingServices } from '../../data/2026-quantum-computing-innovations';

interface Service {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
  icon: string;
  color: string;
  textColor: string;
  link: string;
  marketPosition: string;
  targetAudience: string;
  trialDays: number;
  setupTime: string;
  category: string;
  realService: boolean;
  technology: string[];
  integrations: string[];
  useCases: string[];
  roi: string;
  competitors: string[];
  marketSize: string;
  growthRate: string;
  contactInfo?: {
    mobile: string;
    email: string;
    address: string;
  };
}

const InnovativeServicesShowcase: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTechnology, setSelectedTechnology] = useState('All');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 5000 });
  const [sortBy, setSortBy] = useState('name');

  // Combine all services
  const allServices: Service[] = [
    ...enhancedRealMicroSaasServices,
    ...advancedAIAutomationServices,
    ...blockchainWeb3Services,
    ...healthcareBiotechServices,
    ...iotSmartCityServices,
    ...roboticsAutomationServices,
    ...quantumComputingServices
  ];

  // Get unique categories
  const categories = ['All', ...new Set(allServices.map(service => service.category))];
  
  // Get unique technologies
  const technologies = ['All', ...new Set(allServices.flatMap(service => service.technology))];

  // Filter services based on search criteria
  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    
    const matchesTechnology = selectedTechnology === 'All' || 
                             service.technology.some(tech => tech === selectedTechnology);
    
    const price = parseFloat(service.price.replace('$', '').replace(',', ''));
    const matchesPrice = price >= priceRange.min && price <= priceRange.max;

    return matchesSearch && matchesCategory && matchesTechnology && matchesPrice;
  });

  // Sort services
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return parseFloat(a.price.replace('$', '').replace(',', '')) - parseFloat(b.price.replace('$', '').replace(',', ''));
      case 'popularity':
        return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
      case 'growth':
        return parseFloat(b.growthRate.replace('%', '').replace(' annual growth', '')) - 
               parseFloat(a.growthRate.replace('%', '').replace(' annual growth', ''));
      default:
        return a.name.localeCompare(b.name);
    }
  });

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: React.ComponentType<any> } = {
      'AI & Machine Learning': Brain,
      'AI & Business Automation': Zap,
      'AI & Customer Experience': Users,
      'AI & Supply Chain': Truck,
      'AI & Financial Services': Building2,
      'AI & Human Resources': Users,
      'AI & Marketing': ChartBar,
      'AI & Content Creation': Code,
      'AI Medical Diagnostics': Microscope,
      'Telemedicine & Virtual Care': Hospital,
      'Biotech Research & Development': Microscope,
      'Healthcare Analytics & BI': ChartBar,
      'Precision Medicine & Genomics': Microscope,
      'Mental Health & Wellness': Brain,
      'DeFi & Yield Farming': TrendingUp,
      'NFT & Digital Assets': Camera,
      'Blockchain Infrastructure': Database,
      'Smart Contract Security': Lock,
      'Web3 Identity': Shield,
      'DAO & Governance': Building,
      'Smart Infrastructure & Utilities': Zap,
      'Smart Transportation & Mobility': Car,
      'Environmental Monitoring & Sustainability': Leaf,
      'Smart Buildings & Facilities': Building,
      'Smart Waste & Recycling': Truck,
      'Smart Parking & Mobility': Car,
      'Industrial Automation & Manufacturing': Factory,
      'Warehouse & Logistics Automation': Truck,
      'Agricultural Automation & Precision Farming': Leaf,
      'Service Robotics & Hospitality': Bot,
      'Autonomous Vehicles & Transportation': Car,
      'Business Process Automation': Cpu,
      'Quantum Algorithms & Optimization': Atom,
      'Quantum Machine Learning & AI': Brain,
      'Quantum Cryptography & Security': Lock,
      'Quantum Simulation & Research': Microscope,
      'Quantum Finance & Risk Management': Building2,
      'Quantum Drug Discovery & Healthcare': Microscope,
      'Cloud & Infrastructure': Cloud,
      'Digital Marketing': ChartBar,
      'Software Development': Code,
      'Cybersecurity': Shield,
      'Data & Analytics': ChartBar,
      'Design & User Experience': Users,
      'E-commerce & Sales': ShoppingCart,
      'Finance & Accounting': Building2,
      'Education & Training': Users,
      'Productivity & Automation': Zap,
      'Communication & Collaboration': Users,
      'Robotics & Automation': Bot,
      'Metaverse & VR/AR': Globe,
      'IoT & Smart Cities': Wifi
    };
    return iconMap[category] || Globe;
  };

  const getCategoryColor = (category: string) => {
    const colorMap: { [key: string]: string } = {
      'AI & Machine Learning': 'from-blue-600 to-cyan-500',
      'AI & Business Automation': 'from-purple-600 to-pink-500',
      'AI & Customer Experience': 'from-green-600 to-emerald-500',
      'AI & Supply Chain': 'from-yellow-600 to-orange-500',
      'AI & Financial Services': 'from-indigo-600 to-blue-500',
      'AI & Human Resources': 'from-teal-600 to-cyan-500',
      'AI & Marketing': 'from-red-600 to-pink-500',
      'AI & Content Creation': 'from-blue-600 to-purple-500',
      'AI Medical Diagnostics': 'from-blue-600 to-cyan-500',
      'Telemedicine & Virtual Care': 'from-green-600 to-emerald-500',
      'Biotech Research & Development': 'from-purple-600 to-pink-500',
      'Healthcare Analytics & BI': 'from-indigo-600 to-blue-500',
      'Precision Medicine & Genomics': 'from-teal-600 to-cyan-500',
      'Mental Health & Wellness': 'from-pink-600 to-rose-500',
      'DeFi & Yield Farming': 'from-green-600 to-emerald-500',
      'NFT & Digital Assets': 'from-purple-600 to-pink-500',
      'Blockchain Infrastructure': 'from-blue-600 to-cyan-500',
      'Smart Contract Security': 'from-red-600 to-pink-500',
      'Web3 Identity': 'from-indigo-600 to-blue-500',
      'DAO & Governance': 'from-yellow-600 to-orange-500',
      'Smart Infrastructure & Utilities': 'from-yellow-600 to-orange-500',
      'Smart Transportation & Mobility': 'from-green-600 to-emerald-500',
      'Environmental Monitoring & Sustainability': 'from-teal-600 to-cyan-500',
      'Smart Buildings & Facilities': 'from-blue-600 to-cyan-500',
      'Smart Waste & Recycling': 'from-gray-600 to-slate-500',
      'Smart Parking & Mobility': 'from-purple-600 to-pink-500',
      'Industrial Automation & Manufacturing': 'from-blue-600 to-cyan-500',
      'Warehouse & Logistics Automation': 'from-green-600 to-emerald-500',
      'Agricultural Automation & Precision Farming': 'from-yellow-600 to-orange-500',
      'Service Robotics & Hospitality': 'from-purple-600 to-pink-500',
      'Autonomous Vehicles & Transportation': 'from-red-600 to-pink-500',
      'Business Process Automation': 'from-indigo-600 to-blue-500',
      'Quantum Algorithms & Optimization': 'from-purple-600 to-pink-500',
      'Quantum Machine Learning & AI': 'from-blue-600 to-cyan-500',
      'Quantum Cryptography & Security': 'from-green-600 to-emerald-500',
      'Quantum Simulation & Research': 'from-indigo-600 to-blue-500',
      'Quantum Finance & Risk Management': 'from-yellow-600 to-orange-500',
      'Quantum Drug Discovery & Healthcare': 'from-red-600 to-pink-500'
    };
    return colorMap[category] || 'from-gray-600 to-slate-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      <SEO 
        title="Innovative Services Showcase - Zion Tech Group" 
        description="Discover our comprehensive collection of innovative micro SAAS services, AI solutions, blockchain services, and cutting-edge technology solutions."
        keywords="innovative services, micro SAAS, AI solutions, blockchain, quantum computing, robotics, IoT, smart cities, healthcare, biotech"
        url="https://ziontechgroup.com/innovative-services-showcase"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark/80 to-zion-purple/80"></div>
        <div className="relative z-10 container mx-auto px-4 py-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Innovative Services Showcase
            <span className="block text-3xl md:text-4xl text-zion-cyan mt-2">
              Cutting-Edge Solutions for the Future
            </span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-4xl mx-auto mb-8">
            Explore our comprehensive collection of innovative micro SAAS services, AI-powered solutions, 
            blockchain technology, quantum computing, robotics, IoT, and more. Transform your business 
            with next-generation technology solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Start Your Journey
            </button>
            <button className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>

              {/* Technology Filter */}
              <select
                value={selectedTechnology}
                onChange={(e) => setSelectedTechnology(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              >
                {technologies.map(tech => (
                  <option key={tech} value={tech}>{tech}</option>
                ))}
              </select>

              {/* Sort By */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              >
                <option value="name">Sort by Name</option>
                <option value="price">Sort by Price</option>
                <option value="popularity">Sort by Popularity</option>
                <option value="growth">Sort by Growth Rate</option>
              </select>
            </div>

            {/* Price Range */}
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-gray-700">Price Range:</span>
              <input
                type="range"
                min="0"
                max="5000"
                value={priceRange.max}
                onChange={(e) => setPriceRange({ ...priceRange, max: parseInt(e.target.value) })}
                className="flex-1"
              />
              <span className="text-sm text-gray-600">${priceRange.min} - ${priceRange.max}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Discover Our Innovative Services
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              {filteredServices.length} services found matching your criteria. 
              Each service is designed to deliver real value and measurable ROI for your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedServices.map((service, index) => {
              const CategoryIcon = getCategoryIcon(service.category);
              const categoryColor = getCategoryColor(service.category);
              
              return (
                <div key={service.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  {/* Service Header */}
                  <div className={`bg-gradient-to-r ${categoryColor} p-6 text-white`}>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-4xl">{service.icon}</span>
                      {service.popular && (
                        <div className="flex items-center gap-1 bg-white/20 px-2 py-1 rounded-full">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="text-sm font-medium">Popular</span>
                        </div>
                      )}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                    <p className="text-white/90 text-sm">{service.tagline}</p>
                  </div>

                  {/* Service Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <CategoryIcon className="w-5 h-5 text-zion-cyan" />
                      <span className="text-sm text-zion-slate font-medium">{service.category}</span>
                    </div>

                    <p className="text-zion-slate mb-4 line-clamp-3">{service.description}</p>

                    {/* Price and Trial */}
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-2xl font-bold text-zion-blue-dark">{service.price}</span>
                        <span className="text-zion-slate">{service.period}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-zion-slate">{service.trialDays} days trial</div>
                        <div className="text-xs text-zion-slate">{service.setupTime} setup</div>
                      </div>
                    </div>

                    {/* Key Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-zion-blue-dark mb-2">Key Features:</h4>
                      <div className="space-y-1">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-zion-slate">
                            <div className="w-2 h-2 bg-zion-cyan rounded-full mr-2"></div>
                            {feature}
                          </div>
                        ))}
                        {service.features.length > 3 && (
                          <div className="text-xs text-zion-slate text-center">
                            +{service.features.length - 3} more features
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Market Info */}
                    <div className="mb-4 p-3 bg-zion-blue-light rounded-lg">
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div>
                          <span className="font-medium text-zion-blue-dark">Market Size:</span>
                          <div className="text-zion-slate">{service.marketSize}</div>
                        </div>
                        <div>
                          <span className="font-medium text-zion-blue-dark">Growth Rate:</span>
                          <div className="text-zion-slate">{service.growthRate}</div>
                        </div>
                        <div>
                          <span className="font-medium text-zion-blue-dark">ROI:</span>
                          <div className="text-zion-slate">{service.roi}</div>
                        </div>
                        <div>
                          <span className="font-medium text-zion-blue-dark">Setup Time:</span>
                          <div className="text-zion-slate">{service.setupTime}</div>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <a
                        href={service.link}
                        className="flex-1 bg-zion-cyan hover:bg-zion-cyan-light text-white text-center py-2 px-4 rounded-lg font-medium transition-colors"
                      >
                        Learn More
                      </a>
                      <button className="bg-zion-blue-dark hover:bg-zion-blue text-white py-2 px-4 rounded-lg font-medium transition-colors">
                        Contact
                      </button>
                    </div>

                    {/* Contact Info */}
                    {service.contactInfo && (
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <div className="text-xs text-zion-slate">
                          <div className="flex items-center gap-1 mb-1">
                            <span>📞 {service.contactInfo.mobile}</span>
                          </div>
                          <div className="flex items-center gap-1 mb-1">
                            <span>✉️ {service.contactInfo.email}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <span>📍 {service.contactInfo.address}</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-zion-blue-dark mb-2">No services found</h3>
              <p className="text-zion-slate">Try adjusting your search criteria or filters to find the services you're looking for.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Our innovative services are designed to deliver measurable results and drive your business forward. 
            Get in touch with our experts to discuss your specific needs and find the perfect solution.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule Free Consultation
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-zion-blue-dark px-8 py-3 rounded-lg font-semibold transition-colors">
              View All Services
            </button>
          </div>
          
          {/* Contact Information */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl mb-2">📞</div>
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <p className="text-zion-slate-light">+1 302 464 0950</p>
            </div>
            <div>
              <div className="text-3xl mb-2">✉️</div>
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-zion-slate-light">kleber@ziontechgroup.com</p>
            </div>
            <div>
              <div className="text-3xl mb-2">📍</div>
              <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
              <p className="text-zion-slate-light">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InnovativeServicesShowcase;