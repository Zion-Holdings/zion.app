import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, 
  CheckCircle, 
  AlertCircle, 
  Eye, 
  EyeOff, 
  Loader2,
  Phone,
  Mail,
  User,
  MessageSquare,
  Building
} from 'lucide-react';
import { useAnalytics } from '../hooks/useAnalytics';

interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox';
  placeholder?: string;
  required?: boolean;
  validation?: {
    pattern?: RegExp;
    minLength?: number;
    maxLength?: number;
    custom?: (value: string) => string | null;
  };
  options?: { value: string; label: string }[];
}

interface FormData {
  [key: string]: string | boolean;
}

interface FormValidation {
  [key: string]: {
    isValid: boolean;
    message: string;
    isTouched: boolean;
  };
}

interface AdvancedFormProps {
  fields: FormField[];
  onSubmit: (data: FormData) => Promise<void>;
  title?: string;
  subtitle?: string;
  submitText?: string;
  className?: string;
  enableAnalytics?: boolean;
  showProgressBar?: boolean;
}

export const AdvancedForm: React.FC<AdvancedFormProps> = ({
  fields,
  onSubmit,
  title = 'Contact Us',
  subtitle = 'Get in touch with our team',
  submitText = 'Send Message',
  className = '',
  enableAnalytics = true,
  showProgressBar = true
}) => {
  const { trackEvent, trackConversion } = useAnalytics({
    enableTracking: enableAnalytics,
    enableUserBehaviorTracking: true
  });

  const [formData, setFormData] = useState<FormData>({});
  const [validation, setValidation] = useState<FormValidation>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState<Record<string, boolean>>({});
  const [progress, setProgress] = useState(0);

  // Initialize form data and validation
  useEffect(() => {
    const initialData: FormData = {};
    const initialValidation: FormValidation = {};

    fields.forEach(field => {
      initialData[field.name] = field.type === 'checkbox' ? false : '';
      initialValidation[field.name] = {
        isValid: !field.required,
        message: '',
        isTouched: false
      };
    });

    setFormData(initialData);
    setValidation(initialValidation);
  }, [fields]);

  // Update progress based on filled fields
  useEffect(() => {
    const filledFields = Object.values(formData).filter(value => 
      typeof value === 'boolean' ? value : value.toString().trim() !== ''
    ).length;
    
    const totalFields = fields.length;
    setProgress((filledFields / totalFields) * 100);
  }, [formData, fields.length]);

  // Validate field
  const validateField = useCallback((name: string, value: string | boolean): string | null => {
    const field = fields.find(f => f.name === name);
    if (!field) return null;

    // Required field validation
    if (field.required) {
      if (typeof value === 'boolean' && !value) {
        return 'This field is required';
      }
      if (typeof value === 'string' && value.trim() === '') {
        return 'This field is required';
      }
    }

    // Skip validation for empty non-required fields
    if (!field.required && (typeof value === 'string' && value.trim() === '')) {
      return null;
    }

    // Type-specific validation
    if (typeof value === 'string') {
      const stringValue = value.trim();

      // Email validation
      if (field.type === 'email' && stringValue) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(stringValue)) {
          return 'Please enter a valid email address';
        }
      }

      // Phone validation
      if (field.type === 'tel' && stringValue) {
        const phonePattern = /^[\+]?[1-9][\d]{0,15}$/;
        if (!phonePattern.test(stringValue.replace(/[\s\-\(\)]/g, ''))) {
          return 'Please enter a valid phone number';
        }
      }

      // Length validation
      if (field.validation?.minLength && stringValue.length < field.validation.minLength) {
        return `Minimum length is ${field.validation.minLength} characters`;
      }

      if (field.validation?.maxLength && stringValue.length > field.validation.maxLength) {
        return `Maximum length is ${field.validation.maxLength} characters`;
      }

      // Pattern validation
      if (field.validation?.pattern && !field.validation.pattern.test(stringValue)) {
        return 'Please enter a valid value';
      }

      // Custom validation
      if (field.validation?.custom) {
        const customError = field.validation.custom(stringValue);
        if (customError) return customError;
      }
    }

    return null;
  }, [fields]);

  // Handle field change
  const handleFieldChange = useCallback((name: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [name]: value }));

    // Validate field
    const error = validateField(name, value);
    setValidation(prev => ({
      ...prev,
      [name]: {
        isValid: !error,
        message: error || '',
        isTouched: true
      }
    }));

    // Track form interaction
    if (enableAnalytics) {
      trackEvent('form', 'field_changed', name, undefined, { fieldName: name, value: String(value) });
    }
  }, [validateField, enableAnalytics, trackEvent]);

  // Handle field blur
  const handleFieldBlur = useCallback((name: string) => {
    const value = formData[name];
    const error = validateField(name, value);
    
    setValidation(prev => ({
      ...prev,
      [name]: {
        ...prev[name],
        isValid: !error,
        message: error || '',
        isTouched: true
      }
    }));
  }, [formData, validateField]);

  // Check if form is valid
  const isFormValid = useCallback(() => {
    return Object.values(validation).every(v => v.isValid);
  }, [validation]);

  // Handle form submission
  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isFormValid()) {
      // Track validation error
      if (enableAnalytics) {
        trackEvent('form', 'validation_error', 'form_submission_failed', undefined, { 
          errors: Object.values(validation).filter(v => !v.isValid).length 
        });
      }
      return;
    }

    setIsSubmitting(true);

    try {
      // Track form submission start
      if (enableAnalytics) {
        trackEvent('form', 'submission_started', 'form_submitted');
      }

      await onSubmit(formData);
      
      // Track successful submission
      if (enableAnalytics) {
        trackEvent('form', 'submission_success', 'form_completed');
        trackConversion('form_submission', 1, { formType: title });
      }

      setIsSubmitted(true);
      
      // Reset form after successful submission
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({});
        setValidation({});
        setProgress(0);
      }, 5000);

    } catch (error) {
      // Track submission error
      if (enableAnalytics) {
        trackEvent('form', 'submission_error', 'form_failed', undefined, { 
          error: error instanceof Error ? error.message : 'Unknown error' 
        });
      }
      
      console.error('Form submission failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, validation, isFormValid, onSubmit, enableAnalytics, trackEvent, trackConversion, title]);

  // Toggle password visibility
  const togglePasswordVisibility = useCallback((fieldName: string) => {
    setShowPassword(prev => ({ ...prev, [fieldName]: !prev[fieldName] }));
  }, []);

  // Get field icon
  const getFieldIcon = useCallback((field: FormField) => {
    switch (field.type) {
      case 'email': return <Mail className="w-4 h-4" />;
      case 'tel': return <Phone className="w-4 h-4" />;
      case 'textarea': return <MessageSquare className="w-4 h-4" />;
      case 'select': return <Building className="w-4 h-4" />;
      default: return <User className="w-4 h-4" />;
    }
  }, []);

  // Render field
  const renderField = useCallback((field: FormField) => {
    const fieldValue = formData[field.name];
    const fieldValidation = validation[field.name];
    const isPasswordField = field.name.toLowerCase().includes('password');

    return (
      <motion.div
        key={field.name}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-2"
      >
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {field.label}
          {field.required && <span className="text-red-500 ml-1">*</span>}
        </label>

        <div className="relative">
          {/* Field Icon */}
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            {getFieldIcon(field)}
          </div>

          {/* Input Field */}
          {field.type === 'textarea' ? (
            <textarea
              name={field.name}
              value={fieldValue as string}
              onChange={(e) => handleFieldChange(field.name, e.target.value)}
              onBlur={() => handleFieldBlur(field.name)}
              placeholder={field.placeholder}
              className={`w-full pl-10 pr-3 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-200 ${
                fieldValidation?.isTouched
                  ? fieldValidation.isValid
                    ? 'border-green-500 focus:ring-green-200'
                    : 'border-red-500 focus:ring-red-200'
                  : 'border-gray-300 focus:ring-blue-200 focus:border-blue-500'
              }`}
              rows={4}
            />
          ) : field.type === 'select' ? (
            <select
              name={field.name}
              value={fieldValue as string}
              onChange={(e) => handleFieldChange(field.name, e.target.value)}
              onBlur={() => handleFieldBlur(field.name)}
              className={`w-full pl-10 pr-3 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-200 ${
                fieldValidation?.isTouched
                  ? fieldValidation.isValid
                    ? 'border-green-500 focus:ring-green-200'
                    : 'border-red-500 focus:ring-red-200'
                  : 'border-gray-300 focus:ring-blue-200 focus:border-blue-500'
              }`}
            >
              <option value="">Select an option</option>
              {field.options?.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          ) : field.type === 'checkbox' ? (
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                name={field.name}
                checked={fieldValue as boolean}
                onChange={(e) => handleFieldChange(field.name, e.target.checked)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {field.placeholder}
              </span>
            </div>
          ) : (
            <input
              type={isPasswordField && showPassword[field.name] ? 'text' : field.type}
              name={field.name}
              value={fieldValue as string}
              onChange={(e) => handleFieldChange(field.name, e.target.value)}
              onBlur={() => handleFieldBlur(field.name)}
              placeholder={field.placeholder}
              className={`w-full pl-10 pr-3 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-200 ${
                fieldValidation?.isTouched
                  ? fieldValidation.isValid
                    ? 'border-green-500 focus:ring-green-200'
                    : 'border-red-500 focus:ring-red-200'
                  : 'border-gray-300 focus:ring-blue-200 focus:border-blue-500'
              }`}
            />
          )}

          {/* Password Toggle */}
          {isPasswordField && (
            <button
              type="button"
              onClick={() => togglePasswordVisibility(field.name)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              {showPassword[field.name] ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          )}

          {/* Validation Icon */}
          {fieldValidation?.isTouched && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              {fieldValidation.isValid ? (
                <CheckCircle className="w-5 h-5 text-green-500" />
              ) : (
                <AlertCircle className="w-5 h-5 text-red-500" />
              )}
            </div>
          )}
        </div>

        {/* Validation Message */}
        {fieldValidation?.isTouched && fieldValidation.message && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="text-sm text-red-600 dark:text-red-400"
          >
            {fieldValidation.message}
          </motion.p>
        )}
      </motion.div>
    );
  }, [formData, validation, showPassword, getFieldIcon, handleFieldChange, handleFieldBlur, togglePasswordVisibility]);

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center p-8 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-700"
      >
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-green-800 dark:text-green-200 mb-2">
          Thank You!
        </h3>
        <p className="text-green-600 dark:text-green-300">
          Your message has been sent successfully. We'll get back to you soon!
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden ${className}`}
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-blue-100">{subtitle}</p>
      </div>

      {/* Progress Bar */}
      {showProgressBar && (
        <div className="px-6 pt-4">
          <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
            <span>Form Progress</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <motion.div
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {fields.map(field => renderField(field))}
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={!isFormValid() || isSubmitting}
          className={`w-full py-3 px-6 rounded-lg font-medium text-white transition-all duration-200 flex items-center justify-center gap-2 ${
            !isFormValid() || isSubmitting
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transform hover:scale-105'
          }`}
          whileHover={isFormValid() && !isSubmitting ? { scale: 1.02 } : {}}
          whileTap={isFormValid() && !isSubmitting ? { scale: 0.98 } : {}}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              {submitText}
            </>
          )}
        </motion.button>

        {/* Form Status */}
        <AnimatePresence>
          {Object.values(validation).some(v => !v.isValid && v.isTouched) && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-lg"
            >
              <p className="text-sm text-red-600 dark:text-red-400">
                Please fix the errors above before submitting the form.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </motion.div>
  );
};