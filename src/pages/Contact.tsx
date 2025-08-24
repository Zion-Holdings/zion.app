<<<<<<< HEAD
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
=======
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SEO } from '@/components/SEO';
>>>>>>> 1acd3dbe54c18705f7ef53de7847b1d123ac5c77

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'info@ziontechgroup.com',
      link: 'mailto:info@ziontechgroup.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+1 302 464 0950',
      link: 'tel:+13024640950'
    },
    {
      icon: MapPin,
      title: 'Address',
      content: '364 E Main St STE 1008, Middletown DE 19709',
      link: 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: 'Mon-Fri: 9AM-6PM EST',
      link: null
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
<<<<<<< HEAD
    <>
      <SEO 
        title="Contact Zion - Get in Touch" 
        description="Contact Zion Tech Group for support, partnerships, or any questions about our AI and tech marketplace platform." 
        keywords="contact Zion, support, help, partnership, inquiry"
        url="https://ziontechgroup.com/contact"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <GradientHeading>Contact Us</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Get in touch with our team. We're here to help with any questions about our platform, 
              partnerships, or support you might need.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6">
              <div className="text-center">
                <div className="bg-zion-blue inline-flex p-3 rounded-full mb-4">
                  <svg className="h-6 w-6 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                <p className="text-zion-slate-light mb-4">
                  Send us a message anytime
                </p>
                <p className="text-zion-cyan font-semibold">kleber@ziontechgroup.com</p>
              </div>
            </div>

            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6">
              <div className="text-center">
                <div className="bg-zion-blue inline-flex p-3 rounded-full mb-4">
                  <svg className="h-6 w-6 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
                <p className="text-zion-slate-light mb-4">
                  Available during business hours
                </p>
                <p className="text-zion-cyan font-semibold">+1 302 464 0950</p>
              </div>
            </div>

            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6">
              <div className="text-center">
                <div className="bg-zion-blue inline-flex p-3 rounded-full mb-4">
                  <svg className="h-6 w-6 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
                <p className="text-zion-slate-light mb-4">
                  Our office location
                </p>
                <p className="text-zion-slate-light text-sm">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-zion-slate-light mb-2">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full p-3 bg-zion-blue-dark border border-zion-blue-light text-white placeholder-zion-slate-light rounded-lg"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-zion-slate-light mb-2">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full p-3 bg-zion-blue-dark border border-zion-blue-light text-white placeholder-zion-slate-light rounded-lg"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-zion-slate-light mb-2">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    className="w-full p-3 bg-zion-blue-dark border border-zion-blue-light text-white placeholder-zion-slate-light rounded-lg"
                    placeholder="What is this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-zion-slate-light mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full p-3 bg-zion-blue-dark border border-zion-blue-light text-white placeholder-zion-slate-light rounded-lg resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-zion-cyan text-zion-blue-dark hover:bg-zion-cyan-light px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Business Hours</h2>
              <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-zion-slate-light">Monday - Friday</span>
                    <span className="text-white font-semibold">9:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-zion-slate-light">Saturday</span>
                    <span className="text-white font-semibold">10:00 AM - 4:00 PM EST</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-zion-slate-light">Sunday</span>
                    <span className="text-white font-semibold">Closed</span>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold text-white mb-4">Live Chat Support</h3>
                <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <svg className="h-5 w-5 text-zion-cyan mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <span className="text-white font-semibold">Online Support</span>
                  </div>
                  <p className="text-zion-slate-light mb-4">
                    Need immediate assistance? Our live chat support is available during business hours.
                  </p>
                  <button className="bg-zion-cyan text-zion-blue-dark hover:bg-zion-cyan-light px-6 py-3 rounded-lg font-semibold transition-colors">
                    Start Chat
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
=======
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark pt-20">
      <SEO
        title="Contact Us"
        description="Get in touch with Zion Tech Group. We're here to help you transform your business with cutting-edge technology solutions."
        keywords="contact Zion Tech Group, tech support, IT consulting, AI services contact"
        type="website"
      />
      <div className="container mx-auto px-4 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold text-white mb-6">
            Get in Touch
          </motion.h1>
          <motion.p variants={itemVariants} className="text-xl text-zion-slate-light max-w-2xl mx-auto">
            Ready to transform your business with cutting-edge technology? Let's discuss how Zion Tech Group can help you achieve your goals.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div variants={itemVariants} className="space-y-6">
            <Card className="bg-zion-blue-light/10 border-zion-blue-light/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white flex items-center">
                  <Send className="w-6 h-6 mr-2 text-zion-cyan" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-zion-slate-light mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="bg-zion-blue-light/10 border-zion-blue-light/20 text-white placeholder-zion-slate-light focus:border-zion-cyan focus:ring-zion-cyan/20"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-zion-slate-light mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-zion-blue-light/10 border-zion-blue-light/20 text-white placeholder-zion-slate-light focus:border-zion-cyan focus:ring-zion-cyan/20"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-zion-slate-light mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="bg-zion-blue-light/10 border-zion-blue-light/20 text-white placeholder-zion-slate-light focus:border-zion-cyan focus:ring-zion-cyan/20"
                      placeholder="What can we help you with?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-zion-slate-light mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="bg-zion-blue-light/10 border-zion-blue-light/20 text-white placeholder-zion-slate-light focus:border-zion-cyan focus:ring-zion-cyan/20 resize-none"
                      placeholder="Tell us more about your project or inquiry..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan/90 hover:to-zion-purple/90 text-white py-3 text-lg font-semibold"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </div>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>

                  {submitStatus === 'success' && (
                    <div className="flex items-center text-green-400 bg-green-400/10 p-3 rounded-lg">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Message sent successfully! We'll get back to you soon.
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="flex items-center text-red-400 bg-red-400/10 p-3 rounded-lg">
                      <AlertCircle className="w-5 h-5 mr-2" />
                      Something went wrong. Please try again.
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  variants={itemVariants}
                  className="flex items-start space-x-4 p-4 rounded-lg bg-zion-blue-light/10 border border-zion-blue-light/20 hover:border-zion-cyan/40 transition-colors"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-1">{info.title}</h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-zion-slate-light hover:text-zion-cyan transition-colors"
                        target={info.link.startsWith('http') ? '_blank' : undefined}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-zion-slate-light">{info.content}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <Card className="bg-zion-blue-light/10 border-zion-blue-light/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white">Why Choose Zion Tech Group?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center text-zion-slate-light">
                  <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                  <span>24/7 Technical Support</span>
                </div>
                <div className="flex items-center text-zion-slate-light">
                  <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                  <span>Global Network of Experts</span>
                </div>
                <div className="flex items-center text-zion-slate-light">
                  <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                  <span>Custom Solutions for Your Business</span>
                </div>
                <div className="flex items-center text-zion-slate-light">
                  <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                  <span>Competitive Pricing & Flexible Plans</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div variants={itemVariants} className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-zion-slate-light">Quick answers to common questions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-zion-blue-light/10 border-zion-blue-light/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-white">What services do you offer?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zion-slate-light">
                  We offer comprehensive IT services including AI development, cloud solutions, cybersecurity,
                  digital transformation, and specialized talent placement for tech projects.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zion-blue-light/10 border-zion-blue-light/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-white">How quickly can you respond?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zion-slate-light">
                  We typically respond to inquiries within 2 hours during business hours.
                  For urgent matters, we offer 24/7 emergency support for existing clients.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zion-blue-light/10 border-zion-blue-light/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-white">Do you work internationally?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zion-slate-light">
                  Yes! We have a global network of experts and serve clients in over 150 countries.
                  Our team can work remotely or on-site depending on your needs.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zion-blue-light/10 border-zion-blue-light/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-white">What makes you different?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zion-slate-light">
                  We combine cutting-edge AI technology with human expertise, offering a unique marketplace
                  that connects businesses with verified tech professionals and innovative solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
>>>>>>> 1acd3dbe54c18705f7ef53de7847b1d123ac5c77
  );
}
