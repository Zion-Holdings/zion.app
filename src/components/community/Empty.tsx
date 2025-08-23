import React from 'react';

export default function Empty({ message }: { message: string }) {
  return (
    <div className="text-center py-16 text-muted-foreground" data-testid="empty">
      {message}
    </div>
  );
}
