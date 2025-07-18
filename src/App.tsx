<<<<<<< HEAD
import React, { useEffect } from 'react''
import { useRouter } from 'next/router'
import { ThemeProvider } from './components/ThemeProvider'
import { WalletProvider } from './context/WalletContext'
import OfflineToast from './components/OfflineToast'
import InstallPrompt from './components/InstallPrompt'
import { SupportChatbot } from './components/SupportChatbot'
import RootErrorBoundary from './components/RootErrorBoundary'
import './App.css'
'
function ScrollToTop(): ;
  const router = useRouter()'
  useEffect(() => {'
    window.scrollTo({ top: "0, behavior: 'smooth' })'
  }, [router.pathname])'
  return null'
};
'
const App = ({ children "}: { children?: React.ReactNode }) => {";
=======
import React, { useEffect } from 'react''';
import { useRouter } from 'next/router;'';
import { ThemeProvider } from './components/ThemeProvider;'';
import { WalletProvider } from './context/WalletContext;'';
import OfflineToast from './components/OfflineToast;'';
import InstallPrompt from './components/InstallPrompt;'';
import { SupportChatbot } from './components/SupportChatbot;'';
import RootErrorBoundary from './components/RootErrorBoundary;'';
import './App.css;''
'';
function ScrollToTop(): unknown {): unknown {): unknown {): unknown {): unknown {) {;
  const router: unknown = useRouter();''
  useEffect(() => {;''
    window.scrollTo({ top: "0, behavior: 'smooth' })''
  }, [router.pathname]);''
  return null''
};
;'';
const App: unknown = ({ children "}: { children?: React.ReactNode }) => {";"
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
  return (;
    <WalletProvider>;""
      <ThemeProvider defaultTheme="dark>"
        <ScrollToTop />;
        <RootErrorBoundary>{children}</RootErrorBoundary>;
        <OfflineToast />;
        <SupportChatbot />;
        <InstallPrompt />;
<<<<<<< HEAD
      </ThemeProvider>;"
    </WalletProvider>)"
};"
;";"
export default App;";"
;""
};"
}"
=======
      </ThemeProvider>;
    </WalletProvider>)""
};""
;";"";
export default App;";""
;"""
};""
}""
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
}
}""