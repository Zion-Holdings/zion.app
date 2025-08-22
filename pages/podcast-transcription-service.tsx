import React from 'react';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function PodcastTranscriptionServicePage() {
	return (
		<>
			<ServiceLanding
				title="Podcast Transcription Service"
				description="Fast, accurate AI‑powered transcriptions with speaker diarization, timestamps, and editing—publish transcripts, show notes, and SEO‑ready content."
				subtitle="Accessible transcripts and repurposed content in minutes"
				pricePerMonthUSD={29}
				implementationWeeks="Same day"
				roiNote="Improve accessibility and SEO while saving editing time"
				features={[
					"Speaker diarization and timestamps",
					"Filler removal and text cleanup",
					"Summaries, highlights, and quotes",
					"Export to docs and CMS",
					"Multi‑language support",
					"Batch uploads and API"
				]}
				industries={["Podcasters", "Media", "Education"]}
				canonical="https://ziontechgroup.com/podcast-transcription-service"
			/>
			<section className="px-6 lg:px-10 pb-16">
				<div className="max-w-5xl mx-auto text-sm text-gray-400">
					Market references: 
					<a className="underline hover:text-cyan-300" href="https://www.descript.com/pricing" target="_blank" rel="noreferrer">Descript</a>, 
					<a className="underline hover:text-cyan-300" href="https://www.rev.com/" target="_blank" rel="noreferrer">Rev</a>, 
					<a className="underline hover:text-cyan-300" href="https://riverside.fm/pricing" target="_blank" rel="noreferrer">Riverside</a>.
				</div>
			</section>
		</>
	);
}