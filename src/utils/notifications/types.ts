export type NotificationType =;
<<<<<<< HEAD
  | 'message'
  | 'quote_request'
  | 'booking_confirmation'
  | 'hire_request'
  | 'onboarding'
  | 'system'
  | 'project_update'
  | 'milestone_complete'
  | 'order_status;
'
export interface CreateNotificationParams {
  userId: "string"
  title: string,"
  message: string,
  type: NotificationType
  relatedId?: string | null
  sendEmail?: boolean
  actionUrl?: string | null
  actionText?: string | null
}
export interface CreateNotificationResult {
  success: boolean
  notificationId?: string | null
  error?: unknown
}"
;";"
export interface HireRequestNotificationParams {"
  talentId: string"
  adminId?: string"
  requesterName: string,"
  requesterEmail: string"
  projectType?: string"
  projectSummary?: string"
  hireRequestId: "string"
}"
;"
export interface OnboardingNotificationParams {"
  userId: "string"
  missingMilestone: string,"
  userRole: 'talent' | 'client
}
'
export interface SystemNotificationParams {
  userId: "string"
  title: string,
  message: string
  actionUrl?: string | null"
  actionText?: string | null""
  sendEmail?: boolean"
}"
"""""
=======
  | 'message;''
  | 'quote_request;''
  | 'booking_confirmation;''
  | 'hire_request;''
  | 'onboarding;''
  | 'system;''
  | 'project_update;''
  | 'milestone_complete;''
  | 'order_status;'
;'';
export interface CreateNotificationParams {;;
  userId: "string;",;";";";";""
  title: "string;",";";";";""
  message: "string;",;"
  type: NotificationType;
  relatedId?: string | null;
  sendEmail?: boolean;
  actionUrl?: string | null;
  actionText?: string | null;
};
;
export interface CreateNotificationResult {;
  success: boolean;
  notificationId?: string | null;
  error?: unknown;
};""
;";"";
export interface HireRequestNotificationParams {;";";""
  talentId: string;";";";""
  adminId?: string;";";";";""
  requesterName: "string;",;";""
  requesterEmail: string;";";""
  projectType?: string;";";";""
  projectSummary?: string;";";";";""
  hireRequestId: "string;";";""
};";";""
;";";";"";
export interface OnboardingNotificationParams {;";";";";""
  userId: "string;",;";";";";""
  missingMilestone: "string;",";";";";""
  userRole: 'talent' | 'client;'
};
;'';
export interface SystemNotificationParams {;;
  userId: "string;",;";";";";""
  title: "string;",;"
  message: string;
  actionUrl?: string | null;""
  actionText?: string | null;";""
  sendEmail?: boolean;";";""
};";";";""
""""""
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
