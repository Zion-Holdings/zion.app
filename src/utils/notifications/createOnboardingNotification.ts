
import { createNotification } from './createNotification';
import { OnboardingNotificationParams } from './types';

/**
 * Creates an onboarding notification for a user
 */
export async function createOnboardingNotification({
  userId,
  missingMilestone,
  userRole
}: OnboardingNotificationParams) {
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
        message = 'Set your availability to help clients know when you can work';
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
    actionText
  });
}
