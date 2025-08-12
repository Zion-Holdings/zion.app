import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function NationProfilePage() {
  const router = useRouter();
  const { slug } = router.query as { slug?: string };
  if (!slug) return null;

  return (
    <div className="container mx-auto py-8 space-y-4">
      <h1 className="text-3xl font-bold text-white">Nation: {slug}</h1>
      <p className="text-gray-300">This is a public profile for the nation.</p>
      <Link
        className="text-primary underline"
        href={`/nations/${slug}/dashboard`}
      >
        View Dashboard
      </Link>
    </div>
  );
}
