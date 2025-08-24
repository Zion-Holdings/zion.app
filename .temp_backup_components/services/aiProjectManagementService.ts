export interface Project {
  id: string;
  name: string;
  description: string;
  status: 'planning' | 'active' | 'on-hold' | 'completed' | 'cancelled';
  priority: 'low' | 'medium' | 'high' | 'critical';
  startDate: Date;
  endDate?: Date;
  budget: number;
  progress: number; // 0-100
  teamMembers: TeamMember[];
  tasks: Task[];
  milestones: Milestone[];
  risks: Risk[];
  createdAt: Date;
  updatedAt: Date;
}

export interface TeamMember {
  id: string;
  name: string;
  email: string;
  role: 'project_manager' | 'developer' | 'designer' | 'analyst' | 'tester' | 'stakeholder';
  avatar?: string;
  availability: number; // 0-100
  skills: string[];
  hourlyRate: number;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: 'todo' | 'in_progress' | 'review' | 'done';
  priority: 'low' | 'medium' | 'high' | 'critical';
  assigneeId: string;
  estimatedHours: number;
  actualHours: number;
  dueDate: Date;
  dependencies: string[]; // Task IDs
  tags: string[];
  attachments: Attachment[];
  comments: Comment[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Milestone {
  id: string;
  title: string;
  description: string;
  dueDate: Date;
  status: 'pending' | 'in_progress' | 'completed' | 'overdue';
  tasks: string[]; // Task IDs
  deliverables: string[];
}

export interface Risk {
  id: string;
  title: string;
  description: string;
  probability: 'low' | 'medium' | 'high';
  impact: 'low' | 'medium' | 'high';
  status: 'identified' | 'mitigated' | 'monitoring' | 'closed';
  mitigationStrategy: string;
  ownerId: string;
  dueDate: Date;
}

export interface Attachment {
  id: string;
  name: string;
  url: string;
  size: number;
  type: string;
  uploadedBy: string;
  uploadedAt: Date;
}

export interface Comment {
  id: string;
  content: string;
  authorId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProjectAnalytics {
  projectId: string;
  totalTasks: number;
  completedTasks: number;
  overdueTasks: number;
  teamProductivity: number; // 0-100
  budgetUtilization: number; // 0-100
  riskLevel: 'low' | 'medium' | 'high';
  estimatedCompletion: Date;
  burndownChart: BurndownData[];
}

export interface BurndownData {
  date: Date;
  remainingWork: number;
  idealWork: number;
}

export interface AIRecommendation {
  type: 'task_prioritization' | 'resource_allocation' | 'risk_mitigation' | 'schedule_optimization';
  title: string;
  description: string;
  impact: 'low' | 'medium' | 'high';
  confidence: number; // 0-100
  actionItems: string[];
}

class AIProjectManagementService {
  private projects: Project[] = [];
  private analytics: Map<string, ProjectAnalytics> = new Map();

  constructor() {
    this.initializeSampleData();
  }

  private initializeSampleData() {
    // Create a sample project
    const sampleProject: Project = {
      id: 'proj_sample_001',
      name: 'Website Redesign Project',
      description: 'Complete redesign of company website with modern UI/UX',
      status: 'active',
      priority: 'high',
      startDate: new Date('2025-01-01'),
      endDate: new Date('2025-03-31'),
      budget: 50000,
      progress: 35,
      teamMembers: [
        {
          id: 'member_001',
          name: 'John Smith',
          email: 'john.smith@company.com',
          role: 'project_manager',
          availability: 100,
          skills: ['Project Management', 'Agile', 'Scrum'],
          hourlyRate: 75
        },
        {
          id: 'member_002',
          name: 'Sarah Johnson',
          email: 'sarah.johnson@company.com',
          role: 'designer',
          availability: 80,
          skills: ['UI/UX Design', 'Figma', 'Adobe Creative Suite'],
          hourlyRate: 65
        }
      ],
      tasks: [
        {
          id: 'task_001',
          title: 'Design System Creation',
          description: 'Create comprehensive design system with components and guidelines',
          status: 'in_progress',
          priority: 'high',
          assigneeId: 'member_002',
          estimatedHours: 40,
          actualHours: 25,
          dueDate: new Date('2025-01-15'),
          dependencies: [],
          tags: ['design', 'system'],
          attachments: [],
          comments: [],
          createdAt: new Date('2025-01-01'),
          updatedAt: new Date('2025-01-10')
        }
      ],
      milestones: [
        {
          id: 'milestone_001',
          title: 'Design Phase Complete',
          description: 'All design assets and prototypes completed',
          dueDate: new Date('2025-01-31'),
          status: 'in_progress',
          tasks: ['task_001'],
          deliverables: ['Design System', 'Wireframes', 'Prototypes']
        }
      ],
      risks: [
        {
          id: 'risk_001',
          title: 'Design Approval Delays',
          description: 'Stakeholder feedback cycles may delay design approval',
          probability: 'medium',
          impact: 'high',
          status: 'identified',
          mitigationStrategy: 'Schedule stakeholder reviews early and set clear feedback deadlines',
          ownerId: 'member_001',
          dueDate: new Date('2025-01-20')
        }
      ],
      createdAt: new Date('2025-01-01'),
      updatedAt: new Date('2025-01-10')
    };

    this.projects.push(sampleProject);
    this.updateProjectAnalytics(sampleProject.id);
  }

  async createProject(projectData: Omit<Project, 'id' | 'progress' | 'tasks' | 'milestones' | 'risks' | 'createdAt' | 'updatedAt'>): Promise<Project> {
    const project: Project = {
      id: `proj_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      ...projectData,
      progress: 0,
      tasks: [],
      milestones: [],
      risks: [],
      createdAt: new Date(),
      updatedAt: new Date()
    };

    this.projects.push(project);
    this.updateProjectAnalytics(project.id);
    return project;
  }

  async updateProject(projectId: string, updates: Partial<Project>): Promise<Project | null> {
    const projectIndex = this.projects.findIndex(p => p.id === projectId);
    if (projectIndex === -1) return null;

    this.projects[projectIndex] = {
      ...this.projects[projectIndex],
      ...updates,
      updatedAt: new Date()
    };

    this.updateProjectAnalytics(projectId);
    return this.projects[projectIndex];
  }

  async addTask(projectId: string, taskData: Omit<Task, 'id' | 'status' | 'actualHours' | 'attachments' | 'comments' | 'createdAt' | 'updatedAt'>): Promise<Task | null> {
    const project = this.projects.find(p => p.id === projectId);
    if (!project) return null;

    const task: Task = {
      id: `task_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      ...taskData,
      status: 'todo',
      actualHours: 0,
      attachments: [],
      comments: [],
      createdAt: new Date(),
      updatedAt: new Date()
    };

    project.tasks.push(task);
    this.updateProjectAnalytics(projectId);
    return task;
  }

  async updateTaskStatus(taskId: string, status: Task['status']): Promise<void> {
    for (const project of this.projects) {
      const task = project.tasks.find(t => t.id === taskId);
      if (task) {
        task.status = status;
        task.updatedAt = new Date();
        this.updateProjectAnalytics(project.id);
        break;
      }
    }
  }

  async addTeamMember(projectId: string, memberData: Omit<TeamMember, 'id'>): Promise<TeamMember | null> {
    const project = this.projects.find(p => p.id === projectId);
    if (!project) return null;

    const member: TeamMember = {
      id: `member_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      ...memberData
    };

    project.teamMembers.push(member);
    this.updateProjectAnalytics(projectId);
    return member;
  }

  async createMilestone(projectId: string, milestoneData: Omit<Milestone, 'id' | 'status'>): Promise<Milestone | null> {
    const project = this.projects.find(p => p.id === projectId);
    if (!project) return null;

    const milestone: Milestone = {
      id: `milestone_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      ...milestoneData,
      status: 'pending'
    };

    project.milestones.push(milestone);
    this.updateProjectAnalytics(projectId);
    return milestone;
  }

  async addRisk(projectId: string, riskData: Omit<Risk, 'id' | 'status'>): Promise<Risk | null> {
    const project = this.projects.find(p => p.id === projectId);
    if (!project) return null;

    const risk: Risk = {
      id: `risk_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      ...riskData,
      status: 'identified'
    };

    project.risks.push(risk);
    this.updateProjectAnalytics(projectId);
    return risk;
  }

  private updateProjectAnalytics(projectId: string): void {
    const project = this.projects.find(p => p.id === projectId);
    if (!project) return;

    const totalTasks = project.tasks.length;
    const completedTasks = project.tasks.filter(t => t.status === 'done').length;
    const overdueTasks = project.tasks.filter(t => 
      t.dueDate < new Date() && t.status !== 'done'
    ).length;

    const teamProductivity = this.calculateTeamProductivity(project);
    const budgetUtilization = this.calculateBudgetUtilization(project);
    const riskLevel = this.calculateRiskLevel(project);
    const estimatedCompletion = this.estimateProjectCompletion(project);

    const analytics: ProjectAnalytics = {
      projectId,
      totalTasks,
      completedTasks,
      overdueTasks,
      teamProductivity,
      budgetUtilization,
      riskLevel,
      estimatedCompletion,
      burndownChart: this.generateBurndownChart(project)
    };

    this.analytics.set(projectId, analytics);
  }

  private calculateTeamProductivity(project: Project): number {
    if (project.tasks.length === 0) return 100;

    const totalEstimatedHours = project.tasks.reduce((sum, task) => sum + task.estimatedHours, 0);
    const totalActualHours = project.tasks.reduce((sum, task) => sum + task.actualHours, 0);

    if (totalEstimatedHours === 0) return 100;
    
    const efficiency = (totalEstimatedHours / totalActualHours) * 100;
    return Math.min(Math.max(efficiency, 0), 100);
  }

  private calculateBudgetUtilization(project: Project): number {
    if (project.budget === 0) return 0;

    const totalSpent = project.tasks.reduce((sum, task) => {
      const assignee = project.teamMembers.find(m => m.id === task.assigneeId);
      return sum + (task.actualHours * (assignee?.hourlyRate || 0));
    }, 0);

    return Math.min((totalSpent / project.budget) * 100, 100);
  }

  private calculateRiskLevel(project: Project): 'low' | 'medium' | 'high' {
    const highRisks = project.risks.filter(r => 
      r.probability === 'high' && r.impact === 'high'
    ).length;

    const mediumRisks = project.risks.filter(r => 
      (r.probability === 'high' && r.impact === 'medium') ||
      (r.probability === 'medium' && r.impact === 'high')
    ).length;

    if (highRisks > 0) return 'high';
    if (mediumRisks > 2) return 'medium';
    return 'low';
  }

  private estimateProjectCompletion(project: Project): Date {
    if (project.progress === 100) return project.endDate || new Date();

    const remainingWork = 100 - project.progress;
    const daysElapsed = (new Date().getTime() - project.startDate.getTime()) / (1000 * 60 * 60 * 24);
    const progressPerDay = project.progress / daysElapsed;
    const daysRemaining = remainingWork / progressPerDay;

    const estimatedDate = new Date();
    estimatedDate.setDate(estimatedDate.getDate() + daysRemaining);

    return estimatedDate;
  }

  private generateBurndownChart(project: Project): BurndownData[] {
    const chart: BurndownData[] = [];
    const totalWork = project.tasks.length;
    
    // Generate data for the last 30 days
    for (let i = 30; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      
      const completedTasks = project.tasks.filter(t => 
        t.status === 'done' && t.updatedAt <= date
      ).length;
      
      const remainingWork = totalWork - completedTasks;
      const idealWork = totalWork - (totalWork * (i / 30));
      
      chart.push({
        date,
        remainingWork,
        idealWork: Math.max(idealWork, 0)
      });
    }
    
    return chart;
  }

  async getAIRecommendations(projectId: string): Promise<AIRecommendation[]> {
    const project = this.projects.find(p => p.id === projectId);
    if (!project) return [];

    const recommendations: AIRecommendation[] = [];

    // Task prioritization recommendation
    const highPriorityTasks = project.tasks.filter(t => t.priority === 'high' && t.status !== 'done');
    if (highPriorityTasks.length > 3) {
      recommendations.push({
        type: 'task_prioritization',
        title: 'High Priority Task Overload',
        description: 'Too many high priority tasks may lead to context switching and reduced productivity',
        impact: 'medium',
        confidence: 85,
        actionItems: [
          'Review and reprioritize tasks based on business impact',
          'Consider breaking down large tasks into smaller ones',
          'Reallocate team resources to focus on critical items'
        ]
      });
    }

    // Resource allocation recommendation
    const overworkedMembers = project.teamMembers.filter(m => m.availability < 50);
    if (overworkedMembers.length > 0) {
      recommendations.push({
        type: 'resource_allocation',
        title: 'Team Member Overload',
        description: 'Some team members have low availability which may impact project delivery',
        impact: 'high',
        confidence: 90,
        actionItems: [
          'Redistribute tasks to balance workload',
          'Consider bringing in additional resources',
          'Review and adjust project timeline'
        ]
      });
    }

    // Risk mitigation recommendation
    const highRisks = project.risks.filter(r => r.probability === 'high' && r.impact === 'high');
    if (highRisks.length > 0) {
      recommendations.push({
        type: 'risk_mitigation',
        title: 'Critical Risk Alert',
        description: 'High probability and impact risks require immediate attention',
        impact: 'high',
        confidence: 95,
        actionItems: [
          'Develop contingency plans for each high-risk item',
          'Assign risk owners and set mitigation deadlines',
          'Increase monitoring frequency for high-risk areas'
        ]
      });
    }

    return recommendations;
  }

  async getProject(projectId: string): Promise<Project | null> {
    return this.projects.find(p => p.id === projectId) || null;
  }

  async getProjects(): Promise<Project[]> {
    return this.projects;
  }

  async getProjectAnalytics(projectId: string): Promise<ProjectAnalytics | null> {
    return this.analytics.get(projectId) || null;
  }

  async deleteProject(projectId: string): Promise<boolean> {
    const projectIndex = this.projects.findIndex(p => p.id === projectId);
    if (projectIndex === -1) return false;

    this.projects.splice(projectIndex, 1);
    this.analytics.delete(projectId);
    return true;
  }
}

export const aiProjectManagementService = new AIProjectManagementService();