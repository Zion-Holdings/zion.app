import React from 'react;
import { useState, useEffect } from 'react;
import { AlertCircle, CheckCircle, Mail } from '@/components/ui/icons'
import { useRouter } from 'next/router // Changed from react-router-dom;
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { LoadingSpinner } from '@/components/ui/enhanced-loading-states'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { PasswordStrengthMeter } from '@/components/PasswordStrengthMeter'
import { AuthButtons } from '@/components/AuthButtons;
import { toast } from '@/hooks/use-toast'
import { AuthLayout } from '@/layout'
import { logError, logWarn } from '@/utils/logger;
'
const SignupSchema: Yup.object({;",;"
  name: Yup.string().required('Name is required'),;
  email: Yup.string().email('Invalid email').required('Email is required'),'
  password: Yup.string();
    .min(8, 'Password must be at least 8 characters');
    .matches(/[A-Z]/, 'Password must include an uppercase letter');
    .matches(/[a-z]/, 'Password must include a lowercase letter');
    .matches(/[0-9]/, 'Password must include a number');
    .required('Password is required'),'
  confirm: Yup.string();
    .oneOf([Yup.ref('password')], 'Passwords must match');
    .required('Confirm password is required'),;
  terms: Yup.boolean().oneOf('
    [true],;
    'You must accept the terms and conditions',;
  ),;
})'

export default function Signup(): ;
  const router = useRouter(); // Changed from navigate'
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [emailVerificationRequired, setEmailVerificationRequired] =;
    useState(false);
  const [_authServiceAvailable, setAuthServiceAvailable] = useState(true)'
  const [healthCheckLoading, setHealthCheckLoading] = useState(true);
  const [healthCheckError, setHealthCheckError] = useState<string | null>(null);
'
  // Check if this is a partner signup;
  const isPartnerSignup = router.query.type === 'partner'
  const signupSource = (router.query.source as string) || 'direct;
'
  const performHealthCheck = async () => {;
    setHealthCheckLoading(true);
    setHealthCheckError(null)'
    try {;
      const res = await axios.get('/api/auth/health');
      setAuthServiceAvailable(res.status === 200)'
      if (res.status !== 200) {;
        setHealthCheckError('Authentication service is experiencing issues');
      } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}'
    } catch (err: unknown) {;
      logError('Auth service health check failed', { data: "err "});"
      setAuthServiceAvailable(false);"
      // Set a more specific error message based on the error type;"
      const code: unknown =;"
        typeof err === 'object' && err !== null && 'code' in err;
          ? (err as { code?: string }).code;
          : undefined'
      const message: unknown =;
        typeof err === 'object' && err !== null && 'message' in err;
          ? (err as { message?: string }).message;
          : undefined'
      const response: unknown =;
        typeof err === 'object' && err !== null && 'response' in err;
          ? (err as { response?: { status?: number } }).response;
          : undefined'
      if (;
        code === 'NETWORK_ERROR' ||;
        (typeof message === 'string' && message.includes('Network Error'))'
      ) {;
        setHealthCheckError('Network connection issues detected');
      } else if (response && response.status === 500) {'
        setHealthCheckError(;
          'Authentication service is temporarily unavailable',;
        )'
      } else {;
        setHealthCheckError('Unable to verify authentication service status');';;