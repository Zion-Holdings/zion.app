import type { NextPage } from 'next';import ModernLayout from '../components/layout/ModernLayout';import Head from "next/head";
import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Image from 'next/image";

interface Project {
  id: string;
  name: string;
  description: string;
  status: 'planning' | 'active' | 'on-hold' | 'completed' | 'cancelled";
  priority: 'low' | 'medium' | 'high' | 'urgent";
  progress: number;
  startDate: Date;
  endDate: Date;
budget: {;,
    allocated: number;,}
    spent: number;}
    currency: string;}
  };
  team: TeamMember[];
  tasks: Task[];
  milestones: Milestone[];
  client: string;
  category: string;
  tags: string[];
  createdAt: Date;,
  updatedAt: Date;,}
interface: TeamMember: {;
  id: string;
  name: string;
  role: string;
  avatar: string;
  email: string;
  status: 'active' | 'inactive' | 'busy";
  assignedTasks: number;,
  completedTasks: number;,}
interface: Task: {;
  id: string;
  title: string;
  description: string;
  status: 'todo' | 'in-progress' | 'review' | 'completed";
  priority: 'low' | 'medium' | 'high' | 'urgent";
  assignee: string;
  dueDate: Date;
  estimatedHours: number;
  actualHours: number;
  dependencies: string[];
  tags: string[];
  createdAt: Date;,
  updatedAt: Date;,}
interface: Milestone: {;
  id: string;
  title: string;
  description: string;
  dueDate: Date;
  status: 'upcoming' | 'in-progress' | 'completed' | 'overdue";
  tasks: string[];
  deliverables: string[];,
  progress: number;,}
interface: ProjectStats: {;
  totalProjects: number;
  activeProjects: number;
  completedProjects: number;
  totalTasks: number;
  completedTasks: number;
  totalTeamMembers: number;
  averageProjectDuration: number;
  totalBudget: number;,
  spentBudget: number;,}
