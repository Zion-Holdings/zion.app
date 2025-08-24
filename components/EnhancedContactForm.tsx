import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Send, Mail, Phone, MapPin, CheckCircle, 
  Brain, Shield, Rocket, Cpu, Database, Atom
} from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  budget: string;
  timeline: string;
  message: string;
}

const EnhancedContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    { value: 'ai-ml', label: 'AI & Machine Learning', icon: Brain, color: 'from-purple-500 to-pink-500' },
    { value: 'quantum', label: 'Quantum Computing', icon: Atom, color: 'from-blue-500 to-cyan-500' },
    { value: 'cybersecurity', label: 'Cybersecurity', icon: Shield, color: 'from-red-500 to-orange-500' },
    { value: 'space-tech', label: 'Space Technology', icon: Rocket, color: 'from-indigo-500 to-purple-500' },
    { value: 'cloud', label: 'Cloud Solutions', icon: Cpu, color: 'from-emerald-500 to-teal-500' },
    { value: 'data', label: 'Data & Analytics', icon: Database, color: 'from-yellow-500 to-orange-500' }
  ];

  const budgets = [
    { value: 'under-10k', label: 'Under $10,000' },
    { value: '10k-50k', label: '$10,000 - $50,000' },
    { value: '50k-100k', label: '$50,000 - $100,000' },
    { value: '100k-500k', label: '$100,000 - $500,000' },
    { value: '500k-plus', label: '$500,000+' }
  ];

  const timelines = [
    { value: 'asap', label: 'ASAP' },
    { value: '1-3-months', label: '1-3 months' },
    { value: '3-6-months', label: '3-6 months' },
    { value: '6-12-months', label: '6-12 months' },
    { value: '12-plus-months', label: '12+ months' }
  ];

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
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        budget: '',
        timeline: '',
        message: ''
      });
    }, 5000);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">Thank You!</h3>
                  <p className="text-white/70 max-w-md mx-auto">
            We&apos;ve received your message and will get back to you within 24 hours. 
            Our team is excited to discuss your project!
          </p>
      </motion.div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      {/* Contact Information */}
      <div className="space-y-8">
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">Let&apos;s Build Something Amazing</h3>
          <p className="text-white/70 leading-relaxed">
            Ready to transform your business with cutting-edge technology? 
            Our team of experts is here to help you navigate the future of innovation.
          </p>
        </div>

        {/* Contact Details */}
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="text-white font-semibold mb-1">Email Us</h4>
              <p className="text-white/70">kleber@ziontechgroup.com</p>
              <p className="text-white/50 text-sm">We&apos;ll respond within 24 hours</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="text-white font-semibold mb-1">Call Us</h4>
              <p className="text-white/70">+1 302 464 0950</p>
              <p className="text-white/50 text-sm">Mon-Fri 9AM-6PM EST</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="text-white font-semibold mb-1">Visit Us</h4>
              <p className="text-white/70">364 E Main St STE 1008</p>
              <p className="text-white/70">Middletown DE 19709</p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div>
          <h4 className="text-white font-semibold mb-4">Why Choose Zion Tech Group?</h4>
          <div className="grid grid-cols-2 gap-4">
            {services.slice(0, 4).map((service) => (
              <div key={service.value} className="flex items-center space-x-3">
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${service.color} p-2`}>
                  <service.icon className="w-4 h-4 text-white" />
                </div>
                <span className="text-white/70 text-sm">{service.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name and Email */}
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
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-500 focus:bg-white/15 transition-all duration-200"
                placeholder="John Doe"
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
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-500 focus:bg-white/15 transition-all duration-200"
                placeholder="john@company.com"
              />
            </div>
          </div>

          {/* Company and Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="company" className="block text-white font-medium mb-2">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-500 focus:bg-white/15 transition-all duration-200"
                placeholder="Your Company"
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
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-500 focus:bg-white/15 transition-all duration-200"
                placeholder="+1 (555) 123-4567"
              />
            </div>
          </div>

          {/* Service Selection */}
          <div>
            <label htmlFor="service" className="block text-white font-medium mb-2">
              Service of Interest *
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-500 focus:bg-white/15 transition-all duration-200"
            >
              <option value="">Select a service</option>
              {services.map((service) => (
                <option key={service.value} value={service.value}>
                  {service.label}
                </option>
              ))}
            </select>
          </div>

          {/* Budget and Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="budget" className="block text-white font-medium mb-2">
                Budget Range
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-500 focus:bg-white/15 transition-all duration-200"
              >
                <option value="">Select budget</option>
                {budgets.map((budget) => (
                  <option key={budget.value} value={budget.value}>
                    {budget.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="timeline" className="block text-white font-medium mb-2">
                Project Timeline
              </label>
              <select
                id="timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-500 focus:bg-white/15 transition-all duration-200"
              >
                <option value="">Select timeline</option>
                {timelines.map((timeline) => (
                  <option key={timeline.value} value={timeline.value}>
                    {timeline.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-white font-medium mb-2">
              Project Details *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={4}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-500 focus:bg-white/15 transition-all duration-200 resize-none"
              placeholder="Tell us about your project, goals, and how we can help..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 disabled:from-gray-500 disabled:to-gray-600 rounded-xl text-white font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl disabled:transform-none disabled:shadow-none flex items-center justify-center space-x-2"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <span>Sending...</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </>
            )}
          </button>

          <p className="text-white/50 text-sm text-center">
            By submitting this form, you agree to our{' '}
            <a href="/privacy" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200">
              Privacy Policy
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default EnhancedContactForm;
