import React, { useState, useRef, useCallback } from 'react';
import { Plus, MoreVertical, User, Calendar, Tag, MessageSquare, Paperclip } from 'lucide-react';

export interface KanbanTask {
  id: string;
  title: string;
  description?: string;
  assignee?: {
    id: string;
    name: string;
    avatar?: string;
  };
  priority: 'low' | 'medium' | 'high' | 'urgent';
  status: string;
  dueDate?: string;
  tags?: string[];
  attachments?: number;
  comments?: number;
  createdAt: string;
  updatedAt: string;
}

export interface KanbanColumn {
  id: string;
  title: string;
  color: string;
  maxTasks?: number;
  tasks: KanbanTask[];
}

export interface KanbanBoardProps {
  columns: KanbanColumn[];
  onTaskMove?: (taskId: string, fromColumn: string, toColumn: string, newIndex: number) => void;
  onTaskCreate?: (columnId: string, task: Omit<KanbanTask, 'id' | 'createdAt' | 'updatedAt'>) => void;
  onTaskUpdate?: (taskId: string, updates: Partial<KanbanTask>) => void;
  onTaskDelete?: (taskId: string) => void;
  onColumnCreate?: (column: Omit<KanbanColumn, 'id' | 'tasks'>) => void;
  onColumnUpdate?: (columnId: string, updates: Partial<KanbanColumn>) => void;
  onColumnDelete?: (columnId: string) => void;
  className?: string;
  showTaskCount?: boolean;
  showPriority?: boolean;
  showAssignee?: boolean;
  showDueDate?: boolean;
  showTags?: boolean;
  showAttachments?: boolean;
  showComments?: boolean;
  allowTaskCreation?: boolean;
  allowColumnManagement?: boolean;
}

const priorityConfig = {
  low: { color: 'bg-gray-100 text-gray-700', label: 'Low' },
  medium: { color: 'bg-blue-100 text-blue-700', label: 'Medium' },
  high: { color: 'bg-orange-100 text-orange-700', label: 'High' },
  urgent: { color: 'bg-red-100 text-red-700', label: 'Urgent' }
};

