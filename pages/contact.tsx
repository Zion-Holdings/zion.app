export default function Page(){return null}
=======
=======
import React from 'react';
=======
import React, { useState } from 'react';
import Head from 'next/head';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { Mail, Phone, MapPin, MessageSquare, Clock, Globe, Send, CheckCircle, Star, Zap, Shield, Users, ArrowRight, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';
=======
import React from 'react';
import SEO from '../components/SEO';

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
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      description: 'Get in touch with our team',
      contact: 'kleber@ziontechgroup.com',
      color: 'text-cyan-400',
      gradient: 'from-cyan-400 to-blue-500',
    },
    {
      icon: '📱',
      title: 'Phone',
      description: 'Speak with an expert',
      contact: '+1 302 464 0950',
      color: 'text-fuchsia-400',
      gradient: 'from-fuchsia-400 to-purple-500',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Office Address',
      value: '364 E Main St STE 1008',
      description: 'Middletown DE 19709, United States',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-500/10 to-purple-600/10',
      link: 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Business Hours',
      value: 'Monday - Friday',
      description: '9:00 AM - 6:00 PM EST',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'from-orange-500/10 to-orange-600/10',
      link: null
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Website',
      value: 'ziontechgroup.com',
      description: 'Visit our main website for more information',
      color: 'from-cyan-500 to-cyan-600',
      bgColor: 'from-cyan-500/10 to-cyan-600/10',
      link: 'https://ziontechgroup.com'
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'Live Chat',
      value: 'Available 24/7',
      description: 'Get instant help from our AI support team',
      color: 'from-pink-500 to-pink-600',
      bgColor: 'from-pink-500/10 to-pink-600/10',
      link: null
    }
  ];

  const whyChooseUs = [
    {
      city: 'Middletown',
      country: 'United States',
      address: '364 E Main St STE 1008, Middletown, DE 19709',
      icon: '🏢',
      gradient: 'from-blue-400 to-cyan-500',
    },
    {
      city: 'Global Support',
      country: 'Worldwide',
      address: '24/7 Remote Support & Consulting Available',
      icon: '🌍',
      gradient: 'from-purple-400 to-pink-500',
    },
    {
      city: 'Cloud Operations',
      country: 'Multi-Region',
      address: 'AWS, Azure, GCP Infrastructure Worldwide',
      icon: '☁️',
      gradient: 'from-green-400 to-teal-500',
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: 'Global Support',
      description: '24/7 support across all time zones'
    },
    {
      icon: <DollarSign className="w-5 h-5" />,
      title: 'Cost Effective',
      description: 'Competitive pricing with flexible payment options'
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      title: 'Proven Results',
      description: 'Thousands of satisfied customers worldwide'
    }
  ];

  const additionalServices = [
    {
      title: 'Technical Consultation',
      description: 'Get expert advice on technology implementation',
      price: 'Free for first consultation',
      duration: '30 minutes'
    },
    {
      title: 'Custom Development',
      description: 'Tailored solutions for your specific needs',
      price: 'Custom quote',
      duration: 'Project-based'
    },
    {
      title: 'Training & Support',
      description: 'Comprehensive training for your team',
      price: 'Starting at $199/hour',
      duration: 'Flexible scheduling'
    },
    {
      title: 'Emergency Support',
      description: '24/7 critical issue resolution',
      price: 'Included in enterprise plans',
      duration: 'Immediate response'
    }
  ];

  return (
      {/* Contact Information Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get in <span className="neon-text-green">Touch</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our team of experts is here to help you succeed with our micro SaaS services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-neon-blue/10 to-neon-blue/5 border border-neon-blue/20 rounded-2xl p-8 backdrop-blur-sm hover-glow">
                <Phone className="h-16 w-16 text-neon-blue mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Phone Support</h3>
                <p className="text-neon-blue font-semibold text-xl mb-2">+1 302 464 0950</p>
                <p className="text-gray-400 text-sm">Available 24/7 for urgent support</p>
                <p className="text-gray-400 text-sm mt-2">International calls welcome</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-neon-green/10 to-neon-green/5 border border-neon-green/20 rounded-2xl p-8 backdrop-blur-sm hover-glow">
                <Mail className="h-16 w-16 text-neon-green mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Email Support</h3>
                <p className="text-neon-green font-semibold text-xl mb-2">kleber@ziontechgroup.com</p>
                <p className="text-gray-400 text-sm">Response within 2 hours</p>
                <p className="text-gray-400 text-sm mt-2">Technical and sales inquiries</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-neon-purple/10 to-neon-purple/5 border border-neon-purple/20 rounded-2xl p-8 backdrop-blur-sm hover-glow">
                <MapPin className="h-16 w-16 text-neon-purple mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Headquarters</h3>
                <p className="text-neon-purple font-semibold text-base leading-tight mb-2">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709<br />
                  United States
                </p>
                <p className="text-gray-400 text-sm">Main office location</p>
              </div>
            </motion.div>
          </div>

          <div className="text-center">
            <p className="text-gray-400 text-lg mb-8">
              Ready to transform your business? Start your free trial today or schedule a consultation with our experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                href="/micro-saas"
                className="btn-futuristic px-8 py-3 text-lg font-semibold"
              >
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                href="/pricing"
                variant="outline"
                className="border-2 border-neon-green text-neon-green hover:bg-neon-green hover:text-black px-8 py-3 text-lg font-semibold transition-all duration-300"
              >
                View Pricing
                <DollarSign className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Additional Services
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Beyond our micro SaaS solutions, we offer comprehensive support and consulting services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300 h-full">
                  <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-400">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      {service.price}
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      {service.duration}
                    </div>
                  </div>
                  <Button
                    href="/contact"
                    size="sm"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                  >
                    Get Quote
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Methods Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Multiple Ways to <span className="text-blue-600">Connect</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the most convenient way to reach our team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className={`bg-gradient-to-br ${method.bgColor} rounded-2xl p-8 border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer`}>
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${method.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {method.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{method.title}</h3>
                  
                  {method.link ? (
                    <a 
                      href={method.link}
                      target={method.link.startsWith('http') ? '_blank' : '_self'}
                      rel={method.link.startsWith('http') ? 'noopener noreferrer' : ''}
                      className="block"
                    >
                      <p className={`text-lg font-semibold bg-gradient-to-r ${method.color} bg-clip-text text-transparent mb-2 hover:underline`}>
                        {method.value}
                      </p>
                    </a>
                  ) : (
                    <p className={`text-lg font-semibold bg-gradient-to-r ${method.color} bg-clip-text text-transparent mb-2`}>
                      {method.value}
                    </p>
                  )}
                  
                  <p className="text-gray-600">{method.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-blue-600">Zion Tech Group</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to delivering exceptional value and support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card variant="default" size="xl" className="text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Don't wait to transform your business. Our team is ready to help you succeed with our micro SaaS solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                variant="futuristic"
                size="lg"
                href="tel:+13024640950"
                icon={<Phone className="w-5 h-5" />}
                iconPosition="left"
                glow
                className="min-w-[200px]"
              >
                Call Now
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                href="mailto:kleber@ziontechgroup.com"
                icon={<Mail className="w-5 h-5" />}
                iconPosition="left"
                glow
                className="min-w-[200px]"
              >
                Send Email
              </Button>
            </div>
          </Card>
        </div>
      </section>
=======
    <div className="min-h-[60vh] px-6 py-24">
      <SEO title="Contact | Zion Tech Group" description="Contact Zion Tech Group" />
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4">Contact</h1>
        <p className="text-gray-300 mb-6">We would love to hear from you. Reach out to discuss how we can help.</p>
        <div className="space-y-3 text-gray-200">
          <a href="tel:+13024640950" className="block hover:text-cyan-400">+1 302 464 0950</a>
          <a href="mailto:kleber@ziontechgroup.com" className="block hover:text-purple-400">kleber@ziontechgroup.com</a>
        </div>
      </div>
    </div>
  );
}
