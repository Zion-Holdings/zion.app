import React, { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SignupForm from '@/components/auth/SignupForm';
import { fireEvent } from '@/lib/analytics';
import { useRouter } from 'next/router';

const RegisterPage = () => {
  const router = useRouter();

  useEffect(() => {
    fireEvent('signup_page_view');
  }, []);

  const handleSuccess = () => {
    // Redirect to login or a verification pending page, as per app flow
    // For now, let's redirect to login page after successful registration
    router.push('/auth/login?registrationSuccess=true');
  };

  return (
    <>
      <Head>
        <title>Create Account - Zion Tech Marketplace</title>
        <meta name="description" content="Create your Zion Tech Marketplace account" />
      </Head>

      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="/logos/zion-logo.png"
              alt="Zion Tech"
              loading="lazy"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                // Attempt to load from a more generic path if the specific one fails or hide
                // target.src = '/zion-logo.png'; // Fallback if your public folder has it at root
                target.style.display = 'none'; // Or just hide if not found
              }}
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Create your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{' '}
              <Link href="/auth/login" className="font-medium text-blue-600 hover:text-blue-500">
                sign in if you already have an account
              </Link>
            </p>
          </div>

          <SignupForm onSuccess={handleSuccess} />

          <div className="text-center mt-4">
            <p className="text-xs text-gray-500">
              By creating an account, you agree to our{' '}
              <Link href="/legal/terms" className="text-blue-600 hover:text-blue-500">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link href="/legal/privacy" className="text-blue-600 hover:text-blue-500">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
