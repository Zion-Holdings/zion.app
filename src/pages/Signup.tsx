import { useState } from 'react';
import { useRouter } from 'next/router'; // Changed from react-router-dom
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { PasswordStrengthMeter } from '@/components/PasswordStrengthMeter';
import { AlertCircle, CheckCircle, Mail } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { Helmet } from 'react-helmet-async';
import { AuthLayout } from '@/layout';

const SignupSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(/[A-Z]/, 'Password must include an uppercase letter')
    .matches(/[a-z]/, 'Password must include a lowercase letter')
    .matches(/[0-9]/, 'Password must include a number')
    .required('Password is required'),
  confirm: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm password is required'),
  terms: Yup.boolean().oneOf([true], 'You must accept the terms and conditions')
});

export default function Signup() {
  const router = useRouter(); // Changed from navigate
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [emailVerificationRequired, setEmailVerificationRequired] = useState(false);
  const [authServiceAvailable, setAuthServiceAvailable] = useState(true);

  useEffect(() => {
    async function checkHealth() {
      try {
        const res = await axios.get('/api/auth/health');
        setAuthServiceAvailable(res.status === 200);
      } catch (err) {
        console.error('Auth service health check failed', err);
        setAuthServiceAvailable(false);
      }
    }
    checkHealth();
  }, []);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirm: '',
      terms: false
    },
    validationSchema: SignupSchema,
    onSubmit: async (values, { setErrors }) => {
      setLoading(true);
      setErrorMessage(''); // Clear any previous error
      setSuccessMessage(''); // Clear any previous success message
      setEmailVerificationRequired(false);
      
      try {
        const res = await axios.post('/api/auth/register', {
          name: values.name,
          email: values.email,
          password: values.password
        });
        
        if (res.status === 201) {
          const data = res.data;
          
          if (data.emailVerificationRequired) {
            // Email verification is required
            setEmailVerificationRequired(true);
            setSuccessMessage(data.message || 'Account created! Please check your email to verify your account.');
            
            toast({
              title: 'Account created!',
              description: 'Please check your email to verify your account before logging in.',
            });
          } else {
            // Account created and ready to use
            setSuccessMessage(data.message || 'Account created successfully!');
            
            toast({
              title: 'Account created successfully!',
              description: 'Welcome to the platform. You can now log in.',
            });
            
            // Redirect to login after a short delay
            setTimeout(() => {
              router.push('/login');
            }, 2000);
          }
        }
      } catch (err: any) {
        console.error('Signup error:', err);
        
        const status = err.response?.status;
        // Try both 'error' and 'message' fields for compatibility
        const errorMsg = err.response?.data?.error || err.response?.data?.message || 'Signup failed. Please try again.';
        
        if (status === 409) {
          // Handle duplicate email specifically
          setErrorMessage(errorMsg);
          setErrors({ email: errorMsg });
          
          // Show toast notification
          toast({
            title: 'Signup failed',
            description: errorMsg,
            variant: 'destructive',
          });
        } else if (status === 400) {
          // Handle validation errors (weak password, etc.)
          setErrorMessage(errorMsg);
          
          // Set the error on password field if it's password-related
          if (errorMsg.toLowerCase().includes('password')) {
            setErrors({ password: errorMsg });
          } else {
            setErrors({ confirm: errorMsg });
          }
          
          toast({
            title: 'Signup failed',
            description: errorMsg,
            variant: 'destructive',
          });
        } else {
          // Handle other errors (network, server, etc.)
          setErrorMessage(errorMsg);
          setErrors({ confirm: errorMsg });
          
          // Show toast notification for other errors
          toast({
            title: 'Signup failed',
            description: errorMsg,
            variant: 'destructive',
          });
        }
      } finally {
        setLoading(false);
      }
    }
  });

  if (!authServiceAvailable) {
    return (
      <AuthLayout>
        <div className="flex min-h-screen items-center justify-center p-4">
          <p className="text-red-500" data-testid="config-error-message">
            Signup is temporarily unavailable due to a server configuration issue. Please try again later.
          </p>
        </div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout>
      <Helmet>
        <link rel="stylesheet" href="/static/css/main.css" />
      </Helmet>
      <div className="flex min-h-screen items-center justify-center p-4">
        <form onSubmit={formik.handleSubmit} className="w-full max-w-sm space-y-4" noValidate>
          {/* Show Success message */}
          {successMessage && (
            <Alert className="border-green-500 bg-green-50 text-green-900" data-testid="success-alert">
              {emailVerificationRequired ? <Mail className="h-4 w-4" /> : <CheckCircle className="h-4 w-4" />}
              <AlertDescription>{successMessage}</AlertDescription>
            </Alert>
          )}
          
          {/* Show Error message */}
          {errorMessage && (
            <Alert variant="destructive" data-testid="error-alert">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{errorMessage}</AlertDescription>
            </Alert>
          )}
          
          {emailVerificationRequired && (
            <Alert className="border-blue-500 bg-blue-50 text-blue-900">
              <Mail className="h-4 w-4" />
              <AlertDescription>
                Before you can log in, please click the verification link in the email we sent to <strong>{formik.values.email}</strong>.
              </AlertDescription>
            </Alert>
          )}
          
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Full Name
            </label>
            <Input
              id="name"
              name="name"
              data-testid="name-input"
              value={formik.values.name}
              onChange={formik.handleChange}
              disabled={loading || emailVerificationRequired}
            />
            {formik.touched.name && formik.errors.name && (
              <div className="text-red-500 text-sm">{formik.errors.name}</div>
            )}
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email address
            </label>
            <Input
              id="email"
              type="email"
              name="email"
              data-testid="email-input"
              value={formik.values.email}
              onChange={formik.handleChange}
              disabled={loading || emailVerificationRequired}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500 text-sm">{formik.errors.email}</div>
            )}
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
          <Input
            id="password"
            type="password"
            name="password"
            data-testid="password-input"
            value={formik.values.password}
            onChange={formik.handleChange}
            disabled={loading || emailVerificationRequired}
          />
          <PasswordStrengthMeter password={formik.values.password} />
          {formik.touched.password && formik.errors.password && (
            <div className="text-red-500 text-sm">{formik.errors.password}</div>
          )}
        </div>
          
          <div>
            <label htmlFor="confirm" className="block text-sm font-medium">
              Confirm Password
            </label>
            <Input
              id="confirm"
              type="password"
              name="confirm"
              data-testid="confirm-password-input"
              value={formik.values.confirm}
              onChange={formik.handleChange}
              disabled={loading || emailVerificationRequired}
            />
            {formik.touched.confirm && formik.errors.confirm && (
              <div className="text-red-500 text-sm">{formik.errors.confirm}</div>
            )}
          </div>
          
          <div className="flex items-center space-x-2">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              data-testid="terms-checkbox"
              checked={formik.values.terms}
              onChange={formik.handleChange}
              disabled={loading || emailVerificationRequired}
            />
            <label htmlFor="terms" className="text-sm">
              I agree to the{' '}
              <Link href="/terms" className="underline">Terms of Service</Link>{' '}
              and{' '}
              <Link href="/privacy" className="underline">Privacy Policy</Link>
            </label>
          </div>
          {formik.touched.terms && formik.errors.terms && (
            <div className="text-red-500 text-sm">{formik.errors.terms}</div>
          )}
          
          {!emailVerificationRequired ? (
            <Button type="submit" disabled={loading} data-testid="signup-submit">
              {loading ? 'Creating Account...' : 'Create Account'}
            </Button>
          ) : (
            <div className="space-y-2">
              <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={() => router.push('/login')}
              >
                Go to Login
              </Button>
              <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={() =>
                  router.push(`/verify-status?email=${encodeURIComponent(formik.values.email)}`)
                }
              >
                Check Verification Status
              </Button>
              <Button
                type="button"
                variant="ghost"
                className="w-full text-sm"
                onClick={() => {
                  setEmailVerificationRequired(false);
                  setSuccessMessage('');
                }}
              >
                Try Different Email
              </Button>
            </div>
          )}
        </form>
      </div>
    </AuthLayout>
  );
}
