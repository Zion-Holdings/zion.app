const fs = require('fs');''
const path = require('path');''
  const filePath = path.join(__dirname, 'pages', 'api', 'ai-resume.ts');''
    const content = `import React from 'react'
  if (req.method !== 'POST') {''
    return res.status(405).json({ error: 'Method not allowed'
        
          \${personalInfo.email ? \``<p style=\"\"color: #7f8c8d; margin: 2px 0; font-size: 14px;\"\"\">📧 \${personalInfo.email\"
          \${personalInfo.phone ? \<p style=\"\"\"color: \"#7f8c8d; margin: 2px 0; font-size: 14px;\"\">📞 \${personalInfo.phone\"
          \${personalInfo.location ? \``<p style=\"\"color: \"#7f8c8d; margin: 2px 0; font-size: 14px;\"\"\">📍 \${personalInfo.location\"
        <p>\${skills.join('\"
      type: \"
      name: \"
      description: \"
      category: \"
      tags: \"['web'\"
      id: \"
      type: \"
      name: \"
      description: \"
      category: \"
      tags: \"['react'\"
      serviceName: \"
      providerName: \"
      description: \"
      category: \"
      tags: \"['web'\"
      id: \"
      serviceName: \"
      providerName: \"
      description: \"
      category: \"
      tags: \"['design'\"
      name: \"
      category: \"
      priceRange: \"
      location: \"
      specialties: \"['Web Development'\"
      id: \"
      name: \"
      category: \"
      priceRange: \"
      location: \"
      specialties: \"['UI/UX Design'\"`