export interface Project {
  id: string;
  name: string;
  description: string;
  status: 'planning' | 'active' | 'on_hold' | 'completed' | 'cancelled';
  priority: 'low' | 'medium' | 'high' | 'critical';
  startDate: Date;
  endDate?: Date;
  dueDate?: Date;
  progress: number; // 0-100
  budget: number;
  actualCost: number;
  ownerId: string;
  teamMembers: string[];
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
  completedAt?: Date;
}

export interface Task {
  id: string;
  projectId: string;
  title: string;
  description: string;
  status: 'todo' | 'in_progress' | 'review' | 'done';
  priority: 'low' | 'medium' | 'high' | 'critical';
  assigneeId?: string;
  estimatedHours: number;
  actualHours: number;
  dueDate?: Date;
  completedAt?: Date;
  dependencies: string[]; // task IDs
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface TeamMember {
  id: string;
  name: string;
  email: string;
  role: 'member' | 'lead' | 'manager' | 'admin';
  avatar?: string;
  isActive: boolean;
  skills: string[];
  currentWorkload: number; // hours per week
  totalProjects: number;
  completedTasks: number;
  averageTaskCompletionTime: number; // in hours
  createdAt: Date;
  updatedAt: Date;
}

export interface ProjectTemplate {
  id: string;
  name: string;
  description: string;
  category: string;
  estimatedDuration: number; // in days
  estimatedBudget: number;
  defaultTasks: {
    title: string;
    description: string;
    estimatedHours: number;
    priority: 'low' | 'medium' | 'high' | 'critical';
  }[];
  tags: string[];
  isPublic: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProjectAnalytics {
  totalProjects: number;
  activeProjects: number;
  completedProjects: number;
  overdueProjects: number;
  totalTasks: number;
  completedTasks: number;
  overdueTasks: number;
  averageProjectDuration: number; // in days
  averageTaskCompletionTime: number; // in hours
  budgetUtilization: number; // percentage
  teamProductivity: {
    memberId: string;
    memberName: string;
    tasksCompleted: number;
    averageCompletionTime: number;
    workload: number;
  }[];
  projectTrends: {
    date: string;
    active: number;
    completed: number;
  }[];
}

export interface ProjectManagementServiceConfig {
  maxTeamMembers: number;
  maxProjects: number;
  maxTasksPerProject: number;
  timeTrackingEnabled: boolean;
  budgetTrackingEnabled: boolean;
  reportingEnabled: boolean;
}

class ProjectManagementService {
  private config: ProjectManagementServiceConfig;
  private projects: Project[] = [];
  private tasks: Task[] = [];
  private teamMembers: TeamMember[] = [];
  private projectTemplates: ProjectTemplate[] = [];

  constructor(config: ProjectManagementServiceConfig) {
    this.config = config;
    this.initializeMockData();
  }

