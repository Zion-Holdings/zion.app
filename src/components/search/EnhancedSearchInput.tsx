import React, { useState } from 'react';

export const EnhancedSearchInput: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search services..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full px-4 py-2 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none"
      />
      <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-zion-cyan">
        🔍
      </button>
    </div>
  );
};