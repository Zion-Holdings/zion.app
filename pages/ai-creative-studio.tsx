import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Palette, Image, Video, Music, FileText, Brain, 
  CheckCircle, ArrowRight, Zap, Target, Award,
  Users, Clock, Shield, MessageCircle, Phone, Mail, MapPin
} from 'lucide-react';

const AICreativeStudio: React.FC = () => {
  const features = [
    {
      icon: <Image className="w-6 h-6" />,
      title: 'AI Image Generation',
      description: 'Create stunning visuals, illustrations, and graphics with text-to-image AI'
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: 'Video Creation',
      description: 'Generate engaging videos, animations, and motion graphics automatically'
    },
    {
      icon: <Music className="w-6 h-6" />,
      title: 'Audio Generation',
      description: 'Create original music, sound effects, and voice-overs with AI'
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Content Writing',
      description: 'Generate compelling copy, articles, and marketing content'
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'Creative Intelligence',
      description: 'AI-powered creative direction and style recommendations'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Team Collaboration',
      description: 'Multi-user creative workflows with version control'
    }
  ];

  const creativeTools = [
    {
      category: 'Visual Design',
      tools: [
        { name: 'Image Generator', description: 'Text-to-image creation with multiple styles', accuracy: '99.2%' },
        { name: 'Logo Designer', description: 'Custom logo creation and branding', accuracy: '98.7%' },
        { name: 'Layout Generator', description: 'Automatic design layouts and compositions', accuracy: '99.1%' }
      ]
    },
    {
      category: 'Video Production',
      tools: [
        { name: 'Video Generator', description: 'Text-to-video creation and editing', accuracy: '97.8%' },
        { name: 'Animation Creator', description: '2D and 3D animation generation', accuracy: '98.3%' },
        { name: 'Motion Graphics', description: 'Dynamic visual effects and transitions', accuracy: '98.9%' }
      ]
    },
    {
      category: 'Audio Creation',
      tools: [
        { name: 'Music Composer', description: 'Original music generation in various genres', accuracy: '96.5%' },
        { name: 'Voice Synthesizer', description: 'Natural-sounding voice generation', accuracy: '99.4%' },
        { name: 'Sound Designer', description: 'Custom sound effects and audio', accuracy: '97.2%' }
      ]
    },
    {
      category: 'Content Writing',
      tools: [
        { name: 'Copy Generator', description: 'Marketing copy and advertising text', accuracy: '99.6%' },
        { name: 'Article Writer', description: 'Long-form content and blog posts', accuracy: '98.9%' },
        { name: 'Script Writer', description: 'Video scripts and storytelling', accuracy: '97.8%' }
      ]
    }
  ];

  const useCases = [
    {
      title: 'Marketing & Advertising',
      description: 'Create compelling campaigns, social media content, and brand materials',
      benefits: ['10x faster content creation', 'Consistent brand voice', 'A/B testing automation']
    },
    {
      title: 'E-commerce & Retail',
      description: 'Generate product visuals, descriptions, and marketing materials',
      benefits: ['Unlimited product imagery', 'Localized content', 'Seasonal campaign automation']
    },
    {
      title: 'Entertainment & Media',
      description: 'Produce videos, music, and creative content for various platforms',
      benefits: ['Rapid content production', 'Style customization', 'Multi-format output']
    },
    {
      title: 'Education & Training',
      description: 'Create engaging educational materials and visual learning content',
      benefits: ['Interactive content creation', 'Multilingual support', 'Accessibility features']
    }
  ];

  const pricingPlans = [
    {
      name: 'Creator',
      price: '$99',
      period: '/month',
      description: 'Perfect for individual creators and small teams',
      features: [
        'Up to 100 creations/month',
        'Basic AI tools',
        'Standard templates',
        'Email support',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Studio',
      price: '$299',
      period: '/month',
      description: 'Ideal for creative agencies and growing businesses',
      features: [
        'Up to 500 creations/month',
        'Advanced AI algorithms',
        'Custom templates',
        'Priority support',
        'Advanced analytics',
        'Team collaboration',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations',
      features: [
        'Unlimited creations',
        'Custom AI model training',
        'White-label solutions',
        'Dedicated support team',
        'Advanced analytics',
        'Full API integration',
        'Custom compliance frameworks'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      quote: "The AI Creative Studio has transformed our marketing workflow. We're producing 10x more content in half the time.",
      author: "Jessica Martinez",
      position: "Creative Director",
      company: "Digital Marketing Pro"
    },
    {
      quote: "Our e-commerce business now has unlimited product imagery. The AI generates exactly what we need instantly.",
      author: "David Kim",
      position: "Marketing Manager",
      company: "Tech Retail Co"
    },
    {
      quote: "The video generation capabilities are incredible. We're creating professional content that used to take weeks.",
      author: "Sarah Johnson",
      position: "Content Producer",
      company: "Media Studio Inc"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-sm font-medium mb-6">
                <Palette className="w-4 h-4 mr-2" />
                AI-Powered Creative Platform
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Creative Studio
              </h1>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Unleash your creativity with AI-powered tools for image generation, video creation, 
                music composition, and content writing. Transform ideas into reality instantly.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105">
                  Start Creating
                </button>
                <button className="px-8 py-4 border border-cyan-400/20 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-200">
                  <MessageCircle className="w-5 h-5 inline mr-2" />
                  Watch Demo
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
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Creative AI Features
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Advanced artificial intelligence designed to amplify human creativity
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-cyan-400/10 rounded-lg flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Creative Tools Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Creative Tools & Capabilities
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Comprehensive suite of AI-powered creative tools across all media types
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {creativeTools.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold text-white mb-4 text-center">
                    {category.category}
                  </h3>
                  
                  <div className="space-y-4">
                    {category.tools.map((tool, toolIndex) => (
                      <div key={toolIndex} className="border border-cyan-400/20 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-cyan-400 font-medium">
                            {tool.name}
                          </h4>
                          <span className="text-green-400 text-sm font-bold">
                            {tool.accuracy}
                          </span>
                        </div>
                        <p className="text-gray-300 text-sm">
                          {tool.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Creative Applications
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Discover how AI can transform creative workflows across various industries
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {useCase.description}
                  </p>
                  <ul className="space-y-2">
                    {useCase.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Creative Pricing Plans
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Flexible pricing options designed for creators and creative teams of all sizes
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative bg-gray-900/50 backdrop-blur-sm border rounded-xl p-6 ${
                    plan.popular 
                      ? 'border-cyan-400/40 bg-cyan-400/5' 
                      : 'border-cyan-400/20'
                  } hover:border-cyan-400/40 transition-all duration-300`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="px-4 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-3xl font-bold text-white">
                        {plan.price}
                      </span>
                      <span className="text-gray-400 ml-1">
                        {plan.period}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm">
                      {plan.description}
                    </p>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                      : 'border border-cyan-400/20 text-cyan-400 hover:bg-cyan-400/10'
                  }`}>
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Creators Say
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Real feedback from creative professionals using our AI platform
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Award key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-300 mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-white">
                      {testimonial.author}
                    </div>
                    <div className="text-cyan-400 text-sm">
                      {testimonial.position}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {testimonial.company}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 to-blue-600/10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Unleash Your Creativity?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of creators who are already using AI to bring their ideas to life
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105">
                  Start Creating Now
                </button>
                <a
                  href="/contact"
                  className="px-8 py-4 border border-cyan-400/20 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-200"
                >
                  Schedule Demo
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AICreativeStudio;