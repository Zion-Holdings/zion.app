export default function AcademyMonetization() {
  return (
    <div className="py-10 space-y-6">
      <h1 className="text-2xl font-semibold">Monetization</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="rounded border border-gray-200 dark:border-gray-800 p-4">
          <div className="font-medium mb-1">Free</div>
          <div className="text-sm text-gray-600 dark:text-gray-300">Access to intro lessons and quizzes.</div>
        </div>
        <div className="rounded border border-gray-200 dark:border-gray-800 p-4">
          <div className="font-medium mb-1">Premium</div>
          <div className="text-sm text-gray-600 dark:text-gray-300">Full courses, projects, certifications.</div>
        </div>
        <div className="rounded border border-gray-200 dark:border-gray-800 p-4">
          <div className="font-medium mb-1">ZION$ Unlocks</div>
          <div className="text-sm text-gray-600 dark:text-gray-300">Use tokens for exclusive content.</div>
        </div>
      </div>
    </div>
  );
}