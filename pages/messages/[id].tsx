import React from 'react';
import { useRouter } from 'next/router';
import useSWR, { mutate } from 'swr';
import Link from 'next/link';
import { useCurrentUser } from '../../hooks/useCurrentUser';

const fetcher = (url: string) => fetch(url).then((r) => (r.ok ? r.json() : Promise.reject(r)));

export default function ThreadPage() {
  const router = useRouter();
  const { id } = router.query as { id: string };
  const { user, loading } = useCurrentUser();

  React.useEffect(() => {
    if (!loading && !user) router.replace('/auth');
  }, [loading, user, router]);

  const { data } = useSWR(user && id ? `/api/messages/thread?id=${id}` : null, fetcher, {
    refreshInterval: 3000,
  });

  React.useEffect(() => {
    if (user && id) {
      fetch('/api/messages/read', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ conversationId: id }),
      });
    }
  }, [user, id]);

  const [message, setMessage] = React.useState('');
  const [linkUrl, setLinkUrl] = React.useState('');
  const [file, setFile] = React.useState<File | null>(null);
  const [sending, setSending] = React.useState(false);

  if (!user || !data) return null;

  const otherId = data.conversation.participants.find((p: string) => p !== user.id);

  const onSend = async () => {
    if (!message.trim() && !file && !linkUrl) return;
    setSending(true);
    let attachmentBase64: string | undefined;
    if (file) {
      const buff = await file.arrayBuffer();
      const base64 = Buffer.from(buff).toString('base64');
      const mime = file.type || 'application/octet-stream';
      attachmentBase64 = `data:${mime};base64,${base64}`;
    }
    await fetch('/api/messages/thread', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        conversationId: id,
        recipientId: otherId,
        body: message,
        linkUrl: linkUrl || undefined,
        attachmentBase64,
        attachmentName: file?.name,
      }),
    });
    setMessage('');
    setLinkUrl('');
    setFile(null);
    setSending(false);
    mutate(`/api/messages/thread?id=${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto p-4">
        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-4 border-b flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 text-white flex items-center justify-center mr-3 shadow">
                {otherId?.[0]?.toUpperCase() || 'U'}
              </div>
              <div>
                <p className="font-medium">Conversation</p>
                {data.conversation.context?.jobTitle && (
                  <p className="text-xs text-gray-500">{data.conversation.context.type}: {data.conversation.context.jobTitle}</p>
                )}
              </div>
            </div>
            <Link href="/messages"><a className="text-sm text-indigo-600">Back to Inbox</a></Link>
          </div>

          <div className="p-4 h-[60vh] overflow-y-auto space-y-2">
            {data.messages.map((m: any) => {
              const mine = m.senderId === user.id;
              return (
                <div key={m.id} className={`flex ${mine ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[75%] p-3 rounded-2xl shadow-sm ${mine ? 'bg-indigo-50' : 'bg-gray-100'}`}>
                    <p className="text-sm whitespace-pre-wrap">{m.body}</p>
                    {m.linkUrl && (
                      <a href={m.linkUrl} target="_blank" rel="noreferrer" className="text-xs text-indigo-600 underline break-all">{m.linkUrl}</a>
                    )}
                    {m.attachmentUrl && (
                      <div className="mt-2">
                        <a href={m.attachmentUrl} target="_blank" rel="noreferrer" className="text-xs text-indigo-600 underline">Attachment</a>
                      </div>
                    )}
                    <div className="text-[10px] text-gray-500 mt-1">{new Date(m.createdAt).toLocaleString()} • {m.status}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="p-4 border-t space-y-2">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={3}
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Write a message..."
            />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <input type="url" value={linkUrl} onChange={(e) => setLinkUrl(e.target.value)} placeholder="Optional link (proposal, portfolio)" className="border rounded-lg p-2 w-64" />
                <input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} className="text-sm" />
              </div>
              <button onClick={onSend} disabled={sending} className="px-4 py-2 rounded-lg bg-indigo-600 text-white shadow hover:bg-indigo-700 disabled:opacity-50">{sending ? 'Sending...' : 'Send'}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}