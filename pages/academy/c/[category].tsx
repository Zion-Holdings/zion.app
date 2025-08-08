import Link from 'next/link';
import { useRouter } from 'next/router';

const categoryToCourses: Record<string, { slug: string; title: string; level: string; lessons: number }[]> = {
  'ai-engineering': [
    { slug: 'ai-engineering-foundations', title: 'AI Engineering Foundations', level: 'Beginner', lessons: 8 }
  ],
  'cloud-devops': [
    { slug: 'devops-cloud-primer', title: 'DevOps Cloud Primer', level: 'Intermediate', lessons: 10 }
  ],
  'marketplace-mastery': [
    { slug: 'marketplace-mastery-101', title: 'Marketplace Mastery 101', level: 'Beginner', lessons: 6 }
  ],
  'remote-work': [
    { slug: 'remote-work-pro', title: 'Remote Work Pro', level: 'All', lessons: 5 }
  ]
};

export default function CategoryPage() {
  const { query } = useRouter();
  const category = String(query.category || '');
  const courses = categoryToCourses[category] || [];

  return (
    <div className="py-10">
      <h1 className="text-2xl font-semibold mb-4">Category: {category.replace('-', ' ')}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map((c) => (
          <Link key={c.slug} href={`/academy/course/${c.slug}`}>
            <a className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
              <div className="font-medium">{c.title}</div>
              <div className="text-xs text-gray-500">{c.level} · {c.lessons} lessons</div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}