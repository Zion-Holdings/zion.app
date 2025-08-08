import Link from 'next/link'

export default function TalentHome() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Talent Tools</h1>
      <p className="text-sm text-gray-600 dark:text-gray-300">Build your profile, resumes, and projects for the Zion AI Marketplace.</p>
      <Link href="/talent/resume-builder"><a className="inline-block px-4 py-2 border rounded hover:bg-gray-50 dark:hover:bg-gray-900">Open Resume & Portfolio Builder</a></Link>
    </div>
  )
}