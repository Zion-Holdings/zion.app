import React from 'react';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function HospitalAppointmentSchedulerPage() {
	return (
		<>
			<ServiceLanding
				title="Hospital Appointment Scheduler"
				description="Manage in‑person and telehealth appointments with patient portals, reminders, eligibility checks, and EMR integrations."
				subtitle="Fewer no‑shows, smoother operations"
				pricePerMonthUSD={149}
				implementationWeeks="3-6 weeks"
				roiNote="Reduce no‑shows and improve provider utilization"
				features={[
					"Self‑service portal and triage",
					"SMS/Email reminders and confirmations",
					"Insurance eligibility checks",
					"Provider calendars and telehealth links",
					"EMR/EHR integrations",
					"Analytics: wait time, cancellations, and throughput"
				]}
				industries={["Healthcare"]}
				canonical="https://ziontechgroup.com/hospital-appointment-scheduler"
			/>
			<section className="px-6 lg:px-10 pb-16">
				<div className="max-w-5xl mx-auto text-sm text-gray-400">
					Market references: 
					<a className="underline hover:text-cyan-300" href="https://www.zydoc.com/medical-appointment-scheduling-software/" target="_blank" rel="noreferrer">ZyDoc</a>, 
					<a className="underline hover:text-cyan-300" href="https://www.nextgen.com/products/scheduling" target="_blank" rel="noreferrer">NextGen</a>, 
					<a className="underline hover:text-cyan-300" href="https://www.zocdoc.com/solutions/providers" target="_blank" rel="noreferrer">Zocdoc</a>.
				</div>
			</section>
		</>
	);
}