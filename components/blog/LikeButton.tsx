import { useState } from 'react';

export default function LikeButton({ postId, initialLikes = 0 }: { postId: string; initialLikes?: number }) {
  const [likes, setLikes] = useState(initialLikes);
  const [busy, setBusy] = useState(false);

  const like = async () => {
    if (busy) return;
    setBusy(true);
    try {
      const res = await fetch(`/api/blog/metrics/${postId}/likes`, { method: 'POST' });
      if (res.ok) {
        const data = await res.json();
        setLikes(data.metrics?.likes ?? likes + 1);
      }
    } finally {
      setBusy(false);
    }
  };

  return (
    <button onClick={like} disabled={busy} className="px-3 py-2 rounded border">
      👍 Like {likes > 0 ? `(${likes})` : ''}
    </button>
  );
}