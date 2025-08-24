import { useEffect, useMemo, useState } from 'react';
import Head from 'next/head';
import { marked } from 'marked';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

interface Milestone {
  description: string;
  amount: string;
}

export default function ContractBuilderPage() {
  const [projectTitle, setProjectTitle] = useState('Zion Project');
  const [clientName, setClientName] = useState('Client Co.');
  const [talentName, setTalentName] = useState('Developer');
  const [deliverables, setDeliverables] = useState('List the expected deliverables here.');
  const [milestones, setMilestones] = useState<Milestone[]>([{ description: 'Initial delivery', amount: '1000' }]);
  const [paymentStructure, setPaymentStructure] = useState('50% upfront, 50% on completion');
  const [walletAddress, setWalletAddress] = useState('');

  const [markdown, setMarkdown] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>('');

  const htmlPreview = useMemo(() => marked.parse(markdown || '') as unknown as string, [markdown]);

  const onAddMilestone = () => setMilestones((m) => [...m, { description: '', amount: '' }]);
  const onRemoveMilestone = (idx: number) => setMilestones((m) => m.filter((_, i) => i !== idx));
  const onMilestoneChange = (idx: number, field: keyof Milestone, value: string) =>
    setMilestones((m) => m.map((row, i) => (i === idx ? { ...row, [field]: value } : row)));

  async function generateContract() {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/contract-builder/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          projectTitle,
          clientName,
          talentName,
          deliverables,
          milestones,
          paymentStructure,
          walletAddress,
        }),
      });
      const data = await res.json();
      setMarkdown(data.markdown || '');
    } catch (e: any) {
      setError(e?.message || 'Failed to generate contract');
    } finally {
      setLoading(false);
    }
  }

  async function exportPDF() {
    const el = document.getElementById('contract-preview');
    if (!el) return;
    const canvas = await html2canvas(el, { scale: 2 });
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const imgProps = (pdf as any).getImageProperties(imgData);
    const imgWidth = pageWidth;
    const imgHeight = (imgProps.height * imgWidth) / imgProps.width;

    let position = 0;
    let heightLeft = imgHeight;

    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft > 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    pdf.save(`${projectTitle.replace(/\s+/g, '_')}_Agreement.pdf`);
  }

  async function compileSolidity() {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/contract-builder/compile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ projectTitle }),
      });
      const data = await res.json();
      return data.source as string;
    } catch (e: any) {
      setError(e?.message || 'Failed to compile');
      return '';
    } finally {
      setLoading(false);
    }
  }

  async function deployWithMetamask() {
    try {
      const source = await compileSolidity();
      if (!source) return;

      // For MVP, we skip server-side compilation to bytecode due to environment constraints.
      // In a production version, use a compiler service to return ABI/bytecode.
      alert('For this MVP, deployment prepares a transaction template. Complete deploy via your wallet integration.');
    } catch (e: any) {
      setError(e?.message || 'Deploy failed');
    }
  }

  async function saveAgreement() {
    if (!markdown) return;
    try {
      const res = await fetch('/api/contract-builder/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ projectTitle, markdown, meta: { clientName, talentName, walletAddress } }),
      });
      const data = await res.json();
      if (!data.ok) throw new Error(data.error || 'Save failed');
      alert('Saved as ' + data.filename);
    } catch (e: any) {
      setError(e?.message || 'Failed to save');
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Contract Builder — Zion</title>
      </Head>
      <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h1 className="text-2xl font-semibold">Contract Builder</h1>
          <div className="grid grid-cols-1 gap-3">
            <label className="block">
              <span className="text-sm">Project title</span>
              <input value={projectTitle} onChange={(e) => setProjectTitle(e.target.value)} className="mt-1 w-full border rounded p-2" />
            </label>
            <label className="block">
              <span className="text-sm">Client name</span>
              <input value={clientName} onChange={(e) => setClientName(e.target.value)} className="mt-1 w-full border rounded p-2" />
            </label>
            <label className="block">
              <span className="text-sm">Talent name</span>
              <input value={talentName} onChange={(e) => setTalentName(e.target.value)} className="mt-1 w-full border rounded p-2" />
            </label>
            <label className="block">
              <span className="text-sm">Deliverables</span>
              <textarea value={deliverables} onChange={(e) => setDeliverables(e.target.value)} className="mt-1 w-full border rounded p-2" rows={4} />
            </label>

            <div className="space-y-2">
              <div className="text-sm font-medium">Milestones</div>
              {milestones.map((m, idx) => (
                <div key={idx} className="flex gap-2 items-center">
                  <input
                    placeholder="Description"
                    value={m.description}
                    onChange={(e) => onMilestoneChange(idx, 'description', e.target.value)}
                    className="flex-1 border rounded p-2"
                  />
                  <input
                    placeholder="Amount"
                    value={m.amount}
                    onChange={(e) => onMilestoneChange(idx, 'amount', e.target.value)}
                    className="w-32 border rounded p-2"
                  />
                  <button onClick={() => onRemoveMilestone(idx)} className="text-red-500 text-sm">Remove</button>
                </div>
              ))}
              <button onClick={onAddMilestone} className="text-blue-600 text-sm">+ Add milestone</button>
            </div>

            <label className="block">
              <span className="text-sm">Payment structure</span>
              <input value={paymentStructure} onChange={(e) => setPaymentStructure(e.target.value)} className="mt-1 w-full border rounded p-2" />
            </label>
            <label className="block">
              <span className="text-sm">On-chain payment address (optional)</span>
              <input value={walletAddress} onChange={(e) => setWalletAddress(e.target.value)} className="mt-1 w-full border rounded p-2" />
            </label>

            <div className="flex gap-3">
              <button onClick={generateContract} disabled={loading} className="bg-black text-white px-4 py-2 rounded">
                {loading ? 'Generating…' : 'Generate contract'}
              </button>
              <button onClick={() => { void exportPDF(); }} className="border px-4 py-2 rounded">Download PDF</button>
              <button onClick={() => { void deployWithMetamask(); }} className="border px-4 py-2 rounded">Deploy (optional)</button>
              <button onClick={() => { void saveAgreement(); }} className="border px-4 py-2 rounded">Save</button>
            </div>

            {error && <div className="text-red-600 text-sm">{error}</div>}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Preview</h2>
            {walletAddress && (
              <span className="inline-flex items-center text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                Verify on-chain
              </span>
            )}
          </div>
          <div id="contract-preview" className="mt-3 bg-white border rounded p-4 prose max-w-none" dangerouslySetInnerHTML={{ __html: htmlPreview }} />
        </div>
      </div>
    </div>
  );
}