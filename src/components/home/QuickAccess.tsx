import React from 'react';
import { Link } from 'react-router-dom';

export const QuickAccess: React.FC = () => {
  const quickLinks = [
    {
      title: 'AI Services',
      description: 'Cutting-edge AI solutions',
      link: '/comprehensive-services?category=ai',
      icon: '🤖'
    },
    {
      title: 'IT Solutions',
      description: 'Comprehensive IT services',
      link: '/comprehensive-services?category=it',
      icon: '💻'
    },
    {
      title: 'Pricing',
      description: 'View our pricing plans',
      link: '/pricing',
      icon: '💰'
    },
    {
      title: 'Contact',
      description: 'Get in touch with us',
      link: '/contact',
      icon: '📞'
    }
  ];

  return (
    <section className="py-12 bg-zion-blue-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Quick Access
          </h2>
          <p className="text-zion-slate-light">
            Get started quickly with our most popular services
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickLinks.map((item) => (
            <Link
              key={item.title}
              to={item.link}
              className="bg-white/10 backdrop-blur-sm rounded-lg border border-zion-blue-light p-4 text-center hover:border-zion-cyan transition-colors group"
            >
              <div className="text-3xl mb-2">{item.icon}</div>
              <h3 className="text-white font-semibold mb-1 group-hover:text-zion-cyan transition-colors">
                {item.title}
              </h3>
              <p className="text-zion-slate-light text-sm">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};