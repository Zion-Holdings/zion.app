import React from 'react';
import EnhancedLayout from '../components/layout/EnhancedLayout';

export default function NotFoundPage() {
  return (
    <EnhancedLayout>
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold">Page Not Found</h1>
        <p className="opacity-70 text-sm">The page you are looking for does not exist.</p>
      </div>
    </EnhancedLayout>
  );
}
