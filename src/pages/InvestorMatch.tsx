import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { getInvestorMatches, InvestorMatch, generatePitchEmail } from '@/lib/investor-matching';

export default function InvestorMatchPage() {
  const [form, setForm] = useState({
    startup: '',
    industry: '',
    location: '',
    stage: '',
    teamSize: '',
    summary: '',
    link: ''
  });
  const [matches, setMatches] = useState<InvestorMatch[]>([]);
  const [loading, setLoading] = useState(false);
  const [emailText, setEmailText] = useState('');
  const [selected, setSelected] = useState<InvestorMatch | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const results = await getInvestorMatches(form.industry, form.location, form.stage);
    setMatches(results);
    setLoading(false);
  };

  const handleGenerateEmail = (match: InvestorMatch) => {
    setSelected(match);
    setEmailText(generatePitchEmail(form.startup, match.investor.name, form.summary));
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-zion-blue py-12 px-4">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold text-white mb-6">Investor Matchmaker</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="startup" className="text-white">Startup Name</Label>
              <Input id="startup" name="startup" value={form.startup} onChange={handleChange} className="bg-zion-blue border-zion-blue-light text-white" />
            </div>
            <div>
              <Label htmlFor="industry" className="text-white">Industry</Label>
              <Input id="industry" name="industry" value={form.industry} onChange={handleChange} className="bg-zion-blue border-zion-blue-light text-white" />
            </div>
            <div>
              <Label htmlFor="location" className="text-white">Location</Label>
              <Input id="location" name="location" value={form.location} onChange={handleChange} className="bg-zion-blue border-zion-blue-light text-white" />
            </div>
            <div>
              <Label htmlFor="stage" className="text-white">Round Type</Label>
              <Input id="stage" name="stage" value={form.stage} onChange={handleChange} placeholder="Pre-seed, Seed, etc" className="bg-zion-blue border-zion-blue-light text-white" />
            </div>
            <div>
              <Label htmlFor="teamSize" className="text-white">Team Size</Label>
              <Input id="teamSize" name="teamSize" value={form.teamSize} onChange={handleChange} className="bg-zion-blue border-zion-blue-light text-white" />
            </div>
            <div>
              <Label htmlFor="summary" className="text-white">Pitch Summary</Label>
              <Textarea id="summary" name="summary" value={form.summary} onChange={handleChange} className="bg-zion-blue border-zion-blue-light text-white" />
            </div>
            <div>
              <Label htmlFor="link" className="text-white">Deck or Website Link</Label>
              <Input id="link" name="link" value={form.link} onChange={handleChange} className="bg-zion-blue border-zion-blue-light text-white" />
            </div>
            <Button type="submit" disabled={loading}>{loading ? 'Searching...' : 'Find Investors'}</Button>
          </form>
        </div>
        <div className="container mx-auto max-w-4xl mt-8 grid gap-4">
          {matches.map(match => (
            <Card key={match.investor.id} className="bg-zion-blue-dark border border-zion-blue-light text-white">
              <CardHeader>
                <CardTitle className="text-xl">{match.investor.name}</CardTitle>
                <CardDescription>
                  <a href={match.investor.website} target="_blank" rel="noreferrer" className="underline text-zion-cyan">
                    {match.investor.website}
                  </a>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>{match.reason}</p>
                <p className="mt-2 text-sm">Relevance Score: {match.score}</p>
                <Button className="mt-4" onClick={() => handleGenerateEmail(match)}>Generate Custom Pitch Email</Button>
              </CardContent>
            </Card>
          ))}
        </div>
        {emailText && selected && (
          <div className="container mx-auto max-w-3xl mt-8 text-white">
            <h2 className="text-2xl font-bold mb-2">Email to {selected.investor.name}</h2>
            <pre className="whitespace-pre-wrap bg-zion-blue-dark p-4 border border-zion-blue-light rounded-lg">{emailText}</pre>
          </div>
        )}
      </div>
    </>
  );
}
