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
      id: 'cybersecurity',
      title: 'Cybersecurity Assessment',
      description: 'Comprehensive security audit and protection solutions',
      category: 'Cybersecurity',
      price: '$3,499',
      image: '/images/cybersecurity.jpg'
    }
  ];

  return (
    <section className="py-16 bg-zion-slate">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
            <div key={service.id} className="bg-white/5 backdrop-blur-sm rounded-lg border border-zion-blue-light p-6 hover:border-zion-cyan transition-colors">
              <div className="h-48 bg-gradient-to-br from-zion-blue to-zion-purple rounded-lg mb-4 flex items-center justify-center">
                <span className="text-4xl">🚀</span>
              </div>
              <div className="mb-4">
                <span className="inline-block bg-zion-cyan text-white text-xs px-2 py-1 rounded-full mb-2">
                  {service.category}
                </span>
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-zion-slate-light text-sm">{service.description}</p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-zion-gold">{service.price}</span>
                <Link
                  to={`/services/${service.id}`}
                  className="text-zion-cyan hover:text-zion-cyan-light transition-colors font-semibold"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link
            to="/comprehensive-services"
            className="inline-block bg-zion-cyan text-white px-8 py-3 rounded-lg font-semibold hover:bg-zion-cyan-light transition-colors"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};