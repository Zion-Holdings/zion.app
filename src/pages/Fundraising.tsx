import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { NextSeo } from '@/components/NextSeo';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import SlideEditor from '@/components/admin/pitch-generator/SlideEditor';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

interface Slide {
  id: string;
  title: string;
  content: string;
  type: string;
}

const defaultPrompt =
  'Create a fundraising deck for an AI talent protocol raising a $5M Series A. Include: vision, traction, use of funds, token utility, and multiverse growth model.';

export default function Fundraising() {
  const [stage, setStage] = useState('preseed');
  const [prompt, setPrompt] = useState(defaultPrompt);
  const [sections, setSections] = useState({
    marketSize: '',
    product: '',
    team: '',
    traction: '',
    tokenomics: '',
    timeline: '',
    ask: '',
  });
  const [slides, setSlides] = useState<Slide[]>([]);
  const [isExporting, setIsExporting] = useState(false);

  const handleSectionChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setSections((prev) => ({ ...prev, [name]: value }));
  };

  const handleGenerate = () => {
    const newSlides: Slide[] = Object.entries(sections)
      .filter(([, value]) => value.trim() !== '')
      .map(([key, value]) => ({
        id: key,
        title: key.charAt(0).toUpperCase() + key.slice(1),
        content: value,
        type: 'generic',
      }));

    if (newSlides.length === 0) {
      newSlides.push({ id: 'overview', title: 'Overview', content: prompt, type: 'generic' });
    }
    setSlides(newSlides);
  };

  const handleExportPDF = async () => {
    if (slides.length === 0) return;
    setIsExporting(true);
    try {
      const pdf = new jsPDF('landscape', 'pt', 'a4');
      for (let i = 0; i < slides.length; i++) {
        const slide = slides[i];
        if (!slide) continue;
        
        const slideElement = document.createElement('div');
        slideElement.style.width = '1024px';
        slideElement.style.height = '576px';
        slideElement.style.backgroundColor = 'white';
        slideElement.style.padding = '40px';
        slideElement.style.border = '1px solid #ccc';
        slideElement.style.boxSizing = 'border-box';
        slideElement.style.display = 'flex';
        slideElement.style.flexDirection = 'column';
        slideElement.style.justifyContent = 'center';
        slideElement.style.alignItems = 'center';
        slideElement.style.fontFamily = 'Arial, sans-serif';

        const titleElement = document.createElement('h2');
        titleElement.innerText = slide.title;
        titleElement.style.fontSize = '32px';
        titleElement.style.marginBottom = '30px';
        titleElement.style.textAlign = 'center';
        slideElement.appendChild(titleElement);

        const contentElement = document.createElement('p');
        contentElement.innerText = slide.content;
        contentElement.style.fontSize = '18px';
        contentElement.style.textAlign = 'center';
        contentElement.style.whiteSpace = 'pre-wrap';
        slideElement.appendChild(contentElement);

        slideElement.style.position = 'absolute';
        slideElement.style.left = '-9999px';
        document.body.appendChild(slideElement);

        const canvas = await html2canvas(slideElement, { scale: 2, useCORS: true, logging: false });
        const imgData = canvas.toDataURL('image/png');
        document.body.removeChild(slideElement);

        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const imgProps = pdf.getImageProperties(imgData);
        const aspectRatio = imgProps.width / imgProps.height;
        let newImgWidth = pdfWidth;
        let newImgHeight = newImgWidth / aspectRatio;
        if (newImgHeight > pdfHeight) {
          newImgHeight = pdfHeight;
          newImgWidth = newImgHeight * aspectRatio;
        }
        const xOffset = (pdfWidth - newImgWidth) / 2;
        const yOffset = (pdfHeight - newImgHeight) / 2;

        if (i > 0) pdf.addPage();
        pdf.addImage(imgData, 'PNG', xOffset, yOffset, newImgWidth, newImgHeight);
      }
      pdf.save('fundraising-deck.pdf');
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <>
      <NextSeo title="Fundraising" description="Fundraising toolkit" />
      <Header />
      <main className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6">Fundraising Toolkit</h1>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Funding Stage</label>
            <select
              value={stage}
              onChange={(e) => setStage(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            >
              <option value="preseed">Pre-Seed / Friends & Family</option>
              <option value="seed">Seed / Strategic Angels</option>
              <option value="seriesA">Series A / Institutional</option>
              <option value="public">Public Token Round</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Deck Prompt</label>
            <Textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} />
          </div>
          {Object.entries(sections).map(([key, value]) => (
            <div key={key}>
              <label className="block text-sm font-medium text-gray-700 capitalize">
                {key}
              </label>
              <Textarea name={key} value={value} onChange={handleSectionChange} />
            </div>
          ))}
          <Button onClick={handleGenerate}>Generate Deck</Button>
        </div>

        {slides.length > 0 && (
          <div className="mt-8">
            <SlideEditor initialSlides={slides} onSlidesChange={setSlides} />
            <Button className="mt-4" onClick={handleExportPDF} disabled={isExporting}>
              {isExporting ? 'Exporting...' : 'Export PDF'}
            </Button>
          </div>
        )}

        <div className="mt-10 space-y-4">
          <h2 className="text-xl font-semibold">Deal Room Uploads</h2>
          <Input type="file" multiple />
        </div>

        <div className="mt-10 space-y-4">
          <h2 className="text-xl font-semibold">Investor CRM (Pipeline)</h2>
          <table className="min-w-full text-sm">
            <thead>
              <tr>
                <th className="border px-2 py-1">Investor</th>
                <th className="border px-2 py-1">Stage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-2 py-1">Example VC</td>
                <td className="border px-2 py-1">Contacted</td>
              </tr>
            </tbody>
          </table>
          <Button onClick={() => alert('Round closed and stakeholders notified (placeholder).')}>Close Round</Button>
        </div>
      </main>
    </>
  );
}
