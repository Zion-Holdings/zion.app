import NextHead from 'next/head';

export default function CareersPage() {
	return (
		<div className="min-h-screen bg-gray-900 pt-20 px-4 sm:px-6 lg:px-8">
			<NextHead>
				<title>Careers at Zion Tech Group</title>
				<meta name="description" content="Join Zion Tech Group to build revolutionary AI, quantum, and IT solutions." />
				<link rel="canonical" href="https://ziontechgroup.com/careers" />
			</NextHead>
			<div className="max-w-5xl mx-auto">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">Careers</h1>
				<p className="text-gray-300 text-lg mb-8">We are growing across AI, security, platform engineering, and design. Send your resume to <a className="text-cyan-400 underline" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a>.</p>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div className="bg-gray-900/60 border border-gray-700 rounded-2xl p-6">
						<h2 className="text-xl font-semibold text-white mb-2">AI Platform Engineer</h2>
						<p className="text-gray-300 text-sm">Build evals, guardrails, and LLM infra for production workloads.</p>
					</div>
					<div className="bg-gray-900/60 border border-gray-700 rounded-2xl p-6">
						<h2 className="text-xl font-semibold text-white mb-2">Security Engineer (SIEM/MDR)</h2>
						<p className="text-gray-300 text-sm">Create parsers, detections, and playbooks for our MDR offerings.</p>
					</div>
				</div>
			</div>
		</div>
	);
}