
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Shield, BarChart3, Bot, Globe, Sparkles, Star, TrendingUp, Building, Settings, Code, Rocket, Dna, Car } from 'lucide-react';

export default function Home() {
  const features = [
    {
      title: "AI Content Generation",
      description: "Advanced AI-powered content creation platform for blogs, social media, marketing copy, and technical documentation with SEO optimization.",
      icon: <Brain className="h-10 w-10 p-2 rounded-md bg-purple-100 text-purple-700" />,
      link: "/all-services?category=AI Services",
      badge: "New",
      details: "GPT-4 powered content generation with SEO optimization, multi-language support, and brand voice customization. Save 70% on content creation costs."
    },
    {
      title: "AI Chatbot Builder Suite",
      description: "No-code AI chatbot creation platform with advanced NLP, multi-channel deployment, and analytics dashboard.",
      icon: <Bot className="h-10 w-10 p-2 rounded-md bg-blue-100 text-blue-700" />,
      link: "/all-services?category=AI Services",
      badge: "Featured",
      details: "Reduce customer support costs by 60% and handle 80% of inquiries automatically with our intelligent chatbot solutions."
    },
    {
      title: "AI-Powered Business Analytics",
      description: "Machine learning-driven business intelligence platform with predictive analytics and automated insights.",
      icon: <BarChart3 className="h-10 w-10 p-2 rounded-md bg-green-100 text-green-700" />,
      link: "/all-services?category=AI Services",
      badge: "Premium",
      details: "Improve decision-making accuracy by 40% and identify trends before competitors with our advanced analytics platform."
    },
    {
      title: "Cloud Migration & Optimization",
      description: "Complete cloud migration solution for AWS, Azure, or Google Cloud with minimal downtime and cost optimization.",
      icon: <Globe className="h-10 w-10 p-2 rounded-md bg-cyan-100 text-cyan-700" />,
      link: "/all-services?category=IT Services",
      badge: "Popular",
      details: "Reduce infrastructure costs by 25-40% and improve scalability with our expert cloud migration services."
    },
    {
      title: "Cybersecurity Assessment",
      description: "Comprehensive security audit including penetration testing, vulnerability assessment, and compliance review.",
      icon: <Shield className="h-10 w-10 p-2 rounded-md bg-red-100 text-red-700" />,
      link: "/all-services?category=Security",
      badge: "Essential",
      details: "Protect your business with enterprise-grade security assessments and compliance solutions."
    },
    {
      title: "Business Process Automation",
      description: "End-to-end automation solutions that streamline operations and reduce manual tasks by up to 80%.",
      icon: <Settings className="h-10 w-10 p-2 rounded-md bg-orange-100 text-orange-700" />,
      link: "/all-services?category=Automation",
      badge: "Efficient",
      details: "Transform your business operations with intelligent automation that scales with your growth."
    }
  ];

  const enhancedServices = [
    {
      title: "AI Robotics & Industrial Automation",
      description: "Intelligent robotics solutions with AI-powered automation for manufacturing and logistics.",
      icon: <Rocket className="h-10 w-10 p-2 rounded-md bg-indigo-100 text-indigo-700" />,
      price: "$75,000",
      category: "AI & Robotics"
    },
    {
      title: "Space Technology & Satellite Solutions",
      description: "Advanced space technology solutions including satellite communication and orbital optimization.",
      icon: <Globe className="h-10 w-10 p-2 rounded-md bg-purple-100 text-purple-700" />,
      price: "$100,000",
      category: "Space Tech"
    },
    {
      title: "Biotech AI Drug Discovery",
      description: "AI-powered drug discovery platform using machine learning for pharmaceutical research.",
      icon: <Dna className="h-10 w-10 p-2 rounded-md bg-pink-100 text-pink-700" />,
      price: "$200,000",
      category: "Biotech AI"
    },
    {
      title: "Autonomous Vehicles Platform",
      description: "Complete autonomous vehicle solution with AI navigation and safety systems.",
      icon: <Car className="h-10 w-10 p-2 rounded-md bg-green-100 text-green-700" />,
      price: "$800,000",
      category: "Autonomous Tech"
    }
  ];

  const stats = [
    { label: "Services Available", value: "17+", icon: Star },
    { label: "Happy Clients", value: "50+", icon: Building },
    { label: "Success Rate", value: "98%", icon: TrendingUp },
    { label: "Support Hours", value: "24/7", icon: Code }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-24 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-400/30 rounded-full px-4 py-2 mb-8">
            <Sparkles className="h-4 w-4 text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">Innovation at Your Fingertips</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-tight">
            Transform Your Business with
            <span className="block bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              AI-Powered Solutions
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-10 leading-relaxed">
            Discover our comprehensive suite of AI services, IT solutions, and micro SAAS platforms 
            designed to accelerate your business growth and digital transformation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/all-services"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 hover:scale-105 hover:shadow-xl transform"
            >
              <Sparkles className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
              Explore Our Services
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="h-12 w-12 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Services Preview */}
      <div className="py-16 bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cutting-Edge Technology Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the future with our revolutionary AI, Space Tech, Biotech, and Autonomous solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {enhancedServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{service.description}</p>
                <div className="text-sm text-gray-500 mb-4">{service.category}</div>
                <div className="text-xl font-bold text-blue-600 mb-4">{service.price}</div>
                <Link
                  to="/enhanced-services"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link
              to="/enhanced-services"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 hover:scale-105"
            >
              <Rocket className="h-5 w-5" />
              Explore All Cutting-Edge Services
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Technology Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Cutting-edge solutions designed to drive innovation and growth across all industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start justify-between mb-4">
                  {feature.icon}
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {feature.badge}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <p className="text-sm text-gray-500 mb-4">{feature.details}</p>
                
                <Link
                  to={feature.link}
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-blue-200 mb-8 max-w-2xl mx-auto">
            Join hundreds of companies already leveraging our AI-powered solutions to drive growth and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-900 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              <Sparkles className="h-5 w-5" />
              Get Started Today
            </Link>
            <Link
              to="/enhanced-services"
              className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
            >
              <Rocket className="h-5 w-5" />
              Cutting-Edge Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
