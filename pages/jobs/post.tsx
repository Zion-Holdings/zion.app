import { FormEvent, useState } from 'react';
import { useRouter } from 'next/router';
import { useToast } from '../../components/ui/ToastProvider';

export default function PostJobPage() {
  const router = useRouter();
  const { showToast } = useToast();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    showToast({ title: 'Job posted', description: 'We will start matching talent right away.', variant: 'success' });
    router.push('/jobs/success');
  }

  return (
    <div className="max-w-2xl">
      <h1 className="text-xl font-semibold mb-4">Post a Job</h1>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block text-sm mb-1">Job Title</label>
          <input value={title} onChange={(e) => setTitle(e.target.value)} required className="w-full rounded-md border px-3 py-2 bg-white/70 dark:bg-black/30" />
        </div>
        <div>
          <label className="block text-sm mb-1">Description</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required rows={6} className="w-full rounded-md border px-3 py-2 bg-white/70 dark:bg-black/30" />
        </div>
        <button disabled={loading} className="px-4 py-2 rounded-md bg-blue-600 text-white disabled:opacity-60">
          {loading ? 'Posting…' : 'Post Job'}
        </button>
      </form>
    </div>
  );
}