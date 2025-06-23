import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import * as Sentry from '@sentry/nextjs';
import { signIn } from 'next-auth/react';
import { toast } from '@/hooks/use-toast';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useAuth } from '@/context/auth/AuthProvider';
import { isSupabaseConfigured } from '@/integrations/supabase/client';

// Placeholder for social login icons - in a real scenario, you'd use SVGs or an icon library
const GoogleIcon = () => <span className="mr-2"> G </span>;
const MicrosoftIcon = () => <span className="mr-2"> M </span>;
const GitHubIcon = () => <span className="mr-2"> GH </span>;


export default function Login() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [showResendVerification, setShowResendVerification] = useState(false);
  const [isResendingVerification, setIsResendingVerification] = useState(false);
  const { login, isLoading, isAuthenticated } = useAuth();
  const [showLongLoadingMessage, setShowLongLoadingMessage] = useState(false);
  const [authTimeout, setAuthTimeout] = useState(false);
  const longLoadTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Check if authentication is taking too long (indicates configuration issues)
  useEffect(() => {
    if (isLoading) {
      // Clear any existing timer
      if (longLoadTimerRef.current) {
        clearTimeout(longLoadTimerRef.current);
      }
      
      // Set a timer to show configuration error message
      longLoadTimerRef.current = setTimeout(() => {
        if (isLoading) {
          setAuthTimeout(true);
          if (!isSupabaseConfigured) {
            setShowLongLoadingMessage(true);
          }
        }
      }, 5000); // 5 seconds - much shorter timeout

      return () => {
        if (longLoadTimerRef.current) {
          clearTimeout(longLoadTimerRef.current);
        }
      };
    } else {
      setShowLongLoadingMessage(false);
      setAuthTimeout(false);
      if (longLoadTimerRef.current) {
        clearTimeout(longLoadTimerRef.current);
      }
    }
  }, [isLoading]);

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated && !isLoading) {
      const { next, ...rest } = router.query;
      const nextRoute =
        typeof next === 'string'
          ? decodeURIComponent(next)
          : '/dashboard';
      router.replace({ pathname: nextRoute, query: rest });
    }
  }, [isAuthenticated, isLoading, router]);

  const handleLogin = async (email: string, password: string) => {
    try {
      console.log('🔧 Frontend: Attempting login for:', email);
      
      // Check if Supabase is configured before attempting login
      if (!isSupabaseConfigured) {
        throw new Error('Authentication service is not configured. Please contact support.');
      }
      
      // Use AuthProvider's login method which handles state management and redirects
      const result = await login(email, password, false);
      
      if (result.error) {
        console.error('🔧 Frontend: Login error:', result.error);
        throw new Error(result.error);
      }
      
      console.log('🔧 Frontend: Login successful via AuthProvider');
      
      // AuthProvider handles the redirect automatically via onAuthStateChange
      // No need to manually redirect here
      
    } catch (err: any) {
      console.error('🔧 Frontend: Login error:', err);
      Sentry.captureException(err);
      throw err; // propagate to caller
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    if (!email.trim() || !password.trim()) {
      e.preventDefault();
      toast({
        title: 'Missing credentials',
        description: 'Both email and password are required.',
        variant: 'destructive',
      });
      return;
    }

    e.preventDefault();

    setIsSubmitting(true);
    setErrorMsg('');
    setShowResendVerification(false); // Reset resend verification option
    
    try {
      await handleLogin(email, password);
    } catch (err: any) {
      // Check if this is an email verification error
      const errorMessage = err.message || 'Login failed';
      const isEmailVerificationError = 
        errorMessage.toLowerCase().includes('email address needs to be verified') ||
        errorMessage.toLowerCase().includes('email not confirmed') ||
        errorMessage.toLowerCase().includes('email address is not confirmed');
      
      setErrorMsg(errorMessage);
      
      // Show resend verification option for email verification errors
      if (isEmailVerificationError && email.trim()) {
        setShowResendVerification(true);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResendVerification = async () => {
    if (!email.trim()) {
      toast({
        title: 'Email required',
        description: 'Please enter your email address to resend verification.',
        variant: 'destructive',
      });
      return;
    }

    setIsResendingVerification(true);
    
    try {
      const response = await fetch('/api/auth/resend-verification-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: 'Verification email sent',
          description: 'Please check your inbox for a new verification link.',
        });
        setShowResendVerification(false);
      } else {
        toast({
          title: 'Failed to send verification email',
          description: data.message || 'Please try again later.',
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'Failed to send verification email',
        description: 'Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsResendingVerification(false);
    }
  };

  // Get development credentials from environment (only in development)
  const isDevelopment = process.env.NODE_ENV === 'development';
  const showDevHints = isDevelopment && process.env.NEXT_PUBLIC_SHOW_DEV_LOGIN === 'true';

  // Show configuration error if Supabase is not configured
  if (!isSupabaseConfigured && (authTimeout || !isLoading)) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background p-4">
        <div className="w-full max-w-sm rounded-lg border border-border bg-card p-8 shadow-lg">
          <div className="text-center mb-6">
            <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-yellow-100 flex items-center justify-center">
              <svg className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
            </div>
            <h1 className="text-xl font-bold text-foreground">Authentication Service Unavailable</h1>
          </div>
          
          <Alert variant="destructive" className="mb-4">
            <AlertDescription>
              The login system is temporarily unavailable due to a configuration issue. 
              Please try again later or contact support if this problem persists.
            </AlertDescription>
          </Alert>

          <div className="space-y-3 text-sm text-muted-foreground">
            <p>In the meantime, you can:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Browse the <a href="/marketplace" className="text-primary hover:underline">marketplace</a></li>
              <li>View available <a href="/services" className="text-primary hover:underline">services</a></li>
              <li>Check out our <a href="/talent" className="text-primary hover:underline">talent pool</a></li>
              <li>Read our <a href="/blog" className="text-primary hover:underline">blog</a></li>
            </ul>
          </div>

          <div className="mt-6 pt-4 border-t border-border">
            <button
              onClick={() => router.push('/')}
              className="w-full inline-flex items-center justify-center px-4 py-2 border border-primary text-primary bg-transparent rounded-md hover:bg-primary/10 transition-colors"
            >
              Return to Home
            </button>
          </div>

          {isDevelopment && (
            <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded text-xs text-yellow-800">
              <p className="font-medium">Development Mode</p>
              <p>Configure Supabase environment variables in .env.local to enable authentication.</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Show loading state while checking authentication or if already authenticated
  if (isLoading || isAuthenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background p-4">
        <div className="w-full max-w-sm rounded-lg border border-border bg-card p-8 shadow-lg text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-sm text-muted-foreground">
            {isAuthenticated ? 'Redirecting...' : 'Loading...'}
          </p>
          {isLoading && showLongLoadingMessage && (
            <div className="mt-4">
              <p className="text-xs text-muted-foreground mb-2">
                This is taking longer than usual.
              </p>
              <button
                onClick={() => window.location.reload()}
                className="text-xs text-primary hover:underline"
              >
                Refresh page
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="w-full max-w-sm rounded-lg border border-border bg-card p-8 shadow-lg">
        <h1 className="mb-6 text-center text-2xl font-bold">Welcome back</h1>

        {errorMsg && (
          <Alert variant="destructive" className="mb-4">
            <AlertDescription>{errorMsg}</AlertDescription>
          </Alert>
        )}
        
        {showResendVerification && (
          <Alert className="mb-4 border-orange-500 bg-orange-50 text-orange-900">
            <AlertDescription className="flex items-center justify-between">
              <span>Need a new verification email?</span>
              <button
                type="button"
                onClick={handleResendVerification}
                disabled={isResendingVerification}
                className="ml-2 px-3 py-1 text-sm bg-orange-600 text-white rounded hover:bg-orange-700 disabled:opacity-50"
              >
                {isResendingVerification ? 'Sending...' : 'Resend'}
              </button>
            </AlertDescription>
          </Alert>
        )}
        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded border border-border px-3 py-2 text-gray-900 dark:text-gray-200"
              aria-label="email address"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="password" className="mb-1 block text-sm font-medium">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded border border-border px-3 py-2 text-gray-900 dark:text-gray-200"
              aria-label="password"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded bg-primary px-4 py-2 font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50"
            disabled={isSubmitting || isLoading}
          >
            {isSubmitting || isLoading ? 'Logging in…' : 'Login'}
          </button>
        </form>

        <div className="my-6 flex items-center">
          <div className="flex-grow border-t border-border"></div>
          <span className="mx-4 flex-shrink text-sm text-muted-foreground">
            Or continue with
          </span>
          <div className="flex-grow border-t border-border"></div>
        </div>

        <div className="space-y-3">
          <button
            type="button"
            onClick={() => signIn('google', { callbackUrl: router.query.next ? decodeURIComponent(router.query.next as string) : '/dashboard' })}
            className="inline-flex w-full items-center justify-center rounded border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          >
            <GoogleIcon />
            Sign in with Google
          </button>
          <button
            type="button"
            onClick={() => signIn('github', { callbackUrl: router.query.next ? decodeURIComponent(router.query.next as string) : '/dashboard' })}
            className="inline-flex w-full items-center justify-center rounded border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          >
            <GitHubIcon />
            Sign in with GitHub
          </button>
          <button
            type="button"
            onClick={() => signIn('microsoft', { callbackUrl: router.query.next ? decodeURIComponent(router.query.next as string) : '/dashboard' })}
            className="inline-flex w-full items-center justify-center rounded border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          >
            <MicrosoftIcon />
            Sign in with Microsoft
          </button>
        </div>
        
        <div className="mt-6 text-center text-sm space-y-2">
          <a href="/forgot-password" className="text-primary hover:underline">
            Forgot your password?
          </a>
          <div>
            <span className="text-muted-foreground">Don't have an account? </span>
            <a href="/signup" className="text-primary hover:underline">
              Sign up
            </a>
          </div>
        </div>
        
        {/* 🔐 Development hints - only shown in development mode with explicit env var */}
        {showDevHints && (
          <div className="mt-4 text-center text-xs text-muted-foreground border-t pt-4">
            <p className="text-yellow-600 font-medium">⚠️ Development Mode</p>
            <p>Test accounts available - check .env.local</p>
          </div>
        )}
      </div>
    </div>
  );
}
