import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Alert } from '@/components/ui/alert';
import PostCard from '@/components/community/PostCard';
import Empty from '@/components/community/Empty';
import { Button } from '@/components/ui/button';

export default function Category() {
  const { slug } = useParams();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const LIMIT = 10;

  useEffect(() => {
    if (!slug) return;

    async function fetchPosts() {
      setLoading(true);
      setError(false);
      try {
        const res = await fetch(
          `/api/community?category=${slug}&limit=${LIMIT}&offset=${offset}`
        );
        if (!res.ok) throw new Error('Request failed');
        const data = await res.json();
        setPosts(prev => (offset === 0 ? data.posts : [...prev, ...data.posts]));
        setHasMore(data.posts.length === LIMIT);
      } catch (e) {
        console.error(e);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, [slug, offset]);

  if (loading && offset === 0) return <Skeleton count={5} />;
  if (error) return <Alert variant="destructive">Failed to load posts</Alert>;

  return posts.length ? (
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
}
