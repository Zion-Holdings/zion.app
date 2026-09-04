import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'AI for Education | Zion Tech Group',
  description: 'Education and research AI for learning, assessment, research ops, and campus efficiency.'
}
export default function Page() {
  return (
    <main className="container-page py-20">
      <h1 className="text-4xl font-bold text-white mb-4">AI for Education</h1>
      <p className="text-xl text-slate-300 mb-10">Education and research AI for learning, assessment, research ops, and campus efficiency.</p>
      <div className="text-center">
        <a className="btn-primary" href="/contact/">Contact us</a>
        <a className="btn-secondary" href="/services/">Services</a>
      </div>
    </main>
  )
}
