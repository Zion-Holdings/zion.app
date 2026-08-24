import type { Metadata } from 'next';
import SiteBreadcrumbs from '@/components/SiteBreadcrumbs';
import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import HermesAdvertBanner from '@/components/HermesAdvertBanner';

export const metadata: Metadata = {
  title: 'Hermes Agent Cron Automation with Telegram: The Complete Guide',
  description:
    'How to set up Hermes cron jobs with Telegram delivery. Schedule autonomous agents, monitor results, and handle failures with the no_agent + monitor_script pattern.',
  keywords: [
    'Hermes Agent cron',
    'cron automation',
    'Telegram bots',
    'scheduled tasks',
    'no_agent mode',
    'monitor_script',
    'autonomous agents',
    'Nous Research',
  ],
  openGraph: {
    title: 'Hermes Agent Cron Automation with Telegram: The Complete Guide',
    description: 'Set up Hermes cron jobs with Telegram delivery. Autonomous agents on a schedule.',
    url: 'https://ziontechgroup.com/blog/hermes-agent-cron-automation-telegram/',
    type: 'article',
    siteName: 'Zion Tech Group',
  },
  alternates: { canonical: '/blog/hermes-agent-cron-automation-telegram/' },
};

const CRON_PATTERNS = [
  {
    pattern: '30m',
    description: 'Every 30 minutes',
    example: 'Monitor site health every half hour',
  },
  {
    pattern: 'every 2h',
    description: 'Every 2 hours',
    example: 'Run growth engine for new services',
  },
  {
    pattern: '0 9 * * *',
    description: 'Daily at 9 AM',
    example: 'Send daily metrics report to Telegram',
  },
  {
    pattern: 'every monday 9am',
    description: 'Every Monday at 9 AM',
    example: 'Weekly SEO content generation',
  },
];

const BOT_FLEET = [
  { name: 'OWL', emoji: '🦉', role: 'Dashboard & Monitoring', tasks: '512', status: 'Active' },
  { name: 'Kilo', emoji: '🧠', role: 'Fleet Orchestration', tasks: '567', status: 'Active' },
  { name: 'Tablet', emoji: '📱', role: 'Content & Research', tasks: '342', status: 'Active' },
  { name: 'Quel', emoji: '🔧', role: 'Frontend Code', tasks: '245', status: 'Active' },
  { name: 'Rocket', emoji: '🚀', role: 'CI/CD', tasks: '209', status: 'Active' },
  { name: 'Carol', emoji: '🖥️', role: 'Infrastructure', tasks: '389', status: 'Active' },
  { name: 'Swell', emoji: '🌊', role: 'Performance & SEO', tasks: '156', status: 'Active' },
  { name: 'Kilo AI', emoji: '🤖', role: 'AI Benchmarking', tasks: '134', status: 'Active' },
  { name: 'Kiloclaw', emoji: '🛡️', role: 'Security', tasks: '98', status: 'Active' },
  { name: 'Cloud', emoji: '☁️', role: 'Cloud Optimization', tasks: '112', status: 'Active' },
];

