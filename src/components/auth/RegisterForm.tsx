import { useState } from 'react';
import { useForm, ControllerRenderProps } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useRouter } from 'next/router'; // Changed from react-router-dom
import Link from 'next/link'; // Changed from react-router-dom
import axios from 'axios';
import { toast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';

const schema = z
  .object({
    email: z.string().email('Please enter a valid email'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords do not match',
  });

type FormValues = z.infer<typeof schema>;

export default function RegisterForm() {
  const router = useRouter(); // Changed from navigate
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { email: '', password: '', confirmPassword: '' },
  });

  const onSubmit = async (data: FormValues) => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    try {
      const res = await axios.post('/api/auth/register', {
        email: data.email,
        password: data.password,
      });
      if (res.status === 201) {
        router.push('/login'); // Changed from navigate
      }
    } catch (err: any) {
      const status = err.response?.status;
      if (status === 409) {
        toast.error('Email already exists');
        form.setError('root', { message: 'Email already exists' });
      } else {
        const message = err.response?.data?.message || err.message || 'Registration failed';
        form.setError('root', { message });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto w-full max-w-sm lg:w-96 p-4">
      <h2 className="text-3xl font-bold tracking-tight text-white text-center mb-6">Create account</h2>
      <Form {...form}>
        {form.formState.errors.root && (
          <p className="text-red-500 mb-2" data-testid="error-message">
            {form.formState.errors.root.message}
          </p>
        )}
        <form
          onSubmit={form.handleSubmit(onSubmit, (errors) => {
            const firstError = Object.keys(errors)[0] as keyof FormValues;
            if (firstError) form.setFocus(firstError);
          })}
          className="space-y-4"
          noValidate
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }: { field: ControllerRenderProps<FormValues, "email"> }) => (
              <FormItem>
                <FormLabel>Email address</FormLabel>
                <FormControl>
                  <Input type="email" autoComplete="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }: { field: ControllerRenderProps<FormValues, "password"> }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" autoComplete="new-password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }: { field: ControllerRenderProps<FormValues, "confirmPassword"> }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input type="password" autoComplete="new-password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? 'Creating Account...' : 'Create Account'}
          </Button>
        </form>
      </Form>
      <p className="text-sm mt-4 text-center">
        <Link href="/login" className="text-blue-400 underline">
          Already have an account? Sign in
        </Link>
      </p>
    </div>
  );
}
