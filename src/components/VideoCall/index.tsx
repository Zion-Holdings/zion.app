
import React from 'react';
export { VideoCallRoom } from '../video/VideoCallRoom';

// Stub implementation for any LiveKit exports that might be used
export const VideoCall: React.FC<{children?: React.ReactNode}> = ({children}) => {
  return <div>{children}</div>;
};

export const LiveKitRoom: React.FC<{children?: React.ReactNode}> = ({children}) => {
  return <div>{children}</div>;
};
