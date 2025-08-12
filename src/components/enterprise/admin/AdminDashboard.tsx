
import React from "react";
import { AdminHeader } from "./AdminHeader";
import { TeamManagement } from "./TeamManagement";
import { UsageStats } from "./UsageStats";
import { RoleManagement } from "./RoleManagement";
import { TeamActivity } from "./TeamActivity";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

export function AdminDashboard() {
  return (
    <div className="container mx-auto max-w-7xl py-8 px-4 md:px-6">
      <AdminHeader />
      
      <Tabs defaultValue="team" className="mt-8">
        <TabsList className="grid w-full grid-cols-4 mb-8">
          <TabsTrigger value="team">Team Management</TabsTrigger>
          <TabsTrigger value="roles">Role Assignment</TabsTrigger>
          <TabsTrigger value="usage">Usage Limits</TabsTrigger>
          <TabsTrigger value="activity">Team Activity</TabsTrigger>
        </TabsList>
        
        <TabsContent value="team" className="space-y-8">
          <TeamManagement />
        </TabsContent>
        
        <TabsContent value="roles" className="space-y-8">
          <RoleManagement />
        </TabsContent>
        
        <TabsContent value="usage" className="space-y-8">
          <UsageStats />
        </TabsContent>
        
        <TabsContent value="activity" className="space-y-8">
          <TeamActivity />
        </TabsContent>
      </Tabs>
    </div>
  );
}
