import { useState } from 'react';
import Head from 'next/head';
import Pagination from '../components/Pagination';
import Form from '../components/Form';
import Modal from '../components/Modal';
import Button from '../components/Button';
import Card from '../components/Card';

export default function ComponentPlayground() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({});

  const handleFormSubmit = (data) => {
    setFormData(data);
    alert('Form submitted! Check console for data.');
    console.log('Form data:', data);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Head>
        <title>Component Playground | Zion Tech Group</title>
        <meta name="description" content="Interactive playground to test and explore our UI components." />
      
        <meta property="og:title" content="Component Playground" />
        <meta property="og:description" content="Component Playground — automatically suggested description." />
        <meta name="twitter:card" content="summary_large_image" /></Head>
      
      <main className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
            Component Playground
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Test, explore, and interact with all our UI components in real-time
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Pagination Demo */}
            <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Pagination Component</h3>
              <div className="bg-slate-800 p-6 rounded-lg">
                <Pagination 
                  currentPage={currentPage}
                  totalPages={10}
                  onPageChange={setCurrentPage}
                />
              </div>
              <p className="text-white/60 text-sm mt-2">
                Current page: {currentPage}
              </p>
            </div>

            {/* Form Demo */}
            <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Form Component</h3>
              <Form onSubmit={handleFormSubmit} />
            </div>

            {/* Button Variants */}
            <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Button Variants</h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button disabled>Disabled</Button>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Modal Demo */}
            <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Modal Component</h3>
              <Button onClick={() => setIsModalOpen(true)}>
                Open Modal
              </Button>
              
              <Modal 
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Welcome to the Playground!"
              >
                <p className="mb-4">This is a demo of our Modal component.</p>
                <p className="mb-6">You can close it by clicking the X, pressing Escape, or clicking outside.</p>
                <Button onClick={() => setIsModalOpen(false)}>
                  Close Modal
                </Button>
              </Modal>
            </div>

            {/* Card Demo */}
            <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Card Component</h3>
              <div className="space-y-4">
                <Card 
                  title="Sample Card"
                  description="This is a sample card component with some content."
                  className="bg-slate-800"
                />
                <Card 
                  title="Another Card"
                  description="Cards are great for displaying structured information."
                  className="bg-slate-800"
                />
              </div>
            </div>

            {/* Form Data Display */}
            {Object.keys(formData).length > 0 && (
              <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Form Data</h3>
                <div className="bg-slate-800 p-4 rounded-lg">
                  <pre className="text-sm text-cyan-400">
                    {JSON.stringify(formData, null, 2)}
                  </pre>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}