import React from 'react';
import { SimulationPoint, toCsv } from '../../utils/data/tokenSimulator';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export type SimulatorExportsProps = {
  points: SimulationPoint[];
  containerId: string; // DOM id for snapshot
};

export default function SimulatorExports({ points, containerId }: SimulatorExportsProps) {
  const download = (filename: string, content: string, mime: string) => {
    const blob = new Blob([content], { type: mime });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  };

  const onExportCsv = () => download('zion-simulation.csv', toCsv(points), 'text/csv');
  const onExportJson = () => download('zion-simulation.json', JSON.stringify(points, null, 2), 'application/json');

  const onExportPdf = async () => {
    const container = document.getElementById(containerId);
    if (!container) return;
    const canvas = await html2canvas(container, { backgroundColor: '#ffffff' });
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({ orientation: 'landscape', unit: 'pt', format: 'a4' });
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const ratio = Math.min(pageWidth / canvas.width, pageHeight / canvas.height);
    const imgWidth = canvas.width * ratio;
    const imgHeight = canvas.height * ratio;
    const x = (pageWidth - imgWidth) / 2;
    const y = (pageHeight - imgHeight) / 2;
    pdf.addImage(imgData, 'PNG', x, y, imgWidth, imgHeight);
    pdf.save('zion-simulation.pdf');
  };

  const onSnapshotPng = async () => {
    const container = document.getElementById(containerId);
    if (!container) return;
    const canvas = await html2canvas(container, { backgroundColor: '#ffffff' });
    const url = canvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = url;
    a.download = 'zion-simulation.png';
    a.click();
  };

  return (
    <div className="flex flex-wrap gap-3">
      <button onClick={onExportCsv} className="px-3 py-1.5 rounded border border-gray-300 dark:border-gray-700">CSV</button>
      <button onClick={onExportJson} className="px-3 py-1.5 rounded border border-gray-300 dark:border-gray-700">JSON</button>
      <button onClick={onExportPdf} className="px-3 py-1.5 rounded border border-gray-300 dark:border-gray-700">PDF</button>
      <button onClick={onSnapshotPng} className="px-3 py-1.5 rounded border border-gray-300 dark:border-gray-700">Snapshot</button>
    </div>
  );
}