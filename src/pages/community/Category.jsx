import React, { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useRouter } from 'next/router'; // Changed from useParams
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Alert } from '@/components/ui/alert';
import PostCard from '@/components/community/PostCard';
import Empty from '@/components/community/Empty';
import { Button } from '@/components/ui/button';
import {logErrorToProduction} from '@/utils/productionLogger';


const queryClient = new QueryClient();

export default function Category() {
  const router = useRouter();
  const { slug: rawSlug } = router.query;
  const slug = typeof rawSlug === 'string' ? rawSlug : undefined;
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const LIMIT = 10;

  const fetchPosts = async () => {
    const res = await fetch(
      `/api/community?category=${slug}&limit=${LIMIT}&offset=${offset}`
    );
    if (!res.ok) throw new Error('Request failed');
    return res.json();
  };

  useEffect(() => {
    if (!slug) return;

    setLoading(true);
    setError(false);

    fetchPosts()
      .then(data => {
        setPosts(prev =>
          offset === 0 ? data.posts : [...prev, ...data.posts]
        );
        setHasMore(data.posts.length === LIMIT);
      })
      .catch(err => {
        logErrorToProduction(err);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [slug, offset]);

  if (loading && offset === 0) return <Skeleton count={5} />;
  if (error) return <Alert variant="destructive">Failed to load posts</Alert>;

  const content = posts.length ? (
    <div className="space-y-4">
      {posts.map(p => (
        <PostCard key={p.id} post={p} />
      ))}
      {hasMore && (
        <div className="text-center">
          <Button variant="outline" onClick={() => setOffset(offset + LIMIT)}>
            Load more
          </Button>
        </div>
      )}
    </div>
  ) : (
    <Empty message="No posts yet" />
  );

  return <QueryClientProvider client={queryClient}>{content}</QueryClientProvider>;
}
