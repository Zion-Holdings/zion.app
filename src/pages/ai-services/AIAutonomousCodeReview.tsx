import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Code, 
  Shield, 
  Zap, 
  Brain, 
  Users, 
  BarChart3, 
  Target, 
  CheckCircle,
  ArrowRight,
  Play,
  Star,
  Bug,
  Lock,
  Cpu,
  Database,
  GitBranch
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const features = [
  {
    title: "Automated Code Analysis",
    description: "AI-powered code review that identifies bugs, security vulnerabilities, and optimization opportunities.",
    icon: Code,
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Security Vulnerability Detection",
    description: "Advanced security scanning that detects potential threats and compliance issues in your codebase.",
    icon: Shield,
    color: "from-red-500 to-pink-500"
  },
  {
    title: "Performance Optimization",
    description: "Intelligent suggestions for improving code performance, readability, and maintainability.",
    icon: Zap,
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Learning & Adaptation",
    description: "Machine learning algorithms that continuously improve based on your team's coding patterns and preferences.",
    icon: Brain,
    color: "from-purple-500 to-indigo-500"
  }
];

const benefits = [
  "Reduce code review time by up to 80%",
  "Catch security vulnerabilities before deployment",
  "Improve code quality and maintainability",
  "Standardize coding practices across teams",
  "Reduce technical debt and bug fixes",
  "Accelerate development cycles"
];

const useCases = [
  {
    title: "Development Teams",
    description: "Streamline code review processes for development teams of any size.",
    icon: Users
  },
  {
    title: "Open Source Projects",
    description: "Maintain high code quality standards in open source contributions.",
    icon: GitBranch
  },
  {
    title: "Enterprise Applications",
    description: "Ensure security and compliance in enterprise-grade applications.",
    icon: Shield
  },
  {
    title: "CI/CD Pipelines",
    description: "Integrate automated code review into your continuous integration workflows.",
    icon: Cpu
  }
];

const testimonials = [
  {
    content: "The AI Autonomous Code Review has transformed our development process. We catch issues much earlier and our code quality has improved significantly.",
    name: "Alex Thompson",
    role: "Lead Developer, CodeFlow Inc",
    rating: 5
  },
  {
    content: "This tool is a game-changer for our security team. It catches vulnerabilities that human reviewers might miss.",
    name: "Maria Santos",
    role: "Security Engineer, SecureTech",
    rating: 5
  }
];

export default function AIAutonomousCodeReview() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 relative overflow-hidden">
      <SEO 
        title="AI Autonomous Code Review - Zion Tech Group" 
        description="Revolutionize your code review process with AI-powered analysis. Automated security scanning, performance optimization, and quality assurance."
        keywords="AI code review, automated code review, code security, code quality, AI development tools, code analysis"
        canonical="https://ziontechgroup.com/ai-services/ai-autonomous-code-review/"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-purple-900/50 to-cyan-900/50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 text-cyan-400 text-sm font-medium mb-6">
              <Code className="w-4 h-4" />
              AI-Powered Code Review
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Autonomous
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Code Review
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Transform your development workflow with intelligent AI that reviews code, detects vulnerabilities, and ensures quality standards automatically.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-cyan-500/25 transition-all duration-300 flex items-center gap-2 justify-center"
              >
                <Play className="w-5 h-5" />
                Watch Demo
              </motion.button>
              <Link
                to="/contact"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center gap-2 justify-center"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Intelligent Code Analysis
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI system provides comprehensive code review capabilities that go beyond human review capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-2xl p-8 hover:border-cyan-500/50 hover:bg-gray-800/70 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl mb-6 flex items-center justify-center text-white`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Why Choose AI Code Review?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience faster, more accurate, and more comprehensive code review processes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-3"
              >
                <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Perfect For Every Development Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From solo developers to enterprise teams, our AI system adapts to your development workflow.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => {
              const IconComponent = useCase.icon;
              return (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{useCase.title}</h3>
                  <p className="text-gray-300 text-sm">{useCase.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              What Developers Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what development teams have to say about our AI code review.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-2xl p-8"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-cyan-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-cyan-400 text-sm">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
              Ready to Transform Your Code Review?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of developers who have already revolutionized their code review process with AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-cyan-500/25 transition-all duration-300 flex items-center gap-2 justify-center"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center gap-2 justify-center"
              >
                View Pricing
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}