import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Send, 
  CheckCircle, 
  AlertCircle, 
  Star, 
  Zap, 
  Globe, 
  Rocket,
  TrendingUp,
  Shield,
  Brain,
  Cloud
} from 'lucide-react';

interface NewsletterBenefit {
  id: string;
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  color: string;
}

const benefits: NewsletterBenefit[] = [
  {
    id: 'insights',
    icon: Brain,
    title: 'AI Insights',
    description: 'Latest developments in artificial intelligence and machine learning',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'cloud',
    icon: Cloud,
    title: 'Cloud Trends',
    description: 'Emerging cloud technologies and best practices',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'security',
    icon: Shield,
    title: 'Security Updates',
    description: 'Cybersecurity threats and protection strategies',
    color: 'from-red-500 to-orange-500'
  },
  {
    id: 'innovation',
    icon: Rocket,
    title: 'Innovation News',
    description: 'Cutting-edge technology breakthroughs and trends',
    color: 'from-emerald-500 to-green-500'
  }
];

const AdvancedNewsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setError('Please enter your email address');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setError('');
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 8 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail('');
    }, 8000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-20"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring' }}
          className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8"
        >
          <CheckCircle className="w-12 h-12 text-white" />
        </motion.div>
        <h3 className="text-4xl font-bold text-white mb-6">Welcome Aboard! 🚀</h3>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Thank you for subscribing to our newsletter! You&apos;ll now receive the latest insights, 
          trends, and innovations in technology directly to your inbox.
        </p>
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl border border-blue-500/30 p-6 max-w-lg mx-auto">
          <h4 className="text-lg font-semibold text-white mb-3">What&apos;s Next?</h4>
          <ul className="text-left text-gray-300 space-y-2">
            <li className="flex items-center">
              <Star className="w-4 h-4 text-yellow-400 mr-3" />
              Weekly technology insights and trends
            </li>
            <li className="flex items-center">
              <Zap className="w-4 h-4 text-blue-400 mr-3" />
              Exclusive access to industry reports
            </li>
            <li className="flex items-center">
              <Rocket className="w-4 h-4 text-purple-400 mr-3" />
              Early access to new features and services
            </li>
          </ul>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsSubmitted(false)}
          className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Subscribe Another Email
        </motion.button>
      </motion.div>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Stay Ahead of the Curve
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get exclusive insights into the latest technology trends, AI breakthroughs, 
              and digital transformation strategies. Join thousands of tech leaders and innovators.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Newsletter Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-8"
            >
              <div className="text-center mb-8">
                <motion.div
                  className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Mail className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Subscribe to Our Newsletter
                </h3>
                <p className="text-gray-300">
                  Never miss the latest in technology innovation and digital transformation.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <motion.input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full px-4 py-4 bg-gray-800/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-500/50 transition-all duration-300 ${
                      error ? 'border-red-500' : 'border-gray-600'
                    }`}
                    placeholder="Enter your email address"
                    disabled={isSubmitting}
                  />
                  <AnimatePresence>
                    {error && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-red-400 text-sm mt-2 flex items-center"
                      >
                        <AlertCircle className="w-4 h-4 mr-2" />
                        {error}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Subscribing...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Subscribe Now
                    </>
                  )}
                </motion.button>

                <p className="text-xs text-gray-400 text-center">
                  By subscribing, you agree to receive our newsletter and marketing communications. 
                  You can unsubscribe at any time.
                </p>
              </form>
            </motion.div>

            {/* Benefits */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={benefit.id}
                    variants={itemVariants}
                    className="flex items-start space-x-4 group"
                  >
                    <motion.div
                      className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 5 }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                        {benefit.title}
                      </h4>
                      <p className="text-gray-300 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.6, type: 'spring' }}
                  className="text-4xl font-bold text-white mb-2"
                >
                  50K+
                </motion.div>
                <p className="text-gray-400">Subscribers Worldwide</p>
              </div>
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.7, type: 'spring' }}
                  className="text-4xl font-bold text-white mb-2"
                >
                  99.8%
                </motion.div>
                <p className="text-gray-400">Delivery Rate</p>
              </div>
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.8, type: 'spring' }}
                  className="text-4xl font-bold text-white mb-2"
                >
                  4.9★
                </motion.div>
                <p className="text-gray-400">Reader Rating</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedNewsletter;