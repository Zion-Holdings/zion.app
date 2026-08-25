import './globals.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import SkipLink from './components/SkipLink';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import FloatingAgentStatus from './components/FloatingAgentStatus';

export const metadata = {
  title: 'Zion Tech Group',
  description: 'AI-Powered Technology Solutions',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-white min-h-screen">
        <AccessibilityEnhancer>
          <SkipLink />
          <div className="min-h-screen flex flex-col">
            <Navigation />
            <main id="main-content" className="flex-1 relative z-10">
              {children}
            </main>
            <Footer />
          </div>
        </AccessibilityEnhancer>
        <FloatingAgentStatus />
      </body>
    </html>
  );
}
