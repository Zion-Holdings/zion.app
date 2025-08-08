import Link from 'next/link';

export default function ServicesGrid() {
  const items = [
    { href: '/services/ai-model-development-chat', title: 'AI Model Development' },
    { href: '/services/customer-support-chatbot', title: 'Customer Support Chatbot' },
    { href: '/services/data-pipeline-engineering-chat', title: 'Data Pipeline Engineering' },
    { href: '/services/web-application-development-chat', title: 'Web Application Development' },
    { href: '/services/cloud-migration-services-chat', title: 'Cloud Migration' },
    { href: '/services/instagram-content-scheduler', title: 'Instagram Scheduler' },
  ];

  return (
    <section className="enhanced-card">
      <div className="flex items-center justify-between">
        <h2 className="text-xl md:text-2xl font-semibold">Services</h2>
        <Link href="/services"><a className="text-blue-600 hover:underline">View all</a></Link>
      </div>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((i) => (
          <Link href={i.href} key={i.href}>
            <a className="block rounded-lg border border-gray-200 dark:border-gray-800 p-4 hover:shadow-md transition-shadow">
              <div className="font-medium">{i.title}</div>
              <div className="text-xs text-gray-500 mt-1">Learn more →</div>
            </a>
          </Link>
        ))}
      </div>
    </section>
  );
}