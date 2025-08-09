import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

export default function BlogIndex() {
  return (
    <div className="space-y-2">
      <h1 className="text-3xl font-bold">Blog</h1>
      <p className="text-gray-600 dark:text-gray-300">Thoughts on AI, autonomy, and product engineering.</p>
    </div>
  );
}