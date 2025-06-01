feat/wallet-page
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { PasswordStrengthMeter } from '@/components/PasswordStrengthMeter'; // Assuming this component exists
import { toast } from '@/hooks/use-toast'; // Assuming this hook exists

// Placeholder for the actual API call, to be implemented in a later step
import { resetPassword } from '@/services/auth';

export default function ResetPasswordPage() {
  const { token } = useParams();
main
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
feat/wallet-page
  const [error, setError] = useState('');

  useEffect(() => {
    if (!token) {
      setError('Invalid or missing reset token.');
      // Consider redirecting to an error page or login page
    }
  }, [token]);
main

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
feat/wallet-page
main
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
feat/wallet-page
main
      return;
    }

    // Basic password strength check (can be enhanced)
    if (password.length < 8) {
      setError('Password must be at least 8 characters long.');
feat/wallet-page
main
      return;
    }

    setIsLoading(true);
    try {
feat/wallet-page
      await resetPassword(token, password);
      toast.success('Password has been reset successfully!');
      navigate('/login'); // Redirect to login page on success
    } catch (err) {
      // Ensure err.message is a string.
      const errorMessage = err instanceof Error ? err.message : 'Failed to reset password. Please try again.';
      setError(errorMessage);
      toast.error(errorMessage);
main
    } finally {
      setIsLoading(false);
    }
  };

feat/wallet-page
  if (error && !token) { // If token was invalid from the start
    return (
      <div className="flex min-h-screen items-center justify-center p-4 text-red-500">
        <p>{error}</p>
main
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
        <h2 className="text-2xl font-bold text-center">Reset Your Password</h2>
feat/wallet-page
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        <div>
          <Input
            type="password"
main
            name="password"
            placeholder="Enter new password"
            value={password}
            onChange={handlePasswordChange}
            disabled={isLoading}
feat/wallet-page
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
          {isLoading ? 'Resetting Password...' : 'Reset Password'}
        </Button>
main
      </form>
    </div>
  );
}
