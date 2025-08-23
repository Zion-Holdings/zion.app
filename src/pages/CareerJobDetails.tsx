import { useState } from 'react';
import { useRouter } from 'next/router';
import { SEO } from '@/components/SEO';
import { GradientHeading } from '@/components/GradientHeading';
import { Button } from '@/components/ui/button';
import { LoadingSpinner } from '@/components/ui/enhanced-loading-states';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Link from 'next/link';
import { CAREER_JOBS, findCareerJob, CareerJob } from '@/data/careersJobs';

export default function CareerJobDetails() {
  const router = useRouter();
  const { id } = router.query;
  const job = findCareerJob(id);
  const applyEmail = 'careers@ziontechgroup.com';

  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!job) return;
    setSubmitting(true);
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: `Application for ${job.title}`,
          message: form.message
        })
      });
      setSubmitted(true);
      setForm({ name: '', email: '', message: '' });
    } finally {
      setSubmitting(false);
    }
  };

  if (!job) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-lg">Job not found.</p>
      </main>
    );
  }

  return (
    <>
      <SEO title={`${job.title} | Careers`} description={job.description} />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center">
            <GradientHeading>{job.title}</GradientHeading>
            <p className="mt-2 text-zion-slate-light">
              {job.location} • {job.type} • {job.department}
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-8 bg-zion-blue-dark border border-zion-blue-light p-8 rounded-lg">
            <div>
              <h2 className="text-xl font-semibold text-white mb-2">Job Description</h2>
              <p className="text-zion-slate-light whitespace-pre-line">{job.description}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Apply for this role</h3>
              {submitted && (
                <p className="text-green-400">Application sent! We'll be in touch soon.</p>
              )}
              <div>
                <label className="block text-sm mb-1" htmlFor="name">Name</label>
                <Input id="name" name="name" value={form.name} onChange={handleChange} required />
              </div>
              <div>
                <label className="block text-sm mb-1" htmlFor="email">Email</label>
                <Input id="email" name="email" type="email" value={form.email} onChange={handleChange} required />
              </div>
              <div>
                <label className="block text-sm mb-1" htmlFor="message">Cover Letter</label>
                <Textarea id="message" name="message" rows={6} value={form.message} onChange={handleChange} required />
              </div>
              <Button type="submit" disabled={submitting} className="bg-gradient-to-r from-zion-purple to-zion-purple-dark">
                {submitting ? (
                  <>
                    <LoadingSpinner size="sm" className="mr-2" />
                    Sending...
                  </>
                ) : (
                  'Submit Application'
                )}
              </Button>
            </form>

            <div className="text-sm text-zion-slate-light">
              Prefer email? <a href={`mailto:${applyEmail}?subject=${encodeURIComponent(`Application for ${job.title}`)}`} className="text-zion-cyan">{applyEmail}</a>
            </div>

            <Button asChild variant="outline" className="mt-6">
              <Link href="/careers">Back to Careers</Link>
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}
