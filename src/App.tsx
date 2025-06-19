import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { ThemeProvider } from './components/ThemeProvider';
import { WalletProvider } from './context/WalletContext';
import OfflineToast from './components/OfflineToast';
import InstallPrompt from './components/InstallPrompt';
import { SupportChatbot } from './components/SupportChatbot';
import RootErrorBoundary from './components/RootErrorBoundary';
import './App.css';

function ScrollToTop() {
  const router = useRouter();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [router.pathname]);
  return null;
}

const App = ({ children }: { children?: React.ReactNode }) => {
  return (
    <WalletProvider>
      <ThemeProvider defaultTheme="dark">
        <ScrollToTop />
        <RootErrorBoundary>
          {children}
        </RootErrorBoundary>
        <OfflineToast />
        <SupportChatbot />
        <InstallPrompt />
      </ThemeProvider>
    </WalletProvider>
  );
};

export default App;
