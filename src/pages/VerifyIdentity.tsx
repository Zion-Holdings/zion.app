import { useState } from 'react';
import { Header } from '@/components/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function VerifyIdentity() {
  const [name, setName] = useState('');
  const [idFile, setIdFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Normally you'd upload to the server here
    setSubmitted(true);
  };

  return (
    <div>
      <Header />
      <div className="min-h-screen bg-zion-blue px-4 py-8">
        <div className="container mx-auto max-w-lg">
          <h1 className="text-3xl font-bold text-white mb-6">Verify Identity</h1>
          <Card>
            <CardHeader>
              <CardTitle>KYC Verification</CardTitle>
            </CardHeader>
            <CardContent>
              {submitted ? (
                <p className="text-green-600">Your documents have been submitted for review.</p>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="legalName">Full Legal Name</Label>
                    <Input id="legalName" value={name} onChange={e => setName(e.target.value)} required />
                  </div>
                  <div>
                    <Label htmlFor="idUpload">Government ID</Label>
                    <Input id="idUpload" type="file" onChange={e => setIdFile(e.target.files?.[0] || null)} required />
                  </div>
                  <Button type="submit">Submit</Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
