import React from 'react';
import { Link } from 'react-router-dom';

interface CategoriesSectionProps {
  showTitle?: boolean;
}

export function CategoriesSection({ showTitle = true }: CategoriesSectionProps) {
  const categories = [
    {
      id: 'ai-services',
      name: 'AI Services',
      description: 'Artificial Intelligence solutions and services',
      icon: '🤖',
      path: '/ai-services'
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity',
      description: 'Security and protection services',
      icon: '🔒',
      path: '/cybersecurity'
    },
    {
      id: 'it-services',
      name: 'IT Services',
      description: 'Information Technology solutions',
      icon: '💻',
      path: '/expanded-services'
    },
    {
      id: 'green-it',
      name: 'Green IT',
      description: 'Sustainable technology solutions',
      icon: '🌱',
      path: '/green-it'
    }
  ];

  return (
    <section className="py-16 bg-zion-blue-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {showTitle && (
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Explore Our Services</h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Discover comprehensive solutions across AI, cybersecurity, IT services, and sustainable technology
            </p>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={category.path}
              className="group bg-zion-blue border border-zion-blue-light rounded-lg p-6 hover:border-zion-cyan transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/20"
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                {category.name}
              </h3>
              <p className="text-zion-slate-light text-sm">
                {category.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}