import type { NextPage } from 'next';

const NotFoundPage: NextPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
      <p>Sorry, we couldn’t find that page.</p>
    </div>
  );
};

export default NotFoundPage;