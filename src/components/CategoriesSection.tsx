
import React from 'react';
import { Link } from 'react-router-dom';
import GradientHeading from './GradientHeading';

interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  count: number;
  color: string;
}

const categories: Category[] = [
  {
    id: 'ai-ml',
    name: 'AI & Machine Learning',
    description: 'Cutting-edge artificial intelligence and machine learning solutions',
    icon: '🤖',
    count: 8,
    color: 'from-purple-500 to-indigo-600'
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    description: 'Advanced security solutions and threat protection',
    icon: '🔒',
    count: 5,
    color: 'from-red-500 to-pink-600'
  },
  {
    id: 'cloud-devops',
    name: 'Cloud & DevOps',
    description: 'Cloud infrastructure and development operations automation',
    icon: '☁️',
    count: 6,
    color: 'from-blue-500 to-cyan-600'
  },
  {
    id: 'web-development',
    name: 'Web Development',
    description: 'Modern web applications and digital solutions',
    icon: '🌐',
    count: 4,
    color: 'from-green-500 to-teal-600'
  },
  {
    id: 'data-analytics',
    name: 'Data Analytics',
    description: 'Data processing, analytics, and business intelligence',
    icon: '📊',
    count: 3,
    color: 'from-yellow-500 to-orange-600'
  },
  {
    id: 'iot-hardware',
    name: 'IoT & Hardware',
    description: 'Internet of Things and hardware solutions',
    icon: '🌐',
    count: 2,
    color: 'from-indigo-500 to-purple-600'
  },
  {
    id: 'blockchain-web3',
    name: 'Blockchain & Web3',
    description: 'Blockchain technology and Web3 solutions',
    icon: '⛓️',
    count: 2,
    color: 'from-gray-500 to-slate-600'
  },
  {
    id: 'digital-transformation',
    name: 'Digital Transformation',
    description: 'End-to-end digital transformation services',
    icon: '🚀',
    count: 3,
    color: 'from-emerald-500 to-green-600'
  }
];

export default function CategoriesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-zion-blue-dark to-zion-blue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <GradientHeading>Explore Categories</GradientHeading>
          <p className="text-xl text-zion-slate-light mt-4 max-w-3xl mx-auto">
            Discover our comprehensive ecosystem of tech services, talent, equipment, and innovation
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/services?category=${category.id}`}
              className="group block"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 border border-zion-blue-light hover:border-zion-cyan">
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl">{category.icon}</span>
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                  {category.name}
                </h3>
                
                <p className="text-sm text-zion-slate-light mb-3 line-clamp-2">
                  {category.description}
                </p>
                
                <div className="flex items-center justify-center text-zion-cyan text-sm font-medium">
                  <span>{category.count} Services</span>
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