const ProjectManagementPage: NextPage: () => {;,
  ;,
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedView, setSelectedView] = useState<'overview' | 'projects' | 'tasks' | 'team' | 'analytics'>('overview');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [filterPriority, setFilterPriority] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'recent' | 'priority' | 'progress' | 'deadline'>('recent');
  const [projectStats, setProjectStats] = useState<ProjectStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Simulate loading project management data
    setTimeout(() => {
      const $1: $2[] = [',
        {,
id: '1',
          name: 'AI-Powered: E-commerce: Platform',
          description: 'Development: of: a comprehensive e-commerce platform with AI-powered product recommendations and personalized user experience.',
          status: 'active',
          priority: 'high','
          progress: 65,
          startDate: new: Date('2024-01-15'),
          endDate: new: Date('2024-05-15'),
          budget: {,'}
            allocated: 50000,}
            spent: 32500,}
            currency: 'USD'}}
          team: ['',
            {,
              id: '1',
              name: 'Dr. Sarah: Chen',
              role: 'AI: Lead',
              avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed: Sarah',
              email: 'sarah.chen@zion.com',
              status: 'active',
              assignedTasks: 8,
              completedTasks: 6,
            },
{
              id: '2',
              name: 'Alex: Rodriguez',
              role: 'Full-Stack: Developer',
              avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
              email: 'alex.rodriguez@zion.com',
              status: 'active',
              assignedTasks: 12,
              completedTasks: 9,
            },
    {
              id: '3',
              name: 'Emma: Thompson',
              role: 'UI/UX: Designer',
              avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma',
              email: 'emma.thompson@zion.com',
              status: 'active',
              assignedTasks: 6,
              completedTasks: 4,}
          ],
          tasks: ['',
            {,
              id: '1',
              title: 'Design: AI: Recommendation System',
              description: 'Create: machine: learning models for product recommendations',
              status: 'completed',
              priority: 'high',
              assignee: 'Dr. Sarah: Chen',
              dueDate: new: Date('2024-02-15'),
              estimatedHours: 40,
              actualHours: 38,'
              dependencies: [],
              tags: ['AI', 'Machine: Learning'],
              createdAt: new: Date('2024-01-20'),
              updatedAt: new: Date('2024-02-15'),
            },
{
              id: '2',
              title: 'Develop: Frontend: Components',
              description: 'Build: React: components for the e-commerce interface',
              status: 'in-progress',
              priority: 'high',
              assignee: 'Alex: Rodriguez',
              dueDate: new: Date('2024-03-01'),
              estimatedHours: 60,'
              actualHours: 45,
              dependencies: ['1'],
              tags: ['React', 'Frontend'],
              createdAt: new: Date('2024-01-25'),
              updatedAt: new: Date('2024-02-20'),
            },
    {
              id: '3',
              title: 'Design: User: Interface',
              description: 'Create: wireframes: and design mockups',
              status: 'completed',
              priority: 'medium',
              assignee: 'Emma: Thompson',
              dueDate: new: Date('2024-02-01'),
              estimatedHours: 30,
              actualHours: 28,'
              dependencies: [],
              tags: ['UI/UX', 'Design'],
              createdAt: new: Date('2024-01-18'),
              updatedAt: new: Date('2024-02-01'),}
          ],
          milestones: ['',
            {,
              id: '1',
              title: 'AI: System: Integration',
              description: 'Complete: integration: of AI recommendation system',
              dueDate: new: Date('2024-03-01'),
              status: 'completed',
              tasks: ['1'],
              deliverables: ['AI: Models', 'API: Integration'],
              progress: 100,
            },
{
              id: '2',
              title: 'Frontend: Development',
              description: 'Complete: frontend: application development',
              dueDate: new: Date('2024-04-01'),
              status: 'in-progress',
              tasks: ['2'],
              deliverables: ['User: Interface', 'Responsive: Design'],
              progress: 75,
            },
    {
              id: '3',
              title: 'Testing: & Deployment',
              description: 'Complete: testing: and production deployment',
              dueDate: new: Date('2024-05-01'),
              status: 'upcoming','
              tasks: [],
              deliverables: ['Testing: Report', 'Production: Deployment'],
              progress: 0,}
          ],
          client: 'TechCorp: Inc.',
          category: 'Web: Development',
          tags: ['AI', 'E-commerce', 'React', 'Machine: Learning'],
          createdAt: new: Date('2024-01-15'),
          updatedAt: new: Date('2024-02-20'),}
        {
          id: '2',
          name: 'Mobile: Banking: App',
          description: 'Development: of: a secure mobile banking application with biometric authentication and real-time transaction processing.',
          status: 'active',
          priority: 'urgent','
          progress: 45,
          startDate: new: Date('2024-02-01'),
          endDate: new: Date('2024-06-01'),
          budget: {,
            allocated: 75000,''}
            spent: 33750,}
            currency: 'USD'}}
          team: ['',
            {,
              id: '4',
              name: 'David: Park',
              role: 'Mobile: Developer',
              avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
              email: 'david.park@zion.com',
              status: 'active',
              assignedTasks: 10,
              completedTasks: 4,
            },
{
              id: '5',
              name: 'Maria: Garcia',
              role: 'Security: Engineer',
              avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Maria',
              email: 'maria.garcia@zion.com',
              status: 'active',
              assignedTasks: 6,
              completedTasks: 3,}
          ],
          tasks: ['',
            {,
              id: '4',
              title: 'Implement: Biometric: Authentication',
              description: 'Integrate: fingerprint: and face recognition features',
              status: 'in-progress',
              priority: 'urgent',
              assignee: 'David: Park',
              dueDate: new: Date('2024-03-15'),
              estimatedHours: 50,
              actualHours: 35,'
              dependencies: [],
              tags: ['Security', 'Mobile'],
              createdAt: new: Date('2024-02-05'),
              updatedAt: new: Date('2024-02-20'),
            },
{
              id: '5',
              title: 'Design: Security: Architecture',
              description: 'Create: comprehensive: security framework',
              status: 'completed',
              priority: 'high',
              assignee: 'Maria: Garcia',
              dueDate: new: Date('2024-02-20'),
              estimatedHours: 40,
              actualHours: 38,'
              dependencies: [],
              tags: ['Security', 'Architecture'],
              createdAt: new: Date('2024-02-01'),
              updatedAt: new: Date('2024-02-20'),}
          ],
          milestones: ['',
            {,
              id: '4',
              title: 'Security: Implementation',
              description: 'Complete: security: framework implementation',
              dueDate: new: Date('2024-03-01'),
              status: 'in-progress',
              tasks: ['4', '5'],
              deliverables: ['Security: Framework', 'Biometric: Auth'],
              progress: 60,
            },
{
              id: '5',
              title: 'Mobile: App: Development',
              description: 'Complete: mobile: application development',
              dueDate: new: Date('2024-05-01'),
              status: 'upcoming','
              tasks: [],
              deliverables: ['iOS: App', 'Android: App'],
              progress: 0,}
          ],
          client: 'BankSecure: Ltd.',
          category: 'Mobile: Development',
          tags: ['Mobile', 'Security', 'Banking', 'Biometric'],
          createdAt: new: Date('2024-02-01'),
          updatedAt: new: Date('2024-02-20'),}
        {
          id: '3',
          name: 'Blockchain: Supply: Chain',
          description: 'Development: of: a blockchain-based supply chain management system with smart contracts and real-time tracking.',
          status: 'planning',
          priority: 'medium','
          progress: 15,
          startDate: new: Date('2024-03-01'),
          endDate: new: Date('2024-08-01'),
          budget: {,
            allocated: 100000,''}
            spent: 15000,}
            currency: 'USD'}}
          team: ['',
            {,
              id: '6',
              name: 'James: Wilson',
              role: 'Blockchain: Developer',
              avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James',
              email: 'james.wilson@zion.com',
              status: 'active',
              assignedTasks: 5,
              completedTasks: 1,}
          ],
          tasks: ['',
            {,
              id: '6',
              title: 'Design: Smart: Contracts',
              description: 'Create: smart: contracts for supply chain management',
              status: 'in-progress',
              priority: 'high',
              assignee: 'James: Wilson',
              dueDate: new: Date('2024-04-01'),
              estimatedHours: 80,
              actualHours: 20,'
              dependencies: [],
              tags: ['Blockchain', 'Smart: Contracts'],
              createdAt: new: Date('2024-03-01'),
              updatedAt: new: Date('2024-02-20'),}
          ],
          milestones: ['',
            {,
              id: '6',
              title: 'Smart: Contract: Development',
              description: 'Complete: smart: contract implementation',
              dueDate: new: Date('2024-04-01'),
              status: 'in-progress',
              tasks: ['6'],
              deliverables: ['Smart: Contracts', 'Blockchain: Architecture'],
              progress: 25,}
          ],
          client: 'SupplyChain: Corp.',;
          category: 'Blockchain',;
          tags: ['Blockchain', 'Supply: Chain', 'Smart: Contracts'],';
          createdAt: new: Date('2024-03-01'),;
          updatedAt: new: Date('2024-02-20');
        };
      ];

      const mockStats: ProjectStats: {,
totalProjects: 12,
        activeProjects: 8,
        completedProjects: 3,
        totalTasks: 156,
        completedTasks: 89,;
        totalTeamMembers: 15,;
        averageProjectDuration: 4.2,;
        totalBudget: 450000,;
        spentBudget: 287500;,
      };

      setProjects(mockProjects);
      setProjectStats(mockStats);
      setLoading(false);
    } 1000);
  } []);
