import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  placeholder?: string;
  fallback?: string;
  priority?: boolean;
  sizes?: string;
  loading?: 'lazy' | 'eager';
  onLoad?: () => void;
  onError?: () => void;
  aspectRatio?: 'square' | 'video' | 'auto' | number;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  blur?: boolean;
  quality?: number;
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  placeholder = '/images/placeholder.svg',
  fallback = '/images/fallback.svg',
  priority = false,
  sizes = '100vw',
  loading = 'lazy',
  onLoad,
  onError,
  aspectRatio = 'auto',
  objectFit = 'cover',
  blur = false,
  quality = 75
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || !imgRef.current) return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observerRef.current?.disconnect();
        }
      },
      {
        rootMargin: '50px',
        threshold: 0.1
      }
    );

    observerRef.current.observe(imgRef.current);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  const getAspectRatioClass = () => {
    if (typeof aspectRatio === 'number') {
      return `aspect-[${aspectRatio}]`;
    }
    
    switch (aspectRatio) {
      case 'square':
        return 'aspect-square';
      case 'video':
        return 'aspect-video';
      default:
        return '';
    }
  };

  const getObjectFitClass = () => {
    switch (objectFit) {
      case 'cover':
        return 'object-cover';
      case 'contain':
        return 'object-contain';
      case 'fill':
        return 'object-fill';
      case 'none':
        return 'object-none';
      case 'scale-down':
        return 'object-scale-down';
      default:
        return 'object-cover';
    }
  };

  // Generate responsive image sources
  const generateSrcSet = (imageSrc: string) => {
    if (!imageSrc.includes('http')) return imageSrc;
    
    const baseUrl = imageSrc.split('?')[0];
    const params = new URLSearchParams(imageSrc.split('?')[1] || '');
    
    const widths = [320, 640, 768, 1024, 1280, 1920];
    const srcSet = widths
      .filter(w => !width || w <= width)
      .map(w => {
        params.set('w', w.toString());
        params.set('q', quality.toString());
        return `${baseUrl}?${params.toString()} ${w}w`;
      })
      .join(', ');
    
    return srcSet;
  };

  const currentSrc = hasError ? fallback : (isInView ? src : placeholder);
  const srcSet = generateSrcSet(currentSrc);

  return (
    <div
      className={cn(
        'relative overflow-hidden',
        getAspectRatioClass(),
        className
      )}
      style={{
        width: width ? `${width}px` : 'auto',
        height: height ? `${height}px` : 'auto'
      }}
    >
      <AnimatePresence mode="wait">
        {!isLoaded && (
          <motion.div
            key="placeholder"
            className="absolute inset-0 bg-zion-slate-light/20 animate-pulse"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </AnimatePresence>

      <img
        ref={imgRef}
        src={currentSrc}
        alt={alt}
        width={width}
        height={height}
        className={cn(
          'w-full h-full transition-opacity duration-300',
          getObjectFitClass(),
          isLoaded ? 'opacity-100' : 'opacity-0'
        )}
        loading={loading}
        sizes={sizes}
        srcSet={srcSet}
        onLoad={handleLoad}
        onError={handleError}
        style={{
          filter: blur && !isLoaded ? 'blur(10px)' : 'none'
        }}
      />

      {/* Loading overlay */}
      {!isLoaded && isInView && (
        <div className="absolute inset-0 flex items-center justify-center bg-zion-slate-dark/50">
          <div className="w-8 h-8 border-2 border-zion-purple border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-zion-slate-dark/50">
          <div className="text-center text-zion-slate-light">
            <div className="w-12 h-12 bg-zion-slate-light/20 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-2xl">🖼️</span>
            </div>
            <p className="text-sm">Image failed to load</p>
          </div>
        </div>
      )}
    </div>
  );
}

// Avatar image component
export function AvatarImage({
  src,
  alt,
  size = 'md',
  className,
  ...props
}: Omit<OptimizedImageProps, 'aspectRatio' | 'objectFit'> & {
  size?: 'sm' | 'md' | 'lg' | 'xl';
}) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  return (
    <OptimizedImage
      src={src}
      alt={alt}
      aspectRatio="square"
      objectFit="cover"
      className={cn(sizeClasses[size], 'rounded-full', className)}
      {...props}
    />
  );
}

// Hero image component
export function HeroImage({
  src,
  alt,
  className,
  ...props
}: Omit<OptimizedImageProps, 'aspectRatio' | 'objectFit'>) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      aspectRatio="video"
      objectFit="cover"
      className={cn('w-full', className)}
      priority
      {...props}
    />
  );
}