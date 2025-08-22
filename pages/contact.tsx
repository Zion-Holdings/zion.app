import React from 'react';
import SEO from '../components/SEO';

export default function ContactPage() {
	return (
		<>
			<SEO title="Contact Zion Tech Group" description="Get in touch with Zion Tech Group for services, partnerships, and support." canonical="https://ziontechgroup.com/contact" />
			<section className="relative pt-28 pb-16 md:pt-36 md:pb-24">
				<div className="container mx-auto px-4 max-w-3xl">
					<h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Contact Us</h1>
					<p className="mt-4 text-gray-300">We'd love to hear from you. Send us a message and we'll get back soon.</p>
					<form className="mt-10 grid gap-4" action="mailto:hello@ziontechgroup.com" method="post" encType="text/plain">
						<label className="block">
							<span className="block mb-2">Your Name</span>
							<input type="text" name="name" required className="w-full rounded-md bg-white/5 border border-white/20 px-4 py-2" />
						</label>
						<label className="block">
							<span className="block mb-2">Email</span>
							<input type="email" name="email" required className="w-full rounded-md bg-white/5 border border-white/20 px-4 py-2" />
						</label>
						<label className="block">
							<span className="block mb-2">Message</span>
							<textarea name="message" rows={5} required className="w-full rounded-md bg-white/5 border border-white/20 px-4 py-2" />
						</label>
						<div>
							<button type="submit" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-white text-black font-semibold hover:bg-gray-200 transition-colors">Send</button>
						</div>
					</form>
				</div>
			</section>
		</>
	);
}