export const KanbanBoard: React.FC<KanbanBoardProps> = ({
  columns,
  onTaskMove,
  onTaskCreate,
  onTaskUpdate,
  onTaskDelete,
  onColumnCreate,
  onColumnUpdate,
  onColumnDelete,
  className = '',
  showTaskCount = true,
  showPriority = true,
  showAssignee = true,
  showDueDate = true,
  showTags = true,
  showAttachments = true,
  showComments = true,
  allowTaskCreation = true,
  allowColumnManagement = true
}) => {
  const [draggedTask, setDraggedTask] = useState<{ taskId: string; columnId: string } | null>(null);
  const [dragOverColumn, setDragOverColumn] = useState<string | null>(null);
  const [editingTask, setEditingTask] = useState<string | null>(null);
  const [editingColumn, setEditingColumn] = useState<string | null>(null);
  const [newColumnTitle, setNewColumnTitle] = useState('');
  const [showNewColumnForm, setShowNewColumnForm] = useState(false);

  const handleDragStart = (e: React.DragEvent, taskId: string, columnId: string) => {
    setDraggedTask({ taskId, columnId });
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e: React.DragEvent, columnId: string) => {
    e.preventDefault();
    setDragOverColumn(columnId);
  };

  const handleDragLeave = () => {
    setDragOverColumn(null);
  };

  const handleDrop = (e: React.DragEvent, columnId: string) => {
    e.preventDefault();
    if (draggedTask && draggedTask.columnId !== columnId) {
      const sourceColumn = columns.find(col => col.id === draggedTask.columnId);
      const targetColumn = columns.find(col => col.id === columnId);
      
      if (sourceColumn && targetColumn) {
        const taskIndex = sourceColumn.tasks.findIndex(task => task.id === draggedTask.taskId);
        if (taskIndex !== -1) {
          onTaskMove?.(draggedTask.taskId, draggedTask.columnId, columnId, targetColumn.tasks.length);
        }
      }
    }
    setDraggedTask(null);
    setDragOverColumn(null);
  };

  const handleTaskCreate = (columnId: string) => {
    if (!onTaskCreate) return;
    
    const newTask: Omit<KanbanTask, 'id' | 'createdAt' | 'updatedAt'> = {
      title: 'New Task',
      description: '',
      priority: 'medium',
      status: columns.find(col => col.id === columnId)?.title || '',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    onTaskCreate(columnId, newTask);
  };

  const handleColumnCreate = () => {
    if (!onColumnCreate || !newColumnTitle.trim()) return;
    
    const newColumn: Omit<KanbanColumn, 'id' | 'tasks'> = {
      title: newColumnTitle.trim(),
      color: '#3B82F6'
    };
    
    onColumnCreate(newColumn);
    setNewColumnTitle('');
    setShowNewColumnForm(false);
  };

  const renderTask = (task: KanbanTask, columnId: string) => {
    const priority = priorityConfig[task.priority];
    const isEditing = editingTask === task.id;

    return (
      <div
        key={task.id}
        draggable
        onDragStart={(e) => handleDragStart(e, task.id, columnId)}
        className="bg-white rounded-lg border border-gray-200 p-4 mb-3 shadow-sm hover:shadow-md transition-shadow cursor-move"
      >
        {/* Task Header */}
        <div className="flex items-start justify-between mb-3">
          <h4 className="font-medium text-gray-900 text-sm leading-tight">
            {isEditing ? (
              <input
                type="text"
                value={task.title}
                onChange={(e) => onTaskUpdate?.(task.id, { title: e.target.value })}
                onBlur={() => setEditingTask(null)}
                onKeyPress={(e) => e.key === 'Enter' && setEditingTask(null)}
                className="w-full px-2 py-1 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                autoFocus
              />
            ) : (
              <span onClick={() => setEditingTask(task.id)} className="cursor-text">
                {task.title}
              </span>
            )}
          </h4>
          
          <div className="flex items-center space-x-2">
            {showPriority && (
              <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${priority.color}`}>
                {priority.label}
              </span>
            )}
            
            <button
              onClick={(e) => {
                e.stopPropagation();
                // Show task options menu
              }}
              className="p-1 hover:bg-gray-100 rounded transition-colors"
            >
              <MoreVertical className="w-4 h-4 text-gray-400" />
            </button>
          </div>
        </div>

        {/* Task Description */}
        {task.description && (
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">{task.description}</p>
        )}

        {/* Task Metadata */}
        <div className="space-y-2">
          {/* Assignee */}
          {showAssignee && task.assignee && (
            <div className="flex items-center space-x-2 text-xs text-gray-500">
              <User className="w-3 h-3" />
              <span>{task.assignee.name}</span>
            </div>
          )}

          {/* Due Date */}
          {showDueDate && task.dueDate && (
            <div className="flex items-center space-x-2 text-xs text-gray-500">
              <Calendar className="w-3 h-3" />
              <span>{new Date(task.dueDate).toLocaleDateString()}</span>
            </div>
          )}

          {/* Tags */}
          {showTags && task.tags && task.tags.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {task.tags.slice(0, 3).map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700"
                >
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </span>
              ))}
              {task.tags.length > 3 && (
                <span className="text-xs text-gray-500">+{task.tags.length - 3}</span>
              )}
            </div>
          )}

          {/* Attachments & Comments */}
          <div className="flex items-center space-x-4 text-xs text-gray-500">
            {showAttachments && task.attachments && task.attachments > 0 && (
              <div className="flex items-center space-x-1">
                <Paperclip className="w-3 h-3" />
                <span>{task.attachments}</span>
              </div>
            )}
            
            {showComments && task.comments && task.comments > 0 && (
              <div className="flex items-center space-x-1">
                <MessageSquare className="w-3 h-3" />
                <span>{task.comments}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  const renderColumn = (column: KanbanColumn) => {
    const isDragOver = dragOverColumn === column.id;
    const isEditing = editingColumn === column.id;

    return (
      <div
        key={column.id}
        className={`flex-shrink-0 w-80 bg-gray-50 rounded-lg p-4 ${
          isDragOver ? 'ring-2 ring-blue-500 bg-blue-50' : ''
        }`}
        onDragOver={(e) => handleDragOver(e, column.id)}
        onDragLeave={handleDragLeave}
        onDrop={(e) => handleDrop(e, column.id)}
      >
        {/* Column Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: column.color }}
            />
            <h3 className="font-semibold text-gray-900">
              {isEditing ? (
                <input
                  type="text"
                  value={column.title}
                  onChange={(e) => onColumnUpdate?.(column.id, { title: e.target.value })}
                  onBlur={() => setEditingColumn(null)}
                  onKeyPress={(e) => e.key === 'Enter' && setEditingColumn(null)}
                  className="px-2 py-1 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  autoFocus
                />
              ) : (
                <span onClick={() => setEditingColumn(column.id)} className="cursor-text">
                  {column.title}
                </span>
              )}
            </h3>
            
            {showTaskCount && (
              <span className="bg-gray-200 text-gray-700 text-xs font-medium px-2 py-1 rounded-full">
                {column.tasks.length}
                {column.maxTasks && `/${column.maxTasks}`}
              </span>
            )}
          </div>
          
          {allowColumnManagement && (
            <button
              onClick={() => onColumnDelete?.(column.id)}
              className="p-1 hover:bg-gray-200 rounded transition-colors text-gray-400 hover:text-red-500"
            >
              <MoreVertical className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Column Tasks */}
        <div className="space-y-3 min-h-[200px]">
          {column.tasks.map((task) => renderTask(task, column.id))}
          
          {/* Add Task Button */}
          {allowTaskCreation && (
            <button
              onClick={() => handleTaskCreate(column.id)}
              className="w-full p-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-gray-400 hover:text-gray-600 transition-colors flex items-center justify-center space-x-2"
            >
              <Plus className="w-4 h-4" />
              <span className="text-sm">Add Task</span>
            </button>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Board Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Project Board</h2>
        
        {allowColumnManagement && (
          <button
            onClick={() => setShowNewColumnForm(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
          >
            <Plus className="w-4 h-4" />
            <span>Add Column</span>
          </button>
        )}
      </div>

      {/* New Column Form */}
      {showNewColumnForm && (
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="flex items-center space-x-4">
            <input
              type="text"
              value={newColumnTitle}
              onChange={(e) => setNewColumnTitle(e.target.value)}
              placeholder="Enter column title..."
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              onKeyPress={(e) => e.key === 'Enter' && handleColumnCreate()}
            />
            <button
              onClick={handleColumnCreate}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Create
            </button>
            <button
              onClick={() => setShowNewColumnForm(false)}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Kanban Board */}
      <div className="flex space-x-6 overflow-x-auto pb-4">
        {columns.map((column) => renderColumn(column))}
      </div>
    </div>
  );
};