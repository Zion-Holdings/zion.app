import type { Metadata } from "next";

export const metadata = {
  title: "IT Freelance Automation Tools | Zion Tech Group",
  description: "Freelance IT automation tools for onboarding, invoicing, time tracking, and client delivery.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">IT Freelance Automation Tools</h1>
        <p className="text-slate-400 mb-6">Freelance IT automation tools for onboarding, invoicing, time tracking, and client delivery.</p>
        <ul className="list-disc pl-6 space-y-2 mb-8"><li>Project intake and scoping workflows</li><li>Time tracking and invoicing automation</li><li>Client reporting and delivery dashboards</li><li>Security and compliance checklists</li></ul>
        <div className="flex flex-wrap gap-4">
          <a href="https://calendly.com/kleber-ziontechgroup" className="text-emerald-400 underline">See freelance tooling</a>
          <a href="https://ziontechgroup.com" className="text-purple-400 underline">Visit ziontechgroup.com</a>
        </div>
      </div>
    </main>
  );
}
