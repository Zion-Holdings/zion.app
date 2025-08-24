import React from 'react';
import { Link } from 'react-router-dom';

export function FeaturedListingsSection() {
  const featuredServices = [
    {
      id: 'ai-consulting',
      title: 'AI Consulting Services',
      description: 'Expert guidance on implementing AI solutions for your business',
      price: 'From $150/hr',
      category: 'AI Services',
      path: '/ai-services'
    },
    {
      id: 'cyber-audit',
      title: 'Cybersecurity Audit',
      description: 'Comprehensive security assessment and vulnerability testing',
      price: 'From $2,500',
      category: 'Cybersecurity',
      path: '/cybersecurity'
    },
    {
      id: 'it-infrastructure',
      title: 'IT Infrastructure Setup',
      description: 'Complete IT infrastructure design and implementation',
      price: 'From $5,000',
      category: 'IT Services',
      path: '/expanded-services'
    },
    {
      id: 'green-solutions',
      title: 'Green IT Solutions',
      description: 'Sustainable technology solutions for eco-friendly businesses',
      price: 'From $3,000',
      category: 'Green IT',
      path: '/green-it'
    }
  ];

  return (
    <section className="py-16 bg-zion-blue-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Featured Services</h2>
          <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
            Discover our most popular and highly-rated services
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredServices.map((service) => (
            <Link
              key={service.id}
              to={service.path}
              className="group bg-zion-blue border border-zion-blue-light rounded-lg p-6 hover:border-zion-cyan transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/20"
            >
              <div className="mb-4">
                <span className="inline-block bg-zion-cyan/20 text-zion-cyan text-xs font-medium px-2 py-1 rounded">
                  {service.category}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                {service.title}
              </h3>
              <p className="text-zion-slate-light text-sm mb-4">
                {service.description}
              </p>
              <div className="text-zion-cyan font-semibold">
                {service.price}
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Link
            to="/services"
            className="inline-flex items-center px-6 py-3 bg-zion-cyan text-white rounded-lg font-medium hover:bg-zion-cyan/90 transition-colors"
          >
            View All Services
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}