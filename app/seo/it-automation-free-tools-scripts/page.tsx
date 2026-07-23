import type { Metadata } from "next";

export const metadata = {
  title: "IT Automation Free Tools and Scripts | Zion Tech Group",
  description: "Free IT automation tools and scripts for teams that want measurable outcomes without enterprise cost.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">IT Automation Free Tools and Scripts</h1>
        <p className="text-slate-400 mb-6">Free IT automation tools and scripts for teams that want measurable outcomes without enterprise cost.</p>
        <ul className="list-disc pl-6 space-y-2 mb-8"><li>Monitoring and alerting templates</li><li>Backup and restore automation</li><li>Deployment and rollout scripts</li><li>Security hygiene checklists</li></ul>
        <div className="flex flex-wrap gap-4">
          <a href="https://calendly.com/kleber-ziontechgroup" className="text-emerald-400 underline">Request the free toolkit</a>
          <a href="https://ziontechgroup.com" className="text-purple-400 underline">Visit ziontechgroup.com</a>
        </div>
      </div>
    </main>
  );
}
