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
        const json: ApiResponse = await res.json();

        if (!res.ok) {
          // Use message from API response if available, otherwise a default
          const errorMessage = json.message || `Error: ${res.status} ${res.statusText}`;
          throw new Error(errorMessage);
        }

        setData(json);
        if (json.category?.name) {
          document.title = `${json.category.name} | Zion Marketplace`;
        }
      } catch (e: any) {
        console.error('Failed to load category items:', e);
        setError(e.message || 'Failed to load category items. Please try again.');
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [slug]);

  if (loading) {
    return <div className="p-6 text-center">Loading...</div>; // Removed text-white for default
  }

  if (error) {
    return <div className="p-6 text-center text-red-500">Error: {error}</div>; // Display specific error
  }

  if (!data || !data.category) { // Added check for data.category
    return <div className="p-6 text-center">Category not found.</div>; // Removed text-white
  }

  return (
    <CategoryListingPage
      title={data.category.name}
      description={data.category.description || ''}
      listings={data.items}
    />
  );
}
