import React from 'react';
import Head from 'next/head';

export default function DiversityInclusionPage() {
	return (
		<>
			<Head>
				<title>Diversity & Inclusion | Zion Tech Group</title>
				<link rel="canonical" href="https://ziontechgroup.com/diversity-inclusion" />
			</Head>
			<div className="container mx-auto px-4 py-24 text-white">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">Diversity & Inclusion</h1>
				<p className="text-gray-300 max-w-3xl mb-6">We are committed to an inclusive, equitable workplace where diverse perspectives shape better products and services. We welcome applicants from all backgrounds and experiences.</p>
				<div className="p-6 rounded-xl bg-black/40 border border-gray-700/50">
					<h2 className="text-xl font-semibold mb-2">Statement</h2>
					<p className="text-gray-300">Our hiring, compensation, and promotion practices are structured to reduce bias. We continuously invest in accessibility, mentorship, and psychological safety.</p>
					<p className="text-gray-400 mt-4">Questions? Email <a className="text-cyan-300 underline" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a> or call <a className="text-cyan-300 underline" href="tel:+13024640950">+1 302 464 0950</a>.</p>
				</div>
			</div>
		</>
	);
}