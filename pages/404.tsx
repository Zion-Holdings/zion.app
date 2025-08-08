import React from 'react';
import EnhancedLayout from '../components/layout/EnhancedLayout';

export default function NotFoundPage() {
  return (
    <EnhancedLayout>
      <h1 className="text-2xl font-semibold">404</h1>
      <p className="text-gray-600">Page not found.</p>
    </EnhancedLayout>
  );
}