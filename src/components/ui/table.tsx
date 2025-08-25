import React from 'react';

interface TableProps {
  children: React.ReactNode;
  className?: string;
}

interface TableHeaderProps {
  children: React.ReactNode;
}

interface TableBodyProps {
  children: React.ReactNode;
}

interface TableRowProps {
  children: React.ReactNode;
  className?: string;
}

interface TableHeadProps {
  children: React.ReactNode;
  className?: string;
}

interface TableCellProps {
  children: React.ReactNode;
  className?: string;
}

export function Table({ children, className }: TableProps) {
  return (
    <div className={`w-full overflow-x-auto ${className || ''}`}>
      <table className="w-full border-collapse">
        {children}
      </table>
    </div>
  );
}

export function TableHeader({ children }: TableHeaderProps) {
  return (
    <thead className="bg-zion-blue-light">
      {children}
    </thead>
  );
}

export function TableBody({ children }: TableBodyProps) {
  return (
    <tbody>
      {children}
    </tbody>
  );
}

export function TableRow({ children, className }: TableRowProps) {
  return (
    <tr className={`border-b border-zion-slate hover:bg-zion-blue-light ${className || ''}`}>
      {children}
    </tr>
  );
}

export function TableHead({ children, className }: TableHeadProps) {
  return (
    <th className={`px-4 py-3 text-left font-medium text-zion-cyan ${className || ''}`}>
      {children}
    </th>
  );
}

export function TableCell({ children, className }: TableCellProps) {
  return (
    <td className={`px-4 py-3 text-zion-slate ${className || ''}`}>
      {children}
    </td>
  );
}