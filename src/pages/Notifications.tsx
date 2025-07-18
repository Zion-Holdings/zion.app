}> = ({ notification, onMarkAsRead, onDismiss }) => {;
  const router = useRouter();
  const handleAction = () => {;
    if (!notification.read) {;
      onMarkAsRead(notification.id);
    };
    if (notification.action_url) {;
      router.push(notification.action_url);
    };