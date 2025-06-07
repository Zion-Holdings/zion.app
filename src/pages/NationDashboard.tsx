import React from 'react';
import { useRouter } from 'next/router';

export default function NationDashboard() {
  const router = useRouter();
  const { slug } = router.query as { slug?: string };
  if (!slug) return null;

  return (
    <div className="container mx-auto py-8 space-y-6">
      <h1 className="text-3xl font-bold text-white">Dashboard for {slug}</h1>
      <ul className="list-disc pl-6 text-gray-300 space-y-2">
        <li>Population metrics</li>
        <li>Talent vs. Client ratio</li>
        <li>Nation currency details</li>
        <li>Editable roadmap</li>
        <li>DAO proposals for this nation</li>
      </ul>
    </div>
  );
}
