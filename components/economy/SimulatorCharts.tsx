import React, { useMemo } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { SimulationPoint } from '../../utils/data/tokenSimulator';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

export type SimulatorChartsProps = {
  points: SimulationPoint[];
};

export default function SimulatorCharts({ points }: SimulatorChartsProps) {
  const labels = useMemo(() => points.map((p) => `M${p.monthIndex + 1}`), [points]);

  const velocityData = useMemo(
    () => ({
      labels,
      datasets: [
        {
          label: 'Token Velocity',
          data: points.map((p) => p.estimatedTokenVelocity),
          borderColor: 'rgb(59, 130, 246)',
          backgroundColor: 'rgba(59, 130, 246, 0.3)',
        },
      ],
    }),
    [labels, points]
  );

  const supplyVsGrowthData = useMemo(
    () => ({
      labels,
      datasets: [
        {
          label: 'Circulating Supply',
          yAxisID: 'y',
          data: points.map((p) => p.circulatingSupply),
          borderColor: 'rgb(16, 185, 129)',
          backgroundColor: 'rgba(16, 185, 129, 0.3)',
        },
        {
          label: 'Ecosystem Growth Index',
          yAxisID: 'y1',
          data: points.map((p) => p.ecosystemGrowthIndex),
          borderColor: 'rgb(234, 179, 8)',
          backgroundColor: 'rgba(234, 179, 8, 0.3)',
        },
      ],
    }),
    [labels, points]
  );

  const inflationData = useMemo(
    () => ({
      labels,
      datasets: [
        {
          label: 'Net Inflation/Deflation %',
          data: points.map((p) => p.netInflationRatePct),
          borderColor: 'rgb(244, 63, 94)',
          backgroundColor: 'rgba(244, 63, 94, 0.3)',
        },
      ],
    }),
    [labels, points]
  );

  return (
    <div className="space-y-8">
      <div className="bg-white/70 dark:bg-black/40 rounded-lg p-4 border border-gray-200 dark:border-gray-800">
        <h3 className="font-semibold mb-3">Token Velocity</h3>
        <Line data={velocityData} options={{ responsive: true, maintainAspectRatio: false }} height={260} />
      </div>

      <div className="bg-white/70 dark:bg-black/40 rounded-lg p-4 border border-gray-200 dark:border-gray-800">
        <h3 className="font-semibold mb-3">Ecosystem Growth vs. Supply</h3>
        <Line
          data={supplyVsGrowthData}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              y: { type: 'linear', position: 'left' as const },
              y1: { type: 'linear', position: 'right' as const, grid: { drawOnChartArea: false } },
            },
          }}
          height={260}
        />
      </div>

      <div className="bg-white/70 dark:bg-black/40 rounded-lg p-4 border border-gray-200 dark:border-gray-800">
        <h3 className="font-semibold mb-3">Inflation / Deflation Model</h3>
        <Line data={inflationData} options={{ responsive: true, maintainAspectRatio: false }} height={260} />
      </div>
    </div>
  );
}