import { } from 'next/navigation';

export const metadata = {
  title: "Social Media Content Hub & Publisher - Zion Tech Group",
  description: "All-in-one social media content hub: AI-assisted content ideation and drafting per platform, content calendar, multi-platform publishing (LinkedIn, X/Twitter, I",
  alternates: {
    canonical: `https://ziontechgroup.com/services/social-media-content-hub--publisher-948c0413`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Social Media Content Hub &amp; Publisher</h1>
        <p className="text-lg text-gray-300 mb-8">All-in-one social media content hub: AI-assisted content ideation and drafting per platform, content calendar, multi-platform publishing (LinkedIn, X/Twitter, Instagram, Facebook, TikTok, YouTube), real-time engagement monitoring, and weekly performance reporting.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>AI content drafting: platform-optimised posts per network with tone + brand voice pre-trained</li>
            <li>Content calendar kanban: quarterly calendar with drag-drop scheduling per platform</li>
            <li>Bulk publishing: schedule 50+ posts across 6 platforms in one session with platform-native format</li>
            <li>Real-time engagement: mentions, DMs, comments all in one inbox with AI-suggested replies</li>
            <li>Weekly performance report: top-performing content type, audience growth trend, best posting time slot</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Social media managers publish 5× more content per week — AI drafts + bulk publish removes the bottleneck</li>
            <li>Maintain consistent brand voice across all networks — tone-guided AI prevents rogue tone on LinkedIn vs TikTok</li>
            <li>Cut time spent per week on content ideation and scheduling by 70-80%</li>
          </ul>
        </div>
        
        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$79/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$299/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$Custom/month</p>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <a 
            href="https://calendly.com/kleber-ziontechgroup/consultation" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors"
          >
            Book a Consultation
          </a>
        </div>
      </div>
    </main>
  );
}
