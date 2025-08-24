
import React from 'react';
import { Link } from "react-router-dom";

export function FeatureCTAs() {
  const features = [
    {
      title: "AI & Automation",
      description: "Intelligent automation solutions to streamline your business processes",
      link: "/ai-services",
      color: "from-purple-500 to-indigo-600"
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and DevOps services for modern businesses",
      link: "/enterprise-solutions",
      color: "from-blue-500 to-cyan-600"
    },
    {
      title: "Cybersecurity",
      description: "Advanced security and protection services to safeguard your digital assets",
      link: "/comprehensive-services",
      color: "from-red-500 to-pink-600"
    },
    {
      title: "Data Analytics",
      description: "Transform your data into actionable insights with advanced analytics",
      link: "/comprehensive-services",
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "Micro SAAS",
      description: "Custom software solutions tailored to your specific business needs",
      link: "/micro-saas",
      color: "from-yellow-500 to-orange-600"
    },
    {
      title: "Comprehensive Solutions",
      description: "End-to-end technology solutions for enterprise transformation",
      link: "/comprehensive-services",
      color: "from-indigo-500 to-purple-600"
    }
  ];

  return (
    <section className="py-16 bg-zion-blue-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Our Key Features</h2>
          <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
            Discover the comprehensive range of services and solutions we offer to help your business thrive in the digital age.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-zion-blue-light rounded-lg p-6 border border-zion-blue-light hover:border-zion-purple/50 transition-all duration-300">
              <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                <div className="text-white text-xl font-bold">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-zion-slate-light mb-4">{feature.description}</p>
              <Link 
                to={feature.link}
                className="inline-block bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-6 py-2 rounded-lg font-medium hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/comprehensive-services"
            className="inline-block bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-zion-purple-light hover:to-zion-purple transition-all duration-300"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
