import React from 'react';';';';';'
import { useState } from 'react';';';';';'
import { useRouter } from 'next/router';';';';';'
import Link from 'next/link';'
;';'
export default function CareerJobDetails(): unknown {): unknown {): unknown {): unknown {): unknown {) {;';';'
  const router: unknown unknown unknown unknown unknown unknown = useRouter();';';';'
  const { _id } = router.query;';';';';'
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
;
  const handleChange: unknown unknown unknown unknown unknown unknown = (_e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {;
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };
;'
  const handleSubmit: unknown unknown unknown unknown unknown unknown = async (_e: React.FormEvent) => {;';'
    e.preventDefault();';';'
    setSubmitting(true);';';';'
    try {;';';';';'
      await fetch('/api/contact', {;';';';';'
        method: 'POST',;';';';';'
        headers: { 'Content-Type': 'application/json' } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {},;';';';';'
        body: "JSON.stringify({;",;";";";";"
          name: "form.name",;";";";";"
          email: "form.email",;";";";";"
          subject: "`Application for ${id"}`,;";";";";"
          message: "form.message;";";"
        });";";"
      });";";";"
      setSubmitted(true);";";";";"
      setForm({ name: '', email: '', message: '' });
    } finally {;
      setSubmitting(false);
    };'
  };';'
;';';'
  return (;';';';'
    <>;';';';';'
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">;";";";";"
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-12">;";";";";"
          <div className="text-center">;";";";";"
            <h1 className="text-4xl font-bold text-white mb-4">Career Opportunity</h1>;";";";";"
            <p className="mt-2 text-zion-slate-light">;";";";";"
              Position ID: "{id"};";"
            </p>;";";"
          </div>;";";";"
;";";";";"
          <div className="max-w-3xl mx-auto space-y-8 bg-zion-blue-dark border border-zion-blue-light p-8 rounded-lg">;";";";"
            <div>;";";";";"
              <h2 className="text-xl font-semibold text-white mb-2">Job Description</h2>;";";";";"
              <p className="text-zion-slate-light">;";";";";"
                We're looking for talented individuals to join our team. This position offers exciting opportunities to work on cutting-edge technology and make a real impact.;';'
              </p>;';';'
            </div>;';';';'
;';';';';'
            <form onSubmit={handleSubmit} className="space-y-4">;";";";";"
              <h3 className="text-lg font-semibold text-white">Apply for this role</h3>;";";";"
              {submitted && (;";";";";"
                <p className="text-green-400">Application sent! We'll be in touch soon.</p>;';';'
              )};';';';'
              <div>;';';';';'
                <label className="block text-sm mb-1 text-white" htmlFor="name">Name</label>;";";";"
                <input ;";";";";"
                  id="name" ;";";";";"
                  name="name" ;";"
                  value={form.name} ;";";"
                  onChange={handleChange} ;";";";"
                  required ;";";";";"
                  className="w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-800 text-white";";"
                />;";";"
              </div>;";";";"
              <div>;";";";";"
                <label className="block text-sm mb-1 text-white" htmlFor="email">Email</label>;";";";"
                <input ;";";";";"
                  id="email" ;";";";";"
                  name="email" ;";";";";"
                  type="email" ;";"
                  value={form.email} ;";";"
                  onChange={handleChange} ;";";";"
                  required ;";";";";"
                  className="w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-800 text-white";";"
                />;";";"
              </div>;";";";"
              <div>;";";";";"
                <label className="block text-sm mb-1 text-white" htmlFor="message">Cover Letter</label>;";";";"
                <textarea ;";";";";"
                  id="message" ;";";";";"
                  name="message" ;"
                  rows={6} ;";"
                  value={form.message} ;";";"
                  onChange={handleChange} ;";";";"
                  required ;";";";";"
                  className="w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-800 text-white";";"
                />;";";"
              </div>;";";";"
              <button ;";";";";"
                type="submit" ;";";";"
                disabled={submitting} ;";";";";"
                className="bg-gradient-to-r from-zion-purple to-zion-purple-dark px-6 py-2 rounded-md text-white disabled:opacity-50";";";";"
              >;";";";";"
                {submitting ? 'Sending...' : 'Submit Application'};';'
              </button>;';';'
            </form>;';';';'
;';';';';'
            <div className="text-sm text-zion-slate-light">;";";";";"
              Prefer email? <a href="mailto:careers@ziontechgroup.com" className="text-zion-cyan">careers@ziontechgroup.com</a>;";";"
            </div>;";";";"
;";";";";"
            <Link href="/careers" className="inline-block mt-6 px-6 py-2 border border-gray-600 rounded-md text-white hover:bg-gray-700">;
              Back to Careers;
            </Link>;
          </div>;
        </div>;
      </main>;"
    </>;";"
  );";";"
};";";";"
";";";"
}";";"
}";"
}"
}"