export default function LoadingSpinner({ size = 'md', color = 'blue' }: { size?: 'sm' | 'md' | 'lg', color?: 'blue' | 'purple' | 'green' }) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const colorClasses = {
    blue: 'text-blue-600',
    purple: 'text-purple-600',
    green: 'text-green-600'
  };

  return (
    <div className="flex justify-center items-center">
      <div className={`animate-spin rounded-full border-2 border-gray-300 border-t-${colorClasses[color]} ${sizeClasses[size]}`}></div>
    </div>
  );
}