export default function HermesCronTelegramPost() {
  return (
    <div className="relative min-h-screen bg-slate-950">
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Hermes Agent Cron Automation with Telegram: The Complete Guide',
        description: 'How to set up Hermes cron jobs with Telegram delivery for autonomous agent scheduling.',
        author: { '@type': 'Organization', name: 'Zion Tech Group', url: 'https://ziontechgroup.com' },
        publisher: { '@type': 'Organization', name: 'Zion Tech Group', url: 'https://ziontechgroup.com' },
        datePublished: '2026-08-21T00:00:00Z',
        mainEntityOfPage: 'https://ziontechgroup.com/blog/hermes-agent-cron-automation-telegram/',
      }} />
      <article className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <SiteBreadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Blog', href: '/blog' },
            { label: 'Hermes Agent Cron Automation with Telegram' },
          ]}
          className="mb-8"
        />

        <header className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Hermes Agent Cron Automation
          </h1>
          <p className="mt-4 text-lg text-slate-300">
            How to schedule autonomous Hermes agents as cron jobs, deliver results to Telegram,
            and handle failures with production-grade patterns. The complete guide — including
            the no_agent + monitor_script pattern that prevents 90-second timeouts.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-slate-400">
            <span>By Zion Tech Group</span>
            <span>·</span>
            <span>August 21, 2026</span>
            <span>·</span>
            <span>12 min read</span>
          </div>
        </header>

        <div className="prose prose-invert prose-slate max-w-none">
          <p className="text-slate-300 leading-relaxed">
            Hermes Agent's cron system turns any prompt — or any script — into a scheduled,
            autonomous worker. At Zion Tech Group, our 10-agent fleet runs on cron jobs that
            deliver results to Telegram every 30 minutes, every 2 hours, and daily. This post
            covers everything you need to know to set up production-grade cron automation.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Getting Started: Create Your First Cron Job</h2>
          <p className="text-slate-300 leading-relaxed">
            Schedule a recurring task in one command:
          </p>
          <pre className="bg-slate-900 rounded-lg p-4 text-sm font-mono my-4 overflow-x-auto">
            <code className="text-slate-200">
{`# Run every 30 minutes, deliver results to Telegram
hermes cron create "every 2h" "
  Monitor site health:
  1. Run health checks on all service pages
  2. Report any 404s or 500s
  3. Send summary to Telegram
"

# With specific skills and model override
hermes cron create "30m" \
  -s site-quality-autopilot \
  -s hermes-agent \
  "Run site quality autopilot scan" \
  --deliver "telegram:CHAT_ID" \
  --workdir /path/to/project

# One-shot ISO timestamp job
hermes cron create "2026-08-21T09:00:00" "Send quarterly report"`}
            </code>
          </pre>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Cron Schedule Formats</h2>
          <p className="text-slate-300 leading-relaxed">Hermes supports multiple schedule formats:</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-800 rounded-xl overflow-hidden my-6">
              <thead className="bg-slate-900/80">
                <tr>
                  <th className="text-left p-4 text-slate-300 font-medium">Format</th>
                  <th className="text-left p-4 text-slate-300 font-medium">Example</th>
                  <th className="text-left p-4 text-slate-300 font-medium">Use Case</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {CRON_PATTERNS.map((p) => (
                  <tr key={p.pattern}>
                    <td className="p-4 text-purple-300 font-medium">{p.pattern}</td>
                    <td className="p-4 text-slate-300">{p.description}</td>
                    <td className="p-4 text-slate-300">{p.example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Telegram Delivery</h2>
          <p className="text-slate-300 leading-relaxed">
            The cron job's final response is automatically delivered to your configured destination.
            The system handles delivery — do not use <code>send_message</code> tools in cron jobs.
          </p>
          <pre className="bg-slate-900 rounded-lg p-4 text-sm font-mono my-4 overflow-x-auto">
            <code className="text-slate-200">
{`# Deliver to a specific Telegram chat
hermes cron create "every 2h" "Your prompt" --deliver "telegram:8435383377"

# Deliver to your home channel
hermes cron create "30m" "Your prompt" --deliver "origin"

# Deliver to all connected channels
hermes cron create "0 9 * * *" "Daily report" --deliver "all"

# Fan out to multiple channels
hermes cron create "every monday 9am" "Weekly summary" --deliver "origin,telegram:CHAT_ID,local"`}
            </code>
          </pre>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">The no_agent + monitor_script Pattern</h2>
          <p className="text-slate-300 leading-relaxed">
            One of the most powerful cron patterns we use: combine <code>no_agent=True</code> with
            <code>monitor_script</code>. The monitor script runs first — if its output is unchanged
            from last time, the agent run is <strong>suppressed entirely</strong> (no LLM call, no
            delivery, silent no-op tick). Only when output changes does the agent run fire.
          </p>
          <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-6 my-6">
            <h3 className="text-lg font-semibold text-white mb-2">Why This Matters</h3>
            <ul className="text-slate-300 text-sm space-y-1">
              <li>• Saves tokens — no LLM call when nothing changed</li>
              <li>• Prevents "Agent timed out after 90s" errors</li>
              <li>• Clean alert-only delivery — you only get pinged when something actually changed</li>
              <li>• First tick always runs (baseline); subsequent ticks only fire on change</li>
            </ul>
          </div>
          <pre className="bg-slate-900 rounded-lg p-4 text-sm font-mono my-4 overflow-x-auto">
            <code className="text-slate-200">
{`# Watchdog cron: monitor a script, only alert on change
hermes cron create "5m" \
  --no-agent \
  --script "check_site_health.py" \
  --deliver "telegram:CHAT_ID"

# Monitor-mode cron: script hashes output, agent runs only on change
hermes cron create "30m" \
  --monitor-script "check_deploy_status.py" \
  "Analyze new deployments and report anomalies" \
  --deliver "telegram:CHAT_ID"`}
            </code>
          </pre>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Our Production Cron Fleet</h2>
          <p className="text-slate-300 leading-relaxed">
            At Zion Tech Group, our 10-agent fleet runs on a carefully orchestrated cron schedule:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-800 rounded-xl overflow-hidden my-6">
              <thead className="bg-slate-900/80">
                <tr>
                  <th className="text-left p-4 text-slate-300 font-medium">Agent</th>
                  <th className="text-left p-4 text-slate-300 font-medium">Role</th>
                  <th className="text-center p-4 text-slate-300 font-medium">Tasks</th>
                  <th className="text-center p-4 text-slate-300 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {BOT_FLEET.map((bot) => (
                  <tr key={bot.name}>
                    <td className="p-4 text-purple-300 font-medium">{bot.emoji} {bot.name}</td>
                    <td className="p-4 text-slate-300">{bot.role}</td>
                    <td className="p-4 text-center text-slate-300">{bot.tasks}</td>
                    <td className="p-4 text-center">
                      <span className={`text-xs px-2 py-1 rounded ${
                        bot.status === 'Active'
                          ? 'bg-emerald-500/20 text-emerald-400'
                          : 'bg-slate-500/20 text-slate-400'
                      }`}>
                        {bot.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Common Cron Patterns</h2>

          <h3 className="text-xl font-semibold text-white mt-8 mb-3">Script-Only Watchdog (no_agent=True)</h3>
          <p className="text-slate-300 leading-relaxed">
            The script IS the job — its stdout is delivered verbatim. Silent on empty output.
            Perfect for memory/disk/GPU monitors, threshold alerts, heartbeats.
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-3">Script-then-Agent (monitor_script)</h3>
          <p className="text-slate-300 leading-relaxed">
            Script runs first as change detection. If output changed, injects a "MONITOR CHANGE DETECTED"
            block into the agent prompt. The agent then reasons about the change and takes action.
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-3">Chained Jobs (context_from)</h3>
          <p className="text-slate-300 leading-relaxed">
            Job B consumes Job A's output as context. Ideal for collect → process → deliver pipelines:
          </p>
          <pre className="bg-slate-900 rounded-lg p-4 text-sm font-mono my-4 overflow-x-auto">
            <code className="text-slate-200">
{`# Job A: collect data (job_id from 'hermes cron list')
hermes cron create "0 8 * * *" "Collect servicesData.json metrics" --no-agent --script collect_metrics.py

# Job B: process data, using Job A's output as context
hermes cron create "0 9 * * *" "Process metrics and generate report" --context-from JOB_A_ID --deliver "telegram:CHAT_ID"`}
            </code>
          </pre>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Cron Management Commands</h2>
          <pre className="bg-slate-900 rounded-lg p-4 text-sm font-mono my-4 overflow-x-auto">
            <code className="text-slate-200">
{`hermes cron list          # List all jobs (add --all for disabled)
hermes cron create SCHED    # Create: '30m', 'every 2h', '0 9 * * *'
hermes cron edit ID         # Edit schedule, prompt, delivery
hermes cron pause/resume ID # Control job state
hermes cron run ID          # Trigger on next tick (immediate)
hermes cron remove ID       # Delete a job
hermes cron status          # Scheduler status

# Or use the CLI directly:
hermes cron list
hermes cron create "every 2h" "Scan site for 404s" --deliver "telegram:8435383377"`}
            </code>
          </pre>

          <div className="mt-12 p-6 bg-slate-900/40 border border-slate-800 rounded-xl">
            <h3 className="text-lg font-semibold text-white mb-2">Need Help Setting Up Cron Jobs?</h3>
            <p className="text-slate-300 text-sm mb-4">
              Zion Tech Group offers Hermes Agent cron automation setup, monitoring configuration,
              and failure-recovery patterns. We'll design your cron schedule, set up Telegram delivery,
              and implement the no_agent + monitor_script pattern to prevent timeouts.
            </p>
            <Link
              href="https://calendly.com/kleber-ziontechgroup/consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-500 hover:to-pink-500 transition-all text-sm"
            >
              Book a free consultation →
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
