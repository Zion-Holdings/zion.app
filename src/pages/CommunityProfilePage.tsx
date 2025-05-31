
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom"; // Added useNavigate
import { SEO } from "@/components/SEO";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea"; // For comment input
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from "@/components/ui/dialog"; // Basic modal for review
import { formatDistanceToNow } from "date-fns";
import { CommunityUser, ForumPost, Badge as BadgeType } from "@/types/community";
import PostCard from "@/components/community/PostCard";
import UserBadges from "@/components/community/UserBadges";
import ReputationDisplay from "@/components/community/ReputationDisplay";
import CommunityVerifiedBadge from "@/components/CommunityVerifiedBadge"; // Import the new badge

// Mock user data
const mockUser: CommunityUser = {
  id: "user1", // This will be the revieweeId
  name: "Alex Johnson",
  avatar: "https://i.pravatar.cc/150?img=3",
  role: "Verified Talent",
  reputation: 325,
  postCount: 14,
  replyCount: 47,
  badges: [
    {
      id: "badge1",
      name: "Answer Hero",
      description: "Provided 10 accepted answers",
      icon: "Award",
      color: "#10B981"
    },
    {
      id: "badge2",
      name: "Top Contributor",
      description: "Among the top 5% of contributors",
      icon: "Trophy",
      color: "#3b82f6"
    },
    {
      id: "badge3",
      name: "First Post",
      description: "Created your first forum post",
      icon: "Star",
      color: "#6366F1"
    }
  ],
  isVerified: true,
  isModerator: false
};

// Mock posts by this user
const userPosts: ForumPost[] = [
  {
    id: "1",
    title: "Best practices for AI model fine-tuning",
    content: "I've been working on fine-tuning models for specific tasks and wanted to share some approaches that have worked well for me...",
    authorId: "user1",
    authorName: "Alex Johnson",
    authorAvatar: "https://i.pravatar.cc/150?img=3",
    authorRole: "Verified Talent",
    categoryId: "ai-tools",
    tags: ["machine-learning", "fine-tuning", "gpt"],
    createdAt: "2025-04-01T12:00:00Z",
    updatedAt: "2025-04-01T12:00:00Z",
    upvotes: 48,
    downvotes: 2,
    replyCount: 12,
    isAnswered: true,
    isFeatured: true
  },
  {
    id: "11",
    title: "How to structure an AI prompt for best results",
    content: "After experimenting with different prompt formats, I've found these patterns to work consistently better...",
    authorId: "user1",
    authorName: "Alex Johnson",
    authorAvatar: "https://i.pravatar.cc/150?img=3",
    authorRole: "Verified Talent",
    categoryId: "ai-tools",
    tags: ["prompts", "techniques", "optimization"],
    createdAt: "2025-03-20T14:25:00Z",
    updatedAt: "2025-03-20T14:25:00Z",
    upvotes: 36,
    downvotes: 1,
    replyCount: 8
  },
  {
    id: "12",
    title: "Setting up effective monitoring for AI systems",
    content: "Here's my approach to monitoring AI systems in production environments...",
    authorId: "user1",
    authorName: "Alex Johnson",
    authorAvatar: "https://i.pravatar.cc/150?img=3",
    authorRole: "Verified Talent",
    categoryId: "project-help",
    tags: ["monitoring", "production", "devops"],
    createdAt: "2025-03-12T09:30:00Z",
    updatedAt: "2025-03-12T09:30:00Z",
    upvotes: 24,
    downvotes: 0,
    replyCount: 6
  }
];

