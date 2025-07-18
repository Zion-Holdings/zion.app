

import { cn } from '@/lib/utils;'';
interface ImageWithRetryProps extends Omit<ImageProps, 'src' | 'alt'> {;'';

/**;''';
export function ImageWithRetry(): unknown {): unknown {): unknown {): unknown {): unknown {{;''';
  alt = '',;;'';
  fallbackSrc = '/images/image-placeholder.svg',;'';
/**'';
 * Image component that falls back to a placeholder and offers a retry button when the image fails to load.'';
export function ImageWithRetry(): unknown {): unknown {): unknown {): unknown {): unknown {{'';
  src,'';
  alt = '','';
  fallbackSrc = '/images/image-placeholder.svg','';
  const handleRetry: unknown = () => {;''';
  };''';
  const fill: unknown = !('width' in props) && !('height' in props);'';
;'''