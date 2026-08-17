import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Email Intelligence Services | Zion Tech Group',
  description: 'Email intelligence, automation, and monitoring for outreach, support, and operations.'
}
export default function Page() {
  return (
    <main className="container-page py-20">
      <h1 className="text-4xl font-bold text-white mb-4">Email Intelligence Services</h1>
      <p className="text-xl text-slate-300 mb-10">Email intelligence, automation, and monitoring for outreach, support, and operations.</p>
      <div className="text-center">
        <a className="btn-primary" href="/contact/">Contact us</a>
        <a className="btn-secondary" href="/services/">Services</a>
      </div>
    </main>
  )
}
