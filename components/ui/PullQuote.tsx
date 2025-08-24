import React from 'react';

export type PullQuoteProps = {
  children: React.ReactNode;
  attribution?: string;
};

export default function PullQuote({ children, attribution }: PullQuoteProps) {
  return (
    <figure className="my-8 p-6 border-l-4 border-gray-300 bg-gray-50 dark:bg-gray-900/40 dark:border-gray-700 print-avoid-break">
      <blockquote className="text-2xl italic leading-relaxed">{children}</blockquote>
      {attribution && <figcaption className="mt-3 text-sm text-gray-500">— {attribution}</figcaption>}
    </figure>
  );
}