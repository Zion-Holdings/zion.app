import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';

export const metadata = {
  title: 'Academy | Zion Tech Group',
  description: 'Learning paths for AI, cloud, security, and modern IT operations.'
};

export default function Academy() {
  return (
    <div>
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Academy' }]} />
      <div className="container">
        <h1>Academy</h1>
        <p className="lead">Practical courses and guides for implementing AI/IT services.</p>
        <div className="grid">
          <div className="card">
            <h3>AI Basics</h3>
            <p>Foundations for automation, agents, and assistive tooling.</p>
            <Link href="/blog/ai-consulting-services-for-enterprise-it-in-2026/">AI Consulting</Link>
          </div>
          <div className="card">
            <h3>Cloud & Security</h3>
            <p>Implement safer cloud and zero-trust architectures.</p>
            <Link href="/services/zero-trust-network-access/">Zero Trust Access</Link>
          </div>
          <div className="card">
            <h3>Operations</h3>
            <p>Reduce cost and improve reliability with observability.</p>
            <Link href="/services/ai-document-understanding/">Document Processing</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
