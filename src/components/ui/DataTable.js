import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useMemo } from 'react';
import { ChevronUp, ChevronDown, Search } from 'lucide-react';
export function DataTable({ data, columns, searchable = true, sortable = true, pagination = true, pageSize = 10, className = '' }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortColumn, setSortColumn] = useState(null);
    const [sortDirection, setSortDirection] = useState('asc');
    const [currentPage, setCurrentPage] = useState(1);
    // Filter data based on search term
    const filteredData = useMemo(() => {
        if (!searchTerm)
            return data;
        return data.filter(row => Object.values(row).some(value => String(value).toLowerCase().includes(searchTerm.toLowerCase())));
    }, [data, searchTerm]);
    // Sort data
    const sortedData = useMemo(() => {
        if (!sortColumn)
            return filteredData;
        return [...filteredData].sort((a, b) => {
            const aValue = a[sortColumn];
            const bValue = b[sortColumn];
            if (aValue < bValue)
                return sortDirection === 'asc' ? -1 : 1;
            if (aValue > bValue)
                return sortDirection === 'asc' ? 1 : -1;
            return 0;
        });
    }, [filteredData, sortColumn, sortDirection]);
    // Paginate data
    const paginatedData = useMemo(() => {
        if (!pagination)
            return sortedData;
        const startIndex = (currentPage - 1) * pageSize;
        return sortedData.slice(startIndex, startIndex + pageSize);
    }, [sortedData, currentPage, pageSize, pagination]);
    const totalPages = Math.ceil(sortedData.length / pageSize);
    const handleSort = (column) => {
        if (!sortable)
            return;
        if (sortColumn === column) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        }
        else {
            setSortColumn(column);
            setSortDirection('asc');
        }
        setCurrentPage(1);
    };
    const renderCell = (column, row) => {
        const value = row[column.key];
        if (column.render) {
            return column.render(value, row);
        }
        return String(value || '');
    };
    return (_jsxs("div", { className: `bg-white rounded-lg shadow ${className}`, children: [searchable && (_jsx("div", { className: "p-4 border-b border-gray-200", children: _jsxs("div", { className: "relative", children: [_jsx(Search, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" }), _jsx("input", { type: "text", placeholder: "Search...", value: searchTerm, onChange: (e) => setSearchTerm(e.target.value), className: "w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" })] }) })), _jsx("div", { className: "overflow-x-auto", children: _jsxs("table", { className: "w-full", children: [_jsx("thead", { className: "bg-gray-50", children: _jsx("tr", { children: columns.map((column) => (_jsx("th", { className: `
                    px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider
                    ${column.sortable && sortable ? 'cursor-pointer hover:bg-gray-100' : ''}
                    ${column.width ? column.width : ''}
                  `, onClick: () => column.sortable && sortable && handleSort(column.key), children: _jsxs("div", { className: "flex items-center space-x-1", children: [_jsx("span", { children: column.header }), column.sortable && sortable && sortColumn === column.key && (sortDirection === 'asc' ? (_jsx(ChevronUp, { className: "w-4 h-4" })) : (_jsx(ChevronDown, { className: "w-4 h-4" })))] }) }, String(column.key)))) }) }), _jsx("tbody", { className: "bg-white divide-y divide-gray-200", children: paginatedData.map((row, rowIndex) => (_jsx("tr", { className: "hover:bg-gray-50", children: columns.map((column) => (_jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-900", children: renderCell(column, row) }, String(column.key)))) }, rowIndex))) })] }) }), pagination && totalPages > 1 && (_jsxs("div", { className: "px-6 py-3 border-t border-gray-200 flex items-center justify-between", children: [_jsxs("div", { className: "text-sm text-gray-700", children: ["Showing ", ((currentPage - 1) * pageSize) + 1, " to ", Math.min(currentPage * pageSize, sortedData.length), " of ", sortedData.length, " results"] }), _jsxs("div", { className: "flex space-x-2", children: [_jsx("button", { onClick: () => setCurrentPage(currentPage - 1), disabled: currentPage === 1, className: "px-3 py-1 border border-gray-300 rounded-md text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50", children: "Previous" }), _jsx("button", { onClick: () => setCurrentPage(currentPage + 1), disabled: currentPage === totalPages, className: "px-3 py-1 border border-gray-300 rounded-md text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50", children: "Next" })] })] }))] }));
}
