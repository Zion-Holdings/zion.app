// src/components/testing/ErrorTriggerComponent.tsx
import React, { useEffect } from 'react';

const ErrorTriggerComponent: React.FC<{ onMount?: boolean }> = ({ onMount }) => {
  useEffect(() => {
    if (onMount) {
      throw new Error('Test error triggered on mount');
    }
  }, [onMount]);

  if (!onMount) {
    throw new Error('Test error triggered on render');
  }

  return <div>This should not render.</div>;
};

export default ErrorTriggerComponent;
