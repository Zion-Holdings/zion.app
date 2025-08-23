import React, { useEffect, useMemo, useRef, useState } from 'react';

export type ChatMessage = {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
};

function generateId() {
  return Math.random().toString(36).slice(2);
}

const SUGGESTED_QUESTIONS: string[] = [
  'What is the Zion AI Marketplace?',
  'How do I list my AI model or service?',
  'How does pricing and fees work?',
  'How do I integrate the API into my app?',
  'How do I contact support?'
];

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    if (messages.length === 0) {
      setMessages([
        {
          id: generateId(),
          role: 'assistant',
          content:
            'Hi! I\'m the Zion Assistant. I can help you explore features, answer FAQs, and guide you around the Zion AI Marketplace. How can I help today?'
        }
      ]);
    }
    const t = setTimeout(() => inputRef.current?.focus(), 150);
    return () => clearTimeout(t);
  }, [isOpen]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 999999, behavior: 'smooth' });
  }, [messages, isOpen]);

  const canSend = useMemo(() => input.trim().length > 0 && !isSending, [input, isSending]);

  async function sendMessage(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;
    const userMsg: ChatMessage = { id: generateId(), role: 'user', content: trimmed };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsSending(true);
    try {
      const res = await fetch('/api/assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, userMsg].map(m => ({ role: m.role, content: m.content })) })
      });
      if (!res.ok) {
        throw new Error(`Request failed: ${res.status}`);
      }
      const data = await res.json();
      const content: string = data?.message?.content ?? 'Sorry, I could not generate a response right now.';
      setMessages(prev => [...prev, { id: generateId(), role: 'assistant', content }]);
    } catch (err) {
      setMessages(prev => [
        ...prev,
        {
          id: generateId(),
          role: 'assistant',
          content:
            'Sorry, something went wrong connecting to the assistant. Please try again, and ensure your network is online.'
        }
      ]);
    } finally {
      setIsSending(false);
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (canSend) sendMessage(input);
  }

  function handleSuggestedClick(q: string) {
    sendMessage(q);
  }

  return (
    <>
      {/* Launcher button */}
      <button
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
        onClick={() => setIsOpen(o => !o)}
        className="fixed bottom-4 right-4 z-[99] rounded-full shadow-lg bg-gradient-to-r from-indigo-600 to-violet-600 text-white px-5 py-3 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        {isOpen ? 'Close' : 'Chat with Zion'}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[98] flex items-end sm:items-center justify-center">
          <div className="absolute inset-0 bg-black/30" onClick={() => setIsOpen(false)} />
          <div className="relative w-full sm:max-w-md mx-auto sm:mx-0 sm:mr-6 sm:mb-6 rounded-t-2xl sm:rounded-2xl overflow-hidden shadow-2xl bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-800">
              <div className="flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <div className="text-sm font-semibold">Zion Assistant</div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close chat"
                className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                Esc
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="h-[60vh] sm:h-[420px] overflow-y-auto px-4 py-3 space-y-3">
              {messages.map(m => (
                <div key={m.id} className={m.role === 'user' ? 'text-right' : 'text-left'}>
                  <div
                    className={
                      'inline-block max-w-[85%] px-3 py-2 rounded-2xl text-sm ' +
                      (m.role === 'user'
                        ? 'bg-indigo-600 text-white rounded-br-sm'
                        : 'bg-gray-100 dark:bg-gray-800 dark:text-gray-100 rounded-bl-sm')
                    }
                  >
                    {m.content}
                  </div>
                </div>
              ))}

              {messages.length <= 1 && (
                <div className="text-xs text-gray-500 mt-2">
                  Quick questions:
                  <div className="mt-2 flex flex-wrap gap-2">
                    {SUGGESTED_QUESTIONS.map(q => (
                      <button
                        key={q}
                        onClick={() => handleSuggestedClick(q)}
                        className="px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="border-t border-gray-200 dark:border-gray-800 p-3">
              <div className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  placeholder={isSending ? 'Sending…' : 'Ask about features, pricing, onboarding…'}
                  className="flex-1 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  disabled={isSending}
                  aria-disabled={isSending}
                />
                <button
                  type="submit"
                  disabled={!canSend}
                  className="rounded-lg bg-indigo-600 text-white text-sm font-medium px-4 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}