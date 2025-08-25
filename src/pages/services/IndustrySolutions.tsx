import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building, 
  Heart, 
  DollarSign, 
  Truck, 
  Shield, 
  TrendingUp, 
  Users,
  Globe,
  Cpu,
  BarChart3,
  Target,
  Rocket,
  Brain,
  Monitor,
  Key,
  Settings,
  Cloud,
  Factory
} from 'lucide-react';

const IndustrySolutions = () => {
  const industries = [
    {
      icon: Building,
      title: "Healthcare",
      description: "HIPAA-compliant solutions for patient care, medical records, and healthcare operations.",
      solutions: ["Patient Management", "Electronic Health Records", "Telemedicine Platforms", "Medical Analytics"],
      color: "from-red-500 to-pink-500"
    },
    {
      icon: DollarSign,
      title: "Financial Services",
      description: "Secure, compliant solutions for banking, insurance, and financial management.",
      solutions: ["Risk Management", "Compliance Automation", "Fraud Detection", "Portfolio Management"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description: "IoT-enabled solutions for smart manufacturing and industrial automation.",
      solutions: ["Predictive Maintenance", "Quality Control", "Supply Chain Management", "Production Optimization"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Truck,
      title: "Logistics & Transportation",
      description: "Efficient solutions for supply chain management and transportation optimization.",
      solutions: ["Route Optimization", "Fleet Management", "Inventory Tracking", "Delivery Automation"],
      color: "from-orange-500 to-yellow-500"
    },
    {
      icon: Globe,
      title: "Retail & E-commerce",
      description: "Digital solutions for modern retail operations and customer engagement.",
      solutions: ["Customer Analytics", "Inventory Management", "Omnichannel Integration", "Personalization"],
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: Shield,
      title: "Government",
      description: "Secure, compliant solutions for government agencies and public sector organizations.",
      solutions: ["Citizen Services", "Data Security", "Compliance Management", "Process Automation"],
      color: "from-gray-500 to-slate-500"
    }
  ];

  const services = [
    {
      title: "Industry Analysis",
      description: "Deep analysis of your industry's challenges and opportunities to identify optimal solutions.",
      icon: BarChart3
    },
    {
      title: "Custom Development",
      description: "Tailored solutions designed specifically for your industry's unique requirements.",
      icon: Settings
    },
    {
      title: "Integration Services",
      description: "Seamless integration with existing systems and industry-specific software.",
      icon: Cpu
    },
    {
      title: "Compliance Management",
      description: "Ensure adherence to industry regulations and standards.",
      icon: Shield
    },
    {
      title: "Training & Support",
      description: "Comprehensive training and ongoing support for your team.",
      icon: Users
    },
    {
      title: "Continuous Improvement",
      description: "Ongoing optimization and enhancement of your industry solutions.",
      icon: TrendingUp
    }
  ];

  const benefits = [
    {
      title: "Industry Expertise",
      description: "Deep understanding of your industry's challenges and best practices.",
      icon: Brain
    },
    {
      title: "Compliance Ready",
      description: "Built-in compliance with industry regulations and standards.",
      icon: Shield
    },
    {
      title: "Scalable Solutions",
      description: "Solutions that grow with your business and industry demands.",
      icon: TrendingUp
    },
    {
      title: "Competitive Advantage",
      description: "Stay ahead of the competition with industry-specific innovations.",
      icon: Rocket
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent mb-6">
              Industry Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Tailored technology solutions designed specifically for your industry's unique challenges, 
              compliance requirements, and business objectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-lg hover:from-indigo-400 hover:to-blue-400 transition-all duration-300 text-lg font-semibold transform hover:scale-105 shadow-lg shadow-indigo-500/30"
              >
                Get Industry Solution
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 border border-indigo-400/50 text-indigo-400 rounded-lg hover:bg-indigo-400/20 transition-all duration-300 text-lg font-semibold"
              >
                All Services
              </Link>
            </div>
          </div>
        </div>
        
        {/* Industry Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-2 h-2 bg-indigo-400 rounded-full animate-ping"></div>
          <div className="absolute top-40 right-40 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-1/2 w-1 h-1 bg-indigo-400 rounded-full animate-bounce"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-ping animation-delay-1000"></div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Expertise
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We specialize in delivering technology solutions across multiple industries, 
              with deep understanding of each sector's unique requirements.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-indigo-500/30 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${industry.color} rounded-lg flex items-center justify-center`}>
                    <industry.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{industry.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{industry.description}</p>
                <div className="space-y-2">
                  {industry.solutions.map((solution, idx) => (
                    <div key={idx} className="flex items-center text-sm text-indigo-400">
                      <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></div>
                      {solution}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Industry Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive services designed to deliver industry-specific solutions that drive business success.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                    <service.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300">{service.description}</p>
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
              Why Choose Industry Solutions?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Industry-specific solutions provide targeted benefits that generic solutions cannot match.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-indigo-500/30 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <benefit.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{benefit.title}</h3>
                </div>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready for Industry-Specific Solutions?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our industry expertise can solve your specific business challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-lg hover:from-indigo-400 hover:to-blue-400 transition-all duration-300 text-lg font-semibold transform hover:scale-105 shadow-lg shadow-indigo-500/30"
            >
              Start Consultation
            </Link>
            <Link
              to="/pricing"
              className="px-8 py-4 border border-indigo-400/50 text-indigo-400 rounded-lg hover:bg-indigo-400/20 transition-all duration-300 text-lg font-semibold"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustrySolutions;