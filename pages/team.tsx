import React from 'react';
import dynamic from 'next/dynamic';

const OrgChartPage = dynamic(() => import('../components/org/OrgChartPage'), { ssr: false });

export default function TeamPage() {
  return <OrgChartPage />;
}