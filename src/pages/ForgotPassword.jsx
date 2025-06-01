import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { requestPasswordReset, verifyResetCode } from '@/api/auth';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [step, setStep] = useState('email'); // email -> code
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    try {
      await requestPasswordReset(email);
      setStep('code');
    } catch (err) {
      setMessage(err.message);
    }
  };

  const handleCodeSubmit = async (e) => {
    e.preventDefault();
    try {
      const { token } = await verifyResetCode(email, code);
      navigate(`/reset-password/${token}`);
    } catch (err) {
      setMessage(err.message);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      {step === 'email' && (
        <form onSubmit={handleEmailSubmit} className="space-y-4">
          <h2 className="text-xl font-bold">Forgot Password</h2>
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
          <button type="submit">Send Code</button>
        </form>
      )}
      {step === 'code' && (
        <form onSubmit={handleCodeSubmit} className="space-y-4">
          <h2 className="text-xl font-bold">Enter Verification Code</h2>
          <div>
            <label htmlFor="code">Code</label>
            <input
              type="text"
              id="code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              required
            />
          </div>
          <button type="submit">Verify</button>
        </form>
      )}
      {message && <p className="text-red-500 mt-4">{message}</p>}
      {step === 'email' && (
        <p className="mt-4">
          Remember your password? <Link to="/login">Login</Link>
        </p>
      )}
    </div>
  );
};

export default ForgotPassword;
