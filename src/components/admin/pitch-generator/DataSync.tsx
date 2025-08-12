import React from 'react';

interface DataSyncProps {
  // Props can be added later for passing actual data
}

const DataSync: React.FC<DataSyncProps> = () => {
  // Placeholder data
  const placeholderData = {
    activeUsers30d: '10,000+',
    gmv: '$1.2M',
    mrr: '$100K',
    yoyGrowth: '150%',
    totalCompletedProjects: '500+',
    globalReach: '75+ Countries',
    marketplaceConversionFunnel: {
      visitors: 100000,
      signups: 5000,
      activeListings: 1000,
      completedTransactions: 200,
    },
    notableClients: [
      { name: 'Client A', caseStudyUrl: '#' },
      { name: 'Client B', caseStudyUrl: '#' },
      { name: 'Client C', caseStudyUrl: '#' },
    ],
  };

  return (
    <div className="p-6 bg-white shadow rounded-lg">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Marketplace Performance Data (Auto-Pulled)</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Data Item */}
        <div className="bg-gray-50 p-4 rounded-md">
          <h3 className="text-sm font-medium text-gray-500">Active Users (30d)</h3>
          <p className="mt-1 text-2xl font-semibold text-gray-900">{placeholderData.activeUsers30d}</p>
        </div>
        {/* Data Item */}
        <div className="bg-gray-50 p-4 rounded-md">
          <h3 className="text-sm font-medium text-gray-500">GMV (Gross Merchandise Volume)</h3>
          <p className="mt-1 text-2xl font-semibold text-gray-900">{placeholderData.gmv}</p>
        </div>
        {/* Data Item */}
        <div className="bg-gray-50 p-4 rounded-md">
          <h3 className="text-sm font-medium text-gray-500">MRR (Monthly Recurring Revenue)</h3>
          <p className="mt-1 text-2xl font-semibold text-gray-900">{placeholderData.mrr}</p>
        </div>
        {/* Data Item */}
        <div className="bg-gray-50 p-4 rounded-md">
          <h3 className="text-sm font-medium text-gray-500">Year-over-Year Growth</h3>
          <p className="mt-1 text-2xl font-semibold text-gray-900">{placeholderData.yoyGrowth}</p>
        </div>
        {/* Data Item */}
        <div className="bg-gray-50 p-4 rounded-md">
          <h3 className="text-sm font-medium text-gray-500">Total Completed Projects</h3>
          <p className="mt-1 text-2xl font-semibold text-gray-900">{placeholderData.totalCompletedProjects}</p>
        </div>
        {/* Data Item */}
        <div className="bg-gray-50 p-4 rounded-md">
          <h3 className="text-sm font-medium text-gray-500">Global Reach</h3>
          <p className="mt-1 text-2xl font-semibold text-gray-900">{placeholderData.globalReach}</p>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-medium text-gray-900">Marketplace Conversion Funnel</h3>
        {/* Basic Funnel Visualization Placeholder */}
        <div className="mt-2 bg-gray-50 p-4 rounded-md">
          <p>Visitors: {placeholderData.marketplaceConversionFunnel.visitors}</p>
          <p>Signups: {placeholderData.marketplaceConversionFunnel.signups}</p>
          <p>Active Listings: {placeholderData.marketplaceConversionFunnel.activeListings}</p>
          <p>Completed Transactions: {placeholderData.marketplaceConversionFunnel.completedTransactions}</p>
          {/* A proper funnel chart would be implemented later */}
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-medium text-gray-900">Notable Clients / Case Studies</h3>
        <ul className="mt-2 space-y-2">
          {placeholderData.notableClients.map(client => (
            <li key={client.name} className="bg-gray-50 p-3 rounded-md hover:bg-gray-100">
              <a href={client.caseStudyUrl} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800">
                {client.name} (View Case Study)
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-8 text-center">
        <button
            type="button"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            // onClick={onNextStep} // Assuming a prop to go to the next step
        >
            Next: Generate Pitch Deck
        </button>
      </div>
    </div>
  );
};

export default DataSync;
