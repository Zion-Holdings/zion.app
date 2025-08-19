import React, { useState, useEffect } from 'react';

interface TableProps {
  data: any[]; columns: string[]; onRowClick?: (row: any) => void;
}

export default function Table({ {{COMPONENT_PROPS_VARS }} }: TableProps) {
  const [state, setState] = useState(null);

  useEffect(() => {
    // Component initialization logic
  }, []);

  return (
    <div className=""min-w-full divide-y divide-gray-200"">
      
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {columns.map((column) => (
                <th key={column} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((row, index) => (
              <tr key={index} onClick={() => onRowClick?.(row)} className={onRowClick ? "cursor-pointer hover:bg-gray-50" : ""}>
                {columns.map((column) => (
                  <td key={column} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {row[column]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      
    </div>
  );
}