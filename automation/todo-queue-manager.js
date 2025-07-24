
/**
 * Todo and Queue Manager
 * 
 * Comprehensive management system for todos and queues:
 * - Priority-based todo management
 * - Queue processing and scheduling
 * - Integration with project management tools
 * - Automated task assignment and tracking
 * - Progress monitoring and reporting
 */

const fs = require('fs').promises;
const path = require('path');
const EventEmitter = require('events');

class TodoQueueManager extends EventEmitter {
  constructor(config = {}) {
    super();
    this.config = {
      dataDir: config.dataDir || './data',
      todoFile: config.todoFile || './data/todos.json',
      queueFile: config.queueFile || './data/queue.json',
      projectsFile: config.projectsFile || './data/projects.json',
      autoAssign: config.autoAssign !== false,
      autoPrioritize: config.autoPrioritize !== false,
      maxQueueSize: config.maxQueueSize || 200,
      maxTodosPerProject: config.maxTodosPerProject || 50,
      ...config
    };
    
    this.isRunning = false;
    this.todos = new Map();
    this.queue = [];
    this.projects = new Map();
    this.assignees = new Set();
    this.categories = new Set();
  }

  async initialize() {
    console.log('📋 Initializing Todo and Queue Manager...');
    
    try {
      // Ensure data directory exists
      await this.ensureDataDirectory();
      
      // Load existing data
      await this.loadData();
      
      // Start processing
      this.startProcessing();
      
      this.isRunning = true;
      console.log('✅ Todo and Queue Manager initialized');
      
    } catch (error) {
      console.error('❌ Failed to initialize Todo and Queue Manager:', error);
      throw error;
    }
  }

  async ensureDataDirectory() {
    try {
      await fs.mkdir(this.config.dataDir, { recursive: true });
    } catch (error) {
      console.error('Error creating data directory:', error);
    }
  }

  async loadData() {
    try {
      // Load todos
      try {
        const todoData = await fs.readFile(this.config.todoFile, 'utf8');
        const todos = JSON.parse(todoData);
        this.todos = new Map(Object.entries(todos));
        console.log(`📝 Loaded ${this.todos.size} todos`);
      } catch (error) {
        console.log('No existing todos found, starting fresh');
      }

      // Load queue
      try {
        const queueData = await fs.readFile(this.config.queueFile, 'utf8');
        this.queue = JSON.parse(queueData);
        console.log(`📋 Loaded ${this.queue.length} queue items`);
      } catch (error) {
        console.log('No existing queue found, starting fresh');
      }

      // Load projects
      try {
        const projectsData = await fs.readFile(this.config.projectsFile, 'utf8');
        const projects = JSON.parse(projectsData);
        this.projects = new Map(Object.entries(projects));
        console.log(`📁 Loaded ${this.projects.size} projects`);
      } catch (error) {
        console.log('No existing projects found, starting fresh');
      }

      // Extract assignees and categories
      this.extractMetadata();

    } catch (error) {
      console.error('Error loading data:', error);
    }
  }

  extractMetadata() {
    // Extract assignees from todos
    for (const [id, todo] of this.todos) {
      if (todo.assignee) {
        this.assignees.add(todo.assignee);
      }
      if (todo.category) {
        this.categories.add(todo.category);
      }
    }

    // Extract categories from queue
    for (const item of this.queue) {
      if (item.category) {
        this.categories.add(item.category);
      }
    }
  }

  startProcessing() {
    console.log('🔄 Starting todo and queue processing...');
    
    // Process queue items
    setInterval(async () => {
      if (this.isRunning) {
        await this.processQueue();
      }
    }, 30000); // Every 30 seconds

    // Update priorities
    setInterval(async () => {
      if (this.isRunning) {
        await this.updatePriorities();
      }
    }, 300000); // Every 5 minutes

    // Generate reports
    setInterval(async () => {
      if (this.isRunning) {
        await this.generateReport();
      }
    }, 1800000); // Every 30 minutes

    // Cleanup completed items
    setInterval(async () => {
      if (this.isRunning) {
        await this.cleanupCompleted();
      }
    }, 3600000); // Every hour
  }

