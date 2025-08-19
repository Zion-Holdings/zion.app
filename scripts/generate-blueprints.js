const fs = require('fs');
const path = require('path');

// Blueprint IDs from the README
const blueprintIds = [
  'blueprint-2025-08-18-122901',
  'blueprint-2025-08-18-122931',
  'blueprint-2025-08-18-122952',
  'blueprint-2025-08-18-123006',
  'blueprint-2025-08-18-123030',
  'blueprint-2025-08-18-123102',
  'blueprint-2025-08-18-123152',
  'blueprint-2025-08-18-123222',
  'blueprint-2025-08-18-123247',
  'blueprint-2025-08-18-123317',
  'blueprint-2025-08-18-123341',
  'blueprint-2025-08-18-123407',
  'blueprint-2025-08-18-123429',
  'blueprint-2025-08-18-123450',
  'blueprint-2025-08-18-123513',
  'blueprint-2025-08-18-123531',
  'blueprint-2025-08-18-123543',
  'blueprint-2025-08-18-123610',
  'blueprint-2025-08-18-123649',
  'blueprint-2025-08-18-123715',
  'blueprint-2025-08-18-123736',
  'blueprint-2025-08-18-123801',
  'blueprint-2025-08-18-123824',
  'blueprint-2025-08-18-123845',
  'blueprint-2025-08-18-123909',
  'blueprint-2025-08-18-123932',
  'blueprint-2025-08-18-123955',
  'blueprint-2025-08-18-124005',
  'blueprint-2025-08-18-124029',
  'blueprint-2025-08-18-124039',
  'blueprint-2025-08-18-124106',
  'blueprint-2025-08-18-124149',
  'blueprint-2025-08-18-124214',
  'blueprint-2025-08-18-124235',
  'blueprint-2025-08-18-124257',
  'blueprint-2025-08-18-130835',
  'blueprint-2025-08-18-130857',
  'blueprint-2025-08-18-130921',
  'blueprint-2025-08-18-130940',
  'blueprint-2025-08-18-131415',
  'blueprint-2025-08-18-131441',
  'blueprint-2025-08-18-131506',
  'blueprint-2025-08-18-131533',
  'blueprint-2025-08-18-131617',
  'blueprint-2025-08-18-131658',
  'blueprint-2025-08-18-131720',
  'blueprint-2025-08-18-131741',
  'blueprint-2025-08-18-131802',
  'blueprint-2025-08-18-131821',
  'blueprint-2025-08-18-131847',
  'blueprint-2025-08-18-131910',
  'blueprint-2025-08-18-132004',
  'blueprint-2025-08-18-132029',
  'blueprint-2025-08-18-132105',
  'blueprint-2025-08-18-132208',
  'blueprint-2025-08-18-132331',
  'blueprint-2025-08-18-132426',
  'blueprint-2025-08-18-132558',
  'blueprint-2025-08-18-132615',
  'blueprint-2025-08-18-132719',
  'blueprint-2025-08-18-132754',
  'blueprint-2025-08-18-132824',
  'blueprint-2025-08-18-132923',
  'blueprint-2025-08-18-132948',
  'blueprint-2025-08-18-133027',
  'blueprint-2025-08-18-133059',
  'blueprint-2025-08-18-133127',
  'blueprint-2025-08-18-133201',
  'blueprint-2025-08-18-133316',
  'blueprint-2025-08-18-133351',
  'blueprint-2025-08-18-133444',
  'blueprint-2025-08-18-133512',
  'blueprint-2025-08-18-133622',
  'blueprint-2025-08-18-133636',
  'blueprint-2025-08-18-133714',
  'blueprint-2025-08-18-133757',
  'blueprint-2025-08-18-133828',
  'blueprint-2025-08-18-133857',
  'blueprint-2025-08-18-133929',
  'blueprint-2025-08-18-134004',
  'blueprint-2025-08-18-134033',
  'blueprint-2025-08-18-134148',
  'blueprint-2025-08-18-134223',
  'blueprint-2025-08-18-134254',
  'blueprint-2025-08-18-134328',
  'blueprint-2025-08-18-134401',
  'blueprint-2025-08-18-134426',
  'blueprint-2025-08-18-134451',
  'blueprint-2025-08-18-134518',
  'blueprint-2025-08-18-134544',
  'blueprint-2025-08-18-134638',
  'blueprint-2025-08-18-134654',
  'blueprint-2025-08-18-134739',
  'blueprint-2025-08-18-134807',
  'blueprint-2025-08-18-134837',
  'blueprint-2025-08-18-134901',
  'blueprint-2025-08-18-134923',
  'blueprint-2025-08-18-135003',
  'blueprint-2025-08-18-135026',
  'blueprint-2025-08-18-135055'
];

const blueprintTemplate = (id, timestamp) => `import React from 'react';
import Head from 'next/head';

const ${id.replace(/-/g, '').replace(/^blueprint/, 'Blueprint')}: React.FC = () => {
  return (
    <>
      <Head>
        <title>${id.replace(/-/g, ' ').replace(/^blueprint/, 'Blueprint')} - Zion AI Marketplace</title>
        <meta name="description" content="Strategic blueprint for Zion AI Marketplace development and growth" />
        <meta name="keywords" content="blueprint, strategy, Zion AI, marketplace, development" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
        {/* Header */}
        <header className="bg-black/20 backdrop-blur-sm border-b border-blue-500/30">
          <div className="container mx-auto px-6 py-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Strategic Blueprint
                </h1>
                <p className="text-xl text-gray-300 mt-4">
                  Zion AI Marketplace Development Roadmap
                </p>
                <p className="text-sm text-gray-400 mt-2">
                  Generated: ${timestamp}
                </p>
              </div>
              
              <div className="text-right">
                <div className="text-2xl font-bold text-blue-400">Blueprint</div>
                <div className="text-sm text-gray-400">${id}</div>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="container mx-auto px-6 py-12">
          <div className="bg-gray-800/50 rounded-lg p-8 border border-blue-500/30 text-center">
            <div className="text-6xl mb-6">📋</div>
            <h2 className="text-3xl font-bold text-blue-400 mb-4">Blueprint Generated</h2>
            <p className="text-gray-300 text-lg mb-6">
              This is an automatically generated blueprint page for ${id}.
            </p>
            <p className="text-gray-400">
              Generated on ${timestamp}
            </p>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-black/20 backdrop-blur-sm border-t border-blue-500/30 mt-20">
          <div className="container mx-auto px-6 py-8">
            <div className="text-center text-gray-400">
              <p>This blueprint is a living document updated quarterly</p>
              <p className="mt-2">
                <a href="/reports" className="text-blue-400 hover:text-blue-300">
                  View All Reports →
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ${id.replace(/-/g, '').replace(/^blueprint/, 'Blueprint')};
`;

// Generate blueprint pages
blueprintIds.forEach((id, index) => {
  // Parse timestamp from ID
  const timestamp = id.replace('blueprint-', '').replace(/-/g, ' ').replace(/(\\d{4})(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{2})/, '$1-$2-$3 $4:$5:$6 UTC');
  
  const content = blueprintTemplate(id, timestamp);
  const filePath = path.join(__dirname, '..', 'pages', 'reports', 'blueprints', `${id}.tsx`);
  
  fs.writeFileSync(filePath, content);
  console.log(`Generated: ${id}.tsx`);
});

console.log(`\\nGenerated ${blueprintIds.length} blueprint pages successfully!`);