import { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { safeStorage } from '@/utils/safeStorage';
import { LoginContent } from '@/components/auth/login';

export default function Login() {
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleMessage = (e) => {
      if (e.data && e.data.token) {
        safeStorage.setItem('auth.token', e.data.token);
        window.removeEventListener('message', handleMessage);
        navigate('/');
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
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
