import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, CheckCircle, AlertCircle, Phone, Mail, MapPin, 
  Clock, User, Building, MessageSquare, Globe, Zap
} from 'lucide-react';

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  website: string;
  service: string;
  budget: string;
  timeline: string;
  message: string;
  preferredContact: 'email' | 'phone' | 'both';
  newsletter: boolean;
  gdprConsent: boolean;
}

interface ContactFormProps {
  className?: string;
  showHeader?: boolean;
  variant?: 'default' | 'minimal' | 'enterprise';
  onSubmit?: (data: ContactFormData) => void;
  autoFocus?: boolean;
}

const ContactForm: React.FC<ContactFormProps> = ({
  className = '',
  showHeader = true,
  variant = 'default',
  onSubmit,
  autoFocus = false
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    service: '',
    budget: '',
    timeline: '',
    message: '',
    preferredContact: 'email',
    newsletter: false,
    gdprConsent: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isValidating, setIsValidating] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const formRef = useRef<HTMLFormElement>(null);
  const firstNameRef = useRef<HTMLInputElement>(null);

  // Auto-focus first name field
  useEffect(() => {
    if (autoFocus && firstNameRef.current) {
      firstNameRef.current.focus();
    }
  }, [autoFocus]);

  // Service options
  const serviceOptions = [
    'AI & Machine Learning Solutions',
    'Quantum Computing Services',
    'Space Technology Solutions',
    'Enterprise IT Solutions',
    'Micro SAAS Platforms',
    'Cybersecurity Services',
    'Cloud Infrastructure',
    'Custom Development',
    'Technology Consulting',
    'Other'
  ];

  // Budget options
  const budgetOptions = [
    'Under $10,000',
    '$10,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000 - $500,000',
    '$500,000 - $1,000,000',
    'Over $1,000,000',
    'To be discussed'
  ];

  // Timeline options
  const timelineOptions = [
    'Immediate (1-2 weeks)',
    'Quick (1-2 months)',
    'Standard (3-6 months)',
    'Extended (6-12 months)',
    'Long-term (1+ years)',
    'Flexible'
  ];

  // Validation rules
  const validationRules: Record<string, {
    required: boolean;
    minLength?: number;
    maxLength?: number;
    pattern?: RegExp;
  }> = {
    firstName: { required: true, minLength: 2, maxLength: 50 },
    lastName: { required: true, minLength: 2, maxLength: 50 },
    email: { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
    phone: { required: false, pattern: /^[+]?[1-9][\d]{0,15}$/ },
    company: { required: true, minLength: 2, maxLength: 100 },
    website: { required: false, pattern: /^https?:\/\/.+/ },
    service: { required: true },
    budget: { required: true },
    timeline: { required: true },
    message: { required: true, minLength: 20, maxLength: 1000 },
    gdprConsent: { required: true }
  };

  // Validate field
  const validateField = (name: keyof ContactFormData, value: string | boolean): string => {
    const rules = validationRules[name as keyof typeof validationRules];
    if (!rules) return '';

    if (rules.required && !value) {
      return `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
    }

    if (typeof value === 'string') {
      if (rules.minLength && value.length < rules.minLength) {
        return `${name.charAt(0).toUpperCase() + name.slice(1)} must be at least ${rules.minLength} characters`;
      }
      if (rules.maxLength && value.length > rules.maxLength) {
        return `${name.charAt(0).toUpperCase() + name.slice(1)} must be no more than ${rules.maxLength} characters`;
      }
      if (rules.pattern && !rules.pattern.test(value)) {
        if (name === 'email') return 'Please enter a valid email address';
        if (name === 'website') return 'Please enter a valid website URL (starting with http:// or https://)';
        if (name === 'phone') return 'Please enter a valid phone number';
        return `${name.charAt(0).toUpperCase() + name.slice(1)} format is invalid`;
      }
    }

    if (name === 'gdprConsent' && !value) {
      return 'You must consent to data processing to continue';
    }

    return '';
  };

  // Validate entire form
  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    let isValid = true;

    Object.keys(formData).forEach((key) => {
      const fieldName = key as keyof ContactFormData;
      const value = formData[fieldName];
      const error = validateField(fieldName, value);
      
      if (error) {
        newErrors[fieldName] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  // Handle input change
  const handleInputChange = (name: keyof ContactFormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Handle field focus
  const handleFieldFocus = (fieldName: string) => {
    setFocusedField(fieldName);
  };

  // Handle field blur
  const handleFieldBlur = (fieldName: keyof ContactFormData) => {
    setFocusedField(null);
    const value = formData[fieldName];
    const error = validateField(fieldName, value);
    if (error) {
      setErrors(prev => ({ ...prev, [fieldName]: error }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setIsValidating(true);
      setTimeout(() => setIsValidating(false), 2000);
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      if (onSubmit) {
        onSubmit(formData);
      }
      
      setIsSubmitted(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        website: '',
        service: '',
        budget: '',
        timeline: '',
        message: '',
        preferredContact: 'email',
        newsletter: false,
        gdprConsent: false
      });
      setErrors({});
      setCurrentStep(1);
      
      // Reset form after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Get variant styles
  const getVariantStyles = () => {
    switch (variant) {
      case 'minimal':
        return {
          container: 'bg-white/5 backdrop-blur-sm border border-gray-200/20',
          input: 'bg-white/10 border-gray-300/30 focus:border-cyan-400/50',
          button: 'bg-cyan-500 hover:bg-cyan-600 text-white',
          header: 'text-gray-800'
        };
      case 'enterprise':
        return {
          container: 'bg-gradient-to-br from-gray-900/95 to-slate-900/95 backdrop-blur-xl border border-cyan-500/30',
          input: 'bg-gray-800/50 border-gray-600/50 focus:border-cyan-400/50',
          button: 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white',
          header: 'text-white'
        };
      default:
        return {
          container: 'bg-gray-900/95 backdrop-blur-md border border-cyan-400/20',
          input: 'bg-gray-800/50 border-gray-700/50 focus:border-cyan-400/50',
          button: 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white',
          header: 'text-white'
        };
    }
  };

  const styles = getVariantStyles();

  // Success message
  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`${styles.container} rounded-2xl p-8 text-center ${className}`}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <CheckCircle className="w-10 h-10 text-green-400" />
        </motion.div>
        <h3 className="text-2xl font-bold text-white mb-4">Thank You!</h3>
        <p className="text-gray-300 mb-6">
          Your message has been sent successfully. We'll get back to you within 24 hours.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
        >
          Send Another Message
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`${styles.container} rounded-2xl p-6 ${className}`}
    >
      {showHeader && (
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.1, type: "spring" }}
            className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4"
          >
            <MessageSquare className="w-8 h-8 text-white" />
          </motion.div>
          <h2 className={`text-3xl font-bold mb-2 ${styles.header}`}>
            Get In Touch
          </h2>
          <p className="text-gray-400 max-w-md mx-auto">
            Ready to transform your business? Let's discuss how our cutting-edge technology solutions can help you achieve your goals.
          </p>
        </div>
      )}

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
              First Name *
            </label>
            <input
              ref={firstNameRef}
              type="text"
              id="firstName"
              value={formData.firstName}
              onChange={(e) => handleInputChange('firstName', e.target.value)}
              onFocus={() => handleFieldFocus('firstName')}
              onBlur={() => handleFieldBlur('firstName')}
              className={`w-full px-4 py-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-all duration-200 ${styles.input} ${
                focusedField === 'firstName' ? 'ring-2 ring-cyan-400/50' : ''
              } ${errors.firstName ? 'border-red-400' : ''}`}
              placeholder="Enter your first name"
            />
            {errors.firstName && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-sm mt-1 flex items-center"
              >
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.firstName}
              </motion.p>
            )}
          </div>

          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
              Last Name *
            </label>
            <input
              type="text"
              id="lastName"
              value={formData.lastName}
              onChange={(e) => handleInputChange('lastName', e.target.value)}
              onFocus={() => handleFieldFocus('lastName')}
              onBlur={() => handleFieldBlur('lastName')}
              className={`w-full px-4 py-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-all duration-200 ${styles.input} ${
                focusedField === 'lastName' ? 'ring-2 ring-cyan-400/50' : ''
              } ${errors.lastName ? 'border-red-400' : ''}`}
              placeholder="Enter your last name"
            />
            {errors.lastName && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-sm mt-1 flex items-center"
              >
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.lastName}
              </motion.p>
            )}
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              onFocus={() => handleFieldFocus('email')}
              onBlur={() => handleFieldBlur('email')}
              className={`w-full px-4 py-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-all duration-200 ${styles.input} ${
                focusedField === 'email' ? 'ring-2 ring-cyan-400/50' : ''
              } ${errors.email ? 'border-red-400' : ''}`}
              placeholder="Enter your email address"
            />
            {errors.email && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-sm mt-1 flex items-center"
              >
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.email}
              </motion.p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              onFocus={() => handleFieldFocus('phone')}
              onBlur={() => handleFieldBlur('phone')}
              className={`w-full px-4 py-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-all duration-200 ${styles.input} ${
                focusedField === 'phone' ? 'ring-2 ring-cyan-400/50' : ''
              } ${errors.phone ? 'border-red-400' : ''}`}
              placeholder="Enter your phone number"
            />
            {errors.phone && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-sm mt-1 flex items-center"
              >
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.phone}
              </motion.p>
            )}
          </div>
        </div>

        {/* Company Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
              Company Name *
            </label>
            <input
              type="text"
              id="company"
              value={formData.company}
              onChange={(e) => handleInputChange('company', e.target.value)}
              onFocus={() => handleFieldFocus('company')}
              onBlur={() => handleFieldBlur('company')}
              className={`w-full px-4 py-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-all duration-200 ${styles.input} ${
                focusedField === 'company' ? 'ring-2 ring-cyan-400/50' : ''
              } ${errors.company ? 'border-red-400' : ''}`}
              placeholder="Enter your company name"
            />
            {errors.company && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-sm mt-1 flex items-center"
              >
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.company}
              </motion.p>
            )}
          </div>

          <div>
            <label htmlFor="website" className="block text-sm font-medium text-gray-300 mb-2">
              Website
            </label>
            <input
              type="url"
              id="website"
              value={formData.website}
              onChange={(e) => handleInputChange('website', e.target.value)}
              onFocus={() => handleFieldFocus('website')}
              onBlur={() => handleFieldBlur('website')}
              className={`w-full px-4 py-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-all duration-200 ${styles.input} ${
                focusedField === 'website' ? 'ring-2 ring-cyan-400/50' : ''
              } ${errors.website ? 'border-red-400' : ''}`}
              placeholder="https://yourcompany.com"
            />
            {errors.website && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-sm mt-1 flex items-center"
              >
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.website}
              </motion.p>
            )}
          </div>
        </div>

        {/* Project Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
              Service Interest *
            </label>
            <select
              id="service"
              value={formData.service}
              onChange={(e) => handleInputChange('service', e.target.value)}
              onFocus={() => handleFieldFocus('service')}
              onBlur={() => handleFieldBlur('service')}
              className={`w-full px-4 py-3 rounded-lg text-white bg-gray-800/50 border border-gray-700/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-all duration-200 ${
                focusedField === 'service' ? 'ring-2 ring-cyan-400/50' : ''
              } ${errors.service ? 'border-red-400' : ''}`}
            >
              <option value="">Select a service</option>
              {serviceOptions.map((option) => (
                <option key={option} value={option} className="bg-gray-800 text-white">
                  {option}
                </option>
              ))}
            </select>
            {errors.service && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-sm mt-1 flex items-center"
              >
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.service}
              </motion.p>
            )}
          </div>

          <div>
            <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
              Budget Range *
            </label>
            <select
              id="budget"
              value={formData.budget}
              onChange={(e) => handleInputChange('budget', e.target.value)}
              onFocus={() => handleFieldFocus('budget')}
              onBlur={() => handleFieldBlur('budget')}
              className={`w-full px-4 py-3 rounded-lg text-white bg-gray-800/50 border border-gray-700/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-all duration-200 ${
                focusedField === 'budget' ? 'ring-2 ring-cyan-400/50' : ''
              } ${errors.budget ? 'border-red-400' : ''}`}
            >
              <option value="">Select budget</option>
              {budgetOptions.map((option) => (
                <option key={option} value={option} className="bg-gray-800 text-white">
                  {option}
                </option>
              ))}
            </select>
            {errors.budget && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-sm mt-1 flex items-center"
              >
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.budget}
              </motion.p>
            )}
          </div>

          <div>
            <label htmlFor="timeline" className="block text-sm font-medium text-gray-300 mb-2">
              Timeline *
            </label>
            <select
              id="timeline"
              value={formData.timeline}
              onChange={(e) => handleInputChange('timeline', e.target.value)}
              onFocus={() => handleFieldFocus('timeline')}
              onBlur={() => handleFieldBlur('timeline')}
              className={`w-full px-4 py-3 rounded-lg text-white bg-gray-800/50 border border-gray-700/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-all duration-200 ${
                focusedField === 'timeline' ? 'ring-2 ring-cyan-400/50' : ''
              } ${errors.timeline ? 'border-red-400' : ''}`}
            >
              <option value="">Select timeline</option>
              {timelineOptions.map((option) => (
                <option key={option} value={option} className="bg-gray-800 text-white">
                  {option}
                </option>
              ))}
            </select>
            {errors.timeline && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-sm mt-1 flex items-center"
              >
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.timeline}
              </motion.p>
            )}
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
            Project Details *
          </label>
          <textarea
            id="message"
            rows={5}
            value={formData.message}
            onChange={(e) => handleInputChange('message', e.target.value)}
            onFocus={() => handleFieldFocus('message')}
            onBlur={() => handleFieldBlur('message')}
            className={`w-full px-4 py-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-all duration-200 resize-none ${styles.input} ${
              focusedField === 'message' ? 'ring-2 ring-cyan-400/50' : ''
            } ${errors.message ? 'border-red-400' : ''}`}
            placeholder="Tell us about your project, goals, and any specific requirements..."
          />
          {errors.message && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-400 text-sm mt-1 flex items-center"
            >
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.message}
            </motion.p>
          )}
          <div className="text-xs text-gray-500 mt-1 text-right">
            {formData.message.length}/1000 characters
          </div>
        </div>

        {/* Preferences */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-3">
              Preferred Contact Method
            </label>
            <div className="flex space-x-4">
              {[
                { value: 'email', label: 'Email', icon: Mail },
                { value: 'phone', label: 'Phone', icon: Phone },
                { value: 'both', label: 'Both', icon: MessageSquare }
              ].map((option) => {
                const Icon = option.icon;
                return (
                  <label key={option.value} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="preferredContact"
                      value={option.value}
                      checked={formData.preferredContact === option.value}
                      onChange={(e) => handleInputChange('preferredContact', e.target.value as 'email' | 'phone' | 'both')}
                      className="text-cyan-500 focus:ring-cyan-400"
                    />
                    <Icon className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-300">{option.label}</span>
                  </label>
                );
              })}
            </div>
          </div>

          <div className="space-y-3">
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.newsletter}
                onChange={(e) => handleInputChange('newsletter', e.target.checked)}
                className="text-cyan-500 focus:ring-cyan-400 rounded"
              />
              <span className="text-sm text-gray-300">
                Subscribe to our newsletter for technology insights and updates
              </span>
            </label>

            <label className="flex items-start space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.gdprConsent}
                onChange={(e) => handleInputChange('gdprConsent', e.target.checked)}
                onBlur={() => handleFieldBlur('gdprConsent')}
                className="text-cyan-500 focus:ring-cyan-400 rounded mt-1"
              />
              <span className="text-sm text-gray-300">
                I consent to Zion Tech Group processing my data for the purpose of responding to my inquiry. 
                <span className="text-cyan-400"> Learn more about our data practices.</span>
              </span>
            </label>
            {errors.gdprConsent && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-sm flex items-center"
              >
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.gdprConsent}
              </motion.p>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-400/50 disabled:opacity-50 disabled:cursor-not-allowed ${styles.button}`}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center space-x-2">
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              <span>Sending Message...</span>
            </div>
          ) : (
            <div className="flex items-center justify-center space-x-2">
              <Send className="w-5 h-5" />
              <span>Send Message</span>
            </div>
          )}
        </motion.button>

        {/* Validation Error Summary */}
        <AnimatePresence>
          {isValidating && Object.keys(errors).length > 0 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-red-500/10 border border-red-400/30 rounded-lg p-4"
            >
              <div className="flex items-center space-x-2 mb-2">
                <AlertCircle className="w-5 h-5 text-red-400" />
                <span className="text-red-400 font-medium">Please fix the following errors:</span>
              </div>
              <ul className="text-red-300 text-sm space-y-1">
                {Object.entries(errors).map(([field, error]) => (
                  <li key={field} className="flex items-center space-x-2">
                    <span>•</span>
                    <span>{error}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </form>

      {/* Contact Information */}
      <div className="mt-8 pt-6 border-t border-gray-700/50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="flex flex-col items-center space-y-2">
            <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center">
              <Phone className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <div className="text-white font-medium">Phone</div>
              <div className="text-gray-400 text-sm">+1 302 464 0950</div>
            </div>
          </div>
          
          <div className="flex flex-col items-center space-y-2">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
              <Mail className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <div className="text-white font-medium">Email</div>
              <div className="text-gray-400 text-sm">kleber@ziontechgroup.com</div>
            </div>
          </div>
          
          <div className="flex flex-col items-center space-y-2">
            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
              <MapPin className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <div className="text-white font-medium">Address</div>
              <div className="text-gray-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactForm;