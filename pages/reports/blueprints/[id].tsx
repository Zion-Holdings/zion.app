import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

const BlueprintPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  // Mock blueprint data based on the ID
  const getBlueprintData = (blueprintId: string) => {
    const timestamp = blueprintId.replace('blueprint-', '');
    const date = new Date(
      parseInt(timestamp.substring(0, 4)),
      parseInt(timestamp.substring(4, 6)) - 1,
      parseInt(timestamp.substring(6, 8)),
      parseInt(timestamp.substring(8, 10)),
      parseInt(timestamp.substring(10, 12)),
      parseInt(timestamp.substring(12, 14))
    );

    return {
      id: blueprintId,
      title: `Automation Blueprint ${blueprintId}`,
      description: `Comprehensive automation blueprint generated on ${date.toLocaleDateString()}`,
      date: date.toLocaleDateString(),
      time: date.toLocaleTimeString(),
      status: 'completed',
      components: [
        'Content Generation Pipeline',
        'SEO Optimization Engine',
        'Security Monitoring System',
        'Performance Testing Framework',
        'Backup and Recovery System'
      ],
      metrics: {
        efficiency: '94%',
        reliability: '99.9%',
        scalability: 'High',
        costOptimization: 'Medium'
      },
      recommendations: [
        'Implement additional monitoring for edge cases',
        'Consider adding machine learning for pattern recognition',
        'Optimize resource allocation during peak hours',
        'Enhance error handling and recovery mechanisms'
      ]
    };
  };

  if (!id || typeof id !== 'string') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Blueprint Not Found</h1>
          <Link href="/reports" className="text-blue-600 hover:text-blue-800">
            Back to Reports
          </Link>
        </div>
      </div>
    );
  }

  const blueprint = getBlueprintData(id);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Head>
        <title>{blueprint.title} - bolt.new.zion.app</title>
        <meta name="description" content={blueprint.description} />
        <meta name="keywords" content="blueprint, automation, report, analysis" />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {blueprint.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {blueprint.description}
            </p>
            <div className="text-lg text-gray-500 mt-2">
              Generated on {blueprint.date} at {blueprint.time}
            </div>
          </div>

          {/* Navigation */}
          <nav className="mb-8">
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Home
              </Link>
              <Link href="/reports" className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                Reports
              </Link>
              <Link href="/live-dashboard" className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                Dashboard
              </Link>
            </div>
          </nav>

          {/* Blueprint Overview */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Blueprint Overview</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Blueprint Details</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Blueprint ID:</span>
                    <span className="font-mono text-sm bg-gray-100 px-2 py-1 rounded">
                      {blueprint.id}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Status:</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                      {blueprint.status}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Generated:</span>
                    <span>{blueprint.date} {blueprint.time}</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Metrics</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 border border-gray-200 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">{blueprint.metrics.efficiency}</div>
                    <div className="text-sm text-gray-600">Efficiency</div>
                  </div>
                  <div className="text-center p-4 border border-gray-200 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">{blueprint.metrics.reliability}</div>
                    <div className="text-sm text-gray-600">Reliability</div>
                  </div>
                  <div className="text-center p-4 border border-gray-200 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">{blueprint.metrics.scalability}</div>
                    <div className="text-sm text-gray-600">Scalability</div>
                  </div>
                  <div className="text-center p-4 border border-gray-200 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">{blueprint.metrics.costOptimization}</div>
                    <div className="text-sm text-gray-600">Cost Optimization</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Components */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Automation Components</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blueprint.components.map((component, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6 text-center">
                  <div className="text-3xl mb-4">🚀</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{component}</h3>
                  <div className="text-sm text-gray-500">
                    Component {index + 1} of {blueprint.components.length}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recommendations */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Recommendations</h2>
            <div className="space-y-4">
              {blueprint.recommendations.map((recommendation, index) => (
                <div key={index} className="flex items-start gap-4 p-4 border border-gray-200 rounded-lg">
                  <div className="text-2xl">💡</div>
                  <div>
                    <p className="font-semibold text-gray-900">Recommendation {index + 1}</p>
                    <p className="text-gray-600">{recommendation}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Implementation Status */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Implementation Status</h2>
            <div className="space-y-4">
              {blueprint.components.map((component, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-gray-900">{component}</h3>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                      Implemented
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                  <div className="text-sm text-gray-500 mt-2">
                    Completed on {blueprint.date}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Related Resources */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Related Resources</h2>
            <p className="text-blue-700 mb-6">
              Explore related automation resources and documentation.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/automation" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                View Automation
              </Link>
              <Link href="/reports" className="px-6 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors">
                All Reports
              </Link>
              <Link href="/live-dashboard" className="px-6 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors">
                Live Dashboard
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlueprintPage;