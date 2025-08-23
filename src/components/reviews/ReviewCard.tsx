
import { useState } from "react";
import { formatDistanceToNow } from "date-fns";
import { Star, Flag, User } from 'lucide-react';



import { Review } from "@/types/reviews";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";

interface ReviewCardProps {
  review: Review;
  onReport: (reviewId: string, reason: string) => Promise<boolean>;
}

export function ReviewCard({ review, onReport }: ReviewCardProps) {
  const [reportReason, setReportReason] = useState("");
  const [isReporting, setIsReporting] = useState(false);
  const [isReportDialogOpen, setIsReportDialogOpen] = useState(false);
  
  const handleReport = async () => {
    if (!reportReason.trim()) return;
    
    setIsReporting(true);
    const success = await onReport(review.id, reportReason);
    setIsReporting(false);
    
    if (success) {
      setReportReason("");
      setIsReportDialogOpen(false);
    }
  };
  
  const renderStars = (rating?: number) => {
    if (!rating) return null;
    
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-4 w-4 ${star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
          />
        ))}
      </div>
    );
  };
  
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .substring(0, 2);
  };
  
  return (
    <div className="border rounded-lg p-4 bg-card">
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-3">
          {review.is_anonymous ? (
            <Avatar>
              <AvatarFallback className="bg-muted">
                <User className="h-4 w-4" />
              </AvatarFallback>
            </Avatar>
          ) : (
            <Avatar>
              {review.reviewer_profile?.avatar_url ? (
                <AvatarImage src={review.reviewer_profile.avatar_url} alt={review.reviewer_profile.display_name} />
              ) : (
                <AvatarFallback>
                  {review.reviewer_profile?.display_name ? 
                    getInitials(review.reviewer_profile.display_name) : "??"}
                </AvatarFallback>
              )}
            </Avatar>
          )}
          
          <div>
            <div className="font-medium">
              {review.is_anonymous ? "Anonymous" : review.reviewer_profile?.display_name || "User"}
            </div>
            <div className="text-sm text-muted-foreground">
              {formatDistanceToNow(new Date(review.created_at), { addSuffix: true })}
            </div>
          </div>
        </div>
        
        <div className="flex">
          {renderStars(review.rating)}
        </div>
      </div>
      
      <div className="mb-4">
        <p className="text-sm whitespace-pre-wrap">{review.review_text}</p>
      </div>
      
      {(review.communication_rating || review.quality_rating || review.timeliness_rating || review.would_work_again !== undefined) && (
        <div className="border-t pt-3 mt-3">
          <div className="flex flex-wrap gap-2">
            {review.communication_rating && (
              <Badge variant="outline" className="flex gap-1 items-center">
                Communication
                <span className="ml-1 text-yellow-500">{review.communication_rating}/5</span>
              </Badge>
            )}
            
            {review.quality_rating && (
              <Badge variant="outline" className="flex gap-1 items-center">
                Quality
                <span className="ml-1 text-yellow-500">{review.quality_rating}/5</span>
              </Badge>
            )}
            
            {review.timeliness_rating && (
              <Badge variant="outline" className="flex gap-1 items-center">
                Timeliness
                <span className="ml-1 text-yellow-500">{review.timeliness_rating}/5</span>
              </Badge>
            )}
            
            {review.would_work_again !== undefined && (
              <Badge 
                variant={review.would_work_again ? "default" : "secondary"}
                className={`${review.would_work_again ? "bg-green-100 text-green-800 hover:bg-green-200" : "bg-gray-100 text-gray-800 hover:bg-gray-200"}`}
              >
                {review.would_work_again ? "Would work again" : "Would not work again"}
              </Badge>
            )}
          </div>
        </div>
      )}
      
      <div className="mt-3 flex justify-end">
        <Dialog open={isReportDialogOpen} onOpenChange={setIsReportDialogOpen}>
          <DialogTrigger asChild>
            <Button variant="ghost" size="sm" className="text-muted-foreground">
              <Flag className="h-3 w-3 mr-1" />
              Report
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Report Review</DialogTitle>
              <DialogDescription>
                If you believe this review violates our community guidelines, please provide details below.
              </DialogDescription>
            </DialogHeader>
            
            <Textarea
              placeholder="Why are you reporting this review?"
              value={reportReason}
              onChange={(e) => setReportReason(e.target.value)}
              className="min-h-[100px]"
            />
            
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsReportDialogOpen(false)}>
                Cancel
              </Button>
              <Button 
                onClick={handleReport} 
                disabled={!reportReason.trim() || isReporting}
              >
                {isReporting ? "Submitting..." : "Submit Report"}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
