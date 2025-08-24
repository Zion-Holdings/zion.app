import React from 'react';

<<<<<<< HEAD
export const Toaster = ({ position = 'top-right' }: { position?: string }) => {
  return <div id="sonner-toaster" data-position={position} />;
};
=======
interface ToasterProps {
  position?: string;
}

export function Toaster({ position = 'top-right' }: ToasterProps) {
  return <div className={`sonner-toaster ${position}`}></div>;
}
>>>>>>> d0d58136d327183e53cdbb308d5ed67246f24274
