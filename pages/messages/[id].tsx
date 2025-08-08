import { useRouter } from 'next/router';
import useSWR, { mutate } from 'swr';
import { useState } from 'react';

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function ConversationPage() {
  const router = useRouter();
  const { id } = router.query;
  const { data, error } = useSWR(id ? `/api/messages?conversationId=${id}` : null, fetcher, { refreshInterval: 5000 });
  const [text, setText] = useState('');

  if (error) return <div className="text-red-600">Failed to load</div>;
  if (!data) return <div>Loading…</div>;

  const conversation = data.conversation as any;

  async function sendMessage() {
    if (!text.trim()) return;
    const res = await fetch('/api/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        conversationId: id,
        sender: conversation.participants[0],
        text,
      }),
    });
    if (res.ok) {
      setText('');
      mutate(`/api/messages?conversationId=${id}`);
    }
  }

  return (
    <div className="max-w-3xl mx-auto flex flex-col h-[calc(100vh-8rem)]">
      <div className="border rounded p-4 flex-1 overflow-auto bg-white dark:bg-gray-900">
        <h1 className="text-xl font-semibold mb-3">Conversation</h1>
        <div className="space-y-3">
          {conversation.messages.map((m: any) => (
            <div key={m.id} className="flex flex-col">
              <span className="text-xs text-gray-500">{new Date(m.createdAtIso).toLocaleString()}</span>
              <div className="rounded border p-2 mt-1 max-w-lg">{m.text}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-3 flex gap-2">
        <input
          className="flex-1 border rounded p-2"
          placeholder="Type a message…"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              sendMessage();
            }
          }}
        />
        <button className="px-4 py-2 rounded bg-black text-white" onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}