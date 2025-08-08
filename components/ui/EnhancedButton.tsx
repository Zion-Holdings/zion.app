import React from 'react';
import clsx from 'clsx';

export type EnhancedButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
};

const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-md transition focus:outline-none focus:ring-2 focus:ring-offset-2 min-h-[44px]';
const sizeStyles: Record<NonNullable<EnhancedButtonProps['size']>, string> = {
  sm: 'text-sm px-3 py-2',
  md: 'text-sm px-4 py-3',
  lg: 'text-base px-5 py-3',
};
const variantStyles: Record<NonNullable<EnhancedButtonProps['variant']>, string> = {
  primary: 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-400',
  secondary: 'bg-gray-100 hover:bg-gray-200 text-gray-900 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-100',
  ghost: 'bg-transparent hover:bg-gray-100 text-gray-900 focus:ring-gray-300 dark:hover:bg-gray-800 dark:text-gray-100',
};

export default function EnhancedButton({
  className,
  variant = 'primary',
  size = 'md',
  fullWidth,
  ...props
}: EnhancedButtonProps) {
  return (
    <button
      className={clsx(baseStyles, sizeStyles[size], variantStyles[variant], fullWidth && 'w-full', className)}
      {...props}
    />
  );
}