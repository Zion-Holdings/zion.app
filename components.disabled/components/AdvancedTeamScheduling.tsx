import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  Users, 
  CheckCircle, 
  AlertCircle, 
  TrendingUp,
  BarChart3,
  PieChart,
  LineChart,
  Filter,
  Search,
  Plus,
  Edit,
  Trash2,
  Eye,
  Settings,
  Bell,
  Star,
  Target,
  Zap,
  Shield,
  Globe,
  Smartphone,
  Database,
  Cloud,
  Code,
  Rocket,
  Timer,
  Activity,
  Download,
  Upload,
  RefreshCw,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Video,
  Phone,
  Mail,
  User,
  ArrowRight,
  Send,
  Copy,
  Share2,
  FileText,
  Calendar as CalendarIcon,
  AlarmClock,
  UserCheck,
  UserX,
  Repeat,
  ExternalLink
} from 'lucide-react';

interface ScheduleEvent {
  id: string;
  title: string;
  description: string;
  type: 'meeting' | 'task' | 'break' | 'training' | 'client-call' | 'project-work';
  date: string;
  startTime: string;
  endTime: string;
  duration: number; // in minutes
  attendees: string[];
  organizer: string;
  location: string;
  isVirtual: boolean;
  meetingLink?: string;
  status: 'scheduled' | 'in-progress' | 'completed' | 'cancelled' | 'postponed';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  recurring: boolean;
  recurringPattern?: string;
  reminders: number[]; // minutes before event
  notes: string;
  project?: string;
  client?: string;
}

interface TeamMember {
  id: string;
  name: string;
  role: string;
  email: string;
  avatar: string;
  timezone: string;
  workingHours: {
    start: string;
    end: string;
    days: string[];
  };
  availability: {
    [date: string]: {
      status: 'available' | 'busy' | 'out-of-office' | 'tentative';
      events: string[];
    };
  };
  skills: string[];
  currentProjects: string[];
  utilization: number; // percentage
}

interface MeetingRoom {
  id: string;
  name: string;
  capacity: number;
  equipment: string[];
  location: string;
  isVirtual: boolean;
  bookings: {
    [date: string]: {
      [time: string]: boolean;
    };
  };
}

const scheduleEvents: ScheduleEvent[] = [
  {
    id: '1',
    title: 'Project Kickoff Meeting',
    description: 'E-commerce platform project kickoff with stakeholders',
    type: 'meeting',
    date: '2025-01-28',
    startTime: '09:00',
    endTime: '10:30',
    duration: 90,
    attendees: ['John Smith', 'Sarah Chen', 'Mike Johnson', 'Client Team'],
    organizer: 'John Smith',
    location: 'Conference Room A',
    isVirtual: false,
    status: 'scheduled',
    priority: 'high',
    recurring: false,
    reminders: [15, 60],
    notes: 'Bring project timeline and budget overview',
    project: 'E-commerce Platform',
    client: 'TechFlow Solutions'
  },
  {
    id: '2',
    title: 'Daily Standup',
    description: 'Daily team synchronization and progress updates',
    type: 'meeting',
    date: '2025-01-28',
    startTime: '10:00',
    endTime: '10:15',
    duration: 15,
    attendees: ['John Smith', 'Sarah Chen', 'Mike Johnson', 'Alex Thompson'],
    organizer: 'John Smith',
    location: 'Virtual',
    isVirtual: true,
    meetingLink: 'https://meet.google.com/abc-defg-hij',
    status: 'scheduled',
    priority: 'medium',
    recurring: true,
    recurringPattern: 'Daily (weekdays)',
    reminders: [5],
    notes: 'Quick progress update and blocker discussion',
    project: 'Multiple Projects'
  },
  {
    id: '3',
    title: 'Client Presentation',
    description: 'Quarterly business review with HealthTech Innovations',
    type: 'client-call',
    date: '2025-01-29',
    startTime: '14:00',
    endTime: '15:30',
    duration: 90,
    attendees: ['David Kim', 'Lisa Rodriguez', 'Client Executives'],
    organizer: 'David Kim',
    location: 'Virtual',
    isVirtual: true,
    meetingLink: 'https://zoom.us/j/123456789',
    status: 'scheduled',
    priority: 'urgent',
    recurring: false,
    reminders: [30, 120],
    notes: 'Prepare Q4 analytics report and future roadmap',
    project: 'AI Analytics Platform',
    client: 'HealthTech Innovations'
  },
  {
    id: '4',
    title: 'Code Review Session',
    description: 'Review frontend components and discuss improvements',
    type: 'project-work',
    date: '2025-01-28',
    startTime: '15:00',
    endTime: '16:00',
    duration: 60,
    attendees: ['John Smith', 'Sarah Chen'],
    organizer: 'Sarah Chen',
    location: 'Development Lab',
    isVirtual: false,
    status: 'scheduled',
    priority: 'medium',
    recurring: false,
    reminders: [15],
    notes: 'Focus on React component optimization',
    project: 'E-commerce Platform'
  }
];

