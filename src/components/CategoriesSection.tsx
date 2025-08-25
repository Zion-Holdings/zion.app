import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Brain, Shield, Cloud, Database, Globe } from 'lucide-react';
import { GradientHeading } from '@/components/ui/GradientHeading';

export function CategoriesSection() {
  const categories = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI & Machine Learning",
      description: "Cutting-edge AI solutions for business automation and insights",
      link: "/micro-saas-services",
      color: "from-zion-cyan to-zion-purple"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity",
      description: "Advanced security solutions to protect your digital assets",
      link: "/micro-saas-services",
      color: "from-zion-purple to-zion-cyan"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud & DevOps",
      description: "Scalable cloud infrastructure and development operations",
      link: "/micro-saas-services",
      color: "from-zion-blue to-zion-cyan"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Analytics",
      description: "Powerful insights through advanced data analysis",
      link: "/micro-saas-services",
      color: "from-zion-cyan to-zion-blue"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Development Tools",
      description: "Professional development and coding solutions",
      link: "/micro-saas-services",
      color: "from-zion-purple to-zion-blue"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing and SEO solutions",
      link: "/micro-saas-services",
      color: "from-zion-blue to-zion-purple"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-zion-blue-dark to-zion-slate-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <GradientHeading size="4xl" className="mb-4">
            Explore Our Service Categories
          </GradientHeading>
          <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
            Discover comprehensive solutions across all major technology domains, 
            designed to accelerate your business growth and digital transformation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={category.link}
              className="group p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-zion-cyan/30 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-zion-cyan/25 transition-all duration-300`}>
                <div className="text-white">
                  {category.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                {category.title}
              </h3>
              <p className="text-zion-slate-light group-hover:text-white transition-colors">
                {category.description}
              </p>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link
            to="/micro-saas-services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300"
          >
            View All Services
            <Brain className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}