import React from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Zap, 
  TrendingUp, 
  Users, 
  Target, 
  Lightbulb, 
  Globe, 
  Shield,
  Cpu,
  Cloud,
  Database,
  Smartphone,
  BarChart3,
  CheckCircle,
  Star
} from 'lucide-react';
import Layout from '../../components/layout/Layout';
import SEO from '../../components/SEO';

const StartupSolutionsPage: React.FC = () => {
  const solutions = [
    {
      title: 'MVP Development',
      description: 'Fast-track your startup with rapid MVP development and iterative improvements.',
      icon: <Rocket className="w-8 h-8" />,
      features: ['Rapid Prototyping', 'User Feedback Integration', 'Iterative Development', 'Market Validation'],
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'AI-Powered Growth',
      description: 'Leverage AI to accelerate startup growth and market penetration.',
      icon: <Cpu className="w-8 h-8" />,
      features: ['AI Marketing Automation', 'Predictive Analytics', 'Customer Intelligence', 'Growth Hacking'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Cloud-First Infrastructure',
      description: 'Scalable cloud solutions that grow with your startup.',
      icon: <Cloud className="w-8 h-8" />,
      features: ['Auto-scaling Infrastructure', 'Cost Optimization', 'Performance Monitoring', 'Security First'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Digital Marketing & SEO',
      description: 'Data-driven marketing strategies to boost startup visibility and growth.',
      icon: <TrendingUp className="w-8 h-8" />,
      features: ['SEO Optimization', 'Content Marketing', 'Social Media Strategy', 'Analytics & Reporting'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Mobile & Web Apps',
      description: 'Modern, responsive applications that engage your users across all devices.',
      icon: <Smartphone className="w-8 h-8" />,
      features: ['Cross-platform Development', 'Progressive Web Apps', 'Native Mobile Apps', 'Performance Optimization'],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Data Analytics & Insights',
      description: 'Turn your startup data into actionable insights for better decision-making.',
      icon: <BarChart3 className="w-8 h-8" />,
      features: ['Real-time Analytics', 'Business Intelligence', 'User Behavior Tracking', 'Performance Metrics'],
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const benefits = [
    'Fast time-to-market with rapid development',
    'Cost-effective solutions for startups',
    'Scalable infrastructure that grows with you',
    'Expert guidance from startup veterans',
    'Flexible engagement models',
    'Focus on your core business while we handle tech'
  ];

  const successMetrics = [
    { metric: '90%', label: 'Faster MVP Development' },
    { metric: '3x', label: 'Growth Acceleration' },
    { metric: '40%', label: 'Cost Reduction' },
    { metric: '24/7', label: 'Support & Monitoring' }
  ];

  return (
    <Layout>
      <SEO 
        title="Startup Solutions - Zion Tech Group"
        description="Accelerate your startup growth with our comprehensive technology solutions including MVP development, AI-powered growth, and scalable infrastructure."
        keywords={["startup solutions", "MVP development", "startup technology", "AI startup", "cloud startup", "startup growth"]}
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
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
                Startup Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Accelerate your startup's growth with cutting-edge technology solutions designed for speed, 
                scalability, and market success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg font-semibold text-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105">
                  Start Your Journey
                </button>
                <button className="px-8 py-4 border-2 border-orange-400 rounded-lg font-semibold text-lg hover:bg-orange-400 hover:text-black transition-all duration-300">
                  Free Consultation
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {successMetrics.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">{item.metric}</div>
                  <div className="text-gray-300">{item.label}</div>
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Startup-Focused Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our solutions are specifically designed for startups, focusing on speed, cost-effectiveness, 
                and rapid market validation.
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
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700 hover:border-orange-400/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-xl flex items-center justify-center mb-6`}>
                    {solution.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{solution.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-orange-400 mr-3 flex-shrink-0" />
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Why Startups Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We understand the unique challenges startups face and provide solutions that accelerate growth.
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
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Star className="w-10 h-10 text-white" />
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Ready to Accelerate Your Startup?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our startup solutions can help you achieve rapid growth and market success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg font-semibold text-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105">
                  Free Startup Consultation
                </button>
                <button className="px-8 py-4 border-2 border-orange-400 rounded-lg font-semibold text-lg hover:bg-orange-400 hover:text-black transition-all duration-300">
                  View Case Studies
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default StartupSolutionsPage;