import { useState } from 'react';
import { Header } from '@/components/Header';
import { NextSeo } from '@/components/NextSeo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';
import { LivestreamSection } from '@/components/summit/LivestreamSection';
import { ChatBotPanel } from '@/components/support/ChatBotPanel';

interface Instance {
  id: number;
  name: string;
  stake: number;
}

const INSTANCES: Instance[] = [
  { id: 1, name: 'Zion LATAM', stake: 1000 },
  { id: 2, name: 'Zion Health', stake: 800 },
  { id: 3, name: 'Zion Law', stake: 600 },
  { id: 4, name: 'Zion DevOps', stake: 500 },
  { id: 5, name: 'Zion Research', stake: 700 },
  { id: 6, name: 'Zion Gaming', stake: 300 },
];

const TEMPLATES = [
  'Protocol Amendment',
  'Global Token Adjustment',
  'Multiverse Sync Activation',
  'Emergency Governance Pause',
];

type Vote = 'yes' | 'no' | null;

export default function CongressPage() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [origin, setOrigin] = useState('');
  const [action, setAction] = useState('');
  const [votes, setVotes] = useState<Record<number, Vote>>(() => {
    const v: Record<number, Vote> = {};
    INSTANCES.forEach((i) => {
      v[i.id] = null;
    });
    return v;
  });

  const total = INSTANCES.length;
  const yesCount = INSTANCES.filter((i) => votes[i.id] === 'yes').length;
  const majority = total <= 5 ? total : Math.ceil((2 / 3) * total);
  const pass = yesCount >= majority;

  const castVote = (id: number, value: Vote) => {
    setVotes((prev) => ({ ...prev, [id]: prev[id] === value ? null : value }));
  };

  const submitProposal = (e: React.FormEvent) => {
    e.preventDefault();
    setTitle('');
    setBody('');
    setOrigin('');
    setAction('');
    alert('Proposal submitted (mock)');
  };

  return (
    <div className="min-h-screen bg-background">
      <NextSeo title="Planetary Congress" description="Cross-instance governance" />
      <Header />
      <main className="container mx-auto py-8 space-y-10">
        <h1 className="text-3xl font-bold">Zion Planetary Congress</h1>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Chamber of Nations</h2>
          <table className="w-full text-left border">
            <thead>
              <tr className="border-b">
                <th className="p-2">Instance</th>
                <th className="p-2">ZION$ Stake</th>
                <th className="p-2">Vote</th>
              </tr>
            </thead>
            <tbody>
              {INSTANCES.map((i) => (
                <tr key={i.id} className="border-b">
                  <td className="p-2">{i.name}</td>
                  <td className="p-2">{i.stake.toLocaleString()}</td>
                  <td className="p-2 space-x-2">
                    <Button
                      size="sm"
                      variant={votes[i.id] === 'yes' ? 'default' : 'outline'}
                      onClick={() => castVote(i.id, 'yes')}
                    >
                      👍
                    </Button>
                    <Button
                      size="sm"
                      variant={votes[i.id] === 'no' ? 'destructive' : 'outline'}
                      onClick={() => castVote(i.id, 'no')}
                    >
                      👎
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="space-y-2">
            <Progress value={(yesCount / total) * 100} />
            <p className="text-sm">
              {yesCount} yes / {majority} required {pass && '(Pass)'}
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Submit Global Proposal</h2>
          <form onSubmit={submitProposal} className="space-y-2">
            <Input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <Textarea
              placeholder="Proposal body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
            <Select value={origin} onValueChange={setOrigin}>
              <SelectTrigger>
                <SelectValue placeholder="Origin instance" />
              </SelectTrigger>
              <SelectContent>
                {INSTANCES.map((i) => (
                  <SelectItem key={i.id} value={i.name}>
                    {i.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Input
              placeholder="Suggested global action"
              value={action}
              onChange={(e) => setAction(e.target.value)}
            />
            <Button type="submit">Post Proposal</Button>
          </form>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Live Coordination</h2>
          <LivestreamSection />
          <ChatBotPanel />
        </section>

        <section className="space-y-2">
          <h2 className="text-2xl font-semibold">Templates</h2>
          <ul className="list-disc pl-6 space-y-1">
            {TEMPLATES.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
