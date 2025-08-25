import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle, 
  AlertCircle,
  User,
  Building,
  MessageSquare
} from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
    budget: '',
    timeline: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

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
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: '',
        budget: '',
        timeline: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    'AI & Machine Learning',
    'Cloud & DevOps',
    'Enterprise Security',
    'Digital Transformation',
    'Micro SAAS Services',
    'IT Onsite Services',
    'Custom Development',
    'Other'
  ];

  const budgets = [
    'Under $10K',
    '$10K - $50K',
    '$50K - $100K',
    '$100K - $500K',
    'Over $500K'
  ];

  const timelines = [
    'Immediate (1-2 weeks)',
    'Quick (1-2 months)',
    'Standard (3-6 months)',
    'Long-term (6+ months)'
  ];

  if (submitStatus === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">Thank You!</h3>
        <p className="text-zion-slate-light mb-6">
          Your message has been sent successfully. We'll get back to you within 24 hours.
        </p>
        <button
          onClick={() => setSubmitStatus('idle')}
          className="px-6 py-3 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan/90 transition-colors"
        >
          Send Another Message
        </button>
      </motion.div>
    );
  }

  return (
    <div className="bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
        <p className="text-zion-slate-light">
          Ready to transform your business? Let's discuss how we can help you achieve your goals.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Contact Information */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center">
              <Mail className="w-6 h-6 text-zion-cyan" />
            </div>
            <div>
              <div className="text-white font-semibold">Email</div>
              <div className="text-zion-slate-light">kleber@ziontechgroup.com</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center">
              <Phone className="w-6 h-6 text-zion-cyan" />
            </div>
            <div>
              <div className="text-white font-semibold">Phone</div>
              <div className="text-zion-slate-light">+1 (302) 464-0950</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center">
              <MapPin className="w-6 h-6 text-zion-cyan" />
            </div>
            <div>
              <div className="text-white font-semibold">Location</div>
              <div className="text-zion-slate-light">Delaware, United States</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 border border-zion-cyan/20 rounded-lg p-4">
            <h4 className="text-white font-semibold mb-2">Response Time</h4>
            <p className="text-zion-slate-light text-sm">
              We typically respond to all inquiries within 2 hours during business hours.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-white mb-2">
                First Name *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-zion-blue-light/50 border border-zion-purple/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan/50 transition-colors"
                placeholder="Enter your first name"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-white mb-2">
                Last Name *
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-zion-blue-light/50 border border-zion-purple/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan/50 transition-colors"
                placeholder="Enter your last name"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-zion-blue-light/50 border border-zion-purple/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan/50 transition-colors"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-zion-blue-light/50 border border-zion-purple/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan/50 transition-colors"
                placeholder="Enter your phone number"
              />
            </div>
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-zion-blue-light/50 border border-zion-purple/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan/50 transition-colors"
              placeholder="Enter your company name"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-white mb-2">
                Service Interest *
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-zion-blue-light/50 border border-zion-purple/20 rounded-lg text-white focus:outline-none focus:border-zion-cyan/50 transition-colors"
              >
                <option value="">Select a service</option>
                {services.map((service) => (
                  <option key={service} value={service}>{service}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="budget" className="block text-sm font-medium text-white mb-2">
                Budget Range
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-zion-blue-light/50 border border-zion-purple/20 rounded-lg text-white focus:outline-none focus:border-zion-cyan/50 transition-colors"
              >
                <option value="">Select budget range</option>
                {budgets.map((budget) => (
                  <option key={budget} value={budget}>{budget}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="timeline" className="block text-sm font-medium text-white mb-2">
              Project Timeline
            </label>
            <select
              id="timeline"
              name="timeline"
              value={formData.timeline}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-zion-blue-light/50 border border-zion-purple/20 rounded-lg text-white focus:outline-none focus:border-zion-cyan/50 transition-colors"
            >
              <option value="">Select timeline</option>
              {timelines.map((timeline) => (
                <option key={timeline} value={timeline}>{timeline}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={4}
              className="w-full px-4 py-3 bg-zion-blue-light/50 border border-zion-purple/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan/50 transition-colors resize-none"
              placeholder="Tell us about your project and how we can help..."
            />
          </div>

          {submitStatus === 'error' && (
            <div className="flex items-center gap-2 text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg p-3">
              <AlertCircle className="w-5 h-5" />
              <span>There was an error sending your message. Please try again.</span>
            </div>
          )}

          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full px-6 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold hover:from-zion-cyan/90 hover:to-zion-purple/90 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Sending Message...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Send Message
              </>
            )}
          </motion.button>
        </form>
      </div>
    </div>
  );
};