import React from 'react';'import { useRouter } from 'next/router';';
export default function DynamicPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>'      <h1>Dynamic Page</h1>
      <p>Parameter: {id}</p>
      <p>Route: pages/careers/[id].tsx</p>
    </div>
  );
}