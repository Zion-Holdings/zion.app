import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export function ProfileLoadingState() {
  return (
    <div className="space-y-6">
      {/* Header Skeleton */}
      <Card>
        <CardHeader className="text-center">
          <div className="flex flex-col items-center space-y-4">
            <Skeleton className="w-32 h-32 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-8 w-48" />
              <Skeleton className="h-4 w-32" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <Skeleton className="h-6 w-16 mx-auto mb-2" />
              <Skeleton className="h-4 w-20 mx-auto" />
            </div>
            <div className="text-center">
              <Skeleton className="h-6 w-16 mx-auto mb-2" />
              <Skeleton className="h-4 w-20 mx-auto" />
            </div>
            <div className="text-center">
              <Skeleton className="h-6 w-16 mx-auto mb-2" />
              <Skeleton className="h-4 w-20 mx-auto" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* About Section Skeleton */}
      <Card>
        <CardHeader>
          <Skeleton className="h-6 w-24" />
        </CardHeader>
        <CardContent className="space-y-3">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-5/6" />
        </CardContent>
      </Card>

      {/* Skills Section Skeleton */}
      <Card>
        <CardHeader>
          <Skeleton className="h-6 w-20" />
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {Array.from({ length: 8 }).map((_, i) => (
              <Skeleton key={i} className="h-8 w-20" />
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Experience Section Skeleton */}
      <Card>
        <CardHeader>
          <Skeleton className="h-6 w-28" />
        </CardHeader>
        <CardContent className="space-y-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="space-y-2">
              <div className="flex justify-between items-start">
                <Skeleton className="h-5 w-32" />
                <Skeleton className="h-4 w-20" />
              </div>
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Education Section Skeleton */}
      <Card>
        <CardHeader>
          <Skeleton className="h-6 w-24" />
        </CardHeader>
        <CardContent className="space-y-4">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="space-y-2">
              <div className="flex justify-between items-start">
                <Skeleton className="h-5 w-40" />
                <Skeleton className="h-4 w-20" />
              </div>
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Portfolio Section Skeleton */}
      <Card>
        <CardHeader>
          <Skeleton className="h-6 w-24" />
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="space-y-2">
                <Skeleton className="h-32 w-full rounded-lg" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-3 w-1/2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Contact Section Skeleton */}
      <Card>
        <CardHeader>
          <Skeleton className="h-6 w-24" />
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center space-x-3">
            <Skeleton className="h-5 w-5" />
            <Skeleton className="h-4 w-48" />
          </div>
          <div className="flex items-center space-x-3">
            <Skeleton className="h-5 w-5" />
            <Skeleton className="h-4 w-64" />
          </div>
          <div className="flex items-center space-x-3">
            <Skeleton className="h-5 w-5" />
            <Skeleton className="h-4 w-40" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}