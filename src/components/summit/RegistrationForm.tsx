import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

export function RegistrationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [country, setCountry] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 500));
    setLoading(false);
    setName('');
    setEmail('');
    setRole('');
    setCountry('');
    toast({ title: 'Registered!' });
  };

  return (
    <section className="py-12 bg-zion-blue-dark text-white" id="register">
      <div className="container mx-auto px-4 max-w-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" value={name} onChange={(e) => setName(e.target.value)} className="bg-zion-blue-light" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-zion-blue-light" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="role">Role</Label>
            <Input id="role" value={role} onChange={(e) => setRole(e.target.value)} className="bg-zion-blue-light" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="country">Country</Label>
            <Input id="country" value={country} onChange={(e) => setCountry(e.target.value)} className="bg-zion-blue-light" />
          </div>
          <Button type="submit" disabled={loading} className="w-full bg-zion-cyan hover:bg-zion-cyan/80">
            {loading ? 'Submitting...' : 'Sign Up'}
          </Button>
        </form>
      </div>
    </section>
  );
}
