import SEO from '../components/SEO';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';

export default function PrivacyPolicyPage() {
  return (
    <UltraAdvancedFuturisticBackground>
      <SEO title="Privacy Policy | Zion Tech Group" description="Zion Tech Group Privacy Policy: data collection, usage, security, and contact details." canonical="https://ziontechgroup.com/privacy/" />
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Privacy Policy</h1>
          <p className="text-gray-300">Last updated: 2025-02-07</p>
          <section className="space-y-4 text-gray-200 leading-relaxed">
            <p>
              We respect your privacy. This policy explains what information we collect, how we use it, and your choices. We collect minimal personal information necessary to provide our services and improve your experience.
            </p>
            <h2 className="text-2xl font-semibold text-white">Information We Collect</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-300">
              <li>Contact details you provide (name, email, phone) when reaching out or subscribing.</li>
              <li>Service usage data (pages viewed, events) for analytics and product improvement.</li>
              <li>Technical data (IP address, browser) for security and reliability.</li>
            </ul>
            <h2 className="text-2xl font-semibold text-white">How We Use Information</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-300">
              <li>Provide, maintain, and improve our services.</li>
              <li>Communicate about updates, offers, and support.</li>
              <li>Ensure security, prevent fraud, and comply with legal obligations.</li>
            </ul>
            <h2 className="text-2xl font-semibold text-white">Sharing</h2>
            <p>We do not sell personal information. We may share with trusted processors (e.g., hosting, analytics) under DPAs and access controls.</p>
            <h2 className="text-2xl font-semibold text-white">Data Retention & Security</h2>
            <p>We retain data for as long as necessary to provide services and meet legal requirements. We employ encryption in transit, access controls, audit logs, and regular reviews.</p>
            <h2 className="text-2xl font-semibold text-white">Your Rights</h2>
            <p>Depending on your jurisdiction, you may request access, correction, deletion, or restriction of your data. Contact us to exercise rights.</p>
            <h2 className="text-2xl font-semibold text-white">Contact</h2>
            <p>
              Email: <a className="text-cyan-300 underline" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a> · Phone: <a className="text-cyan-300 underline" href="tel:+13024640950">+1 302 464 0950</a><br/>
              Address: 364 E Main St STE 1008, Middletown, DE 19709
            </p>
          </section>
        </div>
      </div>
    </UltraAdvancedFuturisticBackground>
  );
}

 