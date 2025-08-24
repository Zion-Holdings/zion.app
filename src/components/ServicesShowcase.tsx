import { useState } from 'react';

// Mock data for services since the comprehensiveServices file was removed
const SERVICE_CATEGORIES = [
  { id: 1, name: "AI Services", count: 10, icon: "🤖" },
  { id: 2, name: "Micro SAAS", count: 8, icon: "💻" },
  { id: 3, name: "IT Services", count: 12, icon: "🖥️" },
  { id: 4, name: "Blockchain & Web3", count: 5, icon: "⛓️" },
  { id: 5, name: "IoT & Edge Computing", count: 6, icon: "🌐" },
  { id: 6, name: "Emerging Technologies", count: 4, icon: "🔮" },
  { id: 7, name: "Cybersecurity Services", count: 3, icon: "🔒" },
  { id: 8, name: "Data Science & Analytics", count: 4, icon: "📊" }
];

const COMPREHENSIVE_SERVICES = [
  {
    id: "ai-1",
    name: "AI-Powered Chatbot Development",
    description: "Custom AI chatbots for customer service, sales, and support with natural language processing capabilities",
    category: "AI Services",
    price: 2999,
    rating: 4.8,
    features: ["Natural language processing", "Multi-language support", "Integration APIs", "Analytics dashboard", "24/7 availability"]
  },
  {
    id: "ai-2",
    name: "Machine Learning Model Development",
    description: "Custom ML models for predictive analytics, pattern recognition, and data-driven decision making",
    category: "AI Services",
    price: 5999,
    rating: 4.9,
    features: ["Custom algorithm development", "Data preprocessing", "Model training", "Performance optimization", "Deployment support"]
  },
  {
    id: "micro-1",
    name: "Project Management Platform",
    description: "Comprehensive project management solution with task tracking, team collaboration, and reporting",
    category: "Micro SAAS",
    price: 199,
    rating: 4.7,
    features: ["Task management", "Team collaboration", "Time tracking", "Reporting", "Mobile app"]
  },
  {
    id: "it-1",
    name: "Cloud Infrastructure Setup",
    description: "Complete cloud infrastructure design and implementation for scalable applications",
    category: "IT Services",
    price: 3999,
    rating: 4.8,
    features: ["Architecture design", "Security implementation", "Monitoring setup", "Backup solutions", "24/7 support"]
  }
];

const SERVICE_ADDONS = [
  {
    id: "custom-model",
    name: "Custom AI Model Training",
    description: "Specialized training for your specific use case and data",
    price: 2499,
    category: "AI Services"
  },
  {
    id: "api-access",
    name: "API Access & Documentation",
    description: "Full API access with comprehensive documentation and support",
    price: 999,
    category: "All Services"
  },
  {
    id: "24-7-support",
    name: "24/7 Priority Support",
    description: "Round-the-clock technical support with guaranteed response times",
    price: 1999,
    category: "All Services"
  }
];

export function ServicesShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = COMPREHENSIVE_SERVICES.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (categoryName: string) => {
    const category = SERVICE_CATEGORIES.find(cat => cat.name === categoryName);
    return category?.icon || '💼';
  };

  const formatPrice = (price: number) => {
    if (price >= 1000) {
      return `$${(price / 1000).toFixed(1)}k`;
    }
    return `$${price}`;
  };

  return (
    <div className="py-12 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Tech Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our complete range of AI, Micro SAAS, IT, Blockchain, IoT, and Emerging Tech services designed to transform your business.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            <div className="relative w-full max-w-md">
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <svg className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Categories</option>
              {SERVICE_CATEGORIES.map(category => (
                <option key={category.id} value={category.name}>
                  {category.name} ({category.count})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              selectedCategory === 'all'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white text-gray-700 border border-gray-300 hover:border-blue-300'
            }`}
          >
            All Services
          </button>
          {SERVICE_CATEGORIES.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.name)}
              className={`px-6 py-2 rounded-full font-medium transition-all flex items-center gap-2 ${
                selectedCategory === category.name
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 border border-gray-300 hover:border-blue-300'
              }`}
            >
              <span>{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredServices.map(service => (
            <div key={service.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
              {/* Service Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                <span className="text-6xl">{getCategoryIcon(service.category)}</span>
              </div>

              {/* Service Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {service.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-400">★</span>
                    <span className="text-sm font-medium text-gray-700">{service.rating}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.name}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{service.description}</p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-gray-900">
                    {formatPrice(service.price)}
                  </div>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Addon Services Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Custom Addons & Enhancements
            </h3>
            <p className="text-lg text-gray-600">
              Enhance your services with our specialized addons and customization options
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICE_ADDONS.map(addon => (
              <div key={addon.id} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                    {addon.category}
                  </span>
                  <span className="text-lg font-bold text-gray-900">${addon.price}</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{addon.name}</h4>
                <p className="text-sm text-gray-600">{addon.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Get in touch with our experts to discuss your specific needs and find the perfect solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Schedule Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                View All Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}