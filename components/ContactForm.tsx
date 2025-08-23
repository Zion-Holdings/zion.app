import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, Mail, Phone, MapPin, Clock, CheckCircle, 
  AlertCircle, User, MessageSquare, Building, Globe,
  ArrowRight, Loader2
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
  preferredContact: string;
  newsletter: boolean;
}

interface FormValidation {
  [key: string]: string;
}

const ContactForm: React.FC = () => {
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
    newsletter: false
  });

  const [errors, setErrors] = useState<FormValidation>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [isVisible, setIsVisible] = useState(false);

  const totalSteps = 3;

  // Service options
  const serviceOptions = [
    { value: 'ai-consulting', label: 'AI & Machine Learning Consulting', icon: '🤖' },
    { value: 'quantum-computing', label: 'Quantum Computing Solutions', icon: '⚛️' },
    { value: 'space-technology', label: 'Space Technology Development', icon: '🚀' },
    { value: 'cybersecurity', label: 'Advanced Cybersecurity', icon: '🔒' },
    { value: 'cloud-infrastructure', label: 'Cloud Infrastructure', icon: '☁️' },
    { value: 'business-intelligence', label: 'Business Intelligence & Analytics', icon: '📊' },
    { value: 'custom-development', label: 'Custom Software Development', icon: '💻' },
    { value: 'other', label: 'Other Services', icon: '✨' }
  ];

  // Budget options
  const budgetOptions = [
    { value: 'under-10k', label: 'Under $10,000' },
    { value: '10k-50k', label: '$10,000 - $50,000' },
    { value: '50k-100k', label: '$50,000 - $100,000' },
    { value: '100k-500k', label: '$100,000 - $500,000' },
    { value: 'over-500k', label: 'Over $500,000' },
    { value: 'discuss', label: 'Let\'s discuss' }
  ];

  // Timeline options
  const timelineOptions = [
    { value: 'asap', label: 'ASAP' },
    { value: '1-3-months', label: '1-3 months' },
    { value: '3-6-months', label: '3-6 months' },
    { value: '6-12-months', label: '6-12 months' },
    { value: 'over-12-months', label: 'Over 12 months' },
    { value: 'flexible', label: 'Flexible' }
  ];

  // Contact preferences
  const contactPreferences = [
    { value: 'email', label: 'Email', icon: Mail },
    { value: 'phone', label: 'Phone', icon: Phone },
    { value: 'video-call', label: 'Video Call', icon: MessageSquare }
  ];

  useEffect(() => {
    // Show form after a delay
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Validate form data
  const validateForm = useCallback((data: ContactFormData, step: number): FormValidation => {
    const newErrors: FormValidation = {};

    if (step >= 1) {
      if (!data.firstName.trim()) newErrors.firstName = 'First name is required';
      if (!data.lastName.trim()) newErrors.lastName = 'Last name is required';
      if (!data.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        newErrors.email = 'Please enter a valid email address';
      }
      if (!data.company.trim()) newErrors.company = 'Company name is required';
    }

    if (step >= 2) {
      if (!data.service) newErrors.service = 'Please select a service';
      if (!data.message.trim()) newErrors.message = 'Please describe your project';
      if (data.message.trim().length < 20) {
        newErrors.message = 'Please provide more details (at least 20 characters)';
      }
    }

    if (step >= 3) {
      if (!data.budget) newErrors.budget = 'Please select a budget range';
      if (!data.timeline) newErrors.timeline = 'Please select a timeline';
      if (!data.preferredContact) newErrors.preferredContact = 'Please select preferred contact method';
    }

    return newErrors;
  }, []);

  // Handle input changes
  const handleInputChange = useCallback((field: keyof ContactFormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  }, [errors]);

  // Handle next step
  const handleNext = useCallback(() => {
    const stepErrors = validateForm(formData, currentStep);
    if (Object.keys(stepErrors).length === 0) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps));
    } else {
      setErrors(stepErrors);
    }
  }, [formData, currentStep, validateForm]);

  // Handle previous step
  const handlePrevious = useCallback(() => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  }, []);

  // Handle form submission
  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    
    const allErrors = validateForm(formData, totalSteps);
    if (Object.keys(allErrors).length > 0) {
      setErrors(allErrors);
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Success
      setIsSubmitted(true);
      setIsSubmitting(false);
      
      // Reset form after success
      setTimeout(() => {
        setIsSubmitted(false);
        setCurrentStep(1);
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
          newsletter: false
        });
      }, 5000);
      
    } catch (error) {
      console.error('Form submission error:', error);
      setIsSubmitting(false);
    }
  }, [formData, validateForm]);

  // Get step progress
  const getStepProgress = () => (currentStep / totalSteps) * 100;

  if (!isVisible) return null;

  return (
    <div className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-white mb-6">
            Let's Build the Future Together
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to transform your business with revolutionary 2044 technology? 
            Our team of experts is here to help you navigate the future.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-900/60 border border-gray-700/30 rounded-2xl p-8 backdrop-blur-xl">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <MessageSquare className="w-6 h-6 mr-3 text-blue-400" />
                Get in Touch
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Email</div>
                    <div className="text-gray-400">kleber@ziontechgroup.com</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Phone</div>
                    <div className="text-gray-400">+1 (302) 464-0950</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Office</div>
                    <div className="text-gray-400">
                      364 E Main St STE 1008<br />
                      Middletown, DE 19709
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Business Hours</div>
                    <div className="text-gray-400">
                      Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                      Saturday: 10:00 AM - 2:00 PM EST
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-gray-900/60 border border-gray-700/30 rounded-2xl p-8 backdrop-blur-xl">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <CheckCircle className="w-6 h-6 mr-3 text-green-400" />
                Why Choose Zion Tech Group?
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300">2000+ Revolutionary Services</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300">99.99% Uptime Guarantee</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300">24/7 AI Support Available</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300">200+ Countries Served</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300">Cutting-edge 2044 Technology</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-gray-900/60 border border-gray-700/30 rounded-2xl p-8 backdrop-blur-xl"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* Success Message */}
            <AnimatePresence>
              {isSubmitted && (
                <motion.div
                  className="mb-8 p-6 bg-green-900/20 border border-green-500/30 rounded-xl"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                >
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <div>
                      <div className="text-green-300 font-medium">Thank you for your message!</div>
                      <div className="text-green-400 text-sm">
                        We'll get back to you within 24 hours.
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-400">Step {currentStep} of {totalSteps}</span>
                <span className="text-sm text-gray-400">{Math.round(getStepProgress())}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <motion.div
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${getStepProgress()}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Step 1: Basic Information */}
              <AnimatePresence mode="wait">
                {currentStep === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          className={`w-full px-4 py-3 bg-gray-800 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                            errors.firstName 
                              ? 'border-red-500 focus:ring-red-500/50' 
                              : 'border-gray-600 focus:ring-blue-500/50'
                          }`}
                          placeholder="Enter your first name"
                        />
                        {errors.firstName && (
                          <p className="mt-1 text-sm text-red-400">{errors.firstName}</p>
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
                          className={`w-full px-4 py-3 bg-gray-800 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                            errors.lastName 
                              ? 'border-red-500 focus:ring-red-500/50' 
                              : 'border-gray-600 focus:ring-blue-500/50'
                          }`}
                          placeholder="Enter your last name"
                        />
                        {errors.lastName && (
                          <p className="mt-1 text-sm text-red-400">{errors.lastName}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className={`w-full px-4 py-3 bg-gray-800 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                          errors.email 
                            ? 'border-red-500 focus:ring-red-500/50' 
                            : 'border-gray-600 focus:ring-blue-500/50'
                        }`}
                        placeholder="Enter your email address"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-colors"
                          placeholder="Enter your phone number"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          className={`w-full px-4 py-3 bg-gray-800 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                            errors.company 
                              ? 'border-red-500 focus:ring-red-500/50' 
                              : 'border-gray-600 focus:ring-blue-500/50'
                          }`}
                          placeholder="Enter your company name"
                        />
                        {errors.company && (
                          <p className="mt-1 text-sm text-red-400">{errors.company}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Website
                      </label>
                      <input
                        type="url"
                        value={formData.website}
                        onChange={(e) => handleInputChange('website', e.target.value)}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-colors"
                        placeholder="https://yourcompany.com"
                      />
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Project Details */}
                {currentStep === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Service Interest *
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => handleInputChange('service', e.target.value)}
                        className={`w-full px-4 py-3 bg-gray-800 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                          errors.service 
                            ? 'border-red-500 focus:ring-red-500/50' 
                            : 'border-gray-600 focus:ring-blue-500/50'
                        }`}
                      >
                        <option value="">Select a service</option>
                        {serviceOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.icon} {option.label}
                          </option>
                        ))}
                      </select>
                      {errors.service && (
                        <p className="mt-1 text-sm text-red-400">{errors.service}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Project Description *
                      </label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        rows={6}
                        className={`w-full px-4 py-3 bg-gray-800 border rounded-lg focus:outline-none focus:ring-2 transition-colors resize-none ${
                          errors.message 
                            ? 'border-red-500 focus:ring-red-500/50' 
                            : 'border-gray-600 focus:ring-blue-500/50'
                        }`}
                        placeholder="Tell us about your project, goals, and requirements..."
                      />
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-400">{errors.message}</p>
                      )}
                      <div className="mt-1 text-xs text-gray-500">
                        {formData.message.length}/1000 characters
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Additional Details */}
                {currentStep === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Budget Range *
                        </label>
                        <select
                          value={formData.budget}
                          onChange={(e) => handleInputChange('budget', e.target.value)}
                          className={`w-full px-4 py-3 bg-gray-800 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                            errors.budget 
                              ? 'border-red-500 focus:ring-red-500/50' 
                              : 'border-gray-600 focus:ring-blue-500/50'
                          }`}
                        >
                          <option value="">Select budget range</option>
                          {budgetOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                        {errors.budget && (
                          <p className="mt-1 text-sm text-red-400">{errors.budget}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Timeline *
                        </label>
                        <select
                          value={formData.timeline}
                          onChange={(e) => handleInputChange('timeline', e.target.value)}
                          className={`w-full px-4 py-3 bg-gray-800 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                            errors.timeline 
                              ? 'border-red-500 focus:ring-red-500/50' 
                              : 'border-gray-600 focus:ring-blue-500/50'
                          }`}
                        >
                          <option value="">Select timeline</option>
                          {timelineOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                        {errors.timeline && (
                          <p className="mt-1 text-sm text-red-400">{errors.timeline}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Preferred Contact Method *
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {contactPreferences.map((preference) => {
                          const Icon = preference.icon;
                          return (
                            <label
                              key={preference.value}
                              className={`flex items-center space-x-3 p-3 border rounded-lg cursor-pointer transition-colors ${
                                formData.preferredContact === preference.value
                                  ? 'border-blue-500 bg-blue-500/10'
                                  : 'border-gray-600 hover:border-gray-500'
                              }`}
                            >
                              <input
                                type="radio"
                                name="preferredContact"
                                value={preference.value}
                                checked={formData.preferredContact === preference.value}
                                onChange={(e) => handleInputChange('preferredContact', e.target.value)}
                                className="sr-only"
                              />
                              <Icon className="w-5 h-5 text-gray-400" />
                              <span className="text-sm text-gray-300">{preference.label}</span>
                            </label>
                          );
                        })}
                      </div>
                      {errors.preferredContact && (
                        <p className="mt-1 text-sm text-red-400">{errors.preferredContact}</p>
                      )}
                    </div>

                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        id="newsletter"
                        checked={formData.newsletter}
                        onChange={(e) => handleInputChange('newsletter', e.target.checked)}
                        className="w-4 h-4 text-blue-600 bg-gray-800 border-gray-600 rounded focus:ring-blue-500/50"
                      />
                      <label htmlFor="newsletter" className="text-sm text-gray-300">
                        Subscribe to our newsletter for technology insights and updates
                      </label>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between pt-6">
                <div>
                  {currentStep > 1 && (
                    <button
                      type="button"
                      onClick={handlePrevious}
                      className="px-6 py-3 text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500/50 rounded-lg"
                    >
                      Previous
                    </button>
                  )}
                </div>

                <div>
                  {currentStep < totalSteps ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 flex items-center space-x-2"
                    >
                      <span>Next</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-8 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white font-medium rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;