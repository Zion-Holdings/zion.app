import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Brain, Star, Users, TrendingUp, Zap, Shield, 
  CheckCircle, Clock, Award, Target, Globe, Sparkles,
  ArrowRight, Phone, Mail, MapPin, Globe as GlobeIcon,
  Cpu, Lock, Cloud, BarChart3, Settings, Eye, Heart, Lightbulb
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const features = [
  'Emotional intelligence training modules',
  'Consciousness expansion exercises',
  'Mindfulness and meditation guidance',
  'Cognitive enhancement techniques',
  'Self-awareness development tools',
  'Empathy and compassion training',
  'Stress management and resilience',
  'Personal growth tracking',
  'AI-powered personalized coaching',
  'Community consciousness circles',
  'Scientific research integration',
  'Progress analytics and insights'
];

const benefits = [
  'Enhanced emotional intelligence and empathy',
  'Improved self-awareness and consciousness',
  'Better stress management and resilience',
  'Increased creativity and innovation',
  'Stronger relationships and communication',
  'Personal and professional growth',
  'Mental health and well-being improvement',
  'Cognitive enhancement and clarity'
];

const useCases = [
  'Personal development and self-improvement',
  'Professional leadership training',
  'Mental health and wellness programs',
  'Educational institutions and schools',
  'Corporate training and development',
  'Healthcare and therapy applications',
  'Research and scientific studies',
  'Community building and social impact'
];

const testimonials = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Neuroscientist',
    company: 'Stanford University',
    rating: 5,
    comment: 'This platform has revolutionized how we approach consciousness studies. The AI integration provides personalized insights that traditional methods simply cannot match.',
    avatar: '👩‍🔬'
  },
  {
    name: 'Marcus Rodriguez',
    role: 'CEO',
    company: 'MindfulTech Solutions',
    rating: 5,
    comment: 'Our team\'s emotional intelligence has improved dramatically. The platform\'s personalized approach makes consciousness development accessible to everyone.',
    avatar: '👨‍💼'
  },
  {
    name: 'Dr. Emily Watson',
    role: 'Psychologist',
    company: 'Wellness Institute',
    rating: 5,
    comment: 'I\'ve integrated this into my practice and the results are remarkable. Patients show faster progress in self-awareness and emotional regulation.',
    avatar: '👩‍⚕️'
  }
];

const pricingPlans = [
  {
    name: 'Starter',
    price: '$99',
    period: '/month',
    description: 'Perfect for individuals beginning their consciousness journey',
    features: [
      'Basic consciousness exercises',
      'Emotional intelligence assessment',
      'Personalized recommendations',
      'Progress tracking',
      'Community access',
      'Email support'
    ],
    popular: false
  },
  {
    name: 'Professional',
    price: '$299',
    period: '/month',
    description: 'Advanced features for serious practitioners and professionals',
    features: [
      'All Starter features',
      'Advanced AI coaching',
      'Custom consciousness programs',
      'Group sessions',
      'Priority support',
      'Analytics dashboard',
      'Integration with health apps',
      'Monthly progress reports'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: '$999',
    period: '/month',
    description: 'Comprehensive solution for organizations and research institutions',
    features: [
      'All Professional features',
      'Custom platform branding',
      'Advanced analytics and reporting',
      'API access and integrations',
      'Dedicated success manager',
      'Training and certification',
      'White-label solutions',
      '24/7 priority support'
    ],
    popular: false
  }
];

export default function AIConsciousnessEvolution2025() {
  return (
    <Layout>
      <Head>
        <title>AI Consciousness Evolution Platform 2025 - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered consciousness evolution platform that combines emotional intelligence training with advanced AI coaching for personal and professional growth." />
        <meta name="keywords" content="AI consciousness, emotional intelligence, mindfulness, personal development, AI coaching, consciousness evolution, Zion Tech Group" />
      </Head>

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-indigo-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(147,51,234,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(79,70,229,0.1),transparent_50%)]"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-purple-400 rounded-full opacity-20"
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Revolutionary AI Consciousness Platform
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                AI Consciousness
              </span>
              <br />
              <span className="text-white">Evolution Platform</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-purple-300 mb-8 max-w-4xl mx-auto">
              Experience the future of personal development with our revolutionary AI-powered consciousness evolution platform. 
              Combine cutting-edge AI technology with proven consciousness expansion techniques.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {[
                { label: 'Users Worldwide', value: '50K+', icon: <Users className="w-8 h-8" /> },
                { label: 'Success Rate', value: '94%', icon: <Award className="w-8 h-8" /> },
                { label: 'AI Accuracy', value: '98%', icon: <Brain className="w-8 h-8" /> },
                { label: 'Growth Rate', value: '300%', icon: <TrendingUp className="w-8 h-8" /> }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full mb-3 text-purple-400">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-purple-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="#pricing"
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-medium py-4 px-8 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105"
              >
                Start Your Journey
              </a>
              <a
                href="#demo"
                className="border border-purple-500/50 text-purple-300 hover:text-white hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 font-medium py-4 px-8 rounded-xl transition-all duration-200"
              >
                Watch Demo
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Revolutionary Features for Consciousness Evolution
            </h2>
            <p className="text-xl text-purple-300 max-w-3xl mx-auto">
              Our platform combines the latest AI technology with proven consciousness expansion techniques 
              to create a truly transformative experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-lg border border-purple-500/20 rounded-2xl p-6 hover:border-purple-400/40 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors duration-200">
                  {feature}
                </h3>
                <p className="text-gray-400">
                  Advanced AI-powered implementation that adapts to your unique consciousness journey.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-black to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Transform Your Life with AI Consciousness
            </h2>
            <p className="text-xl text-purple-300 max-w-3xl mx-auto">
              Experience unprecedented personal growth and consciousness expansion through our 
              AI-powered platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit}</h3>
                  <p className="text-gray-400">
                    Scientifically proven results through our AI-powered consciousness evolution methodology.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Applications Across Industries
            </h2>
            <p className="text-xl text-purple-300 max-w-3xl mx-auto">
              Our AI consciousness platform is transforming how individuals and organizations 
              approach personal development and growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-lg border border-purple-500/20 rounded-xl p-6 text-center hover:border-purple-400/40 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center text-purple-400 mx-auto mb-4">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{useCase}</h3>
                <p className="text-sm text-gray-400">
                  Tailored solutions for specific industry needs and requirements.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-black to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              What Our Users Say
            </h2>
            <p className="text-xl text-purple-300 max-w-3xl mx-auto">
              Join thousands of satisfied users who have transformed their lives through 
              our AI consciousness platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-lg border border-purple-500/20 rounded-2xl p-6 hover:border-purple-400/40 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{testimonial.avatar}</div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-purple-300 text-sm">{testimonial.role}</p>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic">"{testimonial.comment}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Choose Your Consciousness Journey
            </h2>
            <p className="text-xl text-purple-300 max-w-3xl mx-auto">
              Flexible pricing plans designed to meet your individual needs and goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-lg border rounded-2xl p-8 ${
                  plan.popular 
                    ? 'border-purple-400/50 shadow-2xl shadow-purple-500/20 scale-105' 
                    : 'border-purple-500/20'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-purple-400">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-xl font-medium transition-all duration-200 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700 hover:shadow-lg hover:shadow-purple-500/25'
                    : 'border border-purple-500/50 text-purple-300 hover:text-white hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20'
                }`}>
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-b from-black to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Begin Your Consciousness Evolution?
            </h2>
            <p className="text-xl text-purple-300 max-w-3xl mx-auto">
              Contact our team to learn more about how our AI consciousness platform 
              can transform your life and accelerate your personal growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: <Phone className="w-8 h-8" />, label: 'Call Us', value: contactInfo.mobile, color: 'from-green-500 to-emerald-600' },
              { icon: <Mail className="w-8 h-8" />, label: 'Email Us', value: contactInfo.email, color: 'from-blue-500 to-cyan-600' },
              { icon: <MapPin className="w-8 h-8" />, label: 'Visit Us', value: contactInfo.address, color: 'from-purple-500 to-pink-600' }
            ].map((contact, index) => (
              <motion.div
                key={contact.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${contact.color} rounded-full mb-4 text-white`}>
                  {contact.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{contact.label}</h3>
                <p className="text-purple-300">{contact.value}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="/contact"
              className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-medium py-4 px-8 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}