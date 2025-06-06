import React from 'react';
import { NextSeo } from '@/components/NextSeo';
import { Button } from '@/components/ui/button';
import { generateBookPdf } from '@/utils/generateBookPdf';

export default function ZionBook() {
  const handleDownload = async () => {
    const blob = await generateBookPdf();
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'zion-os-book.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-background prose lg:prose-xl font-serif mx-auto p-8">
      <NextSeo title="Zion OS Book" description="Founder story and platform philosophy." />
      <h1>Zion OS Book</h1>
      <blockquote>
        “We didn’t build a startup. We built a civilization protocol.”
      </blockquote>

      <h2>Chapter 1 – The Why</h2>
      <ul>
        <li>Origin story</li>
        <li>Vision: AI + Talent + Trust</li>
      </ul>

      <h2>Chapter 2 – The Blueprint</h2>
      <ul>
        <li>Zion OS architecture</li>
        <li>Marketplace, DAO, AI, Token, Academy</li>
      </ul>

      <h2>Chapter 3 – Manifesto & Constitution</h2>
      <ul>
        <li>Published values</li>
        <li>Founding principles</li>
      </ul>

      <h2>Chapter 4 – Design Evolution</h2>
      <ul>
        <li>Figma timeline</li>
        <li>Screenshots per module</li>
      </ul>

      <h2>Chapter 5 – Global Footprint</h2>
      <ul>
        <li>Multiverse map</li>
        <li>Talent reach + ecosystem metrics</li>
      </ul>

      <h2>Chapter 6 – Road to v10</h2>
      <ul>
        <li>Roadmap</li>
        <li>DAO votes</li>
        <li>Zion’s future as protocol, not platform</li>
      </ul>

      <div className="not-prose mt-8 flex gap-4">
        <Button onClick={handleDownload}>Download PDF</Button>
        <Button variant="outline" onClick={handlePrint}>Print</Button>
      </div>
    </div>
  );
}
