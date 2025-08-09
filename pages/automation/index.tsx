import Link from 'next/link';

export default function AutomationsIndex() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Automations Hub</h1>
      <p className="text-gray-700">Autonomous, cloud-native agents that keep this site fresh.</p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Link href="/automation/ai-trends"><a className="text-blue-600">AI Trend Watch</a></Link></li>
        <li><Link href="/automation/talent-updates"><a className="text-blue-600">Talent AI Enrichment</a></Link></li>
        <li><Link href="/automation/news-digest"><a className="text-blue-600">News Digest</a></Link></li>
        <li><Link href="/automation/repo-health"><a className="text-blue-600">Repo Health</a></Link></li>
        <li><Link href="/automation/dep-radar"><a className="text-blue-600">Dependency Radar</a></Link></li>
        <li><Link href="/automation/site-map"><a className="text-blue-600">Site Map Intelligence</a></Link></li>
      </ul>
    </div>
  );
}