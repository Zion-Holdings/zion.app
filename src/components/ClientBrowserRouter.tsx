import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

interface ClientBrowserRouterProps {
  children: React.ReactNode;
}

const ClientBrowserRouter: React.FC<ClientBrowserRouterProps> = ({ children }) => {
  const [showRouter, setShowRouter] = useState(false);

  useEffect(() => {
    setShowRouter(true);
  }, []);

  if (!showRouter) {
    return null; // Render null on the server until mounted on client
  }

  return <BrowserRouter>{children}</BrowserRouter>;
};

export default ClientBrowserRouter;
