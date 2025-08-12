import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AnalyticsChart } from "@/components/analytics/AnalyticsChart";

interface FeatureUsageChartProps {
  data: Array<Record<string, any>>;
  timeRange: string;
  onTimeRangeChange: (range: string) => void;
}

export function FeatureUsageChart({ data, timeRange, onTimeRangeChange }: FeatureUsageChartProps) {
  const dataKeys = data && data.length > 0 && data[0]
    ? Object.keys(data[0]).filter(key => key !== 'date')
    : [];

  return (
    <Card className="bg-zion-blue-dark border-zion-blue-light">
      <CardHeader>
        <CardTitle className="text-white text-lg">Feature Usage</CardTitle>
        <CardDescription className="text-zion-slate-light">How often key features are used</CardDescription>
      </CardHeader>
      <CardContent>
        <AnalyticsChart
          title=""
          data={(data || []).map(item => ({
            name: item.name || item.label || 'Unknown',
            value: item.value || item.count || 0,
            ...item
          }))}
          dataKeys={dataKeys}
          type="bar"
          timeRange={timeRange}
          onTimeRangeChange={onTimeRangeChange}
        />
      </CardContent>
    </Card>
  );
}
