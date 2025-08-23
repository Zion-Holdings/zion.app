import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, Mail, Phone, MapPin, 
  CheckCircle, AlertCircle, Loader2
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
}

interface ContactFormProps {
  className?: string;
  showCompanyFields?: boolean;
  showServiceSelection?: boolean;
  showBudgetTimeline?: boolean;
  onSubmit?: (data: ContactFormData) => Promise<void>;
}

const ContactForm: React.FC<ContactFormProps> = ({
  className = '',
  showCompanyFields = true,
  showServiceSelection = true,
  showBudgetTimeline = true,
  onSubmit
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
    newsletter: false
  });

  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string>('');
  const [currentStep, setCurrentStep] = useState(1);
  const [isValidating, setIsValidating] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);

  // Service options
  const serviceOptions = [
    { value: 'ai-consciousness', label: 'AI Consciousness Evolution Platform', category: 'AI & Consciousness' },
    { value: 'quantum-ai-fusion', label: 'Quantum AI Fusion Platform', category: 'Quantum Technology' },
    { value: 'autonomous-devops', label: 'Autonomous DevOps Intelligence', category: 'DevOps & Automation' },
    { value: 'edge-computing', label: 'Edge Computing Orchestration', category: 'Infrastructure' },
    { value: 'space-intelligence', label: 'Space Resource Intelligence', category: 'Space Technology' },
    { value: 'zero-trust-security', label: 'Zero Trust Network Architecture', category: 'Cybersecurity' },
    { value: 'custom-solution', label: 'Custom Solution Development', category: 'Custom Development' }
  ];

  // Budget options
  const budgetOptions = [
    { value: 'under-10k', label: 'Under $10,000' },
    { value: '10k-50k', label: '$10,000 - $50,000' },
    { value: '50k-100k', label: '$50,000 - $100,000' },
    { value: '100k-500k', label: '$100,000 - $500,000' },
    { value: '500k-plus', label: '$500,000+' },
    { value: 'discuss', label: 'Let\'s discuss' }
  ];

  // Timeline options
  const timelineOptions = [
    { value: 'asap', label: 'ASAP' },
    { value: '1-3-months', label: '1-3 months' },
    { value: '3-6-months', label: '3-6 months' },
    { value: '6-12-months', label: '6-12 months' },
    { value: '12-plus-months', label: '12+ months' },
    { value: 'flexible', label: 'Flexible' }
  ];

  // Focus first input on mount
  useEffect(() => {
    if (firstInputRef.current) {
      firstInputRef.current.focus();
    }
  }, []);

  // Validation rules
  const validationRules: Record<keyof ContactFormErrors, (value: string) => string | null> = {
    firstName: (value: string) => value.trim().length >= 2 ? null : 'First name must be at least 2 characters',
    lastName: (value: string) => value.trim().length >= 2 ? null : 'Last name must be at least 2 characters',
    email: (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? null : 'Please enter a valid email address',
    phone: (value: string) => value.trim().length === 0 || /^[+]?[1-9][\d]{0,15}$/.test(value.replace(/\s/g, '')) ? null : 'Please enter a valid phone number',
    company: (value: string) => value.trim().length >= 2 ? null : 'Company name must be at least 2 characters',
    website: (value: string) => value.trim().length === 0 || /^https?:\/\/.+/.test(value) ? null : 'Please enter a valid website URL',
    service: (value: string) => value.trim().length > 0 ? null : 'Please select a service',
    message: (value: string) => value.trim().length >= 10 ? null : 'Message must be at least 10 characters',
    budget: (value: string) => value.trim().length > 0 ? null : 'Please select a budget range',
    timeline: (value: string) => value.trim().length > 0 ? null : 'Please select a timeline'
  };

  // Validate field
  const validateField = (name: keyof ContactFormErrors, value: string): string | null => {
    const rule = validationRules[name];
    if (rule) {
      return rule(value);
    }
    return null;
  };

  // Validate form
  const validateForm = (): boolean => {
    setIsValidating(true);
    const newErrors: ContactFormErrors = {};

    // Only validate string fields that have validation rules
    const stringFields: (keyof ContactFormErrors)[] = ['firstName', 'lastName', 'email', 'phone', 'company', 'website', 'service', 'message', 'budget', 'timeline'];
    
    stringFields.forEach((fieldName) => {
      const value = formData[fieldName];
      if (typeof value === 'string') {
        const error = validateField(fieldName, value);
        if (error) {
          newErrors[fieldName] = error;
        }
      }
    });

    setErrors(newErrors);
    setIsValidating(false);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input change
  const handleInputChange = (name: keyof ContactFormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof ContactFormErrors]) {
      setErrors(prev => ({ ...prev, [name as keyof ContactFormErrors]: undefined }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      // Scroll to first error
      const firstErrorField = Object.keys(errors)[0];
      if (firstErrorField) {
        const element = document.getElementById(firstErrorField);
        element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');

    try {
      if (onSubmit) {
        await onSubmit(formData);
      } else {
        // Default submission logic
        await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API call
      }
      
      setIsSubmitted(true);
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
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Reset form
  const handleReset = () => {
    setIsSubmitted(false);
    setSubmitError('');
    setErrors({});
    setCurrentStep(1);
  };

  // Next step
  const handleNextStep = () => {
    if (currentStep === 1) {
      const step1Fields = ['firstName', 'lastName', 'email'];
      const step1Valid = step1Fields.every(field => !errors[field as keyof ContactFormErrors] && formData[field as keyof ContactFormData]);
      
      if (step1Valid) {
        setCurrentStep(2);
      } else {
        // Validate step 1
        const newErrors: ContactFormErrors = {};
        step1Fields.forEach(field => {
          const fieldName = field as keyof ContactFormErrors;
          const error = validateField(fieldName, formData[field as keyof ContactFormData] as string);
          if (error) newErrors[fieldName] = error;
        });
        setErrors(newErrors);
      }
    }
  };

  // Previous step
  const handlePrevStep = () => {
    setCurrentStep(Math.max(1, currentStep - 1));
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`max-w-2xl mx-auto text-center p-8 ${className}`}
      >
        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-400" />
        </div>
        
        <h2 className="text-3xl font-bold text-white mb-4">Thank You!</h2>
        <p className="text-gray-300 mb-8">
          Your message has been sent successfully. Our team will get back to you within 24 hours.
        </p>
        
        <button
          onClick={handleReset}
          className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
        >
          Send Another Message
        </button>
      </motion.div>
    );
  }

  return (
    <div className={`max-w-4xl mx-auto ${className}`}>
      {/* Contact Information */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div>
          <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
          <p className="text-gray-300 text-lg mb-8">
            Ready to transform your business with revolutionary 2045 technology? 
            Let's discuss how we can help you achieve your goals.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-white font-semibold">Email</div>
                <div className="text-gray-400">kleber@ziontechgroup.com</div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-white font-semibold">Phone</div>
                <div className="text-gray-400">+1 302 464 0950</div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-white font-semibold">Address</div>
                <div className="text-gray-400">364 E Main St STE 1008<br />Middletown DE 19709</div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            {/* Step Indicator */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                  currentStep >= 1 ? 'bg-cyan-500 text-white' : 'bg-gray-700 text-gray-400'
                }`}>
                  1
                </div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                  currentStep >= 2 ? 'bg-cyan-500 text-white' : 'bg-gray-700 text-gray-400'
                }`}>
                  2
                </div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                  currentStep >= 3 ? 'bg-cyan-500 text-white' : 'bg-gray-700 text-gray-400'
                }`}>
                  3
                </div>
              </div>
              
              <div className="text-sm text-gray-400">
                Step {currentStep} of 3
              </div>
            </div>

            {/* Step 1: Basic Information */}
            <AnimatePresence mode="wait">
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                        First Name *
                      </label>
                      <input
                        ref={firstInputRef}
                        type="text"
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        className={`w-full px-4 py-3 bg-gray-800/50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all duration-200 ${
                          errors.firstName ? 'border-red-500' : 'border-gray-600 focus:border-cyan-500'
                        }`}
                        placeholder="Enter your first name"
                        aria-describedby={errors.firstName ? 'firstName-error' : undefined}
                      />
                      {errors.firstName && (
                        <p id="firstName-error" className="mt-1 text-sm text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.firstName}
                        </p>
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
                        className={`w-full px-4 py-3 bg-gray-800/50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all duration-200 ${
                          errors.lastName ? 'border-red-500' : 'border-gray-600 focus:border-cyan-500'
                        }`}
                        placeholder="Enter your last name"
                        aria-describedby={errors.lastName ? 'lastName-error' : undefined}
                      />
                      {errors.lastName && (
                        <p id="lastName-error" className="mt-1 text-sm text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.lastName}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className={`w-full px-4 py-3 bg-gray-800/50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all duration-200 ${
                        errors.email ? 'border-red-500' : 'border-gray-600 focus:border-cyan-500'
                      }`}
                      placeholder="Enter your email address"
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1 text-sm text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.email}
                      </p>
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
                      className={`w-full px-4 py-3 bg-gray-800/50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all duration-200 ${
                        errors.phone ? 'border-red-500' : 'border-gray-600 focus:border-cyan-500'
                      }`}
                      placeholder="Enter your phone number (optional)"
                      aria-describedby={errors.phone ? 'phone-error' : undefined}
                    />
                    {errors.phone && (
                      <p id="phone-error" className="mt-1 text-sm text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Step 2: Company & Service Information */}
            <AnimatePresence mode="wait">
              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4"
                >
                  {showCompanyFields && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          className={`w-full px-4 py-3 bg-gray-800/50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all duration-200 ${
                            errors.company ? 'border-red-500' : 'border-gray-600 focus:border-cyan-500'
                          }`}
                          placeholder="Enter your company name"
                          aria-describedby={errors.company ? 'company-error' : undefined}
                        />
                        {errors.company && (
                          <p id="company-error" className="mt-1 text-sm text-red-400 flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" />
                            {errors.company}
                          </p>
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
                          className={`w-full px-4 py-3 bg-gray-800/50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all duration-200 ${
                            errors.website ? 'border-red-500' : 'border-gray-600 focus:border-cyan-500'
                          }`}
                          placeholder="https://yourcompany.com (optional)"
                          aria-describedby={errors.website ? 'website-error' : undefined}
                        />
                        {errors.website && (
                          <p id="website-error" className="mt-1 text-sm text-red-400 flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" />
                            {errors.website}
                          </p>
                        )}
                      </div>
                    </div>
                  )}
                  
                  {showServiceSelection && (
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                        Service of Interest *
                      </label>
                      <select
                        id="service"
                        value={formData.service}
                        onChange={(e) => handleInputChange('service', e.target.value)}
                        className={`w-full px-4 py-3 bg-gray-800/50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all duration-200 ${
                          errors.service ? 'border-red-500' : 'border-gray-600 focus:border-cyan-500'
                        }`}
                        aria-describedby={errors.service ? 'service-error' : undefined}
                      >
                        <option value="">Select a service</option>
                        {serviceOptions.map((service) => (
                          <option key={service.value} value={service.value}>
                            {service.label}
                          </option>
                        ))}
                      </select>
                      {errors.service && (
                        <p id="service-error" className="mt-1 text-sm text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.service}
                        </p>
                      )}
                    </div>
                  )}
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className={`w-full px-4 py-3 bg-gray-800/50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all duration-200 resize-none ${
                        errors.message ? 'border-red-500' : 'border-gray-600 focus:border-cyan-500'
                      }`}
                      placeholder="Tell us about your project, goals, and requirements..."
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    {errors.message && (
                      <p id="message-error" className="mt-1 text-sm text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.message}
                      </p>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Step 3: Budget & Timeline */}
            <AnimatePresence mode="wait">
              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4"
                >
                  {showBudgetTimeline && (
                    <>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                            Budget Range *
                          </label>
                          <select
                            id="budget"
                            value={formData.budget}
                            onChange={(e) => handleInputChange('budget', e.target.value)}
                            className={`w-full px-4 py-3 bg-gray-800/50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all duration-200 ${
                              errors.budget ? 'border-red-500' : 'border-gray-600 focus:border-cyan-500'
                            }`}
                            aria-describedby={errors.budget ? 'budget-error' : undefined}
                          >
                            <option value="">Select budget range</option>
                            {budgetOptions.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                          {errors.budget && (
                            <p id="budget-error" className="mt-1 text-sm text-red-400 flex items-center gap-1">
                              <AlertCircle className="w-4 h-4" />
                              {errors.budget}
                            </p>
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
                            className={`w-full px-4 py-3 bg-gray-800/50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all duration-200 ${
                              errors.timeline ? 'border-red-500' : 'border-gray-600 focus:border-cyan-500'
                            }`}
                            aria-describedby={errors.timeline ? 'timeline-error' : undefined}
                          >
                            <option value="">Select timeline</option>
                            {timelineOptions.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                          {errors.timeline && (
                            <p id="timeline-error" className="mt-1 text-sm text-red-400 flex items-center gap-1">
                              <AlertCircle className="w-4 h-4" />
                              {errors.timeline}
                            </p>
                          )}
                        </div>
                      </div>
                    </>
                  )}
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3">
                      Preferred Contact Method
                    </label>
                    <div className="flex gap-4">
                      {['email', 'phone'].map((method) => (
                        <label key={method} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="preferredContact"
                            value={method}
                            checked={formData.preferredContact === method}
                            onChange={(e) => handleInputChange('preferredContact', e.target.value)}
                            className="w-4 h-4 text-cyan-500 bg-gray-800 border-gray-600 focus:ring-cyan-500/50"
                          />
                          <span className="text-gray-300 capitalize">{method}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="newsletter"
                      checked={formData.newsletter}
                      onChange={(e) => handleInputChange('newsletter', e.target.checked)}
                      className="w-4 h-4 text-cyan-500 bg-gray-800 border-gray-600 rounded focus:ring-cyan-500/50"
                    />
                    <label htmlFor="newsletter" className="text-sm text-gray-300 cursor-pointer">
                      Subscribe to our newsletter for technology insights and updates
                    </label>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between pt-4">
              <button
                type="button"
                onClick={handlePrevStep}
                disabled={currentStep === 1}
                className="px-6 py-3 text-gray-400 border border-gray-600 rounded-xl hover:border-gray-500 hover:text-gray-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              
              <div className="flex gap-3">
                {currentStep < 3 ? (
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                  >
                    Next Step
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting || isValidating}
                    className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>

            {/* Error Message */}
            {submitError && (
              <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-xl">
                <p className="text-red-400 text-sm flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  {submitError}
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;