import type { NextPage } from 'next';
import Link from 'next/link';

const ContactPage: NextPage = () => {
  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-xl w-full">
        <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
        <p className="mb-8 text-center text-gray-600 dark:text-gray-300">
          Feel free to reach out by email at{' '}
          <a className="text-blue-600 hover:underline" href="mailto:info@example.com">
            info@example.com
          </a>{' '}
          or use the form below.
        </p>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border rounded p-2"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border rounded p-2"
          />
          <textarea
            placeholder="Your Message"
            className="w-full border rounded p-2 h-32"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
          >
            Send Message
          </button>
        </form>
        <p className="mt-6 text-center">
          <Link href="/" className="text-blue-600 hover:underline">
            Back to Home
          </Link>
        </p>
      </div>
    </main>
  );
};

export default ContactPage;
