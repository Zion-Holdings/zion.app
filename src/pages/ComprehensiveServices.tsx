
import { motion } from 'framer-motion';
import ComprehensiveServicesShowcase from '../components/ComprehensiveServicesShowcase';
import { 
  Brain, 
  Code, 
  Zap, 
  Shield,
  CheckCircle,
  TrendingUp,
  ArrowRight,
  Users
} from 'lucide-react';

const ComprehensiveServices = () => {
  const stats = [
    { icon: Brain, number: "50+", label: "AI Solutions", color: "text-cyan-400" },
    { icon: Code, number: "100+", label: "IT Services", color: "text-purple-400" },
    { icon: Zap, number: "75+", label: "Micro SAAS", color: "text-green-400" },
    { icon: Shield, number: "25+", label: "Security Tools", color: "text-orange-400" }
  ];

  const highlights = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: "AI-Powered Innovation",
      description: "Cutting-edge artificial intelligence solutions that transform business operations and drive growth.",
      features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"]
    },
    {
      icon: <Code className="w-8 h-8 text-purple-400" />,
      title: "Advanced IT Infrastructure",
      description: "Comprehensive technology solutions that ensure reliability, security, and scalability for your business.",
      features: ["Cloud Migration", "DevOps Automation", "Network Security", "Data Management"]
    },
    {
      icon: <Zap className="w-8 h-8 text-green-400" />,
      title: "Micro SAAS Excellence",
      description: "Scalable software solutions designed for modern businesses, from startups to enterprises.",
      features: ["Business Automation", "Customer Management", "Financial Tools", "Team Collaboration"]
    },
    {
      icon: <Shield className="w-8 h-8 text-orange-400" />,
      title: "Quantum-Ready Security",
      description: "Future-proof cybersecurity solutions that protect against current and emerging threats.",
      features: ["Threat Detection", "Encryption", "Compliance", "Incident Response"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Comprehensive
              </span>
              <br />
              <span className="text-white">
                Tech Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Discover our complete portfolio of cutting-edge technology solutions designed to 
              transform your business and accelerate your digital transformation journey.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-2">
                    <stat.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className={`text-3xl font-bold ${stat.color} mb-1`}>
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Service Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          >
            {highlights.map((highlight, idx) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + idx * 0.1 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gray-800 rounded-xl group-hover:bg-cyan-500/20 transition-colors duration-300">
                    {highlight.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{highlight.title}</h3>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {highlight.description}
                </p>
                <div className="space-y-2">
                  {highlight.features.map((feature, featureIdx) => (
                    <div key={featureIdx} className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Showcase */}
      <section id="services" className="py-16">
        <ComprehensiveServicesShowcase />
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 border border-cyan-500/20"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Our team of experts is ready to help you implement the perfect technology solutions. 
              Get in touch today for a personalized consultation and quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center justify-center gap-3">
                <TrendingUp className="w-5 h-5" />
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 bg-gray-700 text-white rounded-lg font-semibold hover:bg-gray-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3">
                <Users className="w-5 h-5" />
                Schedule Consultation
              </button>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              Contact us: <span className="text-cyan-400">+1 302 464 0950</span> | 
              <span className="text-cyan-400"> kleber@ziontechgroup.com</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensiveServices;
