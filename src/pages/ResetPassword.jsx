import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'; // Changed from useParams, useNavigate
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { LoadingSpinner } from '@/components/ui/enhanced-loading-states';
import { PasswordStrengthMeter } from '@/components/PasswordStrengthMeter'; // Assuming this component exists
import { toast } from '@/hooks/use-toast'; // Assuming this hook exists

// Placeholder for the actual API call, to be implemented in a later step
import { resetPassword } from '@/services/auth';

export default function ResetPasswordPage() {
  const router = useRouter(); // Initialized router
  const { token: rawToken } = router.query;
  const token = typeof rawToken === 'string' ? rawToken : undefined;
  // navigate is now router
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!token) {
      setError('Invalid or missing reset token.');
      // Consider redirecting to an error page or login page
    }
  }, [token]);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // Basic password strength check (can be enhanced)
    if (password.length < 8) {
      setError('Password must be at least 8 characters long.');
      return;
    }

    setIsLoading(true);
    try {
      await resetPassword(token, password);
      toast.success('Password has been reset successfully!');
      router.push('/login'); // Redirect to login page on success, changed to router.push
    } catch (err) {
      // Ensure err.message is a string.
      const errorMessage = err instanceof Error ? err.message : 'Failed to reset password. Please try again.';
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  if (error && !token) { // If token was invalid from the start
    return (
      <div className="flex min-h-screen items-center justify-center p-4 text-red-500">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
        <h2 className="text-2xl font-bold text-center">Reset Your Password</h2>
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        <div>
          <Input
            type="password"
            name="password"
            placeholder="Enter new password"
            value={password}
            onChange={handlePasswordChange}
            disabled={isLoading}
          />
          {/* Assuming PasswordStrengthMeter is available and configured */}
          {/* <PasswordStrengthMeter password={password} /> */}
        </div>
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirm new password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          disabled={isLoading}
        />
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? (
            <>
              <LoadingSpinner size="sm" className="mr-2" />
              Resetting Password...
            </>
          ) : (
            'Reset Password'
          )}
        </Button>
      </form>
    </div>
  );
}
