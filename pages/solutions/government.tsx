import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Building, 
  Lock, 
  Users, 
  Globe, 
  Database, 
  Cloud, 
  Cpu,
  Server,
  Network,
  BarChart3,
  CheckCircle,
  Award
} from 'lucide-react';
import Layout from '../../components/layout/Layout';
import SEO from '../../components/SEO';

const GovernmentSolutionsPage: React.FC = () => {
  const solutions = [
    {
      title: 'Government Cybersecurity',
      description: 'Advanced security solutions meeting federal compliance requirements and protecting sensitive government data.',
      icon: <Shield className="w-8 h-8" />,
      features: ['FedRAMP Compliance', 'Zero Trust Architecture', 'Advanced Threat Detection', 'Incident Response'],
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'Digital Government Services',
      description: 'Modern digital platforms that streamline government operations and improve citizen services.',
      icon: <Building className="w-8 h-8" />,
      features: ['Citizen Portals', 'Digital Forms & Workflows', 'Service Automation', 'Mobile Government Apps'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Government Cloud Infrastructure',
      description: 'Secure, compliant cloud solutions designed specifically for government agencies.',
      icon: <Cloud className="w-8 h-8" />,
      features: ['FedRAMP Authorized', 'Hybrid Cloud Solutions', 'Data Sovereignty', 'Performance Optimization'],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Data Management & Analytics',
      description: 'Comprehensive data solutions for government intelligence and decision-making.',
      icon: <Database className="w-8 h-8" />,
      features: ['Big Data Processing', 'Real-time Analytics', 'Data Governance', 'Business Intelligence'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'AI & Machine Learning',
      description: 'Intelligent automation and AI solutions for government efficiency and innovation.',
      icon: <Cpu className="w-8 h-8" />,
      features: ['Process Automation', 'Predictive Analytics', 'Natural Language Processing', 'Computer Vision'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Compliance & Governance',
      description: 'Comprehensive compliance solutions ensuring government standards and regulations are met.',
      icon: <Award className="w-8 h-8" />,
      features: ['Regulatory Compliance', 'Audit Management', 'Risk Assessment', 'Policy Automation'],
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const benefits = [
    'FedRAMP and government compliance',
    'Enhanced security and data protection',
    'Improved citizen service delivery',
    'Cost-effective government operations',
    'Scalable and secure infrastructure',
    'Expert government technology consulting'
  ];

  const complianceStandards = [
    'FedRAMP (Federal Risk and Authorization Management Program)',
    'FISMA (Federal Information Security Management Act)',
    'NIST Cybersecurity Framework',
    'SOC 2 Type II Compliance',
    'ISO 27001 Information Security',
    'GDPR and Data Privacy Regulations'
  ];

  return (
    <Layout>
      <SEO 
        title="Government Solutions - Zion Tech Group"
        description="Comprehensive government technology solutions including cybersecurity, digital services, cloud infrastructure, and compliance management for federal, state, and local agencies."
        keywords={["government solutions", "government technology", "FedRAMP", "government cybersecurity", "digital government", "government cloud", "compliance"]}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Government Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Secure, compliant, and innovative technology solutions designed specifically for government 
                agencies at all levels.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg font-semibold text-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  Government Consultation
                </button>
                <button className="px-8 py-4 border-2 border-green-400 rounded-lg font-semibold text-lg hover:bg-green-400 hover:text-black transition-all duration-300">
                  Compliance Guide
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Compliance Standards */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Government Compliance Standards
              </h2>
              <p className="text-lg text-gray-300">
                We meet and exceed all major government compliance requirements
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {complianceStandards.map((standard, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-xl p-6 border border-green-400/20"
                >
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{standard}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Comprehensive Government Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our government solutions are designed to meet the unique challenges and requirements 
                of public sector organizations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700 hover:border-green-400/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-xl flex items-center justify-center mb-6`}>
                    {solution.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{solution.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Why Government Agencies Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We deliver secure, compliant, and innovative solutions that meet government standards.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Shield className="w-10 h-10 text-white" />
                  </div>
                  <p className="text-lg text-gray-300">{benefit}</p>
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
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Ready to Modernize Your Government Agency?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our government solutions can improve efficiency, security, and citizen services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg font-semibold text-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  Government Consultation
                </button>
                <button className="px-8 py-4 border-2 border-green-400 rounded-lg font-semibold text-lg hover:bg-green-400 hover:text-black transition-all duration-300">
                  Download Government Guide
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default GovernmentSolutionsPage;