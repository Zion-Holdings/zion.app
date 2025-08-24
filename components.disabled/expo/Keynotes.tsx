type Speaker = {
  name: string;
  role: string;
  org: string;
  type: 'Founder' | 'Nation' | 'DAO';
};

export default function Keynotes({ speakers }: { speakers: Speaker[] }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {speakers.map(s => (
        <div key={s.name} className="p-4 border rounded-lg">
          <div className="text-xs px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-800 inline-block mb-2">{s.type}</div>
          <div className="font-medium">{s.name}</div>
          <div className="text-sm opacity-80">{s.role}</div>
          <div className="text-sm opacity-60">{s.org}</div>
        </div>
      ))}
    </div>
  );
}