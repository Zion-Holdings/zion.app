import React, { useEffect, lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { RouterWrapper } from './components/RouterWrapper';
import { ThemeProvider } from './components/ThemeProvider';
import { WalletProvider } from './context/WalletContext';
import OfflineToast from './components/OfflineToast';
import InstallPrompt from './components/InstallPrompt';
import { SupportChatbot } from './components/SupportChatbot';
import RootErrorBoundary from './components/RootErrorBoundary';
import Spinner from './components/ui/spinner';
import './App.css';

const RootPage = lazy(() => import('./pages/RootPage'));
const TalentPage = lazy(() => import('./pages/TalentsPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));

function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return null;
}

const App = ({ children }: { children?: React.ReactNode }) => {
  return (
    <WalletProvider>
      <ThemeProvider defaultTheme="dark">
        <RouterWrapper>
          <ScrollToTop />
          <RootErrorBoundary>
            <Suspense fallback={<div className="p-4 text-center"><Spinner /></div>}>
              <Routes>
                <Route path="/" element={<RootPage />} />
                <Route path="/talent" element={<TalentPage />} />
                <Route path="/services" element={<ServicesPage />} />
                {/* Fallback to Next.js rendered pages */}
                <Route path="*" element={<>{children}</>} />
              </Routes>
            </Suspense>
          </RootErrorBoundary>
        </RouterWrapper>
        <OfflineToast />
        <SupportChatbot />
        <InstallPrompt />
      </ThemeProvider>
    </WalletProvider>
  );
};

export default App;
