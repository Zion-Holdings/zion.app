import re, glob, os

fixed = 0
broken = 0
files = glob.glob('app/services/*/page.tsx')
for f in files:
    with open(f, 'r') as fh:
        content = fh.read()
    if 'BreadcrumbSchema path={`/services/' in content:
        # Check if broken: after the backtick path, before title, no }
        try:
            after = content.split('BreadcrumbSchema path={`/services/')[1]
            before_title = after.split('title=')[0]
        except Exception:
            continue
        if '}' not in before_title:
            new = re.sub(r'(path=\{`/services/[^`]+\`) (title=)', r'\1}\2', content)
            if new != content:
                with open(f, 'w') as fh:
                    fh.write(new)
                fixed += 1
            else:
                broken += 1
print(f'fixed: {fixed}, still broken: {broken}')
