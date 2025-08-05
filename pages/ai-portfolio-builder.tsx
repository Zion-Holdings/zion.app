import { useState } from 'react';
import ModernLayout from '../components/layout/ModernLayout'

import Head from 'next/head';
import { sanitizeHtml } from '../utils/sanitizeHtml';

interface PortfolioInput {
  name: string;
  title: string;
  bio: string;
  skills: string;
  experience: string;
  projects: string;
  testimonials: string;
  contact: string;
  image?: string;
}

const defaultInput: PortfolioInput = {
  name: '',
  title: '',
  bio: '',
  skills: '',
  experience: '',
  projects: '',
  testimonials: '',
  contact: '',
  image: '',
};

const PortfolioBuilder = () => {
  const [input, setInput] = useState<PortfolioInput>(defaultInput);
  const [portfolio, setPortfolio] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setPortfolio('');
    try {
      const res = await fetch('/api/ai-portfolio', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(input),
      });
      if (!res.ok) throw new Error('Failed to generate portfolio');
      const data = await res.json();
      // Sanitize the HTML before setting it
      setPortfolio(sanitizeHtml(data.portfolio));
    } catch (err: any) {
      setError(err.message || 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <>
      <Head>
        <title>AI Portfolio Builder | Zion</title>
        <meta name="description" content="Create a professional portfolio with AI. Input your skills, experience, and projects, and let AI generate a stunning portfolio for you." />
      
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" /></Head>
      <div className="relative z-10 container-responsive py-8 container-responsive">
        
        {/* Background Effects */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90"></div>
          <div className="absolute inset-0 bg-holographic bg-[length 400%_400%] animate-holographic-shift opacity-10"></div>
        </div>
      
        <div className="max-w-3xl mx-auto bg-white/10 rounded-2xl shadow-xl p-8 backdrop-blur-md">
          <h1 className="text-3xl font-bold text-white mb-6 text-center text-responsive-lg">AI-powered Portfolio Builder</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input name="name" value={input.name} onChange={handleChange} placeholder="Your Name" className="w-full px-4 py-4 rounded bg-white/20 text-white text-responsive-lg" required />
            <input name="title" value={input.title} onChange={handleChange} placeholder="Professional Title" className="w-full px-4 py-4 rounded bg-white/20 text-white text-responsive-lg" required />
            <textarea name="bio" value={input.bio} onChange={handleChange} placeholder="Short Bio" className="w-full px-4 py-4 rounded bg-white/20 text-white text-responsive-lg" rows={2} required />
            <textarea name="skills" value={input.skills} onChange={handleChange} placeholder="Skills (comma separated)" className="w-full px-4 py-4 rounded bg-white/20 text-white text-responsive-lg" rows={2} required />
            <textarea name="experience" value={input.experience} onChange={handleChange} placeholder="Experience (roles, companies, years)" className="w-full px-4 py-4 rounded bg-white/20 text-white text-responsive-lg" rows={2} required />
            <textarea name="projects" value={input.projects} onChange={handleChange} placeholder="Projects (titles, descriptions, links)" className="w-full px-4 py-4 rounded bg-white/20 text-white text-responsive-lg" rows={2} required />
            <textarea name="testimonials" value={input.testimonials} onChange={handleChange} placeholder="Testimonials (optional)" className="w-full px-4 py-4 rounded bg-white/20 text-white text-responsive-lg" rows={2} />
            <input name="contact" value={input.contact} onChange={handleChange} placeholder="Contact Info (email, phone, etc.)" className="w-full px-4 py-4 rounded bg-white/20 text-white text-responsive-lg" required />
            <input name="image" value={input.image} onChange={handleChange} placeholder="Profile Image URL (optional)" className="w-full px-4 py-4 rounded bg-white/20 text-white text-responsive-lg" />
            <button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 rounded-lg mt-4 disabled opacity-50 text-responsive-lg" disabled={loading}>{loading ? 'Generating...' : 'Generate Portfolio'}</button>
          </form>
          {error && <div className="text-red-400 mt-4 text-center text-responsive-lg">{error}</div>}
          {portfolio && (
            <div className="mt-8 bg-white/10 rounded-xl p-6 text-white text-responsive-lg">
              <h2 className="text-2xl font-bold mb-4 text-responsive-lg">Your AI-Generated Portfolio</h2>
              <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: portfolio }} />
              <div className="mt-6 flex gap-4">
                <button onClick={() => navigator.clipboard.writeText(portfolio)} className="bg-emerald-600 hover bg-emerald-700 text-white px-4 py-4 rounded text-responsive-lg">Copy HTML</button>
                <a href={`data:text/html,${encodeURIComponent(portfolio)}`} download="portfolio.html" className="bg-blue-600 hover bg-blue-700 text-white px-4 py-4 rounded text-responsive-lg">Download HTML</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  
              </div>
    );
};

export default PortfolioBuilder;