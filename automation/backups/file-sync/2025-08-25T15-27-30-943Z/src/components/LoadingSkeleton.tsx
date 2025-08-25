import React from 'react';
import { motion } from 'framer-motion';

interface SkeletonProps {
  className?: string;
  height?: string;
  width?: string;
  rounded?: string;
}

export function Skeleton({ 
  className = '', 
  height = 'h-4', 
  width = 'w-full', 
  rounded = 'rounded' 
}: SkeletonProps) {
  return (
    <motion.div
      className={`bg-white/10 animate-pulse ${height} ${width} ${rounded} ${className}`}
      initial={{ opacity: 0.3 }}
      animate={{ opacity: [0.3, 0.6, 0.3] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    />
  );
}

export function HeroSkeleton() {
  return (
    <div className="relative pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto text-center space-y-6">
        <Skeleton height="h-16" width="w-3/4" className="mx-auto" />
        <Skeleton height="h-6" width="w-2/3" className="mx-auto" />
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 w-32">
              <Skeleton height="h-8" width="w-8" className="mx-auto mb-2" />
              <Skeleton height="h-6" width="w-16" className="mx-auto mb-1" />
              <Skeleton height="h-4" width="w-20" className="mx-auto" />
            </div>
          ))}
        </div>
        
        <Skeleton height="h-14" width="w-48" className="mx-auto rounded-lg" />
      </div>
    </div>
  );
}

export function ServicesSkeleton() {
  return (
    <div className="py-20 px-6 bg-slate-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <Skeleton height="h-8" width="w-1/3" className="mx-auto" />
          <Skeleton height="h-5" width="w-1/2" className="mx-auto" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Skeleton height="h-12" width="w-12" className="mx-auto mb-4" />
              <Skeleton height="h-6" width="w-3/4" className="mx-auto mb-3" />
              <Skeleton height="h-4" width="w-full" className="mb-4" />
              <div className="space-y-2">
                {[1, 2, 3, 4].map((j) => (
                  <Skeleton key={j} height="h-3" width="w-4/5" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function TechnologiesSkeleton() {
  return (
    <div className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <Skeleton height="h-8" width="w-1/3" className="mx-auto" />
          <Skeleton height="h-5" width="w-1/2" className="mx-auto" />
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="text-center space-y-3">
              <Skeleton height="h-16" width="w-16" className="mx-auto rounded-full" />
              <Skeleton height="h-4" width="w-20" className="mx-auto" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function CtaSkeleton() {
  return (
    <div className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <Skeleton height="h-10" width="w-2/3" className="mx-auto" />
        <Skeleton height="h-5" width="w-1/2" className="mx-auto" />
        <Skeleton height="h-14" width="w-48" className="mx-auto rounded-lg" />
      </div>
    </div>
  );
}

export function FooterSkeleton() {
  return (
    <footer className="bg-slate-900 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="space-y-4">
              <Skeleton height="h-6" width="w-24" />
              <div className="space-y-2">
                {[1, 2, 3].map((j) => (
                  <Skeleton key={j} height="h-4" width="w-32" />
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <Skeleton height="h-4" width="w-1/3" className="mx-auto" />
        </div>
      </div>
    </footer>
  );
}

export function FullPageSkeleton() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <HeroSkeleton />
      <ServicesSkeleton />
      <TechnologiesSkeleton />
      <CtaSkeleton />
      <FooterSkeleton />
    </div>
  );
}