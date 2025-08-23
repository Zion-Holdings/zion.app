import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend, Filler);

export type LineChartProps = {
  labels: string[];
  data: number[];
  color?: string; // css color
  height?: number;
};

export default function LineChart({ labels, data, color = '#3b82f6', height = 160 }: LineChartProps) {
  return (
    <div style={{ height }}>
      <Line
        data={{
          labels,
          datasets: [
            {
              data,
              borderColor: color,
              backgroundColor: color + '33',
              fill: true,
              tension: 0.35,
              pointRadius: 0,
            },
          ],
        }}
        options={{
          maintainAspectRatio: false,
          plugins: { legend: { display: false }, tooltip: { intersect: false, mode: 'index' } },
          scales: {
            x: { display: false },
            y: { display: false },
          },
        }}
      />
    </div>
  );
}