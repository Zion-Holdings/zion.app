import { useEffect, useRef } from "react";
import type { ApiLog } from "@/hooks/useApiKeys";

interface ApiLogsChartProps {
  logs: ApiLog[];
}

export function ApiLogsChart({ logs }: ApiLogsChartProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    let chart: any;
    const scriptId = "chartjs-script";

    const loadChart = () => {
      if (!canvasRef.current || !(window as any).Chart) return;
      const Chart = (window as any).Chart;
      const dateMap: Record<string, number> = {};
      logs.forEach((log) => {
        const day = new Date(log.created_at).toISOString().split("T")[0];
        if (day) {
          dateMap[day] = (dateMap[day] || 0) + 1;
        }
      });
      const labels = Object.keys(dateMap).sort();
      const data = labels.map((l) => dateMap[l]);

      if (chart) chart.destroy();
      chart = new Chart(canvasRef.current, {
        type: "bar",
        data: {
          labels,
          datasets: [
            {
              label: "Logs per Day",
              data,
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: { beginAtZero: true },
          },
        },
      });
    };

    if (typeof (window as any).Chart !== "undefined") {
      loadChart();
    } else {
      let script = document.getElementById(scriptId) as HTMLScriptElement | null;
      if (!script) {
        script = document.createElement("script");
        script.id = scriptId;
        script.src = "https://cdn.jsdelivr.net/npm/chart.js";
        script.onload = loadChart;
        document.body.appendChild(script);
      } else {
        script.addEventListener("load", loadChart);
      }
    }

    return () => {
      if (chart) chart.destroy();
    };
  }, [logs]);

  return <canvas ref={canvasRef} width={400} height={150} />;
}
