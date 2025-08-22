import React from 'react';
import Head from 'next/head';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function MeetingTranscriberPage() {
	return (
		<>
			<Head>
				<title>AI Meeting Transcriber Pro | Zion Tech Group</title>
				<meta name="description" content="Accurate meeting transcription, action items, and CRM sync. Simple pricing and fast onboarding." />
				<link rel="canonical" href="https://ziontechgroup.com/ai-meeting-transcriber-pro" />
			</Head>
			<ServiceLanding
				title="AI Meeting Transcriber Pro"
				description="Real-time multi-speaker transcription, summaries, action items, and CRM sync across Zoom, Meet, and Teams."
				subtitle="Capture every insight and never miss a follow-up"
				pricePerMonthUSD={49}
				implementationWeeks="Same-day onboarding"
				roiNote="Save 4–6 hours per rep per week"
				features={["Multi-speaker diarization","Action items with owners and due dates","Topic detection and highlights","Auto-sync to CRM and project tools","Meeting QA and next-step generation","Secure storage and PII redaction"]}
				industries={["Sales", "Customer Success", "Product", "Operations"]}
				canonical="https://ziontechgroup.com/ai-meeting-transcriber-pro"
			/>
		</>
	);
}

