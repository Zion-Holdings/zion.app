export const metadata = {
  title: "AI Voice Agents and Conversational Automation for Support and Sales | Zion Tech Group",
  description: "Deploying voice-first AI agents for support, qualification, scheduling, and follow-up without losing human escalation paths.",
  alternates: { canonical: "/ai-voice-agents-conversational-automation/" },
};

export default function Page() {
  return (
    <article className="container-page py-20">
      <h1 className="text-4xl font-bold mb-4 text-white">AI Voice Agents and Conversational Automation for Support and Sales</h1>
      <div className="text-sm text-slate-500 mb-8">Published: 2026-07-06</div>
      <div
        className="prose prose-invert max-w-none text-slate-300 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: `
<p>AI voice agents reduce handle time and enable always-on coverage for inbound support and outbound qualification. Strong deployments keep human handoff explicit and fast.</p>
<h3>Use cases that work</h3>
<ul>
<li>Support triage and routing by intent</li>
<li>Scheduling confirmation and rescheduling</li>
<li>Order status and account verification</li>
<li>Lead qualification before human follow-up</li>
</ul>
<p><a href="/contact">Talk to Zion about voice automation</a></p>
` }
      />
    </article>
  );
}
