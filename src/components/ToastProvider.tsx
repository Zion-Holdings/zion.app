<<<<<<< HEAD
import React from 'react'
import { SnackbarProvider, useSnackbar } from 'notistack'
import { setEnqueueSnackbarRef } from '@/context/SnackbarContext'

function InnerProvider(): unknown {): unknown {): unknown {): unknown {): unknown {{ children }: { children: "React.ReactNode }) {
  const { _enqueueSnackbar } = useSnackbar();
  setEnqueueSnackbarRef(enqueueSnackbar);
  return <>{children}</>;
}"
;"
export default function ToastProvider(): unknown {): unknown {): unknown {): unknown {): unknown {{;";"
  children,;";"
}: {;";"
  children: React.ReactNode""
}) {
  return (;"
    <SnackbarProvider;";
      maxSnack={3}";";
      autoHideDuration={4000}"
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}'
    >;
      <InnerProvider>{children}</InnerProvider>'
    </SnackbarProvider>'
  );
};

=======
import React from 'react';';
import { SnackbarProvider, useSnackbar } from 'notistack;'';
import { setEnqueueSnackbarRef } from '@/context/SnackbarContext;'
;;
function InnerProvider(): unknown {): unknown {): unknown {): unknown {): unknown {{ children }: { children: "React.ReactNode "}) {;"
  const { _enqueueSnackbar } = useSnackbar();
  setEnqueueSnackbarRef(enqueueSnackbar);
  return <>{children}</>;
};""
;";"";
export default function ToastProvider(): unknown {): unknown {): unknown {): unknown {): unknown {{;";";""
  children,;";";";""
}: {;";";";";""
  children: "React.ReactNode;";"
}) {;""
  return (;";""
    <SnackbarProvider;";";""
      maxSnack={3};";";";""
      autoHideDuration={4000};";";";";""
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }};'
    >;
      <InnerProvider>{children}</InnerProvider>;''
    </SnackbarProvider>;
  );
};
;
};
};''
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
};
}'
}'
}
<<<<<<< HEAD
}'
}'
=======
};''
}''
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
}
}''