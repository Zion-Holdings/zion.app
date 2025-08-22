import React from 'react';
import Head from 'next/head';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function MentalHealthCompanionPage() {
	return (
		<>
			<Head>
				<title>AI Mental Health Companion | Zion Tech Group</title>
				<meta name="description" content="Evidence-based, privacy-first mental health support with escalation handoffs and safety controls." />
				<link rel="canonical" href="https://ziontechgroup.com/ai-mental-health-companion" />
			</Head>
			<ServiceLanding
				title="AI Mental Health Companion"
				description="Evidence-informed mental wellness companion with CBT exercises, journaling, and crisis routing, built with safety and privacy by design."
				subtitle="Accessible support between sessions"
				pricePerMonthUSD={19}
				implementationWeeks="1-2 weeks"
				roiNote="Improve engagement and outcomes while reducing clinician workload"
				features={["CBT and mindfulness exercises","Mood tracking and journaling","Clinician collaboration portal","Crisis detection and hotline routing","PHI minimization and encryption","Mobile-first with offline support"]}
				industries={["Healthcare", "Employers", "Universities"]}
				canonical="https://ziontechgroup.com/ai-mental-health-companion"
			/>
		</>
	);
}

