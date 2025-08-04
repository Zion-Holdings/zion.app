import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Spanish' },
  { code: 'fr', name: 'French' },
  { code: 'de', name: 'German' },
  { code: 'zh', name: 'Chinese' },
  { code: 'ja', name: 'Japanese' },
  { code: 'ar', name: 'Arabic' },
  { code: 'hi', name: 'Hindi' },
  { code: 'pt', name: 'Portuguese' },
  { code: 'ru', name: 'Russian' },
];

export default function ContributeTranslations() {
  const [form, setForm] = useState({ language: '', key: '', translation: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, send to backend or API
  };

  return (
    <>
      <Head>
        <title>Contribute Translations - Zion Marketplace</title>
        <meta name="description" content="Help translate Zion Marketplace and make it accessible to everyone." />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white flex flex-col items-center justify-center py-16 px-4">
        <div className="max-w-xl w-full bg-black/30 rounded-xl shadow-lg p-8 border border-white/10">
          <h1 className="text-3xl font-bold mb-4 text-center bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">Contribute Translations</h1>
          <p className="text-gray-300 mb-8 text-center">Join our global community and help make Zion Marketplace accessible in more languages. Submit your translation for any key below!</p>
          {submitted ? (
            <div className="bg-green-600/20 text-green-300 rounded-lg p-4 text-center font-semibold mb-4">Thank you for your contribution! Our team will review your translation.</div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="language" className="block text-sm font-medium mb-1">Language</label>
                <select
                  id="language"
                  name="language"
                  value={form.language}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-black/20 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                >
                  <option value="">Select a language</option>
                  {languages.map((lang) => (
                    <option key={lang.code} value={lang.code}>{lang.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="key" className="block text-sm font-medium mb-1">Translation Key</label>
                <input
                  id="key"
                  name="key"
                  type="text"
                  value={form.key}
                  onChange={handleChange}
                  placeholder="e.g. welcome, marketplace, services"
                  className="w-full px-4 py-2 rounded-lg bg-black/20 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="translation" className="block text-sm font-medium mb-1">Translation</label>
                <input
                  id="translation"
                  name="translation"
                  type="text"
                  value={form.translation}
                  onChange={handleChange}
                  placeholder="Enter your translation here"
                  className="w-full px-4 py-2 rounded-lg bg-black/20 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <button type="submit" className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 font-semibold text-lg shadow-lg hover:from-pink-500 hover:to-purple-500 transition">Submit Translation</button>
            </form>
          )}
          <div className="mt-8 text-center">
            <Link href="/multi-language" className="text-purple-300 hover:underline">Back to Multi-Language Page</Link>
          </div>
        </div>
      </div>
    </>
  );
}