const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'John Smith',
    role: 'Senior Frontend Developer',
    email: 'john.smith@ziontech.com',
    avatar: 'JS',
    timezone: 'PST',
    workingHours: {
      start: '09:00',
      end: '17:00',
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
    },
    availability: {
      '2025-01-28': { status: 'busy', events: ['1', '2', '4'] },
      '2025-01-29': { status: 'available', events: [] },
      '2025-01-30': { status: 'tentative', events: [] }
    },
    skills: ['React', 'TypeScript', 'Next.js', 'UI/UX'],
    currentProjects: ['E-commerce Platform', 'Mobile App'],
    utilization: 85
  },
  {
    id: '2',
    name: 'Sarah Chen',
    role: 'UI/UX Designer',
    email: 'sarah.chen@ziontech.com',
    avatar: 'SC',
    timezone: 'PST',
    workingHours: {
      start: '08:30',
      end: '16:30',
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
    },
    availability: {
      '2025-01-28': { status: 'busy', events: ['1', '2', '4'] },
      '2025-01-29': { status: 'available', events: [] },
      '2025-01-30': { status: 'available', events: [] }
    },
    skills: ['Figma', 'Adobe Creative Suite', 'Prototyping', 'User Research'],
    currentProjects: ['E-commerce Platform', 'Brand Redesign'],
    utilization: 78
  },
  {
    id: '3',
    name: 'Mike Johnson',
    role: 'Backend Developer',
    email: 'mike.johnson@ziontech.com',
    avatar: 'MJ',
    timezone: 'EST',
    workingHours: {
      start: '09:00',
      end: '17:00',
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
    },
    availability: {
      '2025-01-28': { status: 'busy', events: ['1', '2'] },
      '2025-01-29': { status: 'available', events: [] },
      '2025-01-30': { status: 'out-of-office', events: [] }
    },
    skills: ['Node.js', 'Python', 'PostgreSQL', 'AWS'],
    currentProjects: ['E-commerce Platform', 'API Development'],
    utilization: 92
  },
  {
    id: '4',
    name: 'David Kim',
    role: 'Data Scientist',
    email: 'david.kim@ziontech.com',
    avatar: 'DK',
    timezone: 'PST',
    workingHours: {
      start: '10:00',
      end: '18:00',
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
    },
    availability: {
      '2025-01-28': { status: 'available', events: [] },
      '2025-01-29': { status: 'busy', events: ['3'] },
      '2025-01-30': { status: 'available', events: [] }
    },
    skills: ['Python', 'TensorFlow', 'SQL', 'Machine Learning'],
    currentProjects: ['AI Analytics Platform', 'Data Pipeline'],
    utilization: 88
  }
];

