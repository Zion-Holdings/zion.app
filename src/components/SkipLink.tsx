import React from 'react';

export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="skip-link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      aria-label="Skip to main content"
    >
      Skip to content
    </a>
  );
}

export default SkipLink;