  async addTodo(todoData) {
    const todo = {
      id: this.generateId(),
      title: todoData.title || 'Untitled Todo',
      description: todoData.description || '',
      priority: todoData.priority || 'medium',
      category: todoData.category || 'general',
      project: todoData.project || 'default',
      assignee: todoData.assignee || null,
      status: 'pending',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      dueDate: todoData.dueDate || null,
      tags: todoData.tags || [],
      source: todoData.source || 'manual',
      chatId: todoData.chatId || null,
      ...todoData
    };

    // Auto-assign if enabled
    if (this.config.autoAssign && !todo.assignee) {
      todo.assignee = this.getOptimalAssignee(todo);
    }

    // Auto-prioritize if enabled
    if (this.config.autoPrioritize) {
      todo.priority = this.calculatePriority(todo);
    }

    this.todos.set(todo.id, todo);
    await this.saveTodos();

    console.log(`✅ Created todo: ${todo.title} (${todo.priority})`);
    this.emit('todoCreated', todo);

    return todo;
  }

  async addToQueue(itemData) {
    const item = {
      id: this.generateId(),
      title: itemData.title || 'Untitled Queue Item',
      description: itemData.description || '',
      type: itemData.type || 'task',
      category: itemData.category || 'general',
      project: itemData.project || 'default',
      priority: itemData.priority || 'medium',
      status: 'queued',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      source: itemData.source || 'manual',
      chatId: itemData.chatId || null,
      dependencies: itemData.dependencies || [],
      estimatedTime: itemData.estimatedTime || null,
      ...itemData
    };

    // Check queue size limit
    if (this.queue.length >= this.config.maxQueueSize) {
      console.warn('⚠️ Queue is full, removing lowest priority item');
      this.removeLowestPriorityItem();
    }

    this.queue.push(item);
    await this.saveQueue();

    console.log(`📋 Added to queue: ${item.title} (${item.type})`);
    this.emit('itemQueued', item);

    return item;
  }

  async processQueue() {
    if (this.queue.length === 0) return;

    console.log(`🔄 Processing ${this.queue.length} items in queue...`);

    // Sort by priority and creation time
    this.queue.sort((a, b) => {
      const priorityOrder = { critical: 0, high: 1, medium: 2, low: 3 };
      const aPriority = priorityOrder[a.priority] || 2;
      const bPriority = priorityOrder[b.priority] || 2;

      if (aPriority !== bPriority) {
        return aPriority - bPriority;
      }

      return new Date(a.createdAt) - new Date(b.createdAt);
    });

    // Process top items (max 10 at a time)
    const itemsToProcess = this.queue.splice(0, 10);

    for (const item of itemsToProcess) {
      await this.processQueueItem(item);
    }

    await this.saveQueue();
  }

  async processQueueItem(item) {
    console.log(`⚡ Processing queue item: ${item.title}`);

    try {
      // Check dependencies
      if (item.dependencies.length > 0) {
        const unmetDependencies = item.dependencies.filter(depId => {
          const dep = this.todos.get(depId);
          return !dep || dep.status !== 'completed';
        });

        if (unmetDependencies.length > 0) {
          console.log(`⏳ Item ${item.title} has unmet dependencies, re-queuing`);
          item.status = 'blocked';
          this.queue.push(item);
          return;
        }
      }

      // Convert to todo if actionable
      if (this.isActionable(item)) {
        const todo = await this.addTodo({
          title: item.title,
          description: item.description,
          priority: item.priority,
          category: item.category,
          project: item.project,
          type: item.type,
          source: 'queue_processing',
          chatId: item.chatId,
          estimatedTime: item.estimatedTime
        });

        item.status = 'converted';
        item.convertedTo = todo.id;
      } else {
        item.status = 'processed';
      }

      item.processedAt = new Date().toISOString();
      this.emit('itemProcessed', item);

    } catch (error) {
      console.error(`Error processing queue item: ${error.message}`);
      item.status = 'failed';
      item.error = error.message;
    }
  }

