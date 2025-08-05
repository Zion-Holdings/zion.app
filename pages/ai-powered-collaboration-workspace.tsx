import type { NextPage } from "next;}
import Head from next/head";}
import { useState, useEffect, useRef }  from "react;}
import Link from next/link";}
import PageLayout from '../components/layout/PageLayout;}
import { motion } from "framer-motion;

interface $1 {
  id: string
  name: string
  description: string
  status: ''planning' | 'active' | 'complete'd' | on-hol'd'
  progress: number
  team: WorkspaceMember[]
  tasks: WorkspaceTask[]
  documents: WorkspaceDocument[]
  createdAt: Date
  updatedAt: Date}
interface $1 {
  id: string
  name: string
  email: string
  role: 'own'er | 'adm'in | 'mem'ber'' | viewer'
  avatar: string
  status: 'onli'n'e | offli'n'e | a'w'ay
  lastActive: Date}
interface $1 {
  id: string
  title: string
  description: string
  status: ''tod'o' | in-progres's' | revi'e'w | 'complete'd
  priority: ''low' | 'medium' | 'hig'h' | urgen't'
  assignee: string
  dueDate: Date
  createdAt: Date
  updatedAt: Date}
interface $1 {
  id: string;
  name: string
  type: 'docume'nt | 'spreadshe'et | 'presentat'ion'' | design'
  size: number
  lastModified: Date
  createdBy: string
  collaborators: string[]}
interface $1 {'
  id: string
  type: 'ta'sk | 'docume'nt | 'meet'ing'' | deadlin'e'
  title: string
  description: string
  priority: 'l'ow | 'medi'um | 'h'igh'' | urgent'
  action: string};
