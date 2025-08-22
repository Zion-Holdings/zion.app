export interface RealQ4Service {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
  icon: string;
  color: string;
  textColor: string;
  link: string;
  category: string;
  realService: boolean;
  launchDate: string;
  customers: number;
  rating: number;
  reviews: number;
}

const contact = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

export const real2025Q4Additions: RealQ4Service[] = [
  {
    id: 'it-helpdesk-platform',
    name: 'IT Helpdesk Platform',
    tagline: 'Ticketing, SLAs, knowledge base, and client portal',
    price: '$199',
    period: '/month',
    description: 'Lightweight, customizable helpdesk for MSPs and internal IT with SLAs, automations, client portal and asset notes.',
    features: [
      'Email-to-ticket and automations',
      'SLA policies and escalations',
      'Knowledge base and macros',
      'Client portal and CSAT surveys'
    ],
    popular: true,
    icon: '🧰',
    color: 'from-blue-600 to-indigo-700',
    textColor: 'text-blue-300',
    link: 'https://ziontechgroup.com/it-helpdesk-platform',
    category: 'IT Services',
    realService: true,
    launchDate: '2025-10-01',
    customers: 28,
    rating: 4.6,
    reviews: 15
  },
  {
    id: 'employee-scheduling',
    name: 'Employee Scheduling & Timeclock',
    tagline: 'Shift planning, swaps, and time tracking',
    price: '$79',
    period: '/month',
    description: 'Create schedules, manage shift swaps, and collect accurate timecards with mobile clock-in and payroll exports.',
    features: [
      'Drag-and-drop schedule builder',
      'Shift swaps and approvals',
      'Mobile timeclock with geofencing',
      'Payroll-ready exports'
    ],
    popular: true,
    icon: '🗓️',
    color: 'from-emerald-600 to-teal-700',
    textColor: 'text-emerald-300',
    link: 'https://ziontechgroup.com/employee-scheduling',
    category: 'Operations',
    realService: true,
    launchDate: '2025-10-01',
    customers: 52,
    rating: 4.5,
    reviews: 22
  },
  {
    id: 'lms-lite',
    name: 'LMS Lite',
    tagline: 'Simple learning management for teams',
    price: '$99',
    period: '/month',
    description: 'Host lessons, track progress, and certify completion with quizzes and role-based paths. Great for onboarding and compliance.',
    features: [
      'Course builder with quizzes',
      'Role-based learning paths',
      'Completion certificates',
      'SCORM-lite exports'
    ],
    popular: false,
    icon: '🎓',
    color: 'from-purple-600 to-fuchsia-700',
    textColor: 'text-purple-300',
    link: 'https://ziontechgroup.com/lms-lite',
    category: 'Education',
    realService: true,
    launchDate: '2025-10-01',
    customers: 19,
    rating: 4.4,
    reviews: 9
  },
  {
    id: 'clinic-appointment-scheduler',
    name: 'Clinic Appointment Scheduler',
    tagline: 'Online bookings, reminders, and telehealth links',
    price: '$59',
    period: '/month',
    description: 'HIPAA-conscious booking flows for clinics with reminders, intake forms, and telehealth meeting links.',
    features: [
      'Patient self-serve bookings',
      'SMS/email reminders',
      'Intake forms and notes',
      'Telehealth link generation'
    ],
    popular: false,
    icon: '🏥',
    color: 'from-rose-600 to-orange-700',
    textColor: 'text-rose-300',
    link: 'https://ziontechgroup.com/clinic-appointment-scheduler',
    category: 'Healthcare',
    realService: true,
    launchDate: '2025-10-01',
    customers: 23,
    rating: 4.5,
    reviews: 11
  },
  {
    id: 'session-replay-heatmaps',
    name: 'Session Replay & Heatmaps',
    tagline: 'Privacy-first session replays and click maps',
    price: '$69',
    period: '/month',
    description: 'Understand user behavior with mask-by-default replays, heatmaps, and funnel analysis that respect privacy.',
    features: [
      'Masking and redaction controls',
      'Click/scroll heatmaps',
      'Rage click and dead click detection',
      'Conversion funnel overlay'
    ],
    popular: false,
    icon: '🎯',
    color: 'from-amber-600 to-orange-700',
    textColor: 'text-amber-300',
    link: 'https://ziontechgroup.com/session-replay-heatmaps',
    category: 'Analytics',
    realService: true,
    launchDate: '2025-10-01',
    customers: 34,
    rating: 4.5,
    reviews: 13
  }
];