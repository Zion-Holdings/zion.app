import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Search, Check, X } from 'lucide-react';

export interface DropdownOption {
  value: string;
  label: string;
  disabled?: boolean;
  icon?: React.ReactNode;
}

export interface DropdownProps {
  options: DropdownOption[];
  value?: string | string[];
  onChange: (value: string | string[]) => void;
  placeholder?: string;
  searchable?: boolean;
  multiSelect?: boolean;
  disabled?: boolean;
  className?: string;
  maxHeight?: string;
}

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  value,
  onChange,
  placeholder = 'Select an option...',
  searchable = false,
  multiSelect = false,
  disabled = false,
  className = '',
  maxHeight = 'max-h-60'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedValues = multiSelect ? (Array.isArray(value) ? value : []) : [value].filter(Boolean);
  const selectedOptions = options.filter(option => selectedValues.includes(option.value));

  const filteredOptions = options.filter(option =>
    searchable && searchTerm
      ? option.label.toLowerCase().includes(searchTerm.toLowerCase())
      : true
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearchTerm('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleOptionClick = (optionValue: string) => {
    if (multiSelect) {
      const newValues = selectedValues.includes(optionValue)
        ? selectedValues.filter(v => v !== optionValue)
        : [...selectedValues, optionValue];
      onChange(newValues);
    } else {
      onChange(optionValue);
      setIsOpen(false);
      setSearchTerm('');
    }
  };

  const removeSelected = (optionValue: string) => {
    if (multiSelect) {
      const newValues = selectedValues.filter(v => v !== optionValue);
      onChange(newValues);
    }
  };

  const isSelected = (optionValue: string) => selectedValues.includes(optionValue);

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        className={`
          w-full px-3 py-2 text-left border rounded-md shadow-sm
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
          disabled:bg-gray-100 disabled:cursor-not-allowed
          ${isOpen ? 'ring-2 ring-blue-500 border-blue-500' : 'border-gray-300'}
        `}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 min-w-0">
            {selectedOptions.length > 0 ? (
              <div className="flex flex-wrap gap-1">
                {selectedOptions.map(option => (
                  <span
                    key={option.value}
                    className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800"
                  >
                    {option.label}
                    {multiSelect && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          removeSelected(option.value);
                        }}
                        className="ml-1 hover:bg-blue-200 rounded-full"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    )}
                  </span>
                ))}
              </div>
            ) : (
              <span className="text-gray-500">{placeholder}</span>
            )}
          </div>
          <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </div>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
          {/* Search Input */}
          {searchable && (
            <div className="p-2 border-b border-gray-200">
              <div className="relative">
                <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search options..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-8 pr-3 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  autoFocus
                />
              </div>
            </div>
          )}

          {/* Options List */}
          <div className={`overflow-y-auto ${maxHeight}`}>
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => !option.disabled && handleOptionClick(option.value)}
                  disabled={option.disabled}
                  className={`
                    w-full px-3 py-2 text-left hover:bg-gray-100 focus:bg-gray-100 focus:outline-none
                    disabled:opacity-50 disabled:cursor-not-allowed
                    ${isSelected(option.value) ? 'bg-blue-50 text-blue-900' : 'text-gray-900'}
                  `}
                >
                  <div className="flex items-center space-x-2">
                    {multiSelect && (
                      <div className={`w-4 h-4 border rounded ${isSelected(option.value) ? 'bg-blue-500 border-blue-500' : 'border-gray-300'}`}>
                        {isSelected(option.value) && <Check className="w-3 h-3 text-white" />}
                      </div>
                    )}
                    {option.icon && <span className="flex-shrink-0">{option.icon}</span>}
                    <span className="truncate">{option.label}</span>
                  </div>
                </button>
              ))
            ) : (
              <div className="px-3 py-2 text-sm text-gray-500 text-center">
                No options found
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};