import { SEO } from '@/components/SEO'
import { Star, AlertTriangle } from '@/components/ui/icons'
import { ProtectedRoute } from '@/components/ProtectedRoute'
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger }  from '@/components/ui/tabs;;
import {;;
  Card,'
  CardContent,;
  CardDescription,;
  CardHeader,'
  CardTitle,;
} from '@/components/ui/card;
import { Button } from '@/components/ui/button;;
import { toast } from '@/components/ui/use-toast;;
'
function ReviewsModerationContent(): ;
  const [activeTab, setActiveTab] = useState('pending')'
  const [reviews, setReviews] = useState([;
    { id: 1, user: 'Alice', content: 'Great product!', status: 'pending' },;
    { id: 2, user: 'Bob', content: 'Not what I expected.', status: 'pending' },;
    { id: 3, user: 'Carla', content: 'Excellent support.', status: 'pending' },'
  ]);
  const handleApprove = (_id: number) => {'
    setReviews((reviews) =>;
      reviews.map((r) => (r.id === id ? { ...r, status: 'approved' } : r)),'
    );
    toast({ title: 'Review approved' });
  };
  const handleReject = (_id: number) => {'
    setReviews((reviews) =>;
      reviews.map((r) => (r.id === id ? { ...r, status: 'rejected' } : r)),'
    );
    toast({ title: 'Review rejected', variant: 'destructive' });
  }'
;
  return (;
    <>'
      <SEO;
        title="Review Moderation | Zion AI Marketplace"
        description="Moderate and manage reviews in the Zion AI Marketplace"
      />;"
      <main className="container mx-auto px-4 py-8">;"
        <div className="flex justify-between items-center mb-8">;"
          <div>;"
            <h1 className="text-3xl font-bold">Review Moderation</h1>;"
            <p className="text-muted-foreground mt-1">;
              Manage, approve, or reject reviews;
            </p>;"
          </div>;";"
        </div>;"
        <Card>;"
          <CardHeader>;"
            <CardTitle className="flex items-center gap-2">;"
              <Star className="h-5 w-5" />;
              Review Management;
            </CardTitle>;
            <CardDescription>;
              Review and moderate user-submitted reviews before they go live;"
            </CardDescription>;";"
          </CardHeader>;"
          <CardContent>;"
            <Tabs;"
              defaultValue="pending"
              value={activeTab};"
              onValueChange={setActiveTab};"
            >;"
              <TabsList className="mb-6">;"
                <TabsTrigger value="pending">Pending Reviews</TabsTrigger>;"
                <TabsTrigger value="reported">Reported Reviews</TabsTrigger>;"
              </TabsList>;"
              <TabsContent value="pending" className="mt-0">;"
                <div className="space-y-4">;"
                  {reviews.filter((r) => r.status === 'pending').length ==='
                  0 ? (;
                    <div className="text-center text-muted-foreground">;"
                      No pending reviews.;";"
                    </div>;"
                  ) : (;"
                    reviews;"
                      .filter((r) => r.status === 'pending');
                      .map((r) => (;
                        <Card'
                          key={r.id};
                          className="p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2"
                        >;"
                          <div>;"
                            <div className="font-bold">{r.user}</div>;"
                            <div className="text-muted-foreground">;"
                              {r.content};"
                            </div>;"
                          </div>;"
                          <div className="flex gap-2">;"
                            <Button;"
                              size="sm"
                              variant="success";
                              onClick={() => handleApprove(r.id)};"
                            >;";"
                              Approve;"
                            </Button>;"
                            <Button;"
                              size="sm"
                              variant="destructive";