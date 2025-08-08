import type { NextPage } from 'next';

const ErrorPage: NextPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold">500 - Server Error</h1>
      <p>Something went wrong. Please try again later.</p>
    </div>
  );
};

export default ErrorPage;