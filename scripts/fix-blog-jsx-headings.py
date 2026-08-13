import { read_file, search_files, patch, terminal } from 'hermes_tools';
import os, re, sys

repo = '/data/data/com.termux/files/home/zion-support.github.io'

# 1. Find all blog page.tsx files that contain raw markdown headings inside JSX sections
pattern = r'<section className="prose prose-invert max-w-none">\n(## .*\n)+'
matches = search_files(
    file_glob='page.tsx',
    limit=200,
    output_mode='files_only',
    path=f'{repo}/app/blog',
    pattern=pattern,
)

files = matches.get('matches', []) if isinstance(matches, dict) else matches
print(f'Found {len(files)} blog pages with raw markdown headings')

# 2. Process each file: replace raw markdown headings with JSX <h2> elements
fixed = 0
for f in files:
    content = read_file(path=f, limit=2000)
    text = content.get('content', '')
    if not text:
        continue
    
    original = text
    # Replace standalone ## Heading lines inside prose sections with <h2>Heading</h2>
    # Keep indentation consistent
    replaced = re.sub(r'^(\s*)## (.*)$', r'\1<h2>\2</h2>', text, flags=re.MULTILINE)
    
    if replaced != original:
        # Write back
        write_file(path=f, content=replaced)
        fixed += 1
        print(f'Fixed: {f}')

print(f'Fixed {fixed}/{len(files)} files')
