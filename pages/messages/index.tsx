import Link from 'next/link';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function MessagesIndex() {
  const { data, error } = useSWR('/api/conversations', fetcher, { refreshInterval: 10000 });

  if (error) return <div className="text-red-600">Failed to load</div>;
  const conversations = (data?.conversations as any[]) || [];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Messages</h1>
      </div>
      <div className="border rounded p-4 bg-white dark:bg-gray-900">
        {conversations.length === 0 && <p className="text-sm text-gray-600">No active conversations.</p>}
        <ul className="divide-y">
          {conversations.map((c) => (
            <li key={c.id} className="py-3 flex items-center justify-between">
              <div>
                <p className="font-medium text-sm">Conversation {c.id.slice(0, 8)}</p>
                <p className="text-xs text-gray-500">Messages: {c.messages?.length || 0}</p>
              </div>
              <Link href={`/messages/${c.id}`}><a className="text-sm underline">Open</a></Link>
            </li>
          ))}
        </ul>
        <div className="mt-3">
          <Link href="/"><a className="text-sm underline">Back to home</a></Link>
        </div>
      </div>
    </div>
  );
}