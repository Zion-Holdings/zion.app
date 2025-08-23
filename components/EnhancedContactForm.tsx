import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Star, ChevronDown, Shield
} from 'lucide-react';

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  message: string;
  budget: string;
  timeline: string;
}

interface FormErrors {
  [key: string]: string;
}

const EnhancedContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
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

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [activeField, setActiveField] = useState<string>('');

  const services = [
    { value: 'ai-consciousness', label: 'AI Consciousness Evolution 2045', icon: '🧠' },
    { value: 'quantum-computing', label: 'Quantum AI Hybrid Computing', icon: '⚛️' },
    { value: 'cybersecurity', label: 'Quantum Cybersecurity Intelligence', icon: '🛡️' },
    { value: 'business-intelligence', label: 'Autonomous Business Intelligence', icon: '🚀' },
    { value: 'cloud-infrastructure', label: 'Quantum Cloud Infrastructure', icon: '☁️' },
    { value: 'devops', label: 'Autonomous DevOps Intelligence', icon: '⚙️' },
    { value: 'custom', label: 'Custom Solution', icon: '🎯' }
  ];

  const budgets = [
    { value: 'under-50k', label: 'Under $50K' },
    { value: '50k-100k', label: '$50K - $100K' },
    { value: '100k-250k', label: '$100K - $250K' },
    { value: '250k-500k', label: '$250K - $500K' },
    { value: '500k-1m', label: '$500K - $1M' },
    { value: 'over-1m', label: 'Over $1M' }
  ];

  const timelines = [
    { value: 'immediate', label: 'Immediate (0-3 months)' },
    { value: 'short-term', label: 'Short-term (3-6 months)' },
    { value: 'medium-term', label: 'Medium-term (6-12 months)' },
    { value: 'long-term', label: 'Long-term (1+ years)' }
  ];

  const validateField = useCallback((name: string, value: string): string => {
    switch (name) {
      case 'firstName':
      case 'lastName': {
        return value.trim().length < 2 ? `${name === 'firstName' ? 'First' : 'Last'} name must be at least 2 characters` : '';
      }
      case 'email': {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !emailRegex.test(value) ? 'Please enter a valid email address' : '';
      }
      case 'phone': {
        const phoneRegex = /^[+]?[1-9][\d]{0,15}$/;
        return value && !phoneRegex.test(value.replace(/\s/g, '')) ? 'Please enter a valid phone number' : '';
      }
      case 'company': {
        return value.trim().length < 2 ? 'Company name must be at least 2 characters' : '';
      }
      case 'service': {
        return !value ? 'Please select a service' : '';
      }
      case 'message': {
        return value.trim().length < 10 ? 'Message must be at least 10 characters' : '';
      }
      default: {
        return '';
      }
    }
  }, []);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  }, [errors]);

  const handleFieldFocus = useCallback((fieldName: string) => {
    setActiveField(fieldName);
  }, []);

  const handleFieldBlur = useCallback((fieldName: string) => {
    setActiveField('');
    const error = validateField(fieldName, formData[fieldName as keyof ContactFormData]);
    if (error) {
      setErrors(prev => ({ ...prev, [fieldName]: error }));
    }
  }, [validateField, formData]);

  const validateForm = useCallback((): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key as keyof ContactFormData]);
      if (error) {
        newErrors[key] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  }, [formData, validateField]);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Success
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
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  }, [validateForm]);

  const getFieldError = (fieldName: string): string => {
    return errors[fieldName] || '';
  };

  const isFieldActive = (fieldName: string): boolean => {
    return activeField === fieldName;
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Let's Build the <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Future Together</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Ready to transform your business with revolutionary 2045 technology? 
          Get in touch and let's discuss how we can help you achieve the impossible.
        </p>
      </motion.div>

      {/* Contact Information */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="text-center group">
          <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
            <Mail className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
          <p className="text-gray-400">info@ziontechgroup.com</p>
          <p className="text-gray-400">24/7 AI Support Available</p>
        </div>

        <div className="text-center group">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
            <Phone className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
          <p className="text-gray-400">+1-800-ZION-TECH</p>
          <p className="text-gray-400">Mon-Fri 9AM-6PM EST</p>
        </div>

        <div className="text-center group">
          <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
            <MapPin className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
          <p className="text-gray-400">United States</p>
          <p className="text-gray-400">Global Operations</p>
        </div>
      </motion.div>

      {/* Contact Form */}
      <motion.div
        className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 md:p-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-300">
                First Name *
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  onFocus={() => handleFieldFocus('firstName')}
                  onBlur={() => handleFieldBlur('firstName')}
                  className={`w-full px-4 py-3 bg-gray-800/50 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${
                    isFieldActive('firstName') 
                      ? 'border-cyan-400 ring-cyan-400/20' 
                      : getFieldError('firstName')
                      ? 'border-red-500 ring-red-500/20'
                      : 'border-gray-600 hover:border-gray-500'
                  }`}
                  placeholder="Enter your first name"
                />
                {getFieldError('firstName') && (
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <AlertCircle className="w-5 h-5 text-red-500" />
                  </div>
                )}
              </div>
              {getFieldError('firstName') && (
                <p className="text-red-400 text-sm flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {getFieldError('firstName')}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-300">
                Last Name *
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  onFocus={() => handleFieldFocus('lastName')}
                  onBlur={() => handleFieldBlur('lastName')}
                  className={`w-full px-4 py-3 bg-gray-800/50 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${
                    isFieldActive('lastName') 
                      ? 'border-cyan-400 ring-cyan-400/20' 
                      : getFieldError('lastName')
                      ? 'border-red-500 ring-red-500/20'
                      : 'border-gray-600 hover:border-gray-500'
                  }`}
                  placeholder="Enter your last name"
                />
                {getFieldError('lastName') && (
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <AlertCircle className="w-5 h-5 text-red-500" />
                  </div>
                )}
              </div>
              {getFieldError('lastName') && (
                <p className="text-red-400 text-sm flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {getFieldError('lastName')}
                </p>
              )}
            </div>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email Address *
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onFocus={() => handleFieldFocus('email')}
                  onBlur={() => handleFieldBlur('email')}
                  className={`w-full px-4 py-3 bg-gray-800/50 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${
                    isFieldActive('email') 
                      ? 'border-cyan-400 ring-cyan-400/20' 
                      : getFieldError('email')
                      ? 'border-red-500 ring-red-500/20'
                      : 'border-gray-600 hover:border-gray-500'
                  }`}
                  placeholder="Enter your email address"
                />
                {getFieldError('email') && (
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <AlertCircle className="w-5 h-5 text-red-500" />
                  </div>
                )}
              </div>
              {getFieldError('email') && (
                <p className="text-red-400 text-sm flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {getFieldError('email')}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                onFocus={() => handleFieldFocus('phone')}
                onBlur={() => handleFieldBlur('phone')}
                className={`w-full px-4 py-3 bg-gray-800/50 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${
                  isFieldActive('phone') 
                    ? 'border-cyan-400 ring-cyan-400/20' 
                    : getFieldError('phone')
                    ? 'border-red-500 ring-red-500/20'
                    : 'border-gray-600 hover:border-gray-500'
                }`}
                placeholder="Enter your phone number"
              />
              {getFieldError('phone') && (
                <p className="text-red-400 text-sm flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {getFieldError('phone')}
                </p>
              )}
            </div>
          </div>

          {/* Company and Service */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="company" className="block text-sm font-medium text-gray-300">
                Company Name *
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  onFocus={() => handleFieldFocus('company')}
                  onBlur={() => handleFieldBlur('company')}
                  className={`w-full px-4 py-3 bg-gray-800/50 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${
                    isFieldActive('company') 
                      ? 'border-cyan-400 ring-cyan-400/20' 
                      : getFieldError('company')
                      ? 'border-red-500 ring-red-500/20'
                      : 'border-gray-600 hover:border-gray-500'
                  }`}
                  placeholder="Enter your company name"
                />
                {getFieldError('company') && (
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <AlertCircle className="w-5 h-5 text-red-500" />
                  </div>
                )}
              </div>
              {getFieldError('company') && (
                <p className="text-red-400 text-sm flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {getFieldError('company')}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="service" className="block text-sm font-medium text-gray-300">
                Service of Interest *
              </label>
              <div className="relative">
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  onFocus={() => handleFieldFocus('service')}
                  onBlur={() => handleFieldBlur('service')}
                  className={`w-full px-4 py-3 bg-gray-800/50 border rounded-xl text-white focus:outline-none focus:ring-2 transition-all duration-300 appearance-none ${
                    isFieldActive('service') 
                      ? 'border-cyan-400 ring-cyan-400/20' 
                      : getFieldError('service')
                      ? 'border-red-500 ring-red-500/20'
                      : 'border-gray-600 hover:border-gray-500'
                  }`}
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service.value} value={service.value}>
                      {service.icon} {service.label}
                    </option>
                  ))}
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                </div>
              </div>
              {getFieldError('service') && (
                <p className="text-red-400 text-sm flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {getFieldError('service')}
                </p>
              )}
            </div>
          </div>

          {/* Budget and Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="budget" className="block text-sm font-medium text-gray-300">
                Budget Range
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/20 focus:border-cyan-400 transition-all duration-300"
              >
                <option value="">Select budget range</option>
                {budgets.map((budget) => (
                  <option key={budget.value} value={budget.value}>
                    {budget.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="timeline" className="block text-sm font-medium text-gray-300">
                Project Timeline
              </label>
              <select
                id="timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/20 focus:border-cyan-400 transition-all duration-300"
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
          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-medium text-gray-300">
              Project Details *
            </label>
            <div className="relative">
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleInputChange}
                onFocus={() => handleFieldFocus('message')}
                onBlur={() => handleFieldBlur('message')}
                className={`w-full px-4 py-3 bg-gray-800/50 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 resize-none ${
                  isFieldActive('message') 
                    ? 'border-cyan-400 ring-cyan-400/20' 
                    : getFieldError('message')
                    ? 'border-red-500 ring-red-500/20'
                    : 'border-gray-600 hover:border-gray-500'
                }`}
                placeholder="Tell us about your project, goals, and how we can help transform your business with revolutionary 2045 technology..."
              />
              {getFieldError('message') && (
                <div className="absolute right-3 top-3">
                  <AlertCircle className="w-5 h-5 text-red-500" />
                </div>
              )}
            </div>
            {getFieldError('message') && (
              <p className="text-red-400 text-sm flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {getFieldError('message')}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="text-center pt-6">
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className={`px-12 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none ${
                isSubmitting ? 'cursor-not-allowed' : 'hover:from-cyan-600 hover:to-purple-700'
              }`}
              whileHover={!isSubmitting ? { scale: 1.05 } : {}}
              whileTap={!isSubmitting ? { scale: 0.95 } : {}}
            >
              <span className="flex items-center justify-center space-x-2">
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </span>
            </motion.button>
          </div>

          {/* Status Messages */}
          <AnimatePresence>
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-green-500/20 border border-green-500/30 rounded-xl p-4 text-center"
              >
                <div className="flex items-center justify-center space-x-2 text-green-400">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">Message sent successfully! We'll get back to you within 24 hours.</span>
                </div>
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-red-500/20 border border-red-500/30 rounded-xl p-4 text-center"
              >
                <div className="flex items-center justify-center space-x-2 text-red-400">
                  <AlertCircle className="w-5 h-5" />
                  <span className="font-medium">Failed to send message. Please try again or contact us directly.</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </motion.div>

      {/* Trust Indicators */}
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400">
          <div className="flex items-center space-x-2">
            <Shield className="w-5 h-5 text-cyan-400" />
            <span>Enterprise Security</span>
          </div>
          <div className="flex items-center space-x-2">
            <Star className="w-5 h-5 text-yellow-400" />
            <span>5-Star Rated</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>Global Support</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span>99.99% Uptime</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default EnhancedContactForm;