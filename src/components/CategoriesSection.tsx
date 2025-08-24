import React from 'react';
import { Link } from 'react-router-dom';

export function CategoriesSection() {
  const categories = [
    { name: 'AI & Machine Learning', icon: '🤖', link: '/categories/ai-ml' },
    { name: 'Cybersecurity', icon: '🔒', link: '/categories/cybersecurity' },
    { name: 'Cloud Services', icon: '☁️', link: '/categories/cloud' },
    { name: 'Web Development', icon: '🌐', link: '/categories/web-dev' },
    { name: 'Mobile Apps', icon: '📱', link: '/categories/mobile' },
    { name: 'Data Analytics', icon: '📊', link: '/categories/data' }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Browse Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={category.link}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900">{category.name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}