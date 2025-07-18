<<<<<<< HEAD
import React from 'react';';
import { Bell } from '@/components/ui/icons;'';
import { ScrollArea } from '@/components/ui/scroll-area;'';
import Skeleton from '@/components/ui/skeleton;'';
import { Button } from '@/components/ui/button;'';
import { NotificationItem } from './NotificationItem;'';
import type { Notification } from '@/context/notifications;'';
import { EmptyState } from '@/components/ui/empty-state;'
;''
interface NotificationListProps {;;
  loading: "boolean;",;";";";";""
  error: "string | null;",";";";";""
  notifications: "Notification[];",;";";";";""
  onMarkAsRead: "(id: string) => Promise<void>;",;";";";";""
  onDismiss: "(id: string) => Promise<void>;",;";";";";""
  onRetry: "() => void;";"
};
;
=======
import React from 'react'
import { Bell } from '@/components/ui/icons'
import { ScrollArea } from '@/components/ui/scroll-area'
import Skeleton from '@/components/ui/skeleton'
import { Button } from '@/components/ui/button'
import { NotificationItem } from './NotificationItem'
import type { Notification } from '@/context/notifications'
import { EmptyState } from '@/components/ui/empty-state'
'
interface NotificationListProps {'
  loading: boolean
  error: string | null,"
  notifications: Notification[]
  onMarkAsRead: "(id: string) => Promise<void>"
  onDismiss: (id: string) => Promise<void>
  onRetry: "() => void"

>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
export const _NotificationList: unknown React.FC<NotificationListProps> = ({;
  loading,;
  error,;
  notifications,;
<<<<<<< HEAD
  onMarkAsRead,;""
  onDismiss,;";""
  onRetry,;";";""
}) => {;";";";""
  return (;";";";";""
    <ScrollArea className="flex-1 overflow-y-auto max-h-[350px]">;";";";""
      {error ? (;";";";";""
        <div className="p-8 text-center text-amber-500">;";";""
          <p>{error}</p>;";";";""
          <Button;";";";";""
            variant="outline";";";";";""
            size="sm";";";";";""
            className="mt-2";"
            onClick={onRetry};
          >;""
            Try Again;";""
          </Button>;";";""
        </div>;";";";""
      ) : loading ? (;";";";";""
        <div className="p-4 space-y-4">;";";";";""
          <Skeleton className="h-12 w-full bg-zion-blue-dark/50" />;";";";";""
          <Skeleton className="h-12 w-full bg-zion-blue-dark/50" />;";";";";""
          <Skeleton className="h-12 w-full bg-zion-blue-dark/50" />;";";""
        </div>;";";";""
      ) : notifications.length === 0 ? (;";";";";""
        <div className="p-8">;";";";""
          <EmptyState;";";";";""
            icon={<Bell className="h-8 w-8" />};";";";";""
            title="No Notifications";";";";";""
            description="You're all caught up.";";";";";""
            action={{ text: 'Refresh', onClick: "onRetry "}};";";";";""
            className="border-none bg-transparent";"
          />;
=======
  onMarkAsRead,
  onDismiss,;""
  onRetry,;
}) => {
  return (;"
    <ScrollArea className="flex-1 overflow-y-auto max-h-[350px]>"
      {error ? (;"
        <div className="p-8 text-center text-amber-500>"
          <p>{error}</p>;"
          <Button"
            variant=outline
            size="sm"
            className=mt-2"
            onClick={onRetry};
          >"
            Try Again;
          </Button>;"
        </div>"
      ) : loading ? (;
        <div className=p-4 space-y-4">"
          <Skeleton className=h-12 w-full bg-zion-blue-dark/50 />"
          <Skeleton className="h-12 w-full bg-zion-blue-dark/50 />"
          <Skeleton className="h-12 w-full bg-zion-blue-dark/50" />
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
        </div>;
      ) : notifications.length === 0 ? ("
        <div className="p-8>"
          <EmptyState;"
            icon={<Bell className="h-8 w-8 />}"
            title="No Notifications"
            description=You're all caught up.
            action={{ text: 'Refresh', onClick: "onRetry "}}
            className=border-none bg-transparent""
          />;
        </div>) : (;
        notifications.map((notification) => (;
          <NotificationItem;
            key={notification.id};
            notification={notification};
            onMarkAsRead={onMarkAsRead};
            onDismiss={onDismiss};
<<<<<<< HEAD
          />;
        ));
      )};""
    </ScrollArea>;";""
  );";";""
};";";";""
""""""
=======
          />));
      )}
    </ScrollArea>;"
  );"

"""'';;
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
