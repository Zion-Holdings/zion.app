import React, { useState } from 'react';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { encryptData, decryptData } from '@/utils/vaultEncryption';
import { logInfo } from '@/utils/productionLogger';


interface VaultData {
  daoKey: string;
  treasuryAddress: string;
  distribution: string;
  manifesto: string;
  whitepaper: string;
  promptBase: string;
}

export default function FounderBackupVault() {
  const [data, setData] = useState<VaultData>({
    daoKey: '',
    treasuryAddress: '',
    distribution: '',
    manifesto: '',
    whitepaper: '',
    promptBase: '',
  });
  const [password, setPassword] = useState('');
  const [encrypted, setEncrypted] = useState<Uint8Array | null>(null);
  const [failCount, setFailCount] = useState(0);

  const handleChange = (field: keyof VaultData) => (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setData({ ...data, [field]: e.target.value });
  };

  const allFilled = Object.values(data).every(Boolean);

  const handleExport = async () => {
    if (!password) return alert('Set a password');
    const encryptedData = await encryptData(JSON.stringify(data), password);
    setEncrypted(encryptedData);
    const zip = new JSZip();
    zip.file('vault.enc', encryptedData);
    const blob = await zip.generateAsync({ type: 'blob' });
    saveAs(blob, 'zion_backup.zip');
  };

  const handleExportPdf = async () => {
    const { jsPDF } = await import('jspdf');
    const doc = new jsPDF();
    doc.text('Zion Backup Checklist', 10, 10);
    const items = [
      'DAO Genesis Key / Multisig fallback',
      'Treasury recovery address',
      'ZION$ initial distribution',
      'Manifesto v1-v5',
      'Whitepaper + roadmap history',
      'Original GPT prompt base (ZionGPT Core)',
    ];
    items.forEach((item, i) => {
      doc.text(`${i + 1}. ${item}`, 10, 20 + i * 10);
    });
    doc.save('zion_backup.pdf');
  };

  const simulateRecovery = async () => {
    if (!encrypted) return alert('Export first');
    const pass = prompt('Enter vault password') || '';
    try {
      const arrayBuffer = new ArrayBuffer(encrypted.buffer.byteLength);
      new Uint8Array(arrayBuffer).set(new Uint8Array(encrypted.buffer));
      const decrypted = await decryptData(arrayBuffer, pass);
      logInfo('Decrypted:', { data: decrypted });
      alert('Recovery successful');
      setFailCount(0);
    } catch (err) {
      const attempts = failCount + 1;
      setFailCount(attempts);
      if (attempts >= 3) {
        alert('Vault self-destruct triggered. DAO alerted.');
      } else {
        alert('Incorrect password');
      }
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Founder Backup Vault</h1>
        <p className="text-sm text-muted-foreground">Securely store critical recovery data. All fields are encrypted with your password.</p>

        <div className="grid gap-4">
          <Textarea placeholder="DAO Genesis Key / Multisig fallback" value={data.daoKey} onChange={handleChange('daoKey')} />
          <Textarea placeholder="Treasury recovery address" value={data.treasuryAddress} onChange={handleChange('treasuryAddress')} />
          <Textarea placeholder="ZION$ initial distribution" value={data.distribution} onChange={handleChange('distribution')} />
          <Textarea placeholder="Manifesto v1-v5" value={data.manifesto} onChange={handleChange('manifesto')} />
          <Textarea placeholder="Whitepaper + roadmap history" value={data.whitepaper} onChange={handleChange('whitepaper')} />
          <Textarea placeholder="Original GPT prompt base (ZionGPT Core)" value={data.promptBase} onChange={handleChange('promptBase')} />
        </div>

        <div className="flex items-center gap-2">
          <Input type="password" placeholder="Vault password" value={password} onChange={(e) => setPassword(e.target.value)} className="max-w-xs" />
          <span className="text-sm">{allFilled ? '✅ All items added' : '❌ Missing items'}</span>
        </div>

        <div className="flex gap-4">
          <Button onClick={handleExport}>Download Encrypted ZIP</Button>
          <Button variant="secondary" onClick={handleExportPdf}>Export Checklist PDF</Button>
          <Button variant="outline" onClick={simulateRecovery}>Simulate Recovery</Button>
        </div>
      </div>
    </AdminLayout>
  );
}
