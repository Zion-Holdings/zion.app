import { useTenant } from '../../context/TenantContext';

export default function EnhancedFooter() {
  const { tenant } = useTenant();
  return (
    <div className="border-t border-gray-200 dark:border-gray-800 text-sm py-6">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <p>{tenant.footerText || `© ${new Date().getFullYear()} ${tenant.brandName}`}</p>
        <div className="opacity-70">All rights reserved.</div>
      </div>
    </div>
  );
}