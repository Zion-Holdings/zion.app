
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function ServicePage(){
 return(
  <div className="min-h-screen bg-slate-950 text-white">
   <Navigation />
   <main className="min-h-screen bg-slate-950 py-20 px-4">
    <div className="container-page max-w-4xl mx-auto">
     <h1 className="text-4xl font-bold text-white mb-4">Automated Reporting Engine</h1>
     <p className="text-slate-300 text-lg mb-8">Turn raw data into formatted PDF/PPT reports with natural language summaries. Schedule distributions to stakeholders.</p>
     <div className="grid sm:grid-cols-2 gap-4">
      <div className="glass-card">
       <h3 className="text-white font-semibold mb-2">What you get</h3>
       <ul className="list-disc pl-5 text-slate-300 space-y-1">
        <li>Outcome-focused delivery aligned to your stack</li>
        <li>Repeatable playbooks and runbooks</li>
        <li>Clear metrics and review cycles</li>
       </ul>
      </div>
      <div className="glass-card">
       <h3 className="text-white font-semibold mb-2">Next steps</h3>
       <ul className="list-disc pl-5 text-slate-300 space-y-1">
        <li><Link href="/contact/" className="text-purple-400 hover:underline">Contact sales</Link></li>
        <li><Link href="/pricing/" className="text-purple-400 hover:underline">Review pricing</Link></li>
        <li><Link href="/case-studies/" className="text-purple-400 hover:underline">See related cases</Link></li>
       </ul>
      </div>
     </div>
    </div>
   </main>
   <Footer />
  </div>
 );
}
