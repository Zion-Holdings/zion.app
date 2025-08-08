import React, { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import EnhancedLayout from '../../../components/layout/EnhancedLayout';

const fetchJson = async (url: string, opts?: RequestInit) => {
  const res = await fetch(url, { ...opts, headers: { 'Content-Type': 'application/json', ...(opts?.headers || {}) } });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
};

type Thread = {
  id: string; categoryId: string; title: string; body: string; tags: string[];
  authorId: string; authorName: string; authorRole: string; votes: number; replyCount: number;
  isAnswered: boolean; isPinned: boolean; isLocked: boolean; isFeatured: boolean;
  createdAt: string; updatedAt: string;
};

type Reply = {
  id: string; threadId: string; parentReplyId?: string; authorId: string; authorName: string; authorRole: string; body: string; votes: number; createdAt: string; updatedAt: string;
};

export default function ThreadDetailPage() {
  const router = useRouter();
  const { id } = router.query as { id: string };
  const [thread, setThread] = useState<Thread | null>(null);
  const [replies, setReplies] = useState<Reply[]>([]);
  const [loading, setLoading] = useState(false);
  const [replyBody, setReplyBody] = useState('');

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    fetchJson(`/api/community/thread/${id}`)
      .then((d) => { setThread(d.thread); setReplies(d.replies); })
      .finally(() => setLoading(false));
  }, [id]);

  const topLevelReplies = useMemo(() => replies.filter(r => !r.parentReplyId), [replies]);
  const childRepliesMap = useMemo(() => {
    const m: Record<string, Reply[]> = {};
    replies.forEach(r => {
      if (!r.parentReplyId) return;
      (m[r.parentReplyId] ||= []).push(r);
    });
    return m;
  }, [replies]);

  const vote = async (type: 'thread' | 'reply', targetId: string, direction: 1 | -1) => {
    await fetchJson('/api/community/vote', {
      method: 'POST',
      body: JSON.stringify({ type, id: targetId, direction }),
      headers: { 'x-user-id': 'demo-user', 'x-user-name': 'Demo User', 'x-user-role': 'Talent' },
    });
    const d = await fetchJson(`/api/community/thread/${id}`);
    setThread(d.thread); setReplies(d.replies);
  };

  const submitReply = async (parentReplyId?: string) => {
    if (!replyBody.trim()) return;
    await fetchJson(`/api/community/thread/${id}/reply`, {
      method: 'POST',
      body: JSON.stringify({ body: replyBody.trim(), parentReplyId }),
      headers: { 'x-user-id': 'demo-user', 'x-user-name': 'Demo User', 'x-user-role': 'Talent' },
    });
    setReplyBody('');
    const d = await fetchJson(`/api/community/thread/${id}`);
    setThread(d.thread); setReplies(d.replies);
  };

  const markAnswered = async (answered: boolean) => {
    await fetchJson(`/api/community/thread/${id}/answer`, {
      method: 'POST',
      body: JSON.stringify({ answered }),
      headers: { 'x-user-id': 'demo-user', 'x-user-name': 'Demo User', 'x-user-role': 'Moderator' },
    });
    const d = await fetchJson(`/api/community/thread/${id}`);
    setThread(d.thread); setReplies(d.replies);
  };

  const adminUpdate = async (updates: Partial<Pick<Thread, 'isPinned' | 'isLocked' | 'isFeatured'>>) => {
    await fetchJson(`/api/community/thread/${id}/admin`, {
      method: 'POST',
      body: JSON.stringify(updates),
      headers: { 'x-user-id': 'admin', 'x-user-name': 'Admin', 'x-user-role': 'Admin' },
    });
    const d = await fetchJson(`/api/community/thread/${id}`);
    setThread(d.thread); setReplies(d.replies);
  };

  const report = async (targetType: 'thread' | 'reply', targetId: string) => {
    await fetchJson('/api/community/report', {
      method: 'POST',
      body: JSON.stringify({ targetType, targetId, reason: 'Abusive' }),
      headers: { 'x-user-id': 'demo-user', 'x-user-name': 'Demo User', 'x-user-role': 'Talent' },
    });
    alert('Reported. Thanks for keeping the community safe.');
  };

  if (loading || !thread) return (
    <EnhancedLayout>
      <div className="py-10 text-center text-gray-500">Loading…</div>
    </EnhancedLayout>
  );

  return (
    <EnhancedLayout>
      <article className="max-w-3xl mx-auto">
        <header className="mb-4">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            {thread.isPinned && <span className="px-2 py-0.5 rounded bg-yellow-100 text-yellow-800">Pinned</span>}
            {thread.isFeatured && <span className="px-2 py-0.5 rounded bg-purple-100 text-purple-800">Featured</span>}
            {thread.isLocked && <span className="px-2 py-0.5 rounded bg-gray-200 text-gray-700">Locked</span>}
            {thread.isAnswered && <span className="px-2 py-0.5 rounded bg-green-100 text-green-800">Answered</span>}
          </div>
          <h1 className="text-2xl font-semibold mt-1">{thread.title}</h1>
          <div className="mt-2 text-sm text-gray-600 dark:text-gray-300">Posted by {thread.authorName} • {new Date(thread.createdAt).toLocaleString()}</div>
        </header>

        <div className="prose dark:prose-invert max-w-none mb-6 whitespace-pre-wrap">{thread.body}</div>

        <div className="flex items-center gap-3 mb-8">
          <button className="px-3 py-2 rounded bg-gray-100 dark:bg-gray-900" onClick={() => vote('thread', thread.id, 1)}>👍 Upvote</button>
          <button className="px-3 py-2 rounded bg-gray-100 dark:bg-gray-900" onClick={() => vote('thread', thread.id, -1)}>👎 Downvote</button>
          <button className="px-3 py-2 rounded bg-gray-100 dark:bg-gray-900" onClick={() => report('thread', thread.id)}>🚩 Report</button>
          <button className="px-3 py-2 rounded bg-green-600 text-white" onClick={() => markAnswered(!thread.isAnswered)}>{thread.isAnswered ? 'Unmark Answered' : 'Mark as Answered'}</button>
          <div className="ml-auto flex gap-2">
            <button className="px-3 py-2 rounded bg-yellow-600 text-white" onClick={() => adminUpdate({ isPinned: !thread.isPinned })}>{thread.isPinned ? 'Unpin' : 'Pin'}</button>
            <button className="px-3 py-2 rounded bg-gray-600 text-white" onClick={() => adminUpdate({ isLocked: !thread.isLocked })}>{thread.isLocked ? 'Unlock' : 'Lock'}</button>
            <button className="px-3 py-2 rounded bg-purple-600 text-white" onClick={() => adminUpdate({ isFeatured: !thread.isFeatured })}>{thread.isFeatured ? 'Unfeature' : 'Feature'}</button>
          </div>
        </div>

        <section>
          <h2 className="text-lg font-medium mb-3">Replies ({replies.length})</h2>
          <ul className="space-y-3">
            {topLevelReplies.map((r) => (
              <li key={r.id} className="p-3 rounded border border-gray-200 dark:border-gray-800">
                <div className="text-sm text-gray-500">{r.authorName} • {new Date(r.createdAt).toLocaleString()}</div>
                <div className="mt-2 whitespace-pre-wrap">{r.body}</div>
                <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
                  <button onClick={() => vote('reply', r.id, 1)}>👍 {r.votes}</button>
                  <button onClick={() => vote('reply', r.id, -1)}>👎</button>
                  <button onClick={() => report('reply', r.id)}>🚩 Report</button>
                </div>
                {(childRepliesMap[r.id] || []).length > 0 && (
                  <ul className="mt-3 ml-6 space-y-2">
                    {(childRepliesMap[r.id] || []).map((cr) => (
                      <li key={cr.id} className="p-2 rounded border border-gray-200 dark:border-gray-800">
                        <div className="text-xs text-gray-500">{cr.authorName} • {new Date(cr.createdAt).toLocaleString()}</div>
                        <div className="mt-1 whitespace-pre-wrap">{cr.body}</div>
                        <div className="mt-1 flex items-center gap-2 text-xs text-gray-500">
                          <button onClick={() => vote('reply', cr.id, 1)}>👍 {cr.votes}</button>
                          <button onClick={() => vote('reply', cr.id, -1)}>👎</button>
                          <button onClick={() => report('reply', cr.id)}>🚩 Report</button>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </section>

        {!thread.isLocked && (
          <div className="mt-6">
            <h3 className="text-md font-medium mb-2">Add a reply</h3>
            <textarea className="w-full px-3 py-2 rounded bg-gray-100 dark:bg-gray-900 min-h-[120px]" value={replyBody} onChange={(e) => setReplyBody(e.target.value)} />
            <div className="mt-2 flex justify-end">
              <button className="px-3 py-2 rounded bg-blue-600 text-white" onClick={() => submitReply()}>Reply</button>
            </div>
          </div>
        )}
      </article>
    </EnhancedLayout>
  );
}