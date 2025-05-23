
import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm, type UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail } from "lucide-react";

import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// Form validation schema
const forgotPasswordSchema = z.object({
  email: z.string().email("Please enter a valid email"),
});

type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;

export default function ForgotPassword() {
  const { resetPassword, isLoading } = useAuth();
  const [submitted, setSubmitted] = useState(false);
  
  // Initialize react-hook-form
  const form = useForm({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  }) as UseFormReturn<ForgotPasswordFormValues>;

  // Form submission handler
  const onSubmit = async (data: ForgotPasswordFormValues) => {
    await resetPassword(data.email);
    setSubmitted(true);
  };

  return (
    <>
      <Header />
      <div className="flex min-h-screen bg-zion-blue">
        <div className="flex-1 flex flex-col justify-center px-4 py-12 sm:px-6 lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tight text-white">
                Reset your password
              </h2>
              <p className="mt-2 text-sm text-zion-slate-light">
                Enter your email and we'll send you a link to reset your password.
              </p>
            </div>

            <div className="bg-zion-blue-dark rounded-lg p-6">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-zion-purple/20 mb-4">
                    <Mail className="h-6 w-6 text-zion-purple" />
                  </div>
                  <h3 className="text-lg font-medium text-white">Check your email</h3>
                  <p className="mt-2 text-sm text-zion-slate-light">
                    We've sent a password reset link to your email address.
                  </p>
                  <div className="mt-6">
                    <Link
                      to="/login"
                      className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-4 py-2 rounded inline-flex items-center justify-center"
                    >
                      Back to login
                    </Link>
                  </div>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-zion-slate-light">Email address</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Input
                                placeholder="you@example.com"
                                className="bg-zion-blue pl-10 text-white placeholder:text-zion-slate border-zion-blue-light focus:border-zion-purple"
                                {...field}
                              />
                              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
                            </div>
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
                      disabled={isLoading}
                    >
                      {isLoading ? "Sending..." : "Reset Password"}
                    </Button>

                    <div className="text-center">
                      <Link
                        to="/login"
                        className="text-sm font-medium text-zion-cyan hover:text-zion-cyan-light"
                      >
                        Back to login
                      </Link>
                    </div>
                  </form>
                </Form>
              )}
            </div>
          </div>
        </div>
        <div className="hidden lg:block relative w-0 flex-1">
          <div className="absolute inset-0 h-full w-full object-cover bg-gradient-to-tr from-zion-blue-dark via-zion-purple to-zion-cyan opacity-80">
            <div className="flex flex-col justify-center items-center h-full px-8">
              <div className="max-w-md text-center">
                <h3 className="text-3xl font-bold text-white mb-4">Account Recovery</h3>
                <p className="text-lg text-white/80">
                  We'll help you get back into your account so you can continue your journey in the Zion marketplace.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
