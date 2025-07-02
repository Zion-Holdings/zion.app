// eslint-disable-next-line @typescript-eslint/no-require-imports
 
import React from 'react';
export default ({ children, ...props }) => {
  return React.createElement('a', props, children);
};
