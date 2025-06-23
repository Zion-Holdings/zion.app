import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { CategoryListingPage } from '@/components/CategoryListingPage'; // Ensure this path is correct

interface CategoryData {
  name: string;
  slug: string;
  description?: string;
}

interface ApiResponse {
  category: CategoryData;
  items: any[]; // Define a more specific type for items if possible
  message?: string; // For API error messages
  available_categories?: string[];
}

export default function CategoryPage() {
  const router = useRouter();
  const { slug } = router.query;
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); // New state for error messages

  useEffect(() => {
    async function load() {
      if (!slug || typeof slug !== 'string') {
        // This case should ideally not happen if routing is set up correctly
        // and slug is always a string.
        setLoading(false);
        setError("Invalid category identifier.");
        return;
      }

      setLoading(true);
      setError(null); // Reset error before new fetch
      setData(null); // Reset data before new fetch

      try {
        const res = await fetch(`/api/categories/${slug}/items`);
        
        // Check if response is ok before trying to parse JSON
        if (!res.ok) {
          throw new Error(`HTTP Error: ${res.status} ${res.statusText}`);
        }

        // Check if response is actually JSON
        const contentType = res.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          throw new Error('Server returned non-JSON response. This usually indicates a server configuration issue.');
        }

        const json: ApiResponse = await res.json();

        // Check for API-level errors
        if (json.message && res.status >= 400) {
          throw new Error(json.message);
        }

        setData(json);
        if (json.category?.name) {
          document.title = `${json.category.name} | Zion Marketplace`;
        }
      } catch (e: any) {
        console.error('Failed to load category items:', e);
        
        // Provide specific error messages based on the error type
        let errorMessage = 'Failed to load category items. Please try again.';
        
        if (e.message.includes('Failed to fetch')) {
          errorMessage = 'Unable to connect to the server. Please check your internet connection and try again.';
        } else if (e.message.includes('Unexpected token')) {
          errorMessage = 'Server configuration error. The development team has been notified.';
        } else if (e.message.includes('non-JSON response')) {
          errorMessage = 'Server returned an unexpected response format. Please try again or contact support.';
        } else if (e.message.includes('not found')) {
          errorMessage = `Category "${slug}" not found. Please check the URL or browse available categories.`;
        } else {
          errorMessage = e.message || errorMessage;
        }
        
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [slug]);

  if (loading) {
    return (
      <div className="container py-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading category...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-8">
        <div className="text-center space-y-4">
          <div className="text-red-500 text-xl font-semibold">Category Error</div>
          <p className="text-red-400 max-w-md mx-auto">{error}</p>
          <div className="space-y-2">
            <button
              onClick={() => window.location.reload()}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md mr-2"
            >
              Try Again
            </button>
            <button
              onClick={() => router.push('/marketplace')}
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-4 py-2 rounded-md"
            >
              Back to Marketplace
            </button>
          </div>
          {slug && typeof slug === 'string' && (
            <p className="text-sm text-muted-foreground mt-4">
              Looking for category: <code className="bg-muted px-2 py-1 rounded">{slug}</code>
            </p>
          )}
        </div>
      </div>
    );
  }

  if (!data || !data.category) { // Added check for data.category
    return (
      <div className="container py-8">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold">Category Not Found</h2>
          <p className="text-muted-foreground">The requested category could not be found.</p>
          <button
            onClick={() => router.push('/marketplace')}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md"
          >
            Browse All Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <CategoryListingPage
      title={data.category.name}
      description={data.category.description || ''}
      listings={data.items}
    />
  );
}
