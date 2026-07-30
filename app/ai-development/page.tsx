import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'AI Development | Zion Tech Group',
  description: 'Enterprise AI development for assistants, documents, predictive models, and deployment.'
}
export default function Page() {
  return (
    <main className="container-page py-20">
      <h1 className="text-4xl font-bold text-white mb-4">AI Development</h1>
      <p className="text-xl text-slate-300 mb-10">Enterprise AI development for assistants, documents, predictive models, and deployment.</p>
      <div className="text-center">
        <a className="btn-primary" href="/contact/">Contact us</a>
        <a className="btn-secondary" href="/services/">Services</a>
      </div>
    </main>
  )
}
