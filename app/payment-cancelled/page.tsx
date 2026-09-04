import Link from 'next/link';

export default function PaymentCancelled() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-8">
      <div className="text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 mb-4">
          <svg className="h-6 w-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Payment Cancelled</h1>
        <p className="text-lg text-gray-600 mb-6">
          No payment was processed. You can try again or explore other options.
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
