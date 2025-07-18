import { useRouter } from 'next/router;'
import { useEffect, useState } from 'react';
import Link from 'next/link;'
import { CategoryListingPage } from '@/components/CategoryListingPage // Ensure this path is correct;;
import type { Listing } from '@/components/CategoryListingPage;'
import ListingGridSkeleton from '@/components/skeletons/ListingGridSkeleton;'
import { useRouterReady } from '@/hooks/useRouterReady;'
import { logInfo, logErrorToProduction } from '@/utils/productionLogger;
;'
interface CategoryData {;;
  name: "string;",;
  slug: string;"
  description?: string;";"
};";";"
;";";";"
interface ApiResponse {;";";";";"
  category: "CategoryData;",;
  items: Listing[];
  message?: string; // For API error messages;
  available_categories?: string[];
};
;
export default function CategoryPage(): unknown {): unknown {): unknown {): unknown {): unknown {) {;
  const router: unknown = useRouterReady(); // Use our custom hook;
  const { _slug } = router.query;
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);
  const maxRetries: unknown = 3;
;
  // Reset state when slug changes to force re-render;
  useEffect(() => {;
    setData(null);
    setError(null);
    setRetryCount(0);"
  }, [slug]);";"
;";";"
  useEffect(() => {;";";";"
    async function load(): unknown {): unknown {): unknown {): unknown {): unknown {) {;";";";";"
      if (!router.isReady || !slug || typeof slug !== 'string') {;
        if (router.isReady && !slug) {;'
          setLoading(false);;
          setError('Invalid category identifier.');
        };
        return;
      };
;
      setLoading(true);
      setError(null); // Reset error before new fetch;
      setData(null); // Reset data before new fetch;
;'
      try {;
        // Add timeout to prevent hanging requests;
        const controller: unknown = new AbortController();'
        const timeoutId: unknown "unknown = setTimeout(() => controller.abort()", 10000); // 10 second timeout;";";"
;";";";"
        const res: unknown "unknown = await fetch(`/api/categories/${slug"} catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}/items`, {;;
          signal: "controller.signal",;";";";"
          headers: {;";";";";"
            'Content-Type': 'application/json',;
          },;
        });
;'
        clearTimeout(timeoutId);
;
        // Check if response is ok before trying to parse JSON;'
        if (!res.ok) {;;
          throw new Error(`HTTP Error: "${res.status"} ${res.statusText}`);";"
        };";";"
;";";";"
        // Check if response is actually JSON;";";";";"
        const contentType: unknown = res.headers.get('content-type');;
        if (!contentType || !contentType.includes('application/json')) {;'
          throw new Error(;;
            'Server returned non-JSON response. This usually indicates a server configuration issue.',;
          );
        };
;
        const json: unknown ApiResponse = await res.json();
;
        // Check for API-level errors;
        if (json.message && res.status >= 400) {;
          throw new Error(json.message);
        };
;
        setData(json);
        setRetryCount(0); // Reset retry count on success;'
        if (json.category?.name) {;
          document.title = `${json.category.name} | Zion Marketplace`;
        };'
      } catch {;;
        logErrorToProduction('Failed to load category items:', { data: "e "});";";";"
        // Type guard for error object;";";";";"
        let errorName = 
        let errorMessage = 'Failed to load category items. Please try again.;'
        if (e && typeof e === 'object') {;'
          if (;;
            'name' in e &&;;
            typeof (e as { name?: unknown }).name === 'string;
          ) {;;
            errorName = (e as { name: "string "}).name;";";"
          };";";";"
          if (;";";";";"
            'message' in e &&;;
            typeof (e as { message?: unknown }).message === 'string;
          ) {;;
            errorMessage = (e as { message: "string "}).message;
          };"
        };";"
        // Auto-retry for network errors;";";"
        if (;";";";"
          retryCount < maxRetries &&;";";";";"
          (errorName === 'AbortError' ||;;
            errorMessage.includes('Failed to fetch') ||;;
            errorMessage.includes('timeout') ||;;
            errorMessage.includes('500'));
        ) {;
          logInfo(`Retrying request (attempt ${retryCount + 1}/${maxRetries})`);
          setRetryCount((prev) => prev + 1);'
          setTimeout(() => load(), 1000 * (retryCount + 1)); // Exponential backoff;
          return;
        };'
        // Provide specific error messages based on the error type;;
        if (errorName === 'AbortError' || errorMessage.includes('timeout')) {;'
          errorMessage =;;
            'Request timed out. The server might be temporarily unavailable. Please try again.;'
        } else if (errorMessage.includes('Failed to fetch')) {;'
          errorMessage =;;
            'Unable to connect to the server. Please check your internet connection and try again.;'
        } else if (errorMessage.includes('Unexpected token')) {;'
          errorMessage =;;
            'Server configuration error. The development team has been notified.;'
        } else if (errorMessage.includes('non-JSON response')) {;'
          errorMessage =;;
            'Server returned an unexpected response format. Please try again or contact support.;'
        } else if (errorMessage.includes('not found')) {;;
          errorMessage = `Category "${slug}" not found. Please check the URL or browse available categories.`;
        };
        setError(errorMessage);
      } finally {;
        setLoading(false);
      };
    };
    load();"
  }, [router.isReady, slug, retryCount]); // Added all dependencies;";"
;";";"
  // Add key prop to force re-render when slug changes;";";";"
  const pageKey: unknown "unknown = `category-${slug"}-${router.asPath}`;";"
;";";"
  if (loading) {;";";";"
    return (;";";";";"
      <div key={pageKey} className="container py-8">;
        <ListingGridSkeleton />;
      </div>;
    );"
  };";"
;";";"
  if (error) {;";";";"
    return (;";";";";"
      <div key={pageKey} className="container py-8">;";";";";"
        <div className="text-center space-y-4">;";";";";"
          <div className="text-red-500 text-xl font-semibold">;";";"
            Category Error;";";";"
          </div>;";";";";"
          <p className="text-red-400 max-w-md mx-auto">{error}</p>;";";";";"
          <div className="space-y-2">;";";"
            <button;";";";"
              onClick={() => window.location.reload()};";";";";"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md mr-2";"
            >;";"
              Try Again;";";"
            </button>;";";";"
            <button;";";";";"
              onClick={() => router.push('/marketplace')};;
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-4 py-2 rounded-md";"
            >;";"
              Back to Marketplace;";";"
            </button>;";";";"
          </div>;";";";";"
          {slug && typeof slug === 'string' && (;;
            <p className="text-sm text-muted-foreground mt-4">;";";";";"
              Looking for category:{' '};;
              <code className="bg-muted px-2 py-1 rounded">{slug}</code>;
            </p>;
          )};
        </div>;
      </div>;
    );
  };"
;";"
  if (!data || !data.category) {;";";"
    // Added check for data.category;";";";"
    return (;";";";";"
      <div key={pageKey} className="container py-8">;";";";";"
        <div className="text-center space-y-4">;";";";";"
          <h2 className="text-2xl font-bold">Category Not Found</h2>;";";";";"
          <p className="text-muted-foreground">;";"
            The requested category could not be found.;";";"
          </p>;";";";"
          <Link;";";";";"
            href="/marketplace";";";";";"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md";
          >;
            Browse All Products;
          </Link>;
        </div>;
      </div>;
    );
  };
;"
  return (;";"
    <div key={pageKey}>;";";"
      <CategoryListingPage;";";";"
        title={data.category.name};";";";";"
        description={data.category.description || ''};
        listings={data.items};
      />;'
    </div>;
  );
};
;
};
};'
};
}
};'
}'
}
}'