  private initializeMockData(): void {
    // Initialize mock team members
    this.teamMembers = [
      {
        id: '1',
        name: 'Alex Thompson',
        email: 'alex.thompson@zion.app',
        role: 'manager',
        isActive: true,
        skills: ['project management', 'agile', 'scrum', 'leadership'],
        currentWorkload: 35,
        totalProjects: 8,
        completedTasks: 156,
        averageTaskCompletionTime: 8.5,
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date()
      },
      {
        id: '2',
        name: 'Maria Garcia',
        email: 'maria.garcia@zion.app',
        role: 'lead',
        isActive: true,
        skills: ['frontend development', 'react', 'typescript', 'ui/ux'],
        currentWorkload: 32,
        totalProjects: 6,
        completedTasks: 89,
        averageTaskCompletionTime: 6.2,
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date()
      },
      {
        id: '3',
        name: 'David Kim',
        email: 'david.kim@zion.app',
        role: 'member',
        isActive: true,
        skills: ['backend development', 'node.js', 'python', 'databases'],
        currentWorkload: 28,
        totalProjects: 4,
        completedTasks: 67,
        averageTaskCompletionTime: 7.8,
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date()
      }
    ];

    // Initialize mock project templates
    this.projectTemplates = [
      {
        id: '1',
        name: 'Web Application Development',
        description: 'Standard template for building web applications',
        category: 'Development',
        estimatedDuration: 45,
        estimatedBudget: 25000,
        defaultTasks: [
          {
            title: 'Project Planning & Requirements',
            description: 'Define project scope, requirements, and timeline',
            estimatedHours: 16,
            priority: 'high'
          },
          {
            title: 'UI/UX Design',
            description: 'Create wireframes and design mockups',
            estimatedHours: 24,
            priority: 'high'
          },
          {
            title: 'Frontend Development',
            description: 'Build user interface components',
            estimatedHours: 80,
            priority: 'medium'
          },
          {
            title: 'Backend Development',
            description: 'Develop API and business logic',
            estimatedHours: 120,
            priority: 'medium'
          },
          {
            title: 'Testing & QA',
            description: 'Perform testing and quality assurance',
            estimatedHours: 40,
            priority: 'medium'
          },
          {
            title: 'Deployment & Launch',
            description: 'Deploy to production and launch',
            estimatedHours: 16,
            priority: 'high'
          }
        ],
        tags: ['web', 'development', 'full-stack'],
        isPublic: true,
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date()
      },
      {
        id: '2',
        name: 'Mobile App Development',
        description: 'Template for iOS and Android app development',
        category: 'Development',
        estimatedDuration: 60,
        estimatedBudget: 35000,
        defaultTasks: [
          {
            title: 'Market Research',
            description: 'Research target market and competition',
            estimatedHours: 20,
            priority: 'high'
          },
          {
            title: 'App Design',
            description: 'Create app wireframes and visual design',
            estimatedHours: 32,
            priority: 'high'
          },
          {
            title: 'iOS Development',
            description: 'Build iOS app using Swift/SwiftUI',
            estimatedHours: 120,
            priority: 'medium'
          },
          {
            title: 'Android Development',
            description: 'Build Android app using Kotlin/Java',
            estimatedHours: 120,
            priority: 'medium'
          },
          {
            title: 'Testing & Beta',
            description: 'Perform testing and beta release',
            estimatedHours: 48,
            priority: 'medium'
          },
          {
            title: 'App Store Submission',
            description: 'Submit to App Store and Google Play',
            estimatedHours: 16,
            priority: 'high'
          }
        ],
        tags: ['mobile', 'ios', 'android', 'development'],
        isPublic: true,
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date()
      }
    ];
  }

