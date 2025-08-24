import React, { useEffect, useState } from 'react';
import { CHAINS, ChainConfig } from '../../utils/chains';

export type StatusProps = {
  from: ChainConfig;
  to: ChainConfig;
  txHash?: string;
  startedAt?: number;
  arrived?: boolean;
  arrivalSeconds?: number;
};

export default function StatusTracker({ from, to, txHash, startedAt, arrived, arrivalSeconds }: StatusProps) {
  const [elapsed, setElapsed] = useState<number>(0);
  useEffect(() => {
    if (!startedAt || arrived) return;
    const id = setInterval(() => setElapsed(Math.floor((Date.now() - startedAt) / 1000)), 500);
    return () => clearInterval(id);
  }, [startedAt, arrived]);

  return (
    <div className="p-3 border rounded bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800 text-sm">
      {txHash ? (
        <div className="flex flex-col gap-1">
          <div>
            Tracking transfer from <b>{from.name}</b> to <b>{to.name}</b>
          </div>
          <div className="text-xs text-gray-500">
            Tx: <a className="underline" href={`${from.explorerUrl}/tx/${txHash}`} target="_blank" rel="noreferrer">{txHash.slice(0, 10)}...</a>
          </div>
          {!arrived && startedAt && <div>Elapsed: {elapsed}s</div>}
          {arrived && arrivalSeconds !== undefined && (
            <div className="text-green-600">ZION$ arrived on {to.name} in {arrivalSeconds}s</div>
          )}
        </div>
      ) : (
        <div>No transfer in progress</div>
      )}
    </div>
  );
}