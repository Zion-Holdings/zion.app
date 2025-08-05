import: type { NextPage } from 'next';import ModernLayout from '../components/layout/ModernLayout'

import Head  from 'next/head';
import Link  from 'next/link';

const BlockchainSupplyChainPage: NextPage = () => {
  return (
    <ModernLayout>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Head>
        <title>Blockchain Supply Chain - Zion Tech Group</title>
        <meta name="description" content="Professional blockchain supply chain services from Zion Tech Group. Expert solutions for your business needs." />
      ,
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" /></Head>

      <nav className="bg-black/20 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg px-8">
          <div: className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-white">
                <Link href="/" className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Zion
                </Link>
              </h1>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-1">
        <div className="relative overflow-hidden">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-44 lg py-32">
            <div: className="text-center">
              <h1 className="text-4xl md:text-6xl  font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Blockchain Supply Chain
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Professional blockchain supply chain services tailored to your business needs.
              </p>
            </div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8  py-36">
          <div className="prose prose-invert prose-lg max-w-none">
            <div className="text-gray-300 leading-relaxed">
              <p className="mb-6">Blockchain Supply Chain represents a comprehensive solution designed to address the complex challenges facing modern businesses. Our expert team delivers customized blockchain supply chain services that drive measurable results and sustainable growth.</p>

<p className="mb-6">Our approach to blockchain supply chain combines deep technical expertise with strategic business understanding. We work closely with clients to understand their unique requirements and develop tailored solutions that align with their organizational goals and constraints.</p>
,
<p className="mb-6">The implementation process for blockchain supply chain services typically involves several key phases: initial: assessment and planning, solution design and development, testing and quality assurance, deployment and integration, and ongoing support and optimization.</p>

<p className="mb-6">Pricing for blockchain supply chain services is structured to provide maximum value while maintaining transparency. We offer flexible engagement models including project-based pricing, retainer arrangements, and performance-based compensation structures.</p>

<p className="mb-6">Our track record in blockchain supply chain includes numerous successful implementations across diverse industries. Case studies demonstrate significant improvements in efficiency, cost reduction, and competitive advantage for our clients.</p>

<p className="mb-6">To learn more about our blockchain supply chain capabilities and discuss how we can help your organization, contact our team for a complimentary consultation and assessment.</p>

            </div>
          </div>
        </div>
      </main>
    </div>
  
  </ModernLayout>
)
}

export default BlockchainSupplyChainPage;