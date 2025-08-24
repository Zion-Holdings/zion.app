import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";

export default function Privacy() {
  return (
    <>
      <SEO 
        title="Privacy Policy - Zion Tech Group" 
        description="Learn about how Zion Tech Group protects your privacy and handles your personal information." 
        url="https://ziontechgroup.com/privacy"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <GradientHeading>Privacy Policy</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              How we protect and handle your personal information
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
              <p className="text-zion-slate-light mb-4">
                We collect information you provide directly to us, such as when you create an account, 
                complete your profile, or communicate with us. This may include:
              </p>
              <ul className="text-zion-slate-light list-disc list-inside space-y-2 ml-4">
                <li>Name, email address, and contact information</li>
                <li>Professional credentials and work history</li>
                <li>Project requirements and communication records</li>
                <li>Payment and billing information</li>
              </ul>
            </div>

            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
              <p className="text-zion-slate-light mb-4">
                We use the information we collect to:
              </p>
              <ul className="text-zion-slate-light list-disc list-inside space-y-2 ml-4">
                <li>Provide and maintain our marketplace platform</li>
                <li>Connect talent with clients and projects</li>
                <li>Process payments and transactions</li>
                <li>Send important updates and notifications</li>
                <li>Improve our services and user experience</li>
              </ul>
            </div>

            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Information Sharing</h2>
              <p className="text-zion-slate-light mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except as described in this policy or as required by law.
              </p>
              <p className="text-zion-slate-light">
                We may share information with service providers who assist us in operating our platform, 
                processing payments, or providing customer support.
              </p>
            </div>

            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
              <p className="text-zion-slate-light mb-4">
                We implement appropriate security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction.
              </p>
              <p className="text-zion-slate-light">
                Your data is encrypted in transit and at rest, and we regularly review and update our 
                security practices to ensure the highest level of protection.
              </p>
            </div>

            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
              <p className="text-zion-slate-light mb-4">
                You have the right to:
              </p>
              <ul className="text-zion-slate-light list-disc list-inside space-y-2 ml-4">
                <li>Access and review your personal information</li>
                <li>Update or correct inaccurate information</li>
                <li>Request deletion of your personal data</li>
                <li>Opt out of certain communications</li>
                <li>Export your data in a portable format</li>
              </ul>
            </div>

            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p className="text-zion-slate-light mb-4">
                If you have any questions about this Privacy Policy or our data practices, 
                please contact us:
              </p>
              <div className="text-zion-slate-light space-y-2">
                <p><strong>Email:</strong> kleber@ziontechgroup.com</p>
                <p><strong>Phone:</strong> +1 302 464 0950</p>
                <p><strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
