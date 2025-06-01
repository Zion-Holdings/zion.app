import { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { safeStorage } from '@/utils/safeStorage';
import { LoginContent } from '@/components/auth/login';

export default function Login() {
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');
    if (token) {
      safeStorage.setItem('auth.token', token);
      navigate('/');
    }
  }, [navigate]);

  if (isAuthenticated && user?.profileComplete) {
    return <Navigate to="/" />;
  }

  if (isAuthenticated && !user?.profileComplete) {
    return <Navigate to="/onboarding" />;
  }

  return (
    <>
      <LoginContent />
    </>
  );
}
