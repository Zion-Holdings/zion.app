import Head from 'next/head';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';

export default function Private5GPage() {
  return (
    <UltraAdvancedFuturisticBackground>
      <Head>
        <title>5G Private Networks Readiness | Zion Tech Group</title>
        <meta name="description" content="Plan and pilot private 5G with RF survey, spectrum/licensing, edge compute design, and zero-trust segmentation." />
        <link rel="canonical" href="https://ziontechgroup.com/5g-private-network-solutions" />
      </Head>
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">5G Private Networks</h1>
          <p className="text-slate-300">Site survey, spectrum plan, edge stack and security for factories and campuses.</p>
          <div className="bg-black/30 rounded-2xl border border-pink-500/30 p-6 space-y-3">
            <h2 className="text-2xl font-semibold">References</h2>
            <div className="text-slate-400 text-sm">See <a className="text-cyan-400 underline" href={`https://aws.amazon.com/wavelength/`} target="_blank" rel="noopener noreferrer">AWS Wavelength</a> and <a className="text-cyan-400 underline" href={`https://azure.microsoft.com/products/private-multi-access-edge-compute`} target="_blank" rel="noopener noreferrer">Azure Private MEC</a>.</div>
          </div>
        </div>
      </div>
    </UltraAdvancedFuturisticBackground>
  );
}