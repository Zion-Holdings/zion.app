export default function ContactPage() {
  return (
    <div className="prose dark:prose-invert">
      <h1>Contact</h1>
      <p>Email us at founders@zion.example.com</p>
    </div>
  );
}
=======
import EnhancedLayout from '../components/layout/EnhancedLayout';

export default function Contact() {
  return (
    <EnhancedLayout>
      <div className="py-10">Contact Zion</div>
    </EnhancedLayout>
  );
}
=======
export default function Contact() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-2">Contact</h1>
      <p className="text-sm opacity-80">Use the form to request a quote. If you came from a provider card, the provider is pre-selected.</p>
    </div>
  );
}
