import { useState } from 'react';
import Head from 'next/head';

interface ServiceFormData {
  title: string;
  keyFeatures: string;
  targetAudience: string;
  industry: string;
  pricing: string;
  location: string;
}

interface GeneratedDescription {
  content: string;
  isEditing: boolean;
}

export default function ServiceDescriptionGenerator() {
  const [formData, setFormData] = useState<ServiceFormData>({
    title: '',
    keyFeatures: '',
    targetAudience: '',
    industry: '',
    pricing: '',
    location: ''
  });

  const [generatedDescription, setGeneratedDescription] = useState<GeneratedDescription>({
    content: '',
    isEditing: false
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/generate-service-description', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to generate description');
      }

      const data = await response.json();
      setGeneratedDescription({
        content: data.description,
        isEditing: false
      });
    } catch (err) {
      setError('Failed to generate description. Please try again.');
      console.error('Error generating description:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEditToggle = () => {
    setGeneratedDescription(prev => ({
      ...prev,
      isEditing: !prev.isEditing
    }));
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setGeneratedDescription(prev => ({
      ...prev,
      content: e.target.value
    }));
  };

  const handleAccept = () => {
    alert('Description accepted! You can now copy and use it.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Head>
        <title>Service Description Generator - Bolt.new</title>
        <meta name="description" content="Generate professional service descriptions using AI" />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Service Description Generator
            </h1>
            <p className="text-lg text-gray-600">
              Input your service details and let AI generate a professional description
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Service Details
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Title *
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., Professional Web Development Services"
                  />
                </div>

                <div>
                  <label htmlFor="keyFeatures" className="block text-sm font-medium text-gray-700 mb-2">
                    Key Features *
                  </label>
                  <textarea
                    id="keyFeatures"
                    name="keyFeatures"
                    value={formData.keyFeatures}
                    onChange={handleInputChange}
                    required
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., Responsive design, SEO optimization, 24/7 support"
                  />
                </div>

                <div>
                  <label htmlFor="targetAudience" className="block text-sm font-medium text-gray-700 mb-2">
                    Target Audience
                  </label>
                  <input
                    type="text"
                    id="targetAudience"
                    name="targetAudience"
                    value={formData.targetAudience}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., Small businesses, startups, e-commerce"
                  />
                </div>

                <div>
                  <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2">
                    Industry
                  </label>
                  <input
                    type="text"
                    id="industry"
                    name="industry"
                    value={formData.industry}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., Technology, Healthcare, Finance"
                  />
                </div>

                <div>
                  <label htmlFor="pricing" className="block text-sm font-medium text-gray-700 mb-2">
                    Pricing Model
                  </label>
                  <input
                    type="text"
                    id="pricing"
                    name="pricing"
                    value={formData.pricing}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., Hourly rates, project-based, subscription"
                  />
                </div>

                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., Remote, Local, Worldwide"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isLoading ? 'Generating...' : 'Generate Description'}
                </button>

                {error && (
                  <div className="text-red-600 text-sm mt-2">
                    {error}
                  </div>
                )}
              </form>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Generated Description
              </h2>

              {generatedDescription.content ? (
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium text-gray-900">
                      Professional Service Description
                    </h3>
                    <div className="flex space-x-2">
                      <button
                        onClick={handleEditToggle}
                        className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                      >
                        {generatedDescription.isEditing ? 'Preview' : 'Edit'}
                      </button>
                      <button
                        onClick={handleAccept}
                        className="text-green-600 hover:text-green-700 text-sm font-medium"
                      >
                        Accept
                      </button>
                    </div>
                  </div>

                  {generatedDescription.isEditing ? (
                    <textarea
                      value={generatedDescription.content}
                      onChange={handleDescriptionChange}
                      rows={12}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  ) : (
                    <div className="bg-gray-50 p-4 rounded-md">
                      <p className="text-gray-800 whitespace-pre-wrap">
                        {generatedDescription.content}
                      </p>
                    </div>
                  )}

                  <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                    <button
                      onClick={() => navigator.clipboard.writeText(generatedDescription.content)}
                      className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                    >
                      Copy to Clipboard
                    </button>
                    <span className="text-xs text-gray-500">
                      {generatedDescription.content.length} characters
                    </span>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="text-gray-400 mb-4">
                    <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <p className="text-gray-500">
                    Fill out the form and click &quot;Generate Description&quot; to create a professional service description.
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Tips for Better Results
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
              <ul className="space-y-2">
                <li>• Be specific about your key features and benefits</li>
                <li>• Include your target audience to make it more relevant</li>
                <li>• Mention your industry expertise if applicable</li>
              </ul>
              <ul className="space-y-2">
                <li>• Specify your pricing model for transparency</li>
                <li>• Include service location/coverage area</li>
                <li>• Use clear, professional language</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
