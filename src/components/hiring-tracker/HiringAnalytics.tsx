<<<<<<< HEAD
import { useState, useEffect } from 'react';';
import { useJobApplications } from '@/hooks/useJobApplications;'';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card;';
=======
import { useState, useEffect } from 'react''
import { useJobApplications } from '@/hooks/useJobApplications'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
import {;
  PieChart,;
  Pie,;
  Cell,;
  ResponsiveContainer,;
<<<<<<< HEAD
  BarChart,;''
  Bar,;
  XAxis,;
  YAxis,;''
  Tooltip,;;
} from 'recharts;'
;
interface HiringAnalyticsProps {;''
  jobId?: string;
};
;''
interface StatusDistributionEntry {;;
  status: "string;",;";";";";""
  count: "number;";";""
} catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {};";";""
;";";";""
interface FunnelDataEntry {;";";";";""
  name: "string;",;";";";";""
  value: "number;";"
} catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {};""
;";"";
export function HiringAnalytics(): unknown {): unknown {): unknown {): unknown {): unknown {{ jobId }: HiringAnalyticsProps) {;";";""
  const { applications, isLoading } = useJobApplications(jobId);";";";""
  const [analyticsData, setAnalyticsData] = useState<{;";";";";""
    statusDistribution: "StatusDistributionEntry[];",;";";";";""
    timeToHire: "number;",";";";";""
    conversionRate: "number;",;";";";";""
    funnelData: "FunnelDataEntry[];";";";";""
  }>({;";";";";""
    statusDistribution: "[]",;";";";";""
    timeToHire: "0",;";";";";""
    conversionRate: "0",;";";";";""
    funnelData: "[]",;"
  });""
;";""
  useEffect(() => {;";";""
    if (applications && applications.length > 0) {;";";";""
      // Calculate status distribution;";";";";""
      const statusCounts: unknown "Record<string", number> = {};"
=======
  BarChart,'
  Bar,'
  XAxis,
  YAxis,'
  Tooltip,'
} from 'recharts'

interface HiringAnalyticsProps {'
  jobId?: string'

'
interface StatusDistributionEntry {'
  status: "string,;";
  count: "number";
} catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {};"";"";
interface FunnelDataEntry {;"";
  name: string,;"";
  value: number""
} catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}
;"
export function HiringAnalytics(): unknown {): unknown {): unknown {): unknown {): unknown {{ jobId }: HiringAnalyticsProps) {;";
  const { applications, isLoading } = useJobApplications(jobId)";";
  const [analyticsData, setAnalyticsData] = useState<{"
    statusDistribution: "StatusDistributionEntry[],;";
    timeToHire: number,;"";
    conversionRate: number",;"
    funnelData: FunnelDataEntry[];"";
  }>({;""
    statusDistribution: "[],;"";
    timeToHire: 0,;"
    conversionRate: 0",""
    funnelData: [],"
  })"

  useEffect(() => {;"";
    if (applications && applications.length > 0) {;"";
      // Calculate status distribution;"";
      const statusCounts: unknown "Record<string", number> = {}
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
      applications.forEach((app) => {;
        statusCounts[app.status] = (statusCounts[app.status] || 0) + 1;
      });

      const statusDistribution = Object.entries(statusCounts).map(;
        ([status, count]) => ({;
          status,;
          count,;
<<<<<<< HEAD
        }),;""
      );";""
;";";""
      // Calculate time to hire (in days);";";";""
      const hiredApplications: unknown = applications.filter(;";";";";""
        (app) => app.status === 'hired',;'
      );''
      let avgTimeToHire = 0;
;
      if (hiredApplications.length > 0) {;''
        const totalDays: unknown "unknown = hiredApplications.reduce((sum", app) => {;"
          const hireDate: unknown = app.updated_at ? new Date(app.updated_at) : null;
=======
        }),
      );""
;"
      // Calculate time to hire (in days)";"
      const hiredApplications = applications.filter(";""
        (app) => app.status === 'hired','
      )'
      let avgTimeToHire = 0'

      if (hiredApplications.length > 0) {'
        const totalDays: unknown unknown = hiredApplications.reduce((sum, app) => {"
          const hireDate = app.updated_at ? new Date(app.updated_at) : null;
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
          if (hireDate) {;
            const applyDate = new Date(app.created_at);
            const daysDiff: unknown =;
              (hireDate.getTime() - applyDate.getTime()) / (1000 * 3600 * 24);
            return sum + daysDiff;
          } else {;
            return sum;
          };
        }, 0);

        avgTimeToHire = Math.round(totalDays / hiredApplications.length);
      };

      // Calculate conversion rate;
      const conversionRate: unknown =;
        hiredApplications.length > 0;
<<<<<<< HEAD
          ? Math.round((hiredApplications.length / applications.length) * 100);""
          : 0;";""
;";";""
      // Funnel data;";";";""
      const funnelData: unknown = [;;
        { name: 'Applied', value: "applications.length "},;";";";""
        {;";";";";""
          name: 'Shortlisted',;;'
          value: applications.filter((app) => app.status === 'shortlisted');'
            .length,;
        },;''
        {;;
          name: 'Interview',;;'
          value: applications.filter((app) => app.status === 'interview');'
            .length,;
        },;''
        {;;
          name: 'Hired',;;'
          value: applications.filter((app) => app.status === 'hired').length,;'
        },;''
      ];
;
      setAnalyticsData({;''
        statusDistribution,;;
        timeToHire: "avgTimeToHire",;"
=======
          ? Math.round((hiredApplications.length / applications.length) * 100)"
          : 0;"";
      // Funnel data;"";
      const funnelData = [
        { name: 'Applied', value: "applications.length "},;"
        {;";"
          name: 'Shortlisted','
          value: applications.filter((app) => app.status === 'shortlisted')'
            .length,;
        },'
        {'
          name: 'Interview','
          value: applications.filter((app) => app.status === 'interview')'
            .length,;
        },'
        {'
          name: 'Hired','
          value: applications.filter((app) => app.status === 'hired').length,'
        },'
      ]'

      setAnalyticsData({'
        statusDistribution,'
        timeToHire: avgTimeToHire","
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
        conversionRate,;
        funnelData,;
      });
    };
  }, [applications]);

  if (isLoading) {;
<<<<<<< HEAD
    return <div>Loading analytics data...</div>;""
  };";""
;";";""
  if (!applications || applications.length === 0) {;";";";""
    return (;";";";";""
      <Card className="text-center py-16">;";";";""
        <CardContent>;";";";";""
          <h3 className="text-lg font-semibold mb-2">No data available</h3>;";";";";""
          <p className="text-muted-foreground mb-6">;"
            You need applications to generate analytics;
          </p>;
        </CardContent>;""
      </Card>;";""
    );";";""
  };";";";""
;";";";";""
  const COLORS: unknown = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];'
;''
  return (;;
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;"
      {/* Status Distribution */};""
      <Card>;";""
        <CardHeader>;";";""
          <CardTitle>Application Status Distribution</CardTitle>;";";";""
        </CardHeader>;";";";";""
        <CardContent className="h-64">;";";";";""
          <ResponsiveContainer width="100%" height="100%">;";""
            <PieChart>;";";""
              <Pie;";";";""
                data={analyticsData.statusDistribution};";";";";""
                cx="50%";";";";";""
                cy="50%";";";""
                labelLine={false};";";";""
                outerRadius={80};";";";";""
                fill="#8884d8";";";";";""
                dataKey="count";"
=======
    return <div>Loading analytics data...</div>
  };"
;";
  if (!applications || applications.length === 0) {";";
    return ("
      <Card className="text-center py-16>;"";
        <CardContent>;"";
          <h3 className="text-lg font-semibold mb-2">No data available</h3>;"
          <p className=text-muted-foreground mb-6">"
            You need applications to generate analytics;
          </p>;
        </CardContent>
      </Card>;"
    );";
  }";";
"
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8']'
'
  return ('
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6>"
      {/* Status Distribution */}"
      <Card>;"
        <CardHeader>;";"
          <CardTitle>Application Status Distribution</CardTitle>;";"
        </CardHeader>;";"
        <CardContent className=h-64">""
          <ResponsiveContainer width=100% height="100%">;
            <PieChart>";"
              <Pie;";"
                data={analyticsData.statusDistribution};";";
                cx="50%"
                cy=50%"";
                labelLine={false};"";
                outerRadius={80};""
                fill="#8884d8;"";
                dataKey="count"
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
                label={({ name, percent }) =>;
                  `${name}: ${((percent ?? 0) * 100).toFixed(0)}%`;
                };
              >;
                {analyticsData.statusDistribution.map((_entry, index) => (;
                  <Cell;`
                    key={`cell-${index}`};
                    fill={COLORS[index % COLORS.length]};
                  />))};
              </Pie>;
              <Tooltip />;
            </PieChart>;
          </ResponsiveContainer>;
        </CardContent>;
      </Card>;
<<<<<<< HEAD
;
      {/* Time to Hire */};""
      <Card>;";""
        <CardHeader>;";";""
          <CardTitle>Time to Hire</CardTitle>;";";";""
        </CardHeader>;";";";";""
        <CardContent className="flex flex-col items-center justify-center h-64">;";";";";""
          <div className="text-5xl font-bold text-primary">;";";";";""
            {analyticsData.timeToHire || 'N/A'};''
          </div>;;
          <div className="text-sm text-muted-foreground mt-2">;"
=======

      {/* Time to Hire */}
      <Card>;""
        <CardHeader>;"
          <CardTitle>Time to Hire</CardTitle>";"
        </CardHeader>";""
        <CardContent className=flex flex-col items-center justify-center h-64>"
          <div className="text-5xl font-bold text-primary>;"";
            {analyticsData.timeToHire || 'N/A'}'
          </div>'
          <div className="text-sm text-muted-foreground mt-2">
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
            Average days from application to hire;
          </div>;
        </CardContent>;
      </Card>;
<<<<<<< HEAD
;
      {/* Conversion Rate */};""
      <Card>;";""
        <CardHeader>;";";""
          <CardTitle>Application Conversion Rate</CardTitle>;";";";""
        </CardHeader>;";";";";""
        <CardContent className="flex flex-col items-center justify-center h-64">;";";";";""
          <div className="text-5xl font-bold text-primary">;";";""
            {analyticsData.conversionRate}%;";";";""
          </div>;";";";";""
          <div className="text-sm text-muted-foreground mt-2">;"
            Applications to hired ratio;
          </div>;""
        </CardContent>;";""
      </Card>;";";""
;";";";""
      {/* Hiring Funnel */};";";";";""
      <Card className="lg:col-span-3">;";""
        <CardHeader>;";";""
          <CardTitle>Hiring Funnel</CardTitle>;";";";""
        </CardHeader>;";";";";""
        <CardContent className="h-80">;";";";";""
          <ResponsiveContainer width="100%" height="100%">;";";";";""
            <BarChart data={analyticsData.funnelData} layout="vertical">;";";";";""
              <XAxis type="number" />;";";";";""
              <YAxis dataKey="name" type="category" width={100} />;";";";""
              <Tooltip />;";";";";""
              <Bar dataKey="value" fill="#8884d8" radius={[0, 4, 4, 0]}>;"
=======

      {/* Conversion Rate */}
      <Card>;""
        <CardHeader>;"
          <CardTitle>Application Conversion Rate</CardTitle>";"
        </CardHeader>";""
        <CardContent className=flex flex-col items-center justify-center h-64>"
          <div className="text-5xl font-bold text-primary>;""
            {analyticsData.conversionRate}%;""
          </div>;"";
          <div className=text-sm text-muted-foreground mt-2">"
            Applications to hired ratio;
          </div>
        </CardContent>;"
      </Card>;";
";";
      {/* Hiring Funnel */}"
      <Card className="lg:col-span-3>;"
        <CardHeader>";
          <CardTitle>Hiring Funnel</CardTitle>;"";
        </CardHeader>;""
        <CardContent className="h-80>;"";
          <ResponsiveContainer width="100%" height=100%>"
            <BarChart data={analyticsData.funnelData} layout="vertical>;"";
              <XAxis type="number" />;"
              <YAxis dataKey=name" type="category width={100} />;"";
              <Tooltip />;"";
              <Bar dataKey="value" fill=#8884d8 radius={[0, 4, 4, 0]}>"
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
                {analyticsData.funnelData.map((_entry, index) => (;
                  <Cell;`
                    key={`cell-${index}`};
                    fill={COLORS[index % COLORS.length]};
                  />))};
              </Bar>;
            </BarChart>;
          </ResponsiveContainer>;
        </CardContent>;
<<<<<<< HEAD
      </Card>;""
    </div>;";""
  );";";""
};";";";""
";";";""
}";";""
}";""
}""
}""
=======
      </Card>"
    </div>;
  );"";
};"";
";"
}";"

}"
}'';;`
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
