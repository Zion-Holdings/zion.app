import ServiceLanding from '../components/sections/ServiceLanding';

export default function Page() {
  return (
    <ServiceLanding
      title="AI-Powered Decision Engine"
      slug="ai-powered-decision-engine"
      subtitle="Operational decisions with explainable AI and guardrails"
      description="Codify business logic and leverage LLMs with safety guardrails to automate pricing, approvals, and routing decisions with auditable traces."
      features={[ 'Policy engine', 'A/B decision testing', 'Audit trails', 'LLM guardrails' ]}
      typicalBudget="$100–$1,000/month + API usage"
      references={[
        { name: 'OpenAI API pricing', href: 'https://openai.com/api/pricing' },
        { name: 'Anthropic pricing', href: 'https://www.anthropic.com/pricing' }
      ]}
    />
  );
}