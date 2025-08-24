import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  avatar?: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    company: 'TechCorp',
    role: 'CTO',
    content: 'Zion Tech Group transformed our IT infrastructure completely. Their AI-powered solutions helped us reduce costs by 40% while improving efficiency.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Michael Chen',
    company: 'InnovateLab',
    role: 'CEO',
    content: 'The micro SAAS platform they built for us has streamlined our entire workflow. It\'s like having an extra team member working 24/7.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    company: 'DigitalFlow',
    role: 'Operations Director',
    content: 'Outstanding cybersecurity services. They identified vulnerabilities we didn\'t know existed and implemented robust protection measures.',
    rating: 5,
  },
  {
    id: '4',
    name: 'David Kim',
    company: 'CloudTech',
    role: 'VP of Engineering',
    content: 'Their cloud migration expertise is unmatched. We moved to the cloud with zero downtime and improved performance significantly.',
    rating: 5,
  },
];

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what business leaders have to say about working with Zion Tech Group.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <Card className="text-center p-8">
                    <CardContent className="space-y-6">
                      <div className="flex justify-center space-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span key={i} className="text-yellow-400 text-xl">⭐</span>
                        ))}
                      </div>
                      
                      <blockquote className="text-lg text-muted-foreground italic">
                        "{testimonial.content}"
                      </blockquote>
                      
                      <div className="space-y-2">
                        <div className="font-semibold text-foreground">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.role} at {testimonial.company}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 bg-background border-border hover:bg-muted"
            onClick={goToPrevious}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 bg-background border-border hover:bg-muted"
            onClick={goToNext}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary' : 'bg-muted'
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}