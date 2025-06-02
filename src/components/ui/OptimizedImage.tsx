import React from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  ...rest
}: OptimizedImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      width={width}
      height={height}
      className={cn(className)}
      {...rest}
    />
  );
}