const meetingRooms: MeetingRoom[] = [
  {
    id: '1',
    name: 'Conference Room A',
    capacity: 12,
    equipment: ['Projector', 'Whiteboard', 'Video Conferencing', 'Sound System'],
    location: 'Floor 1',
    isVirtual: false,
    bookings: {
      '2025-01-28': {
        '09:00-10:30': true,
        '14:00-15:00': false
      }
    }
  },
  {
    id: '2',
    name: 'Development Lab',
    capacity: 8,
    equipment: ['Multiple Monitors', 'Whiteboard', 'High-speed Internet'],
    location: 'Floor 2',
    isVirtual: false,
    bookings: {
      '2025-01-28': {
        '15:00-16:00': true
      }
    }
  },
  {
    id: '3',
    name: 'Virtual Meeting Room',
    capacity: 50,
    equipment: ['Screen Sharing', 'Recording', 'Breakout Rooms'],
    location: 'Online',
    isVirtual: true,
    bookings: {}
  }
];

const eventTypeColors = {
  'meeting': 'from-blue-500 to-cyan-500',
  'task': 'from-green-500 to-emerald-500',
  'break': 'from-yellow-500 to-orange-500',
  'training': 'from-purple-500 to-pink-500',
  'client-call': 'from-red-500 to-pink-500',
  'project-work': 'from-indigo-500 to-blue-500'
};

const statusColors = {
  'scheduled': 'from-blue-500 to-cyan-500',
  'in-progress': 'from-yellow-500 to-orange-500',
  'completed': 'from-green-500 to-emerald-500',
  'cancelled': 'from-red-500 to-pink-500',
  'postponed': 'from-gray-500 to-gray-600'
};

const availabilityColors = {
  'available': 'bg-green-500',
  'busy': 'bg-red-500',
  'out-of-office': 'bg-gray-500',
  'tentative': 'bg-yellow-500'
};

