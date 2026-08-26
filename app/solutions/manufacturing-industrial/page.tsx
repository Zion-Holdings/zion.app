
export const metadata = { title: "Manufacturing & Industrial", description: "Industry 4.0 solutions. Digital twins, predictive maintenance, IoT, quality inspection." };
import Link from 'next/link';

export default function SolutionPage() {
  const services = [
            { icon: "🏭", name: "Digital Twin Platform", href: "/digital-twin-platform", desc: "Virtual replicas of physical assets for simulation." },
            { icon: "🔧", name: "Predictive Maintenance", href: "/ai-predictive-maintenance", desc: "IoT sensor analysis with ML failure prediction." },
            { icon: "👁️", name: "Computer Vision QC", href: "/computer-vision", desc: "AI-powered visual quality inspection on production lines." },
            { icon: "📡", name: "IoT Edge Platform", href: "/iot-edge", desc: "Edge computing for real-time industrial data processing." },
            { icon: "📦", name: "Supply Chain AI", href: "/ai-supply-chain", desc: "Demand forecasting, inventory optimization, logistics." },
            { icon: "⚙️", name: "Process Automation", href: "/process-automation", desc: "Intelligent automation of manufacturing workflows." },
  ];
  return (
    <div className="relative overflow-hidden">
      <section className="relative overflow-hidden border-b border-purple-500/20 bg-gradient-to-b from-slate-950 via-purple-950/30 to-slate-900">
        <div className="relative mx-auto max-w-5xl px-4 pb-20 pt-24 sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-purple-400">Manufacturing & Industrial</p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Manufacturing & Industrial</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">Industry 4.0 solutions. Digital twins, predictive maintenance, IoT, quality inspection.</p>
        </div>
      </section>
      <section className="bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Link key={i} href={s.href} className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
                <span className="text-3xl">{s.icon}</span>
                <h3 className="mt-3 text-lg font-semibold text-white group-hover:text-purple-300">{s.name}</h3>
                <p className="mt-2 text-sm text-slate-400">{s.desc}</p>
              </Link>
            ))}
          </div>
          <div className="mt-12 rounded-2xl border border-purple-500/20 bg-gradient-to-r from-purple-900/30 to-pink-900/20 p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Need Custom Solutions?</h2>
            <p className="text-slate-300 mb-6">Our experts can tailor solutions to your specific requirements.</p>
            <Link href="/consultation" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 text-sm font-semibold text-white">Schedule a Consultation</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
