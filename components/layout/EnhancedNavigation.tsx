import React from 'react';
import Link from 'next/link';

export default function EnhancedNavigation() {
  return (
    <nav className="p-4 border-b flex gap-4">
      <Link href="/">Home</Link>
      <Link href="/blog">Blog</Link>
    </nav>
  );
}