const AdvancedTeamScheduling: React.FC = () => {
  const [selectedView, setSelectedView] = useState<'calendar' | 'schedule' | 'team' | 'rooms'>('calendar');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState<ScheduleEvent | null>(null);
  const [showCreateEvent, setShowCreateEvent] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filteredEvents = scheduleEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || event.type === selectedFilter;
    const matchesDate = event.date === selectedDate.toISOString().split('T')[0];
    
    return matchesSearch && matchesFilter && (selectedView === 'calendar' ? matchesDate : true);
  });

  const filteredTeamMembers = teamMembers.filter(member => {
    return member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
           member.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
           member.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
  });

  const getAvailabilityStatus = (member: TeamMember, date: string) => {
    return member.availability[date]?.status || 'available';
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Team Scheduling & Calendar
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Advanced team scheduling, resource allocation, and calendar management. 
            Coordinate meetings, track availability, and optimize team productivity.
          </p>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
        >
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <TrendingUp className="w-5 h-5 text-green-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">{scheduleEvents.length}</h3>
            <p className="text-gray-400 text-sm">Scheduled Events</p>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <TrendingUp className="w-5 h-5 text-green-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">{teamMembers.length}</h3>
            <p className="text-gray-400 text-sm">Team Members</p>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <TrendingUp className="w-5 h-5 text-green-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">{meetingRooms.length}</h3>
            <p className="text-gray-400 text-sm">Meeting Rooms</p>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <TrendingUp className="w-5 h-5 text-green-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">{Math.round(teamMembers.reduce((sum, member) => sum + member.utilization, 0) / teamMembers.length)}%</h3>
            <p className="text-gray-400 text-sm">Avg Utilization</p>
          </div>
        </motion.div>

        {/* View Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex items-center gap-1 mb-8 bg-gray-800/50 rounded-lg p-1 max-w-lg mx-auto"
        >
          {(['calendar', 'schedule', 'team', 'rooms'] as const).map((view) => (
            <button
              key={view}
              onClick={() => setSelectedView(view)}
              className={`flex-1 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                selectedView === view
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {view === 'calendar' && <Calendar className="w-4 h-4 inline mr-2" />}
              {view === 'schedule' && <Clock className="w-4 h-4 inline mr-2" />}
              {view === 'team' && <Users className="w-4 h-4 inline mr-2" />}
              {view === 'rooms' && <MapPin className="w-4 h-4 inline mr-2" />}
              {view.charAt(0).toUpperCase() + view.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-12"
        >
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search events, team members, or rooms..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
              />
            </div>
            
            {(selectedView === 'calendar' || selectedView === 'schedule') && (
              <select
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
                className="px-4 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
              >
                <option value="all">All Events</option>
                <option value="meeting">Meetings</option>
                <option value="task">Tasks</option>
                <option value="client-call">Client Calls</option>
                <option value="project-work">Project Work</option>
                <option value="training">Training</option>
              </select>
            )}
          </div>

          <div className="flex items-center gap-4">
            <motion.button
              className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 text-gray-300 hover:text-white rounded-lg border border-gray-700/50 hover:bg-gray-700/50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Share2 className="w-4 h-4" />
              Share Calendar
            </motion.button>
            
            <motion.button
              onClick={() => setShowCreateEvent(true)}
              className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Plus className="w-4 h-4" />
              New Event
            </motion.button>
          </div>
        </motion.div>

        {/* Content */}
        <AnimatePresence>
          {selectedView === 'calendar' && (
            <motion.div
              key="calendar"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white">
                    {selectedDate.toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </h3>
                  <div className="flex items-center gap-2">
                    <motion.button
                      onClick={() => setSelectedDate(new Date(selectedDate.getTime() - 24 * 60 * 60 * 1000))}
                      className="p-2 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-lg transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </motion.button>
                    <motion.button
                      onClick={() => setSelectedDate(new Date())}
                      className="px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-lg transition-all duration-300 text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Today
                    </motion.button>
                    <motion.button
                      onClick={() => setSelectedDate(new Date(selectedDate.getTime() + 24 * 60 * 60 * 1000))}
                      className="p-2 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-lg transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ChevronRight className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>

                <div className="space-y-4">
                  {filteredEvents.length === 0 ? (
                    <div className="text-center py-12">
                      <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                      <h4 className="text-xl font-semibold text-gray-300 mb-2">No Events Scheduled</h4>
                      <p className="text-gray-400">No events found for this date. Create a new event to get started.</p>
                    </div>
                  ) : (
                    filteredEvents.map((event) => (
                      <motion.div
                        key={event.id}
                        variants={itemVariants}
                        className="bg-gray-800/30 rounded-lg border border-gray-700/50 p-4 cursor-pointer hover:border-blue-500/50 transition-all duration-300"
                        onClick={() => setSelectedEvent(event)}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <div className={`w-4 h-4 bg-gradient-to-r ${eventTypeColors[event.type]} rounded-full`} />
                              <h4 className="text-white font-semibold">{event.title}</h4>
                              <div className={`px-2 py-1 bg-gradient-to-r ${statusColors[event.status]} rounded-full text-white text-xs font-medium`}>
                                {event.status}
                              </div>
                            </div>
                            <p className="text-gray-400 text-sm mb-3">{event.description}</p>
                            <div className="flex items-center gap-4 text-sm text-gray-400">
                              <span className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {event.startTime} - {event.endTime}
                              </span>
                              <span className="flex items-center gap-1">
                                <Users className="w-4 h-4" />
                                {event.attendees.length} attendees
                              </span>
                              <span className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {event.location}
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            {event.isVirtual && (
                              <Video className="w-4 h-4 text-blue-400" />
                            )}
                            {event.recurring && (
                              <Repeat className="w-4 h-4 text-green-400" />
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {selectedView === 'team' && (
            <motion.div
              key="team"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-6"
              >
                {filteredTeamMembers.map((member) => (
                  <motion.div
                    key={member.id}
                    variants={itemVariants}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                          {member.avatar}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">{member.name}</h3>
                          <p className="text-gray-400 text-sm">{member.role}</p>
                          <p className="text-gray-400 text-xs">{member.timezone}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-white font-bold text-lg">{member.utilization}%</div>
                        <div className="text-gray-400 text-sm">Utilization</div>
                      </div>
                    </div>

                    {/* Availability */}
                    <div className="mb-4">
                      <h4 className="text-white font-medium mb-2">Availability</h4>
                      <div className="flex items-center gap-2">
                        {['2025-01-28', '2025-01-29', '2025-01-30'].map((date) => {
                          const status = getAvailabilityStatus(member, date);
                          return (
                            <div key={date} className="flex items-center gap-1">
                              <div className={`w-3 h-3 ${availabilityColors[status]} rounded-full`} />
                              <span className="text-gray-400 text-xs">
                                {new Date(date).toLocaleDateString('en-US', { weekday: 'short' })}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Working Hours */}
                    <div className="mb-4">
                      <h4 className="text-white font-medium mb-2">Working Hours</h4>
                      <p className="text-gray-300 text-sm">
                        {member.workingHours.start} - {member.workingHours.end}
                      </p>
                      <p className="text-gray-400 text-xs">
                        {member.workingHours.days.join(', ')}
                      </p>
                    </div>

                    {/* Skills */}
                    <div className="mb-4">
                      <h4 className="text-white font-medium mb-2">Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full border border-gray-600/50"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Current Projects */}
                    <div>
                      <h4 className="text-white font-medium mb-2">Current Projects</h4>
                      <div className="space-y-1">
                        {member.currentProjects.map((project, index) => (
                          <div key={index} className="text-gray-300 text-sm">{project}</div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl border border-blue-500/30 p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Optimize Your Team Scheduling?
            </h3>
            <p className="text-gray-300 mb-6">
              Let Zion Tech Group help you coordinate meetings, manage resources, and 
              boost team productivity with our advanced scheduling system.
            </p>
            <motion.a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Event Detail Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-gray-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{selectedEvent.title}</h3>
                    <div className="flex items-center gap-2">
                      <div className={`px-3 py-1 bg-gradient-to-r ${statusColors[selectedEvent.status]} rounded-full text-white text-sm font-medium`}>
                        {selectedEvent.status}
                      </div>
                      <div className={`px-3 py-1 bg-gradient-to-r ${eventTypeColors[selectedEvent.type]} rounded-full text-white text-sm font-medium`}>
                        {selectedEvent.type}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedEvent(null)}
                    className="w-8 h-8 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    ×
                  </button>
                </div>

                {/* Event Details */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-gray-400" />
                    <span className="text-white">{selectedEvent.date}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-gray-400" />
                    <span className="text-white">{selectedEvent.startTime} - {selectedEvent.endTime} ({selectedEvent.duration} mins)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-gray-400" />
                    <span className="text-white">{selectedEvent.location}</span>
                    {selectedEvent.isVirtual && selectedEvent.meetingLink && (
                      <a
                        href={selectedEvent.meetingLink}
                        className="text-blue-400 hover:text-blue-300 text-sm underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Join Meeting
                      </a>
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    <User className="w-5 h-5 text-gray-400" />
                    <span className="text-white">Organized by {selectedEvent.organizer}</span>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h4 className="text-white font-medium mb-2">Description</h4>
                  <p className="text-gray-300">{selectedEvent.description}</p>
                </div>

                {/* Attendees */}
                <div className="mb-6">
                  <h4 className="text-white font-medium mb-2">Attendees ({selectedEvent.attendees.length})</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedEvent.attendees.map((attendee, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-sm border border-gray-700/50"
                      >
                        {attendee}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Notes */}
                {selectedEvent.notes && (
                  <div className="mb-6">
                    <h4 className="text-white font-medium mb-2">Notes</h4>
                    <p className="text-gray-300">{selectedEvent.notes}</p>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex items-center justify-center gap-4 pt-6 border-t border-gray-700/50">
                  <motion.button
                    className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Edit className="w-4 h-4" />
                    Edit Event
                  </motion.button>
                  <motion.button
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Send className="w-4 h-4" />
                    Send Reminder
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AdvancedTeamScheduling;