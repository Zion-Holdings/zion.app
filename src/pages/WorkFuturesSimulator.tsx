import React, { useState, useEffect, useRef } from 'react';
import { Header } from '@/components/Header';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { callZionGPT } from '@/utils/zion-gpt';
import { logErrorToProduction } from '@/utils/productionLogger';
import { suggestFix } from '@/utils/suggestFix';

const SCENARIOS = [
  { value: 'ubi', label: 'UBI' },
  { value: 'token', label: 'Token barter' },
  { value: 'reputation', label: 'Reputation-only DAO' },
  { value: 'gift', label: 'Gift economy' },
];

const ROLES = [
  { value: 'talent', label: 'Talent' },
  { value: 'coordinator', label: 'Coordinator' },
  { value: 'nation', label: 'Nation-builder' },
];

const SECTORS = [
  'Health',
  'Creative',
  'Infrastructure',
  'Tech',
];

export default function WorkFuturesSimulator() {
  const [scenario, setScenario] = useState('ubi');
  const [role, setRole] = useState('talent');
  const [sector, setSector] = useState('Health');
  const [output, setOutput] = useState('');
  const [workIndex, setWorkIndex] = useState<number | null>(null);
  const networkCanvas = useRef<HTMLCanvasElement | null>(null);
  const { toast } = useToast();

  const runSimulation = async () => {
    toast({ title: 'Running ZionGPT simulation...' });
    try {
      const prompt = `Simulate a future of work using the Zion protocol. Scenario lens: ${scenario}. Role: ${role}. Sector: ${sector}. Provide a short timeline of key decisions, describe the network of people/skills/tasks, assign a decentralized work index score from 1-100, and craft a short resume/manifesto snippet for the role.`;
      const result = await callZionGPT({ prompt, purpose: 'support' });
      setOutput(result);
      setWorkIndex(Math.floor(Math.random() * 60) + 40); // simple placeholder
    } catch (err) {
      logErrorToProduction(err instanceof Error ? err.message : String(err), err instanceof Error ? err : undefined, { context: 'WorkFuturesSimulator.runSimulation' });
      const suggestion = await suggestFix(err instanceof Error ? err : new Error(String(err)));
      setOutput(suggestion);
      toast({ title: 'Simulation failed', variant: 'destructive' });
    }
  };

  useEffect(() => {
    if (!networkCanvas.current) {
      logErrorToProduction('Canvas ref missing', undefined, { context: 'WorkFuturesSimulator.useEffect' });
      return;
    }
    const ctx = networkCanvas.current.getContext('2d');
    if (!ctx) {
      logErrorToProduction('2D context unavailable', undefined, { context: 'WorkFuturesSimulator.useEffect' });
      return;
    }
    try {
      const width = networkCanvas.current.width;
      const height = networkCanvas.current.height;
      ctx.clearRect(0, 0, width, height);
      const nodes = 5;
      const positions = Array.from({ length: nodes }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
      }));
      ctx.fillStyle = '#3b82f6';
      positions.forEach((p) => {
        if (!p || typeof p.x !== 'number' || typeof p.y !== 'number') {
          logErrorToProduction('Invalid position', undefined, {
            context: 'WorkFuturesSimulator.drawNode',
            position: p,
          });
          return;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, 6, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.strokeStyle = 'rgba(59,130,246,0.6)';
      positions.forEach((p, i) => {
        positions.forEach((q, j) => {
          if (
            i < j &&
            Math.random() > 0.5 &&
            p &&
            q &&
            typeof p.x === 'number' &&
            typeof p.y === 'number' &&
            typeof q.x === 'number' &&
            typeof q.y === 'number'
          ) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          } else if (!p || !q) {
            logErrorToProduction('Invalid connection', undefined, {
              context: 'WorkFuturesSimulator.drawEdge',
              p,
              q,
            });
          }
        });
      });
    } catch (err) {
      logErrorToProduction(err instanceof Error ? err.message : String(err), err instanceof Error ? err : undefined, { context: 'WorkFuturesSimulator.useEffect' });
    }
  }, [output]);

  const exportJSON = () => {
    const data = { scenario, role, sector, output, workIndex };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'futures-simulation.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const exportPDF = async () => {
    const { jsPDF } = await import('jspdf');
    const doc = new jsPDF();
    doc.text('Zion Work Futures Simulation', 10, 10);
    doc.text(`Scenario: ${scenario}`, 10, 20);
    doc.text(`Role: ${role}`, 10, 30);
    doc.text(`Sector: ${sector}`, 10, 40);
    if (workIndex !== null) doc.text(`Decentralized Work Index: ${workIndex}`, 10, 50);
    doc.text(output, 10, 60);
    doc.save('futures-simulation.pdf');
  };

  return (
    <div>
      <Header />
      <div className="min-h-screen bg-zinc-900 text-white py-12">
        <div className="container mx-auto px-4 space-y-8">
          <h1 className="text-3xl font-bold">ZionGPT Work Futures Simulator</h1>
          <Card>
            <CardHeader>
              <CardTitle>Preferences</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block mb-1">Scenario Lens</label>
                <Select value={scenario} onValueChange={setScenario}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {SCENARIOS.map((s) => (
                      <SelectItem key={s.value} value={s.value}>{s.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block mb-1">Roleplay</label>
                <Select value={role} onValueChange={setRole}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {ROLES.map((r) => (
                      <SelectItem key={r.value} value={r.value}>{r.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block mb-1">Sector</label>
                <Select value={sector} onValueChange={setSector}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {SECTORS.map((s) => (
                      <SelectItem key={s} value={s}>{s}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <Button onClick={runSimulation}>Run Simulation</Button>

          {output && (
            <>
              <Card>
                <CardHeader>
                  <CardTitle>Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="whitespace-pre-wrap mb-4">{output}</p>
                  {workIndex !== null && (
                    <p className="font-semibold">Decentralized Work Index: {workIndex}</p>
                  )}
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Network Visualizer</CardTitle>
                </CardHeader>
                <CardContent>
                  <canvas ref={networkCanvas} width={300} height={200}></canvas>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Export</CardTitle>
                </CardHeader>
                <CardContent className="flex gap-4">
                  <Button onClick={exportJSON}>JSON</Button>
                  <Button onClick={exportPDF}>PDF</Button>
                </CardContent>
              </Card>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
