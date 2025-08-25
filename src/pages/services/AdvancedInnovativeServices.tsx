import React, { useState } from 'react';
import { SEO } from '../../components/SEO';
import { 
  Brain, 
  Shield,
  Heart,
  Leaf,
  Scale,
  Truck,
  TrendingUp,
  Building,
  GraduationCap,
  Atom,
  Zap,
  Globe,
  Users,
  BarChart3,
  Target,
  Award,
  Cpu,
  Lock,
  Eye,
  Rocket,
  Database,
  Network,
  Cloud,
  Smartphone,
  Monitor,
  Server,
  Wifi,
  Satellite,
  Camera,
  Drone,
  Car,
  Factory,
  Hospital,
  School,
  Building2
} from 'lucide-react';
import { ADVANCED_INNOVATIVE_SERVICES } from '../../data/advancedInnovativeServices';

export default function AdvancedInnovativeServices() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const categories = [
    { name: "All", icon: Globe, color: "from-blue-500 to-purple-500" },
    { name: "AI & IoT", icon: Brain, color: "from-purple-500 to-pink-500" },
    { name: "Quantum Computing", icon: Atom, color: "from-indigo-500 to-purple-500" },
    { name: "Autonomous Systems", icon: Rocket, color: "from-orange-500 to-red-500" },
    { name: "Blockchain & Identity", icon: Lock, color: "from-green-500 to-blue-500" },
    { name: "AI & Legal Tech", icon: Scale, color: "from-blue-500 to-indigo-500" },
    { name: "Sustainability & Green Tech", icon: Leaf, color: "from-emerald-500 to-green-500" },
    { name: "Cybersecurity", icon: Shield, color: "from-red-500 to-orange-500" },
    { name: "Smart Cities & IoT", icon: Building, color: "from-gray-500 to-blue-500" },
    { name: "AI & Healthcare", icon: Heart, color: "from-pink-500 to-red-500" }
  ];

  const getCategoryIcon = (category: string) => {
    const cat = categories.find(c => c.name === category);
    return cat ? cat.icon : Globe;
  };

  const getCategoryColor = (category: string) => {
    const cat = categories.find(c => c.name === category);
    return cat ? cat.color : "from-gray-500 to-gray-600";
  };

  const getServiceIcon = (category: string) => {
    const iconMap: { [key: string]: any } = {
      "AI & IoT": Cpu,
      "Quantum Computing": Atom,
      "Autonomous Systems": Drone,
      "Blockchain & Identity": Lock,
      "AI & Legal Tech": Scale,
      "Sustainability & Green Tech": Leaf,
      "Cybersecurity": Shield,
      "Smart Cities & IoT": Building,
      "AI & Healthcare": Heart
    };
    return iconMap[category] || Globe;
  };

  const filteredServices = ADVANCED_INNOVATIVE_SERVICES.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      <SEO 
        title="Advanced Innovative Services - Zion Tech Group" 
        description="Discover cutting-edge micro SAAS services, IT solutions, and AI innovations that transform businesses and drive digital transformation."
      />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Advanced Innovative Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Cutting-edge micro SAAS solutions, IT services, and AI innovations that drive business transformation
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <span className="text-2xl font-bold">10+</span>
                <p className="text-sm">Innovative Services</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <span className="text-2xl font-bold">$299-$1,500</span>
                <p className="text-sm">Monthly Pricing</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <span className="text-2xl font-bold">300%+</span>
                <p className="text-sm">Average ROI</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm rounded-xl text-white placeholder-gray-300 border border-white/20 focus:border-white/40 focus:outline-none"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all duration-300 ${
                    selectedCategory === category.name
                      ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg'
                      : 'bg-white/20 backdrop-blur-sm text-gray-300 hover:bg-white/30'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => {
            const ServiceIcon = getServiceIcon(service.category);
            return (
              <div key={service.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group">
                {/* Service Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-xl">
                    <ServiceIcon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">{service.currency}{service.price}</div>
                    <div className="text-sm text-gray-300">per month</div>
                  </div>
                </div>

                {/* Service Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {service.description}
                </p>

                {/* Category Badge */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 text-sm rounded-full border border-blue-500/30">
                    {service.category}
                  </span>
                </div>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                  <div className="space-y-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                        {feature}
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <div className="text-sm text-gray-400">
                        +{service.features.length - 3} more features
                      </div>
                    )}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Benefits:</h4>
                  <div className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Market Info */}
                <div className="mb-4 p-3 bg-white/5 rounded-xl">
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <div className="text-gray-400">Market Price</div>
                      <div className="text-white font-semibold">{service.marketPrice}</div>
                    </div>
                    <div>
                      <div className="text-gray-400">ROI</div>
                      <div className="text-green-400 font-semibold">{service.roi}</div>
                    </div>
                  </div>
                </div>

                {/* Technology Stack */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Technology:</h4>
                  <div className="flex flex-wrap gap-1">
                    {service.technology.slice(0, 4).map((tech, index) => (
                      <span key={index} className="px-2 py-1 bg-white/10 text-xs text-gray-300 rounded">
                        {tech}
                      </span>
                    ))}
                    {service.technology.length > 4 && (
                      <span className="px-2 py-1 bg-white/10 text-xs text-gray-400 rounded">
                        +{service.technology.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Innovation Level */}
                <div className="mb-4 p-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-500/30">
                  <div className="text-sm text-purple-300 font-semibold mb-1">Innovation Level</div>
                  <div className="text-xs text-purple-200">{service.innovationLevel}</div>
                </div>

                {/* Unique Value */}
                <div className="mb-6 p-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl border border-blue-500/30">
                  <div className="text-sm text-blue-300 font-semibold mb-1">Unique Value</div>
                  <div className="text-xs text-blue-200">{service.uniqueValue}</div>
                </div>

                {/* Contact Information */}
                <div className="border-t border-white/20 pt-4">
                  <div className="text-center">
                    <div className="text-sm text-gray-400 mb-2">Ready to get started?</div>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-center gap-2 text-white">
                        <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                        {service.contactInfo.phone}
                      </div>
                      <div className="flex items-center justify-center gap-2 text-white">
                        <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                        {service.contactInfo.email}
                      </div>
                      <div className="flex items-center justify-center gap-2 text-blue-300">
                        <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                        <a href={service.contactInfo.website} target="_blank" rel="noopener noreferrer" className="hover:underline">
                          Visit Website
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
            <p className="text-gray-300">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-3xl p-12 text-center border border-white/20">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Our advanced innovative services are designed to give you a competitive edge in today's rapidly evolving digital landscape. 
            Get in touch to discuss how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <div className="w-5 h-5 bg-white rounded-full"></div>
              Call Now: +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20 flex items-center justify-center gap-2"
            >
              <div className="w-5 h-5 bg-blue-500 rounded-full"></div>
              Email: kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-300 mb-2">Visit our website for more information</p>
            <a
              href="https://ziontechgroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-blue-200 underline text-lg"
            >
              https://ziontechgroup.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}