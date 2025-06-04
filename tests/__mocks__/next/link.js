/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
export default ({ children, ...props }) => {
  return React.createElement('a', props, children);
};
