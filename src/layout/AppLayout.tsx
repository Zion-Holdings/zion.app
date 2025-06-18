import React, { ReactNode, useState } from "react"; // Added useState
import { useRouter } from 'next/router';
import { useLocation } from 'react-router-dom';
// Assume useAuth hook exists and provides user object with emailVerified status and email
import { useAuth } from '@/hooks/useAuth';
import EmailVerificationBanner from '@/components/EmailVerificationBanner'; // Assuming path
import { PrimaryNav } from "./PrimaryNav";
import { ScrollToTop } from "@/components/ScrollToTop";
import { BackToTopButton } from "@/components/BackToTopButton";
import { Footer } from "@/components/Footer";
import { SkipLink } from "@/components/SkipLink";
import { useGlobalLoader } from '@/context/GlobalLoaderContext';
import LoaderOverlay from '@/components/LoaderOverlay';
import ErrorOverlay from '@/components/ErrorOverlay';
import { logError } from '@/utils/logError';

function useSafePathname() {
  try {
    return useLocation().pathname;
  } catch {
    if (typeof window !== 'undefined') {
      return window.location.pathname;
    }
    return '';
  }
}

interface AppLayoutProps {
  children?: React.ReactNode; // Kept ReactNode for consistency
  hideFooter?: boolean;
}

export function AppLayout({ children, hideFooter = false }: AppLayoutProps) {
  // Example: using an auth context
  // IMPORTANT: The actual useAuth() hook and its returned 'user' object (with 'email' and 'emailVerified' fields)
  // must be implemented in '@/context/auth/AuthContext.tsx' for this to work.
  // This is a placeholder integration as per instructions.
  const { user, isAuthenticated } = useAuth() || {}; // Added fallback to empty object for safety if useAuth is not ready
  const [isResendingEmail, setIsResendingEmail] = useState(false);
  const [resendStatusMessage, setResendStatusMessage] = useState('');
  const { loading, error, setError } = useGlobalLoader();
  const pathname = useSafePathname();
  const isAuthPage = /^\/auth|\/login|\/register|\/signup|\/forgot-password|\/reset-password|\/update-password/.test(pathname);

  const handleResendVerificationEmail = async () => {
    if (!user || !user.email) {
      setResendStatusMessage('User email not found. Cannot resend verification.');
      return;
    }
    setIsResendingEmail(true);
    setResendStatusMessage(''); // Clear previous message

    try {
      const response = await fetch('/api/auth/resend-verification-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Auth token should be handled by cookies automatically by the browser
        },
      });
      const data = await response.json();

      if (response.ok) {
        setResendStatusMessage(data.message || 'Verification email resent successfully! Please check your inbox.');
      } else {
        setResendStatusMessage(data.message || 'Failed to resend verification email.');
      }
    } catch (error) {
      logError(error, { message: 'Resend email error' });
      setResendStatusMessage('An error occurred while resending the email.');
    } finally {
      setIsResendingEmail(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SkipLink />
      {/* Conditionally render the EmailVerificationBanner */}
      {isAuthenticated && user && !user.emailVerified && (
        <>
          <EmailVerificationBanner
            onResendEmail={handleResendVerificationEmail}
            userEmail={user.email}
            // Pass down isResendingEmail to be used by the banner component
            isResending={isResendingEmail}
          />
          {/* Simple text feedback below banner */}
          {resendStatusMessage && (
            <div style={{
              textAlign: 'center',
              padding: '5px',
              color: resendStatusMessage.includes('success') ? 'green' : 'red',
              backgroundColor: resendStatusMessage.includes('success') ? '#d4edda' : '#f8d7da'
            }}>
              {resendStatusMessage}
            </div>
          )}
        </>
      )}
      {!isAuthPage && <PrimaryNav />}
      <ScrollToTop />
      {loading && <LoaderOverlay />}
      {error && <ErrorOverlay error={error} onClose={() => setError(null)} />}
      <main id="main-content" className="flex-grow">
        {children}
      </main>
      <BackToTopButton />
      {!hideFooter && <Footer />}
    </div>
  );
}
