import React from 'react';
import { Link } from 'react-router-dom';

export function QuickAccess() {
  const quickLinks = [
    {
      title: 'AI Services',
      description: 'Machine learning, automation, and AI consulting',
      icon: '🤖',
      path: '/ai-services',
      color: 'from-zion-cyan to-blue-500'
    },
    {
      title: 'Cybersecurity',
      description: 'Security audits, threat detection, and protection',
      icon: '🔒',
      path: '/cybersecurity',
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'IT Services',
      description: 'Infrastructure, cloud, and digital transformation',
      icon: '💻',
      path: '/expanded-services',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Green IT',
      description: 'Sustainable and eco-friendly technology solutions',
      icon: '🌱',
      path: '/green-it',
      color: 'from-emerald-500 to-teal-500'
    }
  ];

  return (
    <section className="py-16 bg-zion-blue-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Quick Access</h2>
          <p className="text-zion-slate-light text-lg">
            Get started with our most popular services
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickLinks.map((link) => (
            <Link
              key={link.title}
              to={link.path}
              className="group bg-zion-blue border border-zion-blue-light rounded-lg p-6 hover:border-zion-cyan transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/20 transform hover:-translate-y-1"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${link.color} rounded-lg flex items-center justify-center text-3xl mb-4 mx-auto`}>
                {link.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-zion-cyan transition-colors text-center">
                {link.title}
              </h3>
              <p className="text-zion-slate-light text-sm text-center">
                {link.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}