<<<<<<< HEAD
import type { ReactNode } from 'react;'
;;
export interface HelpArticle {;;
  id: "string;",;";";";";""
  title: "string;",";";";";""
  content: "string;",;";";";";""
  lastUpdated: "string;",";";";";""
  tags: "string[];";";""
};";";""
;";";";"";
export interface HelpCategory {;";";";";""
  id: "string;",;";";";";""
  name: "string;",";";";";""
  description: "string;",;";";";";""
  icon: "ReactNode;",";";";";""
  articles: "HelpArticle[];";";""
};";";""
;";";";"";
export interface SupportTicket {;";";";";""
  id: "string;",;";";";";""
  userId: "string;",";";";";""
  subject: "string;",;";";";";""
  message: "string;",";";";";""
  status: 'open' | 'in-progress' | 'resolved' | 'closed,;;'
  priority: 'low' | 'medium' | 'high,;'
  createdAt: "string;",;";";";";""
  updatedAt: "string;";";";""
};";";";""
""""""
=======
import type { ReactNode } from 'react'
'
export interface HelpArticle {'
  id: string
  title: string,"
  content: string
  lastUpdated: string,
  tags: string[]"
}"

export interface HelpCategory {
  id: "string"
  name: string,"
  description: string
  icon: ReactNode,"
  articles: HelpArticle[]
}"
"
export interface SupportTicket {
  id: string"
  userId: "string,
  subject: "string"
  message: string,"
  status: 'open' | 'in-progress' | 'resolved' | 'closed,'
  priority: 'low' | 'medium' | 'high,'
  createdAt: "string
  updatedAt: string"
}"
""'';;
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
