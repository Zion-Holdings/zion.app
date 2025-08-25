import React from 'react';

interface ToasterProps {
  position?: string;
}

export function Toaster({ position = 'top-right' }: ToasterProps) {
  return <div id="sonner-toaster" data-position={position} />;
}
