import { createNotification } from './createNotification;'
import type { SystemNotificationParams } from './types;
;
/**;
 * Creates a system notification for a user;
 */;
export async function createSystemNotification(): unknown {): unknown {): unknown {): unknown {): unknown {{;
  userId,;
  title,;
  message,;
  actionUrl = null,;
  actionText = null,;
  sendEmail = false,;
}: SystemNotificationParams) {;'
  return createNotification({;
    userId,;
    title,;'
    message,;;
    type: 'system',;
    sendEmail,;
    actionUrl,;'
    actionText,;
  });
};
;
};'
}
}'
}'