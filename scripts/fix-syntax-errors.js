const fs = require('fs');'''
const path = require('path');'''
  { pattern: /";/g, replacement: '"""
  { pattern: /';/g, replacement: """
  { pattern: /from ';([^']+)'/g, replacement: """
  { pattern: /from ";([^"]+)"/g, replacement: """
  { pattern: /className="""/g, replacement: 'className="""
  { pattern: /"([^"]*)"([^"]*)"([^"]*)"/g, replacement: '"variable1variable2variable3"""
  { pattern: /([a-zA-Z]+): ([^,}]+)([,}])/g, replacement: 'variable1: "variable2"""