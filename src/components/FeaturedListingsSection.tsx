import React from 'react';
import { Link } from 'react-router-dom';

export const FeaturedListingsSection: React.FC = () => {
  const featuredServices = [
    {
      id: 'ai-automation',
      title: 'AI Process Automation',
      description: 'Streamline your business operations with intelligent automation',
      category: 'AI Services',
      price: '$2,999',
      image: '/images/ai-automation.jpg'
    },
    {
      id: 'cloud-migration',
      title: 'Cloud Migration Services',
      description: 'Seamlessly migrate your infrastructure to the cloud',
      category: 'IT Services',
      price: '$4,999',
      image: '/images/cloud-migration.jpg'
    },
    {
      id: 'cybersecurity-audit',
      title: 'Cybersecurity Audit',
      description: 'Comprehensive security assessment and recommendations',
      category: 'Cybersecurity',
      price: '$3,499',
      image: '/images/cybersecurity-audit.jpg'
    }
  ];

  return (
    <section className="py-16 bg-zion-blue-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Featured Services
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Discover our most popular and innovative solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServices.map((service) => (
            <div key={service.id} className="bg-zion-blue-light rounded-lg overflow-hidden border border-zion-blue-light/30 hover:border-zion-cyan/50 transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-zion-blue to-zion-purple flex items-center justify-center">
                <span className="text-6xl">🚀</span>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-zion-cyan font-medium">{service.category}</span>
                  <span className="text-2xl font-bold text-white">{service.price}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-zion-slate-light mb-4">{service.description}</p>
                <Link 
                  to={`/services/${service.id}`}
                  className="inline-block bg-zion-cyan hover:bg-zion-cyan-dark text-white px-6 py-2 rounded-lg transition-colors duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/comprehensive-services"
            className="inline-block bg-gradient-to-r from-zion-purple to-zion-cyan text-white px-8 py-3 rounded-lg font-semibold hover:from-zion-purple-dark hover:to-zion-cyan-dark transition-all duration-300"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};
