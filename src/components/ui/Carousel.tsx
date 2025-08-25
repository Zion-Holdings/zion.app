import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, Circle } from 'lucide-react';

export interface CarouselItem {
  id: string;
  content: React.ReactNode;
  title?: string;
  description?: string;
}

export interface CarouselProps {
  items: CarouselItem[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showArrows?: boolean;
  showDots?: boolean;
  showPlayPause?: boolean;
  transition?: 'slide' | 'fade' | 'zoom' | 'flip';
  height?: number | string;
  className?: string;
  onItemChange?: (index: number, item: CarouselItem) => void;
}

export const Carousel: React.FC<CarouselProps> = ({
  items,
  autoPlay = true,
  autoPlayInterval = 5000,
  showArrows = true,
  showDots = true,
  showPlayPause = true,
  transition = 'slide',
  height = 400,
  className = '',
  onItemChange
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout>();
  const carouselRef = useRef<HTMLDivElement>(null);

  const goToSlide = useCallback((index: number) => {
    if (index === currentIndex || isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex(index);
    onItemChange?.(index, items[index]);
    
    // Reset transition state after animation
    setTimeout(() => setIsTransitioning(false), 500);
  }, [currentIndex, isTransitioning, items, onItemChange]);

  const nextSlide = useCallback(() => {
    goToSlide((currentIndex + 1) % items.length);
  }, [currentIndex, items.length, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide(currentIndex === 0 ? items.length - 1 : currentIndex - 1);
  }, [currentIndex, items.length, goToSlide]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const goToSlideByDot = (index: number) => {
    goToSlide(index);
    // Reset autoplay when manually navigating
    if (autoPlay) {
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    if (autoPlay && isPlaying) {
      autoPlayRef.current = setInterval(nextSlide, autoPlayInterval);
    } else {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [autoPlay, isPlaying, autoPlayInterval, nextSlide]);

  useEffect(() => {
    // Pause autoplay when hovering over carousel
    const handleMouseEnter = () => {
      if (autoPlay) {
        setIsPlaying(false);
      }
    };

    const handleMouseLeave = () => {
      if (autoPlay) {
        setIsPlaying(true);
      }
    };

    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('mouseenter', handleMouseEnter);
      carousel.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (carousel) {
        carousel.removeEventListener('mouseenter', handleMouseEnter);
        carousel.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [autoPlay]);

  const getTransitionClasses = () => {
    switch (transition) {
      case 'fade':
        return 'transition-opacity duration-500';
      case 'zoom':
        return 'transition-transform duration-500 scale-100 hover:scale-105';
      case 'flip':
        return 'transition-transform duration-500 transform-style-preserve-3d';
      default:
        return 'transition-transform duration-500';
    }
  };

  const getSlideTransform = (index: number) => {
    if (transition === 'slide') {
      return `translateX(-${index * 100}%)`;
    }
    return 'none';
  };

  const renderSlide = (item: CarouselItem, index: number) => {
    const isActive = index === currentIndex;
    
    if (transition === 'fade') {
      return (
        <div
          key={item.id}
          className={`absolute inset-0 ${isActive ? 'opacity-100' : 'opacity-0'} ${getTransitionClasses()}`}
          style={{ zIndex: isActive ? 10 : 0 }}
        >
          {item.content}
        </div>
      );
    }

    if (transition === 'zoom' || transition === 'flip') {
      return (
        <div
          key={item.id}
          className={`absolute inset-0 ${isActive ? 'opacity-100' : 'opacity-0'} ${getTransitionClasses()}`}
          style={{ zIndex: isActive ? 10 : 0 }}
        >
          {item.content}
        </div>
      );
    }

    // Default slide transition
    return (
      <div
        key={item.id}
        className="flex-shrink-0 w-full h-full"
        style={{ transform: getSlideTransform(index) }}
      >
        {item.content}
      </div>
    );
  };

  const renderArrows = () => {
    if (!showArrows || items.length <= 1) return null;

    return (
      <>
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-2 bg-white/80 hover:bg-white rounded-full shadow-lg transition-all duration-200 hover:scale-110"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-2 bg-white/80 hover:bg-white rounded-full shadow-lg transition-all duration-200 hover:scale-110"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>
      </>
    );
  };

  const renderDots = () => {
    if (!showDots || items.length <= 1) return null;

    return (
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlideByDot(index)}
            className={`p-1 rounded-full transition-all duration-200 ${
              index === currentIndex
                ? 'bg-white scale-125'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            <Circle className="w-2 h-2" />
          </button>
        ))}
      </div>
    );
  };

  const renderPlayPause = () => {
    if (!showPlayPause || !autoPlay) return null;

    return (
      <button
        onClick={togglePlayPause}
        className="absolute top-4 right-4 z-20 p-2 bg-white/80 hover:bg-white rounded-full shadow-lg transition-all duration-200"
        aria-label={isPlaying ? 'Pause autoplay' : 'Start autoplay'}
      >
        {isPlaying ? (
          <Pause className="w-5 h-5 text-gray-800" />
        ) : (
          <Play className="w-5 h-5 text-gray-800" />
        )}
      </button>
    );
  };

  const renderContent = () => {
    if (transition === 'slide') {
      return (
        <div
          className="flex h-full transition-transform duration-500 ease-in-out"
          style={{ transform: getSlideTransform(currentIndex) }}
        >
          {items.map((item, index) => renderSlide(item, index))}
        </div>
      );
    }

    return (
      <div className="relative h-full">
        {items.map((item, index) => renderSlide(item, index))}
      </div>
    );
  };

  if (items.length === 0) {
    return (
      <div className={`flex items-center justify-center bg-gray-100 rounded-lg ${className}`} style={{ height }}>
        <p className="text-gray-500">No items to display</p>
      </div>
    );
  }

  return (
    <div
      ref={carouselRef}
      className={`relative overflow-hidden rounded-lg ${className}`}
      style={{ height }}
    >
      {/* Carousel Content */}
      <div className="h-full">
        {renderContent()}
      </div>

      {/* Navigation Controls */}
      {renderArrows()}
      {renderDots()}
      {renderPlayPause()}

      {/* Item Info Overlay */}
      {items[currentIndex]?.title && (
        <div className="absolute bottom-16 left-4 right-4 z-20 text-white">
          <h3 className="text-xl font-semibold mb-2">{items[currentIndex].title}</h3>
          {items[currentIndex].description && (
            <p className="text-sm opacity-90">{items[currentIndex].description}</p>
          )}
        </div>
      )}

      {/* Progress Bar */}
      {autoPlay && isPlaying && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
          <div
            className="h-full bg-white transition-all duration-100 ease-linear"
            style={{
              width: `${((Date.now() % autoPlayInterval) / autoPlayInterval) * 100}%`
            }}
          />
        </div>
      )}
    </div>
  );
};