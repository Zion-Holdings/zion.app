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
  Shield,
  Users
} from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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
        phone: '',
        company: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "+1 302 464 0950",
      link: "tel:+13024640950",
      description: "Call us anytime for immediate assistance"
    },
    {
      icon: Mail,
      title: "Email",
      value: "kleber@ziontechgroup.com",
      link: "mailto:kleber@ziontechgroup.com",
      description: "Send us a detailed message"
    },
    {
      icon: MapPin,
      title: "Address",
      value: "364 E Main St STE 1008, Middletown DE 19709",
      link: "https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709",
      description: "Visit our office for in-person meetings"
    },
    {
      icon: Clock,
      title: "Business Hours",
      value: "Monday - Friday: 9:00 AM - 6:00 PM EST",
      link: null,
      description: "We're here when you need us"
    }
  ];

  const services = [
    "AI Services & Solutions",
    "Micro SAAS Platforms",
    "IT Infrastructure",
    "Cybersecurity",
    "Cloud Migration",
    "Business Automation",
    "Custom Software Development",
    "Digital Transformation",
    "Other"
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security with SOC 2 compliance and encryption"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Certified professionals with years of industry experience"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving clients worldwide with 24/7 support"
    },
    {
      icon: MessageSquare,
      title: "Personalized Service",
      description: "Tailored solutions that fit your specific business needs"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-dark via-zion-dark/95 to-zion-primary/10">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-zion-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-zion-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-zion-cyan/20 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Get in <span className="text-gradient bg-gradient-to-r from-zion-primary to-zion-secondary bg-clip-text text-transparent">Touch</span>
              </h1>
              <p className="text-xl md:text-2xl text-zion-light/90 mb-8 max-w-3xl mx-auto">
                Ready to transform your business? Let's discuss how our innovative solutions 
                can drive growth and efficiency for your organization.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
            >
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group text-center p-6 rounded-2xl bg-gradient-to-br from-zion-dark/60 to-zion-dark/40 backdrop-blur-sm border border-zion-primary/20 hover:border-zion-primary/40 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-zion-primary/20 to-zion-secondary/20 rounded-2xl flex items-center justify-center border border-zion-primary/30 group-hover:border-zion-primary/60 group-hover:scale-110 transition-all duration-300">
                    <info.icon className="w-8 h-8 text-zion-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-zion-primary transition-colors duration-300">
                    {info.title}
                  </h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-zion-light/90 hover:text-zion-primary transition-colors duration-300 block mb-2"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-zion-light/90 mb-2">{info.value}</p>
                  )}
                  <p className="text-sm text-zion-light/60">{info.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Send us a Message
                  </h2>
                  <p className="text-zion-light/70 text-lg">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </div>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-500/20 border border-green-500/30 rounded-2xl p-6 text-center"
                  >
                    <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-green-400 mb-2">Message Sent!</h3>
                    <p className="text-green-300">Thank you for contacting us. We'll respond shortly!</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-zion-light mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-zion-dark/60 border border-zion-primary/30 rounded-xl text-white placeholder-zion-light/50 focus:outline-none focus:border-zion-primary focus:ring-2 focus:ring-zion-primary/20 transition-all duration-300"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-zion-light mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-zion-dark/60 border border-zion-primary/30 rounded-xl text-white placeholder-zion-light/50 focus:outline-none focus:border-zion-primary focus:ring-2 focus:ring-zion-primary/20 transition-all duration-300"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-zion-light mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-zion-dark/60 border border-zion-primary/30 rounded-xl text-white placeholder-zion-light/50 focus:outline-none focus:border-zion-primary focus:ring-2 focus:ring-zion-primary/20 transition-all duration-300"
                          placeholder="Enter your phone number"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-zion-light mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-zion-dark/60 border border-zion-primary/30 rounded-xl text-white placeholder-zion-light/50 focus:outline-none focus:border-zion-primary focus:ring-2 focus:ring-zion-primary/20 transition-all duration-300"
                          placeholder="Enter your company name"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-zion-light mb-2">
                        Service of Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-zion-dark/60 border border-zion-primary/30 rounded-xl text-white focus:outline-none focus:border-zion-primary focus:ring-2 focus:ring-zion-primary/20 transition-all duration-300"
                      >
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-zion-light mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-zion-dark/60 border border-zion-primary/30 rounded-xl text-white placeholder-zion-light/50 focus:outline-none focus:border-zion-primary focus:ring-2 focus:ring-zion-primary/20 transition-all duration-300 resize-none"
                        placeholder="Tell us about your project or inquiry..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-zion-primary to-zion-secondary hover:from-zion-primary/90 hover:to-zion-secondary/90 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-zion-primary/25 flex items-center justify-center gap-3"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </motion.div>

              {/* Why Choose Us */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Why Choose Zion Tech Group?
                  </h2>
                  <p className="text-zion-light/70 text-lg">
                    We're not just another tech company. We're your strategic partner in digital transformation.
                  </p>
                </div>

                <div className="space-y-6">
                  {whyChooseUs.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-4 p-4 rounded-xl bg-zion-dark/40 border border-zion-primary/20 hover:border-zion-primary/40 transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-zion-primary/20 to-zion-secondary/20 rounded-xl flex items-center justify-center border border-zion-primary/30 flex-shrink-0">
                        <item.icon className="w-6 h-6 text-zion-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                        <p className="text-zion-light/70">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Additional Info */}
                <div className="bg-gradient-to-r from-zion-primary/10 to-zion-secondary/10 rounded-2xl p-6 border border-zion-primary/20">
                  <h3 className="text-xl font-bold text-white mb-4">Ready to Get Started?</h3>
                  <p className="text-zion-light/70 mb-4">
                    Our team is ready to help you achieve your business goals. 
                    Contact us today for a free consultation and quote.
                  </p>
                  <div className="space-y-2 text-sm text-zion-light/60">
                    <p>✅ Free initial consultation</p>
                    <p>✅ Custom solution design</p>
                    <p>✅ Ongoing support & maintenance</p>
                    <p>✅ Flexible pricing options</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;
