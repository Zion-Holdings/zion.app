import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, Phone, MapPin, Send, CheckCircle, 
  AlertCircle, Globe, Shield, Zap, Brain, Rocket
} from 'lucide-react';

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  website: string;
  service: string;
  message: string;
  budget: string;
  timeline: string;
  preferredContact: 'email' | 'phone' | 'both';
  newsletter: boolean;
  gdprConsent: boolean;
}

interface ContactFormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  company?: string;
  website?: string;
  service?: string;
  message?: string;
  budget?: string;
  timeline?: string;
  preferredContact?: string;
  newsletter?: string;
  gdprConsent?: string;
  submit?: string;
}

interface ContactFormProps {
  title?: string;
  subtitle?: string;
  showServiceSelection?: boolean;
  showBudgetTimeline?: boolean;
  onSubmit?: (data: ContactFormData) => void;
  className?: string;
}

const EnhancedContactForm: React.FC<ContactFormProps> = ({
  title = "Get in Touch",
  subtitle = "Ready to transform your business with cutting-edge technology? Let's discuss your project.",
  showServiceSelection = true,
  showBudgetTimeline = true,
  onSubmit,
  className = ""
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    service: '',
    message: '',
    budget: '',
    timeline: '',
    preferredContact: 'email',
    newsletter: false,
    gdprConsent: false
  });

  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formProgress, setFormProgress] = useState(0);

  // Services available
  const services = [
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: <Brain className="w-4 h-4" />, description: 'Advanced AI solutions for enterprise' },
    { id: 'quantum', name: 'Quantum Computing', icon: <Zap className="w-4 h-4" />, description: 'Next-generation quantum solutions' },
    { id: 'space-tech', name: 'Space Technology', icon: <Rocket className="w-4 h-4" />, description: 'Innovative space solutions' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: <Shield className="w-4 h-4" />, description: 'Enterprise security solutions' },
    { id: 'cloud', name: 'Cloud Solutions', icon: <Globe className="w-4 h-4" />, description: 'Scalable cloud infrastructure' },
    { id: 'automation', name: 'Business Automation', icon: <Zap className="w-4 h-4" />, description: 'Process automation & optimization' }
  ];

  // Budget ranges
  const budgetRanges = [
    { value: 'under-50k', label: 'Under $50K', description: 'Small to medium projects' },
    { value: '50k-200k', label: '$50K - $200K', description: 'Medium enterprise solutions' },
    { value: '200k-500k', label: '$200K - $500K', description: 'Large enterprise projects' },
    { value: '500k-1m', label: '$500K - $1M', description: 'Major transformation projects' },
    { value: 'over-1m', label: 'Over $1M', description: 'Enterprise-wide solutions' }
  ];

  // Timeline options
  const timelineOptions = [
    { value: 'asap', label: 'ASAP', description: 'Immediate start required' },
    { value: '1-3months', label: '1-3 Months', description: 'Quick turnaround needed' },
    { value: '3-6months', label: '3-6 Months', description: 'Standard project timeline' },
    { value: '6-12months', label: '6-12 Months', description: 'Complex project planning' },
    { value: '12months+', label: '12+ Months', description: 'Long-term strategic project' }
  ];

  // Validation functions
  const validateField = useCallback((name: keyof ContactFormData, value: string): string => {
    switch (name) {
      case 'firstName':
      case 'lastName':
        return value.trim() ? '' : 'This field is required';
      case 'email': {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return value.trim() ? (emailRegex.test(value) ? '' : 'Please enter a valid email') : 'Email is required';
      }
      case 'phone':
        return value.trim() ? '' : 'Phone number is required';
      case 'company':
        return value.trim() ? '' : 'Company name is required';
      case 'message':
        return value.trim().length >= 10 ? '' : 'Message must be at least 10 characters';
      case 'service':
        return showServiceSelection && !value ? 'Please select a service' : '';
      case 'budget':
        return showBudgetTimeline && !value ? 'Please select a budget range' : '';
      case 'timeline':
        return showBudgetTimeline && !value ? 'Please select a timeline' : '';
      default:
        return '';
    }
  }, [showServiceSelection, showBudgetTimeline]);

  // Update form progress
  const updateFormProgress = useCallback(() => {
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'company', 'message'];
    if (showServiceSelection) requiredFields.push('service');
    if (showBudgetTimeline) {
      requiredFields.push('budget', 'timeline');
    }
    
    const filledFields = requiredFields.filter(field => {
      const value = formData[field as keyof ContactFormData];
      return typeof value === 'string' ? value.trim() !== '' : value === true;
    });
    
    const progress = (filledFields.length / requiredFields.length) * 100;
    setFormProgress(progress);
  }, [formData, showServiceSelection, showBudgetTimeline]);

  // Handle input changes
  const handleInputChange = useCallback((name: keyof ContactFormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
    
    // Update form progress
    updateFormProgress();
  }, [errors, updateFormProgress]);

  // Validate entire form
  const validateForm = useCallback((): boolean => {
    const newErrors: ContactFormErrors = {};
    let isValid = true;

    Object.keys(formData).forEach(key => {
      const fieldName = key as keyof ContactFormData;
      const value = formData[fieldName];
      const error = validateField(fieldName, typeof value === 'string' ? value : '');
      
      if (error) {
        newErrors[fieldName] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  }, [formData, validateField]);

  // Handle form submission
  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    if (!formData.gdprConsent) {
      setErrors(prev => ({ ...prev, gdprConsent: 'GDPR consent is required' }));
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Call onSubmit callback
      onSubmit?.(formData);
      
      // Show success state
      setIsSubmitted(true);
      
      // Reset form after delay
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          website: '',
          service: '',
          message: '',
          budget: '',
          timeline: '',
          preferredContact: 'email',
          newsletter: false,
          gdprConsent: false
        });
        setCurrentStep(1);
        setFormProgress(0);
        setErrors({});
      }, 5000);
      
    } catch (error) {
      // Form submission failed
      setErrors(prev => ({ ...prev, submit: 'Submission failed. Please try again.' }));
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, validateForm, onSubmit]);

  // Next step
  const nextStep = useCallback(() => {
    if (currentStep < 3) {
      setCurrentStep(prev => prev + 1);
    }
  }, [currentStep]);

  // Previous step
  const prevStep = useCallback(() => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  }, [currentStep]);

  // Check if current step is valid
  const isStepValid = useCallback((step: number): boolean => {
    switch (step) {
      case 1:
        return !!(formData.firstName && formData.lastName && formData.email && formData.phone);
      case 2:
        return !!(formData.company && formData.message);
      case 3:
        return !!(formData.service && formData.budget && formData.timeline);
      default:
        return false;
    }
  }, [formData]);

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center p-8 bg-green-50 rounded-2xl border border-green-200"
      >
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-green-900 mb-2">Thank You!</h3>
        <p className="text-green-700 mb-4">
          Your message has been sent successfully. We'll get back to you within 24 hours.
        </p>
        <div className="text-sm text-green-600">
          <p>Check your email for a confirmation message.</p>
          <p>You can also reach us directly at +1-302-464-0950</p>
        </div>
      </motion.div>
    );
  }

  return (
    <div className={`bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden ${className}`}>
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-cyan-100">{subtitle}</p>
        
        {/* Progress Bar */}
        <div className="mt-4">
          <div className="flex justify-between text-sm mb-2">
            <span>Step {currentStep} of 3</span>
            <span>{Math.round(formProgress)}% Complete</span>
          </div>
          <div className="w-full bg-cyan-200/30 rounded-full h-2">
            <motion.div
              className="bg-white h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${formProgress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="p-6">
        <AnimatePresence mode="wait">
          {/* Step 1: Basic Information */}
          {currentStep === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Basic Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 ${
                      errors.firstName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your first name"
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.firstName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 ${
                      errors.lastName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your last name"
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="your.email@company.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="+1 (555) 123-4567"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={!isStepValid(1)}
                  className="px-6 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Next Step
                </button>
              </div>
            </motion.div>
          )}

          {/* Step 2: Company & Project Details */}
          {currentStep === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Company & Project Details</h3>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 ${
                    errors.company ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Your company name"
                />
                {errors.company && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.company}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Website (Optional)
                </label>
                <input
                  type="url"
                  value={formData.website}
                  onChange={(e) => handleInputChange('website', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                  placeholder="https://yourcompany.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Description *
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  rows={4}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 ${
                    errors.message ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Tell us about your project, goals, and requirements..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.message}
                  </p>
                )}
              </div>

              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Previous
                </button>
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={!isStepValid(2)}
                  className="px-6 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Next Step
                </button>
              </div>
            </motion.div>
          )}

          {/* Step 3: Service & Requirements */}
          {currentStep === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Service & Requirements</h3>
              
              {showServiceSelection && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interest *
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {services.map((service) => (
                      <label
                        key={service.id}
                        className={`flex items-start space-x-3 p-3 border rounded-lg cursor-pointer transition-colors ${
                          formData.service === service.id
                            ? 'border-cyan-500 bg-cyan-50'
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                      >
                        <input
                          type="radio"
                          name="service"
                          value={service.id}
                          checked={formData.service === service.id}
                          onChange={(e) => handleInputChange('service', e.target.value)}
                          className="mt-1 text-cyan-600 focus:ring-cyan-500"
                        />
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            {service.icon}
                            <span className="font-medium text-gray-900">{service.name}</span>
                          </div>
                          <p className="text-sm text-gray-600">{service.description}</p>
                        </div>
                      </label>
                    ))}
                  </div>
                  {errors.service && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.service}
                    </p>
                  )}
                </div>
              )}

              {showBudgetTimeline && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Budget Range *
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => handleInputChange('budget', e.target.value)}
                      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 ${
                        errors.budget ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((budget) => (
                        <option key={budget.value} value={budget.value}>
                          {budget.label} - {budget.description}
                        </option>
                      ))}
                    </select>
                    {errors.budget && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.budget}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Timeline *
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => handleInputChange('timeline', e.target.value)}
                      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 ${
                        errors.timeline ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Select timeline</option>
                      {timelineOptions.map((timeline) => (
                        <option key={timeline.value} value={timeline.value}>
                          {timeline.label} - {timeline.description}
                        </option>
                      ))}
                    </select>
                    {errors.timeline && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.timeline}
                      </p>
                    )}
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Contact Method
                </label>
                <div className="space-y-2">
                  {(['email', 'phone', 'both'] as const).map((method) => (
                    <label key={method} className="flex items-center space-x-3">
                      <input
                        type="radio"
                        name="preferredContact"
                        value={method}
                        checked={formData.preferredContact === method}
                        onChange={(e) => handleInputChange('preferredContact', e.target.value as 'email' | 'phone' | 'both')}
                        className="text-cyan-600 focus:ring-cyan-500"
                      />
                      <span className="text-sm text-gray-700 capitalize">
                        {method === 'both' ? 'Email & Phone' : method}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Previous
                </button>
                <button
                  type="submit"
                  disabled={!isStepValid(3) || isSubmitting}
                  className="px-6 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Additional Options */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="space-y-3">
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={formData.newsletter}
                onChange={(e) => handleInputChange('newsletter', e.target.checked)}
                className="rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
              />
              <span className="text-sm text-gray-700">
                Subscribe to our newsletter for technology insights and updates
              </span>
            </label>

            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={formData.gdprConsent}
                onChange={(e) => handleInputChange('gdprConsent', e.target.checked)}
                className="rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
              />
              <span className="text-sm text-gray-700">
                I consent to Zion Tech Group processing my data for the purposes described in the{' '}
                <a href="/privacy" className="text-cyan-600 hover:text-cyan-700 underline">
                  Privacy Policy
                </a>
                *
              </span>
            </label>
            {errors.gdprConsent && (
              <p className="text-sm text-red-600 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.gdprConsent}
              </p>
            )}
          </div>
        </div>

        {/* Submit Error */}
        {errors.submit && (
          <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm text-red-600 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.submit}
            </p>
          </div>
        )}
      </form>

      {/* Contact Information */}
      <div className="bg-gray-50 p-6 border-t border-gray-200">
        <h4 className="text-sm font-medium text-gray-900 mb-3">Other Ways to Reach Us</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="flex items-center space-x-2">
            <Phone className="w-4 h-4 text-cyan-600" />
            <span className="text-gray-700">+1-302-464-0950</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4 text-cyan-600" />
            <span className="text-gray-700">kleber@ziontechgroup.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-cyan-600" />
            <span className="text-gray-700">Middletown, DE</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedContactForm;