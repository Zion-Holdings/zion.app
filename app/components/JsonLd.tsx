'use client';
import type { ReactNode } from 'react';

type JsonLdProps = {
  data: unknown;
  children?: ReactNode;
};

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
