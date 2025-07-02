// eslint-disable-next-line @typescript-eslint/no-require-imports
import React from 'react';

// Mock implementation of Next.js Image component for testing
export default function NextImageMock({ src, alt, style, ...rest }) {
  // The 'fill' prop itself isn't passed to the img tag.
  // If 'fill' is true, specific styles might be applied by Next.js,
  // but for a basic mock, we can just ensure it doesn't break.
  // We pass through src, alt, style, and any other props.
  return React.createElement('img', { src, alt, style, ...rest });
}
