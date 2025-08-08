import type { NextPage } from 'next';

const NotFoundPage: NextPage = () => {
  return (
    <div className="py-12">
      <h1 className="text-2xl font-semibold">404 - Page Not Found</h1>
      <p className="text-gray-600 dark:text-gray-400 mt-2">The page you are looking for does not exist.</p>
    </div>
  );
};

export default NotFoundPage;