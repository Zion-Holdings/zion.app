import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Heart, Brain, Shield, Zap, Target, Users, Award, Clock,
  Cpu, Database, Lock, Cloud, Settings, Eye, TrendingUp, Lightbulb
} from 'lucide-react';

const HealthcareSolutions: React.FC = () => {
  const healthcareServices = [
    {
      title: "AI-Powered Diagnostics",
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      services: [
        { name: "AI Healthcare Diagnostics", href: "/ai-healthcare-diagnostics", featured: true },
        { name: "Medical Image Analysis", href: "/medical-image-analysis" },
        { name: "Predictive Health Analytics", href: "/predictive-health-analytics" },
        { name: "AI Disease Detection", href: "/ai-disease-detection" }
      ]
    },
    {
      title: "Healthcare Technology",
      icon: <Heart className="w-8 h-8 text-red-400" />,
      services: [
        { name: "Telemedicine Platforms", href: "/telemedicine-platforms" },
        { name: "Electronic Health Records", href: "/electronic-health-records" },
        { name: "Healthcare IoT Solutions", href: "/healthcare-iot-solutions" },
        { name: "Patient Management Systems", href: "/patient-management-systems" }
      ]
    },
    {
      title: "Security & Compliance",
      icon: <Shield className="w-8 h-8 text-green-400" />,
      services: [
        { name: "HIPAA Compliance Solutions", href: "/hipaa-compliance-solutions" },
        { name: "Healthcare Data Security", href: "/healthcare-data-security" },
        { name: "Patient Privacy Protection", href: "/patient-privacy-protection" },
        { name: "Secure Health Data Exchange", href: "/secure-health-data-exchange" }
      ]
    },
    {
      title: "Innovation & Research",
      icon: <Lightbulb className="w-8 h-8 text-yellow-400" />,
      services: [
        { name: "Clinical Trial Management", href: "/clinical-trial-management" },
        { name: "Medical Research Platforms", href: "/medical-research-platforms" },
        { name: "Drug Discovery AI", href: "/drug-discovery-ai" },
        { name: "Healthcare Innovation Labs", href: "/healthcare-innovation-labs" }
      ]
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-red-900/20 to-pink-900/20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full">
                  <Heart className="w-12 h-12 text-red-400" />
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-red-400 via-pink-400 to-red-400 bg-clip-text text-transparent mb-6">
                Healthcare Technology Solutions
              </h1>
              <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-8">
                Revolutionary healthcare technology solutions that improve patient care, 
                enhance medical diagnostics, and streamline healthcare operations.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold rounded-lg hover:from-red-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
                  Explore Healthcare Solutions
                </button>
                <button className="px-8 py-4 border border-red-400/30 text-red-400 font-semibold rounded-lg hover:bg-red-400/10 transition-all duration-300">
                  Schedule Consultation
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Healthcare Services Categories */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Complete Healthcare Technology Portfolio
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Our comprehensive healthcare solutions cover every aspect of modern medicine, 
                from AI-powered diagnostics to secure patient management systems.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {healthcareServices.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-red-400/30 transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    {category.icon}
                    <h3 className="text-2xl font-bold text-white ml-3">{category.title}</h3>
                  </div>
                  <div className="space-y-3">
                    {category.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex items-center justify-between">
                        <a
                          href={service.href}
                          className="text-white/80 hover:text-white transition-colors flex items-center"
                        >
                          {service.featured && (
                            <Award className="w-4 h-4 text-yellow-400 mr-2" />
                          )}
                          {service.name}
                        </a>
                        {service.featured && (
                          <span className="text-xs bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-2 py-1 rounded-full">
                            Featured
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Healthcare?
              </h2>
              <p className="text-xl text-white/70 mb-8">
                Join us in revolutionizing healthcare technology. Improve patient outcomes, 
                enhance medical efficiency, and drive innovation in the healthcare industry.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold rounded-lg hover:from-red-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
                  Get Started Today
                </button>
                <button className="px-8 py-4 border border-red-400/30 text-red-400 font-semibold rounded-lg hover:bg-red-400/10 transition-all duration-300">
                  Schedule Consultation
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default HealthcareSolutions;