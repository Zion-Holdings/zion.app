import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui';
import { 
  Users, 
  UserPlus, 
  Shield, 
  Activity, 
  Search, 
  Filter, 
  MoreVertical, 
  Edit, 
  Trash2, 
  Eye, 
  Lock, 
  Unlock,
  Mail,
  Phone,
  Calendar,
  MapPin,
  Building,
  GraduationCap,
  Briefcase,
  Plus,
  Download,
  Upload,
  Settings,
  UserCheck,
  UserX,
  Clock,
  CheckCircle,
  AlertCircle,
  XCircle,
  Grid3X3
} from 'lucide-react';

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: UserRole;
  department: string;
  status: 'active' | 'inactive' | 'suspended' | 'pending';
  lastLogin: Date;
  createdAt: Date;
  avatar: string;
  permissions: Permission[];
  skills: string[];
  location: string;
  manager: string;
  employeeId: string;
  salary: number;
  joinDate: Date;
  performance: 'excellent' | 'good' | 'average' | 'needs-improvement';
  securityStatus: 'verified' | 'unverified' | 'flagged';
}

interface UserRole {
  id: string;
  name: string;
  level: number;
  permissions: string[];
  description: string;
}

interface Permission {
  id: string;
  name: string;
  category: string;
  description: string;
}

interface UserManagementSystemProps {
  className?: string;
}