export default function CommunityProfilePage() {
  const { userId } = useParams<{ userId: string }>(); // revieweeId from URL
  const navigate = useNavigate(); // For potential redirects or navigation after actions

  const [user, setUser] = useState<CommunityUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState<ForumPost[]>([]);

  // State for Peer Review Modal
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [reviewType, setReviewType] = useState<'endorsement' | 'flag' | null>(null);
  const [reviewComment, setReviewComment] = useState('');
  const [reviewSubmitting, setReviewSubmitting] = useState(false);
  const [reviewMessage, setReviewMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  
  // Mock logged-in user ID (reviewerId)
  // In a real app, this would come from an auth context or similar
  const MOCK_LOGGED_IN_USER_ID = "loggedUser123";
  // Mock endorsement count for the profile user for CommunityVerifiedBadge
  const [mockEndorsementCount, setMockEndorsementCount] = useState(5); // Initial mock count

  useEffect(() => {
    // In a real app, we would fetch the user data here based on `userId`
    // and potentially their endorsement count.
    const profileUser = { ...mockUser, id: userId || mockUser.id }; // Use userId from URL if available
    setUser(profileUser);
    setPosts(userPosts.filter(p => p.authorId === profileUser.id)); // Filter posts for current profile
    // In a real app, fetch actual endorsement count here
    // For now, we use MOCK_USER_ENDORSEMENT_COUNT which could be updated by successful endorsement
    setIsLoading(false);
  }, [userId]);

  const openReviewModal = (type: 'endorsement' | 'flag') => {
    if (MOCK_LOGGED_IN_USER_ID === userId) {
      setReviewMessage({ type: 'error', text: "You cannot review your own profile." });
      setTimeout(() => setReviewMessage(null), 3000);
      return;
    }
    setReviewType(type);
    setIsReviewModalOpen(true);
    setReviewComment('');
    setReviewMessage(null);
  };

  const handleSubmitReview = async () => {
    if (!reviewType || !userId) return;
    if (MOCK_LOGGED_IN_USER_ID === userId) {
      setReviewMessage({ type: 'error', text: "You cannot review your own profile." });
      return;
    }

    setReviewSubmitting(true);
    setReviewMessage(null);

    try {
      const response = await fetch('/api/trust/peer-review', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          reviewerId: MOCK_LOGGED_IN_USER_ID, // Mocked logged-in user
          revieweeId: userId, // User being viewed
          reviewType: reviewType,
          comment: reviewComment,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || `Failed to submit ${reviewType}.`);
      }
      setReviewMessage({ type: 'success', text: `${reviewType.charAt(0).toUpperCase() + reviewType.slice(1)} submitted successfully!` });
      if (reviewType === 'endorsement') {
        setMockEndorsementCount(prev => prev + 1); // Optimistically update mock count
      }
      setIsReviewModalOpen(false); // Correct usage: No type argument here. If it were `setIsReviewModalOpen<boolean>(false)`, it would cause TS2347.
    } catch (error: any) {
      setReviewMessage({ type: 'error', text: error.message || `An error occurred during ${reviewType}.` });
    } finally {
      setReviewSubmitting(false);
      // Optionally clear message after a few seconds
      setTimeout(() => setReviewMessage(null), 5000);
    }
  };
  
  if (isLoading) {
    return (
      <div className="container py-8">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-zion-purple"></div>
        </div>
      </div>
    );
  }
  
  if (!user) {
    return (
      <div className="container py-8">
        <h1>User not found</h1>
        <Button asChild className="mt-4">
          <Link to="/community">Back to Community</Link>
        </Button>
      </div>
    );
  }

  return (
    <>
    <SEO
      title={`${user.name}'s Profile | Community Forum | Zion AI Marketplace`}
      description={`View ${user.name}'s profile, posts, and contributions in the Zion AI Marketplace community.`}
      keywords={`community, forum, profile, user profile, ${user.name}`}
    />
      
      <div className="container py-8">
        <div className="flex items-center gap-3 mb-6">
          <Link to="/community" className="text-sm text-muted-foreground hover:text-foreground">
            Forum
          </Link>
          <span className="text-muted-foreground">/</span>
          <span className="text-sm font-medium">Profile</span>
          <span className="text-muted-foreground">/</span>
          <span className="text-sm font-medium">{user.name}</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <Card>
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                </div>
                <CardTitle className="text-2xl flex items-center justify-center gap-2">
                  {user.name}
                  {user.isVerified && (
                    <span className="text-blue-500" title="Verified User">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                      </svg>
                    </span>
                  )}
                </CardTitle>
                 <div className="mt-1">
                    <CommunityVerifiedBadge endorsementCount={mockEndorsementCount} />
                </div>
                {user.role && (
                  <Badge variant="outline" className="mt-2">
                    {user.role}
                  </Badge>
                )}
                {user.isModerator && (
                  <Badge className="mt-2 bg-blue-500">Moderator</Badge>
                )}
              </CardHeader>
              
              <CardContent className="space-y-6">
                 {/* Peer Review Buttons */}
                 {MOCK_LOGGED_IN_USER_ID !== userId && ( // Don't show buttons on own profile
                  <div className="flex flex-col space-y-2 mt-4 border-t pt-4">
                    <Button onClick={() => openReviewModal('endorsement')} variant="outline" size="sm" className="bg-green-50 hover:bg-green-100 text-green-700 border-green-300">
                      Endorse User
                    </Button>
                    <Button onClick={() => openReviewModal('flag')} variant="outline" size="sm" className="bg-red-50 hover:bg-red-100 text-red-700 border-red-300">
                      Flag User
                    </Button>
                  </div>
                )}
                {reviewMessage && !isReviewModalOpen && ( // Show global messages if modal is closed
                  <div className={`p-2 rounded text-sm mt-2 ${reviewMessage.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {reviewMessage.text}
                  </div>
                )}

                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Reputation</h3>
                  <ReputationDisplay reputation={user.reputation} size="lg" />
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Badges</h3>
                  <UserBadges badges={user.badges} />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <Card>
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl font-bold">{user.postCount}</div>
                      <p className="text-sm text-muted-foreground">Posts</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl font-bold">{user.replyCount}</div>
                      <p className="text-sm text-muted-foreground">Replies</p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="text-sm text-muted-foreground">
                  <p>Member since April 2025</p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="md:col-span-2">
            <Tabs defaultValue="posts">
              <TabsList>
                <TabsTrigger value="posts">Posts</TabsTrigger>
                <TabsTrigger value="activity">Recent Activity</TabsTrigger>
              </TabsList>
              
              <TabsContent value="posts" className="mt-6">
                <h2 className="text-xl font-bold mb-4">Posts by {user.name}</h2>
                
                {posts.length > 0 ? (
                  <div className="space-y-4">
                    {posts.map((post) => (
                      <PostCard key={post.id} post={post} />
                    ))}
                  </div>
                ) : (
                  <Card>
                    <CardContent className="p-6 text-center">
                      <p className="text-muted-foreground">This user hasn't created any posts yet.</p>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>
              
              <TabsContent value="activity" className="mt-6">
                <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
                
                <Card>
                  <CardContent className="p-6">
                    <ul className="space-y-4">
                      <li className="flex items-start gap-4">
                        <div className="min-w-fit text-sm text-muted-foreground">
                          {formatDistanceToNow(new Date("2025-04-10T14:30:00Z"), { addSuffix: true })}
                        </div>
                        <div>
                          <p>Replied to <Link to="/community/post/3" className="text-zion-purple hover:underline">Looking for feedback on my automated testing approach</Link></p>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="min-w-fit text-sm text-muted-foreground">
                          {formatDistanceToNow(new Date("2025-04-08T09:15:00Z"), { addSuffix: true })}
                        </div>
                        <div>
                          <p>Earned badge <span className="font-medium">Top Contributor</span></p>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="min-w-fit text-sm text-muted-foreground">
                          {formatDistanceToNow(new Date("2025-04-05T16:40:00Z"), { addSuffix: true })}
                        </div>
                        <div>
                          <p>Replied to <Link to="/community/post/7" className="text-zion-purple hover:underline">Comparing different vector embedding models</Link></p>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="min-w-fit text-sm text-muted-foreground">
                          {formatDistanceToNow(new Date("2025-04-01T12:00:00Z"), { addSuffix: true })}
                        </div>
                        <div>
                          <p>Created post <Link to="/community/post/1" className="text-zion-purple hover:underline">Best practices for AI model fine-tuning</Link></p>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="min-w-fit text-sm text-muted-foreground">
                          {formatDistanceToNow(new Date("2025-03-25T08:20:00Z"), { addSuffix: true })}
                        </div>
                        <div>
                          <p>Answer was accepted in <Link to="/community/post/15" className="text-zion-purple hover:underline">How to optimize RAG systems for better results</Link></p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
}
