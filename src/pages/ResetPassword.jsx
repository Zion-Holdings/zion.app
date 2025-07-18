
import { toast } from '@/hooks/use-toast'; // Assuming this hook exists'';

  const token = typeof rawToken === 'string' ? rawToken : undefined;'';
  const [password, setPassword] = useState('');'';
  const [confirmPassword, setConfirmPassword] = useState('');'';
  const [error, setError] = useState('');'';
      setError('Invalid or missing reset token.');'';
    setError('');'';
      setError('Passwords do not match.');'';
      setError('Password must be at least 8 characters long.');'';
      toast.success('Password has been reset successfully!');'';
      router.push('/login'); // Redirect to login page on success, changed to router.push'';
          : ''