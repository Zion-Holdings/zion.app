import Link from 'next/link';

const categories = [
  { slug: 'ai-engineering', name: 'AI Engineering' },
  { slug: 'cloud-devops', name: 'Cloud & DevOps' },
  { slug: 'marketplace-mastery', name: 'Marketplace Mastery' },
  { slug: 'remote-work', name: 'Remote Work' }
];

export default function AcademyHome() {
  return (
    <div className="py-10 space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Zion Academy</h1>
        <p className="text-gray-600 dark:text-gray-300">Interactive lessons, AI assistance, and certifications to upskill talent.</p>
      </div>

      <section>
        <h2 className="text-xl font-semibold mb-3">Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((c) => (
            <Link key={c.slug} href={`/academy/c/${c.slug}`}>
              <a className="rounded-lg border border-gray-200 dark:border-gray-800 p-4 hover:bg-gray-50 dark:hover:bg-gray-900">
                <div className="font-medium">{c.name}</div>
                <div className="text-xs text-gray-500">View courses</div>
              </a>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3">Featured Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link href="/academy/course/ai-engineering-foundations">
            <a className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
              <div className="font-medium">AI Engineering Foundations</div>
              <div className="text-xs text-gray-500">Beginner · 8 lessons</div>
            </a>
          </Link>
          <Link href="/academy/course/devops-cloud-primer">
            <a className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
              <div className="font-medium">DevOps Cloud Primer</div>
              <div className="text-xs text-gray-500">Intermediate · 10 lessons</div>
            </a>
          </Link>
          <Link href="/academy/course/marketplace-mastery-101">
            <a className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
              <div className="font-medium">Marketplace Mastery 101</div>
              <div className="text-xs text-gray-500">Beginner · 6 lessons</div>
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}