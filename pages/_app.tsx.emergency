import React from 'react';
import type { AppProps } from 'next/app';
import '../src/index.css';

// Emergency minimal app component
function MyApp({ Component, pageProps }: AppProps) {
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
    console.log('✅ Emergency app component loaded successfully');
  }, []);

  if (!isClient) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 to-purple-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-2 border-cyan-400 border-t-transparent mx-auto mb-4"></div>
          <p className="text-white text-lg font-medium">Loading Zion App...</p>
          <p className="text-blue-200 text-sm mt-2">Emergency mode activated</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">Zion App - Emergency Mode</h1>
        <p className="text-blue-100">The app is running in emergency mode. Core functionality available.</p>
      </header>
      <main className="container mx-auto p-4">
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;
