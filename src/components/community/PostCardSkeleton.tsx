import {;
  Card,;
  CardContent,;
  CardFooter,;
<<<<<<< HEAD
  CardHeader,;
} from '@/components/ui/card;'';
import Skeleton from 'react-loading-skeleton;'
;'';
export const PostCardSkeleton: unknown = () => (;;
  <Card data-testid="post-card-skeleton">;";";";";""
    <CardHeader className="flex flex-row items-start gap-4 space-y-0">;";";";""
      <Skeleton height={40} width={40} circle />;";";";";""
      <div className="flex-1 space-y-2">;";";";";""
        <Skeleton height={16} width="75%" />;";";";";""
        <Skeleton height={12} width="25%" />;";""
      </div>;";";""
    </CardHeader>;";";";""
    <CardContent>;";";";";""
      <div className="space-y-2">;";";";";""
        <Skeleton height={16} width="100%" />;";";";";""
        <Skeleton height={16} width="83%" />;"
=======
  CardHeader,
} from '@/components/ui/card'
import Skeleton from 'react-loading-skeleton'
'
export const PostCardSkeleton = () => ('
  <Card data-testid="post-card-skeleton>;"";
    <CardHeader className="flex flex-row items-start gap-4 space-y-0">;"
      <Skeleton height={40} width={40} circle />;";"
      <div className=flex-1 space-y-2">""
        <Skeleton height={16} width=75% />"
        <Skeleton height={12} width="25% />;"
      </div>";
    </CardHeader>;"";
    <CardContent>;""
      <div className="space-y-2>;"";
        <Skeleton height={16} width="100%" />;"
        <Skeleton height={16} width=83%" />"
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
      </div>;
    </CardContent>;
    <CardFooter>;
      <Skeleton height={16} width={96} />;
<<<<<<< HEAD
    </CardFooter>;""
  </Card>;";""
);";";""
;";";";"";
export const _PostListSkeleton: unknown "unknown = ({ count = 3 "}: { count?: number }) => (;";";";";""
  <div className="space-y-4">;";";";";""
    {Array.from({ length: "count "}).map((_, i) => (;"
      <PostCardSkeleton key={i} />;
    ))};
  </div>;""
);";""
;";";"";
export default PostCardSkeleton;";";";""
""""""
=======
    </CardFooter>
  </Card>;"
);";
";";
export const _PostListSkeleton: ({ count = 3 "}: { count?: number }) => (;"
  <div className=space-y-4">""
    {Array.from({ length: count }).map((_, i) => ("
      <PostCardSkeleton key={i} />))};
  </div>"
);"";
export default PostCardSkeleton;"";
"""'';;
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
