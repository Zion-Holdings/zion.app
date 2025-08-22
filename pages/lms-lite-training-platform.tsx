import React from 'react';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function LMSLiteTrainingPlatformPage() {
	return (
		<>
			<ServiceLanding
				title="LMS Lite Training Platform"
				description="Organize and track employee training with courses, quizzes, and certificates. Lightweight, simple LMS for fast rollout."
				subtitle="Train teams without the enterprise LMS headache"
				pricePerMonthUSD={49}
				implementationWeeks="1-2 weeks"
				roiNote="Standardize onboarding and compliance quickly"
				features={[
					"Course builder with video/docs",
					"Quizzes and pass thresholds",
					"Certificates and expirations",
					"Assignments and due dates",
					"Learner groups and roles",
					"Reports and CSV exports"
				]}
				industries={["HR", "Compliance", "Enablement"]}
				canonical="https://ziontechgroup.com/lms-lite-training-platform"
			/>
			<section className="px-6 lg:px-10 pb-16">
				<div className="max-w-5xl mx-auto text-sm text-gray-400">
					Market references: 
					<a className="underline hover:text-cyan-300" href="https://www.learnworlds.com/pricing/" target="_blank" rel="noreferrer">LearnWorlds</a>, 
					<a className="underline hover:text-cyan-300" href="https://teachable.com/pricing" target="_blank" rel="noreferrer">Teachable</a>, 
					<a className="underline hover:text-cyan-300" href="https://www.talentlms.com/pricing" target="_blank" rel="noreferrer">TalentLMS</a>.
				</div>
			</section>
		</>
	);
}