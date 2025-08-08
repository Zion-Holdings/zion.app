export function exportCsv(filename: string, rows: Array<Record<string, string | number>>) {
  if (typeof window === 'undefined' || !rows.length) return;
  const headers = Array.from(new Set(rows.flatMap(r => Object.keys(r))));
  const csv = [headers.join(','), ...rows.map(r => headers.map(h => JSON.stringify(r[h] ?? '')).join(','))].join('\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export async function exportSvgAsPng(filename: string, svgEl: SVGSVGElement) {
  if (typeof window === 'undefined' || !svgEl) return;
  const serializer = new XMLSerializer();
  const source = serializer.serializeToString(svgEl);
  const svgBlob = new Blob([source], { type: 'image/svg+xml;charset=utf-8' });
  const url = URL.createObjectURL(svgBlob);
  const img = new Image();
  const width = svgEl.viewBox.baseVal.width || svgEl.width.baseVal.value || 800;
  const height = svgEl.viewBox.baseVal.height || svgEl.height.baseVal.value || 400;

  await new Promise<void>((resolve, reject) => {
    img.onload = () => resolve();
    img.onerror = () => resolve();
    img.src = url;
  });

  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  if (ctx) ctx.drawImage(img, 0, 0);
  URL.revokeObjectURL(url);

  const pngUrl = canvas.toDataURL('image/png');
  const link = document.createElement('a');
  link.download = filename;
  link.href = pngUrl;
  link.click();
}