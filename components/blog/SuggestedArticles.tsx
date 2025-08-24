import Link from 'next/link';
import { BlogPost } from '@/utils/types/blog';

function overlapScore(a: BlogPost, b: BlogPost): number {
  const topics = a.topics.filter((t) => b.topics.includes(t)).length;
  const tags = a.tags.filter((t) => b.tags.includes(t)).length;
  return topics * 2 + tags;
}

export default function SuggestedArticles({ current, all }: { current: BlogPost; all: BlogPost[] }) {
  const suggestions = all
    .filter((p) => p.id !== current.id && p.status === 'published')
    .map((p) => ({ post: p, score: overlapScore(current, p) }))
    .sort((a, b) => b.score - a.score || new Date(b.post.publishDate).getTime() - new Date(a.post.publishDate).getTime())
    .slice(0, 3)
    .map((x) => x.post);

  if (suggestions.length === 0) return null;

  return (
    <div className="mt-10">
      <h3 className="text-xl font-semibold mb-4">Suggested articles</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {suggestions.map((p) => (
          <div key={p.id} className="border rounded p-3">
            <div className="text-sm text-gray-500">{new Date(p.publishDate).toLocaleDateString()}</div>
            <Link href={`/blog/${p.slug}`} className="font-medium">{p.title}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}