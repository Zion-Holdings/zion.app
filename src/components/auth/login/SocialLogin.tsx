import { Button } from '@/components/ui/button';
import { Loader2, Facebook, Twitter } from '@/components/ui/icons';
import { Web3Login } from './Web3Login';
import { useState } from 'react';
import { openAuthPopup } from '@/api/authSocial';

export function SocialLogin() {
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogle = () => {
    setIsLoading(true);
    window.location.href = '/auth/google';
  };

  return (
    <div className="mt-6">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-zion-blue-light" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-zion-blue-dark text-zion-slate-light">
            Or continue with
          </span>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-4 gap-3">
        <Button
          type="button"
          variant="outline"
          className="w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan"
          onClick={handleGoogle}
          disabled={isLoading}
        >
          <span className="sr-only">Sign in with Google</span>
          {isLoading ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z"
                fill="#EA4335"
              />
              <path
                d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z"
                fill="#4285F4"
              />
              <path
                d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999 C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z"
                fill="#FBBC05"
              />
              <path
                d="M12.0004 24C15.2404 24 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24 12.0004 24Z"
                fill="#34A853"
              />
            </svg>
          )}
        </Button>
        <Button
          type="button"
          variant="outline"
          className="w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan"
          onClick={() => openAuthPopup('facebook')}
          disabled={isLoading}
        >
          <span className="sr-only">Sign in with Facebook</span>
          <Facebook className="h-5 w-5" />
        </Button>
        <Button
          type="button"
          variant="outline"
          className="w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan"
          onClick={() => openAuthPopup('twitter')}
          disabled={isLoading}
        >
          <span className="sr-only">Sign in with Twitter</span>
          <Twitter className="h-5 w-5" />
        </Button>
        <Web3Login />
      </div>
    </div>
  );
}
