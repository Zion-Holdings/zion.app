import { useEffect } from 'react';
import { useRouter } from 'next/router'; // Changed from useNavigate
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAuth } from '@/hooks/useAuth';
import { toast } from '@/hooks/use-toast';
import { signup } from '@/services/signupApi';
import { PasswordStrengthMeter } from '@/components/PasswordStrengthMeter';
import {logErrorToProduction} from '@/utils/productionLogger';


const SignupSchema = Yup.object({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(/[A-Z]/, 'Password must include an uppercase letter')
    .matches(/[a-z]/, 'Password must include a lowercase letter')
    .matches(/[0-9]/, 'Password must include a number')
    .required('Password is required'),
});

export default function SimpleSignup() {
  const router = useRouter(); // Changed from navigate
  const { setUser } = useAuth();

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: SignupSchema,
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        const data = await signup({ email: values.email, password: values.password });
        
        if (data?.emailVerificationRequired) {
          // Email verification required
          toast.success('Account created! Please check your email to verify your account.');
          router.push('/login?message=verify-email');
        } else if (data?.user) {
          // Account created and ready to use
          toast.success('Welcome to Zion!');
          router.push('/marketplace');
        } else {
          // Unexpected response
          toast.success('Account created successfully!');
          router.push('/login');
        }
      } catch (err: any) {
        logErrorToProduction('Signup error:', { data: err.message });
        setErrors({ email: err.message });
        toast.error(err.message || 'Signup failed');
      } finally {
        setSubmitting(false);
      }
    },
  });

  useEffect(() => {
    if (formik.submitCount > 0 && Object.keys(formik.errors).length > 0) {
      const firstError = Object.keys(formik.errors)[0];
      if (firstError) {
        const element = document.getElementsByName(firstError)[0] as HTMLElement | undefined;
        element?.focus();
      }
    }
  }, [formik.errors, formik.submitCount]);

  return (
    <form onSubmit={formik.handleSubmit} className="p-4 space-y-2" noValidate>
      <div>
        <input
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          placeholder="Email"
          className="border px-2 py-1 w-full"
          aria-invalid={!!formik.errors.email && formik.touched.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="text-red-500 text-sm">{formik.errors.email}</div>
        ) : null}
      </div>
      <div>
        <input
          type="password"
          id="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          placeholder="Password"
          className="border px-2 py-1 w-full"
          aria-invalid={!!formik.errors.password && formik.touched.password}
        />
        <PasswordStrengthMeter password={formik.values.password} />
        {formik.touched.password && formik.errors.password ? (
          <div className="text-red-500 text-sm">{formik.errors.password}</div>
        ) : null}
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 disabled:opacity-50"
        disabled={formik.isSubmitting}
      >
        {formik.isSubmitting ? 'Signing Up...' : 'Sign Up'}
      </button>
    </form>
  );
}
