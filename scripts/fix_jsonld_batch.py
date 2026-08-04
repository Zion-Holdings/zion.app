from pathlib import Path

root = Path('app/blog')
count = 0
for p in root.glob('*/page.tsx'):
    txt = p.read_text(errors='replace')
    if 'dangerouslySetInnerHTML={__html: JSON.stringify(jsonLd)}' in txt:
        new = txt.replace('dangerouslySetInnerHTML={__html: JSON.stringify(jsonLd)}', 'dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}')
        if new != txt:
            p.write_text(new)
            count += 1
print('fixed', count)
