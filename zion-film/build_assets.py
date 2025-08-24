#!/usr/bin/env python3
import argparse
from pathlib import Path
from reportlab.lib.pagesizes import LETTER
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer
from reportlab.lib.units import inch

HEADING_KEYS = ["Act ", "Title:", "Logline", "Structure", "Stylistic Notes"]


def md_to_story(md_text: str):
    styles = getSampleStyleSheet()
    title_style = ParagraphStyle("Title", parent=styles["Title"], spaceAfter=18)
    h_style = ParagraphStyle("Heading", parent=styles["Heading2"], spaceBefore=12, spaceAfter=6)
    body_style = ParagraphStyle("Body", parent=styles["BodyText"], leading=16, spaceAfter=6)

    story = []
    for raw in md_text.splitlines():
        line = raw.rstrip()
        if not line:
            story.append(Spacer(1, 0.14 * inch))
            continue
        if line.startswith("Title:"):
            story.append(Paragraph(line.replace("Title:", "<b>Title:</b>"), title_style))
            continue
        if any(line.startswith(k) for k in HEADING_KEYS) or line.endswith(":"):
            story.append(Paragraph(f"<b>{line}</b>", h_style))
            continue
        # Emphasis for VO markers
        if line.strip().startswith("VO-"):
            story.append(Paragraph(f"<i>{line}</i>", body_style))
            continue
        story.append(Paragraph(line, body_style))
    return story


def build_pdf(script_path: Path, pdf_path: Path):
    text = script_path.read_text(encoding="utf-8")
    doc = SimpleDocTemplate(str(pdf_path), pagesize=LETTER, leftMargin=0.8*inch, rightMargin=0.8*inch, topMargin=0.8*inch, bottomMargin=0.8*inch)
    story = md_to_story(text)
    doc.build(story)
    print(f"Wrote PDF: {pdf_path}")


def main():
    parser = argparse.ArgumentParser(description="Build Zion OS documentary assets")
    parser.add_argument("--script", type=str, required=True, help="Path to script markdown")
    parser.add_argument("--pdf", type=str, required=True, help="Output PDF path")
    args = parser.parse_args()
    build_pdf(Path(args.script), Path(args.pdf))


if __name__ == "__main__":
    main()