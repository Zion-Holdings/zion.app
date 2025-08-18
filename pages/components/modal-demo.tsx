import { useState } from 'react';
import Modal from '../../components/Modal';
import Button from '../../components/Button';

export default function ModalDemo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Modal Component Demo</h1>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        
        <Modal 
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Welcome to Zion Tech Group"
        >
          <p className="mb-4">This is a demo of our Modal component.</p>
          <p className="mb-6">It includes backdrop, keyboard navigation, and accessibility features.</p>
          <Button onClick={() => setIsOpen(false)}>Close</Button>
        </Modal>
      </div>
    </div>
  );
}

<Link href="/components/form-demo" className="internal-link">Related Content</Link>

<Link href="/components/pagination-demo" className="internal-link">Related Content</Link>
