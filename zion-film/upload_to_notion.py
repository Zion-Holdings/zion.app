#!/usr/bin/env python3
import os
import argparse
from pathlib import Path
from notion_client import Client


def create_page(notion: Client, parent_page_id: str, title: str, script_md: str, file_paths: list[str]):
    children = []
    # Title
    children.append({
        "object": "block",
        "type": "heading_1",
        "heading_1": {"rich_text": [{"type": "text", "text": {"content": title}}]}
    })
    # Script (as paragraph blocks)
    for line in script_md.splitlines():
        content = line if line else "\u200b"
        children.append({
            "object": "block",
            "type": "paragraph",
            "paragraph": {"rich_text": [{"type": "text", "text": {"content": content}}]}
        })
    # Files (as bulleted list of local paths)
    if file_paths:
        children.append({
            "object": "block",
            "type": "heading_2",
            "heading_2": {"rich_text": [{"type": "text", "text": {"content": "Assets"}}]}
        })
        for p in file_paths:
            children.append({
                "object": "block",
                "type": "bulleted_list_item",
                "bulleted_list_item": {"rich_text": [{"type": "text", "text": {"content": str(p)}}]}
            })

    page = notion.pages.create(
        parent={"type": "page_id", "page_id": parent_page_id},
        properties={
            "title": [{"type": "text", "text": {"content": title}}]
        },
        children=children
    )
    return page


def main():
    parser = argparse.ArgumentParser(description="Upload Zion OS documentary script to Notion")
    parser.add_argument("--script", required=True, help="Path to script markdown")
    parser.add_argument("--timeline", required=False, help="Path to timeline CSV")
    parser.add_argument("--srt", required=False, help="Path to SRT file")
    args = parser.parse_args()

    api_key = os.getenv("NOTION_API_KEY")
    parent_id = os.getenv("NOTION_PARENT_PAGE_ID")
    if not api_key or not parent_id:
        raise SystemExit("Set NOTION_API_KEY and NOTION_PARENT_PAGE_ID env vars")

    notion = Client(auth=api_key)

    script_md = Path(args.script).read_text(encoding="utf-8")
    files = [p for p in [args.timeline, args.srt] if p]

    page = create_page(
        notion=notion,
        parent_page_id=parent_id,
        title="Zion OS — Documentary (60-min)",
        script_md=script_md,
        file_paths=files,
    )
    print(f"Created Notion page: {page.get('url')}")


if __name__ == "__main__":
    main()