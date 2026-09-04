import Link from 'next/link'

export default function FiveGMobileApplications() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">5G Mobile Applications</h1>
      <p className="mb-4">
        Explore our comprehensive suite of 5G-enabled mobile applications designed 
        for enterprise mobility and IoT integration.
      </p>
      <Link href="/services/mobile-development" className="btn btn-primary">
        Learn More About Mobile Development Services
      </Link>
    </div>
  )
}
