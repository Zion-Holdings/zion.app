#!/usr/bin/env python3
from pathlib import Path
p = Path('content-loop/scripts/unified_content_loop.py')
text = p.read_text(encoding='utf-8')
old = '''    page = PAGE_TMPL.format(
        title=title.replace("'", "\\\\'"),
        description=description.replace("'", "\\\\'"),
        canonical=canonical,
        canonical_rel=canonical_rel,
        NOW_ISO=NOW_ISO,
        word_count=word_count,
        related_links=related_links,
    )'''
new = '''    page = PAGE_TMPL
    page = page.replace("__TITLE__", title.replace('"', '\\\\"'))
    page = page.replace("__DESCRIPTION__", description.replace('"', '\\\\"'))
    page = page.replace("__CANONICAL__", canonical)
    page = page.replace("__CANONICAL_REL__", canonical_rel)
    page = page.replace("__NOW_ISO__", NOW_ISO)
    page = page.replace("__WORD_COUNT__", str(word_count))
    page = page.replace("__RELATED_LINKS__", related_links)'''
if old not in text:
    raise SystemExit('OLD_RENDER_NOT_FOUND')
text = text.replace(old, new)
text = text.replace("'{title}'", "'__TITLE__'")
text = text.replace("'{description}'", "'__DESCRIPTION__'")
text = text.replace("'{canonical}'", "'__CANONICAL__'")
text = text.replace("'{canonical_rel}'", "'__CANONICAL_REL__'")
text = text.replace("'{NOW_ISO}'", "'__NOW_ISO__'")
text = text.replace("{word_count}", "__WORD_COUNT__")
text = text.replace("{related_links}", "__RELATED_LINKS__")
p.write_text(text, encoding='utf-8')
print('PATCHED')
