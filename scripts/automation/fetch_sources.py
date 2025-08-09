import asyncio
from pathlib import Path
from typing import List, Dict
import httpx

DATA_DIR = Path("data/sources")


async def _fetch_one(client: httpx.AsyncClient, src: Dict) -> None:
    url = src.get("url")
    name = src.get("name") or url.replace("://", "_").replace("/", "_")
    if not url:
        return
    try:
        resp = await client.get(url, timeout=20)
        resp.raise_for_status()
        DATA_DIR.mkdir(parents=True, exist_ok=True)
        out = DATA_DIR / f"{name}.txt"
        out.write_text(resp.text, encoding="utf-8")
    except Exception:
        # best-effort fetcher
        return


async def fetch_all_sources(sources: List[Dict]) -> None:
    async with httpx.AsyncClient(follow_redirects=True) as client:
        await asyncio.gather(*[_fetch_one(client, s) for s in sources])