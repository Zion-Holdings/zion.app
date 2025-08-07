#!/usr/bin/env node
;
const fs = require('fs');''
const path = require('path');''
    pattern: "
      return match.replace(/['"];?[']$/"
    pattern: "/['"
      return match.replace(/['"];?[']$/"
      return match.replace(/;$/"
    replacement: "
    pattern: "/const\s+\{[^"
      return match.replace(/;?[']$/"
    pattern: "
      return match.replace(/['"];?[']$/"
    pattern: "/res\.status\([^)]*\)\.json\([^)]*['"
      return match.replace(/['];?['"]$/", "
    content = content.replace(/['];?['"]/g, "
    content = content.replace(/[']{2,}/g, "
      return match.replace(/['];?[']$/, "