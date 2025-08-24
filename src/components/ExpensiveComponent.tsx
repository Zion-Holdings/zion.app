import React, { useState, useEffect } from 'react';

export default function ExpensiveComponent() {
  const [data, setData] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate expensive computation
    const timer = setTimeout(() => {
      const expensiveData = Array.from({ length: 10000 }, (_, i) => 
        Math.sqrt(i) * Math.PI * Math.random()
      );
      setData(expensiveData);
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="text-center p-8">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-zion-cyan mx-auto mb-4"></div>
        <p className="text-zion-slate-light">Computing expensive data...</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-zion-slate-light">
        Expensive Component Loaded
      </h3>
      <p className="text-zion-slate text-sm">
        This component was lazy loaded and contains {data.length.toLocaleString()} computed values.
      </p>
      <div className="max-h-40 overflow-y-auto border border-zion-slate/20 rounded-lg p-4">
        <div className="grid grid-cols-4 gap-2 text-xs">
          {data.slice(0, 100).map((value, index) => (
            <div key={index} className="text-zion-cyan">
              {value.toFixed(3)}
            </div>
          ))}
        </div>
        {data.length > 100 && (
          <p className="text-zion-slate text-xs mt-2 text-center">
            ... and {data.length - 100} more values
          </p>
        )}
      </div>
    </div>
  );
}