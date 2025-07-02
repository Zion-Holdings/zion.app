import React, { useState, useEffect } from "react";
import Link from 'next/link';
import { useRouter } from 'next/router';
import { format } from "date-fns";
import { useAuth } from "@/hooks/useAuth";
import { useProjects } from "@/hooks/useProjects";
import { SEO } from "@/components/SEO";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { Project, ProjectStatus } from "@/types/projects";
import { Button } from "@/components/ui/button";
import {logErrorToProduction} from '@/utils/productionLogger';
import { AlertCircle, Calendar, CheckCircle2, Clock, FileText, Layers, MessageSquare, Video, User, XCircle } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { ProjectReviewSection } from "@/components/projects/reviews/ProjectReviewSection";












function ProjectDetailsContent() {
  const router = useRouter();
  // Get projectId from Next.js router query params
  const { projectId } = router.query as { projectId?: string };
  const { user } = useAuth();
  const { getProjectById, updateProjectStatus } = useProjects();
  
  const [project, setProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [notes, setNotes] = useState<any[]>([]);
  const [newNote, setNewNote] = useState("");
  const [isSubmittingNote, setIsSubmittingNote] = useState(false);
  const [activeTab, setActiveTab] = useState("details");
  
  // Load project data
  useEffect(() => {
    async function loadProject() {
      if (!projectId) return;
      
      setIsLoading(true);
      const projectData = await getProjectById(projectId);
      
      if (projectData) {
        setProject(projectData);
        
        // Now fetch notes
        fetchProjectNotes(projectId);
      } else {
        toast({
          title: "Project not found",
          description: "The requested project could not be found.",
          variant: "destructive",
        });
        router.push("/dashboard");
      }
      
      setIsLoading(false);
    }
    
    loadProject();
  }, [projectId]);
  
  const fetchProjectNotes = async (projectId: string) => {
    try {
      const { data, error } = await supabase
        .from("project_notes")
        .select(`
          *,
          created_by_profile:profiles!user_id(display_name, avatar_url)
        `)
        .eq("project_id", projectId)
        .order("created_at", { ascending: false });
      
      if (error) throw error;
      
      setNotes(data || []);
    } catch (err: any) {
      logErrorToProduction('Error fetching project notes:', { data: err });
      toast({
        title: "Failed to load notes",
        description: err.message || "An error occurred while loading project notes.",
        variant: "destructive",
      });
    }
  };
  
  const handleSubmitNote = async () => {
    if (!newNote.trim() || !project || !user) return;
    
    setIsSubmittingNote(true);
    
    try {
      const { data, error } = await supabase
        .from("project_notes")
        .insert({
          project_id: project.id,
          user_id: user.id,
          content: newNote,
        })
        .select();
      
      if (error) throw error;
      
      // Refresh notes
      fetchProjectNotes(project.id);
      setNewNote("");
      
      toast({
        title: "Note added",
        description: "Your note has been added to the project.",
      });
    } catch (err: any) {
      logErrorToProduction('Error adding note:', { data: err });
      toast({
        title: "Failed to add note",
        description: err.message || "An error occurred while adding note.",
        variant: "destructive",
      });
    } finally {
      setIsSubmittingNote(false);
    }
  };
  
  const handleStatusChange = async (newStatus: ProjectStatus) => {
    if (!project) return;
    
    const success = await updateProjectStatus(project.id, newStatus);
    
    if (success) {
      setProject({
        ...project,
        status: newStatus,
      });
      
      // If offer was accepted, show a special toast
      if (newStatus === "offer_accepted") {
        toast({
          title: "Offer Accepted! 🎉",
          description: "The project is now in progress. Congratulations!",
        });
      }
    }
  };
  
  const getStatusBadge = (status: ProjectStatus) => {
    switch (status) {
      case "offer_sent":
        return <Badge variant="outline">Offer Sent</Badge>;
      case "offer_accepted":
        return <Badge className="bg-green-100 text-green-800">Offer Accepted</Badge>;
      case "changes_requested":
        return <Badge variant="secondary">Changes Requested</Badge>;
      case "in_progress":
        return <Badge className="bg-blue-100 text-blue-800">In Progress</Badge>;
      case "completed":
        return <Badge variant="default">Completed</Badge>;
      case "canceled":
        return <Badge variant="destructive">Canceled</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };
  
  if (isLoading) {
    return (
      <div className="container mx-auto py-8">
        <div className="flex justify-center items-center h-64">
          <div className="text-center">
            <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
            <p>Loading project details...</p>
          </div>
        </div>
      </div>
    );
  }
  
  if (!project) {
    return (
      <div className="container mx-auto py-8">
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-10">
            <AlertCircle className="h-10 w-10 text-muted-foreground mb-4" />
            <h2 className="text-xl font-bold mb-2">Project Not Found</h2>
            <p className="text-muted-foreground mb-4">
              The project you're looking for doesn't exist or you don't have access to it.
            </p>
            <Button onClick={() => router.push("/dashboard")}>
              Return to Dashboard
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }
  
  // Check if user is either the client or the talent
  const isClient = user?.id === project.client_id;
  const isTalent = user?.id === project.talent_id;
  
  if (!isClient && !isTalent) {
    router.push("/unauthorized");
    return null;
  }
  
  const isOfferPending = project.status === "offer_sent";
  const isOfferAccepted = ["offer_accepted", "in_progress", "completed"].includes(project.status);
  const isActiveProject = ["offer_accepted", "in_progress"].includes(project.status);
  
  return (
    <>
      <SEO 
        title={`Project: ${project.job?.title || 'Project Details'} | Zion AI Marketplace`} 
        description="View and manage your project details and collaboration."
      />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-2">
            <div>
              <h1 className="text-3xl font-bold">{project.job?.title || "Project"}</h1>
              <div className="flex items-center gap-2 mt-1">
                {getStatusBadge(project.status)}
                <span className="text-muted-foreground">
                  Started on {format(new Date(project.start_date), "PPP")}
                </span>
              </div>
            </div>
            
            {/* Action Buttons Based on Role and Status */}
            <div className="space-x-2">
              {isTalent && isOfferPending && (
                <>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="default">
                        <CheckCircle2 className="mr-2 h-4 w-4" /> Accept Offer
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Accept Project Offer?</AlertDialogTitle>
                        <AlertDialogDescription>
                          By accepting this offer, you agree to the project terms and timeline. 
                          This will initiate the contract and start the project.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={() => handleStatusChange("offer_accepted")}>
                          Accept Offer
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                  
                  <Button variant="outline" onClick={() => handleStatusChange("changes_requested")}>
                    <MessageSquare className="mr-2 h-4 w-4" /> Request Changes
                  </Button>
                </>
              )}
              
              {(isClient || isTalent) && project.status === "in_progress" && (
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="default">
                      <CheckCircle2 className="mr-2 h-4 w-4" /> Mark as Completed
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Mark Project as Completed?</AlertDialogTitle>
                      <AlertDialogDescription>
                        This will finalize the project and mark it as complete. 
                        Make sure all deliverables have been provided and approved.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction onClick={() => handleStatusChange("completed")}>
                        Mark as Completed
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              )}
              
              {isActiveProject && (
                <Button variant="default" asChild>
                  <Link href={`/project/[id]/milestones`}>
                    <Layers className="mr-2 h-4 w-4" /> Milestones
                  </Link>
                </Button>
              )}

              {isActiveProject && (
                <Button variant="outline" asChild>
                  <Link href={`/project/[id]/room`}>
                    <Video className="mr-2 h-4 w-4" /> Project Room
                  </Link>
                </Button>
              )}
              
              {(isClient || isTalent) && ["offer_sent", "offer_accepted", "in_progress"].includes(project.status) && (
                <Button 
                  variant="outline" 
                  onClick={() => router.push(`/messages?talentId=${project.talent_id}&clientId=${project.client_id}`)}
                >
                  <MessageSquare className="mr-2 h-4 w-4" /> Message
                </Button>
              )}
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="order-2 lg:order-1 lg:col-span-2">
            <Tabs defaultValue="details" value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="mb-6">
                <TabsTrigger value="details">Project Details</TabsTrigger>
                <TabsTrigger value="timeline">Timeline</TabsTrigger>
                <TabsTrigger value="documents">Documents</TabsTrigger>
                <TabsTrigger value="notes">Shared Notes</TabsTrigger>
                {project.status === "completed" && (
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                )}
              </TabsList>
              
              <TabsContent value="details">
                <Card>
                  <CardHeader>
                    <CardTitle>Project Scope</CardTitle>
                    <CardDescription>
                      Project details and expectations
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold mb-2">Project Description</h3>
                        <div className="bg-muted/30 p-4 rounded-md">
                          <p className="whitespace-pre-wrap">{project.scope_summary}</p>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold mb-2">Payment Terms</h3>
                        <Badge variant="outline" className="capitalize">
                          {project.payment_terms} Payment
                        </Badge>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold mb-2">Job Details</h3>
                        <div className="bg-muted/30 p-4 rounded-md">
                          <p className="whitespace-pre-wrap">{project.job?.description}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="timeline">
                <Card>
                  <CardHeader>
                    <CardTitle>Project Timeline</CardTitle>
                    <CardDescription>
                      Key dates and milestones
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-md">
                        <Calendar className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <h3 className="font-semibold">Start Date</h3>
                          <p>{format(new Date(project.start_date), "PPP")}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-md">
                        <Clock className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <h3 className="font-semibold">Project Status</h3>
                          <div className="mt-1">
                            {getStatusBadge(project.status)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="documents">
                <Card>
                  <CardHeader>
                    <CardTitle>Project Documents</CardTitle>
                    <CardDescription>
                      Agreements and relevant files
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {project.agreement_url ? (
                      <div className="flex items-center justify-between bg-muted/30 p-4 rounded-md">
                        <div className="flex items-center gap-3">
                          <FileText className="h-5 w-5 text-primary" />
                          <div>
                            <h3 className="font-semibold">Project Agreement</h3>
                            <p className="text-sm text-muted-foreground">
                              Uploaded when project was created
                            </p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" asChild>
                          <a href={project.agreement_url} target="_blank" rel="noopener noreferrer">
                            View
                          </a>
                        </Button>
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <FileText className="h-10 w-10 text-muted-foreground mx-auto mb-2" />
                        <h3 className="font-semibold">No Documents Yet</h3>
                        <p className="text-sm text-muted-foreground">
                          No documents have been uploaded to this project.
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="notes">
                <Card>
                  <CardHeader>
                    <CardTitle>Project Notes</CardTitle>
                    <CardDescription>
                      Shared notes and updates
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-4 max-h-[400px] overflow-y-auto mb-4">
                        {notes.length > 0 ? (
                          notes.map((note) => (
                            <div key={note.id} className="bg-muted/30 p-3 rounded-md">
                              <div className="flex items-center gap-2 mb-2">
                                <Avatar className="h-6 w-6">
                                  {note.created_by_profile?.avatar_url ? (
                                    <img
                                      src={note.created_by_profile.avatar_url}
                                      alt={note.created_by_profile.display_name}
                                      loading="lazy"
                                    />
                                  ) : (
                                    <User className="h-4 w-4" />
                                  )}
                                </Avatar>
                                <span className="font-medium text-sm">
                                  {note.created_by_profile?.display_name || "User"}
                                </span>
                                <span className="text-xs text-muted-foreground">
                                  {format(new Date(note.created_at), "PPp")}
                                </span>
                              </div>
                              <p className="text-sm whitespace-pre-wrap">{note.content}</p>
                            </div>
                          ))
                        ) : (
                          <div className="text-center py-8">
                            <MessageSquare className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                            <p className="text-muted-foreground">
                              No notes yet. Add the first note to this project.
                            </p>
                          </div>
                        )}
                      </div>
                      
                      {isOfferAccepted && (
                        <div>
                          <Textarea
                            placeholder="Add a note or update to the project..."
                            value={newNote}
                            onChange={(e) => setNewNote(e.target.value)}
                            className="min-h-[100px] mb-2"
                          />
                          <Button
                            onClick={handleSubmitNote}
                            disabled={!newNote.trim() || isSubmittingNote}
                          >
                            {isSubmittingNote ? "Posting..." : "Post Note"}
                          </Button>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="reviews">
                <ProjectReviewSection project={project} />
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="order-1 lg:order-2 lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Project Participants</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Avatar className="h-10 w-10">
                      {project.talent_profile?.profile_picture_url ? (
                        <img
                          src={project.talent_profile.profile_picture_url}
                          alt={project.talent_profile.full_name}
                          loading="lazy"
                        />
                      ) : (
                        <User className="h-6 w-6" />
                      )}
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">
                        {project.talent_profile?.full_name || "Talent"}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {project.talent_profile?.professional_title || "Professional"}
                      </p>
                      {isClient && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="mt-2"
                          onClick={() => router.push(`/messages?talentId=${project.talent_id}`)}
                        >
                          <MessageSquare className="mr-1 h-3 w-3" /> Message
                        </Button>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Avatar className="h-10 w-10">
                      {project.talent_profile?.profile_picture_url ? (
                        <img
                          src={project.talent_profile.profile_picture_url}
                          alt={project.talent_profile.full_name}
                          loading="lazy"
                        />
                      ) : (
                        <User className="h-6 w-6" />
                      )}
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">
                        {project.talent_profile?.full_name || "Client"}
                      </h3>
                      <p className="text-sm text-muted-foreground">Project Owner</p>
                      {isTalent && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="mt-2"
                          onClick={() => router.push(`/messages?clientId=${project.client_id}`)}
                        >
                          <MessageSquare className="mr-1 h-3 w-3" /> Message
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Project Status Card */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Project Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Current Status:</span>
                    <div>{getStatusBadge(project.status)}</div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Creation Date:</span>
                    <span className="text-sm">
                      {format(new Date(project.created_at), "PPP")}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Start Date:</span>
                    <span className="text-sm">
                      {format(new Date(project.start_date), "PPP")}
                    </span>
                  </div>
                </div>
              </CardContent>
              
              {/* Conditional Footer Based on Status */}
              {project.status === "changes_requested" && isClient && (
                <CardFooter className="flex-col items-start gap-2 border-t pt-6">
                  <p className="text-sm text-amber-600 flex items-center gap-1">
                    <AlertCircle className="h-4 w-4" /> The talent has requested changes to this offer.
                  </p>
                  <Button 
                    variant="outline"
                    onClick={() => router.push(`/messages?talentId=${project.talent_id}`)}
                    className="w-full"
                  >
                    <MessageSquare className="mr-2 h-4 w-4" /> Discuss Changes
                  </Button>
                </CardFooter>
              )}
              
              {project.status === "offer_sent" && isClient && (
                <CardFooter className="flex-col items-start gap-2 border-t pt-6">
                  <p className="text-sm text-muted-foreground">
                    Waiting for the talent to accept your offer.
                  </p>
                </CardFooter>
              )}
              
              {project.status === "completed" && (
                <CardFooter className="flex-col items-start gap-2 border-t pt-6">
                  <p className="text-sm text-green-600 flex items-center gap-1">
                    <CheckCircle2 className="h-4 w-4" /> This project has been completed.
                  </p>
                </CardFooter>
              )}
              
              {project.status === "canceled" && (
                <CardFooter className="flex-col items-start gap-2 border-t pt-6">
                  <p className="text-sm text-red-600 flex items-center gap-1">
                    <XCircle className="h-4 w-4" /> This project has been canceled.
                  </p>
                </CardFooter>
              )}
            </Card>
          </div>
        </div>
      </main>
    </>
  );
}

export default function ProjectDetails() {
  return (
    <ProtectedRoute>
      <ProjectDetailsContent />
    </ProtectedRoute>
  );
}
