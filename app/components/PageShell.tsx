import React from 'react';
export default function PageShell({ title, description, canonical, jsonLd, children }) {
  return (
    <>
      {jsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}></script>
      )}
      {children}
    </>
  );
}
