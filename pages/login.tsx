import { useState } from 'react';
import { useRouter } from 'next/router';
import * as Sentry from '@sentry/nextjs';
import { toast } from '@/hooks/use-toast';
import { Alert, AlertDescription } from '@/components/ui/alert';

export default function Login() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleLogin = async (email: string, password: string) => {
    try {
      console.log('🔧 Frontend: Attempting login for:', email);
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      console.log('🔧 Frontend: Login response status:', res.status);

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        console.log('🔧 Frontend: Login error response:', data);
        
        let errorMessage = 'Unable to login';
        
        // 🔧 Use specific error messages from API
        if (data?.message) {
          errorMessage = data.message;
        } else if (data?.error) {
          errorMessage = data.error;
        }

        // 🔧 Handle email verification specifically
        if (res.status === 403) {
          if (data?.code === 'EMAIL_NOT_VERIFIED' || data?.code === 'EMAIL_NOT_CONFIRMED') {
            errorMessage = 'Please verify your email address before logging in';
            // Show toast for email verification
            toast({ 
              title: 'Email verification required', 
              description: errorMessage, 
              variant: 'destructive' 
            });
          } else {
            // Show toast for other 403 errors
            toast({ 
              title: 'Access denied', 
              description: errorMessage, 
              variant: 'destructive' 
            });
          }
        } else if (res.status === 401) {
          // Show toast for authentication errors
          toast({ 
            title: 'Authentication failed', 
            description: errorMessage, 
            variant: 'destructive' 
          });
        } else {
          // Show toast for other errors
          toast({ 
            title: 'Login failed', 
            description: errorMessage, 
            variant: 'destructive' 
          });
        }
        
        throw new Error(errorMessage);
      }

      const data = await res.json();
      console.log('🔧 Frontend: Login successful, user:', data.user?.email);

      // Show success toast
      toast({ 
        title: 'Login successful', 
        description: `Welcome back, ${data.user?.name || data.user?.email}!`,
        variant: 'default'
      });

      // success – redirect to specified next route or dashboard
      const nextRoute =
        typeof router.query.next === 'string'
          ? decodeURIComponent(router.query.next)
          : '/dashboard';
      router.replace(nextRoute);
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
      // 🔧 Set error for UI display and show toast
      const errorMessage = err.message || 'Login failed';
      setErrorMsg(errorMessage);
      
      // Toast is already shown in handleLogin, but ensure we have one
      if (!toast) {
        console.error('Toast not available, showing alert only');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // Get development credentials from environment (only in development)
  const isDevelopment = process.env.NODE_ENV === 'development';
  const showDevHints = isDevelopment && process.env.NEXT_PUBLIC_SHOW_DEV_LOGIN === 'true';

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
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Logging in…' : 'Login'}
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
