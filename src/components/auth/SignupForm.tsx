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
import { Checkbox } from '@/components/ui/checkbox';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';

const schema = z
  .object({
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    email: z.string().email('Please enter a valid email'),
    password: z
      .string()
      .min(8, 'Password must be at least 8 characters')
      .regex(/[A-Z]/, 'Password must include an uppercase letter')
      .regex(/[a-z]/, 'Password must include a lowercase letter')
      .regex(/[0-9]/, 'Password must include a number'),
    confirmPassword: z.string(),
    terms: z.boolean().refine((v) => v, { message: 'You must accept the terms' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords do not match',
  });

type FormValues = z.infer<typeof schema>;

export default function SignupForm() {
  const router = useRouter(); // Changed from navigate
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      terms: false,
    },
  });

  const onSubmit = async (values: FormValues) => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    try {
      await axios.post('/api/auth/register', {
        name: `${values.firstName} ${values.lastName}`,
        email: values.email,
        password: values.password,
      });
      try {
        // Auto login using NextAuth credentials provider
        // ignore error handling to mimic smooth flow
        const { signIn } = await import('next-auth/react');
        await signIn('credentials', {
          redirect: false,
          email: values.email,
          password: values.password,
        });
      } catch (_) {}
      toast.success('Welcome to Zion Tech Marketplace 🎉');
      router.push('/dashboard'); // Changed from navigate
    } catch (err: any) {
      const message = err.response?.data?.message || err.message || 'Signup failed';
      toast.error(message);
      form.setError('root', { message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto w-full max-w-sm lg:w-96 p-4 mt-16">
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
            name="firstName"
            render={({ field }: { field: ControllerRenderProps<FormValues, "firstName"> }) => (
              <FormItem>
                <FormLabel>First name</FormLabel>
                <FormControl>
                  <Input autoComplete="given-name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }: { field: ControllerRenderProps<FormValues, "lastName"> }) => (
              <FormItem>
                <FormLabel>Last name</FormLabel>
                <FormControl>
                  <Input autoComplete="family-name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }: { field: ControllerRenderProps<FormValues, "email"> }) => (
              <FormItem>
                <FormLabel>Email address</FormLabel>
                <FormControl>
                  <Input type="email" autoComplete="off" {...field} />
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
          <FormField
            control={form.control}
            name="terms"
            render={({ field }: { field: ControllerRenderProps<FormValues, "terms"> }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>I agree to the <Link href="/terms">Terms</Link></FormLabel>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? 'Creating Account...' : 'Create Account'}
          </Button>
        </form>
      </Form>
    </div>
  );
}
