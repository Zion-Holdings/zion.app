import ServiceLanding from '../components/sections/ServiceLanding';

export default function Page() {
  return (
    <ServiceLanding
      title="Autonomous IT Operations Center"
      slug="autonomous-it-operations-center"
      subtitle="Self-optimizing IT operations with AI and automation"
      description="Automate incident response, change management, and capacity planning with AI-driven runbooks and anomaly detection across infrastructure and apps."
      features={[ 'Runbook automation', 'Incident summarization', 'Anomaly detection', 'Capacity planning' ]}
      typicalBudget="$1,000–$10,000/month based on footprint"
      references={[
        { name: 'Datadog pricing', href: 'https://www.datadoghq.com/pricing/' },
        { name: 'PagerDuty pricing', href: 'https://www.pagerduty.com/pricing/' }
      ]}
    />
  );
}