export const UserManagementSystem: React.FC<UserManagementSystemProps> = ({
  className = ''
}) => {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterRole, setFilterRole] = useState<string>('all');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [filterDepartment, setFilterDepartment] = useState<string>('all');
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const [showNewUserModal, setShowNewUserModal] = useState(false);
  const [showBulkActions, setShowBulkActions] = useState(false);
  const [viewMode, setViewMode] = useState<'table' | 'grid' | 'cards'>('table');

  // Mock data for demonstration
  useEffect(() => {
    const mockUsers: User[] = [
      {
        id: '1',
        firstName: 'Sarah',
        lastName: 'Johnson',
        email: 'sarah.johnson@ziontech.com',
        phone: '+1 (555) 123-4567',
        role: {
          id: '1',
          name: 'Senior Project Manager',
          level: 4,
          permissions: ['project_manage', 'team_manage', 'budget_manage'],
          description: 'Manages complex projects and teams'
        },
        department: 'Project Management',
        status: 'active',
        lastLogin: new Date('2024-01-15T10:30:00'),
        createdAt: new Date('2022-03-15'),
        avatar: 'SJ',
        permissions: [
          { id: '1', name: 'Project Management', category: 'Project', description: 'Full project management capabilities' },
          { id: '2', name: 'Team Management', category: 'Team', description: 'Manage team members and assignments' },
          { id: '3', name: 'Budget Management', category: 'Finance', description: 'Manage project budgets and expenses' }
        ],
        skills: ['Project Management', 'Agile', 'Scrum', 'Risk Management', 'Stakeholder Communication'],
        location: 'San Francisco, CA',
        manager: 'David Chen',
        employeeId: 'EMP001',
        salary: 95000,
        joinDate: new Date('2022-03-15'),
        performance: 'excellent',
        securityStatus: 'verified'
      },
      {
        id: '2',
        firstName: 'Mike',
        lastName: 'Chen',
        email: 'mike.chen@ziontech.com',
        phone: '+1 (555) 234-5678',
        role: {
          id: '2',
          name: 'Senior Frontend Developer',
          level: 3,
          permissions: ['code_write', 'code_review', 'deploy'],
          description: 'Develops and maintains frontend applications'
        },
        department: 'Engineering',
        status: 'active',
        lastLogin: new Date('2024-01-15T09:15:00'),
        createdAt: new Date('2021-08-20'),
        avatar: 'MC',
        permissions: [
          { id: '4', name: 'Code Writing', category: 'Development', description: 'Write and modify application code' },
          { id: '5', name: 'Code Review', category: 'Development', description: 'Review code changes and provide feedback' },
          { id: '6', name: 'Deploy', category: 'Operations', description: 'Deploy applications to production' }
        ],
        skills: ['React', 'TypeScript', 'Node.js', 'CSS', 'JavaScript', 'Git'],
        location: 'Seattle, WA',
        manager: 'Lisa Rodriguez',
        employeeId: 'EMP002',
        salary: 110000,
        joinDate: new Date('2021-08-20'),
        performance: 'good',
        securityStatus: 'verified'
      },
      {
        id: '3',
        firstName: 'Lisa',
        lastName: 'Rodriguez',
        email: 'lisa.rodriguez@ziontech.com',
        phone: '+1 (555) 345-6789',
        role: {
          id: '3',
          name: 'Engineering Manager',
          level: 5,
          permissions: ['team_manage', 'hire', 'fire', 'budget_manage'],
          description: 'Manages engineering team and technical decisions'
        },
        department: 'Engineering',
        status: 'active',
        lastLogin: new Date('2024-01-15T08:45:00'),
        createdAt: new Date('2020-11-10'),
        avatar: 'LR',
        permissions: [
          { id: '7', name: 'Team Management', category: 'Team', description: 'Manage engineering team' },
          { id: '8', name: 'Hiring', category: 'HR', description: 'Hire new team members' },
          { id: '9', name: 'Budget Management', category: 'Finance', description: 'Manage engineering budget' }
        ],
        skills: ['Team Leadership', 'Technical Architecture', 'Agile', 'Mentoring', 'System Design'],
        location: 'Austin, TX',
        manager: 'David Chen',
        employeeId: 'EMP003',
        salary: 130000,
        joinDate: new Date('2020-11-10'),
        performance: 'excellent',
        securityStatus: 'verified'
      },
      {
        id: '4',
        firstName: 'David',
        lastName: 'Kim',
        email: 'david.kim@ziontech.com',
        phone: '+1 (555) 456-7890',
        role: {
          id: '4',
          name: 'Security Architect',
          level: 4,
          permissions: ['security_manage', 'audit', 'incident_response'],
          description: 'Designs and implements security solutions'
        },
        department: 'Cybersecurity',
        status: 'active',
        lastLogin: new Date('2024-01-14T16:20:00'),
        createdAt: new Date('2023-01-15'),
        avatar: 'DK',
        permissions: [
          { id: '10', name: 'Security Management', category: 'Security', description: 'Manage security policies and procedures' },
          { id: '11', name: 'Security Audits', category: 'Security', description: 'Conduct security audits and assessments' },
          { id: '12', name: 'Incident Response', category: 'Security', description: 'Respond to security incidents' }
        ],
        skills: ['Cybersecurity', 'Network Security', 'Penetration Testing', 'Compliance', 'Incident Response'],
        location: 'New York, NY',
        manager: 'Emma Wilson',
        employeeId: 'EMP004',
        salary: 120000,
        joinDate: new Date('2023-01-15'),
        performance: 'good',
        securityStatus: 'verified'
      },
      {
        id: '5',
        firstName: 'Emma',
        lastName: 'Wilson',
        email: 'emma.wilson@ziontech.com',
        phone: '+1 (555) 567-8901',
        role: {
          id: '5',
          name: 'CTO',
          level: 6,
          permissions: ['all'],
          description: 'Chief Technology Officer with full system access'
        },
        department: 'Executive',
        status: 'active',
        lastLogin: new Date('2024-01-15T07:30:00'),
        createdAt: new Date('2019-06-01'),
        avatar: 'EW',
        permissions: [
          { id: '13', name: 'Full System Access', category: 'System', description: 'Access to all system features and data' },
          { id: '14', name: 'User Management', category: 'Admin', description: 'Manage all users and permissions' },
          { id: '15', name: 'System Configuration', category: 'Admin', description: 'Configure system settings and policies' }
        ],
        skills: ['Strategic Planning', 'Technology Leadership', 'Team Management', 'Architecture', 'Innovation'],
        location: 'San Francisco, CA',
        manager: 'CEO',
        employeeId: 'EMP005',
        salary: 200000,
        joinDate: new Date('2019-06-01'),
        performance: 'excellent',
        securityStatus: 'verified'
      }
    ];
    setUsers(mockUsers);
    setFilteredUsers(mockUsers);
  }, []);

  // Filter users based on search and filters
  useEffect(() => {
    let filtered = users.filter(user => {
      const matchesSearch = 
        user.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.employeeId.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesRole = filterRole === 'all' || user.role.name === filterRole;
      const matchesStatus = filterStatus === 'all' || user.status === filterStatus;
      const matchesDepartment = filterDepartment === 'all' || user.department === filterDepartment;
      
      return matchesSearch && matchesRole && matchesStatus && matchesDepartment;
    });
    
    setFilteredUsers(filtered);
  }, [users, searchQuery, filterRole, filterStatus, filterDepartment]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'inactive': return 'bg-gray-100 text-gray-800';
      case 'suspended': return 'bg-red-100 text-red-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPerformanceColor = (performance: string) => {
    switch (performance) {
      case 'excellent': return 'bg-green-100 text-green-800';
      case 'good': return 'bg-blue-100 text-blue-800';
      case 'average': return 'bg-yellow-100 text-yellow-800';
      case 'needs-improvement': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getSecurityStatusColor = (status: string) => {
    switch (status) {
      case 'verified': return 'bg-green-100 text-green-800';
      case 'unverified': return 'bg-yellow-100 text-yellow-800';
      case 'flagged': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleBulkAction = (action: string) => {
    if (action === 'activate') {
      setUsers(prev => prev.map(user => 
        selectedUsers.includes(user.id) ? { ...user, status: 'active' as const } : user
      ));
    } else if (action === 'deactivate') {
      setUsers(prev => prev.map(user => 
        selectedUsers.includes(user.id) ? { ...user, status: 'inactive' as const } : user
      ));
    } else if (action === 'delete') {
      setUsers(prev => prev.filter(user => !selectedUsers.includes(user.id)));
    }
    setSelectedUsers([]);
    setShowBulkActions(false);
  };

  const toggleUserSelection = (userId: string) => {
    setSelectedUsers(prev => 
      prev.includes(userId) 
        ? prev.filter(id => id !== userId)
        : [...prev, userId]
    );
  };

  const toggleSelectAll = () => {
    if (selectedUsers.length === filteredUsers.length) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers(filteredUsers.map(user => user.id));
    }
  };

  const renderUserTable = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <input
                type="checkbox"
                checked={selectedUsers.length === filteredUsers.length && filteredUsers.length > 0}
                onChange={toggleSelectAll}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Login</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Performance</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {filteredUsers.map(user => (
            <tr key={user.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap">
                <input
                  type="checkbox"
                  checked={selectedUsers.includes(user.id)}
                  onChange={() => toggleUserSelection(user.id)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10">
                    <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                      <span className="text-sm font-medium text-gray-700">{user.avatar}</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      {user.firstName} {user.lastName}
                    </div>
                    <div className="text-sm text-gray-500">{user.email}</div>
                    <div className="text-xs text-gray-400">ID: {user.employeeId}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{user.role.name}</div>
                <div className="text-sm text-gray-500">Level {user.role.level}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{user.department}</div>
                <div className="text-sm text-gray-500">{user.location}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(user.status)}`}>
                  {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                </span>
                <div className="text-xs text-gray-500 mt-1">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getSecurityStatusColor(user.securityStatus)}`}>
                    {user.securityStatus}
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {user.lastLogin.toLocaleDateString()}
                <div className="text-xs text-gray-400">
                  {user.lastLogin.toLocaleTimeString()}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getPerformanceColor(user.performance)}`}>
                  {user.performance.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <div className="flex items-center space-x-2">
                  <button className="text-blue-600 hover:text-blue-900">
                    <Eye className="w-4 h-4" />
                  </button>
                  <button className="text-indigo-600 hover:text-indigo-900">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="text-red-600 hover:text-red-900">
                    <Trash2 className="w-4 h-4" />
                  </button>
                  <button className="text-gray-600 hover:text-gray-900">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderUserGrid = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredUsers.map(user => (
        <Card key={user.id} className="user-card hover:shadow-lg transition-shadow">
          <CardHeader className="pb-3">
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-sm font-medium text-gray-700">{user.avatar}</span>
                </div>
                <div>
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    {user.firstName} {user.lastName}
                  </CardTitle>
                  <p className="text-sm text-gray-600">{user.role.name}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(user.status)}`}>
                  {user.status}
                </span>
                <input
                  type="checkbox"
                  checked={selectedUsers.includes(user.id)}
                  onChange={() => toggleUserSelection(user.id)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="pt-0">
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Mail className="w-4 h-4" />
                <span>{user.email}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Building className="w-4 h-4" />
                <span>{user.department}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>{user.location}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Calendar className="w-4 h-4" />
                <span>Joined {user.joinDate.toLocaleDateString()}</span>
              </div>
              
              <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getPerformanceColor(user.performance)}`}>
                  {user.performance.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                </span>
                <div className="flex items-center space-x-1">
                  <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                    <Eye className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const totalUsers = users.length;
  const activeUsers = users.filter(u => u.status === 'active').length;
  const newUsersThisMonth = users.filter(u => 
    u.createdAt.getMonth() === new Date().getMonth() && 
    u.createdAt.getFullYear() === new Date().getFullYear()
  ).length;
  const verifiedUsers = users.filter(u => u.securityStatus === 'verified').length;

  return (
    <div className={`user-management-system ${className}`}>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">User Management</h1>
        <p className="text-gray-600">Manage users, roles, and permissions across the organization</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Users</p>
                <p className="text-2xl font-bold text-gray-900">{totalUsers}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="p-3 bg-green-100 rounded-lg">
                <UserCheck className="w-6 h-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Active Users</p>
                <p className="text-2xl font-bold text-gray-900">{activeUsers}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="p-3 bg-purple-100 rounded-lg">
                <UserPlus className="w-6 h-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">New This Month</p>
                <p className="text-2xl font-bold text-gray-900">{newUsersThisMonth}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="p-3 bg-orange-100 rounded-lg">
                <Shield className="w-6 h-6 text-orange-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Verified Users</p>
                <p className="text-2xl font-bold text-gray-900">{verifiedUsers}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 mb-6">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search users..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <select
            value={filterRole}
            onChange={(e) => setFilterRole(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Roles</option>
            <option value="Senior Project Manager">Senior Project Manager</option>
            <option value="Senior Frontend Developer">Senior Frontend Developer</option>
            <option value="Engineering Manager">Engineering Manager</option>
            <option value="Security Architect">Security Architect</option>
            <option value="CTO">CTO</option>
          </select>
          
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="suspended">Suspended</option>
            <option value="pending">Pending</option>
          </select>
          
          <select
            value={filterDepartment}
            onChange={(e) => setFilterDepartment(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Departments</option>
            <option value="Project Management">Project Management</option>
            <option value="Engineering">Engineering</option>
            <option value="Cybersecurity">Cybersecurity</option>
            <option value="Executive">Executive</option>
          </select>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setViewMode('table')}
              className={`p-2 rounded-md transition-colors ${
                viewMode === 'table' ? 'bg-white shadow-sm' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <div className="w-4 h-4 border border-current rounded"></div>
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-md transition-colors ${
                viewMode === 'grid' ? 'bg-white shadow-sm' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Grid3X3 className="w-4 h-4" />
            </button>
          </div>
          
          <button
            onClick={() => setShowNewUserModal(true)}
            className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>New User</span>
          </button>
        </div>
      </div>

      {/* Bulk Actions */}
      {selectedUsers.length > 0 && (
        <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium text-blue-900">
                {selectedUsers.length} user(s) selected
              </span>
              <button
                onClick={() => setSelectedUsers([])}
                className="text-sm text-blue-600 hover:text-blue-800"
              >
                Clear selection
              </button>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => handleBulkAction('activate')}
                className="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700 transition-colors"
              >
                Activate
              </button>
              <button
                onClick={() => handleBulkAction('deactivate')}
                className="px-3 py-1 bg-yellow-600 text-white text-sm rounded hover:bg-yellow-700 transition-colors"
              >
                Deactivate
              </button>
              <button
                onClick={() => handleBulkAction('delete')}
                className="px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700 transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Users Display */}
      <div className="space-y-6">
        {viewMode === 'table' && renderUserTable()}
        {viewMode === 'grid' && renderUserGrid()}
      </div>

      {/* Empty State */}
      {filteredUsers.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No users found</h3>
          <p className="text-gray-600 mb-6">Try adjusting your search or filters to find what you're looking for.</p>
          <button
            onClick={() => setShowNewUserModal(true)}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Add New User
          </button>
        </div>
      )}
    </div>
  );
};

export default UserManagementSystem;