  isActionable(item) {
    const actionableTypes = ['task', 'bug', 'feature', 'improvement', 'refactor'];
    return actionableTypes.includes(item.type);
  }

  getOptimalAssignee(todo) {
    // Simple assignment logic - could be enhanced with workload balancing
    const assignees = Array.from(this.assignees);
    if (assignees.length === 0) return null;

    // Find assignee with least pending todos
    const assigneeWorkload = {};
    for (const assignee of assignees) {
      assigneeWorkload[assignee] = 0;
    }

    for (const [id, existingTodo] of this.todos) {
      if (existingTodo.assignee && existingTodo.status === 'pending') {
        assigneeWorkload[existingTodo.assignee]++;
      }
    }

    return Object.keys(assigneeWorkload).reduce((a, b) => 
      assigneeWorkload[a] < assigneeWorkload[b] ? a : b
    );
  }

  calculatePriority(todo) {
    let priority = 'medium';

    // Priority based on type
    if (todo.type === 'bug' || todo.type === 'security') {
      priority = 'critical';
    } else if (todo.type === 'feature') {
      priority = 'high';
    } else if (todo.type === 'documentation') {
      priority = 'low';
    }

    // Priority based on due date
    if (todo.dueDate) {
      const dueDate = new Date(todo.dueDate);
      const now = new Date();
      const daysUntilDue = (dueDate - now) / (1000 * 60 * 60 * 24);

      if (daysUntilDue < 1) {
        priority = 'critical';
      } else if (daysUntilDue < 3) {
        priority = 'high';
      }
    }

    // Priority based on source
    if (todo.source === 'cursor_chat') {
      // Cursor chat items get slightly higher priority
      if (priority === 'low') priority = 'medium';
      if (priority === 'medium') priority = 'high';
    }

    return priority;
  }

  async updatePriorities() {
    console.log('🔄 Updating todo priorities...');

    for (const [id, todo] of this.todos) {
      const newPriority = this.calculatePriority(todo);
      if (newPriority !== todo.priority) {
        todo.priority = newPriority;
        todo.updatedAt = new Date().toISOString();
        console.log(`📊 Updated priority for ${todo.title}: ${todo.priority}`);
      }
    }

    await this.saveTodos();
  }

  async cleanupCompleted() {
    console.log('🧹 Cleaning up completed items...');

    const completedTodos = [];
    for (const [id, todo] of this.todos) {
      if (todo.status === 'completed') {
        completedTodos.push(id);
      }
    }

    // Keep only recent completed todos (last 30 days)
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    for (const id of completedTodos) {
      const todo = this.todos.get(id);
      if (todo.updatedAt && new Date(todo.updatedAt) < thirtyDaysAgo) {
        this.todos.delete(id);
        console.log(`🗑️ Removed old completed todo: ${todo.title}`);
      }
    }

    await this.saveTodos();
  }

  removeLowestPriorityItem() {
    if (this.queue.length === 0) return;

    const priorityOrder = { critical: 0, high: 1, medium: 2, low: 3 };
    
    let lowestIndex = 0;
    let lowestPriority = 3;

    for (let i = 0; i < this.queue.length; i++) {
      const priority = priorityOrder[this.queue[i].priority] || 2;
      if (priority > lowestPriority) {
        lowestPriority = priority;
        lowestIndex = i;
      }
    }

    const removed = this.queue.splice(lowestIndex, 1)[0];
    console.log(`🗑️ Removed lowest priority item: ${removed.title}`);
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      todos: {
        total: this.todos.size,
        byPriority: this.getTodosByPriority(),
        byStatus: this.getTodosByStatus(),
        byCategory: this.getTodosByCategory(),
        byProject: this.getTodosByProject(),
        byAssignee: this.getTodosByAssignee()
      },
      queue: {
        total: this.queue.length,
        byType: this.getQueueByType(),
        byStatus: this.getQueueByStatus(),
        byPriority: this.getQueueByPriority()
      },
      projects: {
        total: this.projects.size,
        list: Array.from(this.projects.keys())
      },
      assignees: {
        total: this.assignees.size,
        list: Array.from(this.assignees)
      },
      categories: {
        total: this.categories.size,
        list: Array.from(this.categories)
      }
    };

