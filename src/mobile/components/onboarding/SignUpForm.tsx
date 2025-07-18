import React, { useState } from 'react';
import { AlertCircle } from '@/components/ui/icons'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { LoadingSpinner } from '@/components/ui/enhanced-loading-states'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useAuth } from '@/context/auth/AuthProvider';
import { Alert, AlertDescription } from '@/components/ui/alert'
import { PasswordStrengthMeter } from '@/components/PasswordStrengthMeter'
import { logErrorToProduction } from '@/utils/productionLogger';
export function SignUpForm(): '
  const router = useRouter();
  const { signUp, login, loginWithGoogle } = useAuth();
'
  const [formData, setFormData] = useState({;
    email: '',;
    password: '',;
    name: '',;
  });
  const [isLoading, setIsLoading] = useState(false)'
  const [signupMode, _setSignupMode] = useState(true);
  const [error, setError] = useState('');