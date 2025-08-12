// eslint-disable-next-line @typescript-eslint/no-require-imports
// eslint-disable-next-line @typescript-eslint/no-require-imports
const React = require('react');

exports.CldUploadButton = ({ children, onUpload }) => {
  const handleClick = () => {
    if (onUpload) onUpload({ info: { secure_url: 'http://example.com/avatar.png' } });
  };
  return React.createElement('button', { onClick: handleClick }, children || 'Upload');
};

exports.CldUploadWidget = exports.CldUploadButton;
