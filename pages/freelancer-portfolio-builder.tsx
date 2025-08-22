import React from 'react';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function FreelancerPortfolioBuilderPage() {
	return (
		<>
			<ServiceLanding
				title="Freelancer Portfolio Builder"
				description="Launch a professional, industry‑specific portfolio with templates, case study blocks, and lead capture—no code required."
				subtitle="Look senior. Land better clients."
				pricePerMonthUSD={9}
				implementationWeeks="Same day"
				roiNote="Publish in minutes and start converting leads"
				features={[
					"Designer templates by industry",
					"Case study and testimonial blocks",
					"Contact forms and calendaring",
					"SEO basics and OpenGraph images",
					"Analytics and custom domains",
					"Export anywhere"
				]}
				industries={["Design", "Engineering", "Marketing", "No‑Code Makers"]}
				canonical="https://ziontechgroup.com/freelancer-portfolio-builder"
			/>
			<section className="px-6 lg:px-10 pb-16">
				<div className="max-w-5xl mx-auto text-sm text-gray-400">
					Market references: 
					<a className="underline hover:text-cyan-300" href="https://webflow.com/pricing" target="_blank" rel="noreferrer">Webflow</a>, 
					<a className="underline hover:text-cyan-300" href="https://carrd.co/pro" target="_blank" rel="noreferrer">Carrd Pro</a>, 
					<a className="underline hover:text-cyan-300" href="https://www.framer.com/pricing/" target="_blank" rel="noreferrer">Framer</a>.
				</div>
			</section>
		</>
	);
}