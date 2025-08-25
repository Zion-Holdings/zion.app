import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShoppingCart, 
  Users, 
  Settings, 
  Cloud, 
  Brain, 
  Shield, 
  Zap, 
  Globe,
  ArrowRight,
  Star,
  TrendingUp
} from 'lucide-react';

const Marketplace: React.FC = () => {
  const marketplaceCategories = [
    {
      title: "AI & Machine Learning",
      description: "Cutting-edge AI solutions for business automation and intelligence",
      icon: Brain,
      link: "/ai-services",
      features: ["AI Chatbots", "Predictive Analytics", "Computer Vision", "NLP Solutions"]
    },
    {
      title: "Cloud & DevOps",
      description: "Scalable cloud infrastructure and automated deployment solutions",
      icon: Cloud,
      link: "/cloud-devops-solutions",
      features: ["AWS/Azure/GCP", "Kubernetes", "CI/CD Pipelines", "Infrastructure as Code"]
    },
    {
      title: "Enterprise Solutions",
      description: "Comprehensive business transformation and digital solutions",
      icon: Settings,
      link: "/enterprise-solutions",
      features: ["ERP Integration", "Digital Transformation", "Process Automation", "Legacy Modernization"]
    },
    {
      title: "Micro SAAS Services",
      description: "Specialized software solutions for specific business needs",
      icon: Zap,
      link: "/micro-saas-services",
      features: ["Custom Applications", "API Development", "Database Solutions", "Web Applications"]
    },
    {
      title: "Talent & Expertise",
      description: "Access to skilled professionals and industry experts",
      icon: Users,
      link: "/talent",
      features: ["AI Engineers", "DevOps Specialists", "Data Scientists", "Full-Stack Developers"]
    },
    {
      title: "Equipment & Tools",
      description: "Professional-grade tools and equipment for IT operations",
      icon: ShoppingCart,
      link: "/equipment",
      features: ["Network Equipment", "Security Tools", "Development Tools", "Testing Equipment"]
    }
  ];

  const featuredServices = [
    {
      title: "AI-Powered Business Intelligence",
      description: "Transform your data into actionable insights with our advanced AI analytics platform",
      price: "From $2,500/month",
      rating: 4.9,
      reviews: 127,
      badge: "Popular"
    },
    {
      title: "Cloud Migration & Optimization",
      description: "Seamlessly migrate to the cloud and optimize your infrastructure for cost and performance",
      price: "From $5,000",
      rating: 4.8,
      reviews: 89,
      badge: "Featured"
    },
    {
      title: "Cybersecurity Assessment",
      description: "Comprehensive security audit and vulnerability assessment for your organization",
      price: "From $3,500",
      rating: 4.9,
      reviews: 156,
      badge: "Essential"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              Zion Tech Group
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Marketplace
              </span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Discover innovative solutions, expert talent, and cutting-edge technology 
              to transform your business and accelerate growth.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                Get Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Marketplace Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Explore Our Marketplace
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive solutions across all technology domains
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {marketplaceCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <category.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="ml-4 text-xl font-semibold text-gray-900">
                  {category.title}
                </h3>
              </div>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <ul className="space-y-2 mb-6">
                {category.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                to={category.link}
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Services */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Featured Services
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Our most popular and highly-rated solutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:border-blue-300 transition-colors"
              >
                {service.badge && (
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-blue-600 rounded-full mb-4">
                    {service.badge}
                  </span>
                )}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-gray-900">{service.price}</span>
                  <div className="flex items-center">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(service.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">
                      {service.rating} ({service.reviews} reviews)
                    </span>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-blue-100">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">1000+</div>
              <div className="text-blue-100">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-blue-100">Expert Team Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">99.9%</div>
              <div className="text-blue-100">Uptime Guarantee</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of companies that have already accelerated their growth 
            with Zion Tech Group's innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/request-quote"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Get Free Quote
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;