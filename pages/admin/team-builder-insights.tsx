import type { NextPage } from 'next';
import { AppLayout } from '@/layout/AppLayout'; // Assuming a general AppLayout for admin too, or an AdminLayout
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { supabase } from '@/integrations/supabase/client'; // Ensure this client has admin rights or appropriate RLS
import { useEffect, useState } from 'react';
import { ProjectBrief, TeamRecommendation, RecommendedRole } from '@/types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'; // Assuming recharts is available

interface RoleCount {
  role: string;
  count: number;
}

interface HighBudgetProject {
  projectName: string;
  budget: string;
  estimatedMaxCost?: number;
  briefId: string;
  recommendationId?: string;
}

const HIGH_BUDGET_THRESHOLD = 50000; // Example threshold for "high budget"

// Basic budget parser (similar to BudgetStatusDisplay, simplified)
const parseMaxBudget = (budgetString: string): number | null => {
  budgetString = budgetString.toLowerCase().replace(/[^0-9-\s$k,]/g, '');
  let max: number | null = null;
  const kTo1000 = (val: string) => parseFloat(val.replace('k', '')) * 1000;

  if (budgetString.includes('-')) {
    const parts = budgetString.split('-');
    max = parseFloat(parts[1].replace(/[$,\s]/g, ''));
    if (parts[1].includes('k')) max = kTo1000(parts[1]);
  } else if (budgetString.startsWith('<') || budgetString.startsWith('under')) {
    max = parseFloat(budgetString.replace(/[<$,\sunderk]/g, ''));
    if (budgetString.includes('k')) max = kTo1000(budgetString);
  } else if (!budgetString.startsWith('>')) { // Single number or approx
    max = parseFloat(budgetString.replace(/[$,\sapproxk]/g, ''));
    if (budgetString.includes('k')) max = kTo1000(budgetString);
  }
  return isNaN(max as number) ? null : max;
};


const TeamBuilderInsightsPage: NextPage = () => {
  const [mostRequestedRoles, setMostRequestedRoles] = useState<RoleCount[]>([]);
  const [highBudgetProjects, setHighBudgetProjects] = useState<HighBudgetProject[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        // Fetch team recommendations for role aggregation
        // Ensure RLS allows admin access or use a service role client for this page if needed
        const { data: recommendationsData, error: recError } = await supabase
          .from('team_recommendations')
          .select('id, roles, total_project_estimate, project_brief_id');

        if (recError) throw recError;

        // Explicitly type recommendations to help TypeScript understand the structure, especially for JSONB 'roles'
        const recommendations = recommendationsData as unknown as Array<Pick<TeamRecommendation, 'id' | 'roles' | 'total_project_estimate' | 'project_brief_id'>>;


        const roleCounts: Record<string, number> = {};
        recommendations?.forEach(rec => {
          if (rec.roles && Array.isArray(rec.roles)) { // Ensure roles is an array
            (rec.roles as RecommendedRole[]).forEach(role => {
              roleCounts[role.role] = (roleCounts[role.role] || 0) + 1;
            });
          }
        });
        const aggregatedRoles = Object.entries(roleCounts)
          .map(([role, count]) => ({ role, count }))
          .sort((a, b) => b.count - a.count);
        setMostRequestedRoles(aggregatedRoles);

        // Fetch project briefs for high-budget projects
        const { data: briefsData, error: briefError } = await supabase
          .from('project_briefs')
          .select('id, project_name, budget');

        if (briefError) throw briefError;

        const briefs = briefsData as unknown as Array<Pick<ProjectBrief, 'id' | 'project_name' | 'budget'>>;


        const highBudgetList: HighBudgetProject[] = [];
        briefs?.forEach(brief => {
          const userMaxBudget = parseMaxBudget(brief.budget);

          // Find the corresponding recommendation
          const recommendationForBrief = recommendations?.find(r => r.project_brief_id === brief.id);
          const estimatedMaxCost = recommendationForBrief?.total_project_estimate?.max;

          let isHigh = false;
          if (userMaxBudget !== null && userMaxBudget >= HIGH_BUDGET_THRESHOLD) {
            isHigh = true;
          }
          // Check estimated cost only if user budget didn't already flag it as high
          if (!isHigh && estimatedMaxCost !== undefined && estimatedMaxCost >= HIGH_BUDGET_THRESHOLD) {
            isHigh = true;
          }

          if (isHigh) {
            highBudgetList.push({
              projectName: brief.project_name,
              budget: brief.budget,
              estimatedMaxCost: estimatedMaxCost,
              briefId: brief.id,
              recommendationId: recommendationForBrief?.id,
            });
          }
        });
        setHighBudgetProjects(highBudgetList.sort((a,b) => (b.estimatedMaxCost || 0) - (a.estimatedMaxCost || 0) ));

      } catch (err: any) {
        console.error("Error fetching admin insights:", err);
        setError(err.message || "Failed to fetch data.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) return <AppLayout><div className="p-4">Loading insights...</div></AppLayout>;
  if (error) return <AppLayout><div className="p-4 text-red-500">Error: {error}</div></AppLayout>;

  return (
    <AppLayout>
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold tracking-tight sm:text-3xl">Team Builder Insights</CardTitle>
            <CardDescription>Analytics on generated teams and project briefs.</CardDescription>
          </CardHeader>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Most Requested Roles</CardTitle>
            </CardHeader>
            <CardContent>
              {mostRequestedRoles.length > 0 ? (
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={mostRequestedRoles.slice(0, 10)} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="role" angle={-30} textAnchor="end" height={70} interval={0} />
                    <YAxis allowDecimals={false} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="count" fill="#8884d8" name="Times Requested" />
                  </BarChart>
                </ResponsiveContainer>
              ) : <p>No role data available.</p>}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>High-Budget Projects (Over ${HIGH_BUDGET_THRESHOLD.toLocaleString()})</CardTitle>
              <CardDescription>Projects with high user-defined budget or high AI-estimated cost.</CardDescription>
            </CardHeader>
            <CardContent>
              {highBudgetProjects.length > 0 ? (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Project Name</TableHead>
                      <TableHead>User Budget</TableHead>
                      <TableHead>Est. Max Cost</TableHead>
                      {/* <TableHead>Actions</TableHead> */}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {highBudgetProjects.slice(0, 10).map((p) => (
                      <TableRow key={p.briefId}>
                        <TableCell className="font-medium">{p.projectName}</TableCell>
                        <TableCell>{p.budget}</TableCell>
                        <TableCell>{p.estimatedMaxCost ? `$${p.estimatedMaxCost.toLocaleString()}` : 'N/A'}</TableCell>
                        {/* <TableCell><Button variant="outline" size="sm">View</Button></TableCell> */}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              ) : <p>No high-budget projects flagged.</p>}
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
};

export default TeamBuilderInsightsPage;
