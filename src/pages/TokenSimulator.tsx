import React, { useEffect, useRef, useState } from 'react';
import { Header } from '@/components/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { useToast } from '@/hooks/use-toast';
import { callZionGPT } from '@/utils/zion-gpt';
import { logErrorToProduction } from '@/utils/productionLogger';
import { suggestFix } from '@/utils/suggestFix';

interface Inputs {
  circulating: number;
  activeWallets: number;
  escrowLocked: number;
  rewardsPerMonth: number;
  treasuryBalance: number;
  burnPercent: number;
  emissionSchedule: string;
}

const DEFAULT_INPUTS: Inputs = {
  circulating: 1000000,
  activeWallets: 1000,
  escrowLocked: 50000,
  rewardsPerMonth: 10000,
  treasuryBalance: 250000,
  burnPercent: 0,
  emissionSchedule: 'linear',
};

const SCENARIOS = [
  { value: 'growth', label: 'Growth-only' },
  { value: 'bear', label: 'Bear market' },
  { value: 'over', label: 'DAO over-issuance' },
  { value: 'airdrop', label: 'Airdrop unlock' },
  { value: 'zk', label: 'Real-world ZK employment rewards' },
];

export default function TokenSimulator() {
  const [inputs, setInputs] = useState<Inputs>(DEFAULT_INPUTS);
  const [scenario, setScenario] = useState('growth');
  const [months, setMonths] = useState(12);
  const [forecast, setForecast] = useState<number[]>([]);
  const [gptOutput, setGptOutput] = useState('');
  const { toast } = useToast();

  const velocityChart = useRef<HTMLCanvasElement | null>(null);
  const supplyChart = useRef<HTMLCanvasElement | null>(null);

  const handleChange =
    (field: keyof Inputs) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = parseFloat(e.target.value);
      setInputs((prev) => ({ ...prev, [field]: isNaN(value) ? 0 : value }));
    };

  const simulate = () => {
    const data: number[] = [];
    let supply = inputs.circulating;
    for (let i = 0; i < months; i++) {
      supply += inputs.rewardsPerMonth;
      supply -= supply * (inputs.burnPercent / 100);
      data.push(supply);
    }
    setForecast(data);
  };

  useEffect(simulate, [inputs, months]);

  useEffect(() => {
    let chart: any;
    const id = 'chartjs-script';
    const load = () => {
      if (!velocityChart.current || !(window as any).Chart) return;
      const Chart = (window as any).Chart;
      const labels = Array.from({ length: months }, (_, i) => `${i + 1}`);
      const velocities = labels.map(
        (_, i) =>
          (inputs.activeWallets * (i + 1)) / (forecast[i] || inputs.circulating)
      );
      if (chart) chart.destroy();
      chart = new Chart(velocityChart.current, {
        type: 'line',
        data: {
          labels,
          datasets: [{ label: 'Token Velocity', data: velocities }],
        },
      });
    };
    if (typeof (window as any).Chart !== 'undefined') {
      load();
    } else {
      let s = document.getElementById(id) as HTMLScriptElement | null;
      if (!s) {
        s = document.createElement('script');
        s.id = id;
        s.src = 'https://cdn.jsdelivr.net/npm/chart.js';
        s.onload = load;
        document.body.appendChild(s);
      } else {
        s.addEventListener('load', load);
      }
    }
    return () => {
      if (chart) chart.destroy();
    };
  }, [forecast, inputs.activeWallets, months]);

  useEffect(() => {
    let chart: any;
    const id = 'chartjs-script2';
    const load = () => {
      if (!supplyChart.current || !(window as any).Chart) return;
      const Chart = (window as any).Chart;
      const labels = Array.from({ length: months }, (_, i) => `${i + 1}`);
      if (chart) chart.destroy();
      chart = new Chart(supplyChart.current, {
        type: 'line',
        data: {
          labels,
          datasets: [{ label: 'Circulating Supply', data: forecast }],
        },
      });
    };
    if (typeof (window as any).Chart !== 'undefined') {
      load();
    } else {
      let s = document.getElementById(id) as HTMLScriptElement | null;
      if (!s) {
        s = document.createElement('script');
        s.id = id;
        s.src = 'https://cdn.jsdelivr.net/npm/chart.js';
        s.onload = load;
        document.body.appendChild(s);
      } else {
        s.addEventListener('load', load);
      }
    }
    return () => {
      if (chart) chart.destroy();
    };
  }, [forecast, months]);

  const handleGPT = async () => {
    toast({ title: 'Running GPT Analysis...' });
    try {
      const result = await callZionGPT({
        prompt: `Analyze the impact of increasing ZION$ staking rewards by 2x over 6 months with 10K active users and weekly emission cap.`,
        purpose: 'support',
      });
      setGptOutput(result);
    } catch (err) {
      logErrorToProduction(err instanceof Error ? err.message : String(err), err instanceof Error ? err : undefined, { context: 'TokenSimulator.handleGPT' });
      const suggestion = await suggestFix(err instanceof Error ? err : new Error(String(err)));
      setGptOutput(suggestion);
      toast({ title: 'GPT analysis failed', variant: 'destructive' });
    }
  };

  const exportCSV = () => {
    const headers = ['Month', 'Supply'];
    const rows = forecast.map((v, i) => `${i + 1},${v}`);
    const csv = [headers.join(','), ...rows].join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'simulation.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  const exportJSON = () => {
    const data = forecast.map((v, i) => ({ month: i + 1, supply: v }));
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'simulation.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const exportPDF = async () => {
    const { jsPDF } = await import('jspdf');
    const doc = new jsPDF();
    doc.text('ZION$ Simulation Summary', 10, 10);
    forecast.forEach((v, i) => {
      doc.text(`Month ${i + 1}: ${v.toFixed(2)}`, 10, 20 + i * 7);
    });
    doc.save('simulation.pdf');
  };

  return (
    <div>
      <Header />
      <div className="min-h-screen bg-zion-blue pt-12 pb-20">
        <div className="container mx-auto px-4 space-y-8">
          <h1 className="text-3xl font-bold text-white">
            ZION$ Token Simulator
          </h1>
          <Card>
            <CardHeader>
              <CardTitle>Inputs</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                type="number"
                value={inputs.circulating}
                onChange={handleChange('circulating')}
                placeholder="Circulating ZION$"
              />
              <Input
                type="number"
                value={inputs.activeWallets}
                onChange={handleChange('activeWallets')}
                placeholder="Daily active wallets"
              />
              <Input
                type="number"
                value={inputs.escrowLocked}
                onChange={handleChange('escrowLocked')}
                placeholder="Total escrow locked"
              />
              <Input
                type="number"
                value={inputs.rewardsPerMonth}
                onChange={handleChange('rewardsPerMonth')}
                placeholder="Rewards issued/month"
              />
              <Input
                type="number"
                value={inputs.treasuryBalance}
                onChange={handleChange('treasuryBalance')}
                placeholder="Treasury balance"
              />
              <Input
                type="number"
                value={inputs.burnPercent}
                onChange={handleChange('burnPercent')}
                placeholder="Proposed burn/tax %"
              />
              <Input
                value={inputs.emissionSchedule}
                onChange={(e) =>
                  setInputs((prev) => ({
                    ...prev,
                    emissionSchedule: e.target.value,
                  }))
                }
                placeholder="DAO emissions schedule"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Scenario</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Select value={scenario} onValueChange={setScenario}>
                <SelectTrigger className="w-full md:w-1/3">
                  <SelectValue placeholder="Scenario" />
                </SelectTrigger>
                <SelectContent>
                  {SCENARIOS.map((s) => (
                    <SelectItem key={s.value} value={s.value}>
                      {s.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <div className="space-y-2">
                <p className="text-white">Forecast Months: {months}</p>
                <Slider
                  min={12}
                  max={36}
                  step={1}
                  defaultValue={[12]}
                  onValueChange={([v]) => setMonths(v || 12)}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Token Velocity</CardTitle>
            </CardHeader>
            <CardContent>
              <canvas ref={velocityChart} height={150}></canvas>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Ecosystem Growth vs Supply</CardTitle>
            </CardHeader>
            <CardContent>
              <canvas ref={supplyChart} height={150}></canvas>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>GPT Analysis</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button onClick={handleGPT}>Run Analysis</Button>
              {gptOutput && (
                <p className="text-white whitespace-pre-wrap">{gptOutput}</p>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Export</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-4">
              <Button onClick={exportCSV}>CSV</Button>
              <Button onClick={exportJSON}>JSON</Button>
              <Button onClick={exportPDF}>PDF Summary</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
