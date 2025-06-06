import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export default function RequestService() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [details, setDetails] = useState('');
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      toast({
        title: 'Missing Information',
        description: 'Name, email and phone are required.',
        variant: 'destructive'
      });
      return;
    }
    try {
      const res = await fetch('/api/service-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, details })
      });
      if (!res.ok) throw new Error('Request failed');
      toast({
        title: "Request sent – we'll reply within 24h"
      });
      setName('');
      setEmail('');
      setPhone('');
      setDetails('');
    } catch (err) {
      toast({
        title: 'Submission Failed',
        description: 'There was an error submitting your request.',
        variant: 'destructive'
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-zion-blue">
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md w-full p-4">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full border p-2 rounded"
          required
        />
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone"
          className="w-full border p-2 rounded"
          required
        />
        <textarea
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          placeholder="Describe your request"
          className="request-textarea w-full border p-2 rounded"
          rows={4}
        />
        <button type="submit" className="request-btn p-2 rounded w-full">
          Submit
        </button>
      </form>
    </div>
  );
}
