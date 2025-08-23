import React, { useState } from 'react';
import Link from 'next/link'; // Changed from react-router-dom
import { forgotPassword } from '@/services/auth';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    try {
      await forgotPassword(email);
      setMessage(
        'Password reset instructions sent to your email if it exists in our system.'
      );
    } catch (err) {
      setMessage(err.message || 'Failed to send reset instructions.');
    }
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Send Reset Link</button>
      </form>
      {message && <p>{message}</p>}
      <p>
        Remember your password? <Link href="/login">Login</Link>
      </p>
    </div>
  );
};

export default ForgotPassword;
