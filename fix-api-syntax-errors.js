const fs = require('fs'
const path = require('path'
  content = content.replace(/'([^']*)$/gm, "
  content = content.replace(/"([^"]*)$/gm, '"
    if (value.startsWith("'") || value.startsWith('"
    return `\``${inner.replace(/\"/g, '\\\"
    return match.replace(/\"/g, '\\\"
      '