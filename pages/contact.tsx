import React, { useState } from 'react';
import Head from 'next/head';
import { 
  Mail, Phone, MapPin, Send, Clock, Globe, MessageSquare, 
  CheckCircle, AlertCircle, ArrowRight, Sparkles, Building,
  Shield, Zap, Users, Award, Star, Check
} from 'lucide-react';
import Button from '../components/ui/Button';
import QuantumHolographicBackground from '../components/ui/QuantumHolographicBackground';
import QuantumHolographicCard from '../components/ui/QuantumHolographicCard';
import EnhancedFuturisticCard from '../components/ui/EnhancedFuturisticCard';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const businessHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM EST' },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM EST' },
    { day: 'Sunday', hours: 'Emergency Support Only' }
  ];

  const whyChooseUs = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Enterprise-Grade Security',
      description: 'SOC 2 Type II compliant with quantum-resistant encryption'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Lightning Fast Setup',
      description: 'Get started in minutes with our automated onboarding'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Expert Support Team',
      description: '24/7 AI-powered support with human experts available'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Guaranteed ROI',
      description: '1500%+ average ROI with our revolutionary solutions'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 2000);
  };

  return (
    <QuantumHolographicBackground variant="quantum-holographic" intensity="high">
      <div className="min-h-screen">
        <Head>
          <title>Contact Us - Zion Tech Group | Get Started with Revolutionary Technology Solutions</title>
          <meta name="description" content="Contact Zion Tech Group today for a free consultation on our revolutionary AI, quantum computing, and emerging technology solutions. Transform your business with guaranteed ROI." />
          <meta name="keywords" content="contact Zion Tech Group, AI consultation, quantum computing services, technology solutions, business transformation" />
          <meta property="og:title" content="Contact Us - Zion Tech Group" />
          <meta property="og:description" content="Get started with revolutionary technology solutions. Free consultation available." />
          <meta property="og:url" content="https://ziontechgroup.com/contact" />
        </Head>

        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-400 text-sm font-medium mb-6 backdrop-blur-sm">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Ready to Transform Your Business?
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                  Let's Build the
                  <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                    Future Together
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                  Ready to revolutionize your business with cutting-edge AI, quantum computing, 
                  and emerging technology solutions? Contact our experts today for a free consultation.
                </p>
              </div>

              {/* Contact Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
                  <div className="text-sm text-gray-400">Services</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">99.99%</div>
                  <div className="text-sm text-gray-400">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">30</div>
                  <div className="text-sm text-gray-400">Day Trial</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
                  <div className="text-sm text-gray-400">Support</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Get in Touch
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Multiple ways to reach our team of technology experts
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Phone Contact */}
              <EnhancedFuturisticCard variant="quantum" className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-cyan-400 mb-4 group-hover:text-cyan-300 transition-colors">
                  <Phone className="w-12 h-12 mx-auto" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Call Us</h3>
                <p className="text-cyan-400 font-mono text-lg mb-2">{contactInfo.mobile}</p>
                <p className="text-gray-400 text-sm mb-4">Available 24/7 for urgent matters</p>
                <Button
                  href={`tel:${contactInfo.mobile}`}
                  variant="outline"
                  size="sm"
                  className="group-hover:bg-cyan-500 group-hover:text-white transition-colors"
                >
                  Call Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </EnhancedFuturisticCard>

              {/* Email Contact */}
              <EnhancedFuturisticCard variant="holographic" className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-purple-400 mb-4 group-hover:text-purple-300 transition-colors">
                  <Mail className="w-12 h-12 mx-auto" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Email Us</h3>
                <p className="text-purple-400 font-mono text-lg mb-2 break-all">{contactInfo.email}</p>
                <p className="text-gray-400 text-sm mb-4">Response within 2 hours</p>
                <Button
                  href={`mailto:${contactInfo.email}`}
                  variant="outline"
                  size="sm"
                  className="group-hover:bg-purple-500 group-hover:text-white transition-colors"
                >
                  Send Email
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </EnhancedFuturisticCard>

              {/* Address */}
              <EnhancedFuturisticCard variant="neural" className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-green-400 mb-4 group-hover:text-green-300 transition-colors">
                  <MapPin className="w-12 h-12 mx-auto" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Visit Us</h3>
                <p className="text-green-400 font-mono text-sm mb-2 leading-relaxed">{contactInfo.address}</p>
                <p className="text-gray-400 text-sm mb-4">Global headquarters</p>
                <Button
                  href={`https://maps.google.com/?q=${encodeURIComponent(contactInfo.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  size="sm"
                  className="group-hover:bg-green-500 group-hover:text-white transition-colors"
                >
                  Get Directions
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </EnhancedFuturisticCard>
            </div>

            {/* Business Hours */}
            <div className="max-w-2xl mx-auto">
              <EnhancedFuturisticCard variant="cyberpunk" className="text-center">
                <div className="text-blue-400 mb-4">
                  <Clock className="w-8 h-8 mx-auto" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Business Hours</h3>
                <div className="space-y-2">
                  {businessHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center text-sm">
                      <span className="text-gray-300">{schedule.day}</span>
                      <span className="text-blue-400 font-medium">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-green-500/20 rounded-lg border border-green-500/30">
                  <p className="text-green-400 text-sm">
                    <Check className="w-4 h-4 inline mr-2" />
                    Emergency support available 24/7 for critical issues
                  </p>
                </div>
              </EnhancedFuturisticCard>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Form */}
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">Send Us a Message</h2>
                  <p className="text-gray-300 mb-8">
                    Tell us about your business needs and we'll help you find the perfect 
                    technology solution. Get a free consultation and start your transformation journey.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm"
                          placeholder="Enter company name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm"
                          placeholder="Enter phone number"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Service of Interest
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm"
                      >
                        <option value="">Select a service category</option>
                        <option value="quantum-ai">Quantum AI & Computing</option>
                        <option value="autonomous-systems">Autonomous Systems & Robotics</option>
                        <option value="biomedical">Biomedical & Healthcare AI</option>
                        <option value="cybersecurity">Quantum Cybersecurity</option>
                        <option value="financial">Financial Technology</option>
                        <option value="space">Space & Aerospace AI</option>
                        <option value="metaverse">Metaverse & VR/AR</option>
                        <option value="blockchain">Blockchain & DeFi</option>
                        <option value="iot">IoT & Smart Cities</option>
                        <option value="other">Other / Custom Solution</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm resize-none"
                        placeholder="Tell us about your business needs, challenges, and how we can help..."
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full group"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </Button>

                    {/* Submit Status */}
                    {submitStatus === 'success' && (
                      <div className="flex items-center p-4 bg-green-500/20 rounded-lg border border-green-500/30">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                        <span className="text-green-400">Message sent successfully! We'll get back to you within 2 hours.</span>
                      </div>
                    )}
                    {submitStatus === 'error' && (
                      <div className="flex items-center p-4 bg-red-500/20 rounded-lg border border-red-500/30">
                        <AlertCircle className="w-5 h-5 text-red-400 mr-2" />
                        <span className="text-red-400">Error sending message. Please try again or contact us directly.</span>
                      </div>
                    )}
                  </form>
                </div>

                {/* Why Choose Us */}
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">Why Choose Zion Tech Group?</h2>
                  <p className="text-gray-300 mb-8">
                    We're not just another technology company. We're the architects of the future, 
                    building tomorrow's solutions today with proven results and guaranteed ROI.
                  </p>

                  <div className="space-y-6">
                    {whyChooseUs.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="text-cyan-400 mt-1">
                          {feature.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                          <p className="text-gray-300 text-sm">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Contact Summary */}
                  <div className="mt-8 p-6 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/50 backdrop-blur-sm">
                    <h3 className="text-lg font-semibold text-white mb-4">Ready to Get Started?</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center text-gray-300">
                        <Check className="w-4 h-4 text-green-400 mr-2" />
                        Free 30-day trial on all services
                      </div>
                      <div className="flex items-center text-gray-300">
                        <Check className="w-4 h-4 text-green-400 mr-2" />
                        No setup fees or hidden costs
                      </div>
                      <div className="flex items-center text-gray-300">
                        <Check className="w-4 h-4 text-green-400 mr-2" />
                        Expert implementation support
                      </div>
                      <div className="flex items-center text-gray-300">
                        <Check className="w-4 h-4 text-green-400 mr-2" />
                        Guaranteed ROI within 6 months
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Transform Your Business Today
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Don't wait to start your digital transformation journey. 
                Contact us now and discover how our revolutionary technology solutions can drive unprecedented growth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Button
                  href={`tel:${contactInfo.mobile}`}
                  variant="primary"
                  size="lg"
                  className="group"
                >
                  Call Now
                  <Phone className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                </Button>
                <Button
                  href={`mailto:${contactInfo.email}`}
                  variant="secondary"
                  size="lg"
                  className="group"
                >
                  Send Email
                  <Mail className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                </Button>
              </div>

              {/* Final Contact Info */}
              <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-700/50">
                <h3 className="text-2xl font-bold text-white mb-4">Get in Touch Today</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <Phone className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                    <div className="text-sm text-gray-400">Mobile</div>
                    <div className="text-white font-semibold">{contactInfo.mobile}</div>
                    <div className="text-xs text-cyan-400 mt-1">Available 24/7</div>
                  </div>
                  <div className="text-center">
                    <Mail className="w-6 h-6 text-green-400 mx-auto mb-2" />
                    <div className="text-sm text-gray-400">Email</div>
                    <div className="text-white font-semibold">{contactInfo.email}</div>
                    <div className="text-xs text-green-400 mt-1">Response within 2 hours</div>
                  </div>
                  <div className="text-center">
                    <MapPin className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                    <div className="text-sm text-gray-400">Address</div>
                    <div className="text-white font-semibold text-sm">{contactInfo.address}</div>
                    <div className="text-xs text-purple-400 mt-1">Global headquarters</div>
                  </div>
                </div>
                <div className="text-center mt-6">
                  <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-semibold text-sm">
                    <Globe className="w-4 h-4 mr-2" />
                    Visit us at: {contactInfo.website}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </QuantumHolographicBackground>
  );
}