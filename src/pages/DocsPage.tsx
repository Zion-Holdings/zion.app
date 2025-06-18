import React, { useEffect, useState } from 'react';

const readmeContentFromFile = `# Zion OS Documentation

Welcome to the Zion OS docs. This GitBook-style guide outlines how our decentralized talent protocol works. Below you will find links to each major section.

- [Introduction](introduction.md)
- [Architecture](architecture.md)
- [Governance](governance.md)
- [API Documentation](api.md)
- [Developer Tools](developer-tools.md)
- [Legal + Manifestos](legal.md)
- [Operational Scripts](../hourly_audit_setup.md)
`;

const DocsPage: React.FC = () => {
  const [readmeContent, setReadmeContent] = useState('');

  useEffect(() => {
    // Simulate fetching content by setting it directly
    setReadmeContent(readmeContentFromFile);
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Documentation</h1>
      <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>{readmeContent}</pre>
    </div>
  );
};

export default DocsPage;
