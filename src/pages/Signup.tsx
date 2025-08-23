import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'; // Changed from react-router-dom
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { LoadingSpinner } from '@/components/ui/enhanced-loading-states';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { PasswordStrengthMeter } from '@/components/PasswordStrengthMeter';
import { AuthButtons } from '@/components/AuthButtons';
import { AlertCircle, CheckCircle, Mail } from 'lucide-react';



import { toast } from '@/hooks/use-toast';
import { AuthLayout } from '@/layout';
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';


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
  const [healthCheckLoading, setHealthCheckLoading] = useState(true);
  const [healthCheckError, setHealthCheckError] = useState<string | null>(null);
  
  // Check if this is a partner signup
  const isPartnerSignup = router.query.type === 'partner';
  const signupSource = router.query.source as string || 'direct';

  const performHealthCheck = async () => {
    setHealthCheckLoading(true);
    setHealthCheckError(null);
    try {
      const res = await axios.get('/api/auth/health');
      setAuthServiceAvailable(res.status === 200);
      if (res.status !== 200) {
        setHealthCheckError('Authentication service is experiencing issues');
      }
    } catch (err: any) {
      logErrorToProduction('Auth service health check failed', { data: err });
      setAuthServiceAvailable(false);
      // Set a more specific error message based on the error type
      if (err.code === 'NETWORK_ERROR' || err.message?.includes('Network Error')) {
        setHealthCheckError('Network connection issues detected');
      } else if (err.response?.status === 500) {
        setHealthCheckError('Authentication service is temporarily unavailable');
      } else {
        setHealthCheckError('Unable to verify authentication service status');
      }
    } finally {
      setHealthCheckLoading(false);
    }
  };

  useEffect(() => {
    performHealthCheck();
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
      logInfo('Form submission started with:', { 
        name: values.name, 
        email: values.email,
        hasPassword: !!values.password,
        isPartnerSignup 
      });
      
      setLoading(true);
      setErrorMessage(''); // Clear any previous error
      setSuccessMessage(''); // Clear any previous success message
      setEmailVerificationRequired(false);
      
      try {
        const requestData = {
          name: values.name,
          email: values.email,
          password: values.password,
          ...(isPartnerSignup && {
            userType: 'partner',
            source: signupSource,
            metadata: {
              partnerProgram: true,
              signupType: 'partner'
            }
          })
        };
        
        logInfo('Making API request to /api/auth/register with:', { 
          ...requestData, 
          password: '[REDACTED]' 
        });
        
        const res = await axios.post('/api/auth/register', requestData);
        
        logInfo('API response received:', { 
          status: res.status, 
          data: res.data 
        });
        
        if (res.status === 201) {
          const data = res.data;
          
          if (data.emailVerificationRequired) {
            // Email verification is required
            setEmailVerificationRequired(true);
            const message = isPartnerSignup 
              ? 'Partner application submitted! Please check your email to verify your account. Once verified, your partner application will be reviewed.'
              : 'Account created! Please check your email to verify your account.';
            setSuccessMessage(data.message || message);
            
            toast({
              title: isPartnerSignup ? 'Partner application submitted!' : 'Account created!',
              description: isPartnerSignup 
                ? 'Please verify your email. Your partner application will be reviewed after verification.'
                : 'Please check your email to verify your account before logging in.',
            });
          } else {
            // Account created and ready to use
            const message = isPartnerSignup 
              ? 'Partner application submitted successfully! You can now log in and your application will be reviewed.'
              : 'Account created successfully!';
            setSuccessMessage(data.message || message);
            
            toast({
              title: isPartnerSignup ? 'Partner application submitted!' : 'Account created successfully!',
              description: isPartnerSignup 
                ? 'Welcome to the partner program. You can now log in.'
                : 'Welcome to the platform. You can now log in.',
            });
            
            // Redirect to appropriate page after a short delay
            setTimeout(() => {
              router.push(isPartnerSignup ? '/partners' : '/login');
            }, 2000);
          }
        }
      } catch (err: any) {
        logErrorToProduction('Signup error details:', {
          message: err.message,
          response: err.response ? {
            status: err.response.status,
            statusText: err.response.statusText,
            data: err.response.data
          } : 'No response',
          request: err.request ? 'Request made but no response' : 'No request',
          config: err.config ? {
            url: err.config.url,
            method: err.config.method
          } : 'No config'
        });
        
        const status = err.response?.status;
        // Try both 'error' and 'message' fields for compatibility
        const errorMsg = err.response?.data?.error || err.response?.data?.message || 'Signup failed. Please try again.';
        
        logInfo('Processed error message:', { data: errorMsg });
        
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
        logInfo('Form submission completed, setting loading to false');
        setLoading(false);
      }
    }
  });

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    formik.setTouched({
      name: true,
      email: true,
      password: true,
      confirm: true,
      terms: true
    });
    await formik.handleSubmit(e);
  };

  // After successful registration, guide the user to the verification screen
  useEffect(() => {
    if (emailVerificationRequired && formik.values.email) {
      const timer = setTimeout(() => {
        router.push(`/verify-status?email=${encodeURIComponent(formik.values.email)}`);
      }, 3000);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [emailVerificationRequired, formik.values.email, router]);

  // Show loading state only during initial health check
  if (healthCheckLoading) {
    return (
      <AuthLayout>
        <div className="flex min-h-screen items-center justify-center p-4">
          <div className="text-center space-y-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
            <p className="text-muted-foreground">Initializing signup...</p>
          </div>
        </div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout>
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="w-full max-w-sm space-y-4">
          {isPartnerSignup && (
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold text-foreground">Partner Application</h1>
              <p className="text-sm text-muted-foreground mt-2">
                Join the Zion AI Partner Program and start earning rewards
              </p>
            </div>
          )}
          <form onSubmit={handleFormSubmit} className="space-y-4" noValidate>
          {/* Show Health Check Warning */}
          {healthCheckError && (
            <Alert variant="destructive" className="border-yellow-500 bg-yellow-50 text-yellow-900">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription className="flex items-center justify-between">
                <span>{healthCheckError}. You can still try to sign up, but it may fail.</span>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={performHealthCheck}
                  disabled={healthCheckLoading}
                  className="ml-2 text-xs"
                >
                  {healthCheckLoading ? 'Checking...' : 'Retry'}
                </Button>
              </AlertDescription>
            </Alert>
          )}
          
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
            <Button 
              type="submit" 
              disabled={loading} 
              data-testid="signup-submit"
              className={healthCheckError ? 'bg-yellow-600 hover:bg-yellow-700' : ''}
            >
              {loading ? (
                <>
                  <LoadingSpinner size="sm" className="mr-2" />
                  Creating Account...
                </>
              ) : (
                healthCheckError ? 'Try Creating Account' : 'Create Account'
              )}
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
          
          {/* Additional help text when service issues are detected */}
          {healthCheckError && (
            <div className="text-center text-xs text-muted-foreground mt-4 p-3 bg-muted rounded">
              <p>⚠️ We detected some authentication service issues.</p>
              <p>If signup fails, please try again in a few minutes or contact support.</p>
            </div>
          )}
          </form>
          {!emailVerificationRequired && (
            <div className="mt-6">
              <AuthButtons providers={["google", "github"]} />
            </div>
          )}
        </div>
      </div>
    </AuthLayout>
  );
}
