import React from 'react';
import EnhancedNavigation from './EnhancedNavigation';
import EnhancedFooter from './EnhancedFooter';

interface LayoutProps {
  children: React.ReactNode;
  seo?: SEOConfig;
}

export default function Layout({ children, seo }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showEnhancements, setShowEnhancements] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      <EnhancedNavigation />
      <main className="pt-24 lg:pt-28">
        {children}
      </main>
      <EnhancedFooter />
    </div>
  );
};
