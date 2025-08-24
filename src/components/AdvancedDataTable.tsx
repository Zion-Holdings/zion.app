import { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronUp, 
  ChevronDown, 
  Search, 
  Filter, 
  Download, 
  Eye,
  Edit,
  Trash2,
  ArrowUpDown
} from 'lucide-react';
import { useVirtualScroll } from '../hooks/useVirtualScroll';
import { useAnalytics } from '../hooks/useAnalytics';

interface Column<T> {
  key: keyof T;
  header: string;
  width?: number | string;
  sortable?: boolean;
  filterable?: boolean;
  render?: (value: T[keyof T], item: T, index: number) => React.ReactNode;
  align?: 'left' | 'center' | 'right';
}

interface SortConfig<T> {
  key: keyof T;
  direction: 'asc' | 'desc';
}

interface FilterConfig<T> {
  key: keyof T;
  value: string;
  operator: 'contains' | 'equals' | 'starts_with' | 'ends_with' | 'regex';
}

interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  height?: number;
  enableSearch?: boolean;
  enableSorting?: boolean;
  enablePagination?: boolean;
  enableSelection?: boolean;
  enableActions?: boolean;
  enableExport?: boolean;
  pageSize?: number;
  className?: string;
  onRowClick?: (item: T, index: number) => void;
  onSelectionChange?: (selectedItems: T[]) => void;
  onExport?: (data: T[]) => void;
}

