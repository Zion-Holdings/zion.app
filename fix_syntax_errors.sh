#!/bin/bash

# Fix systematic syntax errors in the codebase

echo "Fixing systematic syntax errors..."

# Fix unterminated string literals with extra semicolons
find src -name "*.tsx" -o -name "*.ts" | xargs sed -i '' "s/;'/'/g"

# Fix extra semicolons in import statements
find src -name "*.tsx" -o -name "*.ts" | xargs sed -i '' "s/import \([^;]*\);'/\1'/g"

# Fix malformed type annotations
find src -name "*.tsx" -o -name "*.ts" | xargs sed -i '' 's/: unknown "unknown = /: /g'
find src -name "*.tsx" -o -name "*.ts" | xargs sed -i '' 's/: unknown {): unknown {): unknown {): unknown {): unknown {) {/: /g'

# Fix malformed function declarations
find src -name "*.tsx" -o -name "*.ts" | xargs sed -i '' 's/export default function \([^(]*\)(): unknown {): unknown {): unknown {): unknown {): unknown {) {/export default function \1() {/g'

# Fix malformed object literals
find src -name "*.tsx" -o -name "*.ts" | xargs sed -i '' 's/"{;",;";";";";"/{/g'
find src -name "*.tsx" -o -name "*.ts" | xargs sed -i '' 's/",;";";";";"/"/g'

# Fix malformed array literals
find src -name "*.tsx" -o -name "*.ts" | xargs sed -i '' 's/\[;\[/[/g'
find src -name "*.tsx" -o -name "*.ts" | xargs sed -i '' 's/\];\]/]/g'

# Fix malformed JSX
find src -name "*.tsx" -o -name "*.ts" | xargs sed -i '' 's/";";";";"/"/g'
find src -name "*.tsx" -o -name "*.ts" | xargs sed -i '' 's/";";";"/"/g'
find src -name "*.tsx" -o -name "*.ts" | xargs sed -i '' 's/";";"/"/g'

# Fix malformed function calls
find src -name "*.tsx" -o -name "*.ts" | xargs sed -i '' 's/\([a-zA-Z_][a-zA-Z0-9_]*\): unknown = /const \1 = /g'

# Fix malformed return statements
find src -name "*.tsx" -o -name "*.ts" | xargs sed -i '' 's/return \(;";";"/return (/g'

# Fix malformed closing braces
find src -name "*.tsx" -o -name "*.ts" | xargs sed -i '' 's/};";";";";"/}/g'
find src -name "*.tsx" -o -name "*.ts" | xargs sed -i '' 's/};";";";"/}/g'
find src -name "*.tsx" -o -name "*.ts" | xargs sed -i '' 's/};";";"/}/g'

# Fix malformed semicolons
find src -name "*.tsx" -o -name "*.ts" | xargs sed -i '' 's/;;;/;/g'
find src -name "*.tsx" -o -name "*.ts" | xargs sed -i '' 's/;;/;/g'

# Fix malformed quotes in strings
find src -name "*.tsx" -o -name "*.ts" | xargs sed -i '' 's/"\([^"]*\)";"/"\1"/g'

# Fix malformed type imports
find src -name "*.tsx" -o -name "*.ts" | xargs sed -i '' "s/import type \([^;]*\);'/\1'/g"

# Fix malformed React imports
find src -name "*.tsx" -o -name "*.ts" | xargs sed -i '' "s/import \([^;]*\) from 'react-hook-form;'/\1 from 'react-hook-form'/g"

# Fix malformed zod imports
find src -name "*.tsx" -o -name "*.ts" | xargs sed -i '' "s/import \(\{ [^}]* \}\) from 'zod;'/\1 from 'zod'/g"

# Fix malformed form field types
find src -name "*.tsx" -o -name "*.ts" | xargs sed -i '' "s/field: \"ControllerRenderProps<FormValues\", '\([^']*\)'>/field: ControllerRenderProps<FormValues, '\1'>/g"

# Fix malformed schema definitions
find src -name "*.tsx" -o -name "*.ts" | xargs sed -i '' "s/\"z\.string\(\)\.min\(2\", 'Required'\)/z.string().min(2, 'Required')/g"
find src -name "*.tsx" -o -name "*.ts" | xargs sed -i '' "s/\"z\.string\(\)\.min\(1\", 'Required'\)/z.string().min(1, 'Required')/g"
find src -name "*.tsx" -o -name "*.ts" | xargs sed -i '' 's/"z\.string\(\)\.optional\(\)"/z.string().optional()/g'

# Fix malformed resolver
find src -name "*.tsx" -o -name "*.ts" | xargs sed -i '' 's/resolver: "zodResolver\(schema\)"/resolver: zodResolver(schema)/g'

# Fix malformed default values
find src -name "*.tsx" -o -name "*.ts" | xargs sed -i '' 's/defaultValues: "{;",;";";";";"/defaultValues: {/g'

# Fix malformed log statements
find src -name "*.tsx" -o -name "*.ts" | xargs sed -i '' "s/logInfo\('Partner API request', \{ data: \"{ data: values \"} \)/logInfo('Partner API request', { data: values })/g"

echo "Syntax error fixes completed." 