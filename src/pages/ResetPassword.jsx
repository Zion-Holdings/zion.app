import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';
import { resetPassword } from '@/api/auth';

export default function ResetPasswordPage() {
  const { token } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!token) {
      setError('Invalid or missing reset token.');
    }
  }, [token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      const msg = 'Passwords do not match.';
      setError(msg);
      toast.error(msg);
      return;
    }

    if (password.length < 8) {
      const msg = 'Password must be at least 8 characters long.';
      setError(msg);
      toast.error(msg);
      return;
    }

    setIsLoading(true);
    try {
      await resetPassword(token, password);
      toast.success('Password has been reset successfully!');
      navigate('/login');
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Failed to reset password. Please try again.';
      setError(msg);
      toast.error(msg);
    } finally {
      setIsLoading(false);
    }
  };

  if (error && !token) {
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
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
          />
        </div>
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirm new password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          disabled={isLoading}
        />
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? 'Resetting Password...' : 'Reset Password'}
        </Button>
      </form>
    </div>
  );
}
