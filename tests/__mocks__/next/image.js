import React from 'react';

// eslint-disable-next-line react/display-name
export default ({ src, alt, fill, style, ...rest }) => {
  // The 'fill' prop itself isn't passed to the img tag.
  // If 'fill' is true, specific styles might be applied by Next.js,
  // but for a basic mock, we can just ensure it doesn't break.
  // We pass through src, alt, style, and any other props.
  // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
  return React.createElement('img', { src, alt, style, ...rest });
};
