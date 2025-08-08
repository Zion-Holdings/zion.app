import React from 'react';
import { useRouter } from 'next/router';
import { useCurrentUser } from '../../hooks/useCurrentUser';

export default function ComposePage() {
  const router = useRouter();
  const { type, recipientId, recipientName, jobId, jobTitle, talentId, talentName } = router.query as Record<string, string>;
  const { user, loading } = useCurrentUser();
  const [message, setMessage] = React.useState('');
  const [linkUrl, setLinkUrl] = React.useState('');
  const [file, setFile] = React.useState<File | null>(null);
  const [sending, setSending] = React.useState(false);

  React.useEffect(() => {
    if (!loading && !user) router.replace('/auth');
  }, [loading, user, router]);

  if (!user) return null;

  const headerTitle = type === 'invite' ? `Invite ${recipientName || talentName || 'Talent'}` : type === 'apply' ? `Apply to ${jobTitle || 'Job'}` : 'New Message';
  const context = type === 'invite'
    ? { type: 'invite', jobId, jobTitle, talentId, talentName }
    : type === 'apply'
    ? { type: 'application', jobId, jobTitle }
    : { type: 'general' };

  const onSend = async () => {
    if (!recipientId && !talentId) return alert('Missing recipient');
    if (!message.trim() && !file && !linkUrl) return;
    setSending(true);
    let attachmentBase64: string | undefined;
    if (file) {
      const buff = await file.arrayBuffer();
      const base64 = Buffer.from(buff).toString('base64');
      const mime = file.type || 'application/octet-stream';
      attachmentBase64 = `data:${mime};base64,${base64}`;
    }
    const res = await fetch('/api/messages/compose', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        recipientId: recipientId || talentId,
        body: message,
        linkUrl: linkUrl || undefined,
        attachmentBase64,
        attachmentName: file?.name,
        context,
      }),
    });
    const data = await res.json();
    setSending(false);
    if (data?.conversation?.id) router.replace(`/messages/${data.conversation.id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto p-4">
        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-4 border-b">
            <h1 className="text-xl font-semibold">{headerTitle}</h1>
            <p className="text-sm text-gray-500">
              {type === 'invite' && jobTitle ? `Hi ${talentName || recipientName || ''}, I’d like to invite you to discuss a project: ${jobTitle}` : null}
              {type === 'apply' && jobTitle ? `Applying to: ${jobTitle}` : null}
            </p>
          </div>
          <div className="p-4 space-y-3">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={6}
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder={type === 'invite' && jobTitle ? `Hi ${talentName || recipientName || ''}, I’d like to invite you to discuss a project: ${jobTitle}` : 'Write your message...'}
            />
            <input type="url" value={linkUrl} onChange={(e) => setLinkUrl(e.target.value)} placeholder="Optional proposal or portfolio link" className="border rounded-lg p-2 w-full" />
            <input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} className="text-sm" />
          </div>
          <div className="p-4 border-t flex justify-end">
            <button onClick={onSend} disabled={sending} className="px-4 py-2 rounded-lg bg-indigo-600 text-white shadow hover:bg-indigo-700 disabled:opacity-50">{sending ? 'Sending...' : 'Send'}</button>
          </div>
        </div>
      </div>
    </div>
  );
}