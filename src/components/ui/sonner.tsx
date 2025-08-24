import React from 'react';

<<<<<<< HEAD
interface ToasterProps {
  position?: string;
}

export function Toaster({ position = 'top-right' }: ToasterProps) {
  return <div className={`sonner-toaster ${position}`}></div>;
}
=======
export const Toaster = ({ position = 'top-right' }: { position?: string }) => {
  return <div id="sonner-toaster" data-position={position} />;
};
>>>>>>> fca3c1339b92e2c99557b3c800831ed83163fd77
