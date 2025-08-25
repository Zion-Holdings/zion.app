
import React, { useState } from 'react';

export default function RequestQuote() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    budget: '',
    details: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Quote Request Submitted', form);
    alert('Thanks! We\'ll get back to you within 24 hours.');
    setForm({ name: '', email: '', company: '', phone: '', projectType: '', budget: '', details: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Request a Quote</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tell us about your project and we\'ll send a tailored proposal within 24 hours.
            </p>
          </div>

          {/* Form */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Full Name</label>
                  <input name="name" value={form.name} onChange={handleChange} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-gray-400" placeholder="Jane Doe" />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Email</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-gray-400" placeholder="jane@company.com" />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Company</label>
                  <input name="company" value={form.company} onChange={handleChange} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-gray-400" placeholder="Acme Inc." />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Phone</label>
                  <input name="phone" value={form.phone} onChange={handleChange} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-gray-400" placeholder="+1 555 123 4567" />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Project Type</label>
                  <select name="projectType" value={form.projectType} onChange={handleChange} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white">
                    <option value="">Select...</option>
                    <option value="AI Development">AI Development</option>
                    <option value="Cybersecurity">Cybersecurity</option>
                    <option value="IT Infrastructure">IT Infrastructure</option>
                    <option value="Micro-SaaS">Micro-SaaS</option>
                    <option value="Consulting">Consulting</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Budget</label>
                  <select name="budget" value={form.budget} onChange={handleChange} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white">
                    <option value="">Select...</option>
                    <option value="$5k - $20k">$5k - $20k</option>
                    <option value="$20k - $50k">$20k - $50k</option>
                    <option value="$50k - $100k">$50k - $100k</option>
                    <option value="$100k+">$100k+</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-300 mb-2">Project Details</label>
                <textarea name="details" rows={5} value={form.details} onChange={handleChange} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-gray-400" placeholder="Tell us about your goals, timeline, and requirements..." />
              </div>
              <div className="text-center">
                <button type="submit" className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold hover:from-cyan-400 hover:to-blue-400 transition-colors">Submit Request</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
