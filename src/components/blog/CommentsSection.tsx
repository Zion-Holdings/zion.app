import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { addComment, getComments, CommentEntry } from '@/services/commentService';

interface CommentsSectionProps {
  slug: string;
}

export function CommentsSection({ slug }: CommentsSectionProps) {
  const [comments, setComments] = useState<CommentEntry[]>([]);
  const [name, setName] = useState('');
  const [text, setText] = useState('');

  useEffect(() => {
    if (slug) {
      setComments(getComments(slug));
    }
  }, [slug]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;
    const newComment = addComment(slug, { name: name.trim(), text: text.trim() });
    setComments([...comments, newComment]);
    setName('');
    setText('');
  };

  return (
    <div className="mt-12">
      <h2 className="text-xl font-semibold mb-4">Comments</h2>
      {comments.length === 0 ? (
        <p className="mb-4">No comments yet. Be the first to share your thoughts.</p>
      ) : (
        <ul className="space-y-4 mb-6">
          {comments.map((c) => (
            <li key={c.id} className="border-b pb-2">
              <p className="font-medium">
                {c.name}{' '}
                <span className="ml-2 text-xs text-muted-foreground">
                  {new Date(c.createdAt).toLocaleDateString()}
                </span>
              </p>
              <p>{c.text}</p>
            </li>
          ))}
        </ul>
      )}
      <form onSubmit={handleSubmit} className="space-y-3">
        <Input placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
        <Textarea
          placeholder="Add a comment..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={4}
        />
        <Button type="submit" disabled={!name.trim() || !text.trim()}
          >Post Comment</Button>
      </form>
    </div>
  );
}
