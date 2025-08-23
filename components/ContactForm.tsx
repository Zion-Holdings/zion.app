import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Send, CheckCircle, AlertCircle,
  Globe, Clock
} from 'lucide-react';

interface FormData {
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

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
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
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const services = [
    { value: 'ai-ml', label: 'AI & Machine Learning', icon: '🧠' },
    { value: 'quantum-computing', label: 'Quantum Computing', icon: '⚛️' },
    { value: 'space-technology', label: 'Space Technology', icon: '🚀' },
    { value: 'enterprise-it', label: 'Enterprise IT Solutions', icon: '🏢' },
    { value: 'cybersecurity', label: 'Cybersecurity', icon: '🔒' },
    { value: 'cloud-solutions', label: 'Cloud Solutions', icon: '☁️' },
    { value: 'process-automation', label: 'Process Automation', icon: '⚡' },
    { value: 'custom-development', label: 'Custom Development', icon: '💻' }
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

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'firstName':
      case 'lastName':
        return value.trim().length < 2 ? 'Must be at least 2 characters' : '';
      case 'email': {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !emailRegex.test(value) ? 'Please enter a valid email address' : '';
      }
      case 'company':
        return value.trim().length < 2 ? 'Company name is required' : '';
      case 'phone': {
        const phoneRegex = /^[+]?[1-9][\d]{0,15}$/;
        return value && !phoneRegex.test(value.replace(/[\s\-()]/g, '')) ? 'Please enter a valid phone number' : '';
      }
      case 'service':
        return !value ? 'Please select a service' : '';
      case 'message':
        return value.trim().length < 10 ? 'Message must be at least 10 characters' : '';
      case 'budget':
        return !value ? 'Please select a budget range' : '';
      case 'timeline':
        return !value ? 'Please select a timeline' : '';
      default:
        return '';
    }
  };

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleBlur = (name: string) => {
    const error = validateField(name, formData[name]);
    if (error) {
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key as keyof FormData]);
      if (error) {
        newErrors[key] = error;
      }
    });
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Track conversion
      if (typeof window !== 'undefined' && 'gtag' in window) {
        (window as { gtag: Function }).gtag('event', 'form_submit', {
          event_category: 'conversion',
          event_label: 'contact_form',
          value: 25
        });
      }
      
      setIsSubmitted(true);
      setCurrentStep(4);
    } catch (error) {
      // Log error (in production, this would go to error tracking service)
      if (process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line no-console
        console.error('Error submitting form:', error);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStep1 = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white mb-2">Tell Us About You</h3>
        <p className="text-gray-300">Let's start with some basic information</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            First Name *
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={(e) => handleInputChange('firstName', e.target.value)}
            onBlur={() => handleBlur('firstName')}
            className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300 ${
              errors.firstName ? 'border-red-500' : 'border-white/20'
            }`}
            placeholder="Enter your first name"
          />
          {errors.firstName && (
            <p className="text-red-400 text-sm mt-1 flex items-center">
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
            name="lastName"
            value={formData.lastName}
            onChange={(e) => handleInputChange('lastName', e.target.value)}
            onBlur={() => handleBlur('lastName')}
            className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300 ${
              errors.lastName ? 'border-red-500' : 'border-white/20'
            }`}
            placeholder="Enter your last name"
          />
          {errors.lastName && (
            <p className="text-red-400 text-sm mt-1 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.lastName}
            </p>
          )}
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Email Address *
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
          onBlur={() => handleBlur('email')}
          className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300 ${
            errors.email ? 'border-red-500' : 'border-white/20'
          }`}
          placeholder="Enter your email address"
        />
        {errors.email && (
          <p className="text-red-400 text-sm mt-1 flex items-center">
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
          name="company"
          value={formData.company}
          onChange={(e) => handleInputChange('company', e.target.value)}
          onBlur={() => handleBlur('company')}
          className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300 ${
            errors.company ? 'border-red-500' : 'border-white/20'
          }`}
          placeholder="Enter your company name"
        />
        {errors.company && (
          <p className="text-red-400 text-sm mt-1 flex items-center">
            <AlertCircle className="w-4 h-4 mr-1" />
            {errors.company}
          </p>
        )}
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={(e) => handleInputChange('phone', e.target.value)}
          onBlur={() => handleBlur('phone')}
          className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300 ${
            errors.phone ? 'border-red-500' : 'border-white/20'
          }`}
          placeholder="Enter your phone number (optional)"
        />
        {errors.phone && (
          <p className="text-red-400 text-sm mt-1 flex items-center">
            <AlertCircle className="w-4 h-4 mr-1" />
            {errors.phone}
          </p>
        )}
      </div>
      
      <div className="flex justify-end">
        <button
          type="button"
          onClick={nextStep}
          disabled={!formData.firstName || !formData.lastName || !formData.email || !formData.company}
          className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          Next Step
        </button>
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
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white mb-2">Project Details</h3>
        <p className="text-gray-300">Help us understand your needs better</p>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Service Interest *
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {services.map((service) => (
            <label
              key={service.value}
              className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all duration-300 ${
                formData.service === service.value
                  ? 'border-cyan-400 bg-cyan-400/10'
                  : 'border-white/20 hover:border-cyan-400/50'
              }`}
            >
              <input
                type="radio"
                name="service"
                value={service.value}
                checked={formData.service === service.value}
                onChange={(e) => handleInputChange('service', e.target.value)}
                className="sr-only"
              />
              <span className="text-2xl mr-3">{service.icon}</span>
              <span className="text-white">{service.label}</span>
            </label>
          ))}
        </div>
        {errors.service && (
          <p className="text-red-400 text-sm mt-1 flex items-center">
            <AlertCircle className="w-4 h-4 mr-1" />
            {errors.service}
          </p>
        )}
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Budget Range *
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {budgets.map((budget) => (
            <label
              key={budget.value}
              className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all duration-300 ${
                formData.budget === budget.value
                  ? 'border-cyan-400 bg-cyan-400/10'
                  : 'border-white/20 hover:border-cyan-400/50'
              }`}
            >
              <input
                type="radio"
                name="budget"
                value={budget.value}
                checked={formData.budget === budget.value}
                onChange={(e) => handleInputChange('budget', e.target.value)}
                className="sr-only"
              />
              <span className="text-white">{budget.label}</span>
            </label>
          ))}
        </div>
        {errors.budget && (
          <p className="text-red-400 text-sm mt-1 flex items-center">
            <AlertCircle className="w-4 h-4 mr-1" />
            {errors.budget}
          </p>
        )}
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Timeline *
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {timelines.map((timeline) => (
            <label
              key={timeline.value}
              className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all duration-300 ${
                formData.timeline === timeline.value
                  ? 'border-cyan-400 bg-cyan-400/10'
                  : 'border-white/20 hover:border-cyan-400/50'
              }`}
            >
              <input
                type="radio"
                name="timeline"
                value={timeline.value}
                checked={formData.timeline === timeline.value}
                onChange={(e) => handleInputChange('timeline', e.target.value)}
                className="sr-only"
              />
              <span className="text-white">{timeline.label}</span>
            </label>
          ))}
        </div>
        {errors.timeline && (
          <p className="text-red-400 text-sm mt-1 flex items-center">
            <AlertCircle className="w-4 h-4 mr-1" />
            {errors.timeline}
          </p>
        )}
      </div>
      
      <div className="flex justify-between">
        <button
          type="button"
          onClick={prevStep}
          className="px-8 py-3 border-2 border-gray-400 text-gray-400 font-semibold rounded-lg hover:border-white hover:text-white transition-all duration-300"
        >
          Previous
        </button>
        <button
          type="button"
          onClick={nextStep}
          disabled={!formData.service || !formData.budget || !formData.timeline}
          className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          Next Step
        </button>
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
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white mb-2">Project Description</h3>
        <p className="text-gray-300">Tell us more about your project</p>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Project Description *
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={(e) => handleInputChange('message', e.target.value)}
          onBlur={() => handleBlur('message')}
          rows={6}
          className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300 resize-none ${
            errors.message ? 'border-red-500' : 'border-white/20'
          }`}
          placeholder="Describe your project, goals, and any specific requirements..."
        />
        {errors.message && (
          <p className="text-red-400 text-sm mt-1 flex items-center">
            <AlertCircle className="w-4 h-4 mr-1" />
            {errors.message}
          </p>
        )}
      </div>
      
      <div className="flex justify-between">
        <button
          type="button"
          onClick={prevStep}
          className="px-8 py-3 border-2 border-gray-400 text-gray-400 font-semibold rounded-lg hover:border-white hover:text-white transition-all duration-300"
        >
          Previous
        </button>
        <button
          type="submit"
          disabled={isSubmitting || !formData.message}
          className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center gap-2"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Submitting...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Submit Project
            </>
          )}
        </button>
      </div>
    </motion.div>
  );

  const renderSuccess = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center py-12"
    >
      <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
        <CheckCircle className="w-12 h-12 text-white" />
      </div>
      
      <h3 className="text-3xl font-bold text-white mb-4">Thank You!</h3>
      <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
        Your project has been submitted successfully. Our team will review your requirements and get back to you within 24 hours.
      </p>
      
      <div className="bg-white/5 border border-white/10 rounded-lg p-6 max-w-md mx-auto">
        <h4 className="text-lg font-semibold text-white mb-4">What happens next?</h4>
        <div className="space-y-3 text-left">
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center">
              <span className="text-black text-xs font-bold">1</span>
            </div>
            <span className="text-gray-300">We'll review your project details</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center">
              <span className="text-black text-xs font-bold">2</span>
            </div>
            <span className="text-gray-300">Schedule a consultation call</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center">
              <span className="text-black text-xs font-bold">3</span>
            </div>
            <span className="text-gray-300">Provide a detailed proposal</span>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderProgressBar = () => (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-gray-400">Step {currentStep} of 3</span>
        <span className="text-sm text-cyan-400">{Math.round((currentStep / 3) * 100)}% Complete</span>
      </div>
      <div className="w-full bg-white/10 rounded-full h-2">
        <div
          className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full transition-all duration-500"
          style={{ width: `${(currentStep / 3) * 100}%` }}
        ></div>
      </div>
    </div>
  );

  if (isSubmitted) {
    return renderSuccess();
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-black/30 backdrop-blur-xl border border-cyan-400/30 rounded-2xl p-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-white mb-4">Get Started Today</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to transform your business with cutting-edge technology? Let's discuss your project and create something extraordinary together.
          </p>
        </div>
        
        {renderProgressBar()}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {currentStep === 1 && renderStep1()}
          {currentStep === 2 && renderStep2()}
          {currentStep === 3 && renderStep3()}
        </form>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-cyan-400/20 rounded-full flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-cyan-400" />
            </div>
            <h4 className="text-white font-semibold mb-2">24-Hour Response</h4>
            <p className="text-gray-400 text-sm">We'll get back to you within 24 hours</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-blue-400/20 rounded-full flex items-center justify-center mb-4">
              <Globe className="w-6 h-6 text-blue-400" />
            </div>
            <h4 className="text-white font-semibold mb-2">Global Expertise</h4>
            <p className="text-gray-400 text-sm">Serving clients worldwide with proven solutions</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-purple-400/20 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="w-6 h-6 text-purple-400" />
            </div>
            <h4 className="text-white font-semibold mb-2">Proven Results</h4>
            <p className="text-gray-400 text-sm">Successfully delivered 100+ projects</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;