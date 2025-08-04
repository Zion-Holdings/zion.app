import type { AppProps } from 'next/app'
import '../styles/globals.css'
import { ChatProvider } from '../src/contexts/ChatContext'
import { AuthProvider } from '../src/contexts/AuthContext'
import { HeaderProvider } from '../src/contexts/HeaderContext'
import ChatAssistant from '../src/components/ChatAssistant'
import { useChat } from '../src/contexts/ChatContext'
import MessageChannelDebugger from '../components/MessageChannelDebugger'
import MessageChannelErrorBoundary from '../components/MessageChannelErrorBoundary'
import Header from '../components/ui/Header'
import '../utils/messageChannelHandler' // Initialize the handler

function ChatWrapper() {
  const { isChatOpen, toggleChat } = useChat();
  return <ChatAssistant isOpen={isChatOpen} onToggle={toggleChat} />;
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MessageChannelErrorBoundary>
      <AuthProvider>
        <HeaderProvider>
          <ChatProvider>
            <Header />
            <Component {...pageProps} />
            <ChatWrapper />
            <MessageChannelDebugger />
          </ChatProvider>
        </HeaderProvider>
      </AuthProvider>
    </MessageChannelErrorBoundary>
  )
} 