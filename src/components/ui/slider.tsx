import React from 'react';

interface SliderProps {
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  onChange?: (value: number) => void;
  className?: string;
}

export const Slider: React.FC<SliderProps> = ({ 
  value = 0, 
  min = 0, 
  max = 100, 
  step = 1, 
  onChange, 
  className = "" 
}) => {
  return (
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(e) => onChange?.(Number(e.target.value))}
      className={`w-full h-2 bg-zion-blue-light rounded-lg appearance-none cursor-pointer slider ${className}`}
    />
  );
};