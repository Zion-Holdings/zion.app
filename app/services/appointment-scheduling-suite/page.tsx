import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `Appointment Scheduling & Booking Suite | Zion Tech Group`,
  description: `Professional scheduling solution for service businesses. Online booking, calendar sync (Google, Outlook), automated reminders, payment collection, and waitlist management. Reduces no-shows by 80% with SMS and email reminders.`,
  keywords: 'Online booking page, Calendar sync, Automated reminders, Payment collection, Waitlist management, Team scheduling, Custom booking forms, Analytics, micro-saas, Enterprise, Zion Tech Group',
  alternates: {
    canonical: `https://ziontechgroup.com/services/appointment-scheduling-suite/`,
  },
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        
        <div class="mb-6">
          <a href="/services/" class="text-purple-400 hover:text-purple-300 text-sm flex items-center gap-2">
            ← Back to All Services
          </a>
        </div>
        
        <h1 className="text-4xl font-bold mb-6 text-white">Appointment Scheduling &amp; Booking Suite</h1>
        <p className="text-lg text-slate-300 mb-8">Professional scheduling solution for service businesses. Online booking, calendar sync (Google, Outlook), automated reminders, payment collection, and waitlist management. Reduces no-shows by 80% with SMS and email reminders.</p>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="text-xs px-3 py-1 bg-purple-900/30 rounded-full text-purple-300">micro-saas</span>
            <span class="text-xs px-3 py-1 bg-blue-900/30 rounded-full text-blue-300">Enterprise</span>
          </div>
          <h2 class="text-2xl font-semibold mb-4 text-white">Key Features</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">Online booking page</li>
        <li class="text-slate-300">Calendar sync</li>
        <li class="text-slate-300">Automated reminders</li>
        <li class="text-slate-300">Payment collection</li>
        <li class="text-slate-300">Waitlist management</li>
        <li class="text-slate-300">Team scheduling</li>
        <li class="text-slate-300">Custom booking forms</li>
        <li class="text-slate-300">Analytics</li>
      </ul>
        </div>
        
        <div class="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold mb-4 text-white">Benefits</h2>
          <ul class="list-disc list-inside space-y-2">
        <li class="text-slate-300">80% reduction in no-shows</li>
        <li class="text-slate-300">50% less admin time</li>
        <li class="text-slate-300">Increased bookings by 35%</li>
      </ul>
        </div>
        
        
        <div class="border border-purple-500/30 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold text-white mb-4">Pricing</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="bg-slate-800 rounded-lg p-4 text-center">
              <h3 class="font-semibold text-white mb-2">Basic</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">Custom</p>
              <p class="text-sm text-slate-400">Getting started plan</p>
            </div>
            <div class="bg-slate-800 rounded-lg p-4 text-center border-2 border-purple-500">
              <h3 class="font-semibold text-white mb-2">Pro</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">Custom</p>
              <p class="text-sm text-slate-400">Most popular</p>
            </div>
            <div class="bg-slate-800 rounded-lg p-4 text-center">
              <h3 class="font-semibold text-white mb-2">Enterprise</h3>
              <p class="text-2xl font-bold text-purple-400 mb-2">129</p>
              <p class="text-sm text-slate-400">Full-featured solution</p>
            </div>
          </div>
        </div>
        
        <div class="bg-slate-900/60 border border-slate-700/50 rounded-xl p-6 mb-8">
          <h2 class="text-2xl font-semibold text-white mb-4">Related Services</h2>
          <div class="grid md:grid-cols-2 gap-4">
            
              <div>
                <a href="/services/ai-chatbot-builder-enterprise/" class="text-purple-300 hover:text-purple-200 font-medium">Enterprise AI Chatbot Builder</a>
                <p class="text-slate-400 text-sm mt-1">Build and deploy AI chatbots for customer service, sales, and internal support. No-code builder with GPT-4 integration, ...</p>
              </div>
            
            
              <div>
                <a href="/services/ai-customer-support-routing/" class="text-purple-300 hover:text-purple-200 font-medium">AI Smart Support Ticket Routing</a>
                <p class="text-slate-400 text-sm mt-1">Intelligently route support tickets to the right agent based on content analysis, agent skills, workload, and priority. ...</p>
              </div>
            
            
              <div>
                <a href="/services/ai-data-labeling-platform/" class="text-purple-300 hover:text-purple-200 font-medium">AI Data Labeling & Annotation Platform</a>
                <p class="text-slate-400 text-sm mt-1">High-quality data labeling for ML training with AI-assisted pre-labeling, quality control, and workforce management. Sup...</p>
              </div>
            
            
              <div>
                <a href="/services/ai-financial-fraud-analyst/" class="text-purple-300 hover:text-purple-200 font-medium">AI Financial Fraud Detection & Prevention</a>
                <p class="text-slate-400 text-sm mt-1">Real-time fraud detection for financial services with AI that analyzes transactions, identifies patterns, and prevents l...</p>
              </div>
            
          </div>
        </div>
        
        <div class="text-center">
          <Link
            href="/contact/"
            class="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors"
          >
            Book a Consultation
          </Link>
        </div>
      </div>
    </main>
  );
}
