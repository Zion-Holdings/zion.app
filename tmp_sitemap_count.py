#!/usr/bin/env python3
import re

with open('/Users/klebergarciaalcatrao/zion-support.github.io/sitemap.xml', 'r') as f:
    content = f.read()
    
url_count = len(re.findall(r'<url>', content))
print(f"Total URLs in sitemap: {url_count}")