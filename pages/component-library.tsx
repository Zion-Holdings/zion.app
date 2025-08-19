import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const ComponentLibrary: React.FC = () => {
  const [activeTab, setActiveTab] = useState('buttons');

  const components = {
    buttons: [
      { name: 'Primary Button', variant: 'primary', code: 'className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"' },
      { name: 'Secondary Button', variant: 'secondary', code: 'className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300"' },
      { name: 'Success Button', variant: 'success', code: 'className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"' },
      { name: 'Danger Button', variant: 'danger', code: 'className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"' },
      { name: 'Outline Button', variant: 'outline', code: 'className="border-2 border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white"' },
    ],
    forms: [
      { name: 'Text Input', variant: 'input', code: 'className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"' },
      { name: 'Select Dropdown', variant: 'select', code: 'className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"' },
      { name: 'Checkbox', variant: 'checkbox', code: 'className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"' },
      { name: 'Radio Button', variant: 'radio', code: 'className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"' },
      { name: 'Textarea', variant: 'textarea', code: 'className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"' },
    ],
    cards: [
      { name: 'Basic Card', variant: 'basic', code: 'className="bg-white rounded-lg shadow-md p-6"' },
      { name: 'Featured Card', variant: 'featured', code: 'className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-lg p-6"' },
      { name: 'Interactive Card', variant: 'interactive', code: 'className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"' },
      { name: 'Compact Card', variant: 'compact', code: 'className="bg-white rounded-lg shadow-sm p-4"' },
    ],
    navigation: [
      { name: 'Primary Nav', variant: 'primary', code: 'className="bg-white shadow-sm border-b"' },
      { name: 'Sidebar Nav', variant: 'sidebar', code: 'className="bg-gray-800 text-white w-64 min-h-screen"' },
      { name: 'Breadcrumbs', variant: 'breadcrumbs', code: 'className="flex items-center space-x-2 text-sm text-gray-500"' },
      { name: 'Pagination', variant: 'pagination', code: 'className="flex items-center space-x-1"' },
    ],
    feedback: [
      { name: 'Alert Success', variant: 'success', code: 'className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded"' },
      { name: 'Alert Error', variant: 'error', code: 'className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded"' },
      { name: 'Alert Warning', variant: 'warning', code: 'className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded"' },
      { name: 'Alert Info', variant: 'info', code: 'className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded"' },
    ],
  };

  const getButtonClasses = (variant: string) => {
    switch (variant) {
      case 'primary': return 'bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors';
      case 'secondary': return 'bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors';
      case 'success': return 'bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors';
      case 'danger': return 'bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors';
      case 'outline': return 'border-2 border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition-colors';
      default: return 'bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors';
    }
  };

  const getFormClasses = (variant: string) => {
    switch (variant) {
      case 'input': return 'w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500';
      case 'select': return 'w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500';
      case 'checkbox': return 'w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500';
      case 'radio': return 'w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500';
      case 'textarea': return 'w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500';
      default: return 'w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500';
    }
  };

  const getCardClasses = (variant: string) => {
    switch (variant) {
      case 'basic': return 'bg-white rounded-lg shadow-md p-6';
      case 'featured': return 'bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-lg p-6';
      case 'interactive': return 'bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer';
      case 'compact': return 'bg-white rounded-lg shadow-sm p-4';
      default: return 'bg-white rounded-lg shadow-md p-6';
    }
  };

  const getAlertClasses = (variant: string) => {
    switch (variant) {
      case 'success': return 'bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded';
      case 'error': return 'bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded';
      case 'warning': return 'bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded';
      case 'info': return 'bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded';
      default: return 'bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded';
    }
  };

  const renderComponent = (component: any, category: string) => {
    switch (category) {
      case 'buttons':
        return <button className={getButtonClasses(component.variant)}>{component.name}</button>;
      case 'forms':
        if (component.variant === 'input') return <input type="text" placeholder="Enter text..." className={getFormClasses(component.variant)} />;
        if (component.variant === 'select') return <select className={getFormClasses(component.variant)}><option>Select option</option></select>;
        if (component.variant === 'checkbox') return <input type="checkbox" className={getFormClasses(component.variant)} />;
        if (component.variant === 'radio') return <input type="radio" name="radio" className={getFormClasses(component.variant)} />;
        if (component.variant === 'textarea') return <textarea placeholder="Enter text..." className={getFormClasses(component.variant)} rows={3} />;
        return null;
      case 'cards':
        return <div className={getCardClasses(component.variant)}>{component.name}</div>;
      case 'feedback':
        return <div className={getAlertClasses(component.variant)}>{component.name}</div>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Component Library - Zion App</title>
        <meta name="description" content="Comprehensive component library showcasing UI components and design patterns" />
        <meta name="keywords" content="components, UI, design system, Zion App" />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Component Library
            </h1>
            <p className="text-xl text-gray-600">
              A comprehensive collection of reusable UI components and design patterns
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="flex flex-wrap gap-2 mb-6">
              {Object.keys(components).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeTab === tab
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                  {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
                </h2>
                <div className="space-y-6">
                  {components[activeTab as keyof typeof components].map((component, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <h3 className="font-medium text-gray-800 mb-3">{component.name}</h3>
                      <div className="mb-3">
                        {renderComponent(component, activeTab)}
                      </div>
                      <div className="bg-gray-100 p-3 rounded text-sm font-mono">
                        {component.code}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Usage Guidelines</h2>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-medium text-blue-800 mb-2">Consistency</h3>
                    <p className="text-blue-700 text-sm">
                      Use components consistently across your application to maintain visual harmony and improve user experience.
                    </p>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-medium text-green-800 mb-2">Accessibility</h3>
                    <p className="text-green-700 text-sm">
                      All components are built with accessibility in mind, including proper ARIA labels and keyboard navigation.
                    </p>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h3 className="font-medium text-purple-800 mb-2">Customization</h3>
                    <p className="text-purple-700 text-sm">
                      Components can be customized using Tailwind CSS classes or by extending the base component classes.
                    </p>
                  </div>
                  
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h3 className="font-medium text-orange-800 mb-2">Responsive Design</h3>
                    <p className="text-orange-700 text-sm">
                      All components are designed to work seamlessly across different screen sizes and devices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Ready to Get Started?</h2>
            <p className="text-gray-600 mb-6">
              Explore our components and start building beautiful, consistent user interfaces.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/services" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                View Services
              </Link>
              <Link href="/contact" className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentLibrary;