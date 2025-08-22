import React from 'react';
import SEO from '../components/SEO';
import Link from 'next/link';

export default function ContactPage() {
	const pageTitle = 'Contact Zion Tech Group';
	const pageDescription = 'Get in touch to discuss AI, quantum, or micro SAAS solutions tailored to your needs.';
	return (
		<>
			<SEO title={pageTitle} description={pageDescription} canonical="/contact" />
			<section className="relative pt-28 pb-16 md:pt-36 md:pb-24">
				<div className="container mx-auto px-4 max-w-3xl">
					<h1 className="text-4xl md:text-5xl font-extrabold tracking-tight gradient-text-cyan-purple">{pageTitle}</h1>
					<p className="mt-4 text-lg text-gray-300">{pageDescription}</p>

					<form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" className="mt-10 space-y-6 bg-white/5 p-6 rounded-lg">
						<input type="hidden" name="form-name" value="contact" />
						<p className="hidden">
							<label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
						</p>
						<div>
							<label htmlFor="name" className="block text-sm font-medium">Name</label>
							<input id="name" name="name" required className="mt-2 w-full rounded-md bg-black/40 border border-white/20 px-4 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300" />
						</div>
						<div>
							<label htmlFor="email" className="block text-sm font-medium">Email</label>
							<input id="email" name="email" type="email" required className="mt-2 w-full rounded-md bg-black/40 border border-white/20 px-4 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300" />
						</div>
						<div>
							<label htmlFor="message" className="block text-sm font-medium">Message</label>
							<textarea id="message" name="message" rows={5} required className="mt-2 w-full rounded-md bg-black/40 border border-white/20 px-4 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300" />
						</div>
						<div className="flex items-center gap-4">
							<button type="submit" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-white text-black font-semibold hover:bg-gray-200 transition-colors">Send Message</button>
							<Link href="/" className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-white/30 text-white font-semibold hover:bg-white/10 transition-colors">Back Home</Link>
						</div>
					</form>
				</div>
			</section>
		</>
	);
}