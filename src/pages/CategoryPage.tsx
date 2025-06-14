import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CategoryListingPage } from '@/components/CategoryListingPage';

interface ApiResponse {
  category: { name: string; slug: string; description?: string };
  items: any[];
}

export default function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      if (!slug) return;
      setLoading(true);
      try {
        const res = await fetch(`/api/categories/${slug}/items`);
        if (!res.ok) throw new Error('Failed to load');
        const json: ApiResponse = await res.json();
        setData(json);
        if (json.category?.name) {
          document.title = `${json.category.name} | Zion Marketplace`;
        }
      } catch (e) {
        console.error('Failed to load category items', e);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [slug]);

  if (loading) {
    return <div className="p-6 text-center text-white">Loading...</div>;
  }

  if (!data) {
    return <div className="p-6 text-center text-white">Category not found.</div>;
  }

  return (
    <CategoryListingPage
      title={data.category.name}
      description={data.category.description || ''}
      listings={data.items}
    />
  );
}
