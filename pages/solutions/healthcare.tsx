import React from 'react';
import SEO from '../../components/SEO';
import { motion } from 'framer-motion';
import { 
  Users, 
  Brain, 
  Shield, 
  Database, 
  Cloud, 
  ArrowRight,
  CheckCircle,
  Star,
  Heart,
  Globe,
  Rocket,
  Activity,
  Zap,
  Lock
} from 'lucide-react';
import UltraFuturisticBackground from '../../components/ui/UltraFuturisticBackground';

const HealthcareSolutionsPage: React.FC = () => {
  const solutions = [
    {
      title: 'AI-Powered Diagnostics',
      description: 'Advanced AI algorithms for accurate disease detection and diagnosis',
      icon: <Brain className="w-8 h-8" />,
      features: ['Medical Image Analysis', 'Symptom Assessment', 'Risk Prediction', 'Treatment Recommendations'],
      href: '/ai-healthcare-diagnostics',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Healthcare Analytics Platform',
      description: 'Comprehensive data analytics for healthcare insights and optimization',
      icon: <Database className="w-8 h-8" />,
      features: ['Patient Data Analytics', 'Operational Efficiency', 'Cost Optimization', 'Quality Metrics'],
      href: '/ai-healthcare-analytics',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Biotech AI Research',
      description: 'AI-driven research platform for biotechnology and pharmaceutical development',
      icon: <Activity className="w-8 h-8" />,
      features: ['Drug Discovery', 'Clinical Trials', 'Genomic Analysis', 'Protein Folding'],
      href: '/biotech-ai-research-platform',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Healthcare Cybersecurity',
      description: 'Advanced security solutions for healthcare data protection',
      icon: <Shield className="w-8 h-8" />,
      features: ['HIPAA Compliance', 'Data Encryption', 'Access Control', 'Threat Detection'],
      href: '/healthcare-cybersecurity',
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'Telemedicine Platform',
      description: 'Secure and scalable telemedicine solutions for remote healthcare',
      icon: <Cloud className="w-8 h-8" />,
      features: ['Video Consultations', 'Secure Messaging', 'E-prescriptions', 'Patient Records'],
      href: '/telemedicine-platform',
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  const stats = [
    { label: 'Healthcare Partners', value: '200+', icon: <Heart className="w-6 h-6" /> },
    { label: 'Patient Data Protected', value: '10M+', icon: <Shield className="w-6 h-6" /> },
    { label: 'AI Accuracy Rate', value: '99.7%', icon: <Star className="w-6 h-6" /> },
    { label: 'Compliance Standards', value: '100%', icon: <CheckCircle className="w-6 h-6" /> }
  ];

  const features = [
    {
      icon: <Lock className="w-6 h-6" />,
      title: 'HIPAA Compliant',
      description: 'Full compliance with healthcare data protection regulations'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Real-time Processing',
      description: 'Instant analysis and results for critical healthcare decisions'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Global Deployment',
      description: 'Available worldwide with local compliance adaptations'
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: 'Scalable Architecture',
      description: 'Grows with your healthcare organization needs'
    }
  ];

  return (
    <UltraFuturisticBackground variant="quantum">
      <div className="min-h-screen">
        <SEO 
          title="Healthcare Solutions - Zion Tech Group | AI-Powered Healthcare Technology" 
          description="Transform healthcare with Zion Tech Group's AI-powered diagnostics, analytics, biotech research, and cybersecurity solutions. HIPAA compliant and globally deployed." 
          canonical="https://ziontechgroup.com/solutions/healthcare/" 
        />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Healthcare Solutions
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Revolutionizing healthcare with AI-powered diagnostics, advanced analytics, and cutting-edge biotechnology solutions. Improve patient outcomes and operational efficiency.
            </motion.p>
            
            {/* Stats Grid */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="flex justify-center mb-2 text-cyan-400">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              className="text-4xl font-bold text-center text-white mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Our Healthcare Solutions
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.title}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${solution.color} flex items-center justify-center mb-4`}>
                    {solution.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{solution.title}</h3>
                  <p className="text-gray-300 mb-4">{solution.description}</p>
                  <ul className="space-y-2 mb-6">
                    {solution.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={solution.href}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              className="text-4xl font-bold text-center text-white mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Why Choose Our Healthcare Solutions?
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-4xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Ready to Transform Healthcare?
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Join the healthcare revolution with our AI-powered solutions. Improve patient care, reduce costs, and accelerate medical breakthroughs.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 hover:scale-105"
              >
                Get Started Today <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraFuturisticBackground>
  );
};

export default HealthcareSolutionsPage;