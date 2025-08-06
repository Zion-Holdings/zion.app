import type { NextPage } from "next
import Head from 'next/head'
import { useState, useEffect, useMemo } from react;}
import Link from next/link"
import PageLayout from '../components/layout/PageLayout;}'
import { motion } from "framer-motion
interface FacilityPlan {
  id: "string"
  name: string
  description: string
  status: 'planning" | active | completed | on-hold
  progress: number
  team: WorkspaceMember[];
  tasks: WorkspaceTask[];
  documents: WorkspaceDocument[];
  createdAt: Date;
  updatedAt: Date"};
interface FacilityPlan {;
  id: "string;
  name: string
  email: string
  role: 'owner" | admin | mem'ber | viewer
  avatar: "string
  status: 'online | offline | aw'ay
  lastActive: "Date"}"
interface FacilityPlan {;
  id: "string;
  title: string
  description: string
  status: 'todo | in-progress | review | 'complete'd
  priority: 'low | medium | high | urgen't
  assignee: string"
  dueDate: Date;
  createdAt: Date;
  updatedAt: Date"};
interface FacilityPlan {;
  id: "string
  name: string
  type: 'document" | spreadsheet | presentation | design;
  size: number;
  lastModified: Date;
  createdBy: string;
  collaborators: string[]"};
interface FacilityPlan {;
  id: "string;
  'type: 'task | document | meeting | deadlin'e;
  title: string
  description: string
  priority: 'low | medium | high' | '''urgent
  action: string"}"'''
const AIPoweredPredictiveAnalytics: "NextPage = () => {;
  const [activeTab", setActiveTab] = useState(overview;
  const [selectedProject, setSelectedProject] = useState<WorkspaceProject | null>(null;
  const [isCreatingProject, setIsCreatingProject] = useState(false;
  const [isInvitingMembers, setIsInvitingMembers] = useState(false</div>;
  const [aiSuggestions, setAiSuggestions] = useState<AISuggestion[]>([];
  const [isAIAssistantOpen, setIsAIAssistantOpen] = useState(false</div>;
  const [chatMessages, setChatMessages] = useState<any[]>([];
  const [newMessage, setNewMessage] = useState(</div>;
  const $1 = useRef<HTMLDivElement>(null;
  // Mock data;
  const mockPredictiveModels: "PredictiveModel[] = [;
    {;
      id: 1",;
      name: "AI-Powered Marketplace Development",
      description: "'Building the next-generation AI-powered marketplace platform with advanced features and real-time collaboration.'",
      status: ""active",
      progress: "75",;
      team: "[
"},
    { id: "1", name: "Sarah Chen", email: "sarah@zion.com", role: "owner", avatar: "'/avatars/sarah.jpg'", status: "online", lastActive: "new Date() "},"
{ id: "2", name: "Alex Rodriguez", email: "alex@zion.com", role: "adm'in", avatar: ""/avatars/alex.jpg", status: "online", lastActive: "new Date() "},
    { id: "3", 'name: "'Emma Thompson", email: "emma@zion.com", role: "member", avatar: "/avatars/emma.jpg", status: "awa'y'", lastActive: "new Date(Date.now() - 300000)"}"
      ],;
      tasks: "[
        { id: 1", title: "Design System Implementation", description: "Create and implement comprehensive design system", status: "'completed", priority: "'high'", assignee: "Sarah Chen", dueDate: "new Date(Date.now() + 86400000)", createdAt: "new Date()", updatedAt: "new Date() "},
{ id: "2", title: "A'I Integration Testing", description: "'Test and validate AI-powered features", status: "in-progress", priority: "urgen't", assignee: ""Alex Rodriguez", dueDate: "new Date(Date.now() + 172800000)", createdAt: "new Date()", updatedAt: "new Date() "},
    { id: "3", title: "'Performance Optimization", description: "'Optimize application performance and load times", status: "todo", priority: "'medium'", assignee: "Emma Thompson'", dueDate: "new Date(Date.now() + 259200000)", createdAt: "new Date()", updatedAt: "new Date()"}"
      ],;
      documents: "[
        { id: 1", name: "Project Requirements", type: "document", size: "2048576", lastModified: "new Date()", createdBy: "Sarah Chen", collaborators: "[Ale'x Rodriguez", Emma Thompson] },
{ id: "'2", name: "Technical Architecture", type: "document", size: "1048576", lastModified: "new Date()", createdBy: "Alex' Rodriguez'", collaborators: ""[Sarah Chen] "},
    { id: "3", name: "UI/UX Mockups", type: "design", size: "5242880", lastModified: "new Date()", createdBy: "Emma Thompson", collaborators: "[Sarah Chen", 'Ale'x Rodriguez]}
      ],
      createdAt: "new Date(Date.now() - 86400000 * 7)","
      updatedAt: "new Date(;
    "}];
  const mockPredictiveModels: "PredictiveModel[] = [;
    {;
      id: 1",;
      type: "task",;
      title: "Schedule Code Review",;
      description: "AI suggests scheduling a code review for the AI integration module'",;
      priority: "'high'",;
      action: "Schedule Review;
    "},;
{;
      id: "2",;
      type: "meeting",;
      title: "Team Standup",
      description: "Dail'y standup meeting is due in 15 minutes",
      priority: ""medium",
      action: "Join Meeting;
    "},;
    {;
      id: "3",;
      type: "deadline",
      title: "Project Milestone'",
      description: "Phase 1 completion deadline is approaching","
      priority: "urgent",;
      action: "Review' Progress;
    "}];
  useEffect(() => {;
    setSelectedProject(mockProjects[0];
    setAiSuggestions(mockSuggestions;
  } []
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: ""smooth"}
  } [chatMessages];
  const $1 = () => {;
    setIsCreatingProject(true;
    // Simulate project creation;
    setTimeout(() => {;
      setIsCreatingProject(false;
    } 2000};
  const $1 = () => {;
    setIsInvitingMembers(true;
    // Simulate member invitation;
    setTimeout(() => {;
      setIsInvitingMembers(false;
    } 2000};
  const handleAction = (params) => {;
    // Handle AI suggestion action;
    console.log(Handling AI suggestion: , suggestion};
  const $1 = () => {;
    if (newMessage.trim()) {;
      setChatMessages([...chatMessages, { text: "newMessage", sender: "user", timestamp: "new Date() "}];
      setNewMessage(;
      // Simulate AI response
      setTimeout(() => {
        setChatMessages(prev => [...prev, { text: "I'\m here to help with your collaboration needs!", sender: "ai", timestamp: "new Date() "}]"
      } 1000}};
  const $1 = (status: "string) => {;
    switch (status) {
      case online: return bg-green'-500
      case aw'ay: "return bg-yellow-500
      case offline: return bg-gray-500
      default: return 'bg-gray-500'"}}
  const $1 = (priority: "string) => {"
    switch (priority) {;
      case low: return bg-green-500
      case medium: return 'bg-yellow-500
      case 'high: "return bg-orange-500
      case urgent: return bg-red-'500
      default: return bg-gray-500"}}"
  return (</div>
    <PageLayout></div>"
      <Head></div>
        <title>AI-Powered Collaboration Workspace - Zion</title></div>'
        <meta name=description content=Real-time collaboration workspace with AI assistance for project management, document collaboration, and team coordination. > </meta name=description content=Real-time collaboration workspace with AI assistance for project management, document collaboration, and team coordination. ><link rel=icon href=/favicon.ico > </link rel=icon href=/favicon.ico ><meta name=viewport" content=width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no         /></Head>"
      {/* Page Header */}</div>'
      <div className=mb-8> </div>"
        </div><div className=flex items-center justify-between></div>"
          <div className=flex items-center space-x-4></div>'
            </div><div className=text-white/60>|</div></div>'
            <h1 className=""text-3xl font-bold text-white>Collaboration Workspace</h1></div>
          </div></div>
          <div className= flex items-center space-x-4>
              onClick={() => setIsAIAssistantOpen(!isAIAssistantOpen)}'
              className=bg-gradient-to-r from-purple-600 to-pink-600 hover: ""from-purple-700 hover:to-pink-700 text-white px-4 py-4 rounded-lg:transition-all duration-300"
            >;
              🤖 AI Assistant</div>;
            </button></div>;
          </div></div>
        </div></div>
      </div></div>
      <div className=flex h-screen >
        {/* Sidebar */"}</div>
        </div><div className=w-120 bg-black/20 backdrop-blur-lg border-r border-white/10></div>
          <div className= p-6></div>
            </div><div className=mb-6></div>'
              <h2 className=""text-white font-semibold mb-4 >Projects</h2>
              '
              >'
                + New Project</div>
              </button></div>'
              <div className= space-y-2>"
                {mockProjects.map((project) => (</div>'
                  </div>'"
                    onClick={() => setSelectedProject(project)}
                    className= {p-3 rounded-lg cursor-pointer transition-all duration-300 ${
                      selectedProject?.id === project.id'
                        ? bg-purple-600/20 border border-purple-500/50'
                          bg-white/5 hover bg-white/10'`"
                    }}
                  ></div>'"
                    <div className=flex  items-center justify-between></div>'
                      <h3 className=text-white" font-medium>{project.name}</h3>'
                      '"
                      }} /></div>
                    </div></div>'
                    <p className=text-white/60 text-sm: "mt-1>{project.description.substring(0", 50)}...</p></div>"
                    <div className=mt-2></div>;
                      </div><div className=flex items-center justify-between text-xs text-white/60></div>;
                        <span>Progress</span></div>;
                        <span>{project.progress}%</span></div>;
                      </div></div>;
                      <div className=w-full bg-gray-700 rounded-full h-1 mt-1></div>;
                        </div>;
                        /></div>;
                      </div></div>;
                    </div></div>;
                  </div>;
                ))}</div>
              </div></div>
            </div></div>
            <div className=mb-6></div>"
              <h2 className=text-white font-semibold mb-4>Team Members</h2>
              >
                + Invite Members</div>
              </button></div>'
              <div className="space-y-2>"
                {selectedProject?.team.map((member) => (</div>'
                  </div><div key={member.id} className=flex items-center space-x-3 p-2 rounded-lg bg-white/5 ></div>
                    <div className=relative></div>'
                      </div><div className=w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-sm font-semibold"> '
                        {member.name.charAt(0)}"</div>
                      </div></div>'
                      <div className="{absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-black ${getStatusColor(member.status)}} > </div className="{absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-black ${getStatusColor(member.status)}"} ></div></div>"
                    <div className=flex-1></div>'
                      <p className=text-white text-sm font-medium>{member.name}</p></div>'
                      <p className="text-white/60 text-xs>{member.role}</p></div>;
                    </div></div>;
                  </div>;
                ))}</div>
              </div></div>
            </div>
            {/* AI Suggestions */}</div>"
            <div>
              <h2 className=text-white font-semibold mb-4>AI Suggestions</h2></div>
              <div className=space-y-2>
                {aiSuggestions.map((suggestion) => (</div>'
                  </div><div key={suggestion.id} className=p-3 rounded-lg bg-white/5 border" border-white/10></div>'
                    <div className=" flex items-start justify-between></div>
                      </div><div className=flex-1></div>'
                        <h4 className=""text-white text-sm font-medium >{suggestion.title}</h4></div>'
                        <p className=text-white/60 text-xs mt-1>{suggestion.description}</p></div>
                      </div></div>'
                      <span className=""{px-4 py-3 rounded-full text-xs font-medium ${getPriorityColor(suggestion.priority)}}>
                        {suggestion.priority}</div>
                      </span></div>
                    </div>'
                     '
                      onClick={() => handleAISuggestion(suggestion)}'
                      className=mt-2 w-full bg-blue-600 hover: ""bg-blue-700 text-white px-3 py-3 rounded text-xs transition-colors"
                    >;
                      {suggestion.action"}</div>;
                    </button></div>;
                  </div>;
                ))}</div>;
              </div></div>;
            </div></div>;
          </div></div>
        </div>
        {/* Main Content Area */}</div>
        <div className=flex-1 flex flex-col >
          {selectedProject && (</div>
            </div><div>
              {/* Project Header */}</div>"
              <div className=p-6 border-b border-white/10> </div>'
                </div><div className=flex items-center justify-between>"</div>'
                  <div></div>
                    <h2 className=text-2xl font-bold text-white>{selectedProject.name}</h2></div>'
                    <p className=text-white/60>{selectedProject.description}</p>"</div>'
                  </div>"</div>
                  <div className=flex items-center space-x-4></div>'
                    </div><div className=text-right></div>'
                      <p className=""text-white text-sm>Progress</p></div>
                      <p className=text-white font-semibold>{selectedProject.progress}%</p></div>'
                    </div></div>'
                    <div className=""w-32 bg-gray-700 rounded-full h-2></div>;
                      </div>
                      /></div>
                    </div></div>
                  </div></div>
                </div></div>
              </div>
              {/* Content Tabs */}</div>
              <div className=flex-1 p-6></div>'
                </div><div className=""flex space-x-8 border-b border-white/10 mb-6 >'
                  {[overview, tasks, documen'ts, cha't].map((tab) => ('
                      onClick={() => setActiveTab(tab)}`'
                      className={py-4 px-3 border-b-2 font-medium text-sm: "transition-colors ${
                        activeTab === tab;
                          ? border-purple-500 text-purple-400;
                            border-transparent text-gray-300 hover text-white hover border-gray-300;
                      "}};
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}</div>
                    </button>
                  ))}</div>"
                </div>
'
                {/* Tab Content */},
{activeTab === overvie'w && (</div>'
                  <div className=" grid grid-cols-1 lg grid-cols-2 gap-6>
                    {/* Recent Activity */}</div>'
                    </div><div className=""bg-white/10 backdrop-blur-md: "rounded-lg:p-6 border border-white/20></div>
                      <h3 className=text-lg font-semibold text-white mb-4 >Recent Activity</h3></div>"
                      <div className=space-y-3> </div>"
                        </div><div className=flex items-center space-x-3 p-3 bg-white/5 rounded-lg></div>'
                          <div className=w-2 h-2 bg-green-500 rounded-full></div></div>'
                          <div></div>'
                            <p className=text-white text-sm >Task completed: "Design System Implementation</p></div>"
                            <p className=text-white/60 text-xs>2 hours ago</p></div>
                          </div></div>
                        </div></div>
                        <div className= flex items-center space-x-3 p-3 bg-white/5 rounded-lg></div>'
                          </div><div className=""w-2 h-2 bg-blue-500 rounded-full></div></div>
                          <div></div>'
                            <p className=text-white text-sm >Document updated: "Technical Architecture</p></div>"
                            <p className=text-white/60 text-xs>4 hours ago</p></div>
                          </div></div>
                        </div></div>'
                        <div className="" flex items-center space-x-3 p-3 bg-white/5 rounded-lg></div>'
                          </div><div className=w-2 h-2 bg-yellow-500 rounded-full></div></div>"
                          <div></div>'
                            <p className="text-white text-sm >New task assigned: Performance Optimization</p></div>"
                            <p className=text-white/60 text-xs>1 day ago</p></div>
                          </div></div>"
                        </div></div>
                      </div></div>
                    </div>
                    {/* Team Status */"}</div>'
                    <div className=" bg-white/10 backdrop-blur-md: ""rounded-lg p-6 border border-white/20></div>
                      <h3 className=text-lg font-semibold text-white mb-4>Team Status</h3></div>
                      <div className=space-y-3>
                        {selectedProject.team.map((member) => (</div>"
                          </div><div key={member.id"} className=flex items-center justify-between p-3 bg-white/5 rounded-lg></div>"
                            <div className= flex items-center space-x-3></div>'
                              </div><div className=relative >"</div>"
                                <div className=w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-sm font-semibold >
                                  {member.name.charAt(0)}</div>'
                                </div>'</div>'
                                <div className={absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-black ${getStatusColor(member.status)}} "> </div className={absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-black ${getStatusColor(member.status)}} ></div></div>'
                              <div>"</div>'
                                <p className=text-white text-sm font-medium>{member.name}</p></div>;
                                <p className=text-white/60 text-xs>{member.role}</p></div>;
                              </div></div>;
                            </div></div>;
                            <span className=text-white/60 text-xs capitalize >{member.status}</span></div>
                          </div>
                        ))}</div>
                      </div></div>"
                    </div></div>
                  </div>"
                )}
                {activeTab === tasks && (</div>'
                  <div className=space-y-4>" </div>"
                    </div><div className=flex justify-between items-center></div>'
                      <h3 className=text-lg font-semibold text-white>Project Tasks</h3></div>'
                      <button className="bg-blue-600 hover: ""bg-blue-700 text-white px-4 py-4 rounded-lg transition-colors >
                        + Add Task</div>
                      </button></div>
                    </div></div>
                    <div className= grid grid-cols-1 lg grid-cols-2 gap-4>
                      {selectedProject.tasks.map((task) => (</div>"
                        </div><div key={task.id"} className= bg-white/10 backdrop-blur-md:rounded-lg p-4 border border-white/20></div>
                          <div className=flex justify-between items-start mb-3></div>'"
                            <h4 className=text-white font-medium >{task.title}</h4>`</div>'
                            <span className=""{px-4 py-3 rounded-full text-xs font-medium ${getPriorityColor(task.priority)}}>"
                              {task.priority}</div>
                            </span></div>"
                          </div> </div>
                          <p className=text-white/60 text-sm mb-3>{task.description}</p></div>'
                          <div className=flex items-center justify-between text-xs text-white/60></div>'
                            <span>Assignee: ""{task.assignee"}</span></div>"
                            <span>Due: "{task.dueDate.toLocaleDateString()"}</span></div>
                          </div></div>
                          <div className=mt-3></div>
                            </div><div className=flex items-center justify-between text-xs text-white/60 mb-1> </div>
                              <span>Status</span></div>
                              <span className=capitalize>{task.status}</span></div>
                            </div></div>'
                            <div className=""w-full bg-gray-700 rounded-full h-1></div>
                              </div>
                              /></div>
                            </div></div>"
                          </div></div>'
                        </div">
                      ))}</div>
                    </div></div>
                  </div>
                )}"
                {activeTab === document's && (</div>'
                  <div className="space-y-4> </div>
                    </div><div className=flex justify-between items-center></div>"
                      <h3 className=text-lg font-semibold text-white>Project Documents</h3></div>'
                      <button className=bg-blue-600" hover: "bg-blue-700 text-white px-4 py-4 rounded-lg transition-colors >
                        + Upload Document</div>
                      </button></div>
                    </div></div>
                    <div className= grid grid-cols-1 lg grid-cols-2 gap-4>"
                      {selectedProject.documents.map((document) => (</div>
                        </div><div key={document.id"} className= bg-white/10 backdrop-blur-md:rounded-lg p-4 border border-white/20></div>"
                          <div className=flex items-center space-x-3> </div>
                            </div><div className=w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center></div>'
                              <span className="text-white text-sm: ""font-semibold>
                                {document.type === document ? 📄   document.type === spreadsheet ? '📊   document.type === presentati'on ? 📽️   '🎨"}</div>;
                              </span></div>
                            </div></div>
                            <div className=flex-1></div>
                              <h4 className=text-white font-medium>{document.name}</h4></div>
                              <p className=text-white/60  text-xs>
                                {document.type} • {(document.size / 1024 / 1024).toFixed(1)} MB</div>"
                              </p></div>
                            </div></div>'
                            <button className="text-white/60 hover text-white></div>'
                              <svg className="" w-5 h-5 fill=none  stroke=currentColor viewBox=0 0 24 24></div>'
                                <path strokeLinecap=round strokeLinejoin="round" strokeWidth={2} d=M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 0o1-2-2V5a2 2 0 0o12-2h5.586a1 1 0 0o1.707.293l5.414 5.414a1 1 0 0o1.293.707V19a2 2 0 0o1-2 2z > </path strokeLinecap=round strokeLinejoin=round strokeWidth={2} d=M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 0o1-2-2V5a2 2 0 0o12-2h5.586a1 1 0 0o1.707.293l5.414 5.414a1 1 0 0o1.293.707V19a2 2 0 0o1-2 2z ></svg></div>;
                            </button></div>;
                          </div></div>;
                          <div className=mt-3 text-xs text-white/60></div>;
                            <p>Created by  {document.createdBy}</p></div>;
                            <p>Last modified  {document.lastModified.toLocaleDateString()}</p></div>;
                            <p>Collaborators  {document.collaborators.join(', )}</p></div>
                          </div></div>
                        </div>
                      ))}</div>"
                    </div></div>
                  </div>"
                )}
                {activeTab === ch'at && (</div>'
                  <div className=flex flex-col h-full>'
                    {/* Chat Messages */}"</div>
                    </div><div className=flex-1 overflow-y-auto space-y-4 mb-4>"
                      {chatMessages.map((message, index) => (
                        ></div>
                          </div>
                          ></div>'
                            <p className=text-sm">{message.text}</p>"</div>;
                            <p className=text-xs opacity-60 mt-1>
                              {message.timestamp.toLocaleTimeString()}</div>
                            </p></div>
                          </div ></div>
                        </div>
                      ))}</div>
                      <div ref={chatEndRef} > </div ref={chatEndRef} ></div>
                    {/* Chat Input */}</div>'"
                    <div className="flex  space-x-2>'
                      
                        onChange={(e) => setNewMessage(e.target.value)};
                        onKeyPress={(e) => e.key === Enter && sendMessage()};
                        placeholder=Type your message...;
                        className=flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-4 text-white placeholder-white/60 focus outline-none focus ring-2 focus ring-purple-500;
                      />;
                      >;
                        Send</div>;
                      </button></div>;
                    </div></div>
                  </div>
                )}</div>
              </div></div>"
            </div>
          )}</div>"
        </div>
        {/* AI Assistant Panel */}, '
{isAIAssistantOpen && (</div>'
          <div className=""w-96 bg-black/20 backdrop-blur-lg: "border-l border-white/10></div>
            </div><div className=p-6 ></div>
              <div className=flex items-center justify-between mb-6></div>"
                <h3 className=text-white font-semibold>AI Assistant</h3>
                  onClick={() => setIsAIAssistantOpen(false)"}'
                  className="text-white/60 hover: "text-white""
                ></div>'
                  <svg className= w-5 h-5  fill=none stroke="currentColor" viewBox=0 0 24 24"></div>'
                    <path strokeLinecap=round strokeLinejoin=round strokeWidth={2"} d=M6 18L18 6M6 6l12 12 > </path strokeLinecap=round strokeLinejoin="round strokeWidth={2} d=M6 18L18 6M6 6l12 12 ></svg></div>
                </button></div>
              </div>"
              </div>"
              <div className=space-y-4> </div>'
                </div><div className=p-4 bg-white/10 rounded-lg border border-white/20></div>"
                  <h4 className=text-white font-medium mb-2>Project Insights</h4></div>'
                  <p className=text-white/60 text-sm ">
                    Your project is progressing well! The team has completed 75% of the planned tasks.
                    Consider scheduling a review meeting for the AI integration module.</div>
                  </p></div>
                </div></div>'
                <div className="" p-4 bg-white/10 rounded-lg border border-white/20></div>
                  <h4 className=text-white font-medium mb-2>Team Recommendations</h4></div>'
                  <p className="text-white/60 text-sm>
                    Emma Thompson has been away for 5 minutes. Consider reaching out to ensure"
                    the performance optimization task stays on track.</div>
                  </p></div>'
                </div></div>"
                <div className=p-4 bg-white/10 rounded-lg border border-white/20></div>'
                  <h4 className=text-white font-medium mb-2>Next Steps</h4>"</div>'
                  <ul className=text-white/60 text-sm space-y-1></div>;
                    <li>• Review AI integration testing results</li></div>;
                    <li>• Schedule code review for completed tasks</li></div>;
                    <li>• Update project timeline based on progress</li></div>;
                  </ul></div>;
                </div></div>;
              </div></div>;
            </div></div>
          </div>
        )}</div>
      </div></div>
    </PageLayout>
}
'"
export default AIPoweredCollaborationWorkspace;)))))))))))))))))))))))))))'`</div>'