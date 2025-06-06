import React from 'react';
import { useParams, Link } from 'react-router-dom';

export default function NationProfilePage() {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="container mx-auto py-8 space-y-4">
      <h1 className="text-3xl font-bold text-white">Nation: {slug}</h1>
      <p className="text-gray-300">This is a public profile for the nation.</p>
      <Link
        className="text-primary underline"
        to={`/nations/${slug}/dashboard`}
      >
        View Dashboard
      </Link>
    </div>
  );
}
