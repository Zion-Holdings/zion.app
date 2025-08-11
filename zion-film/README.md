# Zion OS — Documentary Production Package

This directory contains production-ready assets for a cinematic documentary on Zion OS, structured for 30/60/90-minute runtimes.

Contents
- Scripts: `script_30min.md`, `script_60min.md`, `script_90min.md`
- Timelines: `timeline_30min.csv`, `timeline_60min.csv`, `timeline_90min.csv`
- 60-min assets: `voiceover_60min.txt`, `interviews_60min.md`, `sfx_broll_60min.csv`, `subtitles_60min.srt`
- Figma: `figma_overlays/overlays_60min.json`
- Build tools: `requirements.txt`, `build_assets.py`, `upload_to_notion.py`

Quick Start
1) Create a Python venv and install dependencies:
   ```bash
   python3 -m venv .venv && source .venv/bin/activate
   pip install -r requirements.txt
   ```

2) Build a clean PDF of the 60-min script:
   ```bash
   python build_assets.py --script /workspace/zion-film/script_60min.md --pdf /workspace/zion-film/Zion_OS_Documentary_60min.pdf
   ```

3) Upload to Notion (optional):
   ```bash
   export NOTION_API_KEY="secret_..."
   export NOTION_PARENT_PAGE_ID="<your_parent_page_id>"
   python upload_to_notion.py --script /workspace/zion-film/script_60min.md --timeline /workspace/zion-film/timeline_60min.csv --srt /workspace/zion-film/subtitles_60min.srt
   ```

Notes
- Figma overlays are specified as JSON to drop into a plugin or generate frames via API. Names match the lower-third and card components referenced in the script.
- The SRT is keyed to the primary voiceover moments for the 60-min cut and can be expanded during edit conform.
- Replace placeholders like trailer pulls with your `/trailer` module assets during conform.