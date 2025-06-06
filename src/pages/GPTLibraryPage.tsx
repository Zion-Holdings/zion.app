import { CATEGORY_LABELS, PROMPT_LIBRARY } from '@/data/promptLibrary';
import type { Prompt } from '@/types/prompts';
import { GradientHeading } from '@/components/GradientHeading';
import { PromptCard } from '@/components/prompts/PromptCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { SEO } from '@/components/SEO';
import { useState } from 'react';

export default function GPTLibraryPage() {
  const [customPrompt, setCustomPrompt] = useState('');

  const grouped = PROMPT_LIBRARY.reduce<Record<Prompt['category'], Prompt[]>>(
    (acc, p) => {
      acc[p.category] = acc[p.category] || [];
      acc[p.category].push(p);
      return acc;
    },
    { talent: [], client: [], admin: [], partner: [] }
  );

  const handleSendCustom = () => {
    if (!customPrompt) return;
    const encoded = encodeURIComponent(customPrompt);
    window.open(`/zion-gpt?prompt=${encoded}`, '_blank');
  };

  return (
    <>
      <SEO title="ZionGPT Prompt Library" description="Ready-to-use prompts for ZionGPT" />
      <div className="min-h-screen bg-zion-blue pt-12 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-4">
            <GradientHeading level="h1">ZionGPT Prompt Library</GradientHeading>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Tap a prompt to copy or send it directly to ZionGPT.
            </p>
          </div>
          {Object.entries(grouped).map(([key, prompts]) => (
            <section key={key} className="space-y-4">
              <h2 className="text-2xl font-bold text-white">{CATEGORY_LABELS[key as Prompt['category']]}</h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {prompts.map((p) => (
                  <PromptCard key={p.id} prompt={p} />
                ))}
              </div>
            </section>
          ))}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">Add Your Own</h2>
            <div className="flex gap-2">
              <Input
                placeholder="Enter your prompt"
                value={customPrompt}
                onChange={(e) => setCustomPrompt(e.target.value)}
                className="flex-1"
              />
              <Button onClick={handleSendCustom}>Send to ZionGPT</Button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
