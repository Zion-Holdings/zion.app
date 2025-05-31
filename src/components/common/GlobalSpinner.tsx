import React from 'react';
import { useUIContext } from '@/context/UIContext';
import { Loader2 } from 'lucide-react';

export const GlobalSpinner = () => {
  const { state } = useUIContext();

  if (!state.isLoading) {
    return null;
  }

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 9999, // Ensure it's on top
      }}
    >
      <Loader2 className="h-12 w-12 animate-spin text-white" />
    </div>
  );
};