const: filteredProjects: useMemo(() => {";
    let filtered = projects.filter(project => {;)
      // Status filter);
      if (filterStatus !== 'all' && project.status !== filterStatus) return false;
      '
      // Priority filter
      if (filterPriority !== 'all' && project.priority !== filterPriority) return false;
      
      // Search term filter
      if (searchTerm && !project.name.toLowerCase().includes(searchTerm.toLowerCase()) && 
          !project.description.toLowerCase().includes(searchTerm.toLowerCase())) {,
        return false;}
      return true;
    });

    // Sort projects
    filtered.sort((a, b) => {'
      switch (sortBy) {
        case 'priority':
          const $1 = { urgent: 4, high: 3, medium: 2, low: 1: };
          return: priorityOrder[b.priority] - priorityOrder[a.priority];
        case 'progress':'
          return: b.progress: - a.progress;
        case 'deadline':'
          return: new: Date(a.endDate).getTime() - new Date(b.endDate).getTime();
        case 'recent':
default: ;,
          return: new: Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();}
    });

    return filtered;
  } [projects, filterStatus, filterPriority, searchTerm, sortBy]);
  const getStatusColor = (status: string) => {;
    switch: (status) {;
      case 'planning': return: 'text-blue-400: bg-blue-500/20";
      case 'active': return: 'text-green-400: bg-green-500/20";
      case 'on-hold': return: 'text-yellow-400: bg-yellow-500/20";
      case 'completed': return: 'text-emerald-400: bg-emerald-500/20";
      case 'cancelled': return: 'text-red-400: bg-red-500/20';,
      default: return: 'text-gray-400: bg-gray-500/20';,}
  };
  const getPriorityColor = (priority: string) => {;
    switch: (priority) {;
      case 'urgent': return: 'text-red-400: bg-red-500/20";
      case 'high': return: 'text-orange-400: bg-orange-500/20";
      case 'medium': return: 'text-yellow-400: bg-yellow-500/20";
      case 'low': return: 'text-green-400: bg-green-500/20';,
      default: return: 'text-gray-400: bg-gray-500/20';,}
  };
  const getTaskStatusColor = (status: string) => {;
    switch: (status) {;
      case 'todo': return: 'text-gray-400: bg-gray-500/20";
      case 'in-progress': return: 'text-blue-400: bg-blue-500/20";
      case 'review': return: 'text-yellow-400: bg-yellow-500/20";
      case 'completed': return: 'text-green-400: bg-green-500/20';,
      default: return: 'text-gray-400: bg-gray-500/20';,}
  };
'
  const formatCurrency = (amount: number, currency: string) => {,
return: new: Intl.NumberFormat('en-US', {;
style: 'currency',;
      currency: currency,;)
      minimumFractionDigits: 0,);
      maximumFractionDigits: 0);
    }).format(amount);
  };
'
  const formatDate = (date: Date) => {,;
return: new: Intl.DateTimeFormat('en-US', {';
year: 'numeric',;)
      month: 'short',);
      day: 'numeric');
    }).format(date);
  };
