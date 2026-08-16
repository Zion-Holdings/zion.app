import tempfile, os
print("tempdir:", tempfile.gettempdir())
# Read the file we know exists
path = os.path.join(tempfile.gettempdir(), "zion_urls.txt")
with open(path) as f:
    lines = [l.strip() for l in f if l.strip()]
print("Total URLs:", len(lines))
