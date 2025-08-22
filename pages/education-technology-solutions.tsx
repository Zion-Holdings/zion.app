import React from 'react';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function EducationTechnologySolutions() {
	return (
		<ServiceLanding
			title="Education Technology Solutions"
			description="Personalized learning, skills assessment, and AI tutoring platforms that increase engagement and outcomes."
			subtitle="From K-12 to workforce upskilling"
			pricePerMonthUSD={2999}
			implementationWeeks="Implementation: 4-8 weeks"
			roiNote="Higher completion rates and lower instructional costs"
			features={[
				"Adaptive learning with mastery-based progression",
				"Assessment generation and grading assistance",
				"LLM tutor with curriculum alignment",
				"Analytics for instructors and administrators",
				"Accessibility and safety controls",
				"Integrations: Canvas, Moodle, Google Classroom"
			]}
			industries={["K-12", "Higher Ed", "Workforce"]}
			ctaHref="/contact"
			canonical="https://ziontechgroup.com/education-technology-solutions"
		/>
	);
}