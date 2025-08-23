import React from 'react';
import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Rocket, Zap, Target, Brain, Atom, Shield, Cloud, Database, 
  ArrowRight, CheckCircle, Star, TrendingUp, Users, Globe
} from 'lucide-react';

const StartupSolutionsPage: React.FC = () => {
  const startupSolutions = [
    {
      title: 'AI-Powered MVP Development',
      description: 'Accelerate your startup journey with AI-driven rapid prototyping and intelligent MVP development.',
      features: ['Rapid Prototyping', 'AI Code Generation', 'Smart UI/UX Design', 'Scalable Architecture'],
      icon: <Brain className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      href: '/ai-autonomous-code-generation'
    },
    {
      title: 'Micro SAAS Platform',
      description: 'Launch your micro SAAS business with our comprehensive platform and automation tools.',
      features: ['Automated Operations', 'Customer Management', 'Revenue Optimization', 'Growth Analytics'],
      icon: <Rocket className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      href: '/micro-saas'
    },
    {
      title: 'Startup Infrastructure',
      description: 'Build on a solid foundation with cloud-native, scalable infrastructure designed for growth.',
      features: ['Cloud-Native Architecture', 'Auto-scaling', 'Cost Optimization', 'Security First'],
      icon: <Cloud className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      href: '/quantum-cloud-infrastructure'
    },
    {
      title: 'AI Marketing Automation',
      description: 'Scale your marketing efforts with intelligent automation and AI-powered customer acquisition.',
      features: ['Customer Segmentation', 'Personalized Campaigns', 'Performance Analytics', 'ROI Optimization'],
      icon: <Target className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500',
      href: '/ai-autonomous-marketing-platform'
    },
    {
      title: 'Data Intelligence Platform',
      description: 'Turn your data into actionable insights with AI-powered analytics and business intelligence.',
      features: ['Real-time Analytics', 'Predictive Insights', 'Data Visualization', 'Business Intelligence'],
      icon: <Database className="w-8 h-8" />,
      color: 'from-indigo-500 to-purple-500',
      href: '/ai-business-intelligence-suite'
    },
    {
      title: 'Cybersecurity Foundation',
      description: 'Protect your startup from day one with enterprise-grade security and compliance.',
      features: ['Zero-Trust Security', 'Compliance Automation', 'Threat Detection', 'Incident Response'],
      icon: <Shield className="w-8 h-8" />,
      color: 'from-red-500 to-pink-500',
      href: '/quantum-cybersecurity-platform'
    }
  ];

  const startupBenefits = [
    {
      title: 'Rapid Growth',
      description: 'Accelerate your startup\'s growth with AI-powered automation and intelligent scaling.',
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: 'Cost Effective',
      description: 'Start small and scale up with our pay-as-you-grow pricing model.',
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: 'Expert Support',
      description: 'Get startup-focused guidance and support from our team of experts.',
      icon: <Star className="w-6 h-6" />
    },
    {
      title: 'Future Ready',
      description: 'Build on cutting-edge technology that grows with your business.',
      icon: <Rocket className="w-6 h-6" />
    }
  ];

  const startupStages = [
    {
      stage: 'Ideation & Validation',
      description: 'Validate your startup idea with AI-powered market research and customer insights.',
      solutions: ['AI Market Research', 'Customer Validation', 'MVP Planning', 'Business Model Canvas'],
      icon: <Target className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      stage: 'MVP Development',
      description: 'Build your minimum viable product with rapid development and AI assistance.',
      solutions: ['AI Code Generation', 'Rapid Prototyping', 'UI/UX Design', 'Testing Automation'],
      icon: <Rocket className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      stage: 'Launch & Growth',
      description: 'Launch your product and scale your business with intelligent automation.',
      solutions: ['Marketing Automation', 'Customer Acquisition', 'Growth Analytics', 'Performance Optimization'],
      icon: <TrendingUp className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      stage: 'Scale & Optimize',
      description: 'Scale your operations and optimize for maximum growth and efficiency.',
      solutions: ['Infrastructure Scaling', 'Process Automation', 'Team Scaling', 'International Expansion'],
      icon: <Globe className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <Layout
      title="Startup Solutions - Zion Tech Group"
      description="Accelerate your startup journey with Zion Tech Group's AI-powered solutions, micro SAAS platforms, and intelligent automation tools designed for rapid growth and scalability."
      keywords="startup solutions, startup technology, AI startup, micro SAAS, startup automation, Zion Tech Group"
    >
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/20 to-purple-900/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.1),transparent_50%)]"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
                Startup Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Accelerate your startup journey with AI-powered solutions, intelligent automation, 
                and cutting-edge technology designed for rapid growth and scalability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                >
                  Get Startup Demo
                </Link>
                <Link
                  href="/solutions"
                  className="px-8 py-4 border border-cyan-500/50 text-cyan-400 font-medium rounded-lg hover:bg-cyan-500/10 transition-all duration-200 hover:scale-105"
                >
                  View All Solutions
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Startup Solutions Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Startup-Focused Solutions</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Comprehensive technology solutions designed specifically for startups, 
                from ideation to scale, powered by AI and automation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {startupSolutions.map((solution, index) => (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Link href={solution.href} className="block">
                    <div className="bg-gray-900/50 border border-cyan-500/20 rounded-xl p-8 h-full hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
                      <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <div className="text-white">
                          {solution.icon}
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                        {solution.title}
                      </h3>
                      <p className="text-gray-400 mb-6 leading-relaxed">
                        {solution.description}
                      </p>
                      <ul className="space-y-2 mb-6">
                        {solution.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-300">
                            <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                        <span className="mr-2">Learn More</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Startup Journey Stages */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Your Startup Journey</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                From idea to scale, we provide the technology solutions you need at every stage of your startup journey.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {startupStages.map((stage, index) => (
                <motion.div
                  key={stage.stage}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${stage.color} rounded-xl flex items-center justify-center mb-6`}>
                    <div className="text-white">
                      {stage.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{stage.stage}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{stage.description}</p>
                  <ul className="space-y-2">
                    {stage.solutions.map((solution, solutionIndex) => (
                      <li key={solutionIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Startup Benefits */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Why Startups Choose Zion Tech Group?</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Built for startups, by innovators who understand the challenges and opportunities of building the future.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {startupBenefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <div className="text-white">
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Accelerate Your Startup?</h2>
              <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
                Join thousands of successful startups who have accelerated their growth 
                with Zion Tech Group's revolutionary technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                >
                  Start Your Journey
                </Link>
                <Link
                  href="/quote"
                  className="px-8 py-4 border border-cyan-500/50 text-cyan-400 font-medium rounded-lg hover:bg-cyan-500/10 transition-all duration-200 hover:scale-105"
                >
                  Get Startup Pricing
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default StartupSolutionsPage;