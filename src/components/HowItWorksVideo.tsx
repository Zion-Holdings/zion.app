import React from 'react';

export function HowItWorksVideo() {
  return (
    <div className="mt-10 flex justify-center">
      <div className="aspect-video w-full max-w-4xl">
        <iframe
          className="w-full h-full rounded-lg shadow-lg"
          src="https://www.youtube.com/embed/OYxhW22Kv30?mute=1&controls=1"
          title="How Zion Marketplace Works"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}
