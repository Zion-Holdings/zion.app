
interface StatItem {
  label: string;
  value: string | number;
  description?: string;
}

interface InteractiveStatsProps {
  stats: StatItem[];
  className?: string;
}

export default function InteractiveStats({ 
  stats, 
  className = "grid grid-cols-1 md:grid-cols-3 gap-6" 
}: InteractiveStatsProps) {
  return (
    <div className={className}>
      {stats.map((stat, index) => (
        <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
          <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
          <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
          {stat.description && (
            <div className="text-gray-600 text-sm">{stat.description}</div>
          )}
        </div>
      ))}
    </div>
  );
}
