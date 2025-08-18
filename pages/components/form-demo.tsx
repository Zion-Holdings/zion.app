import Form from '../../components/Form';

export default function FormDemo() {
  const handleSubmit = (data) => {
    alert('Form submitted: ' + JSON.stringify(data, null, 2));
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Form Component Demo</h1>
        <div className="bg-slate-900 p-8 rounded-lg">
          <Form onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
}
<Link href="/components/modal-demo" className="internal-link">Related Content</Link>

<Link href="/components/pagination-demo" className="internal-link">Related Content</Link>
