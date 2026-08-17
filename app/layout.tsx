import './globals.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';

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
          <a
            href="#main-content"
            className="skip-to-content"
            style={{
              position: 'absolute',
              left: '-9999px',
              top: 'auto',
              width: '1px',
              height: '1px',
              overflow: 'hidden',
            }}
            onFocus={(event) => {
              const target = event.currentTarget;
              target.style.left = '0';
              target.style.top = '0';
              target.style.width = 'auto';
              target.style.height = 'auto';
              target.style.overflow = 'visible';
              target.style.zIndex = '9999';
              target.style.padding = '0.5rem 1rem';
              target.style.background = '#7c3aed';
              target.style.color = '#fff';
              target.style.borderRadius = '0 0 0.5rem 0';
              target.style.textDecoration = 'none';
              target.style.fontWeight = '600';
            }}
            onBlur={(event) => {
              const target = event.currentTarget;
              target.style.left = '-9999px';
              target.style.top = 'auto';
              target.style.width = '1px';
              target.style.height = '1px';
              target.style.overflow = 'hidden';
              target.style.zIndex = '';
            }}
          >
            Skip to content
          </a>
          <div className="min-h-screen flex flex-col">
            <Navigation />
            <main id="main-content" className="flex-1 relative z-10">
              {children}
            </main>
            <Footer />
          </div>
        </AccessibilityEnhancer>
      </body>
    </html>
  );
}
