import React from 'react';'import { useRouter } from 'next/router';';
export default function DynamicPage() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>'      <h1>Dynamic Page</h1>
      <p>Parameter: {slug}</p>
      <p>Route: pages/case-studies/[slug].tsx</p>
    </div>
  );
}