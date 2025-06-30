import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {logErrorToProduction} from '@/utils/productionLogger';

export default function PodcastHost() {

  const [invitee, setInvitee] = useState('');
  const [bio, setBio] = useState('');
  const [topic, setTopic] = useState('');
  const [script, setScript] = useState('');
  const [loading, setLoading] = useState(false);

  const generateScript = async () => {
    setLoading(true);
    setScript('');
    try {
      const res = await fetch('/api/podcast/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ invitee, bio, topic })
      });
      if (!res.ok) throw new Error('Failed to generate');
      const data = await res.json();
      setScript(data.script || '');
    } catch (err) {
      logErrorToProduction('Failed to generate podcast script', err);
      setScript('Error generating script.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-zion-blue">
      <Header />
      <main className="flex-1 p-6 md:p-10">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-3xl font-bold text-white">Podcast Host</h1>
          <p className="text-zion-slate-light">
            Generate interview scripts with ZionGPT.
          </p>
          <div className="space-y-4">
            <Input
              placeholder="Invitee Name"
              value={invitee}
              onChange={e => setInvitee(e.target.value)}
              className="bg-zion-blue border border-zion-blue-light text-white"
            />
            <Textarea
              placeholder="Invitee Bio"
              value={bio}
              onChange={e => setBio(e.target.value)}
              className="bg-zion-blue border border-zion-blue-light text-white"
            />
            <Input
              placeholder="Topic"
              value={topic}
              onChange={e => setTopic(e.target.value)}
              className="bg-zion-blue border border-zion-blue-light text-white"
            />
            <Button
              onClick={generateScript}
              disabled={loading}
              className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple"
            >
              {loading ? 'Generating...' : 'Generate Script'}
            </Button>
          </div>
          {script && (
            <Textarea
              value={script}
              readOnly
              className="bg-zion-blue border border-zion-blue-light text-white mt-6 min-h-[300px]"
            />
          )}
        </div>
      </main>
    </div>
  );
}
