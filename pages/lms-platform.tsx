import React from 'react';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function LmsPlatform() {
	return (
		<ServiceLanding
			title="Learning Management System (LMS)"
			description="Modern LMS to onboard, train, assess, and certify teams with adaptive learning paths and rich analytics."
			subtitle="Accelerate learning outcomes"
			pricePerMonthUSD={149}
			implementationWeeks="1-3 weeks"
			roiNote="Cut ramp-up time by 30–50% and improve compliance rates"
			features={[
				"Course builder with templates and SCORM support",
				"Adaptive learning paths and skill matrices",
				"Quizzes, assignments, and certifications",
				"Video, docs, and interactive content",
				"SSO and HRIS/CRM integrations",
				"Learner analytics and progress dashboards",
				"Mobile-first experience",
				"Gamification and microlearning"
			]}
			industries={["Enterprises", "SMBs", "Healthcare", "Financial Services", "Education"]}
			canonical="https://ziontechgroup.com/lms-platform"
		/>
	);
}