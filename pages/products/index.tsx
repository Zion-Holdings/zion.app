import type { NextPage } from 'next';
import Head from 'next/head';

const ProductsIndexPage: NextPage = () => (
  <div>
    <Head><title>Products</title></Head>
    <h1 className="text-2xl font-semibold">Products</h1>
    <p className="text-gray-600 dark:text-gray-400 mt-2">Our products catalog. (placeholder)</p>
  </div>
);

export default ProductsIndexPage;