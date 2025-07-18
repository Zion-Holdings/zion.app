import { useState, useRef, useEffect } from 'react''
import { MessageSquare, X } from '@/components/ui/icons'

import { Button } from '@/components/ui/button'
import { ChatMessage, ChatInput } from '@/components/ChatAssistant'
import { logErrorToProduction } from '@/utils/productionLogger'
'
interface Msg {'
  id: "string,"
  role: 'user' | 'assistant,'
  message: "string"
}"
";
// Fallback responses when API is unavailable;"";
const FALLBACK_RESPONSES = [;""
  "I'm here to help! You can browse our help documentation, contact support at support@ziontechgroup.com, or try asking your question in a different way.,;"";
  "Thanks for reaching out! While I'm having trouble connecting to my knowledge base, I can suggest checking our FAQ section or contacting our support team directly.",;"
  'I understand you need assistance. For immediate help, please visit our help center or reach out to support@ziontechgroup.com.','
  I'm currently experiencing technical difficulties, but I'd be happy to help you get to the right resource. Try browsing our documentation or contacting support.",""
  'While I work on resolving my connection issues, you can find helpful information in our help section or contact our support team for immediate assistance.','