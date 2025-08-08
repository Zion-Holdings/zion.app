import os from 'os';
import { addAlert } from './metrics';

let started = false;

export function startSystemMonitor() {
  if (started) return;
  started = true;
  const cpuCores = os.cpus()?.length || 1;

  setInterval(() => {
    try {
      const totalMem = os.totalmem();
      const freeMem = os.freemem();
      const usedMemPct = (1 - freeMem / totalMem) * 100;
      const load1 = os.loadavg()[0];
      const loadPerCore = load1 / cpuCores; // ~1.0 means fully loaded per core

      if (usedMemPct > 90) {
        addAlert({ type: 'memory', level: 'critical', message: `High memory usage: ${usedMemPct.toFixed(1)}%`, value: usedMemPct, ts: Date.now() });
      } else if (usedMemPct > 80) {
        addAlert({ type: 'memory', level: 'warning', message: `Elevated memory usage: ${usedMemPct.toFixed(1)}%`, value: usedMemPct, ts: Date.now() });
      }

      if (loadPerCore > 1.5) {
        addAlert({ type: 'cpu', level: 'critical', message: `High CPU load per core: ${loadPerCore.toFixed(2)}`, value: loadPerCore, ts: Date.now() });
      } else if (loadPerCore > 1.0) {
        addAlert({ type: 'cpu', level: 'warning', message: `Elevated CPU load per core: ${loadPerCore.toFixed(2)}`, value: loadPerCore, ts: Date.now() });
      }

      // Network monitoring placeholder; integrate Datadog or system-level metrics collectors for real data.
    } catch {}
  }, 5000);
}