  async createProject(
    name: string,
    description: string,
    ownerId: string,
    startDate: Date,
    dueDate?: Date,
    budget?: number,
    priority: 'low' | 'medium' | 'high' | 'critical' = 'medium',
    tags: string[] = []
  ): Promise<Project> {
    const owner = this.teamMembers.find(m => m.id === ownerId);
    if (!owner) {
      throw new Error('Team member not found');
    }

    const project: Project = {
      id: this.generateId(),
      name,
      description,
      status: 'planning',
      priority,
      startDate,
      dueDate,
      progress: 0,
      budget: budget || 0,
      actualCost: 0,
      ownerId,
      teamMembers: [ownerId],
      tags,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    this.projects.push(project);
    
    // Update team member stats
    owner.totalProjects++;
    owner.updatedAt = new Date();

    return project;
  }

  async createProjectFromTemplate(
    templateId: string,
    name: string,
    description: string,
    ownerId: string,
    startDate: Date,
    dueDate?: Date,
    budget?: number,
    priority: 'low' | 'medium' | 'high' | 'critical' = 'medium',
    tags: string[] = []
  ): Promise<{ project: Project; tasks: Task[] }> {
    const template = this.projectTemplates.find(t => t.id === templateId);
    if (!template) {
      throw new Error('Project template not found');
    }

    const project = await this.createProject(
      name,
      description,
      ownerId,
      startDate,
      dueDate,
      budget || template.estimatedBudget,
      priority,
      [...tags, ...template.tags]
    );

    // Create tasks from template
    const tasks: Task[] = [];
    for (const templateTask of template.defaultTasks) {
      const task = await this.createTask(
        project.id,
        templateTask.title,
        templateTask.description,
        templateTask.estimatedHours,
        templateTask.priority,
        [templateTask.title.toLowerCase().replace(/\s+/g, '-')]
      );
      tasks.push(task);
    }

    return { project, tasks };
  }

  async createTask(
    projectId: string,
    title: string,
    description: string,
    estimatedHours: number,
    priority: 'low' | 'medium' | 'high' | 'critical' = 'medium',
    tags: string[] = []
  ): Promise<Task> {
    const project = this.projects.find(p => p.id === projectId);
    if (!project) {
      throw new Error('Project not found');
    }

    const task: Task = {
      id: this.generateId(),
      projectId,
      title,
      description,
      status: 'todo',
      priority,
      estimatedHours,
      actualHours: 0,
      dependencies: [],
      tags,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    this.tasks.push(task);
    return task;
  }

  async assignTask(taskId: string, assigneeId: string): Promise<void> {
    const task = this.tasks.find(t => t.id === taskId);
    const assignee = this.teamMembers.find(m => m.id === assigneeId);

    if (!task) {
      throw new Error('Task not found');
    }

    if (!assignee) {
      throw new Error('Team member not found');
    }

    if (!assignee.isActive) {
      throw new Error('Team member is not active');
    }

    task.assigneeId = assigneeId;
    task.updatedAt = new Date();
  }

  async updateTaskStatus(taskId: string, status: Task['status']): Promise<void> {
    const task = this.tasks.find(t => t.id === taskId);
    if (!task) {
      throw new Error('Task not found');
    }

    const previousStatus = task.status;
    task.status = status;
    task.updatedAt = new Date();

    if (status === 'done' && previousStatus !== 'done') {
      task.completedAt = new Date();
      
      // Update team member stats
      if (task.assigneeId) {
        const assignee = this.teamMembers.find(m => m.id === task.assigneeId);
        if (assignee) {
          assignee.completedTasks++;
          assignee.averageTaskCompletionTime = this.calculateAverageTaskCompletionTime(assignee);
          assignee.updatedAt = new Date();
        }
      }

      // Update project progress
      await this.updateProjectProgress(task.projectId);
    }
  }

  async updateTaskProgress(taskId: string, actualHours: number): Promise<void> {
    const task = this.tasks.find(t => t.id === taskId);
    if (!task) {
      throw new Error('Task not found');
    }

    task.actualHours = actualHours;
    task.updatedAt = new Date();

    // Update project progress
    await this.updateProjectProgress(task.projectId);
  }

  private async updateProjectProgress(projectId: string): Promise<void> {
    const project = this.projects.find(p => p.id === projectId);
    if (!project) return;

    const projectTasks = this.tasks.filter(t => t.projectId === projectId);
    if (projectTasks.length === 0) return;

    const completedTasks = projectTasks.filter(t => t.status === 'done');
    const totalEstimatedHours = projectTasks.reduce((sum, t) => sum + t.estimatedHours, 0);
    const completedEstimatedHours = completedTasks.reduce((sum, t) => sum + t.estimatedHours, 0);

    project.progress = totalEstimatedHours > 0 ? Math.round((completedEstimatedHours / totalEstimatedHours) * 100) : 0;
    
    if (project.progress === 100 && project.status !== 'completed') {
      project.status = 'completed';
      project.completedAt = new Date();
    }

    project.updatedAt = new Date();
  }

  async addTeamMemberToProject(projectId: string, memberId: string): Promise<void> {
    const project = this.projects.find(p => p.id === projectId);
    const member = this.teamMembers.find(m => m.id === memberId);

    if (!project) {
      throw new Error('Project not found');
    }

    if (!member) {
      throw new Error('Team member not found');
    }

    if (!member.isActive) {
      throw new Error('Team member is not active');
    }

    if (project.teamMembers.includes(memberId)) {
      throw new Error('Team member already assigned to project');
    }

    if (project.teamMembers.length >= this.config.maxTeamMembers) {
      throw new Error('Project has reached maximum team size');
    }

    project.teamMembers.push(memberId);
    project.updatedAt = new Date();
  }

  async removeTeamMemberFromProject(projectId: string, memberId: string): Promise<void> {
    const project = this.projects.find(p => p.id === projectId);
    if (!project) {
      throw new Error('Project not found');
    }

    const memberIndex = project.teamMembers.indexOf(memberId);
    if (memberIndex === -1) {
      throw new Error('Team member not assigned to project');
    }

    // Check if member is the project owner
    if (project.ownerId === memberId) {
      throw new Error('Cannot remove project owner');
    }

    project.teamMembers.splice(memberIndex, 1);
    project.updatedAt = new Date();
  }

  async updateProjectStatus(projectId: string, status: Project['status']): Promise<void> {
    const project = this.projects.find(p => p.id === projectId);
    if (!project) {
      throw new Error('Project not found');
    }

    project.status = status;
    project.updatedAt = new Date();

    if (status === 'completed' && !project.completedAt) {
      project.completedAt = new Date();
      project.progress = 100;
    }
  }

  async getAnalytics(startDate?: Date, endDate?: Date): Promise<ProjectAnalytics> {
    let filteredProjects = this.projects;
    let filteredTasks = this.tasks;
    
    if (startDate) {
      filteredProjects = filteredProjects.filter(p => p.createdAt >= startDate);
      filteredTasks = filteredTasks.filter(t => t.createdAt >= startDate);
    }
    
    if (endDate) {
      filteredProjects = filteredProjects.filter(p => p.createdAt <= endDate);
      filteredTasks = filteredTasks.filter(t => t.createdAt <= endDate);
    }

    const totalProjects = filteredProjects.length;
    const activeProjects = filteredProjects.filter(p => p.status === 'active').length;
    const completedProjects = filteredProjects.filter(p => p.status === 'completed').length;
    const overdueProjects = filteredProjects.filter(p => 
      p.dueDate && p.dueDate < new Date() && p.status !== 'completed'
    ).length;

    const totalTasks = filteredTasks.length;
    const completedTasks = filteredTasks.filter(t => t.status === 'done').length;
    const overdueTasks = filteredTasks.filter(t => 
      t.dueDate && t.dueDate < new Date() && t.status !== 'done'
    ).length;

    const completedProjectsWithDuration = filteredProjects.filter(p => 
      p.status === 'completed' && p.completedAt
    );
    const averageProjectDuration = completedProjectsWithDuration.length > 0
      ? completedProjectsWithDuration.reduce((sum, p) => 
          sum + (p.completedAt!.getTime() - p.startDate.getTime()) / (1000 * 60 * 60 * 24), 0
        ) / completedProjectsWithDuration.length
      : 0;

    const completedTasksWithTime = filteredTasks.filter(t => 
      t.status === 'done' && t.actualHours > 0
    );
    const averageTaskCompletionTime = completedTasksWithTime.length > 0
      ? completedTasksWithTime.reduce((sum, t) => sum + t.actualHours, 0) / completedTasksWithTime.length
      : 0;

    const budgetUtilization = filteredProjects.reduce((sum, p) => sum + p.budget, 0) > 0
      ? (filteredProjects.reduce((sum, p) => sum + p.actualCost, 0) / 
         filteredProjects.reduce((sum, p) => sum + p.budget, 0)) * 100
      : 0;

    const teamProductivity = this.getTeamProductivity(filteredTasks);
    const projectTrends = this.generateProjectTrends(filteredProjects);

    return {
      totalProjects,
      activeProjects,
      completedProjects,
      overdueProjects,
      totalTasks,
      completedTasks,
      overdueTasks,
      averageProjectDuration: Math.round(averageProjectDuration * 10) / 10,
      averageTaskCompletionTime: Math.round(averageTaskCompletionTime * 10) / 10,
      budgetUtilization: Math.round(budgetUtilization * 10) / 10,
      teamProductivity,
      projectTrends
    };
  }

  private getTeamProductivity(tasks: Task[]): { memberId: string; memberName: string; tasksCompleted: number; averageCompletionTime: number; workload: number }[] {
    const memberMap = new Map();
    
    tasks.forEach(task => {
      if (task.assigneeId && task.status === 'done') {
        if (!memberMap.has(task.assigneeId)) {
          memberMap.set(task.assigneeId, { tasks: [], totalTime: 0 });
        }
        
        const member = memberMap.get(task.assigneeId);
        member.tasks.push(task);
        if (task.actualHours > 0) {
          member.totalTime += task.actualHours;
        }
      }
    });
    
    return Array.from(memberMap.entries()).map(([memberId, data]: [string, any]) => {
      const teamMember = this.teamMembers.find(m => m.id === memberId);
      return {
        memberId,
        memberName: teamMember?.name || 'Unknown Member',
        tasksCompleted: data.tasks.length,
        averageCompletionTime: data.tasks.length > 0 ? Math.round(data.totalTime / data.tasks.length * 10) / 10 : 0,
        workload: teamMember?.currentWorkload || 0
      };
    }).sort((a, b) => b.tasksCompleted - a.tasksCompleted);
  }

  private generateProjectTrends(projects: Project[]): { date: string; active: number; completed: number }[] {
    const trends = [];
    const today = new Date();
    
    for (let i = 30; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      const dateStr = date.toISOString().split('T')[0];
      
      const dayProjects = projects.filter(p => 
        p.createdAt.toISOString().split('T')[0] === dateStr
      );
      
      const active = dayProjects.filter(p => p.status === 'active').length;
      const completed = dayProjects.filter(p => 
        p.completedAt && p.completedAt.toISOString().split('T')[0] === dateStr
      ).length;
      
      trends.push({ date: dateStr, active, completed });
    }
    
    return trends;
  }

  async getProjects(status?: string, priority?: string, ownerId?: string): Promise<Project[]> {
    let filteredProjects = [...this.projects];
    
    if (status) {
      filteredProjects = filteredProjects.filter(p => p.status === status);
    }
    
    if (priority) {
      filteredProjects = filteredProjects.filter(p => p.priority === priority);
    }
    
    if (ownerId) {
      filteredProjects = filteredProjects.filter(p => p.ownerId === ownerId);
    }
    
    return filteredProjects.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  async getTasks(projectId?: string, status?: string, assigneeId?: string): Promise<Task[]> {
    let filteredTasks = [...this.tasks];
    
    if (projectId) {
      filteredTasks = filteredTasks.filter(t => t.projectId === projectId);
    }
    
    if (status) {
      filteredTasks = filteredTasks.filter(t => t.status === status);
    }
    
    if (assigneeId) {
      filteredTasks = filteredTasks.filter(t => t.assigneeId === assigneeId);
    }
    
    return filteredTasks.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  async getTeamMembers(): Promise<TeamMember[]> {
    return [...this.teamMembers];
  }

  async getProjectTemplates(category?: string): Promise<ProjectTemplate[]> {
    let filteredTemplates = this.projectTemplates.filter(t => t.isPublic);
    
    if (category) {
      filteredTemplates = filteredTemplates.filter(t => t.category === category);
    }
    
    return filteredTemplates;
  }

  async createProjectTemplate(
    name: string,
    description: string,
    category: string,
    estimatedDuration: number,
    estimatedBudget: number,
    defaultTasks: any[],
    tags: string[],
    authorId: string
  ): Promise<ProjectTemplate> {
    const template: ProjectTemplate = {
      id: this.generateId(),
      name,
      description,
      category,
      estimatedDuration,
      estimatedBudget,
      defaultTasks,
      tags,
      isPublic: false,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    this.projectTemplates.push(template);
    return template;
  }

  private calculateAverageTaskCompletionTime(member: TeamMember): number {
    const memberTasks = this.tasks.filter(t => 
      t.assigneeId === member.id && t.status === 'done' && t.actualHours > 0
    );
    
    if (memberTasks.length === 0) return 0;
    
    const totalTime = memberTasks.reduce((sum, t) => sum + t.actualHours, 0);
    return Math.round(totalTime / memberTasks.length * 10) / 10;
  }

  private generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }
}

export default ProjectManagementService;