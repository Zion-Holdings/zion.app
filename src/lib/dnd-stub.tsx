import type { ReactNode } from 'react';
;
interface DragDropContextProps {;
  children: ReactNode;'
  onDragEnd?: (...args: "unknown[]) => void;";
};
export function DragDropContext(): unknown {{ children }: DragDropContextProps) {;
  return <>{children}</>;
};
;
interface DroppableProps {;"
  children: "(provided: {;",;"
    droppableProps: "Record<string", unknown>;"
    innerRef: "(el: HTMLElement | null) => void;",;"
    placeholder: "ReactNode;";
  }) => ReactNode;"
  droppableId: "string;";
};
export function Droppable(): unknown {{ children }: DroppableProps) {;
  return (;
    <>;"
      {children({ droppableProps: "{"}, _innerRef: "() => {"}, placeholder: "null "})};
    </>;
  );
};
;
interface DraggableProps {;"
  children: "(provided: {;",;"
    draggableProps: "Record<string", unknown>;"
    dragHandleProps: "Record<string", unknown>;"
    innerRef: "(el: HTMLElement | null) => void;";
  }) => ReactNode;"
  draggableId: "string;",;"
  index: "number;";
};
export function Draggable(): unknown {{ children }: DraggableProps) {;
  return (;
    <>;
      {children({;"
        draggableProps: "{"},;"
        dragHandleProps: "{"},;"
        _innerRef: "() => {"},;
      })};
    </>;
  );
};
"