import type { NextPage } from 'next';
import { useState } from 'react';
import EnhancedLayout from '../components/layout/EnhancedLayout';
import EnhancedButton from '../components/ui/EnhancedButton';
import GlassmorphismCard from '../components/ui/GlassmorphismCard';

const ContactPage: NextPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState<'success' | 'error'>('success');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    // Simulate form submission
    setTimeout(() => {
      setMessageType('success');
      setMessage('Thank you for your message! We\'ll get back to you within 24 hours.');
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: ''
      });
      setLoading(false);
    }, 2000);
  };

  const contactInfo = [
    {
      title: 'Email Support',
      description: 'Get help with your account or technical issues',
      value: 'support@zion.com',
      icon: '📧',
      color: 'blue' as const
    },
    {
      title: 'Sales Inquiries',
      description: 'Learn about our enterprise solutions',
      value: 'sales@zion.com',
      icon: '💼',
      color: 'purple' as const
    },
    {
      title: 'Partnership',
      description: 'Explore collaboration opportunities',
      value: 'partnerships@zion.com',
      icon: '🤝',
      color: 'green' as const
    },
    {
      title: 'General Inquiries',
      description: 'Questions about our platform and services',
      value: 'info@zion.com',
      icon: 'ℹ️',
      color: 'pink' as const
    }
  ];

  const faqs = [
    {
      question: 'How does Zion\'s free marketplace work?',
      answer: 'Zion provides free access to AI services and professionals. We make money through premium features and enterprise partnerships, not by charging users for basic services.'
    },
    {
      question: 'How do I get started as a service provider?',
      answer: 'Simply sign up for an account, complete your profile, and start offering your services. Our team will verify your credentials and help you get set up.'
    },
    {
      question: 'What types of AI services are available?',
      answer: 'We offer a wide range of AI services including machine learning, natural language processing, computer vision, data analytics, and custom AI development.'
    },
    {
      question: 'Is my data secure on Zion?',
      answer: 'Yes, we implement enterprise-grade security measures including encryption, secure authentication, and compliance with industry standards.'
    }
  ];

  return (
    <EnhancedLayout
      title="Contact Zion - Get in Touch"
      description="Contact Zion for support, sales inquiries, partnerships, or general questions about our AI-powered marketplace."
    >
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="container-responsive">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-responsive-4xl lg:text-responsive-6xl font-bold text-white mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
                Get in Touch
              </span>
            </h1>
            <p className="text-responsive-xl text-gray-300 mb-8 leading-relaxed">
              Have questions about our AI-powered marketplace? We're here to help. 
              Reach out to our team for support, sales inquiries, partnerships, or general questions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="relative py-20 lg:py-32">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-responsive-3xl lg:text-responsive-4xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-neon-blue">
                Contact Information
              </span>
            </h2>
            <p className="text-responsive-lg text-gray-400 max-w-2xl mx-auto">
              Reach out to our team through any of these channels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <GlassmorphismCard key={index} gradient={info.color} glow>
                <div className="text-center">
                  <div className="text-4xl mb-4">{info.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{info.title}</h3>
                  <p className="text-gray-300 mb-4">{info.description}</p>
                  <a 
                    href={`mailto:${info.value}`}
                    className="text-neon-blue hover:text-neon-purple transition-colors font-semibold"
                  >
                    {info.value}
                  </a>
                </div>
              </GlassmorphismCard>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-50"></div>

        <div className="container-responsive relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-responsive-3xl lg:text-responsive-4xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-pink">
                  Send Us a Message
                </span>
              </h2>
              <p className="text-responsive-lg text-gray-400 max-w-2xl mx-auto">
                Fill out the form below and we'll get back to you within 24 hours
              </p>
            </div>

            <div className="glass-dark border border-neon-blue/30 rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-semibold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-cyber-dark border border-neon-blue/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/20 transition-all"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-cyber-dark border border-neon-blue/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/20 transition-all"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-white font-semibold mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-cyber-dark border border-neon-blue/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/20 transition-all"
                      placeholder="Enter your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-white font-semibold mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-cyber-dark border border-neon-blue/30 rounded-lg text-white focus:outline-none focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/20 transition-all"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="sales">Sales Inquiry</option>
                      <option value="partnership">Partnership</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-cyber-dark border border-neon-blue/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/20 transition-all resize-none"
                    placeholder="Tell us about your inquiry..."
                  />
                </div>

                {message && (
                  <div className={`p-4 rounded-lg ${
                    messageType === 'success' 
                      ? 'bg-green-900/20 border border-green-500/30 text-green-300' 
                      : 'bg-red-900/20 border border-red-500/30 text-red-300'
                  }`}>
                    {message}
                  </div>
                )}

                <div className="text-center">
                  <EnhancedButton
                    size="lg"
                    gradient="blue"
                    glow
                    icon="📤"
                    disabled={loading}
                    onClick={() => handleSubmit}
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </EnhancedButton>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20 lg:py-32">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-responsive-3xl lg:text-responsive-4xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-green">
                Frequently Asked Questions
              </span>
            </h2>
            <p className="text-responsive-lg text-gray-400 max-w-2xl mx-auto">
              Find answers to common questions about our platform
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <GlassmorphismCard key={index} gradient="blue" glow>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              </GlassmorphismCard>
            ))}
          </div>
        </div>
      </section>
    </EnhancedLayout>
  );
};

export default ContactPage;
