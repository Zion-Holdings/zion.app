import React from 'react';
import SEO from '../components/SEO';
import Card from '../components/ui/Card';

export default function TermsPage() {
  return (
    <>
      <SEO title="Terms of Service | Zion Tech Group" description="Terms of Service for Zion Tech Group - Learn about our service terms and conditions." url="https://ziontechgroup.com/terms/" />

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-cursor-darker via-cursor-dark to-cursor-darker overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,122,204,0.08),transparent_50%)]" />
        
        <div className="relative z-10 container-cursor text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 gradient-text">
            Terms of Service
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-5xl mx-auto leading-relaxed">
            Our terms and conditions for using Zion Tech Group services
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-24 bg-gradient-to-b from-cursor-dark to-cursor-darker">
        <div className="container-cursor">
          <div className="max-w-4xl mx-auto space-y-12">
            <Card className="hover:border-cursor-blue/30">
              <h2 className="text-3xl font-bold mb-6 text-cursor-blue">1. Acceptance of Terms</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                By accessing and using Zion Tech Group services, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
              <p className="text-gray-400 leading-relaxed">
                If you do not agree to abide by the above, please do not use this service.
              </p>
            </Card>

            <Card className="hover:border-cursor-blue/30">
              <h2 className="text-3xl font-bold mb-6 text-cursor-blue">2. Use License</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Permission is granted to temporarily download one copy of the materials (information or software) on Zion Tech Group&apos;s website for personal, non-commercial transitory viewing only.
              </p>
              <p className="text-gray-400 leading-relaxed">
                This is the grant of a license, not a transfer of title, and under this license you may not modify or copy the materials.
              </p>
            </Card>

            <Card className="hover:border-cursor-blue/30">
              <h2 className="text-3xl font-bold mb-6 text-cursor-blue">3. Disclaimer</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                The materials on Zion Tech Group&apos;s website are provided on an &apos;as is&apos; basis. Zion Tech Group makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </Card>

            <Card className="hover:border-cursor-blue/30">
              <h2 className="text-3xl font-bold mb-6 text-cursor-blue">4. Limitations</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                In no event shall Zion Tech Group or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Zion Tech Group&apos;s website.
              </p>
            </Card>

            <Card className="hover:border-cursor-blue/30">
              <h2 className="text-3xl font-bold mb-6 text-cursor-blue">5. Revisions and Errata</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                The materials appearing on Zion Tech Group&apos;s website could include technical, typographical, or photographic errors. Zion Tech Group does not warrant that any of the materials on its website are accurate, complete or current.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Zion Tech Group may make changes to the materials contained on its website at any time without notice.
              </p>
            </Card>

            <Card className="hover:border-cursor-blue/30">
              <h2 className="text-3xl font-bold mb-6 text-cursor-blue">6. Links</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Zion Tech Group has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site.
              </p>
              <p className="text-gray-400 leading-relaxed">
                The inclusion of any link does not imply endorsement by Zion Tech Group of the site.
              </p>
            </Card>

            <Card className="hover:border-cursor-blue/30">
              <h2 className="text-3xl font-bold mb-6 text-cursor-blue">7. Site Terms of Use Modifications</h2>
              <p className="text-gray-300 leading-relaxed">
                Zion Tech Group may revise these terms of use for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these Terms and Conditions of Use.
              </p>
            </Card>

            <Card className="hover:border-cursor-blue/30">
              <h2 className="text-3xl font-bold mb-6 text-cursor-blue">8. Governing Law</h2>
              <p className="text-gray-300 leading-relaxed">
                Any claim relating to Zion Tech Group&apos;s website shall be governed by the laws of the State of [State] without regard to its conflict of law provisions.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}