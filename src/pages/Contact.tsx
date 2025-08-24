import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
<<<<<<< HEAD
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
  }>({});

  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
=======
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
>>>>>>> fca3c1339b92e2c99557b3c800831ed83163fd77
  };

  const validateForm = () => {
    const newErrors: typeof errors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
<<<<<<< HEAD
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show success message
      alert("Message sent successfully! We'll get back to you soon.");
      
      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
      
    } catch (error) {
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const offices = [
    {
      name: "Headquarters",
      address: "364 E Main St STE 1008 Middletown DE 19709",
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com"
    },
    {
      name: "Support Office",
      address: "364 E Main St STE 1008 Middletown DE 19709",
      phone: "+1 302 464 0950", 
      email: "support@ziontechgroup.com"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-zion-blue mb-8">Contact Us</h1>
        <p className="text-lg text-zion-slate-light mb-8">
          Get in touch with our team for any questions or support.
        </p>
        
        <div className="max-w-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-zion-slate mb-2">Name</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-3 border border-zion-slate rounded-lg bg-background text-zion-slate"
                placeholder="Your name"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>
            
            <div>
              <label className="block text-zion-slate mb-2">Email</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-3 border border-zion-slate rounded-lg bg-background text-zion-slate"
                placeholder="your@email.com"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            
            <div>
              <label className="block text-zion-slate mb-2">Subject</label>
              <input 
                type="text" 
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full p-3 border border-zion-slate rounded-lg bg-background text-zion-slate"
                placeholder="Subject"
              />
              {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
            </div>
            
            <div>
              <label className="block text-zion-slate mb-2">Message</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full p-3 border border-zion-slate rounded-lg bg-background text-zion-slate h-32"
                placeholder="Your message..."
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>
            
            <button 
              type="submit"
              disabled={isSubmitting}
              className="bg-zion-blue hover:bg-zion-blue-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>

        {/* Office Information */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-zion-blue mb-8">Our Offices</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offices.map((office, index) => (
              <div key={index} className="bg-zion-blue-dark p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4">{office.name}</h3>
                <div className="space-y-2 text-zion-slate-light">
                  <p>{office.address}</p>
                  <p>Phone: {office.phone}</p>
                  <p>Email: {office.email}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-zion-slate-dark py-12 border-t border-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-xl font-bold text-white mb-4">Zion Tech Group</h3>
              <p className="text-zion-slate-light mb-4">
                Pioneering the future of technology with revolutionary AI consciousness, 
                quantum computing, and autonomous solutions that transform businesses worldwide.
              </p>
              <div className="flex items-center gap-4 text-zion-slate-light">
                <a href="https://ziontechgroup.com" className="hover:text-zion-cyan transition-colors">
                  ziontechgroup.com
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
              <div className="space-y-2 text-zion-slate-light">
                <p>📱 +1 302 464 0950</p>
                <p>✉️ kleber@ziontechgroup.com</p>
                <p>📍 364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
              <div className="space-y-2">
                <a href="/comprehensive-services" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Comprehensive Services
                </a>
                <a href="/ai-services" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                  AI Services
                </a>
                <a href="/enterprise-solutions" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Enterprise Solutions
                </a>
                <a href="/micro-saas-services" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Micro SAAS Services
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-zion-blue-light mt-8 pt-8 text-center">
            <p className="text-zion-slate-light text-sm">
              © 2024 Zion Tech Group. All rights reserved. | 
              <a href="/privacy" className="ml-2 hover:text-zion-cyan transition-colors">Privacy Policy</a> | 
              <a href="/terms" className="ml-2 hover:text-zion-cyan transition-colors">Terms of Service</a>
            </p>
=======
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  const services = [
    'AI-Powered Analytics Dashboard',
    'Smart Project Management',
    'Customer Relationship Hub',
    'Cybersecurity Compliance Suite',
    'Mobile App Builder',
    'E-commerce Optimization',
    'Cloud Migration & Optimization',
    'Cybersecurity Implementation',
    'DevOps Automation',
    'Database Optimization',
    'On-Site IT Support',
    'Equipment Procurement',
    'AI Content Generation',
    'Predictive Analytics',
    'AI Chatbot Development',
    'Talent Matching AI',
    'AI-Powered Search',
    'Data Intelligence Platform',
    'Other'
  ];

  return (
    <div className="min-h-screen bg-zion-blue-dark py-20">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple opacity-20"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-zion-cyan rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-zion-purple rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-orbitron">
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple-light bg-clip-text text-transparent">
                Contact Us
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Ready to transform your business with our innovative technology solutions? 
              Get in touch with our team of experts and let's discuss how we can help you achieve your goals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-6 font-orbitron">
                  <span className="bg-gradient-to-r from-zion-cyan to-zion-purple-light bg-clip-text text-transparent">
                    Get In Touch
                  </span>
                </h2>
                <p className="text-zion-slate-light mb-8">
                  Our team is here to help you navigate the complex world of technology 
                  and find the perfect solutions for your business needs.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">📞</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
                    <p className="text-zion-cyan font-semibold text-lg">+1 302 464 0950</p>
                    <p className="text-zion-slate-light text-sm">Available Monday-Friday, 9 AM - 6 PM EST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-3xl">✉️</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                    <p className="text-zion-cyan font-semibold text-lg">kleber@ziontechgroup.com</p>
                    <p className="text-zion-slate-light text-sm">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-3xl">📍</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Office</h3>
                    <p className="text-zion-cyan font-semibold text-lg">364 E Main St STE 1008</p>
                    <p className="text-zion-cyan font-semibold text-lg">Middletown DE 19709</p>
                    <p className="text-zion-slate-light text-sm">United States</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-3xl">🌐</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Website</h3>
                    <p className="text-zion-cyan font-semibold text-lg">https://ziontechgroup.com</p>
                    <p className="text-zion-slate-light text-sm">Visit our main site for more information</p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-gradient-to-r from-zion-blue/50 to-zion-purple/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Business Hours</h3>
                <div className="space-y-2 text-zion-slate-light">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 2:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
                <p className="text-zion-cyan text-sm mt-4">
                  Emergency support available 24/7 for existing clients
                </p>
              </div>

              {/* Quick Links */}
              <div className="bg-gradient-to-r from-zion-purple/20 to-zion-blue/50 backdrop-blur-sm border border-zion-purple/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                <div className="space-y-2">
                  <Link to="/about" className="block text-zion-purple-light hover:text-zion-purple transition-colors">
                    About Zion Tech Group
                  </Link>
                  <Link to="/" className="block text-zion-purple-light hover:text-zion-purple transition-colors">
                    Our Services
                  </Link>
                  <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="block text-zion-purple-light hover:text-zion-purple transition-colors">
                    Main Website
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-zion-blue/50 to-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6 font-orbitron">
                <span className="bg-gradient-to-r from-zion-cyan to-zion-purple-light bg-clip-text text-transparent">
                  Send Us a Message
                </span>
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-white font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-zion-blue-dark/50 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-zion-blue-dark/50 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-white font-medium mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-zion-blue-dark/50 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
                      placeholder="Enter company name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-white font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-zion-blue-dark/50 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
                      placeholder="Enter phone number"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-white font-medium mb-2">
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-zion-blue-dark/50 border border-zion-cyan/30 rounded-lg text-white focus:border-zion-cyan focus:outline-none focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service} className="bg-zion-blue-dark text-white">
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-zion-blue-dark/50 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300 resize-none"
                    placeholder="Tell us about your project or how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-cyan-light text-zion-blue-dark font-bold rounded-lg hover:from-zion-cyan-light hover:to-zion-cyan transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/50"
                >
                  Send Message
                </button>
              </form>

              <p className="text-zion-slate-light text-sm mt-4 text-center">
                * Required fields. We respect your privacy and will never share your information.
              </p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-zion-blue to-zion-purple rounded-2xl p-12 border border-zion-cyan/20">
              <h2 className="text-3xl font-bold text-white mb-6 font-orbitron">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
                Don't wait to transform your business. Contact us today and discover 
                how our innovative solutions can drive your success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/"
                  className="px-8 py-4 bg-zion-cyan text-zion-blue-dark font-bold rounded-lg hover:bg-zion-cyan-light transition-all duration-300 transform hover:scale-105"
                >
                  Explore Services
                </Link>
                <Link
                  to="/about"
                  className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-bold rounded-lg hover:bg-zion-cyan hover:text-zion-blue-dark transition-all duration-300 transform hover:scale-105"
                >
                  Learn About Us
                </Link>
              </div>
            </div>
>>>>>>> fca3c1339b92e2c99557b3c800831ed83163fd77
          </div>
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
}
=======
};

export default Contact;
>>>>>>> fca3c1339b92e2c99557b3c800831ed83163fd77
