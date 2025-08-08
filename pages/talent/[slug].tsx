import React from 'react';
import { useRouter } from 'next/router';

export default function TalentSlugPage() {
  const router = useRouter();
  const { slug } = router.query as { slug?: string };
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold">Talent: {slug || '...'}</h1>
      <p className="text-gray-600 dark:text-gray-400 mt-2">This page is under construction.</p>
    </div>
  );
}