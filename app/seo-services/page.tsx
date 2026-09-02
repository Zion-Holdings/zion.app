import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'SEO Services | Zion Tech Group',
  description: 'Enterprise SEO for organic growth and measurable acquisition.'
}
export default function Page() {
  return (
    <main className="container-page py-20">
      <h1 className="text-4xl font-bold text-white mb-4">SEO Services</h1>
      <p className="text-xl text-slate-300 mb-10">Enterprise SEO for organic growth and measurable acquisition.</p>
      <div className="text-center">
        <a className="btn-primary" href="/contact/">Contact us</a>
        <a className="btn-secondary" href="/services/">Services</a>
      </div>
    </main>
  )
}
