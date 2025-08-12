import { useState } from 'react';
import { Header } from '@/components/Header';
import { NextSeo } from '@/components/NextSeo';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';

export default function UNBridgePage() {
  const [institution, setInstitution] = useState('');
  const [type, setType] = useState('');
  const [region, setRegion] = useState('');
  const [budget, setBudget] = useState('');
  const [multiverse, setMultiverse] = useState('');

  const [markdown, setMarkdown] = useState('');
  const [json, setJson] = useState('');

  const generate = (e: React.FormEvent) => {
    e.preventDefault();
    const proposal = {
      institution,
      type,
      region,
      budget,
      multiverse,
      prompt: `Write a proposal for the ${institution} on integrating Zion into their Digital Labor Initiative. Include metrics, social outcomes, and DAO-based governance logic.`,
    };
    setJson(JSON.stringify(proposal, null, 2));
    setMarkdown(
      `# Proposal for ${institution}\n\n` +
        `**Type:** ${type}\n\n` +
        `**Region:** ${region}\n\n` +
        `**Budget / Goals:** ${budget}\n\n` +
        `**Supporting Multiverse:** ${multiverse}`
    );
  };

  const download = (content: string, filename: string, type: string) => {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-background">
      <NextSeo title="UN Bridge" description="Draft proposals for global institutions" />
      <Header />
      <main className="container mx-auto py-8 space-y-8">
        <h1 className="text-3xl font-bold">Global Outreach Proposal</h1>
        <form onSubmit={generate} className="space-y-4">
          <Input placeholder="Target institution" value={institution} onChange={(e) => setInstitution(e.target.value)} />
          <Select value={type} onValueChange={setType}>
            <SelectTrigger>
              <SelectValue placeholder="Proposal type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Workforce Dev">Workforce Dev</SelectItem>
              <SelectItem value="AI Ethics">AI Ethics</SelectItem>
              <SelectItem value="Digital ID">Digital ID</SelectItem>
              <SelectItem value="Education">Education</SelectItem>
            </SelectContent>
          </Select>
          <Input placeholder="Regional scope" value={region} onChange={(e) => setRegion(e.target.value)} />
          <Input placeholder="Budget / Resolution goals" value={budget} onChange={(e) => setBudget(e.target.value)} />
          <Input placeholder="Supporting multiverse(s)" value={multiverse} onChange={(e) => setMultiverse(e.target.value)} />
          <Button type="submit">Generate Proposal</Button>
        </form>
        {markdown && (
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">Proposal Preview</h2>
            <Textarea value={markdown} readOnly className="h-48" />
            <div className="flex space-x-2">
              <Button variant="outline" onClick={() => download(json, 'proposal.json', 'application/json')}>Download JSON</Button>
              <Button variant="outline" onClick={() => download(markdown, 'proposal.md', 'text/markdown')}>Download Markdown</Button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
