import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Alert } from '@/components/ui/alert';
import PostCard from '@/components/community/PostCard';
import Empty from '@/components/community/Empty';
import { fetchPostsByCategory } from '@/api/community';

export default function Category() {
  const { slug } = useParams();
  const {
    data: posts = [],
    isLoading,
    error,
  } = useQuery(['posts', slug], () => fetchPostsByCategory(slug), {
    enabled: !!slug,
  });

  if (isLoading) return <Skeleton count={5} />;
  if (error) return <Alert variant="destructive">Failed to load posts</Alert>;

  return posts.length ? (
    <div className="space-y-4">
      {posts.map(p => (
        <PostCard key={p.id} post={p} />
      ))}
    </div>
  ) : (
    <Empty message="Be the first to post!" />
  );
}
