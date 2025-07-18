import React  from 'react;
import {';
  ChevronRight,'
  Plus,;
  UserCheck,;
  FileText,'
  Bell,;
} from '@/components/ui/icons'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
export function ClientDashboard(): '
  return (;
    <div className="space-y-6 px-4 pb-24">;"
      <section className="mt-4">;"
        <Button className="w-full py-6" size="lg">;"
          <Plus className="mr-2 h-5 w-5" /> Post a New Job;"
        </Button>;";"
      </section>;"
;"
      <section>;"
        <div className="flex items-center justify-between mb-4">;"
          <h2 className="text-lg font-medium">Active Projects</h2>;"
          <Link href="/mobile/projects">;"
            <Button variant="ghost" size="sm" className="h-8 gap-1">;"
              View all <ChevronRight className="h-4 w-4" />;
            </Button>;"
          </Link>;";"
        </div>;"
;"
        <Card>;"
          <CardContent className="p-4">;"
            <div className="space-y-4">;"
              <div className="flex justify-between items-start">;"
                <div>;"
                  <h3 className="font-medium">Website Redesign</h3>;"
                  <div className="text-sm text-muted-foreground">;
                    In Progress • Due in 12 days;
                  </div>;"
                </div>;";"
                <Badge>3 Milestones</Badge>;"
              </div>;"
;"
              <div className="space-y-1">;"
                <div className="flex justify-between text-sm">;"
                  <span>Progress</span>;"
                  <span className="font-medium">60%</span>;"
                </div>;"
                <div className="h-2 bg-primary/20 rounded-full overflow-hidden">;"
                  <div;"
                    className="h-full bg-primary rounded-full"
                    style={{ width: '60%' }}'
                  ></div>;
                </div>;
              </div>'
;
              <div className="flex justify-between items-center">;"
                <div className="flex -space-x-2">;"
                  <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center">;"
                    <UserCheck className="h-4 w-4" />;"
                  </div>;"
                  <div className="w-7 h-7 rounded-full bg-secondary/20 border-2 border-background flex items-center justify-center">;"
                    <UserCheck className="h-4 w-4" />;"
                  </div>;"
                </div>;"
                <Button size="sm" variant="outline">;