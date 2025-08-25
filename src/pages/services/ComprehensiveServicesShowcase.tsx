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
  Building2,
  Search,
  Filter,
  Star,
  Clock,
  DollarSign,
  TrendingUp as TrendingUpIcon,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { ADVANCED_INNOVATIVE_SERVICES } from '../../data/advancedInnovativeServices';
import { EMERGING_TECH_SERVICES } from '../../data/emergingTechServices';

export default function ComprehensiveServicesShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);
  const [sortBy, setSortBy] = useState<string>('name');

  // Combine all services
  const allServices = [...ADVANCED_INNOVATIVE_SERVICES, ...EMERGING_TECH_SERVICES];

  const categories = [
    { name: "All", icon: Globe, color: "from-blue-500 to-purple-500", count: allServices.length },
    { name: "AI & IoT", icon: Brain, color: "from-purple-500 to-pink-500", count: allServices.filter(s => s.category.includes('AI') || s.category.includes('IoT')).length },
    { name: "Quantum Computing", icon: Atom, color: "from-indigo-500 to-purple-500", count: allServices.filter(s => s.category.includes('Quantum')).length },
    { name: "Autonomous Systems", icon: Rocket, color: "from-orange-500 to-red-500", count: allServices.filter(s => s.category.includes('Autonomous')).length },
    { name: "Blockchain & Identity", icon: Lock, color: "from-green-500 to-blue-500", count: allServices.filter(s => s.category.includes('Blockchain')).length },
    { name: "AI & Legal Tech", icon: Scale, color: "from-blue-500 to-indigo-500", count: allServices.filter(s => s.category.includes('Legal')).length },
    { name: "Sustainability & Green Tech", icon: Leaf, color: "from-emerald-500 to-green-500", count: allServices.filter(s => s.category.includes('Sustainability') || s.category.includes('Green')).length },
    { name: "Cybersecurity", icon: Shield, color: "from-red-500 to-orange-500", count: allServices.filter(s => s.category.includes('Cybersecurity') || s.category.includes('Security')).length },
    { name: "Smart Cities & IoT", icon: Building, color: "from-gray-500 to-blue-500", count: allServices.filter(s => s.category.includes('Smart Cities')).length },
    { name: "AI & Healthcare", icon: Heart, color: "from-pink-500 to-red-500", count: allServices.filter(s => s.category.includes('Healthcare')).length },
    { name: "Emerging Tech", icon: Zap, color: "from-yellow-500 to-orange-500", count: allServices.filter(s => s.category.includes('Neuromorphic') || s.category.includes('Synthetic Biology') || s.category.includes('Space Technology') || s.category.includes('Materials Science') || s.category.includes('Brain-Computer Interface') || s.category.includes('Digital Twins') || s.category.includes('Edge AI') || s.category.includes('Holographic')).length }
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
      "AI & Healthcare": Heart,
      "Neuromorphic Computing": Brain,
      "Synthetic Biology": Leaf,
      "Space Technology": Satellite,
      "Materials Science": Atom,
      "Brain-Computer Interface": Brain,
      "Quantum Internet": Network,
      "Digital Twins": Monitor,
      "Edge AI": Cpu,
      "Holographic Technology": Eye
    };
    return iconMap[category] || Globe;
  };

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'All' || 
                           (selectedCategory === 'Emerging Tech' && 
                            (service.category.includes('Neuromorphic') || service.category.includes('Synthetic Biology') || 
                             service.category.includes('Space Technology') || service.category.includes('Materials Science') || 
                             service.category.includes('Brain-Computer Interface') || service.category.includes('Quantum Internet') || 
                             service.category.includes('Digital Twins') || service.category.includes('Edge AI') || 
                             service.category.includes('Holographic'))) ||
                           service.category.includes(selectedCategory.replace(' & ', ' ').split(' ')[0]) ||
                           service.category.includes(selectedCategory.replace(' & ', ' ').split(' ')[1] || '');
    
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesPrice = service.price >= priceRange[0] && service.price <= priceRange[1];
    
    return matchesCategory && matchesSearch && matchesPrice;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
        return a.title.localeCompare(b.title);
      case 'innovation':
        return b.innovationLevel.localeCompare(a.innovationLevel);
      default:
        return 0;
    }
  });

  const stats = {
    totalServices: allServices.length,
    averagePrice: Math.round(allServices.reduce((sum, s) => sum + s.price, 0) / allServices.length),
    priceRange: {
      min: Math.min(...allServices.map(s => s.price)),
      max: Math.max(...allServices.map(s => s.price))
    },
    categories: categories.length - 1
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      <SEO 
        title="Comprehensive Services Showcase - Zion Tech Group" 
        description="Explore our complete portfolio of innovative micro SAAS services, IT solutions, and AI innovations. Find the perfect solution for your business needs."
      />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Comprehensive Services Showcase
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Discover our complete portfolio of cutting-edge micro SAAS solutions, IT services, and AI innovations
            </p>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-white">
                <div className="text-2xl font-bold">{stats.totalServices}</div>
                <div className="text-sm text-gray-300">Total Services</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-white">
                <div className="text-2xl font-bold">{stats.categories}</div>
                <div className="text-sm text-gray-300">Categories</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-white">
                <div className="text-2xl font-bold">${stats.averagePrice}</div>
                <div className="text-sm text-gray-300">Avg. Price</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-white">
                <div className="text-2xl font-bold">${stats.priceRange.min}-${stats.priceRange.max}</div>
                <div className="text-sm text-gray-300">Price Range</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            {/* Search */}
            <div className="lg:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services by name, description, or tags..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/20 backdrop-blur-sm rounded-xl text-white placeholder-gray-300 border border-white/20 focus:border-white/40 focus:outline-none"
                />
              </div>
            </div>

            {/* Price Range */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Price Range</label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  placeholder="Min"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                  className="w-20 px-3 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-white border border-white/20 focus:border-white/40 focus:outline-none text-sm"
                />
                <span className="text-gray-300">-</span>
                <input
                  type="number"
                  placeholder="Max"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 2000])}
                  className="w-20 px-3 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-white border border-white/20 focus:border-white/40 focus:outline-none text-sm"
                />
              </div>
            </div>

            {/* Sort By */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-white border border-white/20 focus:border-white/40 focus:outline-none text-sm"
              >
                <option value="name">Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="innovation">Innovation Level</option>
              </select>
            </div>
          </div>

          {/* Category Filters */}
          <div className="mt-6">
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
                  <span className="bg-white/20 rounded-full px-2 py-1 text-xs">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Results Summary */}
      <div className="container mx-auto px-4 mb-6">
        <div className="flex items-center justify-between text-white">
          <div>
            <span className="text-lg font-semibold">{filteredServices.length}</span> services found
            {selectedCategory !== 'All' && (
              <span className="text-gray-300 ml-2">in {selectedCategory}</span>
            )}
          </div>
          <div className="text-sm text-gray-300">
            Showing {Math.min(sortedServices.length, 20)} of {sortedServices.length} results
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedServices.slice(0, 20).map((service) => {
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
                        <CheckCircle className="w-4 h-4 text-green-400" />
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

                {/* Quick Stats */}
                <div className="mb-4 grid grid-cols-2 gap-3 text-sm">
                  <div className="bg-white/5 rounded-lg p-2">
                    <div className="text-gray-400">Delivery</div>
                    <div className="text-white font-semibold">{service.estimatedDelivery}</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-2">
                    <div className="text-gray-400">ROI</div>
                    <div className="text-green-400 font-semibold">{service.roi}</div>
                  </div>
                </div>

                {/* Innovation Level */}
                <div className="mb-4 p-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-500/30">
                  <div className="text-sm text-purple-300 font-semibold mb-1">Innovation Level</div>
                  <div className="text-xs text-purple-200">{service.innovationLevel}</div>
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

        {filteredServices.length > 20 && (
          <div className="text-center mt-8">
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
              Load More Services
            </button>
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
            Our comprehensive portfolio of innovative services is designed to give you a competitive edge in today's rapidly evolving digital landscape. 
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