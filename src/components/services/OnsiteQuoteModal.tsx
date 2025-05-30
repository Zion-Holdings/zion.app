import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface OnsiteQuoteModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  country?: string;
}

export function OnsiteQuoteModal({ open, onOpenChange, country }: OnsiteQuoteModalProps) {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', details: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.details) {
      toast({
        variant: 'destructive',
        title: 'Missing information',
        description: 'Please fill in all required fields.',
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch('/api/quotes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, country, service: 'standard' }),
      });
      if (!res.ok) throw new Error('Request failed');
      toast({ title: 'Quote Requested', description: 'We\'ve sent a confirmation email.' });
      onOpenChange(false);
      setFormData({ name: '', email: '', phone: '', details: '' });
    } catch (err) {
      toast({ variant: 'destructive', title: 'Submission Failed', description: 'Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-zion-blue border-zion-blue-light text-white">
        <DialogHeader>
          <DialogTitle>Request a Quote</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="bg-zion-blue-dark border-zion-blue-light text-white"
            required
          />
          <Input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="bg-zion-blue-dark border-zion-blue-light text-white"
            required
          />
          <Input
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="bg-zion-blue-dark border-zion-blue-light text-white"
            required
          />
          <Textarea
            name="details"
            placeholder="Project details"
            value={formData.details}
            onChange={handleChange}
            className="bg-zion-blue-dark border-zion-blue-light text-white"
            required
          />
          <DialogFooter>
            <Button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white">
              {isSubmitting ? 'Submitting...' : 'Submit Request'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
