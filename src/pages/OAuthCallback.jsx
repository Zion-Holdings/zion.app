import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { safeStorage } from '@/utils/safeStorage';

function decodeToken(token) {
  try {
    const payload = token.split('.')[1];
    return JSON.parse(atob(payload));
  } catch (e) {
    console.error('Failed to decode token', e);
    return null;
  }
}

export default function OAuthCallback() {
  const location = useLocation();
  const navigate = useNavigate();
  const { setUser } = useAuth();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get('token');
    const next = params.get('next');
    if (token) {
      safeStorage.setItem('token', token);
      if (setUser) {
        const user = decodeToken(token);
        if (user) setUser(user);
      }
      navigate(next || '/', { replace: true });
    }
  }, [location, navigate, setUser]);

  return <div>Loading...</div>;
}
