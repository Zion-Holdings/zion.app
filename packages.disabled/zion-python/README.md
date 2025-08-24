# zion-python

Python client for Zion OS APIs.

```python
from zion import ZionClient

client = ZionClient(base_url="https://api.zion.example", api_key="...")
jobs = client.marketplace_list_jobs()
print(jobs)
```