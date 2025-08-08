import { useState } from 'react';
import DashboardLayout from '../components/layout/Layout';
import EnhancedCard from '../components/ui/EnhancedCard';
import type { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const cookie = req.headers.cookie || '';
  const role = cookie.split(';').map(s => s.trim()).find(s => s.startsWith('zion_role='))?.split('=')[1];
  if (!role || (role !== 'franchisee' && role !== 'superadmin')) {
    return { redirect: { destination: '/unauthorized', permanent: false } };
  }
  return { props: {} };
};

export default function FranchisePortalPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <section id="apply" className="space-y-3">
          <h1 className="text-2xl font-semibold">Franchise / White-Label Toolkit</h1>
          <p className="text-gray-600 dark:text-gray-400">Apply to launch a Zion franchise in your country or industry.</p>
          <EnhancedCard title="Franchise Application">
            {submitted ? (
              <div className="text-green-600">Application received. We will get back to you shortly.</div>
            ) : (
              <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                <div>
                  <label className="block text-sm mb-1">Name</label>
                  <input className="w-full border rounded px-3 py-2 bg-white dark:bg-gray-900" required />
                </div>
                <div>
                  <label className="block text-sm mb-1">Email</label>
                  <input type="email" className="w-full border rounded px-3 py-2 bg-white dark:bg-gray-900" required />
                </div>
                <div>
                  <label className="block text-sm mb-1">Region / Country</label>
                  <input className="w-full border rounded px-3 py-2 bg-white dark:bg-gray-900" required />
                </div>
                <div>
                  <label className="block text-sm mb-1">Industry Focus</label>
                  <input className="w-full border rounded px-3 py-2 bg-white dark:bg-gray-900" placeholder="e.g., HealthTech, FinTech" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm mb-1">Background & Go-To-Market Plan</label>
                  <textarea className="w-full border rounded px-3 py-2 bg-white dark:bg-gray-900" rows={4} />
                </div>
                <div className="md:col-span-2 flex justify-end">
                  <button type="submit" className="px-4 py-2 rounded bg-gray-900 text-white">Submit Application</button>
                </div>
              </form>
            )}
          </EnhancedCard>
        </section>

        <section id="toolkit" className="space-y-3">
          <h2 className="text-xl font-semibold">Auto-Generated Assets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <EnhancedCard title="Landing Page Template">
              <div className="text-sm text-gray-600 dark:text-gray-400">Starter landing page with copy and components.</div>
              <div className="mt-3"><button className="px-3 py-1.5 rounded bg-gray-900 text-white">Generate</button></div>
            </EnhancedCard>
            <EnhancedCard title="Custom Subdomain">
              <div className="text-sm text-gray-600 dark:text-gray-400">Provision `yourbrand.zion.app`</div>
              <div className="mt-3"><button className="px-3 py-1.5 rounded bg-gray-900 text-white">Reserve</button></div>
            </EnhancedCard>
            <EnhancedCard title="Demo Dataset">
              <div className="text-sm text-gray-600 dark:text-gray-400">Seed sample listings, users, and transactions.</div>
              <div className="mt-3"><button className="px-3 py-1.5 rounded bg-gray-900 text-white">Seed</button></div>
            </EnhancedCard>
            <EnhancedCard title="Starter Walkthrough (Zion Academy)">
              <div className="text-sm text-gray-600 dark:text-gray-400">Self-paced onboarding module.</div>
              <div className="mt-3"><button className="px-3 py-1.5 rounded bg-gray-900 text-white">Start</button></div>
            </EnhancedCard>
          </div>
        </section>

        <section id="admin" className="space-y-3">
          <h2 className="text-xl font-semibold">Admin Dashboard</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <EnhancedCard title="Instances">
              <div className="text-sm">Zion Africa: Active</div>
              <div className="text-sm">Zion LATAM: Provisioning</div>
              <div className="text-sm">Zion HealthTech: Active</div>
            </EnhancedCard>
            <EnhancedCard title="Analytics Sync">
              <div className="text-sm">Last synced: 12 mins ago</div>
              <div className="mt-2"><button className="px-3 py-1.5 rounded bg-gray-900 text-white">Sync Now</button></div>
            </EnhancedCard>
            <EnhancedCard title="Cross-Promotion">
              <div className="text-sm">Enable marketplace cross-promotion.</div>
              <div className="mt-2"><button className="px-3 py-1.5 rounded bg-gray-900 text-white">Configure</button></div>
            </EnhancedCard>
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}