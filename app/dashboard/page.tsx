import { Breadcrumb } from '@/components/Breadcrumb';
import Link from 'next/link';

export const metadata = {
  title: 'Dashboard | Zion Tech Group',
  description: 'Central dashboard for services, outreach, and operational metrics.'
};

export default function Dashboard() {
  return (
    <div>
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Dashboard' }]} />
      <div className="container">
        <h1>Dashboard</h1>
        <p className="lead">Business and operations overview for AI/IT initiatives and lead pipeline.</p>
        <div className="grid">
          <div className="card">
            <h3>Services</h3>
            <p>Browse current AI/IT service offerings.</p>
            <Link href="/services/">View services</Link>
          </div>
          <div className="card">
            <h3>Outreach</h3>
            <p>Review active outreach, follow-ups, and response rates.</p>
            <Link href="/contact/">Contact us</Link>
          </div>
          <div className="card">
            <h3>Performance</h3>
            <p>Monitor site integrity, SEO, and conversion metrics.</p>
            <Link href="/blog/">Read insights</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
