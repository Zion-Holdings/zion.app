import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface UserProgressProps {
  current: number;
  goal: number;
}

export function UserProgress({ current, goal }: UserProgressProps) {
  const value = Math.min(100, Math.round((current / goal) * 100));

  return (
    <Card>
      <CardHeader>
        <CardTitle>Progress</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between mb-2 text-sm">
          <span className="text-muted-foreground">
            {current}/{goal} pts
          </span>
          <span className="font-medium">{value}%</span>
        </div>
        <Progress value={value} />
      </CardContent>
    </Card>
  );
}