export const AdvancedDataTable = <T extends Record<string, any>>({
  data,
  columns,
  height = 500,
  enableSearch = true,
  enableSorting = true,
  enablePagination = true,
  enableSelection = false,
  enableActions = false,
  enableExport = false,
  pageSize = 20,
  className = '',
  onRowClick,
  onSelectionChange,
  onExport
}: DataTableProps<T>) => {
  const { trackEvent } = useAnalytics({
    enableTracking: true,
    enableUserBehaviorTracking: true
  });

  // State management
  const [searchQuery, setSearchQuery] = useState('');
  const [sortConfig, setSortConfig] = useState<SortConfig<T> | null>(null);
  const [filters, setFilters] = useState<FilterConfig<T>[]>([]);
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);

  // Process data based on search, filters, and sorting
  const processedData = useMemo(() => {
    let result = [...data];

    // Apply search
    if (searchQuery.trim()) {
      result = result.filter(item =>
        columns.some(col => {
          const value = String(item[col.key]).toLowerCase();
          return value.includes(searchQuery.toLowerCase());
        })
      );
    }

    // Apply filters
    filters.forEach(filter => {
      result = result.filter(item => {
        const value = String(item[filter.key]).toLowerCase();
        const filterValue = filter.value.toLowerCase();

        switch (filter.operator) {
          case 'contains':
            return value.includes(filterValue);
          case 'equals':
            return value === filterValue;
          case 'starts_with':
            return value.startsWith(filterValue);
          case 'ends_with':
            return value.endsWith(filterValue);
          case 'regex':
            try {
              return new RegExp(filterValue, 'i').test(value);
            } catch {
              return false;
            }
          default:
            return true;
        }
      });
    });

    // Apply sorting
    if (sortConfig) {
      result.sort((a, b) => {
        const aVal = a[sortConfig.key];
        const bVal = b[sortConfig.key];

        if (aVal < bVal) return sortConfig.direction === 'asc' ? -1 : 1;
        if (aVal > bVal) return sortConfig.direction === 'asc' ? 1 : -1;
        return 0;
      });
    }

    return result;
  }, [data, searchQuery, filters, sortConfig, columns]);

  // Pagination
  const totalPages = Math.ceil(processedData.length / pageSize);
  const paginatedData = enablePagination
    ? processedData.slice((currentPage - 1) * pageSize, currentPage * pageSize)
    : processedData;

  // Virtual scrolling
  const { virtualItems, containerProps, listProps } = useVirtualScroll(paginatedData, {
    itemHeight: 60,
    containerHeight: height - 120, // Account for header and controls
    overscan: 5
  });

  // Handle sorting
  const handleSort = useCallback((key: keyof T) => {
    if (!enableSorting) return;

    setSortConfig(prev => {
      if (prev?.key === key) {
        return prev.direction === 'asc' 
          ? { key, direction: 'desc' }
          : null;
      }
      return { key, direction: 'asc' };
    });

    trackEvent('table', 'column_sorted', String(key));
  }, [enableSorting, trackEvent]);

  // Handle filter change
  const handleFilterChange = useCallback((key: keyof T, value: string, operator: FilterConfig<T>['operator']) => {
    setFilters(prev => {
      const newFilters = prev.filter(f => f.key !== key);
      if (value.trim()) {
        newFilters.push({ key, value, operator });
      }
      return newFilters;
    });

    trackEvent('table', 'filter_applied', String(key), undefined, { operator, value });
  }, [trackEvent]);

  // Handle selection
  const handleSelectionChange = useCallback((item: T, checked: boolean) => {
    const itemKey = String(item.id || JSON.stringify(item));
    const newSelection = new Set(selectedItems);

    if (checked) {
      newSelection.add(itemKey);
    } else {
      newSelection.delete(itemKey);
    }

    setSelectedItems(newSelection);
    onSelectionChange?.(Array.from(newSelection).map(key => 
      data.find(item => String(item.id || JSON.stringify(item)) === key)!
    ));
  }, [selectedItems, onSelectionChange, data]);

  // Handle select all
  const handleSelectAll = useCallback((checked: boolean) => {
    if (checked) {
      const allKeys = new Set(paginatedData.map(item => String(item.id || JSON.stringify(item))));
      setSelectedItems(allKeys);
      onSelectionChange?.(paginatedData);
    } else {
      setSelectedItems(new Set());
      onSelectionChange?.([]);
    }
  }, [paginatedData, onSelectionChange]);

  // Export data
  const handleExport = useCallback(() => {
    if (onExport) {
      onExport(processedData);
    } else {
      // Default CSV export
      const csvContent = generateCSV(processedData, columns);
      downloadCSV(csvContent, 'table-export.csv');
    }

    trackEvent('table', 'data_exported', 'export_completed', processedData.length);
  }, [processedData, columns, onExport, trackEvent]);

  // Generate CSV content
  const generateCSV = (data: T[], columns: Column<T>[]) => {
    const headers = columns.map(col => col.header).join(',');
    const rows = data.map(item => 
      columns.map(col => {
        const value = item[col.key];
        return typeof value === 'string' && value.includes(',') ? `"${value}"` : value;
      }).join(',')
    );
    return [headers, ...rows].join('\n');
  };

  // Download CSV
  const downloadCSV = (content: string, filename: string) => {
    const blob = new Blob([content], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  // Get sort icon
  const getSortIcon = (key: keyof T) => {
    if (!enableSorting || sortConfig?.key !== key) {
      return <ArrowUpDown className="w-4 h-4 text-gray-400" />;
    }
    return sortConfig.direction === 'asc' 
      ? <ChevronUp className="w-4 h-4 text-blue-500" />
      : <ChevronDown className="w-4 h-4 text-blue-500" />;
  };

  // Render cell content
  const renderCell = (column: Column<T>, item: T, index: number) => {
    const value = item[column.key];
    
    if (column.render) {
      return column.render(value, item, index);
    }

    return (
      <span className={`truncate ${column.align === 'center' ? 'text-center' : column.align === 'right' ? 'text-right' : 'text-left'}`}>
        {value}
      </span>
    );
  };

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden ${className}`}>
      {/* Header Controls */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Data Table ({processedData.length} items)
          </h3>
          
          <div className="flex items-center gap-2">
            {enableExport && (
              <button
                onClick={handleExport}
                className="px-3 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Export
              </button>
            )}
            
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${
                showFilters
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500'
              }`}
            >
              <Filter className="w-4 h-4" />
              Filters
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {enableSearch && (
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search in all columns..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            />
          </div>
        )}

        {/* Filters Panel */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 p-4 bg-white dark:bg-gray-600 rounded-lg border border-gray-200 dark:border-gray-500"
            >
              <h4 className="font-medium text-gray-900 dark:text-white mb-3">Advanced Filters</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {columns.filter(col => col.filterable !== false).map(column => (
                  <div key={String(column.key)} className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      {column.header}
                    </label>
                    <select
                      onChange={(e) => handleFilterChange(column.key, e.target.value, 'contains')}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                    >
                      <option value="">No filter</option>
                      <option value="contains">Contains</option>
                      <option value="equals">Equals</option>
                      <option value="starts_with">Starts with</option>
                      <option value="ends_with">Ends with</option>
                    </select>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Table Container */}
      <div className="overflow-hidden">
        {/* Table Header */}
        <div className="bg-gray-100 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
          <div className="flex items-center px-4 py-3">
            {enableSelection && (
              <div className="w-8 mr-2">
                <input
                  type="checkbox"
                  checked={selectedItems.size === paginatedData.length && paginatedData.length > 0}
                  onChange={(e) => handleSelectAll(e.target.checked)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
              </div>
            )}
            
            {columns.map(column => (
              <div
                key={String(column.key)}
                className={`flex-1 px-2 py-1 ${column.width ? `w-${column.width}` : ''}`}
                style={{ width: column.width }}
              >
                <button
                  onClick={() => handleSort(column.key)}
                  disabled={!enableSorting || !column.sortable}
                  className={`w-full flex items-center justify-between px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors ${
                    !enableSorting || !column.sortable ? 'cursor-default' : 'cursor-pointer'
                  }`}
                >
                  <span className="font-medium text-gray-700 dark:text-gray-300 text-sm">
                    {column.header}
                  </span>
                  {column.sortable !== false && getSortIcon(column.key)}
                </button>
              </div>
            ))}
            
            {enableActions && (
              <div className="w-20 px-2 py-1">
                <span className="font-medium text-gray-700 dark:text-gray-300 text-sm">Actions</span>
              </div>
            )}
          </div>
        </div>

        {/* Table Body with Virtual Scrolling */}
        <div {...containerProps} className="relative">
          <div {...listProps}>
            {virtualItems.map((item, index) => (
              <motion.div
                key={String(item.id || index)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex items-center px-4 py-3 border-b border-gray-100 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
                  onRowClick ? 'cursor-pointer' : ''
                } ${selectedItems.has(String(item.id || JSON.stringify(item))) ? 'bg-blue-50 dark:bg-blue-900/20' : ''}`}
                onClick={() => onRowClick?.(item, index)}
              >
                {enableSelection && (
                  <div className="w-8 mr-2">
                    <input
                      type="checkbox"
                      checked={selectedItems.has(String(item.id || JSON.stringify(item)))}
                      onChange={(e) => handleSelectionChange(item, e.target.checked)}
                      onClick={(e) => e.stopPropagation()}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                  </div>
                )}
                
                {columns.map(column => (
                  <div
                    key={String(column.key)}
                    className={`flex-1 px-2 py-1 ${column.width ? `w-${column.width}` : ''}`}
                    style={{ width: column.width }}
                  >
                    {renderCell(column, item, index)}
                  </div>
                ))}
                
                {enableActions && (
                  <div className="w-20 px-2 py-1 flex items-center gap-1">
                    <button className="p-1 text-gray-400 hover:text-blue-500 transition-colors">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="p-1 text-gray-400 hover:text-green-500 transition-colors">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="p-1 text-gray-400 hover:text-red-500 transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Pagination */}
      {enablePagination && totalPages > 1 && (
        <div className="px-4 py-3 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-700 dark:text-gray-300">
              Showing {((currentPage - 1) * pageSize) + 1} to {Math.min(currentPage * pageSize, processedData.length)} of {processedData.length} results
            </div>
            
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="px-3 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Previous
              </button>
              
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                const page = i + 1;
                return (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-3 py-1 text-sm rounded transition-colors ${
                      currentPage === page
                        ? 'bg-blue-500 text-white'
                        : 'border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600'
                    }`}
                  >
                    {page}
                  </button>
                );
              })}
              
              <button
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                className="px-3 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};