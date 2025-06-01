import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAuth } from '@/hooks/useAuth';
import { toast } from '@/hooks/use-toast';

const SignupSchema = Yup.object({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
});

export default function SimpleSignup() {
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: SignupSchema,
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        const res = await fetch('/api/auth/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values),
        });

        if (!res.ok) {
          const data = await res.json().catch(() => ({ message: 'Signup failed' }));
          setErrors({ email: data.message || 'Signup failed' });
          return;
        }

        const data = await res.json();
        if (data?.user && setUser) {
          setUser(data.user);
        }

        toast.success('Welcome to Zion!');
        navigate('/marketplace');
      } catch (err: any) {
        toast.error(err?.message || 'Signup failed');
      } finally {
        setSubmitting(false);
      }
    },
  });

  useEffect(() => {
    if (formik.submitCount > 0 && Object.keys(formik.errors).length > 0) {
      const firstError = Object.keys(formik.errors)[0];
      const element = document.getElementsByName(firstError)[0] as HTMLElement | undefined;
      element?.focus();
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
