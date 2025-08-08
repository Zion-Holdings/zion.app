export default function AcademyProfile() {
  return (
    <div className="py-10 space-y-6">
      <h1 className="text-2xl font-semibold">Your Academy Profile</h1>
      <div className="rounded border border-gray-200 dark:border-gray-800 p-4">
        <div className="font-medium mb-2">Badges</div>
        <div className="flex gap-2 text-sm text-gray-600 dark:text-gray-300">
          <span className="inline-flex items-center gap-1 rounded-full border border-gray-300 dark:border-gray-700 px-3 py-1">AI Foundations</span>
        </div>
      </div>
      <div className="rounded border border-gray-200 dark:border-gray-800 p-4 space-y-2">
        <div className="font-medium">Add to Resume</div>
        <button className="rounded-md bg-blue-600 text-white px-4 py-2">Add latest certificate to Zion resume</button>
      </div>
    </div>
  );
}