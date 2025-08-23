import React from 'react';
import Head from 'next/head';
import { Layout } from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Code, Brain, Zap, CheckCircle, ArrowRight, 
  Cpu, Database, Cloud, Shield, Target
} from 'lucide-react';

const AIAutonomousCodeGeneration: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>AI Autonomous Code Generation | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI that writes, tests, and deploys code autonomously. Transform your development workflow with intelligent code generation." />
        <meta name="keywords" content="AI code generation, autonomous programming, automated coding, AI development, code automation" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-autonomous-code-generation" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10" />
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium mb-6 border border-blue-500/30">
                <Code className="w-4 h-4" />
                AI That Writes Code
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6">
                Autonomous Code Generation
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Revolutionary AI that understands requirements, writes production-ready code, 
                performs testing, and deploys applications autonomously.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
              >
                Start Coding with AI <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#features"
                className="px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-full hover:bg-blue-500 hover:text-black transition-all duration-300"
              >
                See Features
              </a>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Autonomous Development Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI doesn't just generate code snippets—it creates complete, production-ready applications
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Brain className="w-8 h-8 text-blue-400" />,
                  title: "Requirement Understanding",
                  description: "AI analyzes natural language requirements and converts them into detailed technical specifications"
                },
                {
                  icon: <Code className="w-8 h-8 text-purple-400" />,
                  title: "Full-Stack Code Generation",
                  description: "Generates complete applications including frontend, backend, database schema, and API endpoints"
                },
                {
                  icon: <Shield className="w-8 h-8 text-green-400" />,
                  title: "Security-First Approach",
                  description: "Built-in security best practices, vulnerability scanning, and compliance checking"
                },
                {
                  icon: <CheckCircle className="w-8 h-8 text-cyan-400" />,
                  title: "Automated Testing",
                  description: "Generates comprehensive test suites including unit, integration, and end-to-end tests"
                },
                {
                  icon: <Cloud className="w-8 h-8 text-pink-400" />,
                  title: "CI/CD Integration",
                  description: "Automatically sets up deployment pipelines and cloud infrastructure"
                },
                {
                  icon: <Target className="w-8 h-8 text-yellow-400" />,
                  title: "Performance Optimization",
                  description: "AI optimizes code for performance, scalability, and resource efficiency"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    {feature.icon}
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-20 px-4 bg-black/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Technical Specifications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Enterprise-grade AI code generation with advanced capabilities
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-4">Supported Technologies</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    'React/Next.js', 'Node.js/Express', 'Python/Django', 'Java/Spring',
                    'Go/Gin', 'Rust/Actix', 'C#/.NET', 'Ruby/Rails',
                    'PostgreSQL', 'MongoDB', 'Redis', 'Docker',
                    'Kubernetes', 'AWS/Azure/GCP', 'GraphQL', 'REST APIs'
                  ].map((tech, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-4">AI Capabilities</h3>
                <div className="space-y-4">
                  {[
                    'Natural Language Processing for requirements',
                    'Multi-language code generation',
                    'Architecture pattern recognition',
                    'Database schema optimization',
                    'API design and documentation',
                    'Security vulnerability scanning',
                    'Performance bottleneck detection',
                    'Code review and refactoring'
                  ].map((capability, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Zap className="w-5 h-5 text-blue-400 mt-0.5" />
                      <span className="text-gray-300">{capability}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                AI Code Generation Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your development needs
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Developer",
                  price: "$299",
                  period: "month",
                  description: "Perfect for individual developers",
                  features: [
                    "Up to 50 code generations/month",
                    "Basic templates and patterns",
                    "Code review assistance",
                    "Email support",
                    "Basic testing generation"
                  ]
                },
                {
                  title: "Team",
                  price: "$999",
                  period: "month",
                  description: "Ideal for development teams",
                  features: [
                    "Up to 500 code generations/month",
                    "Advanced patterns and architectures",
                    "Full-stack application generation",
                    "CI/CD pipeline setup",
                    "Priority support",
                    "Team collaboration features"
                  ],
                  popular: true
                },
                {
                  title: "Enterprise",
                  price: "$2999",
                  period: "month",
                  description: "For large organizations",
                  features: [
                    "Unlimited code generations",
                    "Custom AI model training",
                    "On-premise deployment",
                    "24/7 dedicated support",
                    "Custom integrations",
                    "Security compliance reporting"
                  ]
                }
              ].map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`p-8 rounded-2xl border transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-br from-blue-900/50 to-purple-900/50 border-blue-500 scale-105'
                      : 'bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-gray-700/50 hover:border-blue-500/50'
                  }`}
                >
                  {plan.popular && (
                    <div className="text-center mb-4">
                      <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.title}</h3>
                    <div className="text-4xl font-bold text-white mb-2">
                      {plan.price}<span className="text-lg text-gray-400">/{plan.period}</span>
                    </div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/contact"
                    className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
                        : 'bg-gray-700 text-white hover:bg-gray-600'
                    }`}
                  >
                    Get Started
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-black/30">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Revolutionize Your Development?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of developers who are already using AI to write better code faster
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 justify-center"
                >
                  Start Free Trial <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="/services"
                  className="px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-full hover:bg-blue-500 hover:text-black transition-all duration-300"
                >
                  View All Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AIAutonomousCodeGeneration;