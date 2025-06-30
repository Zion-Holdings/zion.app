import { supabase } from '@/integrations/supabase/client';
import {logErrorToProduction} from '@/utils/productionLogger';


type NotificationType =
  | 'message'
  | 'quote_request'
  | 'booking_confirmation'
  | 'hire_request'
  | 'onboarding'
  | 'system'
  | 'project_update'
  | 'milestone_complete'
  | 'order_status';

/**
 * Creates a notification for a user and optionally sends an email notification
 */
export async function createNotification({
  userId,
  title,
  message,
  type,
  relatedId = null,
  sendEmail = false,
  actionUrl = null,
  actionText = null,
}: {
  userId: string;
  title: string;
  message: string;
  type: NotificationType;
  relatedId?: string | null;
  sendEmail?: boolean;
  actionUrl?: string | null;
  actionText?: string | null;
}) {
  void actionUrl;
  void actionText;
  try {
    // Call the create_notification database function
    const { data, error } = await supabase.rpc('create_notification', {
      _user_id: userId,
      _title: title,
      _message: message,
      _type: type,
      _related_id: relatedId,
    });

    if (error) throw error;

    // If sendEmail is true, call the edge function to send an email
    if (sendEmail && data) {
      const notificationId = data;
      await supabase.functions.invoke('send-notification-email', {
        body: { user_id: userId, notification_id: notificationId },
      });
    }

    return { success: true, notificationId: data };
  } catch (error) {
    logErrorToProduction('Error creating notification:', { data: error });
    return { success: false, error };
  }
}

/**
 * Creates a hire request notification for admin and talent
 */
export async function createHireRequestNotifications({
  talentId,
  adminId,
  requesterName,
  requesterEmail,
  projectType,
  projectSummary,
  hireRequestId,
}: {
  talentId: string;
  adminId?: string;
  requesterName: string;
  requesterEmail: string;
  projectType?: string;
  projectSummary?: string;
  hireRequestId: string;
}) {
  const projectInfo = projectType ? `${projectType} project` : 'project';

  const summaryText = projectSummary ? `: "${projectSummary}"` : '';

  // Create notification for talent
  const talentNotification = await createNotification({
    userId: talentId,
    title: `New Hire Request from ${requesterName}`,
    message: `${requesterName} (${requesterEmail}) wants to hire you for a ${projectInfo}${summaryText}`,
    type: 'hire_request',
    relatedId: hireRequestId,
    sendEmail: true,
    actionUrl: '/dashboard',
    actionText: 'View Request',
  });

  // Create notification for admin if admin ID is provided
  if (adminId) {
    const adminNotification = await createNotification({
      userId: adminId,
      title: `New Hire Request for Talent`,
      message: `${requesterName} (${requesterEmail}) wants to hire talent for a ${projectInfo}${summaryText}`,
      type: 'hire_request',
      relatedId: hireRequestId,
      sendEmail: true,
      actionUrl: '/admin/hire-requests',
      actionText: 'Review Request',
    });

    return {
      success: talentNotification.success && adminNotification.success,
      talentNotification,
      adminNotification,
    };
  }

  return {
    success: talentNotification.success,
    talentNotification,
  };
}

/**
 * Creates an onboarding notification for a user
 */
export async function createOnboardingNotification({
  userId,
  missingMilestone,
  userRole,
}: {
  userId: string;
  missingMilestone: string;
  userRole: 'talent' | 'client';
}) {
  let title = '';
  let message = '';
  let actionUrl = '';
  let actionText = '';

  if (userRole === 'talent') {
    switch (missingMilestone) {
      case 'profile_completed':
        title = 'Complete your profile';
        message = 'Complete your profile to get discovered by clients';
        actionUrl = '/profile';
        actionText = 'Complete Profile';
        break;
      case 'skills_added':
        title = 'Add your skills';
        message = 'Add your skills to get better job matches';
        actionUrl = '/profile/skills';
        actionText = 'Add Skills';
        break;
      case 'availability_set':
        title = 'Set your availability';
        message =
          'Set your availability to help clients know when you can work';
        actionUrl = '/settings/account';
        actionText = 'Set Availability';
        break;
    }
  } else {
    switch (missingMilestone) {
      case 'job_posted':
        title = 'Post your first job';
        message = 'Post your first job to start finding talent';
        actionUrl = '/post-job';
        actionText = 'Post Job';
        break;
      case 'match_viewed':
        title = 'View your AI matches';
        message = 'Check out your AI-matched talent suggestions';
        actionUrl = '/client-dashboard';
        actionText = 'View Matches';
        break;
      case 'talent_invited':
        title = 'Invite talent';
        message = 'Invite talent to speed up your hiring process';
        actionUrl = '/talent';
        actionText = 'Find Talent';
        break;
    }
  }

  return createNotification({
    userId,
    title,
    message,
    type: 'onboarding',
    sendEmail: false,
    actionUrl,
    actionText,
  });
}

/**
 * Creates a system notification for a user
 */
export async function createSystemNotification({
  userId,
  title,
  message,
  actionUrl = null,
  actionText = null,
  sendEmail = false,
}: {
  userId: string;
  title: string;
  message: string;
  actionUrl?: string | null;
  actionText?: string | null;
  sendEmail?: boolean;
}) {
  return createNotification({
    userId,
    title,
    message,
    type: 'system',
    sendEmail,
    actionUrl,
    actionText,
  });
}

/**
 * Demo function to create test notifications for the current user
 */
export async function createTestNotification(userId: string) {
  const types: NotificationType[] = [
    'message',
    'quote_request',
    'booking_confirmation',
    'hire_request',
    'onboarding',
    'system',
    'project_update',
    'milestone_complete',
    'order_status',
  ];
  const randomType = types[Math.floor(Math.random() * types.length)] || 'system';

  const titles = {
    message: 'New Message Received',
    quote_request: 'Quote Request Submitted',
    booking_confirmation: 'Booking Confirmed',
    hire_request: 'New Hire Request',
    onboarding: 'Complete Your Profile',
    system: 'System Update',
    project_update: 'Project Update',
    milestone_complete: 'Milestone Completed',
    order_status: 'Order Update',
  };

  const messages = {
    message: 'You have received a new message from a potential client.',
    quote_request: 'A client has submitted a quote request for your services.',
    booking_confirmation: 'Your booking has been confirmed and scheduled.',
    hire_request:
      'A client wants to hire you for a project. Check your dashboard for details.',
    onboarding: 'Complete your profile to get more visibility and job matches.',
    system: 'Our platform has been updated with new features. Check them out!',
    project_update: 'There is a new update on your project.',
    milestone_complete: 'A milestone has been marked as complete.',
    order_status: 'There is an update on your order.',
  };

  const actions = {
    message: { url: '/messages', text: 'View Messages' },
    quote_request: { url: '/quotes', text: 'View Quote' },
    booking_confirmation: { url: '/bookings', text: 'View Booking' },
    hire_request: { url: '/dashboard', text: 'View Request' },
    onboarding: { url: '/profile', text: 'Complete Profile' },
    system: { url: '/dashboard', text: 'Learn More' },
    project_update: { url: '/projects', text: 'View Project' },
    milestone_complete: { url: '/projects', text: 'View Milestone' },
    order_status: { url: '/orders', text: 'View Order' },
  };

  return createNotification({
    userId,
    title: titles[randomType],
    message: messages[randomType],
    type: randomType,
    sendEmail: true,
    actionUrl: actions[randomType].url,
    actionText: actions[randomType].text,
  });
}
