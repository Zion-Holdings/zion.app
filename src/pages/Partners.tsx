import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Handshake, 
  Users, 
  Star, 
  TrendingUp, 
  Globe, 
  Zap,
  ArrowRight,
  CheckCircle,
  Award,
  Building
} from 'lucide-react';

export default function Partners() {
  const partnerTypes = [
    {
      icon: Building,
      title: "Technology Partners",
      description: "Leading technology companies that provide complementary solutions",
      benefits: ["Joint product development", "Technical integration", "Market expansion", "Shared expertise"]
    },
    {
      icon: Users,
      title: "Channel Partners",
      description: "Resellers and distributors who help us reach new markets",
      benefits: ["Revenue sharing", "Marketing support", "Training programs", "Sales enablement"]
    },
    {
      icon: Globe,
      title: "Strategic Partners",
      description: "Long-term strategic relationships for mutual growth",
      benefits: ["Joint ventures", "Strategic planning", "Resource sharing", "Innovation collaboration"]
    },
    {
      icon: Zap,
      title: "Implementation Partners",
      description: "Consulting firms that implement our solutions",
      benefits: ["Certification programs", "Technical support", "Revenue sharing", "Joint marketing"]
    }
  ];

  const currentPartners = [
    {
      name: "Microsoft",
      category: "Technology Partner",
      logo: "MS",
      description: "Cloud infrastructure and AI services partnership",
      year: "2020"
    },
    {
      name: "AWS",
      category: "Technology Partner",
      logo: "AWS",
      description: "Cloud computing and machine learning collaboration",
      year: "2021"
    },
    {
      name: "Google Cloud",
      category: "Technology Partner",
      logo: "GC",
      description: "AI and analytics platform partnership",
      year: "2022"
    },
    {
      name: "IBM",
      category: "Strategic Partner",
      logo: "IBM",
      description: "Enterprise AI and quantum computing collaboration",
      year: "2021"
    }
  ];

  const benefits = [
    "Access to cutting-edge technology and platforms",
    "Joint go-to-market strategies and campaigns",
    "Technical training and certification programs",
    "Revenue sharing and financial incentives",
    "Marketing and sales support",
    "Innovation and R&D collaboration"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
              Partnership Program
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Join our ecosystem of technology partners, channel partners, and strategic allies to drive innovation and growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105"
              >
                Become a Partner
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/20 transition-all duration-300"
              >
                Contact Partnership Team
              </Link>
            </div>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-1/3 w-1 h-1 bg-purple-400 rounded-full animate-bounce"></div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Partnership Types
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We offer various partnership models to meet different business needs and objectives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnerTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{type.title}</h3>
                  <p className="text-gray-300 mb-6">{type.description}</p>
                  <h4 className="font-semibold text-cyan-400 mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {type.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Partners
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Trusted technology leaders and strategic allies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentPartners.map((partner, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 text-center hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4 text-white font-bold text-2xl">
                  {partner.logo}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{partner.name}</h3>
                <p className="text-sm text-cyan-400 mb-2">{partner.category}</p>
                <p className="text-sm text-gray-400 mb-3">{partner.description}</p>
                <div className="flex items-center justify-center text-xs text-gray-500">
                  <Star className="w-3 h-3 text-yellow-400 mr-1" />
                  Partner since {partner.year}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Partner Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive support and resources to help our partners succeed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join our ecosystem and unlock new opportunities for growth and innovation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105"
            >
              Start Partnership Discussion
            </Link>
            <Link
              to="/services-overview"
              className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/20 transition-all duration-300"
            >
              Explore Our Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
