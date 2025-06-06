import React from 'react';
import { useParams } from 'react-router-dom';

export default function NationDashboard() {
  const { slug } = useParams<{ slug: string }>();

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
