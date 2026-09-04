
import Link from 'next/link'

export default function FreeCDN() {
  const cdnServices = [
    {
      name: 'Cloudflare',
      href: 'https://dash.cloudflare.com/sign-up?ref=ziontech',
      desc: 'Global CDN with free tier including DNS, SSL, and DDoS protection.',
      category: 'Global CDN',
    },
    {
      name: 'Netlify',
      href: 'https://app.netlify.com/signup?ref=ziontech',
      desc: 'Free static site hosting + global CDN + continuous deployment.',
      category: 'Static Hosting',
    },
    {
      name: 'Vercel',
      href: 'https://vercel.com/signup?ref=ziontech',
      desc: 'Free Next.js hosting with edge network and zero-config deployments.',
      category: 'Static Hosting',
    },
    {
      name: 'GitHub Pages',
      href: 'https://pages.github.com/?ref=ziontech',
      desc: 'Static site hosting directly from your GitHub repository.',
      category: 'Static Hosting',
    },
    {
      name: 'jsDelivr',
      href: 'https://www.jsdelivr.com/?ref=ziontech',
      desc: 'Free CDN for open-source projects with global edge caching.',
      category: 'Library CDN',
    }
  ]

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
        Free CDN Services | Zion Tech Group
      </h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cdnServices.map((service, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                {/* Placeholder for icon - you could add actual icons here */}
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-bold">CDN</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{service.name}</h3>
                <p className="text-gray-600">{service.desc}</p>
                <Link href={service.href} className="mt-3 inline-block bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
                  Visit Website
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center text-gray-500">
        <p>All services offer free tiers with varying limits. Always check the latest terms on provider websites.</p>
      </div>
    </div>
  )
}
