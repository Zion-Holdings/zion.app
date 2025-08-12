import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const PostCardSkeleton = () => (
  <Card data-testid="post-card-skeleton">
    <CardHeader className="flex flex-row items-start gap-4 space-y-0">
      <Skeleton height={40} width={40} circle />
      <div className="flex-1 space-y-2">
        <Skeleton height={16} width="75%" />
        <Skeleton height={12} width="25%" />
      </div>
    </CardHeader>
    <CardContent>
      <div className="space-y-2">
        <Skeleton height={16} width="100%" />
        <Skeleton height={16} width="83%" />
      </div>
    </CardContent>
    <CardFooter>
      <Skeleton height={16} width={96} />
    </CardFooter>
  </Card>
);

export const PostListSkeleton = ({ count = 3 }: { count?: number }) => (
  <div className="space-y-4">
    {Array.from({ length: count }).map((_, i) => (
      <PostCardSkeleton key={i} />
    ))}
  </div>
);

export default PostCardSkeleton;