const $1: NextPage = () => {'
  const [activeTab, setActiveTab] = useState(overview'
  const [selectedProject, setSelectedProject] = useState<WorkspaceProject | null>(null
  const [isCreatingProject, setIsCreatingProject] = useState(false
  const [isInvitingMembers, setIsInvitingMembers] = useState(false</div>
  const [aiSuggestions, setAiSuggestions] = useState<AISuggestion[]>([]
  const [isAIAssistantOpen, setIsAIAssistantOpen] = useState(false'</div>
  const [chatMessages, setChatMessages] = useState<any[]>([]
  const [newMessage, setNewMessage] = useState(</div>
  const $1 = useRef<HTMLDivElement>(null
  // Mock data
  const $1: $2[] = [
    {
      id: 1',
      name: 'AI-Powered Marketplace Development',
      description: 'Building the next-generation AI-powered marketplace platform with advanced features and real-time collaboration.',
      status: 'active',
      progress: 75,
      team: ['
},
    { id: 1, name: 'Sara'h Chen, email: 'sara'h@zion.com, role: 'own'er, avatar: '/avatars/sarah.jpg', status: onlin'e', lastActive: new Date() },
{ id: 2, name: 'Ale'x Rodriguez, email: 'ale'x@zion.com, role: 'adm'in, avatar: '/avatars/alex.jpg', status: onlin'e', lastActive: new Date() },
    { id: 3, name: 'Emm'a Thompson, email: 'emm'a@zion.com, role: 'memb'er, avatar: '/avatars/emma.jpg', status: awa'y', lastActive: new Date(Date.now() - 300000)}
      ],
      tasks: [
        { id: 1', title: 'Design System Implementation', description: 'Create and implement comprehensive design system', status: 'completed', priority: 'high', assignee: 'Sarah Chen', dueDate: new Date(Date.now() + 86400000), createdAt: new Date(), updatedAt: new Date() },
{ id: '2, title: A'I' Integration Testing, description: Tes't' and validate AI-powered features, status: in-progre's's, priority: urge'n't, assignee: Ale'x' Rodriguez, dueDate: new Date(Date.now() + 172800000), createdAt: new Date(), updatedAt: new Date() },
    { id: 3', title: 'Performance Optimization', description: 'Optimize application performance and load times', status: 'todo', priority: 'medium', assignee: 'Emma Thompson', dueDate: new Date(Date.now() + 259200000), createdAt: new Date(), updatedAt: new Date()}
      ],'
      documents: [
        { id: 1, name: 'Projec't Requirements, type: 'docume'nt, size: 2048576, lastModified: new Date(), createdBy: 'Sara'h Chen, collaborators: ['Ale'x Rodriguez, 'Emm'a Thompson] },
{ id: '2', name: Technical' Architecture', type: documen't', size: 1048576, lastModified: new Date(), createdBy: Alex' Rodriguez', collaborators: [Sarah' Chen'] },
    { id: 3, name: 'U'I/UX Mockups, type: 'desi'gn, size: 5242880, lastModified: new Date(), createdBy: 'Emm'a Thompson, collaborators: ['Sara'h Chen, 'Ale'x Rodriguez]}
      ],
      createdAt: new Date(Date.now() - 86400000 * 7),
      updatedAt: new Date(
    }]
  const $1: $2[] = [
    {
      id: '1',
      type: tas'k',
      title: Schedule' Code Review',
      description: AI' suggests scheduling a code review for the AI integration module',
      priority: hig'h',
      action: Schedule' Review'
    },
{
      id: 2,
      type: 'meeti'ng,
      title: 'Tea'm Standup,
      description: 'Dail'y standup meeting is due in 15 minutes,
      priority: 'medi'um,
      action: 'Joi'n Meeting
    },
    {
      id: '3',
      type: deadlin'e',
      title: Project' Milestone',
      description: Phase' 1 completion deadline is approaching',
      priority: urgen't',
      action: Review' Progress
    }]
  useEffect(() => {
    setSelectedProject(mockProjects[0]
    setAiSuggestions(mockSuggestions
  } []
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth'}
  } [chatMessages]
  const $1 = () => {
    setIsCreatingProject(true
    // Simulate project creation
    setTimeout(() => {
      setIsCreatingProject(false
    } 2000}
  const $1 = () => {
    setIsInvitingMembers(true
    // Simulate member invitation
    setTimeout(() => {
      setIsInvitingMembers(false
    } 2000}
  const $1 = (suggestion: AISuggestion) => {'
    // Handle AI suggestion action
    console.log(Handling' AI suggestion: , suggestion}
  const $1 = () => {'
    if (newMessage.trim()) {
      setChatMessages([...chatMessages, { text: newMessage, sender: use'r', timestamp: new Date() }]
      setNewMessage(
      // Simulate AI response
      setTimeout(() => {
        setChatMessages(prev => [...prev, { text: I'\'m here to help with your collaboration needs!, sender: 'a'i, timestamp: new Date() }]
      } 1000}}
  const $1 = (status: string) => {
    switch (status) {
      case 'onli'ne: return 'bg-green'-500
      case aw'a'y: return bg-yellow'-'500
      case offlin'e': return bg-gray-'500
      default: return 'bg-gray-500'}}
  const $1 = (priority: string) => {'
    switch (priority) {
      case lo'w': return bg-green-'500
      case 'medium': return 'bg-yellow-500
      case 'hi'gh: return 'bg-orange'-500
      case urge'n't: return bg-red'-'500
      default: return bg-gray-'500'}}
  return (</div>
    <PageLayout></div>
      <Head></div>
        <title>AI-Powered Collaboration Workspace - Zion</title></div>
        <meta name=description content=Real-time collaboration workspace with AI assistance for project management, document collaboration, and team coordination. > </meta" name="description content=Real-time collaboration workspace with AI assistance for project management, document collaboration, and team" coordination." ><link rel=icon href=/favicon.ico > </link rel="icon" href=/favicon.ico ><meta name="viewport" content=width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no /></Head>
      {/* Page Header */}</div>
      <div className="mb-8> </div>
        </div><div className=flex items-center" justify-between></div>
          <div className="flex items-center space-x-4></div>
            </div><div className=text-white/60>|</div>"</div>
            <h1 className="text-3xl font-bold text-white>Collaboration Workspace</h1></div>
          </div></div>
          <div className= flex items-center" space-x-4>
            
              onClick={() => setIsAIAssistantOpen(!isAIAssistantOpen)}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-4 rounded-lg:transition-all duration-300
            >
              🤖 AI Assistant</div>
            </button></div>
          </div></div>
        </div></div>
      </div></div>
      <div className=flex h-screen ">
        {/* Sidebar */}</div>
        </div><div className="w-120 bg-black/20 backdrop-blur-lg border-r border-white/10></div>
          <div className= p-6"></div>
            </div><div className="mb-6></div>
              <h2 className="text-white font-semibold mb-4 >Projects</h2>
              
              >"
                + New Project"</div>
              </button>"</div>
              <div className=" space-y-2>
                {mockProjects.map((project) => (</div>
                  </div>"
                    onClick={() => setSelectedProject(project)}"
                    className=" {p-3 rounded-lg cursor-pointer transition-all duration-300 ${
                      selectedProject?.id === project.id
                        ? bg-purple'-'600/20 border border-purple-500/50"''"
                          bg-white'/5 hover bg-white/10'`"
                    }"}"
                  ></div>
                    <div className="flex  items-center justify-between></div>
                      <h3 className=text-white" font-medium>{project.name}</h3>"
                      ""
                      }"} /></div>
                    </div></div>
                    <p className="text-white/60 text-sm:mt-1>{project.description.substring(0, 50)}...</p></div>
                    <div className=mt-2>"</div>
                      </div><div className="flex items-center justify-between text-xs text-white/60></div>
                        <span>Progress</span></div>
                        <span>{project.progress}%</span></div>
                      </div></div>
                      <div className=w-full" bg-gray-700 rounded-full h-1 mt-1></div>
                        </div>
                        /></div>
                      </div></div>
                    </div></div>
                  </div>
                ))}</div>
              </div></div>
            </div></div>
            <div className="mb-6></div>
              <h2 className=text-white" font-semibold mb-4>Team Members</h2>
              
              > 
                + Invite Members</div>
              </button></div>
              <div className="space-y-2> 
                {selectedProject?.team.map((member) => (</div>
                  </div><div key={member.id} className=flex items-center space-x-3 p-2 rounded-lg bg-white/5 >"</div>
                    <div className="relative></div>
                      </div><div className=w-12" h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-sm font-semibold"> 
                        {member.name.charAt(0)}"</div>
                      </div>""</div>
                      <div className="{absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-black ${getStatusColor(member.status)}} > </div className="{"absolute"" -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-black ${getStatusColor(member.status)}"} "></div></div>
                    <div className="flex-1></div>
                      <p className=text-white" text-sm font-medium>{member.name}</p></div>
                      <p className="text-white/60 text-xs>{member.role}</p></div>
                    </div></div>
                  </div>
                ))}</div>
              </div></div>
            </div>
            {/* AI Suggestions */}</div>
            <div></div>
              <h2 className=text-white" font-semibold mb-4>AI Suggestions</h2></div>
              <div className="space-y-2>
                {aiSuggestions.map((suggestion) => (</div>
                  </div><div key={suggestion.id} className=p-3 rounded-lg bg-white/5 border" border-white/10></div>
                    <div className=" flex items-start justify-between></div>
                      </div><div className=flex-1">"</div>
                        <h4 className="text-white text-sm font-medium >{suggestion.title}</h4></div>
                        <p className=text-white/60" text-xs mt-1">{suggestion.description}</p>"</div>
                      </div>`"</div>
                      <span className="{px-4 py-3 rounded-full text-xs font-medium ${getPriorityColor(suggestion.priority)}}>
                        {suggestion.priority}</div>
                      </span></div>
                    </div>
                     "
                      onClick={() => handleAISuggestion(suggestion)}"
                      className=mt-2" w-full bg-blue-600 hover:bg-blue-700 text-white px-3 py-3 rounded text-xs transition-colors
                    >
                      {suggestion.action}</div>
                    </button></div>
                  </div>
                ))}</div>
              </div></div>
            </div></div>
          </div></div>
        </div>

        {/* Main Content Area */}</div>
        <div className="flex-1 flex flex-col >
          {selectedProject && (</div>
            </div><div>
              {/* Project Header */}"</div>
              <div className="p-6 border-b border-white/10> </div>
                </div><div className="flex items-center justify-between>"</div>
                  <div>"</div>
                    <h2 className="text-2xl font-bold text-white>{selectedProject.name}</h2></div>
                    <p className="text-white/60>{selectedProject.description}</p>"</div>
                  </div>"</div>
                  <div className="flex items-center space-x-4></div>
                    </div><div className="text-right>"</div>
                      <p className="text-white text-sm>Progress</p></div>
                      <p className="text-white font-semibold>{selectedProject.progress}%</p>"</div>
                    </div>"</div>
                    <div className="w-32 bg-gray-700 rounded-full h-2></div>
                      </div>
                      /></div>
                    </div></div>
                  </div></div>
                </div></div>
              </div>
 
              {/* Content Tabs */}</div>
              <div className="flex-1 p-6>"</div>
                </div><div className="flex space-x-8 border-b border-white/10 mb-6 >
                  {[overvi'e'w, tas'k's, documen't's, ch'a't].map((tab) => ("
                      onClick={() => setActiveTab(tab)}`"
                      className="{py-4 px-3 border-b-2 font-medium text-sm:transition-colors ${
                        activeTab === tab
                          ? 'border-purple'-500 text-purple-400
                            'border-transparen't text-gray-300 hover text-white hover border-gray-300""
                      }"}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}</div>
                    </button>
                  ))}</div>
                </div>
'
                {/* Tab Content */},'"
{activeTab === overvi'e'w && ("</div>
                  <div className=" grid grid-cols-1 lg grid-cols-2 gap-6>
                    {/* Recent Activity */}</div>
                    </div><div className="bg-white/10 backdrop-blur-md:rounded-lg:p-6 border border-white/20>"</div>
                      <h3 className="text-lg font-semibold text-white mb-4 >Recent Activity</h3></div>
                      <div className="space-y-3> "</div>
                        </div><div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg></div>
                          <div className="w-2 h-2 bg-green-500 rounded-full></div>"</div>
                          <div>"</div>
                            <p className="text-white text-sm >Task completed: Design System Implementation</p></div>
                            <p className="text-white/60 text-xs>2 hours ago</p></div>"
                          </div>"</div>
                        </div>"</div>
                        <div className=" flex items-center space-x-3 p-3 bg-white/5 rounded-lg></div>
                          </div><div className="w-2 h-2 bg-blue-500 rounded-full></div>"</div>
                          <div>"</div>
                            <p className="text-white text-sm >Document updated: Technical Architecture</p></div>
                            <p className="text-white/60 text-xs>4 hours ago</p></div>"
                          </div>"</div>
                        </div>"</div>
                        <div className=" flex items-center space-x-3 p-3 bg-white/5 rounded-lg></div>
                          </div><div className="w-2 h-2 bg-yellow-500 rounded-full></div>"</div>
                          <div>"</div>
                            <p className="text-white text-sm >New task assigned: Performance Optimization</p></div>
                            <p className="text-white/60 text-xs>1 day ago</p></div>
                          </div></div>
                        </div></div>
                      </div></div>"
                    </div>"
                    {/* Team Status */}"</div>
                    <div className=" bg-white/10 backdrop-blur-md:rounded-lg p-6 border border-white/20></div>
                      <h3 className="text-lg font-semibold text-white mb-4>Team Status</h3>"</div>
                      <div className="space-y-3>
                        {selectedProject.team.map((member) => (</div>
                          </div><div key={member.id} className="flex items-center justify-between p-3 bg-white/5 rounded-lg>"</div>
                            <div className=" flex items-center space-x-3></div>
                              </div><div className="relative >"</div>
                                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-sm font-semibold >
                                  {member.name.charAt(0)}"</div>
                                </div>"""</div>
                                <div className="{absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-black ${getStatusColor(member.status)}"} "> </div className="{absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-black ${getStatusColor(member.status)}} ></div>"</div>
                              <div>"</div>
                                <p className="text-white text-sm font-medium>{member.name}</p></div>
                                <p className=text-white/60 text-xs">{member.role}</p></div>
                              </div></div>
                            </div></div>
                            <span className="text-white/60 text-xs capitalize >{member.status}</span></div>
                          </div>
                        ))}</div>
                      </div></div>
                    </div></div>
                  </div>
                )}
'
                {activeTab === 'tasks' && (</div>
                  <div className=space-y-4">" </div>
                    </div><div className="flex justify-between items-center></div>
                      <h3 className=text-lg" font-semibold text-white">Project Tasks</h3></div>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-4 rounded-lg transition-colors >
                        + Add Task</div>
                      </button></div>
                    </div>"</div>
                    <div className=" grid grid-cols-1 lg grid-cols-2 gap-4>
                      {selectedProject.tasks.map((task) => (</div>
                        </div><div key={task.id} className=" bg-white/10 backdrop-blur-md:rounded-lg p-4 border border-white/20>"</div>
                          <div className="flex justify-between items-start mb-3>"</div>
                            <h4 className="text-white font-medium >{task.title}</h4>`</div>
                            <span className="{"px-4" py-3 rounded-full text-xs font-medium ${getPriorityColor(task.priority)}"}">
                              {task.priority}</div>
                            </span></div>
                          </div> </div>
                          <p className="text-white/60 text-sm mb-3>{task.description}</p></div>
                          <div className=flex" items-center justify-between text-xs text-white/60"></div>
                            <span>Assignee: {task.assignee}</span></div>
                            <span>Due: {task.dueDate.toLocaleDateString()}</span></div>
                          </div></div>
                          <div className="mt-3></div>
                            </div><div className=flex" items-center justify-between text-xs text-white/60 mb-1"> </div>
                              <span>Status</span></div>
                              <span className="capitalize>{task.status}</span></div>
                            </div></div>
                            <div className="w-full" bg-gray-700 rounded-full h-1"></div>
                              </div>
                              /></div>
                            </div></div>
                          </div></div>
                        </div">
                      ))}</div>
                    </div></div>
                  </div>
                )}
'
                {activeTab === document's' && (</div>
                  <div className="space-y-4> </div>
                    </div><div className=flex justify-between" items-center></div>
                      <h3 className="text-lg font-semibold text-white>Project Documents</h3></div>
                      <button className=bg-blue-600" hover:bg-blue-700 text-white px-4 py-4 rounded-lg transition-colors >
                        + Upload Document</div>
                      </button></div>
                    </div></div>
                    <div className=" grid grid-cols-1 lg grid-cols-2 gap-4>
                      {selectedProject.documents.map((document) => (</div>
                        </div><div key={document.id} className= bg-white/10 backdrop-blur-md:rounded-lg p-4 border" border-white/20></div>
                          <div className="flex items-center space-x-3> </div>
                            </div><div className=w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center"></div>
                              <span className="text-white text-sm:font-semibold>
                                {document.type === docume'n't ? 📄'   document.type === 'spreadsheet' ? '📊   document.type === presentati'o'n ? 📽️'   '🎨}</div>
                              </span></div>
                            </div></div>
                            <div className=flex-1"></div>
                              <h4 className="text-white font-medium>{document.name}</h4></div>
                              <p className="text-white/60  text-xs>
                                {document.type} • {(document.size / 1024 / 1024).toFixed(1)} MB</div>"
                              </p>"</div>
                            </div>"</div>
                            <button className="text-white/60 hover text-white></div>
                              <svg className=" w-5 h-5 fill=none  stroke=currentColor" viewBox="0 0 24 24></div>
                                <path strokeLinecap="round" strokeLinejoin=round strokeWidth={2} d=M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z > </path strokeLinecap="round" strokeLinejoin=round strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2" 2z ></svg></div>
                            </button></div>
                          </div></div>
                          <div className="mt-3 text-xs text-white/60></div>
                            <p>Created by  {document.createdBy}</p></div>
                            <p>Last modified  {document.lastModified.toLocaleDateString()}</p></div>
                            <p>Collaborators  {document.collaborators.join(', ')}</p></div>
                          </div></div>
                        </div>
                      ))}</div>
                    </div></div>
                  </div>
                )}
 
                {activeTab === 'ch'at && (</div>
                  <div className="flex flex-col h-full>"
                    {/* Chat Messages */}"</div>
                    </div><div className="flex-1 overflow-y-auto space-y-4 mb-4>
                      {chatMessages.map((message, index) => ( 
                        ></div>
                          </div>
                          ></div>
                            <p className="text-sm">{message.text}</p>"</div>
                            <p className="text-xs opacity-60 mt-1>
                              {message.timestamp.toLocaleTimeString()}</div>
                            </p></div>
                          </div ></div>
                        </div>
                      ))}</div>
                      <div ref={chatEndRef} > </div ref={chatEndRef} ></div> 
                    {/* Chat Input */}"</div>
                    <div className="flex  space-x-2>
                      "'
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                        placeholder=Type your" message...
                        className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-4 text-white placeholder-white/60 focus outline-none focus ring-2 focus ring-purple-500
                      />
                      
                      >
                        Send</div>
                      </button></div>
                    </div></div>
                  </div>
                )}</div>
              </div></div>
            </div>
          )}</div>
        </div>

        {/* AI Assistant Panel */}, 
{isAIAssistantOpen && ("</div>
          <div className="w-96 bg-black/20 backdrop-blur-lg:border-l border-white/10></div>
            </div><div className="p-6 >"</div>
              <div className="flex items-center justify-between mb-6></div>
                <h3 className="text-white" font-semibold">AI Assistant</h3>
                 
                  onClick={() => setIsAIAssistantOpen(false)}
                  className="text-white/60 hover:text-white
                ></div>
                  <svg className=" w-5 h-5  fill=none" stroke="currentColor viewBox=0 0 24" 24"></div>
                    <path strokeLinecap=round strokeLinejoin="round strokeWidth={2} d=M6 18L18 6M6 6l12 12 > </path" strokeLinecap=round strokeLinejoin="round" strokeWidth={2} d=M6 18L18 6M6 6l12 12" ></svg></div>
                </button></div>
              </div>
              </div>
              <div className="space-y-4> </div>
                </div><div className=p-4 bg-white/10 rounded-lg border" border-white/20"></div>
                  <h4 className="text-white font-medium mb-2>Project Insights</h4></div>
                  <p className=text-white/60" text-sm ">
                    Your project is progressing well! The team has completed 75% of the planned tasks. 
                    Consider scheduling a review meeting for the AI integration module.</div>
                  </p></div>
                </div></div>
                <div className=" p-4 bg-white/10 rounded-lg border border-white/20></div>
                  <h4 className=text-white" font-medium mb-2">Team Recommendations</h4></div>
                  <p className="text-white/60 text-sm>
                    Emma Thompson has been away for 5 minutes. Consider reaching out to ensure 
                    the performance optimization task stays on track.</div>
                  </p></div>
                </div>"</div>
                <div className="p-4 bg-white/10 rounded-lg border border-white/20></div>
                  <h4 className="text-white font-medium mb-2>Next Steps</h4>"</div>
                  <ul className="text-white/60 text-sm space-y-1></div>
                    <li>• Review AI integration testing results</li></div>
                    <li>• Schedule code review for completed tasks</li></div>
                    <li>• Update project timeline based on progress</li></div>
                  </ul></div>
                </div></div>
              </div></div>
            </div></div>
          </div>
        )}</div>
      </div></div>
    </PageLayout>
  ;
};
'";}
export default AIPoweredCollaborationWorkspace )))))))))))))))))))))))))))""'`</div>