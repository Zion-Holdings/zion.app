import React, { useState, useEffect, useCallback } from 'react';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { cn } from '@/lib/utils';
import { CheckCircle, AlertCircle, Eye, EyeOff } from 'lucide-react';
import type { Control, FieldValues } from 'react-hook-form';




import { Button } from '@/components/ui/button';

interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: unknown) => string | null;
}

interface ValidatedFormFieldProps {
  name: string;
  label: string;
  type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number' | 'textarea' | 'select' | 'checkbox';
  placeholder?: string;
  description?: string;
  validation?: ValidationRule;
  options?: { value: string; label: string }[];
  form: unknown; // React Hook Form control, use unknown for type safety
  className?: string;
  disabled?: boolean;
  showValidIcon?: boolean;
  debounceMs?: number;
}

function isReactHookForm(form: unknown): form is { watch: (name: string) => unknown; formState: { errors: Record<string, unknown>; touchedFields: Record<string, boolean> }; register: (name: string) => unknown; setValue: (name: string, value: unknown) => void; control: unknown } {
  return (
    typeof form === 'object' &&
    form !== null &&
    'watch' in form && typeof (form as { watch?: unknown }).watch === 'function' &&
    'formState' in form && typeof (form as { formState?: unknown }).formState === 'object' &&
    'register' in form && typeof (form as { register?: unknown }).register === 'function' &&
    'setValue' in form && typeof (form as { setValue?: unknown }).setValue === 'function' &&
    'control' in form
  );
}

