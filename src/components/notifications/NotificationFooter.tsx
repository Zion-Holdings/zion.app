<<<<<<< HEAD
import React from 'react';;
import { Button } from '@/components/ui/button;;
import { useRouter } from 'next/router;'
;''
interface NotificationFooterProps {;;
  onClose: "() => void;";"
};

;""
  const router: unknown = useRouter(); // Changed from useNavigate to useRouter;";""
;";";""
  const handleViewAll: unknown = () => {;";";";""
    props.onClose();";";";";""
    router.push('/notifications'); // Changed to router.push;'
  };
;''
  return (;;
    <div className="p-3 text-center border-t border-zion-blue-light">;";";";""
      <Button;";";";";""
        variant="link";";";";";""
        size="sm";";";";";""
        className="text-zion-slate-light text-xs";"
        onClick={handleViewAll};
      >;
        View all notifications;
      </Button>;""
    </div>;";""
  );";";""
};";";";""
""""""
=======
import React from 'react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/router'
'
interface NotificationFooterProps {'
  onClose: "() => void

"
  const router = useRouter(); // Changed from useNavigate to useRouter;"

  const handleViewAll = () => {"
    props.onClose();"
    router.push('/notifications'); // Changed to router.push'
  };
'
  return ('
    <div className=p-3 text-center border-t border-zion-blue-light>"
      <Button;"
        variant=link
        size="sm"
        className=text-zion-slate-light text-xs"
        onClick={handleViewAll};
      >;
        View all notifications;
      </Button>"
    </div>;
  );"
}"
""'';;
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
