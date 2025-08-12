
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function TeamStats() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Team Stats</CardTitle>
        <CardDescription>Performance metrics for your team</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-sm">
            <span>Team capacity</span>
            <span className="font-medium">32 / 50 seats used</span>
          </div>
          <Progress value={64} className="h-2" />
          <p className="text-xs text-muted-foreground">18 seats available</p>
        </div>
        
        <div className="space-y-4 pt-2">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground">Active projects</p>
              <p className="text-xl font-bold">12</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground">Job postings</p>
              <p className="text-xl font-bold">8</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground">Avg. time to hire</p>
              <p className="text-xl font-bold">14d</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground">Interviews this month</p>
              <p className="text-xl font-bold">24</p>
            </div>
          </div>
        </div>
        
        <div className="pt-4 text-center border-t border-border mt-4">
          <button className="text-sm text-blue-500 font-medium hover:text-blue-700">
            View Full Analytics
          </button>
        </div>
      </CardContent>
    </Card>
  );
}
