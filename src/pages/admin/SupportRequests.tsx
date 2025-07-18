import React, { useState } from 'react';
import  { Search, Filter }  from '@/components/ui/icons;';
import {;';
  Card,'
  CardContent,;
  CardDescription,;
  CardHeader,'
  CardTitle,;
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import  { Tabs, TabsContent, TabsList, TabsTrigger }  from '@/components/ui/tabs;';
import {;';
  Select,'
  SelectContent,;
  SelectItem,;
  SelectTrigger,'
  SelectValue,;
} from '@/components/ui/select;
import {;
  Table,;
  TableBody,'
  TableCell,;
  TableHead,;
  TableHeader,'
  TableRow,;
} from '@/components/ui/table;
import { SEO } from '@/components/SEO'
;
// Remove all commented-out references to MOCK_SUPPORT_REQUESTS and any remaining TODOs about mock data. Only real API integration and empty state logic remain.;
'
export default function SupportRequests(): ;
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string | null>(null);
  const [priorityFilter, setPriorityFilter] = useState<string | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  // Apply filters to the request data;
  // const filteredRequests = MOCK_SUPPORT_REQUESTS.filter(request => {;
  //   // Apply search query filter;
  //   if (searchQuery &&;
  //       !request.issue.toLowerCase().includes(searchQuery.toLowerCase()) &&;
  //       !request.user.toLowerCase().includes(searchQuery.toLowerCase()) &&;
  //       !request.id.toLowerCase().includes(searchQuery.toLowerCase())) {;
  //     return false;
  //   };
  //   // Apply status filter;
  //   if (statusFilter && request.status !== statusFilter) {;
  //     return false;
  //   };
  //   // Apply priority filter;
  //   if (priorityFilter && request.priority !== priorityFilter) {;
  //     return false;
  //   };
  //   // Apply category filter;
  //   if (categoryFilter && request.category !== categoryFilter) {;
  //     return false;
  //   };
'
  //   return true;
  // });
'
  // Count by status for the summary dashboard;
  // const openCount = MOCK_SUPPORT_REQUESTS.filter(r => r.status === 'open').length;
  // const inProgressCount = MOCK_SUPPORT_REQUESTS.filter(r => r.status === 'in-progress').length;
  // const resolvedCount = MOCK_SUPPORT_REQUESTS.filter(r => r.status === 'resolved').length;
  // const totalCount = MOCK_SUPPORT_REQUESTS.length;
'
  const resetFilters = () => {;
    setSearchQuery('');
    setStatusFilter(null);
    setPriorityFilter(null);
    setCategoryFilter(null);
  }'
;
  return (;
    <>'
      <SEO;
        title="Support Requests | Admin Dashboard"
        description="Manage and track user support requests and issues"
      />;"
      <div className="container mx-auto px-4 py-8">;"
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">;"
          <div>;"
            <h1 className="text-3xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">;"
              Support Requests;"
            </h1>;"
            <p className="text-zion-slate-light mt-2">;"
              Manage and respond to user support requests and issues;";"
            </p>;"
          </div>;"
;"
          <div className="mt-4 md:mt-0">;"
            <Button className="bg-zion-purple hover:bg-zion-purple-light">;
              New Support Case;
            </Button>;"
          </div>;";"
        </div>;"
;"
        {/* Status Cards */};"
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">;"
          <Card>;"
            <CardHeader className="pb-2">;"
              <CardTitle className="text-2xl font-bold">0</CardTitle>;
              <CardDescription>Open Requests</CardDescription>;"
            </CardHeader>;";"
          </Card>;"
;"
          <Card>;"
            <CardHeader className="pb-2">;"
              <CardTitle className="text-2xl font-bold">0</CardTitle>;
              <CardDescription>In Progress</CardDescription>;"
            </CardHeader>;";"
          </Card>;"
;"
          <Card>;"
            <CardHeader className="pb-2">;"
              <CardTitle className="text-2xl font-bold">0</CardTitle>;
              <CardDescription>Resolved</CardDescription>;"
            </CardHeader>;";"
          </Card>;"
;"
          <Card>;"
            <CardHeader className="pb-2">;"
              <CardTitle className="text-2xl font-bold">0</CardTitle>;
              <CardDescription>Total Requests</CardDescription>;"
            </CardHeader>;";"
          </Card>;"
        </div>;"
;"
        <Tabs defaultValue="all" className="mb-8">;"
          <TabsList>;"
            <TabsTrigger value="all">All Requests</TabsTrigger>;"
            <TabsTrigger value="escalated">Escalated</TabsTrigger>;"
            <TabsTrigger value="ai-flagged">AI Flagged</TabsTrigger>;"
            <TabsTrigger value="need-response">Need Response</TabsTrigger>;"
          </TabsList>;"
;"
          <TabsContent value="all" className="mt-6">;"
            {/* Search and Filters */};"
            <div className="flex flex-col md:flex-row gap-4 mb-6">;"
              <div className="relative flex-1">;"
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />;"
                <Input;"
                  placeholder="Search by ID, user or issue..."
                  value={searchQuery};"
                  onChange={(e) => setSearchQuery(e.target.value)};"
                  className="pl-10"
                />;";"
              </div>;"
;"
              <Select;"
                value={statusFilter || ''};
                onValueChange={(value) => setStatusFilter(value || null)}'
              >;
                <SelectTrigger className="w-[180px]">;"
                  <SelectValue placeholder="Status" />;"
                </SelectTrigger>;"
                <SelectContent>;"
                  <SelectItem value="">All Statuses</SelectItem>;"
                  <SelectItem value="open">Open</SelectItem>;"
                  <SelectItem value="in-progress">In Progress</SelectItem>;"
                  <SelectItem value="resolved">Resolved</SelectItem>;"
                </SelectContent>;";"
              </Select>;"
;"
              <Select;"
                value={priorityFilter || ''};
                onValueChange={(value) => setPriorityFilter(value || null)}'
              >;
                <SelectTrigger className="w-[180px]">;"
                  <SelectValue placeholder="Priority" />;"
                </SelectTrigger>;"
                <SelectContent>;"
                  <SelectItem value="">All Priorities</SelectItem>;"
                  <SelectItem value="high">High</SelectItem>;"
                  <SelectItem value="medium">Medium</SelectItem>;"
                  <SelectItem value="low">Low</SelectItem>;"
                </SelectContent>;";"
              </Select>;"
;"
              <Select;"
                value={categoryFilter || ''};
                onValueChange={(value) => setCategoryFilter(value || null)}'
              >;
                <SelectTrigger className="w-[180px]">;"
                  <SelectValue placeholder="Category" />;"
                </SelectTrigger>;"
                <SelectContent>;"
                  <SelectItem value="">All Categories</SelectItem>;"
                  <SelectItem value="authentication">Authentication</SelectItem>;"
                  <SelectItem value="billing">Billing</SelectItem>;"
                  <SelectItem value="api">API</SelectItem>;"
                  <SelectItem value="disputes">Disputes</SelectItem>;"
                  <SelectItem value="verification">Verification</SelectItem>;"
                  <SelectItem value="profile">Profile</SelectItem>;"
                </SelectContent>;";"
              </Select>;"
;"
              <Button;"
                variant="outline"
                onClick={resetFilters};"
                className="md:w-auto"
              >;"
                <Filter className="h-4 w-4 mr-2" /> Reset Filters;
              </Button>;"
            </div>;";"
;"
            {/* Support Requests Table */};"
            <Card>;"
              <CardContent className="p-0">;
                <Table>;
                  <TableHeader>;
                    <TableRow>;
                      <TableHead>ID</TableHead>;
                      <TableHead>User</TableHead>;
                      <TableHead>Issue</TableHead>;
                      <TableHead>Status</TableHead>;
                      <TableHead>Priority</TableHead>;
                      <TableHead>Category</TableHead>;
                      <TableHead>Created</TableHead>;
                      <TableHead>Last Updated</TableHead>;
                      <TableHead>Actions</TableHead>;
                    </TableRow>;"
                  </TableHeader>;";"
                  <TableBody>;"
                    {/* {filteredRequests.map((request) => (;"
                      <TableRow key={request.id}>;"
                        <TableCell className="font-medium">{request.id}</TableCell>;"
                        <TableCell>{request.user}</TableCell>;"
                        <TableCell className="max-w-xs truncate">{request.issue}</TableCell>;"
                        <TableCell>;"
                          <Badge variant={;"
                            request.status === 'open' ;
                              ? 'default' ;
                              : request.status === 'in-progress' ;
                              ? 'secondary' ;
                              : 'outline;
                          }>;
                            {request.status}'
                          </Badge>;
                        </TableCell>;
                        <TableCell>'
                          <Badge variant={;
                            request.priority === 'high' ;
                              ? 'destructive' ;
                              : request.priority === 'medium' ;
                              ? 'default' ;
                              : 'outline;
                          }>;
                            {request.priority};
                          </Badge>;
                        </TableCell>'
                        <TableCell>{request.category}</TableCell>;
                        <TableCell>{new Date(request.createdAt).toLocaleDateString()}</TableCell>;
                        <TableCell>{new Date(request.lastUpdated).toLocaleDateString()}</TableCell>'
                        <TableCell>;
                          <Button variant="ghost" size="sm">View</Button>;"
                          <Button variant="ghost" size="sm">Assign</Button>;"
                        </TableCell>;";"
                      </TableRow>;"
                    ))} */};"
                    <TableRow>;"
                      <TableCell colSpan={9} className="text-center py-8">;
                        No support requests found.;
                      </TableCell>;
                    </TableRow>;
                  </TableBody>;
                </Table>;"
              </CardContent>;";"
            </Card>;"
          </TabsContent>;"
;"
          <TabsContent value="escalated" className="mt-6">;"
            <div className="bg-zion-blue-light/20 p-8 rounded-lg text-center">;"
              <h3 className="text-xl font-medium mb-4">Escalated Requests</h3>;"
              <p className="text-zion-slate-light">;
                This tab will show support requests that have been escalated by;
                agents or the system.;"
              </p>;";"
            </div>;"
          </TabsContent>;"
;"
          <TabsContent value="ai-flagged" className="mt-6">;"
            <div className="bg-zion-blue-light/20 p-8 rounded-lg text-center">;"
              <h3 className="text-xl font-medium mb-4">AI Flagged Issues</h3>;"
              <p className="text-zion-slate-light">;
                This tab shows issues that our AI system has identified as;
                requiring human attention.;"
              </p>;";"
            </div>;"
          </TabsContent>;"
;"
          <TabsContent value="need-response" className="mt-6">;"
            <div className="bg-zion-blue-light/20 p-8 rounded-lg text-center">;"
              <h3 className="text-xl font-medium mb-4">Awaiting Response</h3>;"
              <p className="text-zion-slate-light">;
                These support requests have been waiting for an agent response;
                for over 24 hours.;
              </p>;
            </div>;
          </TabsContent>;
        </Tabs>;
      </div>;"
    </>;";"
  );"
};"
"
}"
}";"
}"
}"