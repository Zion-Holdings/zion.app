import React, { useState } from 'react';
import { Clock, CheckCircle, AlertCircle, Info, XCircle, ChevronRight } from 'lucide-react';

export interface TimelineItem {
  id: string;
  title: string;
  description?: string;
  date: string;
  status: 'completed' | 'in-progress' | 'pending' | 'error' | 'info';
  icon?: React.ReactNode;
  metadata?: Record<string, any>;
  actions?: {
    label: string;
    onClick: () => void;
    variant?: 'primary' | 'secondary' | 'danger';
  }[];
}

export interface TimelineProps {
  items: TimelineItem[];
  layout?: 'vertical' | 'horizontal' | 'compact';
  showConnectors?: boolean;
  showDates?: boolean;
  showStatus?: boolean;
  showActions?: boolean;
  className?: string;
  onItemClick?: (item: TimelineItem) => void;
}

const statusConfig = {
  completed: {
    icon: CheckCircle,
    color: 'text-green-500',
    bgColor: 'bg-green-100',
    borderColor: 'border-green-200'
  },
  'in-progress': {
    icon: Clock,
    color: 'text-blue-500',
    bgColor: 'bg-blue-100',
    borderColor: 'border-blue-200'
  },
  pending: {
    icon: Clock,
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-100',
    borderColor: 'border-yellow-200'
  },
  error: {
    icon: XCircle,
    color: 'text-red-500',
    bgColor: 'bg-red-100',
    borderColor: 'border-red-200'
  },
  info: {
    icon: Info,
    color: 'text-gray-500',
    bgColor: 'bg-gray-100',
    borderColor: 'border-gray-200'
  }
};

export const Timeline: React.FC<TimelineProps> = ({
  items,
  layout = 'vertical',
  showConnectors = true,
  showDates = true,
  showStatus = true,
  showActions = true,
  className = '',
  onItemClick
}) => {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleExpanded = (itemId: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(itemId)) {
      newExpanded.delete(itemId);
    } else {
      newExpanded.add(itemId);
    }
    setExpandedItems(newExpanded);
  };

  const getStatusConfig = (status: TimelineItem['status']) => {
    return statusConfig[status] || statusConfig.info;
  };

  const renderVerticalTimeline = () => (
    <div className="space-y-6">
      {items.map((item, index) => {
        const status = getStatusConfig(item.status);
        const Icon = status.icon;
        const isExpanded = expandedItems.has(item.id);
        const hasMetadata = item.metadata && Object.keys(item.metadata).length > 0;
        const hasActions = item.actions && item.actions.length > 0;

        return (
          <div key={item.id} className="relative">
            {/* Connector Line */}
            {showConnectors && index < items.length - 1 && (
              <div className="absolute left-6 top-8 bottom-0 w-0.5 bg-gray-200" />
            )}

            <div className="flex items-start space-x-4">
              {/* Status Icon */}
              <div className={`flex-shrink-0 w-12 h-12 rounded-full ${status.bgColor} ${status.borderColor} border-2 flex items-center justify-center`}>
                {item.icon || <Icon className="w-6 h-6" />}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                  {showStatus && (
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${status.bgColor} ${status.color}`}>
                      {item.status.replace('-', ' ')}
                    </span>
                  )}
                </div>

                {item.description && (
                  <p className="text-gray-600 mb-3">{item.description}</p>
                )}

                {showDates && (
                  <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                    <Clock className="w-4 h-4" />
                    <span>{item.date}</span>
                  </div>
                )}

                {/* Metadata */}
                {hasMetadata && (
                  <div className="bg-gray-50 rounded-lg p-3 mb-3">
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      {Object.entries(item.metadata).map(([key, value]) => (
                        <div key={key}>
                          <span className="font-medium text-gray-700">{key}:</span>
                          <span className="text-gray-600 ml-1">{String(value)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Actions */}
                {showActions && hasActions && (
                  <div className="flex space-x-2">
                    {item.actions.map((action, actionIndex) => (
                      <button
                        key={actionIndex}
                        onClick={(e) => {
                          e.stopPropagation();
                          action.onClick();
                        }}
                        className={`px-3 py-1 text-sm rounded-md transition-colors ${
                          action.variant === 'danger'
                            ? 'bg-red-100 text-red-700 hover:bg-red-200'
                            : action.variant === 'primary'
                            ? 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {action.label}
                      </button>
                    ))}
                  </div>
                )}

                {/* Expandable Content */}
                {(hasMetadata || hasActions) && (
                  <button
                    onClick={() => toggleExpanded(item.id)}
                    className="flex items-center space-x-1 text-sm text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <span>{isExpanded ? 'Show less' : 'Show more'}</span>
                    <ChevronRight className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                  </button>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );

  const renderHorizontalTimeline = () => (
    <div className="overflow-x-auto">
      <div className="flex space-x-6 min-w-max pb-4">
        {items.map((item, index) => {
          const status = getStatusConfig(item.status);
          const Icon = status.icon;

          return (
            <div key={item.id} className="flex-shrink-0 w-64">
              <div className="text-center">
                {/* Status Icon */}
                <div className={`inline-flex w-12 h-12 rounded-full ${status.bgColor} ${status.borderColor} border-2 items-center justify-center mb-3`}>
                  {item.icon || <Icon className="w-6 h-6" />}
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                
                {item.description && (
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.description}</p>
                )}

                {showDates && (
                  <div className="text-sm text-gray-500">{item.date}</div>
                )}

                {showStatus && (
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${status.bgColor} ${status.color} mt-2`}>
                    {item.status.replace('-', ' ')}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  const renderCompactTimeline = () => (
    <div className="space-y-3">
      {items.map((item) => {
        const status = getStatusConfig(item.status);
        const Icon = status.icon;

        return (
          <div
            key={item.id}
            onClick={() => onItemClick?.(item)}
            className={`flex items-center space-x-3 p-3 rounded-lg border cursor-pointer hover:bg-gray-50 transition-colors ${
              onItemClick ? 'hover:shadow-sm' : ''
            }`}
          >
            {/* Status Icon */}
            <div className={`flex-shrink-0 w-8 h-8 rounded-full ${status.bgColor} flex items-center justify-center`}>
              {item.icon || <Icon className="w-4 h-4" />}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-900 truncate">{item.title}</h3>
                {showDates && (
                  <span className="text-xs text-gray-500">{item.date}</span>
                )}
              </div>
              
              {item.description && (
                <p className="text-xs text-gray-600 truncate">{item.description}</p>
              )}
            </div>

            {showStatus && (
              <span className={`flex-shrink-0 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${status.bgColor} ${status.color}`}>
                {item.status.replace('-', ' ')}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );

  const renderTimeline = () => {
    switch (layout) {
      case 'horizontal':
        return renderHorizontalTimeline();
      case 'compact':
        return renderCompactTimeline();
      default:
        return renderVerticalTimeline();
    }
  };

  if (items.length === 0) {
    return (
      <div className={`text-center py-8 text-gray-500 ${className}`}>
        <Clock className="w-12 h-12 mx-auto mb-4 text-gray-300" />
        <p>No timeline items to display</p>
      </div>
    );
  }

  return (
    <div className={className}>
      {renderTimeline()}
    </div>
  );
};