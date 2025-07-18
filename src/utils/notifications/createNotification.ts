import { supabase } from "@/integrations/supabase/client";
import type { CreateNotificationParams, CreateNotificationResult } from './types';
import {logErrorToProduction} from '@/utils/productionLogger';


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
  actionText = null
}: CreateNotificationParams): Promise<CreateNotificationResult> {
  void actionUrl;
  void actionText;
  try {
    // Call the create_notification database function
    if (!supabase) throw new Error('Supabase client not initialized');
    const { data, error } = await supabase.rpc('create_notification', {
      _user_id: userId,
      _title: title,
      _message: message,
      _type: type,
      _related_id: relatedId
    });
    
    if (error) throw error;
    
    // Properly type the data as string (notification ID)
    const notificationId = Array.isArray(data) && data.length > 0 && data[0] !== undefined ? (data[0] as unknown as string) : null;
    
    // If sendEmail is true, call the edge function to send an email
    if (sendEmail && notificationId != null) {
      if (!supabase) throw new Error('Supabase client not initialized');
      await supabase.functions.invoke('send-notification-email', {
        body: { user_id: userId, notification_id: notificationId }
      });
    }
    
    return { success: true, notificationId };
  } catch {
    logErrorToProduction('Error creating notification', 'Error occurred');
    return { success: false, 'Error occurred' };
  }
}
