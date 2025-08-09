import data from '../../data/reports/broken-links.json';
export default function BrokenLinks(){
  const d = data as any;
  return (
    <div className="py-10 space-y-3">
      <h1 className="text-2xl font-semibold">Broken Links</h1>
      <div className="text-sm text-gray-500">Checked: {new Date(d.runAt).toLocaleString()}</div>
      <ul className="text-sm">
        {d.results?.map((x: any, i: number) => (
          <li key={i} className={x.ok ? 'text-green-600' : 'text-red-600'}>
            {x.status} - {x.url}
          </li>
        ))}
      </ul>
    </div>
  );
}
