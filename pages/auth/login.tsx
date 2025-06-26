import { useRouter } from 'next/router';
import { useEffect, useState, FormEvent } from 'react';
import Link from 'next/link';
import { Facebook, Mail, Clock, RefreshCw } from 'lucide-react';
import Head from 'next/head';
import { createClient } from '../../src/utils/supabase/client';
import type { AuthError, User } from '@supabase/supabase-js';

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<AuthError | null>(null);
  const [isLoading, setIsLoading] = useState(false); // For login form submission
  const [user, setUser] = useState<User | null>(null);
  const [isCheckingSession, setIsCheckingSession] = useState(true); // For initial session check
  const [sessionChecked, setSessionChecked] = useState(false); // New state: true after initial getSession completes
  const [sessionCheckTimedOut, setSessionCheckTimedOut] = useState(false);
  const [isEmailUnverified, setIsEmailUnverified] = useState(false);
  const [verificationEmailSent, setVerificationEmailSent] = useState(false);
  const [isResendingVerification, setIsResendingVerification] = useState(false);

  // States for the new proactive resend form
  const [showProactiveResendForm, setShowProactiveResendForm] = useState(false);
  const [proactiveResendEmail, setProactiveResendEmail] = useState('');
  const [isProactivelyResending, setIsProactivelyResending] = useState(false);
  const [proactiveResendMessage, setProactiveResendMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Initialize Supabase client
  const supabase = createClient();


  // Effect for initial session check and auth state changes
  useEffect(() => {
    let mounted = true;
    console.log('LoginPage: Initial session check effect runs.');

    const sessionTimeoutId = setTimeout(() => {
      if (mounted) {
        console.warn('LoginPage: Session check timeout after 5 seconds');
        setSessionCheckTimedOut(true);
        setIsCheckingSession(false); // Allow form to render if timeout
        setSessionChecked(true); // Mark check as complete even on timeout
      }
    }, 5000);

    const checkSessionAndListen = async () => {
      if (!mounted) return;

      setIsCheckingSession(true);
      try {
        console.log('LoginPage: Calling supabase.auth.getSession()');
        const { data: { session }, error: sessionError } = await supabase.auth.getSession();
        clearTimeout(sessionTimeoutId); // Clear timeout once getSession completes
        if (!mounted) return;

        if (sessionError) {
          console.error('LoginPage: Error getting session:', sessionError);
          setError(sessionError as any); // Cast to any if type is too strict
        } else {
          console.log('LoginPage: getSession returned, user:', session?.user?.id);
          setUser(session?.user ?? null);
        }
      } catch (e) {
        if (mounted) {
          console.error('LoginPage: Exception during getSession:', e);
          clearTimeout(sessionTimeoutId); // Ensure timeout is cleared on error too
        }
      } finally {
        if (mounted) {
          setIsCheckingSession(false);
          setSessionChecked(true);
          console.log('LoginPage: Initial session check complete. isCheckingSession: false, sessionChecked: true');
        }
      }

      // Listener for auth state changes
      console.log('LoginPage: Setting up onAuthStateChange listener.');
      const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
        if (!mounted) return;
        console.log('LoginPage: onAuthStateChange event:', event, 'user:', session?.user?.id);
        setUser(session?.user ?? null);
        // If auth state changes after initial check, ensure sessionChecked is true
        // This handles cases like login/logout in another tab.
        if (!sessionChecked && event !== "INITIAL_SESSION") {
           setSessionChecked(true);
           console.log('LoginPage: onAuthStateChange updated sessionChecked to true.');
        }
      });
      
      return () => { // Cleanup for listener
        console.log('LoginPage: Unsubscribing from onAuthStateChange.');
        authListener?.subscription?.unsubscribe();
      };
    };

    const unsubscribePromise = checkSessionAndListen();

    return () => {
      mounted = false;
      clearTimeout(sessionTimeoutId); // Clear timeout on unmount
      console.log('LoginPage: Unmounting, cleaning up auth listener.');
      unsubscribePromise.then(cleanup => cleanup && cleanup());
    };
  }, []); // Run only once on mount

  // Effect for handling redirection AFTER session is checked and user state is updated
  useEffect(() => {
    console.log(`LoginPage: Redirection effect runs. sessionChecked: ${sessionChecked}, isLoading: ${isLoading}, user: ${user?.id}, pathname: ${router.pathname}`);
    
    // Only redirect if the initial session check is complete, not currently submitting login form, and user exists
    if (sessionChecked && !isLoading && user) {
      // Get returnTo from query params, decode it if it exists
      let returnTo = '/dashboard'; // Default fallback
      
      if (router.query.returnTo && typeof router.query.returnTo === 'string') {
        try {
          returnTo = decodeURIComponent(router.query.returnTo);
        } catch (e) {
          console.warn('Failed to decode returnTo parameter:', router.query.returnTo);
          returnTo = '/dashboard';
        }
      }
      
      // Prevent redirecting back to auth pages or creating loops
      const authPages = ['/auth/login', '/auth/register', '/login', '/signup', '/auth/forgot-password'];
      if (authPages.includes(returnTo) || returnTo.startsWith('/auth/')) {
        returnTo = '/dashboard';
      }
      
      // Ensure returnTo is a relative path to prevent open redirect attacks
      if (returnTo.startsWith('http') || returnTo.includes('://')) {
        returnTo = '/dashboard';
      }
      
      console.log(`LoginPage: Conditions met for redirect. Current path: ${router.pathname}, Target: ${returnTo}`);
      
      // Add a small delay to ensure session is fully established
      const redirectTimer = setTimeout(() => {
        // Double-check that we're still logged in before redirecting
        if (user && router.pathname === '/auth/login') {
          console.log(`LoginPage: Executing delayed redirect to ${returnTo}`);
          router.replace(returnTo); // Use replace to avoid back button issues
        }
      }, 100); // Small delay to let session stabilize
      
      return () => clearTimeout(redirectTimer);
    }
  }, [user, sessionChecked, isLoading, router, router.query.returnTo]); // Dependencies: user, sessionChecked, isLoading, router

  const handleResendVerification = async () => {
    if (!email) {
      setError({ name: 'ValidationError', message: 'Please enter your email address first' } as AuthError);
      return;
    }
    
    setIsResendingVerification(true);
    try {
      const response = await fetch('/api/resend-verification-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      
      if (response.ok) {
        setVerificationEmailSent(true);
        setError(null);
      } else {
        const data = await response.json();
        setError({ name: 'ResendError', message: data.message || 'Failed to resend verification email' } as AuthError);
      }
    } catch (err) {
      setError({ name: 'NetworkError', message: 'Failed to resend verification email. Please try again.' } as AuthError);
    } finally {
      setIsResendingVerification(false);
    }
  };

  const handleProactiveResendVerification = async (e: FormEvent) => {
    e.preventDefault();
    if (!proactiveResendEmail) {
      setProactiveResendMessage({ type: 'error', text: 'Please enter your email address.' });
      return;
    }

    setIsProactivelyResending(true);
    setProactiveResendMessage(null);
    try {
      const response = await fetch('/api/resend-verification-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: proactiveResendEmail })
      });

      const data = await response.json();
      if (response.ok) {
        setProactiveResendMessage({ type: 'success', text: `Verification email sent to ${proactiveResendEmail}. Please check your inbox (and spam folder).` });
      } else {
        setProactiveResendMessage({ type: 'error', text: data.message || 'Failed to resend verification email.' });
      }
    } catch (err) {
      setProactiveResendMessage({ type: 'error', text: 'An unexpected error occurred. Please try again.' });
    } finally {
      setIsProactivelyResending(false);
    }
  };

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setIsEmailUnverified(false);
    setVerificationEmailSent(false);
    
    try {
      console.log('Attempting Supabase login with email:', email);
      const { data, error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (signInError) {
        console.error('Supabase sign-in error:', signInError);
        
        // Check if error is related to email verification
        const messageIncludesEmailNotConfirmed = signInError.message?.toLowerCase().includes('email not confirmed') ||
                                                 signInError.message?.toLowerCase().includes('email_not_confirmed') ||
                                                 signInError.message?.toLowerCase().includes('verify') ||
                                                 signInError.message?.toLowerCase().includes('confirm');
        // As per issue description, check for a specific error code "email_not_verified"
        // Assuming 'code' is a property on the error object. Supabase errors might have different structures.
        const codeIsEmailNotVerified = (signInError as any).code === 'email_not_verified';

        if (messageIncludesEmailNotConfirmed || codeIsEmailNotVerified) {
          setIsEmailUnverified(true);
          setError({ 
            name: 'EmailNotVerifiedError', 
            message: 'Please verify your email address before logging in. Check your inbox for a verification link.' 
          } as AuthError);
          setShowProactiveResendForm(false); // Hide proactive form if reactive one is triggered
          
          // Auto-resend verification email
          setTimeout(() => {
            handleResendVerification();
          }, 1000);
        } else {
          // MODIFIED SECTION FOR BETTER ERROR MESSAGES
          let displayMessage = 'Login failed. Please check your credentials and try again.'; // Default user-friendly message
          if (signInError.message) {
              if (signInError.message.toLowerCase().includes('invalid login credentials')) {
                  displayMessage = 'Invalid email or password. Please try again.';
              } else if (signInError.message.toLowerCase().includes('network request failed')) {
                  displayMessage = 'Network error. Please check your internet connection and try again.';
              } else if (signInError.message.toLowerCase().includes('user disabled')) {
                  displayMessage = 'Your account has been disabled. Please contact support.';
              }
              // Add more specific checks here if needed for other Supabase error messages
          }
          setError({ name: signInError.name || 'AuthApiError', message: displayMessage } as AuthError);
        }
      } else if (data.user) {
        console.log('Supabase sign-in successful, user:', data.user);
        setUser(data.user); // setUser to trigger useEffect for redirection
        // Redirection is now handled by the useEffect hook
      } else {
        // Should not happen if signInError is null and data.user is null
        console.warn('Supabase sign-in returned no error but no user.');
        setError({ name: 'UnknownAuthError', message: 'Login failed due to an unknown error. Please try again.' } as AuthError);
      }
    } catch (catchedError: any) {
      console.error('Exception during Supabase sign-in:', catchedError);
      // Check if the caught error is a network error
      let exceptionMessage = 'An unexpected error occurred. Please try again.';
      if (catchedError.message && catchedError.message.toLowerCase().includes('networkerror when attempting to fetch resource')) {
        exceptionMessage = 'Network error. Please check your internet connection and try again.';
      } else if (catchedError.message) {
        exceptionMessage = catchedError.message;
      }
      setError({ name: 'ExceptionError', message: exceptionMessage } as AuthError);
    } finally {
      setIsLoading(false);
    }
  };

  // Auto-redirect to verification status page for unverified users after showing message
  useEffect(() => {
    if (isEmailUnverified && verificationEmailSent && email) {
      const timer = setTimeout(() => {
        router.push(`/verify-status?email=${encodeURIComponent(email)}`);
      }, 3000);
      return () => clearTimeout(timer);
    }
    return undefined; // Explicitly return undefined if condition is not met
  }, [isEmailUnverified, verificationEmailSent, email, router]);

  // --- Rendering Logic ---

  // 1. Primary Loading State: During initial session check
  if (isCheckingSession) {
    console.log('LoginPage: Rendering "Checking authentication..."');
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Checking authentication...</p>
          <p className="text-sm text-gray-500 mt-2">This should only take a moment</p>
        </div>
      </div>
    );
  }

  // 2. Redirecting State: If session is checked, user exists, and not currently submitting form
  // The redirection useEffect will handle the actual push. This UI is for the brief moment before that.
  if (sessionChecked && user && !isLoading) {
    console.log('LoginPage: Rendering "Already Logged In / Redirecting..."');
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold mb-4">Already Logged In</h2>
          <p className="text-gray-600 mb-4">Redirecting to your dashboard...</p>
        </div>
      </div>
    );
  }

  // 3. Render Login Form: If session is checked and no user, OR if a login attempt is in progress (isLoading)
  // This also covers the case where a user was present but a login attempt failed, clearing the user.
  console.log(`LoginPage: Rendering login form. sessionChecked: ${sessionChecked}, user: ${user?.id}, isLoading: ${isLoading}`);
  return (
    <>
      <Head>
        <title>Sign In - Zion Tech Marketplace</title>
        <meta name="description" content="Sign in to your Zion Tech Marketplace account" />
      </Head>
      
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <div className="mx-auto h-12 w-auto">
              <img
                className="mx-auto h-12 w-auto"
                src="/logos/zion-logo.png"
                alt="Zion Tech"
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{' '}
              <Link href="/auth/register" className="font-medium text-blue-600 hover:text-blue-500">
                create a new account
              </Link>
            </p>
            <p className="mt-2 text-center text-sm text-gray-600">
              <button
                onClick={() => {
                  setShowProactiveResendForm(!showProactiveResendForm);
                  // Optionally prefill from main email input if available and form is opening
                  if (!showProactiveResendForm && email) {
                    setProactiveResendEmail(email);
                  }
                  // Clear previous messages when toggling
                  setProactiveResendMessage(null);
                }}
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                {showProactiveResendForm ? 'Hide' : "Didn't receive verification email?"}
              </button>
            </p>
          </div>

          {/* Proactive Resend Verification Form */}
          {showProactiveResendForm && (
            <div className="mt-4 p-4 border border-gray-200 rounded-md bg-gray-50">
              <form onSubmit={handleProactiveResendVerification} className="space-y-4">
                <div>
                  <label htmlFor="proactive-resend-email" className="block text-sm font-medium text-gray-700">
                    Enter your email to resend verification
                  </label>
                  <input
                    id="proactive-resend-email"
                    name="proactiveResendEmail"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="you@example.com"
                    value={proactiveResendEmail}
                    onChange={(e) => setProactiveResendEmail(e.target.value)}
                    disabled={isProactivelyResending}
                  />
                </div>
                {proactiveResendMessage && (
                  <div className={`text-sm ${proactiveResendMessage.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                    {proactiveResendMessage.text}
                  </div>
                )}
                <div>
                  <button
                    type="submit"
                    disabled={isProactivelyResending}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                  >
                    {isProactivelyResending ? (
                      <>
                        <RefreshCw className="h-4 w-4 inline animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      'Resend Verification Email'
                    )}
                  </button>
                </div>
              </form>
            </div>
          )}


          {/* Session Check Timeout Notice */}
          {sessionCheckTimedOut && !user && !error && !isEmailUnverified && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4 mb-4">
              <div className="flex items-start">
                <Clock className="h-5 w-5 text-yellow-400 mt-0.5 mr-3" />
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-yellow-800">Session Check Timed Out</h3>
                  <div className="mt-1 text-sm text-yellow-700">
                    <p>We couldn't verify your session status quickly. Please try logging in or refresh the page.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Email verification notice */}
          {isEmailUnverified && (
            <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-blue-400 mt-0.5 mr-3" />
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-blue-800">Email Verification Required</h3>
                  <div className="mt-2 text-sm text-blue-700">
                    <p>Your email address needs to be verified before you can log in.</p>
                    {verificationEmailSent && (
                      <p className="mt-1 font-medium">✓ Verification email sent to {email}</p>
                    )}
                  </div>
                  <div className="mt-4 flex space-x-3">
                    <button
                      onClick={handleResendVerification}
                      disabled={isResendingVerification}
                      className="text-sm bg-blue-100 hover:bg-blue-200 text-blue-800 px-3 py-1 rounded disabled:opacity-50"
                    >
                      {isResendingVerification ? (
                        <>
                          <RefreshCw className="h-4 w-4 inline animate-spin mr-1" />
                          Sending...
                        </>
                      ) : (
                        'Resend Email'
                      )}
                    </button>
                    <Link
                      href={`/verify-status?email=${encodeURIComponent(email)}`}
                      className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded"
                    >
                      Check Status
                    </Link>
                  </div>
                  {verificationEmailSent && (
                    <p className="mt-2 text-xs text-blue-600 flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      Redirecting to verification status in 3 seconds...
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isLoading}
                />
              </div>
            </div>

            {error && !isEmailUnverified && (
              <div className="bg-red-50 border border-red-200 rounded-md p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-red-800">
                      Authentication Error
                    </h3>
                    <div className="mt-2 text-sm text-red-700">
                      <p>{error.message}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div>
              <button
                type="submit"
                disabled={isLoading || isEmailUnverified}
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200 disabled:opacity-50"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg className="h-5 w-5 text-blue-500 group-hover:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </span>
                {isLoading ? 'Signing in...' : isEmailUnverified ? 'Email Verification Required' : 'Sign in'}
              </button>
            </div>
          </form>

          {/* Social login options - Kept for now, but may need separate fixes if NextAuth.js is not configured */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-50 text-gray-500">Or continue with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <a
                href="/api/auth/login?connection=google-oauth2" // This will likely 404 if NextAuth is not setup
                onClick={(e) => {
                  console.log('Google login button clicked - href may be incorrect if NextAuth is not used.');
                }}
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors duration-200"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                <span className="ml-2">Google</span>
              </a>

              <a
                href="/api/auth/login?connection=github" // This will likely 404 if NextAuth is not setup
                onClick={(e) => {
                  console.log('GitHub login button clicked - href may be incorrect if NextAuth is not used.');
                }}
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors duration-200"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
                <span className="ml-2">GitHub</span>
              </a>
            </div>
          </div>

          <div className="text-center mt-4"> {/* Added mt-4 for spacing */}
            <p className="text-xs text-gray-500">
              By signing in, you agree to our{' '}
              <Link href="/legal/terms" className="text-blue-600 hover:text-blue-500">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link href="/legal/privacy" className="text-blue-600 hover:text-blue-500">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
