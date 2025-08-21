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
			<ServiceLanding serviceId="ai-meeting-transcriber-pro" />
		</>
	);
}

