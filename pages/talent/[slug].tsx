import React from 'react';
import { useRouter } from 'next/router';
export default function TalentProfile() {
  const router = useRouter();
  const { slug } = router.query as { slug?: string };
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-2xl font-semibold">Talent: {slug}</h1>
      <p className="text-gray-600">This page is under construction.</p>
    </div>
  );
}