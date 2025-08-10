import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import AnimatedBackground from '@/components/ui/AnimatedBackground';
import FuturisticHero from '@/components/ui/FuturisticHero';
import InteractiveSearch from '@/components/ui/InteractiveSearch';
import InteractiveStats from '@/components/ui/InteractiveStats';
import EnhancedCard from '@/components/ui/EnhancedCard';
import EnhancedMarketplaceCard from '@/components/ui/EnhancedMarketplaceCard';

const Home: NextPage = () => {
  return (
    <div className="relative">
      <Head>
        <title>Zion — AI‑Powered Marketplace & Automation Platform</title>
        <meta
          name="description"
          content="Explore AI services, products, talent, automation dashboard, and expert resources. Build, scale, and automate with Zion."
        />
      </Head>

      <AnimatedBackground className="pointer-events-none" />

      <div className="space-y-20">
        {/* Hero */}
        <FuturisticHero
          title="Zion — The AI‑Powered Marketplace"
          subtitle="Discover services, products, and expert talent. Automate workflows. Accelerate delivery."
          className="bg-gradient-to-r from-indigo-700 via-fuchsia-600 to-cyan-600 text-white py-20 shadow-xl"
        >
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/services">
                <a className="px-6 py-3 rounded-lg bg-white text-gray-900 font-semibold shadow hover:shadow-md transition">Explore Services</a>
              </Link>
              <Link href="/products">
                <a className="px-6 py-3 rounded-lg bg-white/10 text-white border border-white/30 hover:bg-white/15 transition">Browse Products</a>
              </Link>
              <Link href="/talent">
                <a className="px-6 py-3 rounded-lg bg-white/10 text-white border border-white/30 hover:bg-white/15 transition">Hire Talent</a>
              </Link>
              <Link href="/automation">
                <a className="px-6 py-3 rounded-lg bg-white/10 text-white border border-white/30 hover:bg-white/15 transition">Automation Dashboard</a>
              </Link>
            </div>
            <InteractiveSearch
              placeholder="Search services, products, and resources..."
              onSearch={(q) => {
                if (!q) return;
                // Simple client-side redirect to blog search or services for now
                window.location.href = `/blog`; // placeholder: central content hub
              }}
              className="w-full max-w-2xl"
            />
          </div>
        </FuturisticHero>

        {/* Snapshot stats */}
        <section className="container mx-auto px-4">
          <InteractiveStats
            stats={[
              { label: 'Professional Services', value: '50+', description: 'AI, Cloud, Data, Security, DevOps, and more' },
              { label: 'Expert Resources', value: '100+ ', description: 'Guides, expert chats, and insights' },
              { label: 'Automation Ready', value: '24/7', description: 'Run workflows with the Automation Center' },
            ]}
          />
        </section>

        {/* Primary destinations */}
        <section className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Build, Scale, and Automate</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/services">
              <a>
                <EnhancedCard>
                  <h3 className="text-xl font-semibold mb-2">AI & Engineering Services</h3>
                  <p className="text-gray-600">Custom AI development, cloud architecture, data platforms, cybersecurity, QA, and more.</p>
                </EnhancedCard>
              </a>
            </Link>
            <Link href="/products">
              <a>
                <EnhancedCard>
                  <h3 className="text-xl font-semibold mb-2">Products & Solutions</h3>
                  <p className="text-gray-600">Ready-to-use accelerators, blueprints, and integrations to speed up delivery.</p>
                </EnhancedCard>
              </a>
            </Link>
            <Link href="/talent">
              <a>
                <EnhancedCard>
                  <h3 className="text-xl font-semibold mb-2">Talent Marketplace</h3>
                  <p className="text-gray-600">Engage vetted experts for short-term projects or long-term partnerships.</p>
                </EnhancedCard>
              </a>
            </Link>
            <Link href="/blog">
              <a>
                <EnhancedCard>
                  <h3 className="text-xl font-semibold mb-2">Resources & Insights</h3>
                  <p className="text-gray-600">Deep dives, best practices, and expert perspectives for modern teams.</p>
                </EnhancedCard>
              </a>
            </Link>
            <Link href="/automation">
              <a>
                <EnhancedCard>
                  <h3 className="text-xl font-semibold mb-2">Automation Control Center</h3>
                  <p className="text-gray-600">Schedule, run, and monitor automated workflows. Export reports anytime.</p>
                </EnhancedCard>
              </a>
            </Link>
            <Link href="/auth">
              <a>
                <EnhancedCard>
                  <h3 className="text-xl font-semibold mb-2">Sign In / Account</h3>
                  <p className="text-gray-600">Access your dashboard, saved resources, and project workspaces.</p>
                </EnhancedCard>
              </a>
            </Link>
          </div>
        </section>

        {/* Highlighted capability pages */}
        <section className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Featured Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/iot-platforms">
              <a>
                <EnhancedCard>
                  <h3 className="text-xl font-semibold mb-2">IoT Platforms</h3>
                  <p className="text-gray-600">Design, connect, and scale device ecosystems with secure, reliable infrastructure.</p>
                </EnhancedCard>
              </a>
            </Link>
            <Link href="/blockchain-solutions">
              <a>
                <EnhancedCard>
                  <h3 className="text-xl font-semibold mb-2">Blockchain Solutions</h3>
                  <p className="text-gray-600">Trusted identity, provenance, and automation with modern distributed systems.</p>
                </EnhancedCard>
              </a>
            </Link>
            <Link href="/about">
              <a>
                <EnhancedCard>
                  <h3 className="text-xl font-semibold mb-2">About Zion</h3>
                  <p className="text-gray-600">Our vision, approach, and commitment to open, AI‑driven innovation.</p>
                </EnhancedCard>
              </a>
            </Link>
          </div>
        </section>

        {/* Service spotlights */}
        <section className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Service Spotlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/services/ai-model-development-chat">
              <a><EnhancedMarketplaceCard title="AI Model Development" description="Build, fine‑tune, and deploy models tailored to your use‑cases." /></a>
            </Link>
            <Link href="/services/cloud-migration-services-chat">
              <a><EnhancedMarketplaceCard title="Cloud Migration" description="Plan, move, and optimize workloads across clouds with confidence." /></a>
            </Link>
            <Link href="/services/data-pipeline-engineering-chat">
              <a><EnhancedMarketplaceCard title="Data Engineering" description="Reliable pipelines and analytics platforms for real‑time insights." /></a>
            </Link>
            <Link href="/services/network-security-chat">
              <a><EnhancedMarketplaceCard title="Network Security" description="Harden environments, protect data, and meet compliance." /></a>
            </Link>
            <Link href="/services/quality-assurance-testing-chat">
              <a><EnhancedMarketplaceCard title="QA & Testing" description="End‑to‑end quality gates, automation, and performance assurance." /></a>
            </Link>
            <Link href="/services/ui-ux-design-chat">
              <a><EnhancedMarketplaceCard title="UI/UX Design" description="Human‑centered design for intuitive, delightful experiences." /></a>
            </Link>
          </div>
          <div className="mt-4">
            <Link href="/services">
              <a className="text-indigo-700 font-semibold hover:underline">View all services →</a>
            </Link>
          </div>
        </section>

        {/* Popular categories */}
        <section className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Explore by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <Link href="/category/ai-consulting-chat"><a className="px-4 py-2 bg-white rounded shadow text-gray-800 text-sm text-center">AI Consulting</a></Link>
            <Link href="/category/cloud-architecture-chat"><a className="px-4 py-2 bg-white rounded shadow text-gray-800 text-sm text-center">Cloud Architecture</a></Link>
            <Link href="/category/web-development-chat"><a className="px-4 py-2 bg-white rounded shadow text-gray-800 text-sm text-center">Web Development</a></Link>
            <Link href="/category/cybersecurity-chat"><a className="px-4 py-2 bg-white rounded shadow text-gray-800 text-sm text-center">Cybersecurity</a></Link>
            <Link href="/category/devops-automation-chat"><a className="px-4 py-2 bg-white rounded shadow text-gray-800 text-sm text-center">DevOps & Automation</a></Link>
            <Link href="/category/data-science-chat"><a className="px-4 py-2 bg-white rounded shadow text-gray-800 text-sm text-center">Data Science</a></Link>
            <Link href="/category/ui-ux-design-chat"><a className="px-4 py-2 bg-white rounded shadow text-gray-800 text-sm text-center">UI/UX Design</a></Link>
            <Link href="/category/system-administration-chat"><a className="px-4 py-2 bg-white rounded shadow text-gray-800 text-sm text-center">SysAdmin</a></Link>
          </div>
        </section>

        {/* Autonomous Cloud Automations */}
        <section className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Autonomous Cloud Automations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <EnhancedCard>
              <h3 className="text-xl font-semibold mb-2">Repository Sync (Auto Pages)</h3>
              <p className="text-gray-600 mb-3">Commits timestamped pages to the repo to verify pipelines and trigger deploys.</p>
              <div className="flex gap-3">
                <a href="/.netlify/functions/auto_repo_sync" className="px-4 py-2 bg-indigo-600 text-white rounded">Run now</a>
                <Link href="/automation/innovations"><a className="px-4 py-2 bg-gray-100 rounded">Learn more</a></Link>
              </div>
            </EnhancedCard>
            <EnhancedCard>
              <h3 className="text-xl font-semibold mb-2">Link Health Monitor</h3>
              <p className="text-gray-600 mb-3">Checks key routes and commits a JSON report with status and availability.</p>
              <div className="flex gap-3">
                <a href="/.netlify/functions/link_health" className="px-4 py-2 bg-indigo-600 text-white rounded">Run now</a>
                <Link href="/automation/innovations"><a className="px-4 py-2 bg-gray-100 rounded">Learn more</a></Link>
              </div>
            </EnhancedCard>
            <EnhancedCard>
              <h3 className="text-xl font-semibold mb-2">Homepage Promo Rotator</h3>
              <p className="text-gray-600 mb-3">Rotates highlighted content and commits a data file for homepage promos.</p>
              <div className="flex gap-3">
                <a href="/.netlify/functions/promo_rotator" className="px-4 py-2 bg-indigo-600 text-white rounded">Run now</a>
                <Link href="/automation/innovations"><a className="px-4 py-2 bg-gray-100 rounded">Learn more</a></Link>
              </div>
            </EnhancedCard>
          </div>
          <div className="mt-4">
            <Link href="/automation/innovations"><a className="text-indigo-700 font-semibold hover:underline">See all automations →</a></Link>
          </div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-gray-700">
            <EnhancedCard>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold">PageSpeed Audit</div>
                  <div className="text-gray-500">Google PSI scores for key routes</div>
                </div>
                <a href="/.netlify/functions/pagespeed_audit" className="px-3 py-2 bg-gray-900 text-white rounded">Run</a>
              </div>
            </EnhancedCard>
            <EnhancedCard>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold">Security Headers</div>
                  <div className="text-gray-500">CSP/HSTS and more</div>
                </div>
                <a href="/.netlify/functions/security_headers_audit" className="px-3 py-2 bg-gray-900 text-white rounded">Run</a>
              </div>
            </EnhancedCard>
            <EnhancedCard>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold">OG/Twitter Meta</div>
                  <div className="text-gray-500">Social sharing readiness</div>
                </div>
                <a href="/.netlify/functions/og_meta_audit" className="px-3 py-2 bg-gray-900 text-white rounded">Run</a>
              </div>
            </EnhancedCard>
            <EnhancedCard>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold">RSS Generator</div>
                  <div className="text-gray-500">Publishes feed.xml</div>
                </div>
                <a href="/.netlify/functions/rss_generator" className="px-3 py-2 bg-gray-900 text-white rounded">Run</a>
              </div>
            </EnhancedCard>
            <EnhancedCard>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold">Broken Images</div>
                  <div className="text-gray-500">Detects 404/failed images</div>
                </div>
                <a href="/.netlify/functions/broken_image_checker" className="px-3 py-2 bg-gray-900 text-white rounded">Run</a>
              </div>
            </EnhancedCard>
            <EnhancedCard>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold">Commit Changelog</div>
                  <div className="text-gray-500">Daily changes summary</div>
                </div>
                <a href="/.netlify/functions/commit_changelog" className="px-3 py-2 bg-gray-900 text-white rounded">Run</a>
              </div>
            </EnhancedCard>
          </div>
        </section>

        {/* Latest insights */}
        <section className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Latest Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/blog/cybersecurity-trends-for-2024-and-beyond-chat">
              <a>
                <EnhancedCard>
                  <h3 className="text-lg font-semibold mb-2">Cybersecurity Trends for 2024</h3>
                  <p className="text-gray-600">Key shifts in threat models and defense strategies for modern stacks.</p>
                </EnhancedCard>
              </a>
            </Link>
            <Link href="/blog/cloud-native-architecture-best-practices-chat">
              <a>
                <EnhancedCard>
                  <h3 className="text-lg font-semibold mb-2">Cloud‑Native Best Practices</h3>
                  <p className="text-gray-600">Patterns for resilient, scalable, and maintainable cloud systems.</p>
                </EnhancedCard>
              </a>
            </Link>
            <Link href="/blog/machine-learning-applications-in-enterprise-software-chat">
              <a>
                <EnhancedCard>
                  <h3 className="text-lg font-semibold mb-2">ML in Enterprise Software</h3>
                  <p className="text-gray-600">Practical applications and adoption strategies that deliver value.</p>
                </EnhancedCard>
              </a>
            </Link>
          </div>
          <div className="mt-4">
            <Link href="/blog">
              <a className="text-indigo-700 font-semibold hover:underline">Browse all insights →</a>
            </Link>
          </div>
        </section>

        {/* Contact & CTA */}
        <section className="container mx-auto px-4">
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Ready to start?</h3>
                <p className="text-gray-600">Tell us about your goals. We’ll recommend services, products, or experts to help.</p>
              </div>
              <div className="flex gap-3">
                <Link href="/contact">
                  <a className="px-6 py-3 rounded-lg bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-700 transition">Contact Us</a>
                </Link>
                <Link href="/about">
                  <a className="px-6 py-3 rounded-lg bg-gray-100 text-gray-900 font-semibold border border-gray-200 hover:bg-gray-200 transition">Learn More</a>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;