import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle, 
  MessageSquare,
  Globe,
  Building
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import FuturisticNeonButton from '../components/ui/FuturisticNeonButton';
import FuturisticAnimatedBackground from '../components/ui/FuturisticAnimatedBackground';
import { SEO } from '../components/SEO';

const Contact: React.FC = () => {
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
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
      icon: Phone,
      title: 'Phone',
      value: '+1 (302) 464-0950',
      description: 'Call us directly for immediate assistance',
      action: () => window.location.href = 'tel:+13024640950',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'kleber@ziontechgroup.com',
      description: 'Send us a detailed message',
      action: () => window.location.href = 'mailto:kleber@ziontechgroup.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: MapPin,
      title: 'Address',
      value: '364 E Main St STE 1008, Middletown DE 19709',
      description: 'Visit our office for in-person meetings',
      action: () => window.open('https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709'),
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      value: 'Mon-Fri: 9:00 AM - 6:00 PM EST',
      description: 'We\'re available during business hours',
      action: null,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const services = [
    'AI & Machine Learning',
    'Cloud Migration',
    'Cybersecurity',
    'Digital Transformation',
    'Web Development',
    'Mobile Development',
    'IT Consulting',
    'Data Analytics',
    'Business Process Automation',
    'Custom Software Development'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark relative overflow-hidden">
      <SEO 
        title="Contact Us - Get Expert Technology Consultation | Zion Tech Group"
        description="Ready to transform your business? Contact Zion Tech Group for expert technology consultation, AI solutions, and digital transformation services. Call +1 (302) 464-0950."
        canonical="/contact"
      />
      
      <FuturisticAnimatedBackground intensity="medium" />

      {/* Header Section */}
      <section className="relative z-10 pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-6 bg-zion-cyan/20 text-zion-cyan border-zion-cyan/30">
              📞 Get In Touch
            </Badge>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Let's Transform Your
              <br />
              <span className="bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-pink bg-clip-text text-transparent">
                Business Together
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-zion-slate-light mb-12 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Ready to take your business to the next level? Our team of technology 
              experts is here to help you implement innovative solutions that drive 
              growth and competitive advantage.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods Grid */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <Card 
                  className={`bg-zion-blue-dark/30 backdrop-blur-lg border-zion-blue-light/20 hover:border-zion-cyan/50 transition-all duration-300 h-full p-6 text-center cursor-pointer ${
                    method.action ? 'hover:shadow-2xl hover:shadow-zion-cyan/20' : ''
                  }`}
                  onClick={method.action || undefined}
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <method.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                    {method.title}
                  </h3>
                  <p className="text-zion-cyan font-medium mb-2">
                    {method.value}
                  </p>
                  <p className="text-zion-slate-light text-sm leading-relaxed">
                    {method.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-zion-blue-dark/30 backdrop-blur-lg border-zion-blue-light/30 p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Send Us a Message
                </h2>
                <p className="text-zion-slate-light text-lg">
                  Tell us about your project and we'll get back to you within 2 hours
                </p>
              </div>

              {isSubmitted ? (
                <motion.div
                  className="text-center py-12"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-20 h-20 mx-auto mb-6 bg-green-500/20 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-10 h-10 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-zion-slate-light">
                    Thank you for contacting us. We'll get back to you within 2 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-medium mb-2">
                        Full Name *
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-zion-slate-dark/50 border-zion-blue-light/30 text-white placeholder-zion-slate-light focus:border-zion-cyan"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-white font-medium mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-zion-slate-dark/50 border-zion-blue-light/30 text-white placeholder-zion-slate-light focus:border-zion-cyan"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-medium mb-2">
                        Company Name
                      </label>
                      <Input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="bg-zion-slate-dark/50 border-zion-blue-light/30 text-white placeholder-zion-slate-light focus:border-zion-cyan"
                        placeholder="Enter your company name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-white font-medium mb-2">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="bg-zion-slate-dark/50 border-zion-blue-light/30 text-white placeholder-zion-slate-light focus:border-zion-cyan"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">
                      Service of Interest
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleSelectChange}
                      className="w-full bg-zion-slate-dark/50 border border-zion-blue-light/30 text-white rounded-md px-3 py-2 focus:border-zion-cyan focus:outline-none"
                    >
                      <option value="">Select a service</option>
                      {services.map(service => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">
                      Project Details *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="bg-zion-slate-dark/50 border-zion-blue-light/30 text-white placeholder-zion-slate-light focus:border-zion-cyan resize-none"
                      placeholder="Tell us about your project, goals, and how we can help..."
                    />
                  </div>

                  <div className="text-center">
                    <FuturisticNeonButton
                      type="submit"
                      disabled={isSubmitting}
                      size="lg"
                      className="text-lg px-8 py-4"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </FuturisticNeonButton>
                  </div>
                </form>
              )}
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Business Information Section */}
      <section className="relative z-10 py-20 px-4 bg-zion-blue-dark/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose <span className="text-zion-cyan">Zion Tech Group</span>?
              </h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                We're not just another technology company. We're your strategic partner 
                in digital transformation and business innovation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-zion-cyan/20 rounded-full flex items-center justify-center">
                  <Building className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Enterprise Experience</h3>
                <p className="text-zion-slate-light">
                  Over 10 years of experience working with Fortune 500 companies and 
                  startups alike, delivering scalable solutions that grow with your business.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-zion-cyan/20 rounded-full flex items-center justify-center">
                  <Globe className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Global Reach</h3>
                <p className="text-zion-slate-light">
                  Serving clients worldwide with remote-first approach, ensuring 
                  quality delivery regardless of your location or timezone.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-zion-cyan/20 rounded-full flex items-center justify-center">
                  <MessageSquare className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">24/7 Support</h3>
                <p className="text-zion-slate-light">
                  Round-the-clock support and maintenance, ensuring your systems 
                  run smoothly and your business never stops growing.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-r from-zion-blue-dark/50 to-zion-purple-dark/50 backdrop-blur-lg border-zion-cyan/30 p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
                Don't wait to transform your business. Contact us today and let's 
                discuss how we can help you achieve your technology goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <FuturisticNeonButton
                  onClick={() => window.location.href = 'tel:+13024640950'}
                  size="lg"
                  className="text-lg px-8 py-4"
                >
                  Call Now
                </FuturisticNeonButton>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => window.location.href = 'mailto:kleber@ziontechgroup.com?subject=Business Consultation Request'}
                  className="border-zion-cyan/50 text-zion-cyan hover:bg-zion-cyan/10 hover:border-zion-cyan text-lg px-8 py-4"
                >
                  Schedule Consultation
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
