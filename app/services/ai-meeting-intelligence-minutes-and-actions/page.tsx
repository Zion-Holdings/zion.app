import { Metadata } from 'next';
import Link from 'next/link';

export const metadata = {
  title: 'AI Meeting Intelligence: Minutes and Actions | Zion Tech Group',
  description: 'Turn meetings into structured minutes, action items, owners, and follow-up workflows with AI.',
};

export default function Page() {
  return (
    <section className="section">
      <div className="container">
        <h1>AI Meeting Intelligence: Minutes and Actions</h1>
        <p>Automatically capture meeting outcomes, assign owners, and drive follow-through with AI-generated minutes and action tracking.</p>
        <ul>
          <li>Live transcription and summary</li>
          <li>Action items with owners and due dates</li>
          <li>Follow-up workflow automation</li>
        </ul>
        <p>
          <Link className="btn btn-primary" href="/contact/">Request a demo</Link>
          <Link className="btn btn-secondary" href="/services/">All services</Link>
        </p>
      </div>
    </section>
  );
}
