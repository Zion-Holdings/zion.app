import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export function HomePageSkeleton() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section Skeleton */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-zion-blue-dark via-zion-blue to-zion-blue-light opacity-80"></div>
        <div className="container relative z-10 px-4 mx-auto text-center">
          <Skeleton className="h-16 md:h-20 w-3/4 mx-auto mb-6 bg-white/20" />
          <Skeleton className="h-8 md:h-10 w-2/3 mx-auto mb-10 bg-white/20" />
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Skeleton className="h-14 w-32 bg-white/20" />
            <Skeleton className="h-14 w-40 bg-white/20" />
          </div>
        </div>
      </section>

      {/* Quick Access Skeleton */}
      <section className="py-12 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Skeleton className="h-8 w-48 mx-auto mb-2 bg-white/20" />
            <Skeleton className="h-6 w-64 mx-auto bg-white/20" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="bg-zion-blue border border-zion-blue-light rounded-lg p-4">
                <Skeleton className="w-12 h-12 rounded-full mx-auto mb-3 bg-white/20" />
                <Skeleton className="h-5 w-20 mx-auto mb-1 bg-white/20" />
                <Skeleton className="h-3 w-16 mx-auto mb-2 bg-white/20" />
                <Skeleton className="h-3 w-12 mx-auto bg-white/20" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature CTA Skeleton */}
      <section className="py-16 bg-zion-slate">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Skeleton className="h-10 w-80 mx-auto mb-3 bg-white/20" />
            <Skeleton className="h-6 w-96 mx-auto bg-white/20" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Array.from({ length: 2 }).map((_, index) => (
              <div key={index} className="bg-zion-slate-light rounded-lg p-6">
                <Skeleton className="h-8 w-48 mb-3 bg-white/20" />
                <Skeleton className="h-4 w-full mb-2 bg-white/20" />
                <Skeleton className="h-4 w-3/4 mb-2 bg-white/20" />
                <Skeleton className="h-4 w-1/2 mb-4 bg-white/20" />
                <Skeleton className="h-10 w-32 bg-white/20" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section Skeleton */}
      <section className="py-16 bg-zion-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Skeleton className="h-10 w-64 mx-auto mb-3 bg-white/20" />
            <Skeleton className="h-6 w-80 mx-auto bg-white/20" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="bg-zion-blue-dark rounded-lg p-6 text-center">
                <Skeleton className="w-16 h-16 rounded-full mx-auto mb-4 bg-white/20" />
                <Skeleton className="h-6 w-24 mx-auto mb-2 bg-white/20" />
                <Skeleton className="h-4 w-20 mx-auto bg-white/20" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section Skeleton */}
      <section className="py-16 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Skeleton className="h-10 w-72 mx-auto mb-3 bg-white/20" />
            <Skeleton className="h-6 w-96 mx-auto bg-white/20" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="text-center">
                <Skeleton className="w-20 h-20 rounded-full mx-auto mb-4 bg-white/20" />
                <Skeleton className="h-6 w-32 mx-auto mb-3 bg-white/20" />
                <Skeleton className="h-4 w-full mb-2 bg-white/20" />
                <Skeleton className="h-4 w-3/4 mx-auto bg-white/20" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section Skeleton */}
      <section className="py-16 bg-zion-slate">
        <div className="container mx-auto px-4 text-center">
          <Skeleton className="h-10 w-80 mx-auto mb-3 bg-white/20" />
          <Skeleton className="h-6 w-96 mx-auto mb-6 bg-white/20" />
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <Skeleton className="h-12 w-full bg-white/20" />
            <Skeleton className="h-12 w-32 bg-white/20" />
          </div>
        </div>
      </section>
    </div>
  );
}