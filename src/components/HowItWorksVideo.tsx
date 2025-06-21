import React from 'react';

export function HowItWorksVideo() {
  return (
    <div className="mt-10 flex justify-center">
      <div className="aspect-video w-full max-w-4xl">
        <iframe
          className="w-full h-full rounded-lg shadow-lg"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="How Zion Marketplace Works"
          allowFullScreen
        />
      </div>
    </div>
  );
}
