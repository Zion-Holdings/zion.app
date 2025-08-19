import React, { useState, useEffect } from 'react';

interface LoaderProps {
  size?: "small" | "medium" | "large"; color?: string;
}

export default function Loader({ {{COMPONENT_PROPS_VARS }} }: LoaderProps) {
  const [state, setState] = useState(null);

  useEffect(() => {
    // Component initialization logic
  }, []);

  return (
    <div className=""animate-spin rounded-full border-2 border-gray-300 border-t-blue-600"">
      
        <div className={`animate-spin rounded-full border-2 border-gray-300 border-t-blue-600 ${
          size === 'small' ? 'w-4 h-4' : size === 'large' ? 'w-8 h-8' : 'w-6 h-6'
        }`} style={{ borderTopColor: color || '#3B82F6' }}></div>
      
    </div>
  );
}