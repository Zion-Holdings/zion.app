import React from 'react';
import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Target, Cpu, Zap, Shield, Users, Star, CheckCircle, 
  ArrowRight, Play, TrendingUp, Globe, Database, Brain, Rocket,
  Lock, Cloud, Network, FileText, GraduationCap, DollarSign, Clock, Briefcase
} from 'lucide-react';

const BusinessSolutionsPage: React.FC = () => {
  const features = [
    {
      icon: Target,
      title: "Micro SAAS Development",
      description: "Custom software-as-a-service solutions tailored to your business needs",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Briefcase,
      title: "Business Process Automation",
      description: "Streamline operations with intelligent automation and workflow optimization",
      color: "from-teal-500 to-emerald-500"
    },
    {
      icon: TrendingUp,
      title: "Digital Transformation",
      description: "Complete business modernization and digital strategy implementation",
      color: "from-emerald-500 to-green-500"
    },
    {
      icon: Users,
      title: "Strategic Consulting",
      description: "Expert guidance for technology strategy and business optimization",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const services = [
    {
      title: "Micro SAAS Platform",
      description: "Custom software-as-a-service platform designed for your specific business requirements",
      price: "From $75,000",
      features: ["Custom development", "Cloud deployment", "User management", "Analytics dashboard"]
    },
    {
      title: "Business Automation Suite",
      description: "Comprehensive automation platform for business processes and workflows",
      price: "From $50,000",
      features: ["Workflow automation", "Process optimization", "Integration APIs", "Performance monitoring"]
    },
    {
      title: "Digital Transformation Package",
      description: "End-to-end digital transformation services for modern business operations",
      price: "From $200,000",
      features: ["Strategy planning", "Technology implementation", "Change management", "Ongoing support"]
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Delivered", icon: Target },
    { number: "95%", label: "Client Satisfaction", icon: Star },
    { number: "40%", label: "Cost Reduction", icon: TrendingUp },
    { number: "24/7", label: "Support Available", icon: Clock }
  ];

  return (
    <Layout 
      title="Business Solutions Services - Zion Tech Group"
      description="Revolutionary business solutions including micro SAAS development, process automation, and digital transformation services."
      keywords="business solutions, micro SAAS, business automation, digital transformation, strategic consulting, Zion Tech Group"
      canonicalUrl="https://ziontechgroup.com/services/business-solutions"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Business <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Solutions</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform your business with cutting-edge technology solutions, 
                micro SAAS platforms, and intelligent automation that drives growth and efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 flex items-center justify-center">
                  Get Started <ArrowRight className="ml-2" />
                </button>
                <button className="border border-emerald-400 text-emerald-400 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-400 hover:text-white transition-all duration-300 flex items-center justify-center">
                  <Play className="mr-2" /> Watch Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary Business Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our business solutions combine innovative technology with proven business methodologies 
                to deliver measurable results and competitive advantages.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 hover:border-emerald-500 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4 mx-auto`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-800 to-slate-900">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Business Solutions Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive business solutions designed to optimize operations, 
                increase efficiency, and drive sustainable growth for your organization.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-700 to-slate-600 p-8 rounded-xl border border-slate-500 hover:border-emerald-400 transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <div className="text-3xl font-bold text-emerald-400 mb-6">{service.price}</div>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-3 rounded-lg font-semibold hover:from-emerald-600 hover:to-teal-600 transition-all duration-300">
                    Get Started
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-600 to-teal-600">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Transform Your Business Today
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Ready to revolutionize your business operations with cutting-edge technology solutions?
              </p>
              <button className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 text-lg">
                Start Your Transformation
              </button>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default BusinessSolutionsPage;