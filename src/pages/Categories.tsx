import useSWR from 'swr';
import { CategoryCard } from "@/components/CategoryCard";
import { GradientHeading } from "@/components/GradientHeading";
import { SkeletonCard } from '@/components/ui';
import ErrorBoundary from "@/components/GlobalErrorBoundary";
import * as Icons from 'lucide-react';

interface CategoryType {
  id: string;
  name: string;
  slug: string;
  icon: string;
}

const fetcher = async (url: string): Promise<CategoryType[]> => {
  const response = await fetch(url);
  if (!response.ok) {
    // Ensure the error message matches the bug report exactly
    throw new Error("API error: Please try again later.");
  }
  return response.json();
};

export interface CategoriesProps {
  categories?: CategoryType[];
}

export default function Categories({ categories: initialCategories = [] }: CategoriesProps) {
  const { data, error } = useSWR<CategoryType[]>('/api/categories', fetcher, {
    fallbackData: initialCategories,
  });
  const categories = data || [];
  const isLoading = !data && !error;

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
          {isLoading && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" data-testid="skeleton-loader">
              {Array.from({ length: 4 }).map((_, index) => (
                <SkeletonCard key={index} />
              ))}
            </div>
          )}
          {error && (
            <div className="text-center text-red-500 py-8">
              <p>Error loading categories: {error.message}</p>
              <p>Please try again later.</p>
            </div>
          )}
          {!isLoading && !error && categories.length === 0 && (
            <div className="text-center text-zion-slate-light py-8">
              <p>No categories yet</p>
            </div>
          )}
          {!isLoading && !error && categories.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {categories.map((category) => {
                // Get the icon component from lucide-react
                const IconComponent = (Icons as any)[category.icon] || Icons.Folder;
                
                return (
                  <CategoryCard
                    key={category.id}
                    title={category.name}
                    description={`Explore ${category.name.toLowerCase()} in our marketplace`}
                    icon={<IconComponent className="w-6 h-6" />}
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
