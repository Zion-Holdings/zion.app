import type { AppProps } from 'next/app'
import '../styles/globals.css'
import { ChatProvider } from '../src/contexts/ChatContext'
import ChatAssistant from '../src/components/ChatAssistant'
import { useChat } from '../src/contexts/ChatContext'

function ChatWrapper() {
  const { isChatOpen, toggleChat } = useChat();
  return <ChatAssistant isOpen={isChatOpen} onToggle={toggleChat} />;
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChatProvider>
      <Component {...pageProps} />
      <ChatWrapper />
    </ChatProvider>
  )
} 