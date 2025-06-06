import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function NewPost() {
  const { register, handleSubmit, watch } = useForm({
    defaultValues: { title: '', content: '' }
  });
  const navigate = useNavigate();
  const content = watch('content');
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [error, setError] = React.useState(null);

  const onSubmit = async (values) => {
    setIsSubmitting(true);
    setError(null);
    try {
      const res = await fetch('/forum/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.message || 'Failed to create post');
      }
      const data = await res.json();
      navigate(`/community/${data.id}`);
    } catch (e) {
      console.error('Post creation error:', e);
      setError(e.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container py-8">
      <h1 className="text-2xl font-bold mb-4">New Post</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" data-testid="new-post-form">
        <Input placeholder="Title" {...register('title', { required: true })} />
        <Textarea
          className="min-h-[200px]"
          placeholder="Write your post in markdown"
          {...register('content', { required: true })}
        />
        <button type="submit" disabled={isSubmitting} className="px-4 py-2 bg-zion-purple text-white rounded-md">
          {isSubmitting ? 'Posting...' : 'Post'}
        </button>
      </form>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {content && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-2">Preview</h2>
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      )}
    </div>
  );
}
