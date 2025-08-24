import React from 'react';
import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from "./components/ThemeProvider";
import { useScrollToTop } from "./hooks";
import { Toaster } from "./components/ui/toaster";
import { Toaster as SonnerToaster } from "./components/ui/sonner";
import { PageLoader } from "./components/ui/loading-spinner";
import { FloatingCTA } from "./components/FloatingCTA";
import { Footer } from "./components/Footer";

// Lazy load only the working pages
const Home = React.lazy(() => import('./pages/Home'));

function App() {
  useScrollToTop();

  return (
    <ThemeProvider>
      <div className="App">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Add more routes as components are fixed */}
          </Routes>
        </Suspense>
        
        <FloatingCTA />
        <Footer />
        
        <Toaster />
        <SonnerToaster />
      </div>
    </ThemeProvider>
  );
}

export default App;