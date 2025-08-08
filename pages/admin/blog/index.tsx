import { useEffect, useMemo, useState } from 'react';
import type { BlogPost } from '@/utils/types/blog';

const emptyPost: Partial<BlogPost> = {
  title: '',
  slug: '',
  author: '',
  publishDate: new Date().toISOString().slice(0, 10),
  tags: [],
  topics: [],
  seo: { metaTitle: '', metaDescription: '', ogImageUrl: '' },
  body: '',
  status: 'draft',
};

export default function AdminBlog() {
  const [token, setToken] = useState('');
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [editing, setEditing] = useState<Partial<BlogPost>>(emptyPost);

  useEffect(() => {
    const t = localStorage.getItem('adminToken') || '';
    setToken(t);
    fetch('/api/blog/posts?status=draft').then((r) => r.json()).then((d) => setPosts(d.items || [])).catch(() => {});
    fetch('/api/blog/posts?status=published').then((r) => r.json()).then((d) => setPosts((p) => [...p, ...(d.items || [])])).catch(() => {});
  }, []);

  const saveToken = () => {
    localStorage.setItem('adminToken', token);
  };

  const save = async (publish = false) => {
    const payload = { ...editing, status: publish ? 'published' : (editing.status || 'draft') } as Partial<BlogPost>;
    const isCreate = !payload.id;
    const res = await fetch(isCreate ? '/api/blog/posts' : `/api/blog/posts/${payload.id}`, {
      method: isCreate ? 'POST' : 'PUT',
      headers: { 'Content-Type': 'application/json', 'x-admin-token': token },
      body: JSON.stringify(payload),
    });
    if (res.ok) {
      const saved = await res.json();
      setEditing(saved);
      // refresh list
      const list = await fetch('/api/blog/posts').then((r) => r.json());
      setPosts(list.items || []);
      alert('Saved');
    } else {
      const err = await res.json().catch(() => ({}));
      alert('Error: ' + (err.error || res.statusText));
    }
  };

  const startEdit = (p?: BlogPost) => {
    if (p) setEditing(p);
    else setEditing({ ...emptyPost });
  };

  return (
    <div className="mx-auto max-w-5xl">
      <h1 className="text-3xl font-bold mb-4">Blog Admin</h1>

      <div className="mb-6 flex gap-2 items-center">
        <input value={token} onChange={(e) => setToken(e.target.value)} placeholder="Admin token" className="border rounded px-3 py-2 w-72" />
        <button onClick={saveToken} className="px-3 py-2 border rounded">Save token</button>
        <button onClick={() => startEdit()} className="ml-auto px-3 py-2 bg-indigo-600 text-white rounded">New Post</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1 border rounded p-3 h-[70vh] overflow-auto">
          <h2 className="font-semibold mb-2">All Posts</h2>
          <ul className="space-y-2">
            {posts.map((p) => (
              <li key={p.id} className="flex items-center justify-between">
                <button onClick={() => startEdit(p)} className="text-left underline">{p.title}</button>
                <span className={`text-xs px-2 py-1 rounded ${p.status === 'published' ? 'bg-green-100' : 'bg-yellow-100'}`}>{p.status}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2 border rounded p-4">
          <h2 className="font-semibold mb-3">Editor</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <input className="border rounded px-3 py-2" placeholder="Title" value={editing.title || ''} onChange={(e) => setEditing((s) => ({ ...s, title: e.target.value, seo: { ...(s.seo || { metaTitle: '', metaDescription: '' }), metaTitle: e.target.value } }))} />
            <input className="border rounded px-3 py-2" placeholder="Slug (permalink)" value={editing.slug || ''} onChange={(e) => setEditing((s) => ({ ...s, slug: e.target.value }))} />
            <input className="border rounded px-3 py-2" placeholder="Cover Image URL" value={editing.coverImageUrl || ''} onChange={(e) => setEditing((s) => ({ ...s, coverImageUrl: e.target.value }))} />
            <input className="border rounded px-3 py-2" placeholder="Author" value={editing.author || ''} onChange={(e) => setEditing((s) => ({ ...s, author: e.target.value }))} />
            <input type="date" className="border rounded px-3 py-2" value={(editing.publishDate || '').slice(0, 10)} onChange={(e) => setEditing((s) => ({ ...s, publishDate: new Date(e.target.value).toISOString() }))} />
            <input className="border rounded px-3 py-2" placeholder="Tags (comma separated)" value={(editing.tags || []).join(', ')} onChange={(e) => setEditing((s) => ({ ...s, tags: e.target.value.split(',').map((x) => x.trim()).filter(Boolean) }))} />
            <input className="border rounded px-3 py-2" placeholder="Topics (comma separated)" value={(editing.topics || []).join(', ')} onChange={(e) => setEditing((s) => ({ ...s, topics: e.target.value.split(',').map((x) => x.trim()).filter(Boolean) }))} />
            <input className="border rounded px-3 py-2" placeholder="SEO Meta Title" value={editing.seo?.metaTitle || ''} onChange={(e) => setEditing((s) => ({ ...s, seo: { ...(s.seo || {} as any), metaTitle: e.target.value } }))} />
            <input className="border rounded px-3 py-2" placeholder="SEO Meta Description" value={editing.seo?.metaDescription || ''} onChange={(e) => setEditing((s) => ({ ...s, seo: { ...(s.seo || {} as any), metaDescription: e.target.value } }))} />
          </div>
          <textarea className="border rounded px-3 py-2 mt-3 w-full h-64" placeholder="Body (Markdown or HTML)" value={editing.body || ''} onChange={(e) => setEditing((s) => ({ ...s, body: e.target.value }))} />

          <div className="mt-3 flex gap-2">
            <button onClick={() => save(false)} className="px-4 py-2 border rounded">Save Draft</button>
            <button onClick={() => save(true)} className="px-4 py-2 bg-green-600 text-white rounded">Publish</button>
          </div>
        </div>
      </div>
    </div>
  );
}