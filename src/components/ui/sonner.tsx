import React from 'react';

interface SonnerToasterProps {
  position?: string;
}

export function SonnerToaster({ position = 'top-right' }: SonnerToasterProps) {
  return <div id="sonner-toaster" data-position={position} />;
}