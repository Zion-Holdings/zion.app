import React from 'react';
import { AlertCircle, CheckCircle } from 'lucide-react';

export interface FormFieldProps {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'textarea';
  placeholder?: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: string;
  success?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  rows?: number;
  min?: number;
  max?: number;
  step?: number;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  type = 'text',
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  success,
  required = false,
  disabled = false,
  className = '',
  rows = 4,
  min,
  max,
  step
}) => {
  const inputId = `form-${name}`;
  const hasError = !!error;
  const hasSuccess = !!success;

  const baseInputClasses = `
    w-full px-3 py-2 border rounded-md transition-colors duration-200
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
    disabled:bg-gray-100 disabled:cursor-not-allowed
    ${hasError ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : ''}
    ${hasSuccess ? 'border-green-300 focus:ring-green-500 focus:border-green-500' : ''}
    ${!hasError && !hasSuccess ? 'border-gray-300' : ''}
  `;

  const renderInput = () => {
    if (type === 'textarea') {
      return (
        <textarea
          id={inputId}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          rows={rows}
          className={`${baseInputClasses} resize-vertical`}
        />
      );
    }

    return (
      <input
        id={inputId}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        min={min}
        max={max}
        step={step}
        className={baseInputClasses}
      />
    );
  };

  return (
    <div className={`space-y-2 ${className}`}>
      <label htmlFor={inputId} className="block text-sm font-medium text-gray-700">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      
      {renderInput()}
      
      {/* Error Message */}
      {hasError && (
        <div className="flex items-center space-x-2 text-sm text-red-600">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}
      
      {/* Success Message */}
      {hasSuccess && (
        <div className="flex items-center space-x-2 text-sm text-green-600">
          <CheckCircle className="w-4 h-4 flex-shrink-0" />
          <span>{success}</span>
        </div>
      )}
    </div>
  );
};