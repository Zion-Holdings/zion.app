import React, { useState } from 'react';
import Link from 'next/link';

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email.trim()) {
      setError('Please enter your email address');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubscribing(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In a real application, you would make an API call here
      // const response = await fetch('/api/newsletter', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email })
      // });

      setIsSubscribed(true);
      setEmail('');
      
      // Reset after 5 seconds
      setTimeout(() => {
        setIsSubscribed(false);
      }, 5000);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubscribing(false);
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (error) setError('');
  };

  if (isSubscribed) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <div className="text-4xl mb-3">🎉</div>
        <h3 className="text-lg font-semibold text-green-800 mb-2">
          Successfully Subscribed!
        </h3>
        <p className="text-green-700">
          Thank you for subscribing to our newsletter. You&apos;ll receive updates about our latest services, 
          industry insights, and exclusive offers.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-8">
      <div className="text-center mb-6">
        <div className="text-4xl mb-3">📧</div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Stay Updated with Zion Tech Group
        </h3>
        <p className="text-gray-600 max-w-md mx-auto">
          Get the latest updates on our revolutionary micro SAAS services, industry insights, 
          and exclusive offers delivered to your inbox.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1">
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email address"
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 ${
                error 
                  ? 'border-red-300 focus:ring-red-500' 
                  : 'border-gray-300 focus:border-blue-500'
              }`}
              disabled={isSubscribing}
            />
            {error && (
              <p className="text-red-600 text-sm mt-2 text-left">{error}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={isSubscribing}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg"
          >
            {isSubscribing ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Subscribing...
              </div>
            ) : (
              'Subscribe'
            )}
          </button>
        </div>
      </form>

      <div className="text-center mt-4">
        <p className="text-xs text-gray-500">
          By subscribing, you agree to our{' '}
          <Link href="/privacy-policy" className="text-blue-600 hover:text-blue-800 underline">
            Privacy Policy
          </Link>
          . You can unsubscribe at any time.
        </p>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-4 text-center">
        <div className="text-center">
          <div className="text-2xl mb-2">🚀</div>
          <p className="text-xs text-gray-600">Latest Services</p>
        </div>
        <div className="text-center">
          <div className="text-2xl mb-2">💡</div>
          <p className="text-xs text-gray-600">Industry Insights</p>
        </div>
        <div className="text-center">
          <div className="text-2xl mb-2">🎁</div>
          <p className="text-xs text-gray-600">Exclusive Offers</p>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSignup;