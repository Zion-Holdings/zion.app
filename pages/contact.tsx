import React, { useState } from 'react';
import SEO from '../components/SEO';

export default function ContactPage() {
	const [status, setStatus] = useState<'idle' | 'submitting' | 'error'>('idle');

	const pageTitle = 'Contact Zion Tech Group — Talk to Our Team';
	const pageDescription = 'Get in touch with Zion Tech Group for demos, pricing, or partnership inquiries.';

	return (
		<>
			<SEO title={pageTitle} description={pageDescription} canonical="/contact" />
			<section className="relative pt-28 pb-16 md:pt-36 md:pb-24">
				<div className="container mx-auto px-4 max-w-3xl">
					<h1 className="text-3xl md:text-5xl font-extrabold tracking-tight gradient-text-cyan-purple">Contact Us</h1>
					<p className="mt-4 text-gray-300">We typically respond within one business day.</p>

					<form
						name="contact"
						method="POST"
						data-netlify="true"
						data-netlify-honeypot="bot-field"
						action="/thank-you/"
						className="mt-10 grid grid-cols-1 gap-6 p-6 rounded-lg bg-white/5 backdrop-blur animated-border"
						onSubmit={() => setStatus('submitting')}
					>
						<input type="hidden" name="form-name" value="contact" />
						<p className="hidden">
							<label>
								Don’t fill this out: <input name="bot-field" />
							</label>
						</p>

						<div>
							<label htmlFor="name" className="block text-sm font-medium text-gray-200">Full name</label>
							<input
								id="name"
								name="name"
								type="text"
								required
								className="mt-2 w-full rounded-md bg-black/40 border border-white/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
								placeholder="Ada Lovelace"
							/>
						</div>

						<div>
							<label htmlFor="email" className="block text-sm font-medium text-gray-200">Work email</label>
							<input
								id="email"
								name="email"
								type="email"
								required
								className="mt-2 w-full rounded-md bg-black/40 border border-white/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
								placeholder="you@company.com"
							/>
						</div>

						<div>
							<label htmlFor="company" className="block text-sm font-medium text-gray-200">Company</label>
							<input
								id="company"
								name="company"
								type="text"
								className="mt-2 w-full rounded-md bg-black/40 border border-white/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
								placeholder="Zion Tech Group"
							/>
						</div>

						<div>
							<label htmlFor="message" className="block text-sm font-medium text-gray-200">How can we help?</label>
							<textarea
								id="message"
								name="message"
								rows={6}
								required
								className="mt-2 w-full rounded-md bg-black/40 border border-white/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
								placeholder="Tell us about your goals, timelines, and constraints."
							/>
						</div>

						<div className="flex items-center justify-between gap-4">
							<p className="text-xs text-gray-400">By submitting, you agree to our <a href="/privacy/" className="text-cyan-400 underline">Privacy Policy</a>.</p>
							<button
								type="submit"
								disabled={status === 'submitting'}
								className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-white text-black font-semibold hover:bg-gray-200 transition-colors disabled:opacity-60"
							>
								{status === 'submitting' ? 'Sending…' : 'Send message'}
							</button>
						</div>
					</form>
				</div>
			</section>
		</>
	);
}