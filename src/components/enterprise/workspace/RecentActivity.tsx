
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function RecentActivity() {
  // Mock activity data
  const activities = [
    {
      id: "act-1",
      user: "Michael Chen",
      action: "posted a new job",
      target: "Senior React Developer",
      timestamp: "1h ago",
      type: "job"
    },
    {
      id: "act-2",
      user: "Sarah Wilson",
      action: "shortlisted",
      target: "5 candidates for UI/UX Designer",
      timestamp: "3h ago",
      type: "candidate"
    },
    {
      id: "act-3",
      user: "David Johnson",
      action: "scheduled an interview with",
      target: "Alex Morgan",
      timestamp: "Yesterday",
      type: "interview"
    },
    {
      id: "act-4",
      user: "Emily Davis",
      action: "added comments to",
      target: "Frontend Developer application",
      timestamp: "2d ago",
      type: "comment"
    }
  ];

  const getBadgeForType = (type: string) => {
    switch (type) {
      case "job":
        return <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">Job</Badge>;
      case "candidate":
        return <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">Candidate</Badge>;
      case "interview":
        return <Badge variant="outline" className="bg-purple-100 text-purple-800 border-purple-200">Interview</Badge>;
      case "comment":
        return <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200">Comment</Badge>;
      default:
        return <Badge variant="outline">Activity</Badge>;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Latest actions from your team</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y divide-border">
          {activities.map((activity) => (
            <div key={activity.id} className="p-4 flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                {activity.user.charAt(0)}
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm">
                    <span className="font-medium">{activity.user}</span>{" "}
                    {activity.action}{" "}
                    <span className="font-medium">{activity.target}</span>
                  </p>
                  <div className="flex items-center gap-2 mt-1 sm:mt-0">
                    {getBadgeForType(activity.type)}
                    <span className="text-xs text-muted-foreground">{activity.timestamp}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="p-3 text-center border-t border-border">
          <button className="text-sm text-blue-500 font-medium hover:text-blue-700">
            View All Activity
          </button>
        </div>
      </CardContent>
    </Card>
  );
}
