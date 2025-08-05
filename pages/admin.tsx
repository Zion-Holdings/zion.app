import type { NextPage } from 'next';
import Head from 'next/head';

const AdminPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Admin - Zion App</title>
        <meta name="description content=Admin panel for Zion App" />
      </Head>
      <div className="min-h-screen bg-gray-50 py-12>
        <div className=max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8>Admin Panel</h1>
          <div className=bg-white shadow rounded-lg p-6">
            <p className="text-gray-600">
              Welcome to the admin panel. This area is restricted to authorized users only.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPage;