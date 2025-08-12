import React from 'react';

interface ErrorBannerProps {
  msg: string;
}

export function ErrorBanner({ msg }: ErrorBannerProps) {
  return (
    <div className="p-4 bg-red-500/20 text-red-400 text-center rounded-md">
      {msg}
    </div>
  );
}
