import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface ImageWithRetryProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** Source to use if the main src fails */
  fallbackSrc?: string;
  /** CSS class for the retry button */
  retryClassName?: string;
}

/**
 * Image component that falls back to a placeholder and offers a retry button when the image fails to load.
 */
export function ImageWithRetry({
  src,
  fallbackSrc = '/images/image-placeholder.svg',
  className,
  retryClassName,
  ...props
}: ImageWithRetryProps) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [failed, setFailed] = useState(false);

  const handleError = () => {
    setFailed(true);
    setCurrentSrc(fallbackSrc);
  };

  const handleRetry = () => {
    setFailed(false);
    setCurrentSrc(src);
  };

  return (
    <div className={cn('relative inline-block', className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img {...props} src={currentSrc} onError={handleError} loading="lazy" />
      {failed && (
        <button
          type="button"
          onClick={handleRetry}
          className={cn('absolute bottom-1 right-1 text-xs underline', retryClassName)}
        >
          Retry
        </button>
      )}
    </div>
  );
}

export default ImageWithRetry;
