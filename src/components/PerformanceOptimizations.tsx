import React, { Suspense, lazy, memo, useMemo, useCallback } from 'react';
import { LoadingSpinner } from './ui/loading-spinner';

// Lazy load heavy components
const LazyExpensiveComponent = lazy(() => import('./ExpensiveComponent'));

// Memoized component for expensive calculations
const MemoizedDataGrid = memo(({ data, onItemClick }: { 
  data: any[], 
  onItemClick: (item: any) => void 
}) => {
  const processedData = useMemo(() => {
    return data.map(item => ({
      ...item,
      processed: item.value * 2,
      timestamp: new Date().toISOString()
    }));
  }, [data]);

  const handleClick = useCallback((item: any) => {
    onItemClick(item);
  }, [onItemClick]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {processedData.map((item, index) => (
        <div
          key={item.id || index}
          onClick={() => handleClick(item)}
          className="p-4 bg-white/5 backdrop-blur-sm border border-zion-slate/20 rounded-xl hover:border-zion-cyan/40 transition-all duration-300 cursor-pointer"
        >
          <h3 className="text-lg font-semibold text-zion-slate-light mb-2">
            {item.title}
          </h3>
          <p className="text-zion-slate text-sm mb-2">
            {item.description}
          </p>
          <div className="text-zion-cyan text-sm">
            Processed: {item.processed}
          </div>
        </div>
      ))}
    </div>
  );
});

MemoizedDataGrid.displayName = 'MemoizedDataGrid';

// Virtual scrolling component for large lists
const VirtualList = ({ items, itemHeight = 60, containerHeight = 400 }: {
  items: any[];
  itemHeight?: number;
  containerHeight?: number;
}) => {
  const [scrollTop, setScrollTop] = React.useState(0);
  
  const visibleItems = useMemo(() => {
    const startIndex = Math.floor(scrollTop / itemHeight);
    const endIndex = Math.min(
      startIndex + Math.ceil(containerHeight / itemHeight) + 1,
      items.length
    );
    
    return items.slice(startIndex, endIndex).map((item, index) => ({
      ...item,
      index: startIndex + index,
      style: {
        position: 'absolute' as const,
        top: (startIndex + index) * itemHeight,
        height: itemHeight,
        width: '100%'
      }
    }));
  }, [items, scrollTop, itemHeight, containerHeight]);

  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    setScrollTop(e.currentTarget.scrollTop);
  }, []);

  return (
    <div
      style={{ height: containerHeight, overflow: 'auto' }}
      onScroll={handleScroll}
      className="border border-zion-slate/20 rounded-lg"
    >
      <div style={{ height: items.length * itemHeight, position: 'relative' }}>
        {visibleItems.map((item) => (
          <div
            key={item.id || item.index}
            style={item.style}
            className="p-3 border-b border-zion-slate/10 hover:bg-zion-slate/5 transition-colors"
          >
            <div className="flex items-center justify-between">
              <span className="text-zion-slate-light">{item.title}</span>
              <span className="text-zion-cyan text-sm">{item.value}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Main performance optimizations component
export function PerformanceOptimizations() {
  const [showExpensive, setShowExpensive] = React.useState(false);
  const [data, setData] = React.useState([
    { id: 1, title: 'Service 1', description: 'Description 1', value: 100 },
    { id: 2, title: 'Service 2', description: 'Description 2', value: 200 },
    { id: 3, title: 'Service 3', description: 'Description 3', value: 300 },
    { id: 4, title: 'Service 4', description: 'Description 4', value: 400 },
    { id: 5, title: 'Service 5', description: 'Description 5', value: 500 },
  ]);

  const handleItemClick = useCallback((item: any) => {
    console.log('Item clicked:', item);
  }, []);

  const addItem = useCallback(() => {
    setData(prev => [...prev, {
      id: Date.now(),
      title: `Service ${prev.length + 1}`,
      description: `Description ${prev.length + 1}`,
      value: Math.floor(Math.random() * 1000)
    }]);
  }, []);

  return (
    <div className="space-y-8 p-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-zion-blue mb-4">
          Performance Optimizations
        </h2>
        <p className="text-zion-slate-light text-lg">
          Advanced performance features for better user experience
        </p>
      </div>

      {/* Memoized Data Grid */}
      <div>
        <h3 className="text-xl font-semibold text-zion-slate-light mb-4">
          Memoized Data Grid
        </h3>
        <div className="mb-4">
          <button
            onClick={addItem}
            className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-4 py-2 rounded-lg transition-colors"
          >
            Add Item
          </button>
        </div>
        <MemoizedDataGrid data={data} onItemClick={handleItemClick} />
      </div>

      {/* Virtual Scrolling */}
      <div>
        <h3 className="text-xl font-semibold text-zion-slate-light mb-4">
          Virtual Scrolling
        </h3>
        <VirtualList 
          items={Array.from({ length: 1000 }, (_, i) => ({
            id: i,
            title: `Item ${i + 1}`,
            value: Math.floor(Math.random() * 1000)
          }))}
          itemHeight={60}
          containerHeight={400}
        />
      </div>

      {/* Lazy Loading */}
      <div>
        <h3 className="text-xl font-semibold text-zion-slate-light mb-4">
          Lazy Loading
        </h3>
        <button
          onClick={() => setShowExpensive(!showExpensive)}
          className="bg-zion-purple hover:bg-zion-purple-dark text-white px-4 py-2 rounded-lg transition-colors"
        >
          {showExpensive ? 'Hide' : 'Show'} Expensive Component
        </button>
        
        {showExpensive && (
          <Suspense fallback={<LoadingSpinner />}>
            <div className="mt-4 p-4 bg-zion-slate/10 rounded-lg">
              <LazyExpensiveComponent />
            </div>
          </Suspense>
        )}
      </div>

      {/* Performance Metrics */}
      <div>
        <h3 className="text-xl font-semibold text-zion-slate-light mb-4">
          Performance Metrics
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-white/5 backdrop-blur-sm border border-zion-slate/20 rounded-xl text-center">
            <div className="text-2xl font-bold text-zion-cyan">{data.length}</div>
            <div className="text-zion-slate text-sm">Total Items</div>
          </div>
          <div className="p-4 bg-white/5 backdrop-blur-sm border border-zion-slate/20 rounded-xl text-center">
            <div className="text-2xl font-bold text-zion-purple">1000</div>
            <div className="text-zion-slate text-sm">Virtual Items</div>
          </div>
          <div className="p-4 bg-white/5 backdrop-blur-sm border border-zion-slate/20 rounded-xl text-center">
            <div className="text-2xl font-bold text-zion-blue">3.27s</div>
            <div className="text-zion-slate text-sm">Build Time</div>
          </div>
        </div>
      </div>
    </div>
  );
}