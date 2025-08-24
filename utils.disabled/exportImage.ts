export async function exportElementPng(element: HTMLElement, filename = 'dashboard.png') {
  const { toPng } = await import('html-to-image');
  const dataUrl = await toPng(element, { cacheBust: true, pixelRatio: 2 });
  const link = document.createElement('a');
  link.download = filename;
  link.href = dataUrl;
  link.click();
}