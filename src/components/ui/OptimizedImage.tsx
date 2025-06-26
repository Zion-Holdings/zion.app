import React from 'react';
import Image, { type ImageProps } from 'next/image';
import { cn } from '@/lib/utils';

interface OptimizedImageProps extends Omit<ImageProps, 'src' | 'alt'> {
  src: string;
  alt: string;
}

export function OptimizedImage({ src, alt, className, ...rest }: OptimizedImageProps) {
  const fill = !('width' in rest) && !('height' in rest);
  return (
    <Image
      src={src}
      alt={alt}
      className={cn(className)}
      loading="lazy"
      decoding="async"
      fill={fill}
      sizes={fill ? rest.sizes || '100vw' : rest.sizes}
      {...rest}
    />
  );
}

