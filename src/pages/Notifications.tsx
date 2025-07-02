import React, { useState } from 'react';
import { useNotifications } from '@/context/notifications/NotificationContext';
import { Bell, Check, Trash2, ChevronRight, CheckCircle, AlertCircle, MessageCircle, Briefcase, UserCheck, Settings, Package } from 'lucide-react';
import {
  NotificationType,
  NotificationContextType
} from "@/context/notifications";
import { formatDistanceToNow } from 'date-fns';












import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Skeleton from '@/components/ui/skeleton';
import { SEO } from '@/components/SEO';
import { useRouter } from 'next/router';
import { cn } from '@/lib/utils';

const getNotificationIcon = (
  type: NotificationType,
  className: string = 'h-5 w-5',
) => {
  switch (type) {
    case 'message':
      return <MessageCircle className={cn(className, 'text-blue-500')} />;
    case 'quote_request':
      return <Briefcase className={cn(className, 'text-purple-500')} />;
    case 'booking_confirmation':
      return <CheckCircle className={cn(className, 'text-green-500')} />;
    case 'hire_request':
      return <UserCheck className={cn(className, 'text-zion-purple')} />;
    case 'onboarding':
      return <Settings className={cn(className, 'text-zion-cyan')} />;
    case 'system':
      return <AlertCircle className={cn(className, 'text-yellow-500')} />;
    case 'project_update':
      return <Briefcase className={cn(className, 'text-indigo-400')} />;
    case 'milestone_complete':
      return <CheckCircle className={cn(className, 'text-green-500')} />;
    case 'order_status':
      return <Package className={cn(className, 'text-orange-500')} />;
    default:
      return <Bell className={cn(className, 'text-gray-500')} />;
  }
};

const getNotificationTypeBadge = (type: NotificationType) => {
  switch (type) {
    case 'message':
      return <Badge className="bg-blue-500">Message</Badge>;
    case 'quote_request':
      return <Badge className="bg-purple-500">Quote Request</Badge>;
    case 'booking_confirmation':
      return <Badge className="bg-green-500">Booking</Badge>;
    case 'hire_request':
      return <Badge className="bg-zion-purple">Hire Request</Badge>;
    case 'onboarding':
      return <Badge className="bg-zion-cyan">Onboarding</Badge>;
    case 'system':
      return <Badge className="bg-yellow-500">System</Badge>;
    case 'project_update':
      return <Badge className="bg-indigo-500">Project</Badge>;
    case 'milestone_complete':
      return <Badge className="bg-green-500">Milestone</Badge>;
    case 'order_status':
      return <Badge className="bg-orange-500">Order</Badge>;
    default:
      return <Badge variant="outline">Notification</Badge>;
  }
};

