import React from 'react';
import { Link } from "react-router-dom";

export function ServicesShowcase() {
  const featuredServices = [
    {
      id: "ai-chatbot",
      title: "AI Chatbot Development",
      description: "Custom AI chatbots for customer service, sales, and support",
      category: "AI & Automation",
      price: 2500,
      rating: 4.9,
      reviewCount: 47
    },
    {
      id: "cloud-migration",
      title: "Cloud Migration Services",
      description: "Seamless migration to AWS, Azure, or Google Cloud",
      category: "Cloud & DevOps",
      price: 5000,
      rating: 4.8,
      reviewCount: 32
    },
    {
      id: "cybersecurity",
      title: "Cybersecurity Assessment",
      description: "Comprehensive security audit and protection implementation",
      category: "Security",
      price: 3500,
      rating: 4.9,
      reviewCount: 28
    },
    {
      id: "data-analytics",
      title: "Data Analytics Platform",
      description: "Real-time dashboards and business intelligence solutions",
      category: "Data & Analytics",
      price: 4000,
      rating: 4.7,
      reviewCount: 35
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "AI & Automation": "from-purple-500 to-indigo-600",
      "Cloud & DevOps": "from-blue-500 to-cyan-600",
      "Security": "from-red-500 to-pink-600",
      "Data & Analytics": "from-green-500 to-emerald-600"
    };
    return colors[category] || "from-gray-500 to-gray-600";
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
                  <span className="text-xs font-medium text-zion-slate bg-zion-slate/10 px-2 py-1 rounded-full">
                    {service.category}
                  </span>
                  <div className="flex items-center">
                    <span className="text-yellow-500 text-sm">★</span>
                    <span className="text-sm text-zion-slate ml-1">{service.rating}</span>
                    <span className="text-xs text-zion-slate-light ml-1">({service.reviewCount})</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-zion-blue mb-2">{service.title}</h3>
                <p className="text-zion-slate-light text-sm mb-4 line-clamp-2">{service.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-zion-purple">${service.price.toLocaleString()}</span>
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
      </div>
    </section>
  );
}