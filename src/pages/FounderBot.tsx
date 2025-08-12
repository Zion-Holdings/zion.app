import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { ChatAssistant } from '@/components/ChatAssistant';
import { logErrorToProduction } from '@/utils/productionLogger';

export default function FounderBot() {
  const [open, setOpen] = useState(false);

  const handleSendMessage = async (message: string): Promise<void> => {
    try {
      await fetch('https://ziontechgroup.functions.supabase.co/functions/v1/founder-bot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ messages: [{ role: 'user', content: message }] })
      });
    } catch (err) {
      logErrorToProduction(err instanceof Error ? err.message : String(err), err instanceof Error ? err : undefined, { message: 'Founder bot error' });
    }
  };

  return (
    <>
      <SEO title="Founder AI" description="Chat with the AI clone of our founder." />
      <Header />
      <main className="min-h-screen bg-zion-blue text-white flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl font-bold mb-6">Ask the Founder</h1>
        <Button className="mb-4" onClick={() => setOpen(true)}>
          Open Founder Chat
        </Button>
        {open && (
          <ChatAssistant
            isOpen={open}
            onClose={() => setOpen(false)}
            recipient={{
              id: 'founder-bot',
              name: 'Founder AI',
              avatarUrl: 'https://placehold.co/64x64?text=F',
              role: 'Zion Founder Clone'
            }}
            onSendMessage={handleSendMessage}
          />
        )}
      </main>
    </>
  );
}
