
import React, { useState, useEffect } from "react";
import { Check, MessageSquare, Download } from '@/components/ui/icons';
import { useRouter } from 'next/router';
import { useDisputes } from "@/hooks/useDisputes";
import {logErrorToProduction} from '@/utils/productionLogger';

import type { Dispute, DisputeMessage, DisputeStatus, ResolutionType } from "@/types/disputes";
import { disputeReasonLabels } from "@/types/disputes";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { format, formatDistanceToNow } from "date-fns";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";




import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";

export function DisputeDetail() {
  const router = useRouter();
  const { _disputeId } = router.query as { disputeId?: string };
  const { _user } = useAuth();
  const { getDisputeById, updateDisputeStatus, resolveDispute, getDisputeMessages, addDisputeMessage } = useDisputes();

  const [dispute, setDispute] = useState<Dispute | null>(null);
  const [messages, setMessages] = useState<DisputeMessage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [adminNote, setAdminNote] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [resolution, setResolution] = useState<{ summary: string; resolution_type: ResolutionType }>({
  summary: "",
  resolution_type: "compromise",
});
   
  const [activeTab, setActiveTab] = useState("overview");

  // Check if user is admin (placeholder - implement proper admin check)
  const isAdmin = user?.userType === "admin";
  
  useEffect(() => {
    if (!disputeId) return;

    const loadDisputeData = async () => {
      setIsLoading(true);
      try {
        const disputeData = await getDisputeById(disputeId);
        if (!disputeData) {
          toast.error("Dispute not found");
          router.push("/dashboard/disputes");
          return;
        }
        setDispute(disputeData);
        
        const messagesData = await getDisputeMessages(disputeId);
        setMessages(messagesData);
      } catch {
        logErrorToProduction('Error loading dispute data:', { data: 'Error occurred' });
        toast.error("Failed to load dispute");
      } finally {
        setIsLoading(false);
      }
    };
    
    loadDisputeData();
  }, [disputeId, getDisputeById, getDisputeMessages, router]);

  const handleStatusChange = async (_status: DisputeStatus) => {
    if (!disputeId) return;

    const success = await updateDisputeStatus(disputeId, status);
    if (success) {
      // Update the dispute object with the new status
      setDispute({ ...dispute!, status: status });
    } else {
      toast.error("Failed to update dispute status");
    }
  };

  const handleResolveDispute = async () => {
    if (!disputeId) return;
    
    if (!resolution.summary) {
      toast.error("Please provide a resolution summary");
      return;
    }
    
    const success = await resolveDispute(disputeId, {
      summary: resolution.summary,
      resolution_type: (resolution.resolution_type as ResolutionType) || "compromise",
    });
    if (success && dispute) {
      setDispute({
        ...dispute,
        resolution_summary: resolution.summary,
        resolution_type: resolution.resolution_type,
        resolved_at: new Date().toISOString(),
      });
    } else {
      toast.error("Failed to resolve dispute");
    }
  };

  const handleSendMessage = async () => {
    if (!disputeId || !message.trim()) return;
    
    setIsSending(true);
    try {
      const success = await addDisputeMessage(disputeId, message, isAdmin);
      if (success) {
        // Refresh messages
        const updatedMessages = await getDisputeMessages(disputeId);
        setMessages(updatedMessages);
        setMessage("");
      }
    } catch {
      logErrorToProduction('Error sending message:', { data: 'Error occurred' });
    } finally {
      setIsSending(false);
    }
  };

  if (isLoading) {
    return (
      <div className="p-8 text-center">
        <div className="w-8 h-8 mx-auto mb-4 animate-spin border-4 border-primary border-t-transparent rounded-full"></div>
        <p>Loading dispute details...</p>
      </div>
    );
  }

  if (!dispute) {
    return (
      <div className="p-8 text-center">
        <p>Dispute not found</p>
        <Button onClick={() => router.push("/dashboard/disputes")} className="mt-4">
          Back to Disputes
        </Button>
      </div>
    );
  }

  const getStatusBadgeVariant = (_status: DisputeStatus) => {
    switch (status) {
      case "open": return "default";
      case "under_review": return "secondary";
      case "resolved": return "outline"; // Changed from "success" to "outline"
      case "closed": return "outline";
      default: return "default";
    }
  };

  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold">Dispute Case</h1>
            <Badge variant={getStatusBadgeVariant(dispute.status)}>
              {dispute.status.replace('_', ' ')}
            </Badge>
          </div>
          <p className="text-muted-foreground">
            Reported {formatDistanceToNow(new Date(dispute?.created_at || ""), { addSuffix: true })}
          </p>
        </div>
        
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => router.push("/dashboard/disputes")}>
            Back to List
          </Button>
          {isAdmin && dispute?.status === "open" && (
            <Button onClick={() => handleStatusChange("under_review")}>
              Start Review
            </Button>
          )}
        </div>
      </div>

      {dispute.status === "resolved" && dispute.resolution_summary && (
        <Alert className="bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-900">
          <Check className="h-4 w-4" />
          <AlertTitle>This dispute has been resolved</AlertTitle>
          <AlertDescription>
            {dispute.resolution_summary}
          </AlertDescription>
        </Alert>
      )}
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="messages">Messages</TabsTrigger>
              <TabsTrigger value="attachments">Attachments</TabsTrigger>
              {isAdmin && <TabsTrigger value="admin">Admin Notes</TabsTrigger>}
            </TabsList>
            
            <TabsContent value="overview" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Dispute Details</CardTitle>
                  <CardDescription>Information about this dispute case</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-medium">Reason</h3>
                    <p>{
                      disputeReasonLabels[
                        dispute.reason_code
                      ] ?? dispute.reason_code
                    }</p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium">Description</h3>
                    <p className="whitespace-pre-wrap">{dispute.description}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium">Project</h3>
                    <p>{dispute.project?.title || "Unknown Project"}</p>
                    <p className="text-sm text-muted-foreground">{dispute.project?.scope_summary}</p>
                  </div>
                  
                  {dispute.milestone_id && (
                    <div>
                      <h3 className="font-medium">Related Milestone</h3>
                      <p className="text-sm">Milestone ID: {dispute.milestone_id}</p>
                    </div>
                  )}
                  
                  <div>
                    <h3 className="font-medium">Timeline</h3>
                    <ul className="space-y-2 mt-2">
                      <li className="flex gap-2 items-center">
                        <Badge variant="outline" className="h-6 w-6 rounded-full p-0 flex items-center justify-center">1</Badge>
                        <span>Created on {format(new Date(dispute.created_at), "MMM d, yyyy 'at' h:mm a")}</span>
                      </li>
                      
                      {dispute.status !== "open" && (
                        <li className="flex gap-2 items-center">
                          <Badge variant="outline" className="h-6 w-6 rounded-full p-0 flex items-center justify-center">2</Badge>
                          <span>Under review</span>
                        </li>
                      )}
                      
                      {dispute.resolved_at && (
                        <li className="flex gap-2 items-center">
                          <Badge variant="outline" className="h-6 w-6 rounded-full p-0 flex items-center justify-center">
                            {dispute.status !== "open" ? "3" : "2"}
                          </Badge>
                          <span>Resolved on {format(new Date(dispute.resolved_at), "MMM d, yyyy 'at' h:mm a")}</span>
                        </li>
                      )}
                    </ul>
                  </div>
                </CardContent>
              </Card>
              
              {dispute.status === "resolved" && (
                <Card>
                  <CardHeader>
                    <CardTitle>Resolution</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="whitespace-pre-wrap">{dispute.resolution_summary}</p>
                    
                    {dispute.resolution_type && (
                      <div className="mt-4">
                        <Badge>
                          Resolution: {dispute.resolution_type.replace('_', ' ')}
                        </Badge>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )}
            </TabsContent>
            
            <TabsContent value="messages" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Messages</CardTitle>
                  <CardDescription>Communication regarding this dispute</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6 max-h-[600px] overflow-y-auto p-2">
                    {messages.length === 0 ? (
                      <div className="text-center py-12">
                        <MessageSquare className="mx-auto h-12 w-12 text-muted-foreground mb-2" />
                        <p className="text-muted-foreground">No messages yet</p>
                      </div>
                    ) : (
                      messages
                        .filter(msg => !msg.is_admin_note)
                        .map((msg) => {
                          const isCurrentUser = user?.id === msg.user_id;
                          return (
                            <div
                              key={msg.id}
                              className={`flex ${isCurrentUser ? 'justify-end' : 'justify-start'}`}
                            >
                              <div
                                className={`max-w-[80%] ${
                                  isCurrentUser
                                    ? 'bg-primary text-primary-foreground'
                                    : 'bg-muted'
                                } p-4 rounded-lg`}
                              >
                                <div className="flex items-center gap-2 mb-2">
                                  <Avatar className="h-6 w-6">
                                    <AvatarImage src={msg.user_profile?.avatar_url} alt={msg.user_profile?.display_name || "User avatar"} />
                                    <AvatarFallback>
                                      {msg.user_profile?.display_name?.[0] || '?'}
                                    </AvatarFallback>
                                  </Avatar>
                                  <span className="text-sm font-medium">
                                    {msg.user_profile?.display_name || 'Unknown User'}
                                  </span>
                                  <span className="text-xs opacity-70">
                                    {format(new Date(msg.created_at), 'MMM d, h:mm a')}
                                  </span>
                                </div>
                                <p className="whitespace-pre-wrap">{msg.message}</p>
                              </div>
                            </div>
                          );
                        })
                    )}
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="w-full space-y-4">
                    <Textarea
                      placeholder="Type your message here..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="min-h-[100px]"
                      disabled={isSending}
                    />
                    <div className="flex justify-end">
                      <Button onClick={handleSendMessage} disabled={isSending || !message.trim()}>
                        {isSending ? "Sending..." : "Send Message"}
                      </Button>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="attachments" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Attachments</CardTitle>
                  <CardDescription>Files and documents related to this dispute</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <Download className="mx-auto h-12 w-12 text-muted-foreground mb-2" />
                    <p className="text-muted-foreground">No attachments available</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {isAdmin && (
              <TabsContent value="admin" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Admin Notes</CardTitle>
                    <CardDescription>Notes and actions taken by administrators</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-muted-foreground">No admin notes available</p>
                      {isAdmin && (
                        <div className="mt-4">
                          <Textarea
                            placeholder="Add a new admin note..."
                            value={adminNote}
                            onChange={(e) => setAdminNote(e.target.value)}
                            className="min-h-[100px]"
                          />
                          <div className="flex justify-end mt-2">
                            <Button onClick={() => {
                              if (adminNote.trim() && disputeId) {
                                addDisputeMessage(disputeId, adminNote, true);
                                setAdminNote("");
                              }
                            }} disabled={!adminNote.trim()}>
                              Add Note
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            )}
          </Tabs>
        </div>
        
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Dispute Actions</CardTitle>
              <CardDescription>Take actions on this dispute</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-medium">Current Status</h3>
                <Badge variant={getStatusBadgeVariant(dispute.status)}>
                  {dispute.status.replace('_', ' ')}
                </Badge>
              </div>
              
              {dispute.status === "open" && (
                <div>
                  <h3 className="font-medium">Resolve Dispute</h3>
                  <Textarea
                    placeholder="Provide a resolution summary..."
                    value={resolution.summary}
                    onChange={(e) => setResolution({ ...resolution, summary: e.target.value })}
                    className="min-h-[100px]"
                  />
                  <div className="flex justify-end mt-2">
                    <Button onClick={handleResolveDispute} disabled={!resolution.summary}>
                      Resolve Dispute
                    </Button>
                  </div>
                </div>
              )}
              
              {dispute.status === "under_review" && (
                <div>
                  <h3 className="font-medium">Close Dispute</h3>
                  <p>This dispute is currently under review. You can close it by resolving it or rejecting it.</p>
                  <div className="flex gap-2 mt-4">
                    <Button onClick={() => handleStatusChange("resolved")} variant="outline">
                      Resolve Dispute
                    </Button>
                    <Button onClick={() => handleStatusChange("closed")} variant="outline" color="destructive">
                      Reject Dispute
                    </Button>
                  </div>
                </div>
              )}
              
              {dispute.status === "resolved" && (
                <div>
                  <h3 className="font-medium">Reopen Dispute</h3>
                  <p>This dispute has been resolved. You can reopen it if new information becomes available.</p>
                  <div className="flex justify-end mt-4">
                    <Button onClick={() => handleStatusChange("open")} variant="outline">
                      Reopen Dispute
                    </Button>
                  </div>
                </div>
              )}
              
              {dispute.status === "closed" && (
                <div>
                  <h3 className="font-medium">Reopen Dispute</h3>
                  <p>This dispute has been closed. You can reopen it if new information becomes available.</p>
                  <div className="flex justify-end mt-4">
                    <Button onClick={() => handleStatusChange("open")} variant="outline">
                      Reopen Dispute
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}