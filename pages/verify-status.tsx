import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Mail, AlertCircle, CheckCircle } from 'lucide-react';
import { AuthLayout } from '@/layout';

export default function VerifyStatus() {
  const router = useRouter();
  const { email: emailParam } = router.query;
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isResending, setIsResending] = useState(false);

  useEffect(() => {
    if (typeof emailParam === 'string') {
      setEmail(emailParam);
    }
  }, [emailParam]);

  return (
    <AuthLayout>
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="w-full max-w-sm space-y-4">
          <h1 className="text-center text-2xl font-bold">Verify Your Email</h1>
          {email && (
            <p className="text-center text-sm">
              We sent a verification link to <strong>{email}</strong>.
            </p>
          )}
          {message && (
            <Alert className="border-green-500 bg-green-50 text-green-900">
              <CheckCircle aria-hidden="true" className="h-4 w-4" />
              <AlertDescription>{message}</AlertDescription>
            </Alert>
          )}
          {error && (
            <Alert variant="destructive">
              <AlertCircle aria-hidden="true" className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <Button
            type="button"
            variant="ghost"
            className="w-full"
            onClick={() => router.push('/register')}
          >
            Use Different Email
          </Button>
        </div>
      </div>
    </AuthLayout>
  );
}
