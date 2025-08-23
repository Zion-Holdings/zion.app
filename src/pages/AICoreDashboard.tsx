import { useState } from 'react';
import { triggerTraining } from '@/services/zionGPTService';
import { logErrorToProduction } from '@/utils/productionLogger';

export default function AICoreDashboard() {
  const [status, setStatus] = useState<string>('idle');

  async function startTraining() {
    setStatus('starting');
    try {
      const res = await triggerTraining();
      setStatus(res.status);
    } catch (err: any) {
      setStatus('error');
      logErrorToProduction(err, { message: 'Training error' });
    }
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">ZionGPT Core</h1>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={startTraining}
      >
        Trigger Training
      </button>
      <p className="mt-4">Status: {status}</p>
    </div>
  );
}
