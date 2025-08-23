import React from 'react';
import Head from 'next/head';

export default function EducationTechnologySolutionsPage() {
	return (
		<div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 text-white">
			<Head>
				<title>Education Technology Solutions | Zion Tech Group</title>
				<meta name="description" content="Personalized learning, skill assessment, and AI education platforms." />
				<link rel="canonical" href="https://ziontechgroup.com/education-technology-solutions" />
			</Head>
			<div className="max-w-5xl mx-auto space-y-6">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Education Technology Solutions</h1>
				<ul className="list-disc list-inside text-slate-300 space-y-1">
					<li>Adaptive learning and tutoring</li>
					<li>Skill assessment and certification</li>
					<li>Content generation and grading assistance</li>
					<li>Student success and retention analytics</li>
				</ul>
			</div>
		</div>
	);
}