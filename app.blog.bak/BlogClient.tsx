interface BlogClientProps {
  posts?: any[];
  categories?: string[];
}

export default function BlogClient({ posts = [], categories = [] }: BlogClientProps) {
  if (!posts.length) return null;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {posts.map((post: any) => (
        <article key={post.slug} className="bg-slate-900/60 border border-slate-700/40 rounded-xl p-5 hover:border-purple-500/30 transition-all">
          <div className="text-2xl mb-2">{post.icon}</div>
          <div className="text-xs text-purple-400 mb-1">{post.category}</div>
          <h3 className="text-white font-semibold mb-2">{post.title}</h3>
          <p className="text-sm text-slate-400">{post.excerpt}</p>
          <div className="flex items-center gap-3 mt-3 text-xs text-slate-500">
            <span>{post.date}</span>
            <span>{post.readTime}</span>
          </div>
        </article>
      ))}
    </div>
  );
}
