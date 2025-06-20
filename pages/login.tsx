import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import * as Sentry from '@sentry/nextjs';
import { toast } from '@/hooks/use-toast';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useAuth } from '@/context/auth/AuthProvider';

export default function Login() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const { login, isLoading, isAuthenticated } = useAuth();

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated && !isLoading) {
      const nextRoute =
        typeof router.query.next === 'string'
          ? decodeURIComponent(router.query.next)
          : '/dashboard';
      router.replace(nextRoute);
    }
  }, [isAuthenticated, isLoading, router]);

  const handleLogin = async (email: string, password: string) => {
    try {
      console.log('🔧 Frontend: Attempting login for:', email);
      
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
    try {
      await handleLogin(email, password);
    } catch (err: any) {
      // 🔧 Set error for UI display (toast is already shown by AuthProvider)
      const errorMessage = err.message || 'Login failed';
      setErrorMsg(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Get development credentials from environment (only in development)
  const isDevelopment = process.env.NODE_ENV === 'development';
  const showDevHints = isDevelopment && process.env.NEXT_PUBLIC_SHOW_DEV_LOGIN === 'true';

  // Show loading state while checking authentication or if already authenticated
  if (isLoading || isAuthenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background p-4">
        <div className="w-full max-w-sm rounded-lg border border-border bg-card p-8 shadow-lg text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-sm text-muted-foreground">
            {isAuthenticated ? 'Redirecting...' : 'Loading...'}
          </p>
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
              className="w-full rounded border border-border px-3 py-2"
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
              className="w-full rounded border border-border px-3 py-2"
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
