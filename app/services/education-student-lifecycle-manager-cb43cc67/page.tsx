
export const metadata = {
  title: "Education Student Lifecycle Manager - Zion Tech Group",
  description: "Full-cycle student lifecycle automation for higher ed and EdTech: inquiry-to-enrolment funnel, personalised nurture sequences, academic-risk detection, parents-",
  alternates: {
    canonical: `https://ziontechgroup.com/services/education-student-lifecycle-manager-cb43cc67`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Education Student Lifecycle Manager</h1>
        <p className="text-lg text-gray-300 mb-8">Full-cycle student lifecycle automation for higher ed and EdTech: inquiry-to-enrolment funnel, personalised nurture sequences, academic-risk detection, parents-and-alumni engagement, and LMS grade-imported at-risk alerts.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Inquiry funnel: form → enriched CRM record → personalised nurture sequence per channel</li>
            <li>Academic-risk detection via LMS grade-imported pattern scoring</li>
            <li>Parent engagement portal with auto-summarised academic progress reports</li>
            <li>Alumni lifecycle: graduation anniversary give, re-enrolment incentive, charitable giving prompts</li>
            <li>FERPA-compliant data handling with role-based student record access</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Increase student enrolment yield 15-25% via personalised nurture sequences that react to actual engagement behaviour</li>
            <li>Reduce dropout rate 30% via early academic-risk alerts reaching academic advisors automatically</li>
            <li>Cut admissions office administrative time by 60% via automated funnel management</li>
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
