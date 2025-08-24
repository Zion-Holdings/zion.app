import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from "./components/ThemeProvider";
import { Toaster } from "./components/ui/toaster";
import { Toaster as SonnerToaster } from "./components/ui/sonner";
import { WhitelabelProvider } from "./context/WhitelabelContext";

// Import only the essential pages
const Home = React.lazy(() => import('./pages/Home'));
const MicroSaasServicesPage = React.lazy(() => import('./pages/MicroSaasServicesPage'));

const App = () => {
  return (
    <WhitelabelProvider>
      <ThemeProvider defaultTheme="dark">
        <React.Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/micro-saas-services" element={<MicroSaasServicesPage />} />
          </Routes>
        </React.Suspense>
        <Toaster />
        <SonnerToaster position="top-right" />
      </ThemeProvider>
    </WhitelabelProvider>
  );
};

export default App;