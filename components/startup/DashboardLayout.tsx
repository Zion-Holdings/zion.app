import React from 'react';

export type DashboardLayoutProps = {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
};

export default function DashboardLayout({ title = 'Zion EnterpriseOS', subtitle, children }: DashboardLayoutProps) {
  return (
    <div className="grid grid-cols-12 gap-6">
      <aside className="col-span-12 md:col-span-3 lg:col-span-2 space-y-4">
        <div className="enhanced-card">
          <h2 className="text-sm font-semibold mb-3">Navigation</h2>
          <ul className="space-y-2 text-sm">
            <li><a className="enhanced-hover block" href="#company-formation">Company Formation</a></li>
            <li><a className="enhanced-hover block" href="#founder-dashboard">Founder Dashboard</a></li>
            <li><a className="enhanced-hover block" href="#ai-cofounder">AI Co-Founder</a></li>
            <li><a className="enhanced-hover block" href="#hiring-scaling">Hiring + Scaling</a></li>
            <li><a className="enhanced-hover block" href="#treasury">Treasury</a></li>
            <li><a className="enhanced-hover block" href="#roles">Role Control</a></li>
          </ul>
        </div>
        <div className="enhanced-card">
          <h2 className="text-sm font-semibold mb-3">Metrics</h2>
          <div className="text-xs space-y-2">
            <div className="flex items-center justify-between"><span>Incorporation</span><span className="font-semibold">Draft</span></div>
            <div className="flex items-center justify-between"><span>Investors</span><span className="font-semibold">0</span></div>
            <div className="flex items-center justify-between"><span>Hires</span><span className="font-semibold">0</span></div>
            <div className="flex items-center justify-between"><span>Treasury</span><span className="font-semibold">$0</span></div>
          </div>
        </div>
      </aside>
      <section className="col-span-12 md:col-span-9 lg:col-span-10 space-y-6">
        <header className="enhanced-card">
          <h1 className="text-xl font-bold">{title}</h1>
          {subtitle && <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{subtitle}</p>}
        </header>
        {children}
      </section>
    </div>
  );
}