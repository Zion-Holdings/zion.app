import React from 'react';
import { useMarketplaceCategories } from '@/hooks/useMarketplace';
import { getMarketplaceErrorMessage } from '@/services/marketplace'; // Ensure this is imported
import { CategoryCard } from "@/components/CategoryCard";
import { GradientHeading } from "@/components/GradientHeading";
import { SkeletonCard } from '@/components/ui';
import ErrorBoundary from "@/components/GlobalErrorBoundary";
import * as Icons from 'lucide-react'; // Keep for icon mapping

// CategoryType from useMarketplace hook should be compatible or updated in the hook
// For now, assuming the structure is similar: { id, name, slug, icon }

export default function CategoriesPage() {
  const { data: categories, loading, error, retry, refresh } = useMarketplaceCategories();

  return (
    <div className="min-h-screen bg-zion-blue">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <GradientHeading level="h1" className="text-4xl md:text-5xl font-bold mb-4">
            Browse Categories
          </GradientHeading>
          <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
            Explore our extensive range of AI services and products organized by category.
            Find exactly what you're looking for to enhance your business or personal projects.
          </p>
        </div>

        <ErrorBoundary>
          {loading && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" data-testid="skeleton-loader">
              {Array.from({ length: 4 }).map((_, index) => (
                <SkeletonCard key={index} />
              ))}
            </div>
          )}
          {error && (
            <div className="text-center text-red-500 py-8">
              {/* Use getMarketplaceErrorMessage or custom logic to display a better message. */}
              <p>Error loading categories: {getMarketplaceErrorMessage(error)}</p>
              {error.response?.data?.detail && (
                <p>Details: {error.response.data.detail}</p>
              )}
              {!error.response?.data?.detail && error.message && (
                 <p>Details: {error.message}</p>
              )}
              <button
                onClick={retry}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Try again
              </button>
            </div>
          )}
          {!loading && !error && (!categories || categories.length === 0) && (
            <div className="text-center text-zion-slate-light py-8">
              <p>No categories found.</p>
            </div>
          )}
          {!loading && !error && categories && categories.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {categories.map((category) => {
                // Get the icon component from lucide-react
                // Ensure category.icon is a string matching a Lucide icon name
                const IconComponent = (Icons as any)[category.icon || 'Folder'] || Icons.Folder;
                
                return (
                  <CategoryCard
                    key={category.id}
                    title={category.name}
                    // Assuming description can be derived or is not strictly needed by CategoryCard
                    description={`Explore ${category.name.toLowerCase()} in our marketplace`}
                    icon={<IconComponent className="w-6 h-6" />}
                    // Pass slug or href if CategoryCard expects it for navigation
                    // href={`/marketplace/categories/${category.slug}`}
                  />
                );
              })}
            </div>
          )}
        </ErrorBoundary>
      </div>
    </div>
  );
}
