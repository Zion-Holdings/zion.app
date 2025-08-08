import fs from 'fs';
import path from 'path';

export async function getStaticProps() {
  const file = path.join(process.cwd(), 'data', 'reports', 'autonomous-cloud', 'latest.json');
  let data: any = null;
  try {
    data = JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch {}
  return { props: { data } };
}

export default function Automation({ data }: { data: any }) {
  return (
    <div className="py-8">
      <h1 className="text-2xl font-semibold mb-4">Automation Dashboard</h1>
      {!data && <p>No recent automation run found. The cloud job runs every 30 minutes.</p>}
      {data && (
        <div className="space-y-2">
          <div>Started: {data.startedAt}</div>
          <div>Ended: {data.endedAt}</div>
          <div>Tasks:</div>
          <ul className="list-disc list-inside">
            {data.tasks?.map((t: any, i: number) => (
              <li key={i}>
                {t.name}: {t.success ? 'SUCCESS' : 'FAIL'} in {t.durationMs}ms
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}