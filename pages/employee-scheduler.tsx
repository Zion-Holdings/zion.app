import React from 'react';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function EmployeeSchedulerPage() {
	return (
		<>
			<ServiceLanding
				title="Employee Scheduling Software"
				description="Build conflict‑free schedules, track availability, and manage swaps and time off with alerts and payroll exports."
				subtitle="Scheduling that respects your team"
				pricePerMonthUSD={35}
				implementationWeeks="1 week"
				roiNote="Cut scheduling time and reduce no‑shows"
				features={[
					"Shift templates and rules",
					"Availability, swaps, and PTO",
					"No‑show alerts and reminders",
					"Timesheets and payroll exports",
					"Multi‑location support",
					"Manager approvals and roles"
				]}
				industries={["Retail", "Hospitality", "Healthcare"]}
				canonical="https://ziontechgroup.com/employee-scheduler"
			/>
			<section className="px-6 lg:px-10 pb-16">
				<div className="max-w-5xl mx-auto text-sm text-gray-400">
					Market references: 
					<a className="underline hover:text-cyan-300" href="https://www.deputy.com/pricing" target="_blank" rel="noreferrer">Deputy</a>, 
					<a className="underline hover:text-cyan-300" href="https://www.hotschedules.com/" target="_blank" rel="noreferrer">HotSchedules</a>, 
					<a className="underline hover:text-cyan-300" href="https://wheniwork.com/pricing" target="_blank" rel="noreferrer">When I Work</a>.
				</div>
			</section>
		</>
	);
}