import React from 'react';
import { motion } from 'framer-motion';

interface SkeletonProps {
  className?: string;
  height?: string;
  width?: string;
  rounded?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({ 
  className = '', 
  height = 'h-4', 
  width = 'w-full', 
  rounded = 'rounded' 
}) => {
  return (
    <motion.div
      className={`bg-white/10 ${height} ${width} ${rounded} ${className}`}
      animate={{
        opacity: [0.5, 1, 0.5],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
};

interface ServiceCardSkeletonProps {
  count?: number;
}

export const ServiceCardSkeleton: React.FC<ServiceCardSkeletonProps> = ({ count = 6 }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Array.from({ length: count }).map((_, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <Skeleton className="w-12 h-12 rounded-xl" />
            <Skeleton className="w-20 h-6 rounded-full" />
          </div>
          
          {/* Title */}
          <Skeleton className="h-6 w-3/4 mb-3" />
          
          {/* Description */}
          <div className="space-y-2 mb-6">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-4/6" />
          </div>
          
          {/* Features */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-2">
              <Skeleton className="w-4 h-4 rounded-full" />
              <Skeleton className="h-4 w-2/3" />
            </div>
            <div className="flex items-center gap-2">
              <Skeleton className="w-4 h-4 rounded-full" />
              <Skeleton className="h-4 w-1/2" />
            </div>
            <div className="flex items-center gap-2">
              <Skeleton className="w-4 h-4 rounded-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </div>
          
          {/* Benefits */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-2">
              <Skeleton className="w-4 h-4 rounded-full" />
              <Skeleton className="h-4 w-1/2" />
            </div>
            <div className="flex items-center gap-2">
              <Skeleton className="w-4 h-4 rounded-full" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          </div>
          
          {/* Footer */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Skeleton className="h-8 w-20" />
              <Skeleton className="h-4 w-24" />
            </div>
            <Skeleton className="h-12 w-full rounded-xl" />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

interface HeroSkeletonProps {}

export const HeroSkeleton: React.FC<HeroSkeletonProps> = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center space-y-8">
        {/* Main Heading */}
        <div className="space-y-6">
          <Skeleton className="h-16 md:h-20 lg:h-24 w-3/4 mx-auto" />
          <Skeleton className="h-8 md:h-10 lg:h-12 w-2/3 mx-auto" />
          <div className="space-y-3">
            <Skeleton className="h-6 w-full max-w-4xl mx-auto" />
            <Skeleton className="h-6 w-5/6 max-w-4xl mx-auto" />
            <Skeleton className="h-6 w-4/6 max-w-4xl mx-auto" />
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Skeleton className="h-14 w-40 rounded-xl" />
          <Skeleton className="h-14 w-40 rounded-xl" />
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="text-center space-y-3">
              <Skeleton className="w-8 h-8 mx-auto rounded-lg" />
              <Skeleton className="h-8 w-20 mx-auto" />
              <Skeleton className="h-4 w-24 mx-auto" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

interface CategorySkeletonProps {}

export const CategorySkeleton: React.FC<CategorySkeletonProps> = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <Skeleton className="h-10 w-96 mx-auto" />
          <div className="space-y-2">
            <Skeleton className="h-6 w-80 mx-auto" />
            <Skeleton className="h-6 w-64 mx-auto" />
          </div>
        </div>
        
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Array.from({ length: 6 }).map((_, index) => (
            <Skeleton key={index} className="h-12 w-32 rounded-xl" />
          ))}
        </div>
      </div>
    </div>
  );
};

interface TableSkeletonProps {
  rows?: number;
  columns?: number;
}

export const TableSkeleton: React.FC<TableSkeletonProps> = ({ rows = 5, columns = 4 }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr>
            {Array.from({ length: columns }).map((_, index) => (
              <th key={index} className="px-6 py-3 text-left">
                <Skeleton className="h-5 w-24" />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: rows }).map((_, rowIndex) => (
            <tr key={rowIndex}>
              {Array.from({ length: columns }).map((_, colIndex) => (
                <td key={colIndex} className="px-6 py-4">
                  <Skeleton className="h-4 w-20" />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Skeleton;