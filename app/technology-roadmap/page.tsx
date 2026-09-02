import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Technology Roadmap | Zion Tech Group',
  description: 'Technology roadmap planning for alignment, delivery confidence, and measurable milestones.'
}
export default function Page() {
  return (
    <main className="container-page py-20">
      <h1 className="text-4xl font-bold text-white mb-4">Technology Roadmap</h1>
      <p className="text-xl text-slate-300 mb-10">Technology roadmap planning for alignment, delivery confidence, and measurable milestones.</p>
      <div className="text-center">
        <a className="btn-primary" href="/contact/">Contact us</a>
        <a className="btn-secondary" href="/services/">Services</a>
      </div>
    </main>
  )
}
