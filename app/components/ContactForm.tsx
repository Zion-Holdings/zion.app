// app/components/ContactForm.tsx
// Static-export compatible contact form — uses mailto: as fallback (no backend needed)
'use client';

import { useState } from 'react';

const TARGET_EMAIL = 'kleber@ziontechgroup.com';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const buildMailtoLink = () => {
    const name = (document.getElementById('name') as HTMLInputElement)?.value || '';
    const email = (document.getElementById('email') as HTMLInputElement)?.value || '';
    const company = (document.getElementById('company') as HTMLInputElement)?.value || '';
    const phone = (document.getElementById('phone') as HTMLInputElement)?.value || '';
    const service = (document.getElementById('service') as HTMLSelectElement)?.value || '';
    const message = (document.getElementById('message') as HTMLTextAreaElement)?.value || '';

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company}`,
      `Phone: ${phone}`,
      `Service: ${service}`,
      ``,
      `Message:`,
      message,
    ].join('\n');

    const subject = encodeURIComponent(
      service && service !== 'general'
        ? `Contact: ${service.replace(/-/g, ' ')}`
        : 'Contact from Zion Tech Group website'
    );
    const encodedBody = encodeURIComponent(body);
    window.location.href = `mailto:${TARGET_EMAIL}?subject=${subject}&body=${encodedBody}`;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    // Validate required fields
    const required = ['name', 'email', 'company', 'message'];
    for (const id of required) {
      const el = form.querySelector(`#${id}`) as HTMLInputElement;
      if (!el || !el.value.trim()) {
        el?.focus();
        return;
      }
    }
    setSubmitted(true);
    buildMailtoLink();
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="text-green-400 text-5xl mb-4">✓</div>
        <h3 className="text-xl font-semibold text-white mb-2">Thank You!</h3>
        <p className="text-slate-300">
          Your email client should open shortly. If it doesn&apos;t,
          please email <a href={`mailto:${TARGET_EMAIL}`} className="text-purple-400">{TARGET_EMAIL}</a>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="you@company.com"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-2">
            Company *
          </label>
          <input
            type="text"
            id="company"
            name="company"
            required
            className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Your company"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="+1 (302) 464-0950"
          />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="service" className="block text-sm font-medium text-slate-300 mb-2">
            Service Interest
          </label>
          <select
            id="service"
            name="service"
            className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="general">General Inquiry</option>
            <option value="ai-services">AI Services</option>
            <option value="it-consulting">IT Consulting</option>
            <option value="cloud-migration">Cloud Migration</option>
            <option value="automation">Automation</option>
          </select>
        </div>
        <div className="md:col-span-2">
          <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Tell us about your project..."
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full btn-primary py-3 text-lg"
      >
        Send Message →
      </button>
    </form>
  );
}