export function ValidatedFormField({
  name,
  label,
  type = 'text',
  placeholder,
  description,
  validation = {},
  options = [],
  form,
  className,
  disabled = false,
  showValidIcon = true,
  debounceMs = 300,
}: ValidatedFormFieldProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [validationState, setValidationState] = useState<'idle' | 'validating' | 'valid' | 'invalid'>('idle');
  const [debounceTimer, setDebounceTimer] = useState<NodeJS.Timeout | null>(null);

  const fieldValue = isReactHookForm(form) ? form.watch(name) : undefined;
  const fieldError = isReactHookForm(form) ? form.formState.errors[name] : undefined;
  const isTouched = isReactHookForm(form) ? form.formState.touchedFields[name] : false;

  const validateField = useCallback((value: unknown): string | null => {
    if (validation.required && (!value || (typeof value === 'string' && value.trim() === ''))) {
      return `${label} is required`;
    }

    if (typeof value === 'string') {
      if (validation.minLength && value.length < validation.minLength) {
        return `${label} must be at least ${validation.minLength} characters`;
      }

      if (validation.maxLength && value.length > validation.maxLength) {
        return `${label} must not exceed ${validation.maxLength} characters`;
      }

      if (validation.pattern && !validation.pattern.test(value)) {
        return `${label} format is invalid`;
      }
    }

    if (validation.custom) {
      return validation.custom(value);
    }

    return null;
  }, [validation, label]);

  useEffect(() => {
    if (!fieldValue || !isTouched) {
      setValidationState('idle');
      return;
    }

    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }

    setValidationState('validating');

    const timer = setTimeout(() => {
      const error = validateField(fieldValue);
      setValidationState(error ? 'invalid' : 'valid');
    }, debounceMs);

    setDebounceTimer(timer);

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [fieldValue, isTouched, debounceMs, debounceTimer, validateField]);

  const getValidationIcon = () => {
    if (!showValidIcon || !isTouched || validationState === 'idle') return null;

    switch (validationState) {
      case 'validating':
        return <div className="animate-spin h-4 w-4 border-2 border-primary border-t-transparent rounded-full" />;
      case 'valid':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'invalid':
        return <AlertCircle className="h-4 w-4 text-red-500" />;
      default:
        return null;
    }
  };

  const getFieldClasses = () => {
    if (!isTouched) return '';
    
    switch (validationState) {
      case 'valid':
        return 'border-green-500 focus:border-green-500 focus:ring-green-500/20';
      case 'invalid':
        return 'border-red-500 focus:border-red-500 focus:ring-red-500/20';
      default:
        return '';
    }
  };

  const renderField = () => {
    const baseClasses = cn(getFieldClasses(), className);
    const registerProps = isReactHookForm(form) ? form.register(name) : {};
    const safeRegisterProps = typeof registerProps === 'object' && registerProps !== null ? registerProps : {};

    switch (type) {
      case 'textarea':
        return (
          <div className="relative">
            <Textarea
              placeholder={placeholder}
              disabled={disabled}
              className={baseClasses}
              rows={4}
              {...safeRegisterProps}
            />
            <div className="absolute top-2 right-2">
              {getValidationIcon()}
            </div>
          </div>
        );

      case 'select':
        return (
          <div className="relative">
            <Select onValueChange={(value) => isReactHookForm(form) && form.setValue(name, value)} disabled={disabled}>
              <SelectTrigger className={baseClasses}>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
              <SelectContent>
                {options.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <div className="absolute top-2 right-8">
              {getValidationIcon()}
            </div>
          </div>
        );

      case 'checkbox':
        return (
          <div className="flex items-center space-x-2">
            <Checkbox
              id={name}
              checked={typeof fieldValue === 'boolean' ? fieldValue : !!fieldValue}
              onCheckedChange={(checked) => isReactHookForm(form) && form.setValue(name, !!checked)}
              disabled={disabled}
            />
            <label
              htmlFor={name}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {label}
            </label>
            {getValidationIcon()}
          </div>
        );

      case 'password':
        return (
          <div className="relative">
            <Input
              type={showPassword ? 'text' : 'password'}
              placeholder={placeholder}
              disabled={disabled}
              className={cn(baseClasses, 'pr-20')}
              {...safeRegisterProps}
            />
            <div className="absolute inset-y-0 right-0 flex items-center gap-1 pr-3">
              {getValidationIcon()}
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="h-7 w-7 p-0"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>
        );

      default:
        return (
          <div className="relative">
            <Input
              type={type}
              placeholder={placeholder}
              disabled={disabled}
              className={baseClasses}
              {...safeRegisterProps}
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              {getValidationIcon()}
            </div>
          </div>
        );
    }
  };

  // Helper to safely render error messages as strings
  function errorToString(error: unknown): string {
    if (!error) return '';
    if (typeof error === 'string') return error;
    if (typeof error === 'object' && error !== null && 'message' in error && typeof (error as { message?: unknown }).message === 'string') {
      return (error as { message: string }).message;
    }
    return '';
  }

  if (type === 'checkbox') {
    if (!isReactHookForm(form)) return null;
    return (
      <FormField
        control={form.control as Control<FieldValues>}
        name={name}
        render={() => (
          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
            <FormControl>
              {renderField()}
            </FormControl>
            {(fieldError || description) && (
              <div className="space-y-1">
                {errorToString(fieldError ?? '') && (
                  <FormMessage className="text-sm text-red-500">
                    {errorToString(fieldError ?? '')}
                  </FormMessage>
                )}
                {description && (!fieldError || !(typeof fieldError === 'object' && fieldError !== null && 'message' in fieldError && typeof (fieldError as { message?: unknown }).message === 'string')) && (
                  <p className="text-sm text-muted-foreground">{description}</p>
                )}
              </div>
            )}
          </FormItem>
        )}
      />
    );
  }

  if (!isReactHookForm(form)) return null;
  return (
    <FormField
      control={form.control as Control<FieldValues>}
      name={name}
      render={() => (
        <FormItem>
          <FormLabel className="text-sm font-medium">
            {label}
            {validation.required && <span className="text-red-500 ml-1">*</span>}
          </FormLabel>
          <FormControl>
            {renderField()}
          </FormControl>
          {(fieldError || description) && (
            <div className="space-y-1">
              {errorToString(fieldError ?? '') && (
                <FormMessage className="text-sm text-red-500 flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  {errorToString(fieldError ?? '')}
                </FormMessage>
              )}
              {description && (!fieldError || !(typeof fieldError === 'object' && fieldError !== null && 'message' in fieldError && typeof (fieldError as { message?: unknown }).message === 'string')) && (
                <p className="text-sm text-muted-foreground">{description}</p>
              )}
            </div>
          )}
        </FormItem>
      )}
    />
  );
}

// Validation helpers for common patterns
export const validationPatterns = {
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  phone: /^[+]?([1-9][\d]{0,15})$/,
  url: /^https?:\/\/.+/,
  strongPassword: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
};

// Pre-configured validation rules
export const commonValidations = {
  required: { required: true },
  email: { 
    required: true, 
    pattern: validationPatterns.email,
    custom: (value: string) => {
      if (value && !validationPatterns.email.test(value)) {
        return 'Please enter a valid email address';
      }
      return null;
    }
  },
  password: {
    required: true,
    minLength: 8,
    custom: (value: string) => {
      if (value && !validationPatterns.strongPassword.test(value)) {
        return 'Password must contain at least 8 characters with uppercase, lowercase, number, and special character';
      }
      return null;
    }
  },
  phone: {
    pattern: validationPatterns.phone,
    custom: (value: string) => {
      if (value && !validationPatterns.phone.test(value)) {
        return 'Please enter a valid phone number';
      }
      return null;
    }
  },
}; 