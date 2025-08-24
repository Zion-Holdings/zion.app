import React from 'react';

export const Toaster = ({ position = 'top-right' }: { position?: string }) => {
  return <div id="sonner-toaster" data-position={position} />;
};