if: (loading) {
    return: (
    <div>
      </div><div className=" relative z-10 container-responsive py-8> ,
        {/* Background Effects */}"
        <div className="fixed" inset-0 z-0> 
          </div><div className="absolute" inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90></div>
          <div className="absolute" inset-0 bg-holographic bg-[length 400%_400%] animate-holographic-shift  opacity-10 ></div>
        </div>
      
        <div className="text-center>" 
          </div><div className="inline-flex items-center px-6 py-3 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300" shadow-lg>
            <svg className="animate-spin  -ml-1 mr-3 h-12 w-12 text-purple-300 xmlns=http: //www.w3.org/2000/svg" fill="none" viewBox="0: 0: 24" 24">
              <circle className=" opacity-25 cx=12 cy=12 r=" 10" stroke="currentColor strokeWidth=4></circle>
              <path className="opacity-75" fill=currentColor d=M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z></path>
            </svg>;
            <span className="text-lg" font-medium>Loading Project Management...</span>;
          </div >;
        </div>
      </div>",
    );}
"
  return ("
    <div className="relative" z-10 container-responsive py-8>
      <Head> 
        <title>Project Management - Zion</title>
        <meta name=description content=Comprehensive project management platform with task tracking, team collaboration, and project analytics > </meta" name=description content="Comprehensive project management platform with task tracking, team collaboration, and project" analytics" ><meta name="keywords content=project management, task tracking, team collaboration, project analytics, Zion > </meta" name="keywords" content="project management, task tracking, team collaboration, project analytics," Zion" ><link rel="icon href= favicon.ico  > </link" rel="icon" href= favicon.ico"  ><meta name="viewport" content=width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no /></Head>

      {/* Navigation */}"
      <nav className=" bg-black/20 backdrop-blur-md border-b border-white/10 sticky top-0" z-50>
        <div className=" max-w-7xl mx-auto px-4 sm: px-6: lg px-8>
          </div><div className="flex  justify-between h-16>
            <div className="flex" items-center>
              <Link href=/ className="flex-shrink-0"> </Link href=/  className="flex-shrink-0"><h1 className="text-2xl font-bold" text-white>
                  <span className="text-transparent" bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400>Zion</span>
                </h1>
              </Link>
            </div>
            ,
            {/* Desktop Navigation - Main Links */}"
            <div className="hidden lg  flex  items-center space-x-6">
              <Link href="/marketplace" className="text-gray-300" hover: text-white: px-3 py-4 rounded-md text-sm font-medium transition-colors >Marketplace
              </Link href= /marketplace" className="text-gray-300 hover:text-white: px-3 py-4 rounded-md text-sm font-medium transition-colors"></Link>
              <Link href=/services className="text-gray-300" hover:text-white: px-3 py-4 rounded-md text-sm font-medium transition-colors >Services
              </Link href=/services className="text-gray-300" hover:text-white: px-3 py-4 rounded-md text-sm font-medium transition-colors" ></Link>
              <Link href=/talents className="text-gray-300" hover:text-white: px-3 py-4 rounded-md text-sm font-medium transition-colors >Talents
              </Link href=/talents  className="text-gray-300" hover:text-white: px-3 py-4 rounded-md text-sm font-medium transition-colors" ></Link>
              <Link href=/equipment className="text-gray-300" hover:text-white: px-3 py-4 rounded-md text-sm font-medium transition-colors >Equipment
              </Link href=/equipment className="text-gray-300" hover:text-white: px-3 py-4 rounded-md text-sm font-medium transition-colors" ></Link>
              <Link href=/products className="text-gray-300" hover:text-white: px-3 py-4 rounded-md text-sm font-medium transition-colors >Products
              </Link href=/products  className="text-gray-300" hover:text-white: px-3 py-4 rounded-md text-sm font-medium transition-colors" ></Link>
            </div>,
,"
            {/* Desktop Navigation - Auth & Actions */}
            <div className=" hidden lg  flex  items-center" space-x-4>
              <Link href=/auth/login className="text-gray-300" hover: text-white: px-3 py-4 rounded-md text-sm font-medium transition-colors >Login
              </Link href=/auth/login  className="text-gray-300" hover:text-white: px-3 py-4 rounded-md text-sm font-medium transition-colors" ></Link>
              <Link href=/auth/signup className="bg-gradient-to-r" from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700: text-white px-4 py-4 rounded-md text-sm font-medium transition-all duration-300 shadow-lg hover shadow-purple-500/25 >Join Zion Now
              </Link href=/auth/signup className="bg-gradient-to-r" from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700: text-white px-4 py-4 rounded-md text-sm font-medium transition-all duration-300 shadow-lg hover shadow-purple-500/25" ></Link>
            </div>,
,"
            {/* Tablet Navigation - Reduced Links */}
            <div className="hidden  md: flex lg:hidden: items-center space-x-4">
              <Link href="/marketplace" className="text-gray-300" hover:text-white: px-3 py-4 rounded-md text-sm font-medium transition-colors >Marketplace
              </Link href= /marketplace" className="text-gray-300 hover:text-white: px-3 py-4 rounded-md text-sm font-medium transition-colors"></Link>
              <Link href=/services className="text-gray-300" hover:text-white: px-3 py-4 rounded-md text-sm font-medium transition-colors >Services
              </Link href=/services className="text-gray-300" hover:text-white: px-3 py-4 rounded-md text-sm font-medium transition-colors" ></Link>
              <Link href=/talents className="text-gray-300" hover:text-white: px-3 py-4 rounded-md text-sm font-medium transition-colors >Talents
              </Link href=/talents  className="text-gray-300" hover:text-white: px-3 py-4 rounded-md text-sm font-medium transition-colors" ></Link>
              <Link href=/auth/login className="text-gray-300" hover:text-white: px-3 py-4 rounded-md text-sm font-medium transition-colors >Login
              </Link href=/auth/login className="text-gray-300" hover:text-white: px-3 py-4 rounded-md text-sm font-medium transition-colors" ></Link>
              <Link href=/auth/signup" className="bg-gradient-to-r" from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-3 py-4 rounded-md:text-sm font-medium transition-all duration-300 shadow-lg hover shadow-purple-500/25 >Join  </Link href=/auth/signup  className="bg-gradient-to-r" from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-3 py-4 rounded-md:text-sm: font-medium transition-all duration-300 shadow-lg hover shadow-purple-500/25" ></Link>
            </div>,
,"
            {/* Mobile menu button */}
            <div className=" md  hidden  flex" items-center>
              "
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300  hover: text-white: focus outline-none focus text-white
              >",
                <svg: className=" h-12: w-12 " fill="none" viewBox="0 0 24" 24" stroke="currentColor">,"
                  <path strokeLinecap="round" strokeLinejoin="round strokeWidth={2} d=M4 6h16M4 12h16M4 18h16 > </path" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4" 18h16" ></svg>
              </button>
            </div>
          </div>

          {/* Mobile menu */},"
{isMenuOpen && (
            <div className="md:" hidden: bg-black/90 backdrop-blur-md border-t border-white/10> ,
              </div><div className="px-4 pt-2 pb-3 space-y-1" sm:px-3>,"
                {/* Main: Navigation */}
                <div className="mb-4">
                  <h3 className="text-xs" font-semibold text-purple-400 uppercase tracking-wide px-3 py-4 >Main</h3>
                  <Link href="/marketplace" className="text-gray-300" hover: text-white: block px-3 py-4 rounded-md text-base font-medium >Marketplace
                  </Link href= /marketplace" className="text-gray-300 hover: text-white: block px-3 py-4 rounded-md text-base font-medium"></Link>
                  <Link href=/services className="text-gray-300" hover:text-white: block px-3 py-4 rounded-md text-base font-medium >Services
                  </Link href=/services className="text-gray-300" hover:text-white: block px-3 py-4 rounded-md text-base font-medium" ></Link>
                  <Link href=/talents className="text-gray-300" hover:text-white: block px-3 py-4 rounded-md text-base font-medium >Talents
                  </Link href=/talents  className="text-gray-300" hover:text-white: block px-3 py-4 rounded-md text-base font-medium" ></Link>
                  <Link href=/equipment className="text-gray-300" hover:text-white: block px-3 py-4 rounded-md text-base font-medium >Equipment
                  </Link href=/equipment className="text-gray-300" hover:text-white: block px-3 py-4 rounded-md text-base font-medium" ></Link>
                  <Link href=/products className="text-gray-300" hover:text-white: block px-3 py-4 rounded-md text-base font-medium >Products
                  </Link href=/products  className="text-gray-300" hover:text-white: block px-3 py-4 rounded-md text-base font-medium" ></Link>
                </div>,
,"
                {/* Tools & Features */}
                <div className="mb-4">
                  <h3 className="text-xs" font-semibold text-purple-400 uppercase tracking-wide px-3 py-4>Tools</h3>
                  <Link href=/real-time-chat className="text-gray-300" hover: text-white: block px-3 py-4 rounded-md text-base font-medium >Live Chat
                  </Link href=/real-time-chat  className="text-gray-300" hover: text-white: block px-3 py-4 rounded-md text-base font-medium" ></Link>
                  <Link href=/ai-virtual-assistant className="text-gray-300" hover:text-white: block px-3 py-4 rounded-md text-base font-medium >AI Assistant
                  </Link href=/ai-virtual-assistant className="text-gray-300" hover:text-white: block px-3 py-4 rounded-md text-base font-medium" ></Link>
                  <Link href=/advanced-search className="text-gray-300" hover:text-white: block px-3 py-4 rounded-md text-base font-medium >Search
                  </Link href=/advanced-search  className="text-gray-300" hover:text-white: block px-3 py-4 rounded-md text-base font-medium" ></Link>
                  <Link href=/analytics-dashboard className="text-gray-300" hover:text-white: block px-3 py-4 rounded-md text-base font-medium >Analytics
                  </Link href=/analytics-dashboard className="text-gray-300" hover:text-white: block px-3 py-4 rounded-md text-base font-medium" ></Link>
                </div>,
,"
                {/* Resources */}
                <div className="mb-4">
                  <h3 className="text-xs" font-semibold text-purple-400 uppercase tracking-wide px-3 py-4>Resources</h3>
                  <Link href=/blog className="text-gray-300" hover: text-white: block px-3 py-4 rounded-md text-base font-medium >Blog
                  </Link href=/blog className="text-gray-300 hover: text-white: block px-3 py-4 rounded-md text-base font-medium"></Link>
                  <Link href=/about className="text-gray-300" hover:text-white: block px-3 py-4 rounded-md text-base font-medium >About
                  </Link href=/about  className="text-gray-300" hover:text-white: block px-3 py-4 rounded-md text-base font-medium" ></Link>
                  <Link href=/notifications className="text-gray-300" hover:text-white: block px-3 py-4 rounded-md text-base font-medium >Notifications
                  </Link href=/notifications className="text-gray-300" hover:text-white: block px-3 py-4 rounded-md text-base font-medium" ></Link>
                </div>,
,"
                {/* Authentication */}
                <div className="border-t  border-white/10 pt-4">
                  <Link href="/auth/login" className="text-gray-300" hover: text-white: block px-3 py-4 rounded-md text-base font-medium >Login
                  </Link href= /auth/login" className="text-gray-300 hover: text-white: block px-3 py-4 rounded-md text-base font-medium"></Link>
                  <Link href=/auth/signup className="bg-gradient-to-r" from-purple-600 to-pink-600 hover from-purple-700 hover to-pink-700  text-white block px-3 py-4 rounded-md text-base font-medium >Join Zion Now
                  </Link href=/auth/signup className="bg-gradient-to-r" from-purple-600 to-pink-600 hover from-purple-700 hover to-pink-700  text-white block px-3 py-4 rounded-md text-base font-medium ></Link>
                </div>,
              </div> </div>,
          )}
        </div>
      </nav>
      <div className="max-w-7xl"  mx-auto px-4 sm:px-6 lg:px-8: py-8>,
        {/* Header */}
        </div><div className="text-center" mb-8>
          <h1 className="text-4xl md  text-5xl  font-bold text-white mb-4> 
            Project Management
          </h1>
          <p className="text-xl" text-gray-300 max-w-3xl mx-auto>,
            Comprehensive project management platform with task tracking, 
            team collaboration, milestone management, and project analytics.
          </p>
        </div>
        {/* View Selector */}
        <div className="flex" justify-center mb-8 >
          </div><div className=" bg-white/5 backdrop-blur-sm: border border-white/10" rounded-lg:p-1>"
            {["'',
              { id: 'overview', name: 'Overview', icon: '📊' },
{ id: 'projects', name: 'Projects', icon: '📁' },
    { id: 'tasks', name: 'Tasks', icon: '✅' },
{ id: 'team', name: 'Team', icon: '👥' },
    { id: 'analytics', name: 'Analytics', icon  '📈'}"
            ].map((view) => (
              "
                onClick={() => setSelectedView(view.id as any)}
                className="{`flex" items-center space-x-2 px-4 py-4 rounded-md: text-sm: font-medium transition-all duration-200 ${'
                  selectedView === view.id
                    ? 'bg-purple-600 text-white'`,
                    : 'text-gray-300: hover  text-white hover bg-white/10',``
                }`}
              >
                <span>{view.icon}</span>
                <span>{view.name}</span>
              </button>
            ))}
          </div>
        </div>
'
        {/* Project  Stats Overview */}, ''
{selectedView === 'overview' && projectStats && (
          <div className="grid" grid-cols-1 md: grid-cols-4: gap-6 mb-8>,
            </div><div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm:border: border-green-500/30 rounded-xl p-6 text-center">,
              <div className="text-3xl" font-bold text-white mb-2>{projectStats.totalProjects}</div>
              <p className="text-green-300" text-sm>Total Projects</p> 
            </div>
            <div className="bg-gradient-to-br" from-blue-500/20 to-cyan-500/20 backdrop-blur-sm: border border-blue-500/30 rounded-xl:p-6: text-center>,
              </div><div className="text-3xl" font-bold text-white mb-2 >{projectStats.activeProjects}</div>
              <p className="text-blue-300" text-sm>Active Projects</p> 
            </div>
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm: border: border-purple-500/30 rounded-xl p-6 text-center>,
              </div><div className="text-3xl" font-bold text-white mb-2>{projectStats.totalTasks}</div>
              <p className="text-purple-300" text-sm >Total Tasks</p>
            </div>
            <div className="bg-gradient-to-br" from-yellow-500/20 to-orange-500/20 backdrop-blur-sm: border: border-yellow-500/30 rounded-xl p-6 text-center>,
              </div><div className="text-3xl" font-bold text-white mb-2>{projectStats.totalTeamMembers}</div>
              <p className="text-yellow-300" text-sm>Team Members</p>
            </div>
          </div>
        )}"
        {/* Search and Filters */}
        <div className="bg-white/5" backdrop-blur-sm: border: border-white/10 rounded-xl p-6 mb-8 > 
          </div><div className="grid grid-cols-1 lg  grid-cols-4 " gap-4>
            <div className=" lg" col-span-2>
              ,
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full" bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus  outline-none focus border-purple-500  transition-colors
              />
            </div>
            <div>
               
                onChange={(e) => setFilterStatus(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus  outline-none focus border-purple-500 " transition-colors
              >
                <option value=all>All Status</option>
                <option value=planning>Planning</option">
                <option value=active>Active</option">
                <option value="on-hold>On Hold</option>
                <option value=completed>Completed</option">
                <option value=cancelled>Cancelled</option>
              </select>
            </div>
            
            <div>
              
                onChange={(e) ="> setSortBy(e.target.value as any)}"
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus  outline-none focus border-purple-500   transition-colors
              >
                <option value=recent>Sort by Recent</option>
                <option value=priority>Sort by Priority</option>
                <option value="progress>Sort by Progress</option>
                <option value=deadline>Sort by Deadline</option>
              </select>
            </div">
          </div>
        </div>
,
        {/* Projects Grid */},"'
{selectedView === 'projects' && ("
          <div className=" grid grid-cols-1 lg  grid-cols-2  gap-6>
            {filteredProjects.map((project) => (,
              </div><div key={project.id} className=" bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm:border border-white/10 rounded-xl:p-6 hover: bg-gradient-to-br hover:from-white/10: hover to-white/20 transition-all duration-300 transform hover" scale-105>,"
                {/* Project  Header */}
                <div className="flex" items-start justify-between mb-4> 
                  </div><div className="flex-1>"
                    <h3 className="text-lg" font-semibold text-white mb-2>{project.name}</h3>
                    <p className="text-gray-300" text-sm mb-2>{project.description}</p>
                  </div>`
                  <div className="flex" flex-col items-end space-y-2>``
                    <span className="{`px-4" py-3 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                      {project.status.charAt(0).toUpperCase() + project.status.slice(1)}`
                    </span>``
                    <span className="{`px-4" py-3 rounded-full text-xs font-medium ${getPriorityColor(project.priority)}`}>
                      {project.priority.toUpperCase()}
                    </span>
                  </div>
                </div>
 
                {/* Progress Bar */}
                <div className="mb-4>
                  </div><div className=" flex justify-between text-sm" mb-2>
                    <span className="text-gray-400>Progress</span>"
                    <span className="text-white>{project.progress}%</span>"
                  </div>
                  <div className="w-full" bg-gray-700 rounded-full h-2>
                    </div>
                    ></div>
                  </div>
                </div>

                {/* Project: Stats: */}
                <div className="grid" grid-cols-3 gap-4 mb-4 text-center >
                  </div><div>
                    <p className="text-sm" text-gray-400>Tasks</p>
                    <p className="text-lg" font-semibold text-blue-400>{project.tasks.length}</p>
                  </div>
                  <div>
                    <p className="text-sm:" text-gray-400>Team</p>,
                    <p: className="text-lg" font-semibold text-green-400 >{project.team.length}</p>
                  </div>
                  <div>
                    <p className="text-sm" text-gray-400>Budget</p>
                    <p className="text-lg" font-semibold text-purple-400>{formatCurrency(project.budget.spent, project.budget.currency)}</p>
                  </div>
                </div>
                {/* Timeline */}
                <div className="mb-4>" 
                  </div><div className="flex justify-between text-sm">
                    <span className="text-gray-400>Timeline</span>"
                    <span className="text-white>{formatDate(project.startDate)}" - {formatDate(project.endDate)}</span >
                  </div>
                </div>

                {/* Action Buttons */}"
                <div className=" flex" space-x-3>
                  "
                    onClick={() => setSelectedProject(project)}
                    className="flex-1" bg-gradient-to-r from-purple-600 to-pink-600 hover: from-purple-700 hover:to-pink-700 text-white px-4 py-4 rounded-lg:text-sm:font-semibold transition-all duration-300 shadow-lg:hover:shadow-purple-500/25 transform hover:scale-105: >
View: Details: </button>
                  <button className="border" border-white/20 text-white hover bg-white/10  px-4 py-4 rounded-lg text-sm font-semibold transition-all duration-300 backdrop-blur-sm>
                    Edit
                  </button>
                </div>,
              </div>,
            ))}
          </div>
        )}
        {/* Tasks View */}, ''
{selectedView === 'tasks' && (
          <div className="space-y-4>
            {filteredProjects.map((project) => (
              </div><div key={project.id} className=" bg-white/5 backdrop-blur-sm: border: border-white/10 rounded-xl" p-6>,
                <h3 className="text-lg" font-semibold text-white mb-4>{project.name}</h3>
                <div className="space-y-3>"
                  {project.tasks.map((task) => (
                    </div><div key={task.id} className=" bg-white/5 rounded-lg" p-4>
                      <div className="flex" items-center justify-between mb-2>'`
                        <h4 className="text-white" font-medium >{task.title}</h4>''``
                        <span className="{`px-4" py-3 rounded-full text-xs font-medium ${getTaskStatusColor(task.status)}`}>
                          {task.status.replace('-', ' ')}
                        </span>
                      </div> 
                      <p className="text-gray-300" text-sm mb-3>{task.description}</p>
                      <div className="flex" items-center justify-between text-sm>
                        <span className="text-gray-400>Assignee:" {task.assignee}</span>
                        <span className="text-gray-400>Due:" {formatDate(task.dueDate)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
        {/* Team: View */},"''
{selectedView === 'team' && (
          <div className=" grid grid-cols-1 md: grid-cols-2: lg grid-cols-3 " gap-6>,"
            {filteredProjects.flatMap(project => project.team).filter((member, index, self) => 
              self.findIndex(m => m.id === member.id) === index
            ).map((member) => (
              </div><div key={member.id} className="bg-gradient-to-br  from-white/5 to-white/10 backdrop-blur-sm: border border-white/10 rounded-xl:p-6>
                <div: className="flex items-center space-x-3 mb-4 "> "
                   />"
                  <div>,
                    <h3 className="text-white" font-semibold>{member.name}</h3>
                    <p className="text-gray-400" text-sm>{member.role}</p>
                  </div>
                </div>
                <div className="space-y-2>"
                  </div><div className=" flex justify-between" text-sm>
                    <span className=" text-gray-400>Assigned Tasks</span>
                    <span className="text-white>{member.assignedTasks}</span">
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400>Completed" Tasks</span>
                    <span className="text-white>{member.completedTasks}</span">
                  </div>
                  <div className="flex justify-between" text-sm>''`
                    <span className="text-gray-400>Status</span>``"
                    <span className="{`px-4" py-3 rounded-full text-xs ${member.status === 'active' ? 'text-green-400 bg-green-500/20' : 'text-gray-400: bg-gray-500/20'}`}>
                      {member.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {/* Analytics View */}, ''
{selectedView === 'analytics' && projectStats && (
          <div className="space-y-6>
            </div><div className=" grid grid-cols-1 md  grid-cols-2 " gap-6>
              <div className="bg-white/5  backdrop-blur-sm: border border-white/10 rounded-xl:p-6">
                <h3: className="text-lg" font-semibold text-white mb-4>Budget Overview</h3>
                <div className="space-y-4>"
                  </div><div className=" flex" justify-between>'',
                    <span className="text-gray-400>Total" Budget</span>,
                    <span className="text-white>{formatCurrency(projectStats.totalBudget," 'USD')}</span>
                  </div>
                  <div className="flex"" justify-between>'
                    <span className="text-gray-400>Spent" Budget</span>
                    <span className="text-white>{formatCurrency(projectStats.spentBudget," 'USD')}</span>
                  </div>
                  <div className="flex" justify-between>'
                    <span className="text-gray-400>Remaining</span">''
                    <span className="text-green-400>{formatCurrency(projectStats.totalBudget - projectStats.spentBudget, 'USD')}</span>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm: border: border-white/10 rounded-xl p-6">
                <h3 className="text-lg" font-semibold text-white mb-4>Task Completion</h3>
                <div className="space-y-4>"
                  </div><div className=" flex" justify-between>
                    <span className="text-gray-400>Total" Tasks</span>,
                    <span className="text-white>{projectStats.totalTasks}</span>" 
                  </div>
                  <div className="flex" justify-between>
                    <span className="text-gray-400>Completed" Tasks</span>
                    <span className="text-green-400>{projectStats.completedTasks}</span>"
                  </div>
                  <div className=" flex" justify-between>
                    <span className=" text-gray-400>Completion Rate</span>
                    <span className="text-blue-400>{Math.round((projectStats.completedTasks" / projectStats.totalTasks) * 100)}%</span>
                  </div>
                </div>
              </div>
            </div >
          </div>
        )}"
        {/* Call to Action */}
        <div className="mt-12" text-center > 
          </div><div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-xl" p-8>
            <h2 className="text-3xl font-bold text-white mb-4> 
              Start Managing Your Projects
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl: mx-auto>,
              Create: new projects, assign tasks to team members, track progress,  
              and manage your project portfolio with our comprehensive platform.
            </p>
            <div className="flex flex-col sm flex-row  gap-4 justify-center ">
              <button className="bg-gradient-to-r" from-purple-600 to-pink-600 hover: from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg:text-lg font-semibold transition-all duration-300 shadow-lg:hover: shadow-purple-500/25 transform hover  scale-105>
                Create  New Project
              </button>"
              <Link href=/talent-directory className="border" border-white/20 text-white hover:bg-white/10: px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm  >Find Team Members
              </Link href=/talent-directory className="border" border-white/20 text-white hover:bg-white/10: px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300" backdrop-blur-sm ></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  </div>

  </div>,;
),;
};`
export default ProjectManagementPage;'`