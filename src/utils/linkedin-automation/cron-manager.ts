import { LinkedInConfig } from './types';
import { LINKEDIN_CONFIG } from './config';

export interface LinkedInTask {
  id: string;
  type: 'post' | 'connect' | 'message' | 'like' | 'comment';
  status: 'pending' | 'running' | 'completed' | 'failed';
  data: any;
  createdAt: Date;
  scheduledFor: Date;
  retryCount: number;
  maxRetries: number;
}

export interface LinkedInCronManagerConfig {
  checkInterval: number;
  maxConcurrentTasks: number;
  retryDelay: number;
}

export class LinkedInCronManager {
  private tasks: Map<string, LinkedInTask>;
  private isRunning: boolean = false;
  private config: LinkedInCronManagerConfig;

  constructor(config?: Partial<LinkedInCronManagerConfig>) {
    this.tasks = new Map();
    this.config = {
      checkInterval: 60000, // 1 minute
      maxConcurrentTasks: 5,
      retryDelay: 300000, // 5 minutes
      ...config
    };
  }

  async start() {
    if (this.isRunning) {
      console.log('LinkedIn cron manager is already running');
      return;
    }

    this.isRunning = true;
    console.log('Starting LinkedIn cron manager...');
    this.processTasks();
  }

  async stop() {
    this.isRunning = false;
    console.log('LinkedIn cron manager stopped');
  }

  addTask(task: Omit<LinkedInTask, 'id' | 'status' | 'createdAt'>): string {
    const id = `task_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const newTask: LinkedInTask = {
      ...task,
      id,
      status: 'pending',
      createdAt: new Date()
    };
    
    this.tasks.set(id, newTask);
    console.log(`Added LinkedIn task: ${id}`);
    return id;
  }

  removeTask(taskId: string): boolean {
    return this.tasks.delete(taskId);
  }

  getTask(taskId: string): LinkedInTask | undefined {
    return this.tasks.get(taskId);
  }

  getTasks(): Array<[string, LinkedInTask]> {
    return Array.from(this.tasks.entries());
  }

  getTaskCount(): number {
    return this.tasks.size;
  }

  private async processTasks() {
    while (this.isRunning) {
      try {
        // Convert Map to Array for iteration to avoid TypeScript issues
        const taskEntries = Array.from(this.tasks.entries());
        
        for (const [taskId, task] of taskEntries) {
          if (task.status === 'pending' && this.shouldRunTask(task)) {
            await this.executeTask(taskId, task);
          }
        }

        // Wait before next iteration
        await this.delay(this.config.checkInterval);
      } catch (error) {
        console.error('Error processing LinkedIn tasks:', error);
        await this.delay(this.config.retryDelay);
      }
    }
  }

  private shouldRunTask(task: LinkedInTask): boolean {
    return task.scheduledFor <= new Date();
  }

  private async executeTask(taskId: string, task: LinkedInTask) {
    try {
      console.log(`Executing LinkedIn task: ${taskId}`);
      
      // Update task status to running
      task.status = 'running';
      this.tasks.set(taskId, task);

      // Simulate task execution
      await this.delay(2000);
      
      // Update task status to completed
      task.status = 'completed';
      this.tasks.set(taskId, task);
      
      console.log(`Completed LinkedIn task: ${taskId}`);
    } catch (error) {
      console.error(`Failed to execute LinkedIn task: ${taskId}`, error);
      
      // Handle retry logic
      if (task.retryCount < task.maxRetries) {
        task.retryCount++;
        task.status = 'pending';
        task.scheduledFor = new Date(Date.now() + this.config.retryDelay);
        this.tasks.set(taskId, task);
        console.log(`Scheduled retry for LinkedIn task: ${taskId}`);
      } else {
        task.status = 'failed';
        this.tasks.set(taskId, task);
        console.log(`LinkedIn task failed permanently: ${taskId}`);
      }
    }
  }

  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

// Create and export a default instance
const linkedInCronManager = new LinkedInCronManager();

export default linkedInCronManager; 