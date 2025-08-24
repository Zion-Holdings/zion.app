import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

interface ReplyFormProps {
  onSubmit: (content: string) => void;
  placeholder?: string;
}

export default function ReplyForm({ onSubmit, placeholder = "Write your reply..." }: ReplyFormProps) {
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim()) {
      onSubmit(content);
      setContent('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder={placeholder}
        className="w-full px-3 py-2 bg-white/20 border border-zion-slate-light rounded-md text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan resize-none"
        rows={3}
      />
      <div className="mt-2 flex justify-end">
        <Button type="submit" disabled={!content.trim()}>
          Post Reply
        </Button>
      </div>
    </form>
  );
}