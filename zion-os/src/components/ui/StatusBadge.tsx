interface StatusBadgeProps {
  status: string;
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function StatusBadge({ 
  status, 
  variant = 'default', 
  size = 'md', 
  className = '' 
}: StatusBadgeProps) {
  const baseClasses = 'inline-flex items-center font-medium rounded-full';
  
  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-2.5 py-0.5 text-sm',
    lg: 'px-3 py-1 text-base'
  };

  const variantClasses = {
    default: 'bg-gray-100 text-gray-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    error: 'bg-red-100 text-red-800',
    info: 'bg-blue-100 text-blue-800'
  };

  // Auto-detect variant based on status if not explicitly provided
  const getVariant = () => {
    if (variant !== 'default') return variant;
    
    const statusLower = status.toLowerCase();
    if (statusLower.includes('success') || statusLower.includes('active') || statusLower.includes('running')) return 'success';
    if (statusLower.includes('warning') || statusLower.includes('pending')) return 'warning';
    if (statusLower.includes('error') || statusLower.includes('failed') || statusLower.includes('stopped')) return 'error';
    if (statusLower.includes('info') || statusLower.includes('info')) return 'info';
    return 'default';
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[getVariant()]} ${className}`;

  return (
    <span className={classes}>
      {status}
    </span>
  );
}