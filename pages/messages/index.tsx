import React from 'react';
import useSWR from 'swr';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCurrentUser } from '../../hooks/useCurrentUser';

const fetcher = (url: string) => fetch(url).then((r) => (r.ok ? r.json() : Promise.reject(r)));

export default function InboxPage() {
  const { user, loading } = useCurrentUser();
  const router = useRouter();

  React.useEffect(() => {
    if (!loading && !user) router.replace('/auth');
  }, [loading, user, router]);

  const { data } = useSWR(user ? '/api/messages/inbox' : null, fetcher, {
    refreshInterval: 5000,
  });

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto p-4">
        <h1 className="text-2xl font-semibold mb-4">Inbox</h1>
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <ul>
            {data?.items?.length ? (
              data.items.map((item: any) => (
                <li key={item.conversation.id} className="border-b last:border-b-0">
                  <Link href={`/messages/${item.conversation.id}`}>
                    <a className="flex items-center p-4 hover:bg-gray-50">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 text-white flex items-center justify-center mr-3 shadow">
                        {item.otherParticipant.name?.[0] || 'U'}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="font-medium truncate">{item.otherParticipant.name} <span className="text-xs text-gray-400 ml-2">({item.otherParticipant.role})</span></p>
                          <span className="text-xs text-gray-400">{new Date(item.conversation.lastMessageAt).toLocaleString()}</span>
                        </div>
                        <p className="text-sm text-gray-600 truncate">{item.lastMessage?.body || 'No messages yet'}</p>
                      </div>
                      {item.unreadCount > 0 && (
                        <span className="ml-3 text-xs px-2 py-1 rounded-full bg-indigo-100 text-indigo-700">{item.unreadCount}</span>
                      )}
                    </a>
                  </Link>
                </li>
              ))
            ) : (
              <li className="p-8 text-center text-gray-500">No conversations yet</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}