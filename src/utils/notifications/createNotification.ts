
import { supabase } from "@/integrations/supabase/client";
import { CreateNotificationParams, CreateNotificationResult } from './types';

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
    const { data, error } = await supabase.rpc('create_notification', {
      _user_id: userId,
      _title: title,
      _message: message,
      _type: type,
      _related_id: relatedId
    });
    
    if (error) throw error;
    
    // Properly type the data as string (notification ID)
<<<<<<< HEAD
    const notificationId = Array.isArray(data) && data.length > 0 && data[0] !== undefined ? data[0] as string : "";
=======
<<<<<<< HEAD
    const notificationId = data as unknown as string;
=======
    const notificationId = Array.isArray(data) && data.length > 0 ? data[0] as string : null;
>>>>>>> 01b9b3f4611f72881f630c7938165034d1b3b2cc
>>>>>>> 1efca24bb10bf92da4f256233e0a9785b77a6521
    
    // If sendEmail is true, call the edge function to send an email
    if (sendEmail && notificationId != null) {
      await supabase.functions.invoke('send-notification-email', {
        body: { user_id: userId, notification_id: notificationId }
      });
    }
    
    return { success: true, notificationId };
  } catch (error) {
    console.error('Error creating notification:', error);
    return { success: false, error };
  }
}
