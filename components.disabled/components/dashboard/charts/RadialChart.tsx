import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export type RadialChartProps = {
  labels: string[];
  data: number[];
  colors?: string[];
  size?: number;
};

export default function RadialChart({ labels, data, colors = ['#6366f1', '#22d3ee', '#f59e0b'], size = 180 }: RadialChartProps) {
  return (
    <div style={{ width: size, height: size }}>
      <Doughnut
        data={{
          labels,
          datasets: [
            {
              data,
              backgroundColor: colors,
              borderWidth: 0,
            },
          ],
        }}
        options={{
          maintainAspectRatio: false,
          cutout: '70%',
          plugins: { legend: { display: false } },
        }}
      />
    </div>
  );
}