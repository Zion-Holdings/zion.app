import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/components/ThemeProvider';
import { WhitelabelProvider } from '@/context/WhitelabelContext';
import { Toaster } from '@/components/ui/toaster';
import { SonnerToaster } from '@/components/ui/sonner';
import { Footer } from "./components/Footer";
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { PageLoader } from '@/components/ui/LoadingSpinner';

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

const baseRoutes = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/contact', element: <Contact /> },
];

function EnhancedSuspenseFallback() {
  return (
    <PageLoader
      text="Loading Zion Tech Group..."
      className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark"
    />
  );
}

const App = () => {
  useScrollToTop();
  return (
    <WhitelabelProvider>
      <ThemeProvider defaultTheme="dark">
        <Suspense fallback={<EnhancedSuspenseFallback />}>
          <Routes>
            {baseRoutes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>

        {/* Global Components */}
        <Footer />
        <Toaster />
        <SonnerToaster position="top-right" />
      </ThemeProvider>
    </WhitelabelProvider>
  );
};

export default App;