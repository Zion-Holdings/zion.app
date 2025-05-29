
import { useState } from 'react';
import { useMessaging } from '@/context/MessagingContext';
import { MainNavigation } from './MainNavigation';
import { Logo } from '@/components/header/Logo';
import { ModeToggle } from '@/components/ModeToggle';
import { Input } from "@/components/ui/input"; // Added
import { Menu, X, Search } from 'lucide-react'; // Added Search
import { MobileMenu } from '@/components/header/MobileMenu';
import { useIsMobile } from '@/hooks/use-mobile';
import { MobileBottomNav } from '@/components/header/MobileBottomNav';

export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  
  // Try to access the messaging context, but provide a fallback value if it's not available
  let unreadCount = 0;
  try {
    const { unreadCount: count } = useMessaging();
    unreadCount = count;
  } catch (error) {
    console.warn('Messaging context not available');
  }
  
  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-zion-purple/20 bg-zion-blue-dark/90 backdrop-blur-md">
        <div className="container flex h-16 items-center px-4 sm:px-6">
          <Logo />
          <div className="ml-6 hidden md:flex items-center"> {/* Changed: removed flex-1, added items-center */}
            <MainNavigation unreadCount={unreadCount} />
          </div>

          {/* New Search Bar Area */}
          <div className="hidden md:flex flex-1 items-center justify-center px-4 lg:px-8">
            <div className="relative w-full max-w-lg"> {/* Increased max-width slightly */}
              <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400 pointer-events-none" /> {/* Added pointer-events-none */}
              <Input
                type="search"
                placeholder="Search marketplace, talent, AI models..."
                className="w-full pl-10 pr-4 py-2 h-9 bg-background border-border text-foreground focus:ring-accent rounded-full" // Added h-9 for height consistency, rounded-full
              />
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden ml-auto mr-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-white/70 hover:text-white hover:bg-zion-purple/10 focus:outline-none"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle mobile menu"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
          
          <ModeToggle />
        </div>
      </header>
      
      {/* Mobile menu - positioned outside of header to prevent overlap issues */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 pt-16">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="relative bg-zion-blue-dark border-t border-zion-purple/20 h-auto max-h-[calc(100vh-4rem)] overflow-y-auto">
            <MobileMenu 
              unreadCount={unreadCount} 
              onClose={() => setMobileMenuOpen(false)} 
            />
          </div>
        </div>
      )}

      {/* Mobile Bottom Navigation */}
      {isMobile && <MobileBottomNav unreadCount={unreadCount} />}
    </>
  );
}
