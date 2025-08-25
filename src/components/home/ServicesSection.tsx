import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Shield, Cpu, Rocket, Users, TrendingUp } from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Cutting-edge artificial intelligence solutions that transform business operations",
    features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Machine Learning Models"],
    path: "/ai-solutions",
    color: "from-cyan-500 to-blue-600"
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Enterprise-grade security solutions to protect your digital assets",
    features: ["Threat Detection", "Incident Response", "Compliance Management", "Security Audits"],
    path: "/services/cybersecurity",
    color: "from-purple-500 to-pink-600"
  },
  {
    icon: Cpu,
    title: "Cloud & Infrastructure",
    description: "Scalable cloud solutions and robust IT infrastructure management",
    features: ["Cloud Migration", "DevOps Automation", "Infrastructure as Code", "Performance Optimization"],
    path: "/services/cloud-devops",
    color: "from-green-500 to-emerald-600"
  },
  {
    icon: Rocket,
    title: "Digital Transformation",
    description: "End-to-end digital transformation strategies for modern businesses",
    features: ["Process Automation", "Legacy Modernization", "Change Management", "ROI Optimization"],
    path: "/digital-transformation",
    color: "from-orange-500 to-red-600"
  },
  {
    icon: Users,
    title: "Enterprise Solutions",
    description: "Comprehensive enterprise software and integration services",
    features: ["ERP Systems", "CRM Integration", "Data Analytics", "Business Intelligence"],
    path: "/enterprise-solutions",
    color: "from-indigo-500 to-purple-600"
  },
  {
    icon: TrendingUp,
    title: "Business Intelligence",
    description: "Data-driven insights and analytics to drive strategic decisions",
    features: ["Data Warehousing", "Real-time Dashboards", "Predictive Modeling", "KPI Tracking"],
    path: "/services/business-intelligence",
    color: "from-yellow-500 to-orange-600"
  }
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900/50 to-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your business growth and digital transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 bg-gradient-to-r ${service.color} rounded-lg mr-4`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {service.title}
                </h3>
              </div>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-300 mb-3">Key Features:</h4>
                <div className="grid grid-cols-1 gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <Link
                to={service.path}
                className="inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-lg transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/25"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-lg px-8 py-4 rounded-lg font-semibold transition-all duration-300 group hover:shadow-lg hover:shadow-cyan-500/25"
          >
            <span>View All Services</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}