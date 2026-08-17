import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Cloud AI Services | Zion Tech Group',
  description: 'Managed cloud AI services for inference, pipelines, and cost governance.'
}
export default function Page() {
  return (
    <main className="container-page py-20">
      <h1 className="text-4xl font-bold text-white mb-4">Cloud AI Services</h1>
      <p className="text-xl text-slate-300 mb-10">Managed cloud AI services for inference, pipelines, and cost governance.</p>
      <div className="text-center">
        <a className="btn-primary" href="/contact/">Contact us</a>
        <a className="btn-secondary" href="/services/">Services</a>
      </div>
    </main>
  )
}
