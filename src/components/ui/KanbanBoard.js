import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Plus, MoreVertical, User, Calendar, Tag, MessageSquare, Paperclip } from 'lucide-react';
const priorityConfig = {
    low: { color: 'bg-gray-100 text-gray-700', label: 'Low' },
    medium: { color: 'bg-blue-100 text-blue-700', label: 'Medium' },
    high: { color: 'bg-orange-100 text-orange-700', label: 'High' },
    urgent: { color: 'bg-red-100 text-red-700', label: 'Urgent' }
};
export const KanbanBoard = ({ columns, onTaskMove, onTaskCreate, onTaskUpdate, onTaskDelete, onColumnCreate, onColumnUpdate, onColumnDelete, className = '', showTaskCount = true, showPriority = true, showAssignee = true, showDueDate = true, showTags = true, showAttachments = true, showComments = true, allowTaskCreation = true, allowColumnManagement = true }) => {
    const [draggedTask, setDraggedTask] = useState(null);
    const [dragOverColumn, setDragOverColumn] = useState(null);
    const [editingTask, setEditingTask] = useState(null);
    const [editingColumn, setEditingColumn] = useState(null);
    const [newColumnTitle, setNewColumnTitle] = useState('');
    const [showNewColumnForm, setShowNewColumnForm] = useState(false);
    const handleDragStart = (e, taskId, columnId) => {
        setDraggedTask({ taskId, columnId });
        e.dataTransfer.effectAllowed = 'move';
    };
    const handleDragOver = (e, columnId) => {
        e.preventDefault();
        setDragOverColumn(columnId);
    };
    const handleDragLeave = () => {
        setDragOverColumn(null);
    };
    const handleDrop = (e, columnId) => {
        e.preventDefault();
        if (draggedTask && draggedTask.columnId !== columnId) {
            const sourceColumn = columns.find(col => col.id === draggedTask.columnId);
            const targetColumn = columns.find(col => col.id === columnId);
            if (sourceColumn && targetColumn) {
                const taskIndex = sourceColumn.tasks.findIndex(task => task.id === draggedTask.taskId);
                if (taskIndex !== -1) {
                    onTaskMove === null || onTaskMove === void 0 ? void 0 : onTaskMove(draggedTask.taskId, draggedTask.columnId, columnId, targetColumn.tasks.length);
                }
            }
        }
        setDraggedTask(null);
        setDragOverColumn(null);
    };
    const handleTaskCreate = (columnId) => {
        var _a;
        if (!onTaskCreate)
            return;
        const newTask = {
            title: 'New Task',
            description: '',
            priority: 'medium',
            status: ((_a = columns.find(col => col.id === columnId)) === null || _a === void 0 ? void 0 : _a.title) || '',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        onTaskCreate(columnId, newTask);
    };
    const handleColumnCreate = () => {
        if (!onColumnCreate || !newColumnTitle.trim())
            return;
        const newColumn = {
            title: newColumnTitle.trim(),
            color: '#3B82F6'
        };
        onColumnCreate(newColumn);
        setNewColumnTitle('');
        setShowNewColumnForm(false);
    };
    const renderTask = (task, columnId) => {
        const priority = priorityConfig[task.priority];
        const isEditing = editingTask === task.id;
        return (_jsxs("div", { draggable: true, onDragStart: (e) => handleDragStart(e, task.id, columnId), className: "bg-white rounded-lg border border-gray-200 p-4 mb-3 shadow-sm hover:shadow-md transition-shadow cursor-move", children: [_jsxs("div", { className: "flex items-start justify-between mb-3", children: [_jsx("h4", { className: "font-medium text-gray-900 text-sm leading-tight", children: isEditing ? (_jsx("input", { type: "text", value: task.title, onChange: (e) => onTaskUpdate === null || onTaskUpdate === void 0 ? void 0 : onTaskUpdate(task.id, { title: e.target.value }), onBlur: () => setEditingTask(null), onKeyPress: (e) => e.key === 'Enter' && setEditingTask(null), className: "w-full px-2 py-1 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500", autoFocus: true })) : (_jsx("span", { onClick: () => setEditingTask(task.id), className: "cursor-text", children: task.title })) }), _jsxs("div", { className: "flex items-center space-x-2", children: [showPriority && (_jsx("span", { className: `inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${priority.color}`, children: priority.label })), _jsx("button", { onClick: (e) => {
                                        e.stopPropagation();
                                        // Show task options menu
                                    }, className: "p-1 hover:bg-gray-100 rounded transition-colors", children: _jsx(MoreVertical, { className: "w-4 h-4 text-gray-400" }) })] })] }), task.description && (_jsx("p", { className: "text-sm text-gray-600 mb-3 line-clamp-2", children: task.description })), _jsxs("div", { className: "space-y-2", children: [showAssignee && task.assignee && (_jsxs("div", { className: "flex items-center space-x-2 text-xs text-gray-500", children: [_jsx(User, { className: "w-3 h-3" }), _jsx("span", { children: task.assignee.name })] })), showDueDate && task.dueDate && (_jsxs("div", { className: "flex items-center space-x-2 text-xs text-gray-500", children: [_jsx(Calendar, { className: "w-3 h-3" }), _jsx("span", { children: new Date(task.dueDate).toLocaleDateString() })] })), showTags && task.tags && task.tags.length > 0 && (_jsxs("div", { className: "flex flex-wrap gap-1", children: [task.tags.slice(0, 3).map((tag, index) => (_jsxs("span", { className: "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700", children: [_jsx(Tag, { className: "w-3 h-3 mr-1" }), tag] }, index))), task.tags.length > 3 && (_jsxs("span", { className: "text-xs text-gray-500", children: ["+", task.tags.length - 3] }))] })), _jsxs("div", { className: "flex items-center space-x-4 text-xs text-gray-500", children: [showAttachments && task.attachments && task.attachments > 0 && (_jsxs("div", { className: "flex items-center space-x-1", children: [_jsx(Paperclip, { className: "w-3 h-3" }), _jsx("span", { children: task.attachments })] })), showComments && task.comments && task.comments > 0 && (_jsxs("div", { className: "flex items-center space-x-1", children: [_jsx(MessageSquare, { className: "w-3 h-3" }), _jsx("span", { children: task.comments })] }))] })] })] }, task.id));
    };
    const renderColumn = (column) => {
        const isDragOver = dragOverColumn === column.id;
        const isEditing = editingColumn === column.id;
        return (_jsxs("div", { className: `flex-shrink-0 w-80 bg-gray-50 rounded-lg p-4 ${isDragOver ? 'ring-2 ring-blue-500 bg-blue-50' : ''}`, onDragOver: (e) => handleDragOver(e, column.id), onDragLeave: handleDragLeave, onDrop: (e) => handleDrop(e, column.id), children: [_jsxs("div", { className: "flex items-center justify-between mb-4", children: [_jsxs("div", { className: "flex items-center space-x-2", children: [_jsx("div", { className: "w-3 h-3 rounded-full", style: { backgroundColor: column.color } }), _jsx("h3", { className: "font-semibold text-gray-900", children: isEditing ? (_jsx("input", { type: "text", value: column.title, onChange: (e) => onColumnUpdate === null || onColumnUpdate === void 0 ? void 0 : onColumnUpdate(column.id, { title: e.target.value }), onBlur: () => setEditingColumn(null), onKeyPress: (e) => e.key === 'Enter' && setEditingColumn(null), className: "px-2 py-1 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500", autoFocus: true })) : (_jsx("span", { onClick: () => setEditingColumn(column.id), className: "cursor-text", children: column.title })) }), showTaskCount && (_jsxs("span", { className: "bg-gray-200 text-gray-700 text-xs font-medium px-2 py-1 rounded-full", children: [column.tasks.length, column.maxTasks && `/${column.maxTasks}`] }))] }), allowColumnManagement && (_jsx("button", { onClick: () => onColumnDelete === null || onColumnDelete === void 0 ? void 0 : onColumnDelete(column.id), className: "p-1 hover:bg-gray-200 rounded transition-colors text-gray-400 hover:text-red-500", children: _jsx(MoreVertical, { className: "w-4 h-4" }) }))] }), _jsxs("div", { className: "space-y-3 min-h-[200px]", children: [column.tasks.map((task) => renderTask(task, column.id)), allowTaskCreation && (_jsxs("button", { onClick: () => handleTaskCreate(column.id), className: "w-full p-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-gray-400 hover:text-gray-600 transition-colors flex items-center justify-center space-x-2", children: [_jsx(Plus, { className: "w-4 h-4" }), _jsx("span", { className: "text-sm", children: "Add Task" })] }))] })] }, column.id));
    };
    return (_jsxs("div", { className: `space-y-6 ${className}`, children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsx("h2", { className: "text-2xl font-bold text-gray-900", children: "Project Board" }), allowColumnManagement && (_jsxs("button", { onClick: () => setShowNewColumnForm(true), className: "px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2", children: [_jsx(Plus, { className: "w-4 h-4" }), _jsx("span", { children: "Add Column" })] }))] }), showNewColumnForm && (_jsx("div", { className: "bg-white border border-gray-200 rounded-lg p-4", children: _jsxs("div", { className: "flex items-center space-x-4", children: [_jsx("input", { type: "text", value: newColumnTitle, onChange: (e) => setNewColumnTitle(e.target.value), placeholder: "Enter column title...", className: "flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500", onKeyPress: (e) => e.key === 'Enter' && handleColumnCreate() }), _jsx("button", { onClick: handleColumnCreate, className: "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors", children: "Create" }), _jsx("button", { onClick: () => setShowNewColumnForm(false), className: "px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors", children: "Cancel" })] }) })), _jsx("div", { className: "flex space-x-6 overflow-x-auto pb-4", children: columns.map((column) => renderColumn(column)) })] }));
};
