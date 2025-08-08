import Head from 'next/head';

export default function ProductsPage() {
  return (
    <>
      <Head><title>Products</title></Head>
      <div className="py-10">
        <h1 className="text-3xl font-semibold mb-4">Products</h1>
        <p className="text-gray-600 dark:text-gray-300">Product listings coming soon.</p>
      </div>
    </>
  );
}