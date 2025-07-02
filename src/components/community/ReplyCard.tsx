
import { formatDistanceToNow } from "date-fns";
import { ThumbsUp, ThumbsDown, CheckCircle } from 'lucide-react';



import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ForumReply } from "@/types/community";
import { cn } from "@/lib/utils";

interface ReplyCardProps {
  reply: ForumReply;
  onMarkAnswer?: () => void;
  canMarkAnswer?: boolean;
  className?: string;
}

export const ReplyCard = ({ 
  reply, 
  onMarkAnswer, 
  canMarkAnswer = false,
  className
}: ReplyCardProps) => {
  const timeAgo = formatDistanceToNow(new Date(reply.createdAt), { addSuffix: true });

  return (
    <Card className={cn(
      "transition-shadow",
      reply.isAnswer && "border-green-500/50 bg-green-50 dark:bg-green-950/20",
      className
    )}>
      <CardHeader className="flex flex-row items-start gap-4 space-y-0">
        <Avatar className="h-8 w-8">
          <AvatarImage src={reply.authorAvatar} alt={reply.authorName} />
          <AvatarFallback>{reply.authorName.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center">
            <span className="font-medium">
              {reply.authorName}
            </span>
            {reply.authorRole && (
              <Badge variant="outline" className="ml-2 text-xs">
                {reply.authorRole}
              </Badge>
            )}
            {reply.isAnswer && (
              <Badge className="ml-2 bg-green-500 text-white">
                <CheckCircle className="h-3 w-3 mr-1" />
                Answer
              </Badge>
            )}
          </div>
          <div className="text-xs text-muted-foreground">
            {timeAgo}
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <div>{reply.content}</div>
      </CardContent>
      
      <CardFooter className="flex justify-between">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="px-2">
            <ThumbsUp className="h-4 w-4 mr-1" />
            <span>{reply.upvotes}</span>
          </Button>
          <Button variant="ghost" size="sm" className="px-2">
            <ThumbsDown className="h-4 w-4 mr-1" />
            <span>{reply.downvotes}</span>
          </Button>
        </div>
        
        {canMarkAnswer && !reply.isAnswer && (
          <Button size="sm" variant="outline" onClick={onMarkAnswer} className="text-green-600">
            <CheckCircle className="h-4 w-4 mr-1" />
            Mark as Answer
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ReplyCard;
