import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, 
  User, Building, MessageSquare, Globe, Clock, Shield
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
  preferredContact: string;
  newsletter: boolean;
  gdprConsent: boolean;
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
    timeline: '',
    preferredContact: 'email',
    newsletter: false,
    gdprConsent: false
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [currentStep, setCurrentStep] = useState(1);
  const [isTyping, setIsTyping] = useState(false);

  const services = [
    'AI Consciousness Evolution Platform',
    'Quantum Cybersecurity Intelligence',
    'Autonomous Business Intelligence',
    'Quantum Cloud Infrastructure',
    'Space Technology Solutions',
    'Micro SAAS Development',
    'Enterprise IT Solutions',
    'Custom AI Development',
    'Other'
  ];

  const budgets = [
    'Under $10K',
    '$10K - $50K',
    '$50K - $100K',
    '$100K - $500K',
    '$500K+',
    'To be discussed'
  ];

  const timelines = [
    'Immediate (1-3 months)',
    'Short term (3-6 months)',
    'Medium term (6-12 months)',
    'Long term (1+ years)',
    'Flexible'
  ];

  const contactMethods = [
    { value: 'email', label: 'Email', icon: Mail },
    { value: 'phone', label: 'Phone', icon: Phone },
    { value: 'video', label: 'Video Call', icon: Globe }
  ];

  // Real-time validation
  useEffect(() => {
    const timer = setTimeout(() => {
      if (isTyping) {
        validateField();
        setIsTyping(false);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [formData, isTyping]);

  const handleInputChange = useCallback((field: keyof ContactFormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setIsTyping(true);
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  }, [errors]);

  const validateField = useCallback(() => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 20) {
      newErrors.message = 'Message must be at least 20 characters';
    }

    if (!formData.gdprConsent) {
      newErrors.gdprConsent = 'GDPR consent is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateField()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically send the data to your API
      console.log('Form submitted:', formData);
      
      setSubmitStatus('success');
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          phone: '',
          service: '',
          message: '',
          budget: '',
          timeline: '',
          preferredContact: 'email',
          newsletter: false,
          gdprConsent: false
        });
        setCurrentStep(1);
        setSubmitStatus('idle');
      }, 3000);
      
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, validateField]);

  const nextStep = useCallback(() => {
    if (currentStep < 3) {
      setCurrentStep(prev => prev + 1);
    }
  }, [currentStep]);

  const prevStep = useCallback(() => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  }, [currentStep]);

  const renderStep1 = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            First Name *
          </label>
          <input
            type="text"
            value={formData.firstName}
            onChange={(e) => handleInputChange('firstName', e.target.value)}
            className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all ${
              errors.firstName ? 'border-red-500' : 'border-gray-600'
            }`}
            placeholder="Enter your first name"
          />
          {errors.firstName && (
            <p className="mt-1 text-sm text-red-400 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.firstName}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Last Name *
          </label>
          <input
            type="text"
            value={formData.lastName}
            onChange={(e) => handleInputChange('lastName', e.target.value)}
            className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all ${
              errors.lastName ? 'border-red-500' : 'border-gray-600'
            }`}
            placeholder="Enter your last name"
          />
          {errors.lastName && (
            <p className="mt-1 text-sm text-red-400 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.lastName}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all ${
              errors.email ? 'border-red-500' : 'border-gray-600'
            }`}
            placeholder="your.email@company.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-400 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Company Name *
          </label>
          <input
            type="text"
            value={formData.company}
            onChange={(e) => handleInputChange('company', e.target.value)}
            className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all ${
              errors.company ? 'border-red-500' : 'border-gray-600'
            }`}
            placeholder="Your company name"
          />
          {errors.company && (
            <p className="mt-1 text-sm text-red-400 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.company}
            </p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          value={formData.phone}
          onChange={(e) => handleInputChange('phone', e.target.value)}
          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
          placeholder="+1 (555) 123-4567"
        />
      </div>
    </motion.div>
  );

  const renderStep2 = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Service of Interest *
        </label>
        <select
          value={formData.service}
          onChange={(e) => handleInputChange('service', e.target.value)}
          className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all ${
            errors.service ? 'border-red-500' : 'border-gray-600'
          }`}
        >
          <option value="">Select a service</option>
          {services.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
        {errors.service && (
          <p className="mt-1 text-sm text-red-400 flex items-center">
            <AlertCircle className="w-4 h-4 mr-1" />
            {errors.service}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Budget Range
          </label>
          <select
            value={formData.budget}
            onChange={(e) => handleInputChange('budget', e.target.value)}
            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
          >
            <option value="">Select budget range</option>
            {budgets.map((budget) => (
              <option key={budget} value={budget}>
                {budget}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Timeline
          </label>
          <select
            value={formData.timeline}
            onChange={(e) => handleInputChange('timeline', e.target.value)}
            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
          >
            <option value="">Select timeline</option>
            {timelines.map((timeline) => (
              <option key={timeline} value={timeline}>
                {timeline}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Preferred Contact Method
        </label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {contactMethods.map((method) => {
            const Icon = method.icon;
            return (
              <label
                key={method.value}
                className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all ${
                  formData.preferredContact === method.value
                    ? 'border-cyan-500 bg-cyan-500/10'
                    : 'border-gray-600 hover:border-gray-500'
                }`}
              >
                <input
                  type="radio"
                  name="preferredContact"
                  value={method.value}
                  checked={formData.preferredContact === method.value}
                  onChange={(e) => handleInputChange('preferredContact', e.target.value)}
                  className="sr-only"
                />
                <Icon className="w-5 h-5 mr-3 text-cyan-400" />
                <span className="text-sm font-medium">{method.label}</span>
              </label>
            );
          })}
        </div>
      </div>
    </motion.div>
  );

  const renderStep3 = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Project Details *
        </label>
        <textarea
          value={formData.message}
          onChange={(e) => handleInputChange('message', e.target.value)}
          rows={6}
          className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none ${
            errors.message ? 'border-red-500' : 'border-gray-600'
          }`}
          placeholder="Tell us about your project, requirements, and goals..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-400 flex items-center">
            <AlertCircle className="w-4 h-4 mr-1" />
            {errors.message}
          </p>
        )}
        <p className="mt-2 text-sm text-gray-400">
          {formData.message.length}/1000 characters
        </p>
      </div>

      <div className="space-y-4">
        <label className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={formData.newsletter}
            onChange={(e) => handleInputChange('newsletter', e.target.checked)}
            className="w-4 h-4 text-cyan-500 bg-gray-800 border-gray-600 rounded focus:ring-cyan-500 focus:ring-2"
          />
          <span className="ml-3 text-sm text-gray-300">
            Subscribe to our newsletter for technology insights and updates
          </span>
        </label>

        <label className="flex items-start cursor-pointer">
          <input
            type="checkbox"
            checked={formData.gdprConsent}
            onChange={(e) => handleInputChange('gdprConsent', e.target.checked)}
            className="w-4 h-4 text-cyan-500 bg-gray-800 border-gray-600 rounded focus:ring-cyan-500 focus:ring-2 mt-1"
          />
          <span className="ml-3 text-sm text-gray-300">
            I consent to Zion Tech Group processing my personal data in accordance with the{' '}
            <a href="/privacy" className="text-cyan-400 hover:text-cyan-300 underline">
              Privacy Policy
            </a>
            . *
          </span>
        </label>
        {errors.gdprConsent && (
          <p className="mt-1 text-sm text-red-400 flex items-center">
            <AlertCircle className="w-4 h-4 mr-1" />
            {errors.gdprConsent}
          </p>
        )}
      </div>
    </motion.div>
  );

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Let's Build the Future Together
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Ready to transform your business with revolutionary AI consciousness, quantum computing, and autonomous solutions? 
          Get in touch and let's discuss your vision.
        </p>
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-400">Step {currentStep} of 3</span>
          <span className="text-sm text-cyan-400">{Math.round((currentStep / 3) * 100)}% Complete</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full transition-all duration-500"
            style={{ width: `${(currentStep / 3) * 100}%` }}
          />
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
        <AnimatePresence mode="wait">
          {currentStep === 1 && renderStep1()}
          {currentStep === 2 && renderStep2()}
          {currentStep === 3 && renderStep3()}
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8 pt-6 border-t border-gray-700">
          {currentStep > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors flex items-center"
            >
              ← Previous
            </button>
          )}

          <div className="flex gap-4 ml-auto">
            {currentStep < 3 ? (
              <button
                type="button"
                onClick={nextStep}
                className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-colors flex items-center"
              >
                Next →
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-lg transition-all flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </button>
            )}
          </div>
        </div>

        {/* Submit Status */}
        <AnimatePresence>
          {submitStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-6 p-4 bg-green-900/20 border border-green-500/30 rounded-lg flex items-center"
            >
              <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
              <span className="text-green-400">
                Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
              </span>
            </motion.div>
          )}

          {submitStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-6 p-4 bg-red-900/20 border border-red-500/30 rounded-lg flex items-center"
            >
              <AlertCircle className="w-5 h-5 text-red-400 mr-3" />
              <span className="text-red-400">
                Something went wrong. Please try again or contact us directly.
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </form>

      {/* Contact Information */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="w-8 h-8 text-cyan-400" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
          <p className="text-gray-300">kleber@ziontechgroup.com</p>
          <p className="text-sm text-gray-400 mt-1">We'll respond within 24 hours</p>
        </div>

        <div className="text-center">
          <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Phone className="w-8 h-8 text-blue-400" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
          <p className="text-gray-300">+1 (302) 464-0950</p>
          <p className="text-sm text-gray-400 mt-1">Mon-Fri 9AM-6PM EST</p>
        </div>

        <div className="text-center">
          <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <MapPin className="w-8 h-8 text-purple-400" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
          <p className="text-gray-300">364 E Main St STE 1008</p>
          <p className="text-gray-300">Middletown, DE 19709</p>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="mt-12 text-center">
        <div className="flex items-center justify-center space-x-8 text-gray-400">
          <div className="flex items-center">
            <Shield className="w-5 h-5 mr-2" />
            <span className="text-sm">GDPR Compliant</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-5 h-5 mr-2" />
            <span className="text-sm">24/7 Support</span>
          </div>
          <div className="flex items-center">
            <CheckCircle className="w-5 h-5 mr-2" />
            <span className="text-sm">ISO 27001 Certified</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedContactForm;