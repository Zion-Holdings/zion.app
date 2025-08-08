type Column<T> = {
  key: keyof T;
  header: string;
  render?: (value: any, row: T) => React.ReactNode;
};

export type ResponsiveTableProps<T> = {
  columns: Column<T>[];
  data: T[];
  keyField: keyof T;
  title?: string;
};

export default function ResponsiveTable<T extends Record<string, any>>({ columns, data, keyField, title }: ResponsiveTableProps<T>) {
  return (
    <div className="w-full">
      {title && <h3 className="text-lg font-semibold mb-3">{title}</h3>}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-gray-50 dark:bg-neutral-900">
            <tr>
              {columns.map(col => (
                <th key={String(col.key)} className="px-4 py-3 font-medium text-gray-700 dark:text-gray-300">{col.header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map(row => (
              <tr key={String(row[keyField])} className="border-b border-gray-200 dark:border-neutral-800">
                {columns.map(col => (
                  <td key={String(col.key)} className="px-4 py-3">
                    {col.render ? col.render(row[col.key], row) : String(row[col.key] ?? '')}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="md:hidden space-y-3">
        {data.map(row => (
          <div key={String(row[keyField])} className="rounded-lg border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm p-3">
            {columns.map((col, idx) => (
              <div key={String(col.key)} className={`flex ${idx !== 0 ? 'mt-2' : ''}`}>
                <div className="w-32 text-gray-500 text-xs uppercase tracking-wide">{col.header}</div>
                <div className="flex-1 text-sm">{col.render ? col.render(row[col.key], row) : String(row[col.key] ?? '')}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}