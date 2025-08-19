
import { supabase } from "@/integrations/supabase/client";
import type { UserDetails } from "@/types/auth";
import { safeStorage, safeSessionStorage } from './safeStorage';

/**
 * Utility function to clean up authentication state
 * This helps prevent auth state inconsistencies and "limbo" states
 */
export const cleanupAuthState = () => {
  // Remove standard auth tokens
  safeStorage.removeItem('supabase.auth.token');
  
  // Remove all Supabase auth keys from localStorage
  try {
    Object.keys(localStorage).forEach((key) => {
      if (key.startsWith('supabase.auth.') || key.includes('sb-')) {
        safeStorage.removeItem(key);
      }
    });
  } catch (e) {
    console.warn('Storage access error:', e);
  }
  
  // Remove from sessionStorage if in use
  try {
    Object.keys(sessionStorage || {}).forEach((key) => {
      if (key.startsWith('supabase.auth.') || key.includes('sb-')) {
        safeSessionStorage.removeItem(key);
      }
    });
  } catch (e) {
    console.warn('Storage access error:', e);
  }
};

/**
 * Utility function to check new user registration and schedule welcome emails
 */
export const checkNewRegistration = async (user: UserDetails) => {
  try {
    // Check if user has received welcome email already
    const { data: existingCampaign } = await supabase
      .from("email_campaigns")
      .select("id")
      .eq("user_id", user.id)
      .eq("campaign_type", "welcome_series")
      .maybeSingle();
      
    // If no welcome email sent yet, schedule one
    if (!existingCampaign) {
      // Create a scheduled job for the welcome email
      await supabase
        .from("scheduled_jobs")
        .insert({
          job_type: "send_retention_email",
          scheduled_for: new Date().toISOString(),
          status: "pending",
          payload: {
            user_id: user.id,
            email_type: "welcome_series",
            user_type: user.userType || "unknown",
            display_name: user.displayName || user.email?.split("@")[0] || "User"
          }
        });
        
      // Create entry in email_campaigns table
      await supabase
        .from("email_campaigns")
        .insert({
          user_id: user.id,
          campaign_type: "welcome_series",
          template_name: "welcome_email",
          template_data: {
            user_id: user.id,
            email_type: "welcome_series",
            user_type: user.userType || "unknown",
            display_name: user.displayName || user.email?.split("@")[0] || "User"
          }
        });
    }
  } catch (error) {
    console.error("Error checking or scheduling welcome email:", error);
  }
};
