import React from 'react';
import { useRouter } from 'next/router';

export default function TalentSlugPage() {
  const router = useRouter();
  const { slug } = router.query as { slug?: string };
  return <div>Talent: {slug}</div>;
}