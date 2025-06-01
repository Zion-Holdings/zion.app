import React, { useState, useEffect } from 'react'; // Added React import
import { useParams, useNavigate, Link } from 'react-router-dom'; // Added Link
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
// import { PasswordStrengthMeter } from '@/components/PasswordStrengthMeter'; // Assuming this component exists - Commented out for now if not essential for this step
import { toast } from '@/hooks/use-toast'; // Assuming this hook exists

// Placeholder for the actual API call, to be implemented in a later step
// import { resetPassword } from '@/services/auth'; // Assuming this will be updated later

// Mock service for now
const resetPasswordService = async (uid, token, password) => {
  console.log(`Mock Service: resetPassword called with UID: ${uid}, Token: ${token}, Password: ${password}`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (token === "valid-token") { // Simulate success for a specific token
        resolve({ message: "Password reset successfully (mocked)." });
      } else {
        reject(new Error("Invalid or expired token (mocked)."));
      }
    }, 1000);
  });
};


export default function ResetPasswordPage() {
  const { uid, token } = useParams(); // Updated to include uid
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(''); // Added message state
  const [error, setError] = useState('');

  // useEffect to log uid and token for verification during development/testing
  useEffect(() => {
    console.log("ResetPassword page loaded with UID:", uid, "Token:", token);
    if (!token) { // Original check for token still relevant
      setError('Invalid or missing reset token.');
      // Consider redirecting to an error page or login page
    }
    // TODO: Add useEffect hook to validate token on component mount if needed by calling an API.
    // For now, we assume token validation happens on form submission.
  }, [uid, token]);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      toast.error('Passwords do not match.'); // Using toast for errors as well
      return;
    }

    // Basic password strength check (can be enhanced)
    if (password.length < 8) {
      setError('Password must be at least 8 characters long.');
      toast.error('Password must be at least 8 characters long.');
      return;
    }

    setIsLoading(true);
    try {
      // TODO: Call API service src/services/auth.ts resetPassword(uid, token, password)
      // This service will need to be updated to accept uid as well.
      console.log(`Attempting to reset password for UID: ${uid} with token: ${token}`);
      // Using the mock service for now
      const data = await resetPasswordService(uid, token, password);

      // toast.success('Password has been reset successfully!'); // Replaced by setMessage
      setMessage(data.message || 'Password has been reset successfully. You can now login.');

      // Simulate API call delay then navigate
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (err) {
      console.error("Reset password error:", err);
      const errorMessage = err instanceof Error ? err.message : 'Failed to reset password. The link may be invalid or expired.';
      setError(errorMessage);
      toast.error(errorMessage); // Continue using toast for errors from API
    } finally {
      setIsLoading(false);
    }
  };

  // Original error display for invalid initial token can be kept or merged with form error display
  if (!uid && !token && error) {
    return (
      <div className="flex min-h-screen items-center justify-center p-4 text-red-500">
        <p>{error}</p> {/* Show initial error if token/uid missing */}
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
        <h2 className="text-2xl font-bold text-center">Reset Your Password</h2>
        {/* Display messages and errors within the form area */}
        {message && <p style={{ color: 'green' }} className="text-sm text-center">{message}</p>}
        {error && <p style={{ color: 'red' }} className="text-sm text-center">{error}</p>}
        <div>
          <label htmlFor="password">New Password</label> {/* Added label for clarity */}
          <Input
            type="password"
            id="password" // Added id for label
            name="password"
            placeholder="Enter new password"
            value={password}
            onChange={handlePasswordChange}
            disabled={isLoading}
            required // Added required attribute
          />
          {/* Assuming PasswordStrengthMeter is available and configured - kept commented */}
          {/* <PasswordStrengthMeter password={password} /> */}
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm New Password</label> {/* Added label */}
          <Input
            type="password"
            id="confirmPassword" // Added id for label
            name="confirmPassword"
            placeholder="Confirm new password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            disabled={isLoading}
            required // Added required attribute
          />
        </div>
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? 'Resetting Password...' : 'Reset Password'}
        </Button>
        <p className="text-center text-sm">
          Remembered your password? <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
        </p>
      </form>
    </div>
  );
}
