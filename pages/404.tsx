import React from 'react';
import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Page not found</h1>
      <Link href="/"><a className="underline">Return home</a></Link>
    </div>
  );
}