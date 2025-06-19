import { useState } from 'react';
import { useRouter } from 'next/router'; // Changed from react-router-dom
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { Helmet } from 'react-helmet-async';
import { AuthLayout } from '@/layout';

const SignupSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
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
      
      try {
        const res = await axios.post('/api/auth/register', {
          name: values.name,
          email: values.email,
          password: values.password
        });
        
        if (res.status === 201) {
          toast({
            title: 'Account created successfully!',
            description: 'Welcome to the platform. You can now log in.',
          });
          router.push('/login'); // Changed from navigate
        }
      } catch (err: any) {
        const status = err.response?.status;
        const message = err.response?.data?.message || 'Signup failed';
        
        if (status === 409) {
          // Handle duplicate email specifically
          const duplicateMessage = 'Email already registered';
          setErrorMessage(duplicateMessage);
          setErrors({ email: duplicateMessage });
          
          // Show toast notification
          toast({
            title: 'Signup failed',
            description: duplicateMessage,
            variant: 'destructive',
          });
        } else {
          // Handle other errors
          setErrorMessage(message);
          setErrors({ confirm: message });
          
          // Show toast notification for other errors
          toast({
            title: 'Signup failed',
            description: message,
            variant: 'destructive',
          });
        }
      } finally {
        setLoading(false);
      }
    }
  });

  return (
    <AuthLayout>
      <Helmet>
        <link rel="stylesheet" href="/static/css/main.css" />
      </Helmet>
      <div className="flex min-h-screen items-center justify-center p-4">
        <form onSubmit={formik.handleSubmit} className="w-full max-w-sm space-y-4" noValidate>
          {/* Show Alert component for errors */}
          {errorMessage && (
            <Alert variant="destructive" data-testid="error-alert">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{errorMessage}</AlertDescription>
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
            />
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
            />
            <label htmlFor="terms" className="text-sm">
              I agree to the Terms and Conditions
            </label>
          </div>
          {formik.touched.terms && formik.errors.terms && (
            <div className="text-red-500 text-sm">{formik.errors.terms}</div>
          )}
          
          <Button type="submit" disabled={loading} data-testid="signup-submit">
            {loading ? 'Creating Account...' : 'Create Account'}
          </Button>
        </form>
      </div>
    </AuthLayout>
  );
}
