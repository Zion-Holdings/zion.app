type Feature = { title: string; description: string };

const features: Feature[] = [
  { title: 'AI Instructor Assistant', description: 'Live guidance, examples, and notes—powered by safe AI.' },
  { title: 'Interactive Lessons', description: 'Videos, quizzes, and projects with instant feedback.' },
  { title: 'Skill Certifications', description: 'Branded certificates and badges to boost your profile.' },
  { title: 'Autonomous Agents', description: 'Self-running cloud agents for insights, uptime, SEO, links, and more.' },
  { title: 'Talent Visibility', description: 'Add certificates to your resume and get discovered.' },
  { title: 'Analytics for Admins', description: 'Drop-offs, pass rates, and rewatch patterns in real time.' }
];

export default function FuturisticCards() {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">Why Zion</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((f, i) => (
          <div key={i} className="relative rounded-xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-black/40 p-5 overflow-hidden group">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(300px_300px_at_var(--x,_50%)_var(--y,_50%),rgba(59,130,246,0.12),transparent)]" />
            <div className="relative">
              <div className="text-lg font-medium">{f.title}</div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{f.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}