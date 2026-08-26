'use client';
import Link from 'next/link';
import { useEffect } from 'react';

export default function PaymentSuccess() {
  useEffect(() => {
    // You can verify the payment with Stripe using session_id from URL
    // const { searchParams } = new URL(window.location.href);
    // const session_id = searchParams.get('session_id');
    // Then verify with Stripe API if needed
    
    // Show success message
    alert('Payment successful! Thank you for your purchase.');
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-8">
      <div className="text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 mb-4">
          <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Payment Successful!</h1>
        <p className="text-lg text-gray-600 mb-6">
          Thank you for your payment. Your transaction was processed successfully.
        </p>
        <Link href="/" className="
          bg-purple-600
          hover:bg-purple-700
          text-white
          font-bold
          py-2 px-6
          rounded
          transition-colors
        ">
          Return to Home
        </Link>
      </div>
    </div>
  );
}
