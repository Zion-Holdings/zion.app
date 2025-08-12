import { ReactNode } from 'react';

interface DragDropContextProps {
  children: ReactNode;
  onDragEnd?: (...args: any[]) => void;
}
export function DragDropContext({ children }: DragDropContextProps) {
  return <>{children}</>;
}

interface DroppableProps {
  children: (provided: { droppableProps: Record<string, unknown>; innerRef: (el: HTMLElement | null) => void; placeholder: ReactNode; }) => ReactNode;
  droppableId: string;
}
export function Droppable({ children }: DroppableProps) {
  return <>{children({ droppableProps: {}, innerRef: () => {}, placeholder: null })}</>;
}

interface DraggableProps {
  children: (provided: { draggableProps: Record<string, unknown>; dragHandleProps: Record<string, unknown>; innerRef: (el: HTMLElement | null) => void; }) => ReactNode;
  draggableId: string;
  index: number;
}
export function Draggable({ children }: DraggableProps) {
  return <>{children({ draggableProps: {}, dragHandleProps: {}, innerRef: () => {} })}</>;
}
