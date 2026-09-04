#!/usr/bin/env python3
"""Sync root files from public/ (source of truth for _redirects and sitemap)."""
from pathlib import Path
import shutil

repo = Path("/Users/miami2/zion-support.github.io")

# Read public files
pub_redirects = (repo / "public" / "_redirects").read_text()
pub_sitemap = (repo / "public" / "sitemap.xml").read_text()

# Write to root
with open(repo / "_redirects", "w") as f:
    f.write(pub_redirects)

with open(repo / "sitemap.xml", "w") as f:
    f.write(pub_sitemap)

# Write to docs
with open(repo / "docs" / "_redirects", "w") as f:
    f.write(pub_redirects)

with open(repo / "docs" / "sitemap.xml", "w") as f:
    f.write(pub_sitemap)

# Verify
root_r = (repo / "_redirects").read_text()
pub_r = (repo / "public" / "_redirects").read_text()
root_s = (repo / "sitemap.xml").read_text()
pub_s = (repo / "public" / "sitemap.xml").read_text()

print(f"Sync complete:")
print(f"  _redirects root==public: {root_r == pub_r}")
print(f"  sitemap root==public: {root_s == pub_s}")
print(f"  _redirects: {len(root_r.splitlines())} lines, {root_r.count(' 200')} 200s, {root_r.count(' 301')} 301s")
print(f"  sitemap: {len(root_s.splitlines())} lines, {root_s.count('<loc>')} URLs")
