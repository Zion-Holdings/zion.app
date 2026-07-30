import Link from 'next/link';

export const metadata = {
  title: 'AI Solutions for Manufacturing & Industrial | Zion Tech Group',
  description: 'AI quality inspection, predictive maintenance, production optimization, and industrial automation for manufacturing. Reduce downtime and improve quality.',
};

const manufacturingServices = [
  {
    title: 'Computer Vision Quality Inspection',
    description: 'AI-powered computer vision system that detects defects, measures dimensions, and ensures quality control in real-time on the production line.',
    features: ['Real-time defect detection', 'Dimensional measurement', 'Automated quality gates', 'Multi-camera support'],
    benefits: ['95% defect detection rate', 'Reduce quality costs by 30%', 'Zero missed defects'],
    href: '/services/computer-vision-quality-inspection',
  },
  {
    title: 'Predictive Maintenance AI',
    description: 'Machine learning models that predict equipment failures, optimize maintenance schedules, and prevent costly downtime across manufacturing operations.',
    features: ['Equipment failure prediction', 'Maintenance scheduling', 'Anomaly detection', 'Cost optimization'],
    benefits: ['40% reduction in downtime', '25% lower maintenance costs', '95% equipment availability'],
    href: '/services/predictive-maintenance',
  },
  {
    title: 'Production Optimization Platform',
    description: 'AI-driven production scheduling, resource allocation, and workflow optimization that maximizes throughput and reduces waste.',
    features: ['Dynamic scheduling', 'Resource optimization', 'Waste reduction', 'Energy efficiency'],
    benefits: ['20% increase in throughput', '15% reduction in waste', '10% energy savings'],
    href: '/services/production-optimization',
  },
  {
    title: 'Industrial IoT Platform',
    description: 'Connect and monitor industrial equipment, sensors, and production lines with real-time analytics and automated alerts.',
    features: ['Real-time monitoring', 'Automated alerts', 'Historical analytics', 'Edge computing'],
    benefits: ['Real-time visibility', '24/7 monitoring', 'Instant alerts', 'Data-driven decisions'],
    href: '/services/iot-platform',
  },
];

export default function ManufacturingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(120,50,200,0.15),rgba(20,10,40,0.92))]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(59,130,246,0.1),transparent_60%)]" />
        <div className="relative container-page max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-900/30 border border-yellow-500/30 text-yellow-300 text-sm mb-6">
            <span className="text-yellow-400">●</span> Industry 4.0 Ready
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="gradient-text">AI for Manufacturing Excellence</span>
            <br />
            <span className="text-white">Industrial Automation</span>
          </h1>
          <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Transform your factory floor with AI-powered quality inspection, 
            predictive maintenance, production optimization, and smart IoT solutions — 
            built for modern manufacturing operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/configurator" className="btn-primary text-lg px-10 py-4">
              ⚡ Get Manufacturing AI Recommendations →
            </Link>
            <Link href="/services" className="btn-secondary text-lg px-10 py-4">
              🛠️ Browse Manufacturing Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="container-page">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 bg-clip-text text-transparent">
                Manufacturing AI Solutions
              </span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Proven AI solutions for quality control, predictive maintenance, production optimization, 
              and industrial IoT — designed for real-world manufacturing impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {manufacturingServices.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group rounded-2xl border border-slate-700 bg-slate-900/50 hover:bg-slate-800/80 hover:border-yellow-500/40 p-6 transition-all"
              >
                <h3 className="text-lg font-semibold text-white group-hover:text-yellow-300 transition-colors mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-300 mb-3 line-clamp-3">{service.description}</p>
                <div className="text-xs text-slate-500 mb-3">
                  <span className="font-medium text-yellow-400">Benefits:</span> {service.benefits[0]}
                </div>
                <div className="text-xs text-slate-400">
                  → View details
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20">
        <div className="container-page max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 bg-clip-text text-transparent">
              Proven Manufacturing Results
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="rounded-xl bg-slate-900/60 border border-slate-700 p-6">
              <div className="text-3xl font-bold text-yellow-400 mb-2">95%</div>
              <p className="text-slate-300 text-sm">Defect detection rate</p>
            </div>
            <div className="rounded-xl bg-slate-900/60 border border-slate-700 p-6">
              <div className="text-3xl font-bold text-yellow-400 mb-2">40%</div>
              <p className="text-slate-300 text-sm">Downtime reduction</p>
            </div>
            <div className="rounded-xl bg-slate-900/60 border border-slate-700 p-6">
              <div className="text-3xl font-bold text-yellow-400 mb-2">20%</div>
              <p className="text-slate-300 text-sm">Throughput increase</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-lg px-10 py-4">
              📞 Talk to a Manufacturing AI Expert
            </Link>
            <Link href="/case-studies" className="btn-secondary text-lg px-10 py-4">
              📖 Read Case Studies
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}