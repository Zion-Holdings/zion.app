import React from 'react';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function MobileFirstSurveyToolPage() {
	return (
		<>
			<ServiceLanding
				title="Mobile-First Survey Tool"
				description="Build conversational, adaptive surveys that feel like chat. Branching logic, rich media, and analytics make feedback engaging and actionable."
				subtitle="Beautiful, adaptive, high-conversion surveys for mobile"
				pricePerMonthUSD={49}
				implementationWeeks="1 week"
				roiNote="Increase completion rates 2–5x vs. traditional forms"
				features={[
					"Chat-style UI with conditional logic",
					"Embed images, video, and file uploads",
					"Scoring, NPS, CSAT templates",
					"Webhooks and Zapier/Make integrations",
					"Export to Sheets, CSV, data warehouses",
					"Real-time dashboards and cohorts"
				]}
				industries={["Product", "Marketing", "CX", "Research"]}
				canonical="https://ziontechgroup.com/mobile-first-survey-tool"
			/>
			<section className="px-6 lg:px-10 pb-16">
				<div className="max-w-5xl mx-auto text-sm text-gray-400">
					Market references: 
					<a className="underline hover:text-cyan-300" href="https://www.typeform.com/pricing/" target="_blank" rel="noreferrer">Typeform</a>, 
					<a className="underline hover:text-cyan-300" href="https://www.surveymonkey.com/pricing/" target="_blank" rel="noreferrer">SurveyMonkey</a>.
				</div>
			</section>
		</>
	);
}