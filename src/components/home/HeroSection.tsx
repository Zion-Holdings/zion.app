import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroSlide {
  title: string;
  subtitle: string;
  description: string;
  cta: string;
  path: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  stats: Record<string, string>;
}

interface HeroSectionProps {
  slides: HeroSlide[];
  currentSlide: number;
  onNext: () => void;
  onPrev: () => void;
}

export default function HeroSection({ slides, currentSlide, onNext, onPrev }: HeroSectionProps) {
  return (
    <section className="relative pt-20 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Slides */}
        <div className="relative h-[600px] rounded-3xl overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-900/80 to-black/80"></div>
              <div className={`absolute inset-0 bg-gradient-to-br ${slide.color} opacity-20`}></div>
              
              <div className="relative z-10 h-full flex items-center">
                <div className="max-w-4xl mx-auto text-center px-6">
                  <div className="mb-8">
                    <slide.icon className="w-20 h-20 mx-auto mb-6 text-white opacity-80" />
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                      {slide.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-cyan-300 mb-8 font-medium">
                      {slide.subtitle}
                    </p>
                    <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                      {slide.description}
                    </p>
                    
                    {/* Stats Row */}
                    <div className="flex justify-center space-x-8 mb-8">
                      {Object.entries(slide.stats).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-2xl font-bold text-cyan-400">{value}</div>
                          <div className="text-sm text-gray-400 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                    
                    <Link
                      to={slide.path}
                      className="inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-lg px-8 py-4 rounded-lg font-semibold transition-all duration-300 group hover:shadow-lg hover:shadow-cyan-500/25"
                    >
                      <span>{slide.cta}</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation Arrows */}
          <button
            onClick={onPrev}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 p-3 bg-black/50 backdrop-blur-sm border border-cyan-500/30 rounded-full hover:bg-cyan-500/20 hover:border-cyan-500/60 transition-all duration-300 z-20"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-cyan-400" />
          </button>
          <button
            onClick={onNext}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 p-3 bg-black/50 backdrop-blur-sm border border-cyan-500/30 rounded-full hover:bg-cyan-500/20 hover:border-cyan-500/60 transition-all duration-300 z-20"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-cyan-400" />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  // This would need to be passed down from parent
                  // For now, we'll just call the navigation functions
                  if (index > currentSlide) {
                    onNext();
                  } else if (index < currentSlide) {
                    onPrev();
                  }
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-cyan-400 w-8' 
                    : 'bg-gray-500 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}