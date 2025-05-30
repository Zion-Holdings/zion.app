import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ChatMessage } from '@/components/ChatAssistant/ChatMessage';
import { ChatInput } from '@/components/ChatAssistant/ChatInput';

interface Msg { id: string; role: 'user' | 'assistant'; message: string; }

export function SupportChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const endRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages]);

  const sendMessage = async (text: string) => {
    const userMsg: Msg = { id: Date.now().toString(), role: 'user', message: text };
    setMessages(prev => [...prev, userMsg]);
    try {
      const res = await fetch('/api/kb-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages.map(m => ({ role: m.role, content: m.message })), { role: 'user', content: text }] })
      });
      const data = await res.json();
      const botMsg: Msg = { id: Date.now().toString() + '-a', role: 'assistant', message: data.message };
      setMessages(prev => [...prev, botMsg]);
    } catch (err) {
      console.error(err);
      setMessages(prev => [...prev, { id: Date.now().toString() + '-e', role: 'assistant', message: 'Sorry, something went wrong.' }]);
    }
  };

  if (!open) {
    return (
      <Button onClick={() => setOpen(true)} size="icon" variant="outline" className="fixed bottom-4 right-4 h-12 w-12 rounded-full shadow-lg bg-zion-purple text-white hover:bg-zion-purple-light z-50" aria-label="Open help chat">
        <MessageSquare className="h-5 w-5" />
      </Button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 bg-zion-blue w-80 max-w-full rounded-lg shadow-xl flex flex-col z-50">
      <div className="bg-zion-blue-dark p-2 flex justify-between items-center">
        <span className="text-white font-medium">Help Bot</span>
        <Button variant="ghost" size="icon" className="text-white" onClick={() => setOpen(false)}>
          <X className="h-5 w-5" />
        </Button>
      </div>
      <div className="flex-1 overflow-y-auto p-3 space-y-4" style={{ maxHeight: '400px' }}>
        {messages.map(m => (
          <ChatMessage key={m.id} role={m.role} message={m.message} />
        ))}
        <div ref={endRef} />
      </div>
      <div className="p-2 border-t border-zion-purple/20 bg-zion-blue-dark/30">
        <ChatInput onSend={sendMessage} />
      </div>
    </div>
  );
}
