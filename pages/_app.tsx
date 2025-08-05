import type { AppProps } from 'next/app';import ModernLayout from '../components/layout/ModernLayout'

import '../styles/globals.css'
import { ChatProvider } from '../src/contexts/ChatContext';
import { AuthProvider } from '../src/contexts/AuthContext';

import { NavigationProvider } from '../src/contexts/NavigationContext';
import ChatAssistant from '../src/components/ChatAssistant';
import { useChat } from '../src/contexts/ChatContext';
import MessageChannelDebugger from '../components/MessageChannelDebugger';
import MessageChannelErrorBoundary from '../components/MessageChannelErrorBoundary';
import Sidebar from '../components/ui/Sidebar';
import ParticleEffect from '../components/ParticleEffect';
import '../utils/messageChannelHandler' // Initialize the handler

function ChatWrapper() {
  const { isChatOpen, toggleChat } = useChat();
  return <ChatAssistant isOpen={isChatOpen} onToggle={toggleChat} />;
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ModernLayout>
    return (
    <MessageChannelErrorBoundary>
      <AuthProvider>
        <NavigationProvider>
          <ChatProvider>
            <div className="relative min-h-screen cyber-bg flex">
              <ParticleEffect />
              <Sidebar />
              <div className="flex-1 lg ml-80 relative z-10">
                <Component {...pageProps} />
                <ChatWrapper />
                <MessageChannelDebugger />
              </div>
            </div>
          </ChatProvider>
        </NavigationProvider>
      </AuthProvider>
    </MessageChannelErrorBoundary>
  
  </ModernLayout>

  </ModernLayout>
)
} 