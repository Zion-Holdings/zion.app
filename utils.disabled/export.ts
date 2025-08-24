export function exportToCsv(filename: string, rows: Array<Record<string, any>>) {
  if (!rows || rows.length === 0) return;
  const separator = ',';
  const keys = Object.keys(rows[0]);
  const csvContent = [
    keys.join(separator),
    ...rows.map((row) =>
      keys
        .map((k) => {
          let cell = row[k] ?? '';
          if (cell instanceof Date) cell = cell.toISOString();
          const str = String(cell).replace(/"/g, '""');
          if (str.search(/([",\n])/g) >= 0) return '"' + str + '"';
          return str;
        })
        .join(separator)
    ),
  ].join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  link.setAttribute('href', url);
  link.setAttribute('download', filename);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}