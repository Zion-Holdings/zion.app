const fs = require('fs');
const path = require('path');

const componentTemplates = {
  'Layout.tsx': `import React from 'react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
};

export default Layout;`,

  'AuthLayout.tsx': `import React from 'react';

const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;`,

  'EnhancedLayout.tsx': `import React from 'react';

const EnhancedLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        {children}
      </div>
    </div>
  );
};

export default EnhancedLayout;`,

  'EnhancedNavigation.tsx': `import React from 'react';

const EnhancedNavigation: React.FC = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-bold text-gray-800">Logo</div>
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Services</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default EnhancedNavigation;`,

  'AnimatedBackground.tsx': `import React from 'react';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-20"></div>
    </div>
  );
};

export default AnimatedBackground;`,

  'EnhancedButton.tsx': `import React from 'react';

interface EnhancedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const EnhancedButton: React.FC<EnhancedButtonProps> = ({ children, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={\`px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors \${className}\`}
    >
      {children}
    </button>
  );
};

export default EnhancedButton;`,

  'EnhancedCard.tsx': `import React from 'react';

interface EnhancedCardProps {
  children: React.ReactNode;
  className?: string;
}

const EnhancedCard: React.FC<EnhancedCardProps> = ({ children, className = '' }) => {
  return (
    <div className={\`bg-white rounded-lg shadow-md p-6 \${className}\`}>
      {children}
    </div>
  );
};

export default EnhancedCard;`,

  'EnhancedLoading.tsx': `import React from 'react';

const EnhancedLoading: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
    </div>
  );
};

export default EnhancedLoading;`,

  'EnhancedMarketplaceCard.tsx': `import React from 'react';

interface MarketplaceCardProps {
  title: string;
  description: string;
  price: string;
}

const EnhancedMarketplaceCard: React.FC<MarketplaceCardProps> = ({ title, description, price }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="text-xl font-bold text-blue-600">{price}</div>
    </div>
  );
};

export default EnhancedMarketplaceCard;`,

  'FuturisticCard.tsx': `import React from 'react';

interface FuturisticCardProps {
  children: React.ReactNode;
  className?: string;
}

const FuturisticCard: React.FC<FuturisticCardProps> = ({ children, className = '' }) => {
  return (
    <div className={\`bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-6 text-white \${className}\`}>
      {children}
    </div>
  );
};

export default FuturisticCard;`,

  'FuturisticHero.tsx': `import React from 'react';

const FuturisticHero: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6">Welcome to the Future</h1>
        <p className="text-xl mb-8">Discover innovative solutions for tomorrow's challenges</p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default FuturisticHero;`,

  'GlassmorphismCard.tsx': `import React from 'react';

interface GlassmorphismCardProps {
  children: React.ReactNode;
  className?: string;
}

const GlassmorphismCard: React.FC<GlassmorphismCardProps> = ({ children, className = '' }) => {
  return (
    <div className={\`backdrop-blur-md bg-white/30 rounded-xl border border-white/20 p-6 \${className}\`}>
      {children}
    </div>
  );
};

export default GlassmorphismCard;`,

  'InteractiveNavigation.tsx': `import React from 'react';

const InteractiveNavigation: React.FC = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-bold text-gray-800">Interactive Nav</div>
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Home</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Services</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default InteractiveNavigation;`,

  'InteractiveSearch.tsx': `import React, { useState } from 'react';

const InteractiveSearch: React.FC = () => {
  const [query, setQuery] = useState('');

  return (
    <div className="relative">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
  );
};

export default InteractiveSearch;`,

  'InteractiveStats.tsx': `import React from 'react';

const InteractiveStats: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="text-center">
        <div className="text-3xl font-bold text-blue-600">1,234</div>
        <div className="text-gray-600">Users</div>
      </div>
      <div className="text-center">
        <div className="text-3xl font-bold text-green-600">567</div>
        <div className="text-gray-600">Projects</div>
      </div>
      <div className="text-center">
        <div className="text-3xl font-bold text-purple-600">89</div>
        <div className="text-gray-600">Partners</div>
      </div>
    </div>
  );
};

export default InteractiveStats;`,

  'NotificationSystem.tsx': `import React from 'react';

const NotificationSystem: React.FC = () => {
  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg">
        <div className="flex items-center">
          <span className="mr-2">✓</span>
          <span>Success notification</span>
        </div>
      </div>
    </div>
  );
};

export default NotificationSystem;`,

  'UserEngagementSystem.tsx': `import React from 'react';

const UserEngagementSystem: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold mb-4">User Engagement</h3>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span>Active Users</span>
          <span className="font-semibold">1,234</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Session Duration</span>
          <span className="font-semibold">5m 32s</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Bounce Rate</span>
          <span className="font-semibold">23%</span>
        </div>
      </div>
    </div>
  );
};

export default UserEngagementSystem;`
};

const componentFiles = [
  'components/Layout.tsx',
  'components/layout/AuthLayout.tsx',
  'components/layout/EnhancedLayout.tsx',
  'components/layout/EnhancedNavigation.tsx',
  'components/ui/AnimatedBackground.tsx',
  'components/ui/EnhancedButton.tsx',
  'components/ui/EnhancedCard.tsx',
  'components/ui/EnhancedLoading.tsx',
  'components/ui/EnhancedMarketplaceCard.tsx',
  'components/ui/FuturisticCard.tsx',
  'components/ui/FuturisticHero.tsx',
  'components/ui/GlassmorphismCard.tsx',
  'components/ui/InteractiveNavigation.tsx',
  'components/ui/InteractiveSearch.tsx',
  'components/ui/InteractiveStats.tsx',
  'components/ui/NotificationSystem.tsx',
  'components/ui/UserEngagementSystem.tsx'
];

componentFiles.forEach(filePath => {
  const fileName = path.basename(filePath);
  const template = componentTemplates[fileName];
  
  if (template) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      if (content.trim() === '') {
        fs.writeFileSync(filePath, template);
        console.log(`Fixed: ${filePath}`);
      }
    } catch (error) {
      console.log(`Error processing ${filePath}:`, error.message);
    }
  }
});

console.log('Component files fixed!');
