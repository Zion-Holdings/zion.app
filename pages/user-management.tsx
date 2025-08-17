import React, { useState, useEffect } from 'react';
import Head from 'next/head';

interface User {
  id: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  status: 'active' | 'inactive' | 'suspended' | 'pending';
  lastLogin: Date;
  createdAt: Date;
  permissions: Permission[];
  avatar?: string;
  department?: string;
  phone?: string;
  twoFactorEnabled: boolean;
  loginAttempts: number;
  lastPasswordChange: Date;
}

interface UserRole {
  id: string;
  name: string;
  description: string;
  permissions: Permission[];
  isSystem: boolean;
  userCount: number;
}

interface Permission {
  id: string;
  name: string;
  description: string;
  category: string;
  resource: string;
  action: string;
}

interface UserFilters {
  role: string[];
  status: string[];
  department: string[];
  search: string;
  dateRange: string;
}

const UserManagement: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [roles, setRoles] = useState<UserRole[]>([]);
  const [permissions, setPermissions] = useState<Permission[]>([]);
  const [filters, setFilters] = useState<UserFilters>({
    role: [],
    status: [],
    department: [],
    search: '',
    dateRange: 'all'
  });
  const [selectedUsers, setSelectedUsers] = useState<Set<string>>(new Set());
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState<'username' | 'role' | 'status' | 'lastLogin' | 'createdAt'>('username');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [currentView, setCurrentView] = useState<'users' | 'roles' | 'permissions'>('users');
  // These state variables are reserved for future editing functionality
  // const [editingUser, setEditingUser] = useState<User | null>(null);
  // const [editingRole, setEditingRole] = useState<UserRole | null>(null);
  // const [showCreateModal, setShowCreateModal] = useState(false);
  // const [showRoleModal, setShowRoleModal] = useState(false);

  // Mock data for demonstration
  const mockUsers: User[] = [
    {
      id: '1',
      username: 'admin',
      email: 'admin@zion.app',
      firstName: 'System',
      lastName: 'Administrator',
      role: { id: '1', name: 'Super Admin', description: 'Full system access', permissions: [], isSystem: true, userCount: 1 },
      status: 'active',
      lastLogin: new Date(Date.now() - 2 * 60 * 60 * 1000),
      createdAt: new Date('2024-01-01'),
      permissions: [],
      avatar: '👑',
      department: 'IT',
      phone: '+1-555-0123',
      twoFactorEnabled: true,
      loginAttempts: 0,
      lastPasswordChange: new Date('2024-01-15')
    },
    {
      id: '2',
      username: 'john.doe',
      email: 'john.doe@zion.app',
      firstName: 'John',
      lastName: 'Doe',
      role: { id: '2', name: 'Content Manager', description: 'Content creation and management', permissions: [], isSystem: false, userCount: 3 },
      status: 'active',
      lastLogin: new Date(Date.now() - 6 * 60 * 60 * 1000),
      createdAt: new Date('2024-01-05'),
      permissions: [],
      avatar: '👨‍💼',
      department: 'Content',
      phone: '+1-555-0124',
      twoFactorEnabled: false,
      loginAttempts: 0,
      lastPasswordChange: new Date('2024-01-10')
    },
    {
      id: '3',
      username: 'jane.smith',
      email: 'jane.smith@zion.app',
      firstName: 'Jane',
      lastName: 'Smith',
      role: { id: '3', name: 'Analytics Specialist', description: 'Data analysis and reporting', permissions: [], isSystem: false, userCount: 2 },
      status: 'active',
      lastLogin: new Date(Date.now() - 12 * 60 * 60 * 1000),
      createdAt: new Date('2024-01-08'),
      permissions: [],
      avatar: '👩‍💻',
      department: 'Analytics',
      phone: '+1-555-0125',
      twoFactorEnabled: true,
      loginAttempts: 0,
      lastPasswordChange: new Date('2024-01-12')
    },
    {
      id: '4',
      username: 'bob.wilson',
      email: 'bob.wilson@zion.app',
      firstName: 'Bob',
      lastName: 'Wilson',
      role: { id: '4', name: 'Developer', description: 'System development and maintenance', permissions: [], isSystem: false, userCount: 5 },
      status: 'inactive',
      lastLogin: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
      createdAt: new Date('2024-01-12'),
      permissions: [],
      avatar: '👨‍💻',
      department: 'Engineering',
      phone: '+1-555-0126',
      twoFactorEnabled: false,
      loginAttempts: 0,
      lastPasswordChange: new Date('2024-01-15')
    },
    {
      id: '5',
      username: 'alice.johnson',
      email: 'alice.johnson@zion.app',
      firstName: 'Alice',
      lastName: 'Johnson',
      role: { id: '5', name: 'Viewer', description: 'Read-only access', permissions: [], isSystem: false, userCount: 8 },
      status: 'pending',
      lastLogin: new Date(Date.now() - 24 * 60 * 60 * 1000),
      createdAt: new Date('2024-01-15'),
      permissions: [],
      avatar: '👩‍🎨',
      department: 'Design',
      phone: '+1-555-0127',
      twoFactorEnabled: false,
      loginAttempts: 0,
      lastPasswordChange: new Date('2024-01-15')
    }
  ];

  const mockRoles: UserRole[] = [
    {
      id: '1',
      name: 'Super Admin',
      description: 'Full system access with all permissions',
      permissions: [],
      isSystem: true,
      userCount: 1
    },
    {
      id: '2',
      name: 'Content Manager',
      description: 'Content creation, editing, and management',
      permissions: [],
      isSystem: false,
      userCount: 3
    },
    {
      id: '3',
      name: 'Analytics Specialist',
      description: 'Data analysis, reporting, and insights',
      permissions: [],
      isSystem: false,
      userCount: 2
    },
    {
      id: '4',
      name: 'Developer',
      description: 'System development and technical operations',
      permissions: [],
      isSystem: false,
      userCount: 5
    },
    {
      id: '5',
      name: 'Viewer',
      description: 'Read-only access to content and reports',
      permissions: [],
      isSystem: false,
      userCount: 8
    }
  ];

  const mockPermissions: Permission[] = [
    {
      id: '1',
      name: 'User Management',
      description: 'Create, edit, and delete users',
      category: 'Administration',
      resource: 'users',
      action: 'all'
    },
    {
      id: '2',
      name: 'Role Management',
      description: 'Create, edit, and delete roles',
      category: 'Administration',
      resource: 'roles',
      action: 'all'
    },
    {
      id: '3',
      name: 'Content Creation',
      description: 'Create new content and articles',
      category: 'Content',
      resource: 'content',
      action: 'create'
    },
    {
      id: '4',
      name: 'Content Editing',
      description: 'Edit existing content',
      category: 'Content',
      resource: 'content',
      action: 'edit'
    },
    {
      id: '5',
      name: 'Content Deletion',
      description: 'Delete content and articles',
      category: 'Content',
      resource: 'content',
      action: 'delete'
    },
    {
      id: '6',
      name: 'Analytics View',
      description: 'View analytics and reports',
      category: 'Analytics',
      resource: 'analytics',
      action: 'read'
    },
    {
      id: '7',
      name: 'Analytics Export',
      description: 'Export analytics data',
      category: 'Analytics',
      resource: 'analytics',
      action: 'export'
    },
    {
      id: '8',
      name: 'System Settings',
      description: 'Modify system configuration',
      category: 'System',
      resource: 'settings',
      action: 'write'
    }
  ];

  useEffect(() => {
    setUsers(mockUsers);
    setRoles(mockRoles);
    setPermissions(mockPermissions);
  }, [mockUsers, mockRoles, mockPermissions]);

  const filteredUsers = users.filter(user => {
    const roleMatch = filters.role.length === 0 || filters.role.includes(user.role.name);
    const statusMatch = filters.status.length === 0 || filters.status.includes(user.status);
    const departmentMatch = filters.department.length === 0 || (user.department && filters.department.includes(user.department));
    const searchMatch = !filters.search || 
                       user.username.toLowerCase().includes(filters.search.toLowerCase()) ||
                       user.email.toLowerCase().includes(filters.search.toLowerCase()) ||
                       `${user.firstName} ${user.lastName}`.toLowerCase().includes(filters.search.toLowerCase());
    
    return roleMatch && statusMatch && departmentMatch && searchMatch;
  });

  const sortedUsers = [...filteredUsers].sort((a, b) => {
    let aValue: any, bValue: any;
    
    switch (sortBy) {
      case 'username':
        aValue = a.username;
        bValue = b.username;
        break;
      case 'role':
        aValue = a.role.name;
        bValue = b.role.name;
        break;
      case 'status':
        aValue = a.status;
        bValue = b.status;
        break;
      case 'lastLogin':
        aValue = a.lastLogin.getTime();
        bValue = b.lastLogin.getTime();
        break;
      case 'createdAt':
        aValue = a.createdAt.getTime();
        bValue = b.createdAt.getTime();
        break;
      default:
        return 0;
    }
    
    if (sortOrder === 'asc') {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });

  const getStatusColor = (status: string) => {
    const colors = {
      active: 'bg-green-100 text-green-800',
      inactive: 'bg-gray-100 text-gray-800',
      suspended: 'bg-red-100 text-red-800',
      pending: 'bg-yellow-100 text-yellow-800'
    };
    return colors[status as keyof typeof colors] || colors.inactive;
  };

  const getRoleColor = (roleName: string) => {
    const colors = {
      'Super Admin': 'bg-purple-100 text-purple-800',
      'Content Manager': 'bg-blue-100 text-blue-800',
      'Analytics Specialist': 'bg-green-100 text-green-800',
      'Developer': 'bg-indigo-100 text-indigo-800',
      'Viewer': 'bg-gray-100 text-gray-800'
    };
    return colors[roleName as keyof typeof colors] || colors.Viewer;
  };

  const formatDate = (date: Date) => {
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    return date.toLocaleDateString();
  };

  const toggleUserSelection = (userId: string) => {
    const newSelected = new Set(selectedUsers);
    if (newSelected.has(userId)) {
      newSelected.delete(userId);
    } else {
      newSelected.add(userId);
    }
    setSelectedUsers(newSelected);
  };

  const toggleSelectAll = () => {
    if (selectedUsers.size === filteredUsers.length) {
      setSelectedUsers(new Set());
    } else {
      setSelectedUsers(new Set(filteredUsers.map(u => u.id)));
    }
  };

  const activateUsers = () => {
    setUsers(prev => prev.map(user => 
      selectedUsers.has(user.id) ? { ...user, status: 'active' as const } : user
    ));
    setSelectedUsers(new Set());
  };

  const deactivateUsers = () => {
    setUsers(prev => prev.map(user => 
      selectedUsers.has(user.id) ? { ...user, status: 'inactive' as const } : user
    ));
    setSelectedUsers(new Set());
  };

  const deleteUsers = () => {
    setUsers(prev => prev.filter(user => !selectedUsers.has(user.id)));
    setSelectedUsers(new Set());
  };

  const resetPassword = (userId: string) => {
    // Simulate password reset
    console.log(`Password reset requested for user: ${userId}`);
  };

  const enableTwoFactor = (userId: string) => {
    setUsers(prev => prev.map(user => 
      user.id === userId ? { ...user, twoFactorEnabled: true } : user
    ));
  };

  const disableTwoFactor = (userId: string) => {
    setUsers(prev => prev.map(user => 
      user.id === userId ? { ...user, twoFactorEnabled: false } : user
    ));
  };

  return (
    <>
      <Head>
        <title>User Management - Zion App</title>
        <meta name="description" content="Advanced user management system with role-based access control" />
      
        <meta property="og:title" content="👥 User Management" />
        <meta property="og:description" content="👥 User Management — automatically suggested description." />
        <meta name="twitter:card" content="summary_large_image" /></Head>

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">👥 User Management</h1>
              <p className="mt-2 text-gray-600">Manage users, roles, and permissions across the system</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Total Users:</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                  {users.length}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Active:</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                  {users.filter(u => u.status === 'active').length}
                </span>
              </div>
              <button
                onClick={() => {/* TODO: Implement create user modal */}}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Add User
              </button>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="mb-6">
            <nav className="flex space-x-8">
              {[
                { id: 'users', label: 'Users', count: users.length },
                { id: 'roles', label: 'Roles', count: roles.length },
                { id: 'permissions', label: 'Permissions', count: permissions.length }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setCurrentView(tab.id as any)}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    currentView === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.label}
                  <span className="ml-2 bg-gray-100 text-gray-900 py-0.5 px-2.5 rounded-full text-xs">
                    {tab.count}
                  </span>
                </button>
              ))}
            </nav>
          </div>

          {/* Users View */}
          {currentView === 'users' && (
            <>
              {/* Controls */}
              <div className="bg-white rounded-lg shadow p-6 mb-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => setShowFilters(!showFilters)}
                      className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      {showFilters ? 'Hide' : 'Show'} Filters
                    </button>
                    
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-600">Sort by:</span>
                      <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value as any)}
                        className="border border-gray-300 rounded-md px-3 py-2 text-sm"
                      >
                        <option value="username">Username</option>
                        <option value="role">Role</option>
                        <option value="status">Status</option>
                        <option value="lastLogin">Last Login</option>
                        <option value="createdAt">Created</option>
                      </select>
                      <button
                        onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                        className="p-2 border border-gray-300 rounded hover:bg-gray-50"
                      >
                        {sortOrder === 'asc' ? '↑' : '↓'}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    {selectedUsers.size > 0 && (
                      <>
                        <button
                          onClick={activateUsers}
                          className="px-3 py-1 text-sm bg-green-100 text-green-800 rounded hover:bg-green-200 transition-colors"
                        >
                          Activate ({selectedUsers.size})
                        </button>
                        <button
                          onClick={deactivateUsers}
                          className="px-3 py-1 text-sm bg-yellow-100 text-yellow-800 rounded hover:bg-yellow-200 transition-colors"
                        >
                          Deactivate ({selectedUsers.size})
                        </button>
                        <button
                          onClick={deleteUsers}
                          className="px-3 py-1 text-sm bg-red-100 text-red-800 rounded hover:bg-red-200 transition-colors"
                        >
                          Delete ({selectedUsers.size})
                        </button>
                      </>
                    )}
                  </div>
                </div>

                {/* Filters */}
                {showFilters && (
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {/* Search */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
                        <input
                          type="text"
                          value={filters.search}
                          onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))}
                          placeholder="Search users..."
                          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                        />
                      </div>

                      {/* Role Filter */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
                        <select
                          multiple
                          value={filters.role}
                          onChange={(e) => {
                            const selected = Array.from(e.target.selectedOptions, option => option.value);
                            setFilters(prev => ({ ...prev, role: selected }));
                          }}
                          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                        >
                          {roles.map(role => (
                            <option key={role.id} value={role.name}>{role.name}</option>
                          ))}
                        </select>
                      </div>

                      {/* Status Filter */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                        <select
                          multiple
                          value={filters.status}
                          onChange={(e) => {
                            const selected = Array.from(e.target.selectedOptions, option => option.value);
                            setFilters(prev => ({ ...prev, status: selected }));
                          }}
                          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                        >
                          <option value="active">Active</option>
                          <option value="inactive">Inactive</option>
                          <option value="suspended">Suspended</option>
                          <option value="pending">Pending</option>
                        </select>
                      </div>

                      {/* Department Filter */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
                        <select
                          multiple
                          value={filters.department}
                          onChange={(e) => {
                            const selected = Array.from(e.target.selectedOptions, option => option.value);
                            setFilters(prev => ({ ...prev, department: selected }));
                          }}
                          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                        >
                          <option value="IT">IT</option>
                          <option value="Content">Content</option>
                          <option value="Analytics">Analytics</option>
                          <option value="Engineering">Engineering</option>
                          <option value="Design">Design</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Users Table */}
              <div className="bg-white rounded-lg shadow">
                <div className="px-6 py-4 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedUsers.size === filteredUsers.length && filteredUsers.length > 0}
                          onChange={toggleSelectAll}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">Select All</span>
                      </label>
                      
                      {selectedUsers.size > 0 && (
                        <span className="text-sm text-gray-600">
                          {selectedUsers.size} selected
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          User
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Role
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Last Login
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Security
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {sortedUsers.map((user) => (
                        <tr key={user.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <input
                                type="checkbox"
                                checked={selectedUsers.has(user.id)}
                                onChange={() => toggleUserSelection(user.id)}
                                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 mr-3"
                              />
                              <div className="flex-shrink-0 h-10 w-10">
                                <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center text-lg">
                                  {user.avatar}
                                </div>
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">
                                  {user.firstName} {user.lastName}
                                </div>
                                <div className="text-sm text-gray-500">{user.username}</div>
                                <div className="text-sm text-gray-500">{user.email}</div>
                                {user.department && (
                                  <div className="text-xs text-gray-400">{user.department}</div>
                                )}
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${getRoleColor(user.role.name)}`}>
                              {user.role.name}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(user.status)}`}>
                              {user.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {formatDate(user.lastLogin)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center space-x-2">
                              {user.twoFactorEnabled ? (
                                <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">
                                  2FA Enabled
                                </span>
                              ) : (
                                <span className="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded-full">
                                  2FA Disabled
                                </span>
                              )}
                              {user.loginAttempts > 0 && (
                                <span className="px-2 py-1 text-xs bg-red-100 text-red-800 rounded-full">
                                  {user.loginAttempts} attempts
                                </span>
                              )}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <div className="flex items-center space-x-2">
                              <button
                                onClick={() => {/* TODO: Implement edit user modal */}}
                                className="text-blue-600 hover:text-blue-900"
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => resetPassword(user.id)}
                                className="text-green-600 hover:text-green-900"
                              >
                                Reset Password
                              </button>
                              {user.twoFactorEnabled ? (
                                <button
                                  onClick={() => disableTwoFactor(user.id)}
                                  className="text-yellow-600 hover:text-yellow-900"
                                >
                                  Disable 2FA
                                </button>
                              ) : (
                                <button
                                  onClick={() => enableTwoFactor(user.id)}
                                  className="text-blue-600 hover:text-blue-900"
                                >
                                  Enable 2FA
                                </button>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}

          {/* Roles View */}
          {currentView === 'roles' && (
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium text-gray-900">System Roles</h3>
                  <button
                    onClick={() => {/* TODO: Implement create role modal */}}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Create Role
                  </button>
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Role
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Description
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Users
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Type
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {roles.map((role) => (
                      <tr key={role.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{role.name}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">{role.description}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
                            {role.userCount} users
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            role.isSystem ? 'bg-purple-100 text-purple-800' : 'bg-gray-100 text-gray-800'
                          }`}>
                            {role.isSystem ? 'System' : 'Custom'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => {/* TODO: Implement edit role modal */}}
                              className="text-blue-600 hover:text-blue-900"
                            >
                              Edit
                            </button>
                            {!role.isSystem && (
                              <button className="text-red-600 hover:text-red-900">
                                Delete
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Permissions View */}
          {currentView === 'permissions' && (
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">System Permissions</h3>
              </div>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Permission
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Description
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Category
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Resource
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {permissions.map((permission) => (
                      <tr key={permission.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{permission.name}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">{permission.description}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded-full">
                            {permission.category}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{permission.resource}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
                            {permission.action}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default UserManagement;