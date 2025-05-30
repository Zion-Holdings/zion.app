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

  const onSubmit = async (values) => {
    const res = await fetch('/forum/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values)
    });
    if (res.ok) {
      const data = await res.json();
      navigate(`/community/${data.id}`);
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
        <button type="submit" className="px-4 py-2 bg-zion-purple text-white rounded-md">Post</button>
      </form>
      {content && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-2">Preview</h2>
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      )}
    </div>
  );
}
