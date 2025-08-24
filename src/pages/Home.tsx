
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const services = [
    {
      title: "AI Content Generation",
      description: "Generate high-quality content, articles, and marketing copy using advanced AI models",
      price: "$99/month",
      marketPrice: "$150-300/month",
      icon: "🤖",
      link: "/micro-saas-services"
    },
    {
      title: "AI Code Assistant",
      description: "AI-powered coding assistance with code review, debugging, and optimization",
      price: "$149/month",
      marketPrice: "$200-400/month",
      icon: "💻",
      link: "/micro-saas-services"
    },
    {
      title: "AI Data Analytics",
      description: "Advanced data analytics and business intelligence powered by AI",
      price: "$199/month",
      marketPrice: "$300-600/month",
      icon: "📊",
      link: "/micro-saas-services"
    },
    {
      title: "Cloud Migration",
      description: "Seamless cloud migration services with automated tools and expert support",
      price: "$299/month",
      marketPrice: "$500-1000/month",
      icon: "☁️",
      link: "/micro-saas-services"
    },
    {
      title: "Cybersecurity Suite",
      description: "Comprehensive cybersecurity solutions including threat detection and prevention",
      price: "$399/month",
      marketPrice: "$600-1200/month",
      icon: "🔒",
      link: "/micro-saas-services"
    },
    {
      title: "DevOps Automation",
      description: "Automate your development and deployment processes with AI-powered tools",
      price: "$249/month",
      marketPrice: "$400-800/month",
      icon: "⚡",
      link: "/micro-saas-services"
    }
  ];

  const benefits = [
    {
      title: "Cost Effective",
      description: "Save 30-50% compared to traditional enterprise solutions",
      icon: "💰"
    },
    {
      title: "AI-Powered",
      description: "Leverage cutting-edge AI technology for better results",
      icon: "🧠"
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock technical support and maintenance",
      icon: "🔄"
    },
    {
      title: "Scalable",
      description: "Grow with your business needs without major infrastructure changes",
      icon: "📈"
    }
  ];

  return (
    <div className="min-h-screen bg-zion-blue-dark">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-blue via-zion-purple to-zion-cyan opacity-20"></div>
        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Zion Tech Group
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
            Your comprehensive technology solutions partner. From AI-powered micro SAAS to enterprise IT infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/micro-saas-services"
              className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Explore Services
            </Link>
            <Link
              to="/contact"
              className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Micro SAAS Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-md border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-zion-slate-light mb-4">{service.description}</p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold text-zion-cyan">{service.price}</span>
                <span className="text-sm text-zion-slate-light line-through">{service.marketPrice}</span>
              </div>
              <Link
                to={service.link}
                className="block w-full bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white text-center py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Why Choose Zion Tech?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center"
            >
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-zion-slate-light">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses already using Zion Tech Group's innovative solutions to drive growth and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/request-quote"
              className="bg-white text-zion-blue px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              Request a Quote
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-zion-blue px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-zion-cyan mb-2">Phone</h3>
              <p className="text-zion-slate-light">+1 302 464 0950</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-zion-cyan mb-2">Email</h3>
              <p className="text-zion-slate-light">kleber@ziontechgroup.com</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-zion-cyan mb-2">Address</h3>
              <p className="text-zion-slate-light">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
