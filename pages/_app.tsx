import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import '../styles/globals.css';
import ErrorBoundary from '../components/ErrorBoundary';
import PerformanceMonitor from '../components/PerformanceMonitor';
import Analytics from '../components/Analytics';
import ThemeToggle from '../components/ThemeToggle';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Initialize theme on mount
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
    }

    // Add smooth transitions
    document.documentElement.classList.add('transition-colors', 'duration-200');
  }, []);

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-200">
        <Component {...pageProps} />
        
        {/* Global Enhancement Components */}
        <PerformanceMonitor />
        <Analytics />
        <ThemeToggle />
      </div>
    </ErrorBoundary>
  );
}