import React from 'react';
import { useRouter } from 'next/router';
import EnhancedLayout from '../../components/layout/EnhancedLayout';

export default function TalentDetailPage() {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <EnhancedLayout>
      <h1 className="text-2xl font-semibold">Talent: {String(slug || '')}</h1>
      <p className="text-gray-600">Details coming soon.</p>
    </EnhancedLayout>
  );
}