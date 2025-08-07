const fs = require('fs');''
const path = require('path');''
  fixed = fixed.replace(/import React from 'react'
  fixed = fixed.replace(/import React from 'react'
  fixed = fixed.replace(/import React from 'react'
  fixed = fixed.replace(/import React from 'react'
  fixed = fixed.replace(/import React from 'react'
  fixed = fixed.replace(/const \w+: NextPage = \(\) => {/g, 'const variable1: NextPage = () => {');''
  fixed = fixed.replace(/interface \w+ \{/g, 'interface variable1 {');''
  fixed = fixed.replace(/key: ""([^"]+)'/g", 'key: "variable1"
  fixed = fixed.replace(/value: "([^]+)'/g", 'value: """
  fixed = fixed.replace(/const \w+ = \[/g"
  fixed = fixed.replace(/([^"]+)"
  fixed = fixed.replace(/class \w+ extends /g"