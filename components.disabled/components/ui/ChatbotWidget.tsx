import { useEffect, useRef, useState } from 'react';
import { getDb } from '../../utils/firebase/client';
import { collection, addDoc } from 'firebase/firestore';

interface ChatMessage { role: 'user' | 'assistant'; content: string }

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: 'Hi! I can help you find talent, services, or equipment; guide you to publish listings; or answer questions about Zion. How can I help?' }
  ]);
  const [loading, setLoading] = useState(false);
  const [sessionId] = useState<string>(() => 'sess-' + Math.random().toString(36).slice(2));
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages, open]);

  async function sendMessage() {
    const text = input.trim();
    if (!text) return;
    setInput('');
    const next = [...messages, { role: 'user', content: text } as ChatMessage];
    setMessages(next);
    setLoading(true);
    try {
      const res = await fetch('/api/chat/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId,
          messages: next.map((m) => ({ role: m.role, content: m.content })),
        }),
      });
      const data = await res.json();
      const reply = data.text || 'Sorry, I could not respond right now.';
      setMessages((prev) => [...prev, { role: 'assistant', content: reply }]);
      // client-side log (optional)
      try {
        const db = getDb();
        await addDoc(collection(db, 'zion_chat_client_logs'), {
          sessionId, user: text, assistant: reply, ts: Date.now(),
        });
      } catch {}
    } catch (e: any) {
      setMessages((prev) => [...prev, { role: 'assistant', content: 'There was an error. Please try again or use Talk to Human.' }]);
    } finally {
      setLoading(false);
    }
  }

  async function escalate() {
    const lastUser = [...messages].reverse().find((m) => m.role === 'user')?.content || '';
    try {
      await fetch('/api/chat/escalate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId, message: lastUser }),
      });
      setMessages((prev) => [...prev, { role: 'assistant', content: 'A human will contact you shortly via our live support.' }]);
    } catch {
      setMessages((prev) => [...prev, { role: 'assistant', content: 'Failed to reach a human right now. Please email support@zion.com.' }]);
    }
  }

  return (
    <div>
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-4 right-4 z-50 bg-black text-white rounded-full w-14 h-14 shadow-lg"
        aria-label="Open chat"
      >
        {open ? '×' : 'Chat'}
      </button>

      {open && (
        <div className="fixed bottom-20 right-4 z-50 w-80 bg-white border rounded-lg shadow-xl flex flex-col overflow-hidden">
          <div className="px-3 py-2 border-b text-sm font-medium">Zion Assistant</div>
          <div ref={listRef} className="p-3 h-80 overflow-y-auto space-y-2 text-sm">
            {messages.map((m, idx) => (
              <div key={idx} className={m.role === 'user' ? 'text-right' : 'text-left'}>
                <span className={m.role === 'user' ? 'inline-block bg-blue-600 text-white px-2 py-1 rounded' : 'inline-block bg-gray-100 px-2 py-1 rounded'}>
                  {m.content}
                </span>
              </div>
            ))}
            {loading && <div className="text-gray-500">Typing…</div>}
          </div>
          <div className="p-2 border-t space-y-2">
            <div className="flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' ? sendMessage() : undefined}
                className="flex-1 border rounded px-2 py-1"
                placeholder="Ask about talent, services, or Zion…"
              />
              <button onClick={sendMessage} className="bg-black text-white px-3 py-1 rounded">Send</button>
            </div>
            <button onClick={escalate} className="text-xs text-blue-600 underline">Talk to Human</button>
          </div>
        </div>
      )}
    </div>
  );
}