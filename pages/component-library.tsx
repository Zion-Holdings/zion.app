import Head from 'next/head';
import Link from 'next/link';

export default function ComponentLibrary() {
  const components = [
    {
      name: 'Pagination',
      description: 'Advanced pagination with customizable styling and accessibility features',
      usage: 'Use for navigating through large datasets or content lists',
      props: ['currentPage', 'totalPages', 'onPageChange', 'className'],
      category: 'Navigation'
    },
    {
      name: 'Form',
      description: 'Reusable form component with built-in validation and state management',
      usage: 'Perfect for contact forms, search forms, and data input',
      props: ['onSubmit', 'className'],
      category: 'Input'
    },
    {
      name: 'Modal',
      description: 'Accessible modal component with backdrop and keyboard navigation',
      usage: 'Display important information, confirmations, or forms',
      props: ['isOpen', 'onClose', 'title', 'children', 'className'],
      category: 'Overlay'
    },
    {
      name: 'Card',
      description: 'Content card component for displaying structured information',
      usage: 'Showcase content, products, or information in a consistent layout',
      props: ['title', 'description', 'image', 'className'],
      category: 'Layout'
    },
    {
      name: 'Button',
      description: 'Versatile button component with multiple variants and states',
      usage: 'Primary actions, form submissions, and interactive elements',
      props: ['children', 'variant', 'onClick', 'type', 'disabled', 'className'],
      category: 'Interactive'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Head>
        <title>Component Library | Zion Tech Group</title>
        <meta name="description" content="Comprehensive component library with documentation, examples, and usage guidelines." />
      </Head>
      
      <main className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Component Library</h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Build beautiful, accessible, and performant user interfaces with our component library
          </p>
        </div>

        <div className="space-y-8">
          {components.map((component) => (
            <div key={component.name} className="bg-slate-900/50 border border-white/10 rounded-lg p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">
                      {component.category}
                    </span>
                    <h3 className="text-2xl font-semibold">{component.name}</h3>
                  </div>
                  <p className="text-white/70 text-lg">{component.description}</p>
                </div>
                <Link 
                  href={`/components/${component.name.toLowerCase()}-demo`}
                  className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  View Demo
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2 text-cyan-400">Usage</h4>
                  <p className="text-white/80">{component.usage}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-cyan-400">Props</h4>
                  <div className="flex flex-wrap gap-2">
                    {component.props.map((prop) => (
                      <span key={prop} className="px-2 py-1 bg-slate-800 text-white/80 text-sm rounded">
                        {prop}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}