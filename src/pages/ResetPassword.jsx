import React, { useState, useEffect } from 'react'; // Added React import
import { useParams, useNavigate, Link } from 'react-router-dom'; // Added Link
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
// import { PasswordStrengthMeter } from '@/components/PasswordStrengthMeter'; // Assuming this component exists - Commented out for now if not essential for this step
import { toast } from '@/hooks/use-toast'; // Assuming this hook exists

import { resetPassword as resetPasswordService } from '../../services/auth'; // Adjust path as needed


const ResetPassword = () => { // Changed component name
  const { uid, token } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  // const [isLoading, setIsLoading] = useState(false); // isLoading not in provided snippet, handled by component's own logic if any
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    console.log("ResetPassword page loaded with UID:", uid, "Token:", token);
    // Removed original !token check as it's now handled in handleSubmit
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

    if (!uid || !token) {
      setError('Missing UID or token from URL.');
      // toast.error('Missing UID or token from URL.'); // Optional: use toast for this error too
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      toast.error('Passwords do not match.');
      return;
    }

    // Basic password strength check can remain if desired, or be removed if service handles it
    if (password.length < 8) {
      setError('Password must be at least 8 characters long.');
      toast.error('Password must be at least 8 characters long.');
      return;
    }

    // setIsLoading(true); // Not in snippet, assuming component handles its own loading state if necessary
    try {
      // Call the updated service function with uid, token, and password
      const { data } = await resetPasswordService(uid, token, password);

      setMessage(data?.message || 'Password has been reset successfully. You can now login.');
      // toast.success(data?.message || 'Password has been reset successfully. You can now login.'); // Alternative to setMessage

      setTimeout(() => {
        navigate('/login');
      }, 2000); // Give time for user to see message
    } catch (err) {
      console.error("Reset password error:", err);
      const errorMessage = err.message || 'Failed to reset password. The link may be invalid or expired.';
      setError(errorMessage);
      toast.error(errorMessage);
    }
    // finally {
    //   setIsLoading(false); // Not in snippet
    // }
  };

  // The form structure from the problem description is simpler, using that as a base
  // and integrating the error/message display.
  return (
    <div>
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="password">New Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Using setPassword directly from snippet
            required
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm New Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)} // Using setConfirmPassword directly
            required
          />
        </div>
        <button type="submit">Reset Password</button>
      </form>
      {message && <p style={{ color: 'green' }}>{message}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <p>
        Remembered your password? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default ResetPassword; // Changed export name