const NotificationCard: React.FC<{
  notification: {
    id: string;
    title: string;
    message: string;
    type: NotificationType;
    read: boolean;
    created_at: string;
    action_url?: string;
    action_text?: string;
  };
  onMarkAsRead: (id: string) => Promise<void>;
  onDismiss: (id: string) => Promise<void>;
}> = ({ notification, onMarkAsRead, onDismiss }) => {
  const router = useRouter();

  const handleAction = () => {
    if (!notification.read) {
      onMarkAsRead(notification.id);
    }

    if (notification.action_url) {
      router.push(notification.action_url);
    }
  };

  return (
    <div
      className={cn(
        'border rounded-lg shadow-sm p-4 mb-3 group transition-colors',
        notification.read
          ? 'border-zion-blue-light bg-zion-blue-dark/10'
          : 'border-zion-cyan bg-zion-blue-dark/30',
      )}
    >
      <div className="flex items-start gap-4">
        <div className="mt-1">
          {getNotificationIcon(notification.type, 'h-6 w-6')}
        </div>
        <div className="flex-1">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <h3 className="font-medium text-white">{notification.title}</h3>
              <div className="flex items-center gap-2 mb-2">
                {getNotificationTypeBadge(notification.type)}
                <span className="text-xs text-zion-slate-light">
                  {formatDistanceToNow(new Date(notification.created_at), {
                    addSuffix: true,
                  })}
                </span>
                {!notification.read && (
                  <Badge
                    variant="outline"
                    className="bg-zion-cyan bg-opacity-20 text-zion-cyan text-xs"
                  >
                    New
                  </Badge>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2">
              {!notification.read && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0"
                  onClick={() => onMarkAsRead(notification.id)}
                >
                  <Check className="h-4 w-4 text-green-400" />
                  <span className="sr-only">Mark as read</span>
                </Button>
              )}
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0"
                onClick={() => onDismiss(notification.id)}
              >
                <Trash2 className="h-4 w-4 text-red-400" />
                <span className="sr-only">Dismiss</span>
              </Button>
            </div>
          </div>

          <p className="text-zion-slate-light mb-3">{notification.message}</p>

          {notification.action_url && notification.action_text && (
            <Button
              variant="outline"
              size="sm"
              className="mt-1 text-zion-cyan border-zion-cyan hover:bg-zion-cyan hover:text-black"
              onClick={handleAction}
            >
              {notification.action_text}
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default function NotificationsPage() {
  const {
    filteredNotifications,
    unreadCount,
    markAsRead,
    markAllAsRead,
    dismissNotification,
    loading,
    filter,
    setFilter,
  } = useNotifications() as NotificationContextType;

  return (
    <>
      <SEO
        title="Notifications | Zion AI Marketplace"
        description="View and manage your notifications on the Zion AI Marketplace."
      />
      <main className="container mx-auto px-4 py-8 min-h-screen">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold flex items-center">
              <Bell className="mr-3 h-7 w-7" /> Notifications
              {unreadCount > 0 && (
                <Badge className="ml-3 bg-zion-cyan">
                  {unreadCount} unread
                </Badge>
              )}
            </h1>
            <p className="text-muted-foreground">
              Stay updated with the latest activities and reminders
            </p>
          </div>

          {unreadCount > 0 && (
            <Button variant="outline" onClick={() => markAllAsRead()}>
              <Check className="mr-2 h-4 w-4" />
              Mark all as read
            </Button>
          )}
        </div>

        <div className="mb-8">
          <Tabs
            defaultValue={filter}
            onValueChange={(value) => setFilter(value as any)}
          >
            <TabsList className="grid w-full max-w-md grid-cols-6">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="unread">Unread</TabsTrigger>
              <TabsTrigger value="onboarding">Onboarding</TabsTrigger>
              <TabsTrigger value="messages">Messages</TabsTrigger>
              <TabsTrigger value="system">System</TabsTrigger>
              <TabsTrigger value="orders">Orders</TabsTrigger>
            </TabsList>
            <TabsContent value={filter} className="mt-6">
              {loading ? (
                <div className="space-y-4">
                  <Skeleton className="h-24 w-full rounded-lg" />
                  <Skeleton className="h-24 w-full rounded-lg" />
                  <Skeleton className="h-24 w-full rounded-lg" />
                </div>
              ) : filteredNotifications.length === 0 ? (
                <div className="text-center py-12 bg-muted rounded-lg">
                  <Bell className="mx-auto h-12 w-12 text-muted-foreground mb-3 opacity-30" />
                  <h3 className="text-xl font-medium">
                    No notifications found
                  </h3>
                  <p className="text-muted-foreground mt-1">
                    {filter === 'all'
                      ? "You don't have any notifications yet"
                      : `You don't have any ${filter} notifications`}
                  </p>
                </div>
              ) : (
                <div>
                  {filteredNotifications.map((notification) => (
                    <NotificationCard
                      key={notification.id}
                      notification={notification}
                      onMarkAsRead={markAsRead}
                      onDismiss={dismissNotification}
                    />
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </>
  );
}
