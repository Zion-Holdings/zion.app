import React, { useState, useEffect } from 'react';

interface InputProps {
  value: string; onChange: (value: string) => void; placeholder?: string; type?: string;
}

export default function Input({ {{COMPONENT_PROPS_VARS }} }: InputProps) {
  const [state, setState] = useState(null);

  useEffect(() => {
    // Component initialization logic
  }, []);

  return (
    <div className=""w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"">
      
        <input
          type={type || "text"}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      
    </div>
  );
}