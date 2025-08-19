import React, { useState, useEffect } from 'react';

interface ToastProps {
  message: string; type?: "success" | "error" | "warning" | "info"; onClose?: () => void;
}

export default function Toast({ {{COMPONENT_PROPS_VARS }} }: ToastProps) {
  const [state, setState] = useState(null);

  useEffect(() => {
    // Component initialization logic
  }, []);

  return (
    <div className=""fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg max-w-sm"">
      
        <div className={`${type === 'error' ? 'bg-red-500' : type === 'success' ? 'bg-green-500' : type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'} text-white`}>
          {message}
          {onClose && (
            <button onClick={onClose} className="ml-2 text-white hover:text-gray-200">
              ×
            </button>
          )}
        </div>
      
    </div>
  );
}