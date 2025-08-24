import React from 'react';
import { Link } from "react-router-dom";
import { COMPREHENSIVE_SERVICES } from '@/data/comprehensiveServices';

export function ServicesShowcase() {
  // Get featured services from the comprehensive services data
  const featuredServices = COMPREHENSIVE_SERVICES.filter(service => service.featured).slice(0, 8);

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "AI & Machine Learning": "from-purple-500 to-indigo-600",
      "Cloud & DevOps": "from-blue-500 to-cyan-600",
      "Cybersecurity": "from-red-500 to-pink-600",
      "Data & Analytics": "from-green-500 to-emerald-600",
      "Micro SAAS": "from-emerald-500 to-teal-600",
      "Enterprise Solutions": "from-slate-600 to-gray-700"
    };
    return colors[category] || "from-gray-500 to-gray-600";
  };

  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: string } = {
      "AI & Machine Learning": "🤖",
      "Cloud & DevOps": "☁️",
      "Cybersecurity": "🔒",
      "Data & Analytics": "📊",
      "Micro SAAS": "💻",
      "Enterprise Solutions": "🏢"
    };
    return icons[category] || "💼";
  };

  const getPriceDisplay = (service: any) => {
    if (service.priceType === 'monthly') {
      return `$${service.price}/month`;
    } else if (service.priceType === 'yearly') {
      return `$${service.price}/year`;
    } else if (service.priceType === 'per-user') {
      return `$${service.price}/user`;
    } else {
      return `$${service.price.toLocaleString()}`;
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-zion-blue mb-4">Featured Services</h2>
          <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
            Discover our most popular and highly-rated services that are helping businesses transform and grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredServices.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden border border-zion-slate/10 hover:shadow-xl transition-all duration-300">
              <div className={`h-2 bg-gradient-to-r ${getCategoryColor(service.category)}`}></div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{getCategoryIcon(service.category)}</span>
                    <span className="text-xs font-medium text-zion-slate bg-zion-slate/10 px-2 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-yellow-500 text-sm">★</span>
                    <span className="text-sm text-zion-slate ml-1">{service.rating}</span>
                    <span className="text-xs text-zion-slate-light ml-1">({service.reviewCount})</span>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-zion-blue mb-2">{service.title}</h3>
                <p className="text-zion-slate-light text-sm mb-4 line-clamp-2">{service.description}</p>

                {/* Key Features Preview */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {service.features.slice(0, 2).map((feature, index) => (
                      <span key={index} className="text-xs bg-zion-slate/10 text-zion-slate px-2 py-1 rounded-full">
                        {feature}
                      </span>
                    ))}
                    {service.features.length > 2 && (
                      <span className="text-xs text-zion-slate-light">
                        +{service.features.length - 2} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-zion-purple">{getPriceDisplay(service)}</span>
                  <Link
                    to={`/comprehensive-services?service=${service.id}`}
                    className="text-zion-cyan hover:text-zion-cyan-dark font-medium text-sm transition-colors"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/comprehensive-services"
            className="inline-block bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300"
          >
            Explore All Services
          </Link>
        </div>

        {/* Service Categories Overview */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-zion-blue text-center mb-8">Service Categories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "AI & Machine Learning",
                description: "Cutting-edge AI solutions for business automation and insights",
                icon: "🤖",
                color: "from-purple-500 to-indigo-600",
                link: "/ai-services",
                serviceCount: COMPREHENSIVE_SERVICES.filter(s => s.category === "AI & Machine Learning").length
              },
              {
                title: "Cloud & DevOps",
                description: "Scalable cloud infrastructure and automation solutions",
                icon: "☁️",
                color: "from-blue-500 to-cyan-600",
                link: "/comprehensive-services",
                serviceCount: COMPREHENSIVE_SERVICES.filter(s => s.category === "Cloud & DevOps").length
              },
              {
                title: "Cybersecurity",
                description: "Comprehensive security and compliance solutions",
                icon: "🔒",
                color: "from-red-500 to-pink-600",
                link: "/comprehensive-services",
                serviceCount: COMPREHENSIVE_SERVICES.filter(s => s.category === "Cybersecurity").length
              },
              {
                title: "Data & Analytics",
                description: "Data-driven insights and business intelligence",
                icon: "📊",
                color: "from-green-500 to-emerald-600",
                link: "/comprehensive-services",
                serviceCount: COMPREHENSIVE_SERVICES.filter(s => s.category === "Data & Analytics").length
              },
              {
                title: "Micro SAAS",
                description: "Scalable software solutions for growing businesses",
                icon: "💻",
                color: "from-emerald-500 to-teal-600",
                link: "/micro-saas",
                serviceCount: COMPREHENSIVE_SERVICES.filter(s => s.category === "Micro SAAS").length
              },
              {
                title: "Enterprise Solutions",
                description: "Large-scale transformation and enterprise systems",
                icon: "🏢",
                color: "from-slate-600 to-gray-700",
                link: "/enterprise-solutions",
                serviceCount: COMPREHENSIVE_SERVICES.filter(s => s.category === "Enterprise Solutions").length
              }
            ].map((category, index) => (
              <Link
                key={index}
                to={category.link}
                className="group block"
              >
                <div className={`rounded-lg overflow-hidden h-full border border-zion-slate/10 bg-white p-6 transition-all duration-300 hover:border-zion-purple/50 hover:translate-y-[-5px] hover:shadow-lg`}>
                  <div className={`rounded-full w-16 h-16 bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white text-2xl">
                      {category.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-zion-blue mb-2">{category.title}</h3>
                  <p className="text-zion-slate-light mb-4">{category.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-zion-slate-light">{category.serviceCount} services</span>
                    <span className="text-zion-cyan group-hover:text-zion-cyan-dark transition-colors">Learn More →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}