    const reportFile = path.join(this.config.dataDir, `todo-queue-report-${Date.now()}.json`);
    await fs.writeFile(reportFile, JSON.stringify(report, null, 2));

    console.log(`📊 Generated todo/queue report: ${reportFile}`);
    this.emit('reportGenerated', report);
  }

  getTodosByPriority() {
    const byPriority = {};
    for (const [id, todo] of this.todos) {
      byPriority[todo.priority] = (byPriority[todo.priority] || 0) + 1;
    }
    return byPriority;
  }

  getTodosByStatus() {
    const byStatus = {};
    for (const [id, todo] of this.todos) {
      byStatus[todo.status] = (byStatus[todo.status] || 0) + 1;
    }
    return byStatus;
  }

  getTodosByCategory() {
    const byCategory = {};
    for (const [id, todo] of this.todos) {
      byCategory[todo.category] = (byCategory[todo.category] || 0) + 1;
    }
    return byCategory;
  }

  getTodosByProject() {
    const byProject = {};
    for (const [id, todo] of this.todos) {
      byProject[todo.project] = (byProject[todo.project] || 0) + 1;
    }
    return byProject;
  }

  getTodosByAssignee() {
    const byAssignee = {};
    for (const [id, todo] of this.todos) {
      const assignee = todo.assignee || 'unassigned';
      byAssignee[assignee] = (byAssignee[assignee] || 0) + 1;
    }
    return byAssignee;
  }

  getQueueByType() {
    const byType = {};
    for (const item of this.queue) {
      byType[item.type] = (byType[item.type] || 0) + 1;
    }
    return byType;
  }

  getQueueByStatus() {
    const byStatus = {};
    for (const item of this.queue) {
      byStatus[item.status] = (byStatus[item.status] || 0) + 1;
    }
    return byStatus;
  }

  getQueueByPriority() {
    const byPriority = {};
    for (const item of this.queue) {
      byPriority[item.priority] = (byPriority[item.priority] || 0) + 1;
    }
    return byPriority;
  }

  async saveTodos() {
    const todosObj = Object.fromEntries(this.todos);
    await fs.writeFile(this.config.todoFile, JSON.stringify(todosObj, null, 2));
  }

  async saveQueue() {
    await fs.writeFile(this.config.queueFile, JSON.stringify(this.queue, null, 2));
  }

  async saveProjects() {
    const projectsObj = Object.fromEntries(this.projects);
    await fs.writeFile(this.config.projectsFile, JSON.stringify(projectsObj, null, 2));
  }

  generateId() {
    return `todo_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  getStatus() {
    return {
      isRunning: this.isRunning,
      todosCount: this.todos.size,
      queueLength: this.queue.length,
      projectsCount: this.projects.size,
      assigneesCount: this.assignees.size,
      categoriesCount: this.categories.size
    };
  }

  stop() {
    console.log('🛑 Stopping Todo and Queue Manager...');
    this.isRunning = false;
  }
}

// Export the class
module.exports = TodoQueueManager;

// Run if called directly
if (require.main === module) {
  const manager = new TodoQueueManager();
  
  manager.initialize().catch(error => {
    console.error('Failed to initialize Todo and Queue Manager:', error);
    process.exit(1);
  });
  
  // Handle graceful shutdown
  process.on('SIGINT', () => {
    console.log('\n🛑 Shutting down Todo and Queue Manager...');
    manager.stop();
    process.exit(0);
  });
} 