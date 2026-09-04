#!/usr/bin/env python3
"""Batch 3: Mass-enrich remaining thin tool pages with real content."""
import re
from pathlib import Path
import json

PUBLIC = Path("/Users/miami2/zion-support.github.io/public")

# Load the site-deep-crawl.json to get actual page titles/subtitles
crawl_data = {}
crawl_path = Path("/Users/miami2/zion-support.github.io/site-deep-crawl.json")
if crawl_path.exists():
    try:
        with open(crawl_path) as f:
            crawl_data = json.load(f)
    except:
        crawl_data = {}

def get_meta(slug, key, default):
    """Try to get metadata from crawl data."""
    for entry in crawl_data.get("pages", []):
        if entry.get("path", "").rstrip("/") == slug:
            val = entry.get(key, "")
            if val:
                return val
    return default

def enrich(path, title, description, h1, body):
    content = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{title} | Zion Tech Group</title>
  <meta name="description" content="{description}">
  <link rel="canonical" href="https://ziontechgroup.com{path}/">
  <meta property="og:title" content="{title}">
  <meta property="og:description" content="{description}">
  <meta property="og:type" content="website">
  <style>
    * {{ margin: 0; padding: 0; box-sizing: border-box; }}
    body {{ font-family: system-ui, -apple-system, sans-serif; background: #0b1220; color: #e6f0ff; line-height: 1.6; }}
    .wrap {{ max-width: 1100px; margin: 0 auto; padding: 32px 24px; }}
    h1 {{ font-size: 2.2rem; font-weight: 700; margin-bottom: 16px; line-height: 1.2; }}
    h2 {{ font-size: 1.4rem; font-weight: 600; margin: 28px 0 10px; color: #94a3b8; }}
    p {{ margin: 0 0 14px; color: #cbd5e1; }}
    .card-grid {{ display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 14px; margin: 20px 0; }}
    .card {{ border: 1px solid #1e293b; border-radius: 8px; padding: 16px; background: #0f172a; }}
    .card h3 {{ font-size: 1rem; margin-bottom: 6px; color: #60a5fa; }}
    .card p {{ font-size: 0.85rem; color: #94a3b8; }}
    .cta {{ display: inline-flex; align-items: center; gap: 8px; padding: 10px 18px; background: #2563eb; color: #fff; text-decoration: none; border-radius: 8px; font-weight: 600; margin-top: 20px; }}
    .nav {{ display: flex; gap: 14px; margin-bottom: 28px; flex-wrap: wrap; }}
    .nav a {{ color: #94a3b8; text-decoration: none; }}
    .nav a:hover {{ color: #e6f0ff; }}
    .footer {{ margin-top: 40px; padding: 20px 0; border-top: 1px solid #1e293b; color: #64748b; font-size: 0.8rem; }}
    .footer a {{ color: #64748b; text-decoration: none; margin-right: 12px; }}
  </style>
</head>
<body>
<div class="wrap">
  <nav class="nav">
    <a href="/">Home</a>
    <a href="/services/">Services</a>
    <a href="/tools/">Tools</a>
    <a href="/contact/">Contact</a>
  </nav>
  <h1>{h1}</h1>
  {body}
  <a href="/contact/" class="cta">Start a project</a>
</div>
<div class="footer">
  <div class="wrap">
    <p>&copy; 2026 Zion Tech Group. All rights reserved.</p>
    <div>
      <a href="/privacy/">Privacy</a>
      <a href="/terms/">Terms</a>
      <a href="/contact/">Contact</a>
    </div>
  </div>
</div>
</body>
</html>"""
    Path(path).write_text(content, encoding="utf-8")
    return len(content)

# === TOOL PAGES - mass enrich ===
tool_content = {
    "tools/id-generator": ("ID Generator", "Generate unique IDs — UUID, ULID, nanoid, and custom formats — for databases, APIs, and distributed systems.",
        "ID Generator",
        """<p>Generate unique identifiers in multiple formats. Choose from UUID v4, ULID, nanoid, or custom patterns — each with different tradeoffs for length, sortability, and collision resistance.</p>
<h2>ID Formats</h2>
<div class="card-grid">
  <div class="card"><h3>UUID v4</h3><p>Standard 128-bit random identifiers. Universally recognized, collision-resistant, and widely supported across databases and systems.</p></div>
  <div class="card"><h3>ULID</h3><p>Universally Unique Lexicographically Sortable Identifiers. Sortable by time while remaining collision-resistant — useful for chronological ordering.</p></div>
  <div class="card"><h3>nanoid</h3><p>Compact, URL-safe identifiers using a larger alphabet. Shorter than UUID while maintaining strong collision resistance.</p></div>
  <div class="card"><h3>Custom Formats</h3><p>Generate IDs with specific prefixes, lengths, or patterns — tailored to your application's needs.</p></div>
</div>
<h2>When to Use Each</h2>
<p>UUID for general-purpose unique IDs. ULID when you need time-sortable identifiers. nanoid for compact URLs and short references. Custom formats when you need specific conventions.</p>"""),

    "tools/lorem-ipsum-pro": ("Lorem Ipsum Generator", "Generate placeholder text in multiple languages and formats — with control over paragraph count, word count, and starting phrases.",
        "Lorem Ipsum Generator",
        """<p>Generate realistic-looking placeholder text for design mockups, wireframes, and content layout testing. Supports multiple languages, custom word counts, and starting phrases.</p>
<h2>Features</h2>
<div class="card-grid">
  <div class="card"><h3>Multiple Languages</h3><p>Generate lorem ipsum in Latin, English, and several other languages — useful for testing multilingual layouts.</p></div>
  <div class="card"><h3>Count Control</h3><p>Specify exact paragraph count, sentence count, or word count. Get exactly the amount of text you need.</p></div>
  <div class="card"><h3>Custom Starters</h3><p>Start with custom opening phrases. Useful for matching your design's tone or testing specific heading structures.</p></div>
  <div class="card"><h3>Copy & Export</h3><p>Copy to clipboard or download as text. Clean output with no extra formatting.</p></div>
</div>"""),

    "tools/markdown-to-html": ("Markdown to HTML", "Convert Markdown to clean, semantic HTML — with preview, syntax highlighting, and CommonMark plus extension support.",
        "Markdown to HTML Converter",
        """<p>Paste any Markdown and get clean HTML output. Supports headings, lists, code blocks, tables, links, images, blockquotes, and inline formatting — with a live preview of the rendered result.</p>
<h2>Output Options</h2>
<div class="card-grid">
  <div class="card"><h3>Semantic HTML</h3><p>Proper heading hierarchy, accessible lists, and structured code blocks. HTML that works well with screen readers and SEO.</p></div>
  <div class="card"><h3>Syntax Highlighting</h3><p>Code blocks with language-specific highlighting. Supports most common languages.</p></div>
  <div class="card"><h3>Tables & More</h3><p>Markdown tables, footnotes, definition lists, and task lists — all converted to proper HTML.</p></div>
  <div class="card"><h3>Copy Output</h3><p>Copy the raw HTML directly, or use the preview to verify rendering before embedding.</p></div>
</div>"""),

    "tools/js-obfuscator": ("JavaScript Obfuscator", "Obfuscate JavaScript code to protect intellectual property — rename variables, encode strings, and add control-flow flattening.",
        "JavaScript Obfuscator",
        """<p>Protect your JavaScript code from casual reading and modification. Obfuscation renames variables, encodes string literals, flattens control flow, and adds noise — making reverse engineering significantly harder.</p>
<h2>Obfuscation Levels</h2>
<div class="card-grid">
  <div class="card"><h3>Light</h3><p>Basic variable renaming and string encoding. Preserves readability for debugging while adding a layer of protection.</p></div>
  <div class="card"><h3>Medium</h3><p>Adds control-flow flattening, dead code injection, and more aggressive string encoding. Good balance of protection and performance.</p></div>
  <div class="card"><h3>Heavy</h3><p>Maximum obfuscation with all protections enabled. Best for code you want to protect most — at the cost of larger output and slower execution.</p></div>
</div>
<h2>Important</h2>
<p>Obfuscation is not encryption. Determined attackers can still reverse-engineer obfuscated code. Use it as one layer in a broader protection strategy — not as the sole defense.</p>"""),

    "tools/image-resize": ("Image Resizer", "Resize images online — change dimensions, scale proportionally, and adjust quality. Supports common formats.",
        "Image Resizer",
        """<p>Resize images by specifying new dimensions, scaling by percentage, or fitting to a target size. Maintain aspect ratio automatically or stretch to exact dimensions.</p>
<h2>Options</h2>
<div class="card-grid">
  <div class="card"><h3>Dimensions</h3><p>Set width and height in pixels. Choose to maintain aspect ratio or ignore it for exact dimensions.</p></div>
  <div class="card"><h3>Scale</h3><p>Resize by percentage — 50% for half size, 200% for double, or any value in between.</p></div>
  <div class="card"><h3>Quality</h3><p>Adjust JPEG/WebP quality for output files. Lower quality means smaller files but more visible compression artifacts.</p></div>
  <div class="card"><h3>Format</h3><p>Convert between formats — PNG to JPEG, JPEG to WebP, and more — while resizing.</p></div>
</div>"""),

    "tools/css-box-shadow": ("CSS Box Shadow Generator", "Generate CSS box-shadow declarations visually — adjust offset, blur, spread, color, and inset to match your design.",
        "CSS Box Shadow Generator",
        """<p>Create CSS box-shadow values with a visual tool. Adjust horizontal and vertical offset, blur radius, spread radius, color, and opacity — then copy the generated CSS.</p>
<h2>Shadow Properties</h2>
<div class="card-grid">
  <div class="card"><h3>Offset</h3><p>Move the shadow horizontally and vertically. Positive X moves right, positive Y moves down.</p></div>
  <div class="card"><h3>Blur & Spread</h3><p>Blur softens the shadow edge. Spread expands or contracts the shadow size before blurring.</p></div>
  <div class="card"><h3>Color & Opacity</h3><p>Choose any color with adjustable opacity. Common choices: black, gray, or tinted shadows matching your brand.</p></div>
  <div class="card"><h3>Inset</h3><p>Toggle inset to create inner shadows — useful for pressed effects and inset borders.</p></div>
</div>
<h2>Multiple Shadows</h2>
<p>Add multiple shadow layers for complex effects — layered shadows create depth that single shadows can't match.</p>"""),

    "tools/csv-to-json": ("CSV to JSON Converter", "Convert CSV data to JSON format — array of objects, single object, or key-value pairs. Handles headers and quoted fields.",
        "CSV to JSON Converter",
        """<p>Paste CSV data and get JSON output in your preferred format. Detects headers automatically and handles quoted fields, commas within values, and common CSV edge cases.</p>
<h2>Output Formats</h2>
<div class="card-grid">
  <div class="card"><h3>Array of Objects</h3><p>Each row becomes a JSON object with column headers as keys. Ideal for API responses and database inserts.</p></div>
  <div class="card"><h3>Single Object</h3><p>Uses the first data row with headers as keys. Good for config files and single-record imports.</p></div>
  <div class="card"><h3>Key-Value Pairs</h3><p>First column as keys, second column as values. Useful for simple mappings and lookup tables.</p></div>
</div>"""),

    "tools/loan-calculator": ("Loan Calculator", "Calculate loan payments, total interest, amortization schedules, and payoff timelines for any loan scenario.",
        "Loan Calculator",
        """<p>Enter loan amount, interest rate, and term to get monthly payments, total interest, and a full amortization schedule. Also compare different loan scenarios side by side.</p>
<h2>What You Can Calculate</h2>
<div class="card-grid">
  <div class="card"><h3>Monthly Payment</h3><p>Fixed monthly payment for the full loan term, based on principal, rate, and duration.</p></div>
  <div class="card"><h3>Total Cost</h3><p>Total amount paid over the life of the loan — principal plus total interest.</p></div>
  <div class="card"><h3>Amortization Schedule</h3><p>Month-by-month breakdown showing how each payment splits between interest and principal.</p></div>
  <div class="card"><h3>Scenario Comparison</h3><p>Compare different rates, terms, or amounts side by side to find the best loan option.</p></div>
</div>"""),

    "tools/http-status": ("HTTP Status Codes Reference", "Look up any HTTP status code — meaning, category, common causes, and troubleshooting steps.",
        "HTTP Status Codes Reference",
        """<p>Every HTTP status code explained — from common ones like 200, 301, 404, and 500 to the full range of informational, success, redirect, client error, and server error codes.</p>
<h2>Categories</h2>
<div class="card-grid">
  <div class="card"><h3>1xx — Informational</h3><p>100 Continue, 101 Switching Protocols. Intermediate responses indicating the client should continue or that the protocol is changing.</p></div>
  <div class="card"><h3>2xx — Success</h3><p>200 OK, 201 Created, 204 No Content, 206 Partial Content. The request succeeded — with variations for what was returned.</p></div>
  <div class="card"><h3>3xx — Redirect</h3><p>301 Moved Permanently, 302 Found, 304 Not Modified, 307 Temporary Redirect. The client should take additional action to complete the request.</p></div>
  <div class="card"><h3>4xx — Client Error</h3><p>400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 429 Too Many Requests. The request contains an error or the resource doesn't exist.</p></div>
  <div class="card"><h3>5xx — Server Error</h3><p>500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable, 504 Gateway Timeout. The server failed to fulfill a valid request.</p></div>
</div>"""),

    "tools/case-converter": ("Case Converter", "Convert text between cases — lowercase, UPPERCASE, Title Case, camelCase, snake_case, kebab-case, and more.",
        "Case Converter",
        """<p>Convert text between any casing convention — lowercase, UPPERCASE, Title Case, camelCase, PascalCase, snake_case, kebab-case, CONSTANT_CASE, and more. Paste text, choose the target case, and get the converted result.</p>
<h2>Supported Cases</h2>
<div class="card-grid">
  <div class="card"><h3>Text Cases</h3><p>lowercase, UPPERCASE, Title Case, Sentence case — for natural language text.</p></div>
  <div class="card"><h3>Code Cases</h3><p>camelCase, PascalCase, snake_case, kebab-case, CONSTANT_CASE — for identifiers, filenames, and code.</p></div>
  <div class="card"><h3>Other</h3><p>dot.case, path/case, space separated — for URLs, file paths, and custom formats.</p></div>
</div>"""),

    "tools/css-minifier-pro": ("CSS Minifier", "Minify CSS to reduce file size — remove whitespace, comments, and unnecessary characters while preserving functionality.",
        "CSS Minifier",
        """<p>Reduce CSS file size by removing comments, whitespace, and redundant characters. Smaller CSS loads faster — important for performance-critical pages.</p>
<h2>What Gets Removed</h2>
<div class="card-grid">
  <div class="card"><h3>Comments</h3><p>All CSS comments are stripped — they're useful during development but add unnecessary bytes in production.</p></div>
  <div class="card"><h3>Whitespace</h3><p>Extra spaces, tabs, and newlines are collapsed. Structural whitespace needed for parsing is preserved.</p></div>
  <div class="card"><h3>Optional Characters</h3><p>Semicolons before closing braces, leading zeros in lengths, and other safe reductions.</p></div>
</div>
<h2>Before & After</h2>
<p>Input your CSS and see the size reduction immediately. Typical savings range from 30% to 60% depending on how verbose the original CSS is.</p>"""),

    "tools/og-preview": ("Open Graph Preview", "Preview how your page will appear when shared on social media — with og:title, og:description, and og:image rendering.",
        "Open Graph Preview",
        """<p>Enter a URL or paste your Open Graph meta tags to see how your page will look when shared on Facebook, Twitter, LinkedIn, and other platforms. Catch missing or poorly formatted OG tags before they become shared incorrectly.</p>
<h2>What You Can Preview</h2>
<div class="card-grid">
  <div class="card"><h3>Title & Description</h3><p>See how your og:title and og:description render in social shares. Fix truncation, missing tags, or unflattering copy.</p></div>
  <div class="card"><h3>Image Preview</h3><p>See how og:image appears in the share card. Check dimensions, aspect ratio, and whether the image is representative.</p></div>
  <div class="card"><h3>Platform Variants</h3><p>Preview how the same page appears across different platforms — card styles vary between Facebook, Twitter, and LinkedIn.</p></div>
</div>"""),

    "tools/md5-hash": ("MD5 Hash Generator", "Generate MD5 hashes of any text or string — for checksums, quick hashing, and non-security-critical identifier generation.",
        "MD5 Hash Generator",
        """<p>Enter any text and get its MD5 hash. Useful for checksums, quick content fingerprinting, and non-security use cases where MD5's collision resistance is sufficient.</p>
<h2>Use Cases</h2>
<div class="card-grid">
  <div class="card"><h3>Checksums</h3><p>Verify file integrity by comparing MD5 hashes — quick way to detect accidental corruption or unintended changes.</p></div>
  <div class="card"><h3>Quick Hashing</h3><p>Generate consistent hashes for non-security purposes — deduplication keys, cache keys, and content identifiers.</p></div>
  <div class="card"><h3>String Fingerprints</h3><p>Create short, deterministic fingerprints of strings for comparison and indexing.</p></div>
</div>
<h2>Security Note</h2>
<p>MD5 is not suitable for security-critical hashing — it's vulnerable to collision attacks. Use SHA-256 or stronger for passwords, digital signatures, and security applications.</p>"""),

    "tools/qr-scanner": ("QR Code Scanner", "Scan and decode QR codes from images — upload or paste a QR code image and get the encoded content.",
        "QR Code Scanner",
        """<p>Upload a QR code image and get the decoded content instantly — URLs, text, contact info, WiFi credentials, or any other data format the QR code contains.</p>
<h2>Supported Content</h2>
<div class="card-grid">
  <div class="card"><h3>URLs</h3><p>QR codes containing web addresses — decode and open or copy the link.</p></div>
  <div class="card"><h3>Text</h3><p>Plain text encoded in QR codes — notes, messages, or any text content.</p></div>
  <div class="card"><h3>Structured Data</h3><p>vCard contact info, WiFi credentials, calendar events, and other structured QR code formats.</p></div>
</div>
<h2>How It Works</h2>
<p>Upload or paste a QR code image. The scanner detects the code, decodes the data, and displays the content — with format detection for common QR code data types.</p>"""),

    "tools/sql-query-builder": ("SQL Query Builder", "Build SQL queries visually — SELECT, WHERE, JOIN, GROUP BY, ORDER BY. Get clean, runnable SQL without writing it by hand.",
        "SQL Query Builder",
        """<p>Construct SQL queries through a visual interface. Select tables, pick columns, add filters, define joins, and get SQL output ready to run against your database.</p>
<h2>Query Features</h2>
<div class="card-grid">
  <div class="card"><h3>SELECT</h3><p>Choose tables and columns. The tool generates the SELECT clause as you build.</p></div>
  <div class="card"><h3>WHERE</h3><p>Add filter conditions with operators: =, !=, <, >, LIKE, IN, BETWEEN, and more.</p></div>
  <div class="card"><h3>JOIN</h3><p>Build INNER, LEFT, RIGHT, and FULL JOINs with ON conditions between tables.</p></div>
  <div class="card"><h3>Aggregation</h3><p>GROUP BY, COUNT, SUM, AVG, MIN, MAX — with HAVING filters for aggregated results.</p></div>
</div>"""),

    "tools/list-sorter": ("List Sorter", "Sort lists of text, numbers, or objects — ascending, descending, alphabetical, numeric, by length, or custom order.",
        "List Sorter",
        """<p>Paste a list and sort it your way. Alphabetical, numerical, by length, random shuffle, or custom order — with options for case sensitivity, duplicate handling, and delimiter choice.</p>
<h2>Sorting Options</h2>
<div class="card-grid">
  <div class="card"><h3>By Value</h3><p>Alphabetical (A-Z or Z-A) for text, ascending/descending for numbers. Smart detection of content type.</p></div>
  <div class="card"><h3>By Length</h3><p>Sort by string length — shortest first or longest first. Useful for prioritization and filtering.</p></div>
  <div class="card"><h3>Custom Order</h3><p>Define your own sort order by providing a priority list. Items not in the list go to the end.</p></div>
  <div class="card"><h3>Random</h3><p>Shuffle the list into random order — useful for sampling, testing, and breaking sequential patterns.</p></div>
</div>"""),

    "tools/percentage-calculator": ("Percentage Calculator", "Calculate percentages — what is X% of Y, X is what % of Y, percentage increase/decrease, and discount calculations.",
        "Percentage Calculator",
        """<p>Solve any percentage problem. Find what percentage one number is of another, calculate a percentage of a number, compute percentage change, or apply discounts and markups.</p>
<h2>Calculations</h2>
<div class="card-grid">
  <div class="card"><h3>Basic Percentage</h3><p>What is X% of Y? And X is what percent of Y? The two most common percentage questions.</p></div>
  <div class="card"><h3>Percentage Change</h3><p>Percentage increase or decrease between two values. Useful for growth rates, price changes, and performance metrics.</p></div>
  <div class="card"><h3>Discounts & Markups</h3><p>Apply a percentage discount to a price, or add a markup. Get the final price and the amount saved or added.</p></div>
</div>"""),

    "tools/timestamp-generator": ("Timestamp Generator", "Generate Unix timestamps and formatted date-time strings — convert between formats, set timezones, and compute relative times.",
        "Timestamp Generator",
        """<p>Generate Unix timestamps (seconds or milliseconds since epoch), convert them to human-readable formats, and work with different timezones. Also supports relative timestamps like "30 days ago" or "next Monday".</p>
<h2>Conversion Options</h2>
<div class="card-grid">
  <div class="card"><h3>Unix Timestamp</h3><p>Get the current Unix timestamp or convert any date-time to seconds or milliseconds since January 1, 1970.</p></div>
  <div class="card"><h3>Format Strings</h3><p>Convert timestamps to common formats: ISO 8601, RFC 2822, custom patterns, and locale-specific formats.</p></div>
  <div class="card"><h3>Timezone Support</h3><p>Work with timestamps in any timezone. Convert between timezones and generate timestamps for specific zones.</p></div>
  <div class="card"><h3>Relative Times</h3><p>Generate timestamps for "now + 1 hour", "3 days ago", "next month", and other relative expressions.</p></div>
</div>"""),

    "tools/unit-converter": ("Unit Converter", "Convert between units of measurement — length, weight, volume, temperature, speed, area, and more.",
        "Unit Converter",
        """<p>Convert between units across multiple measurement categories. Enter a value in any unit and get the equivalent in every other unit in that category.</p>
<h2>Categories</h2>
<div class="card-grid">
  <div class="card"><h3>Length</h3><p>Meters, feet, inches, centimeters, kilometers, miles, yards, and more — for distance and dimension conversions.</p></div>
  <div class="card"><h3>Weight & Mass</h3><p>Kilograms, pounds, ounces, grams, tons, stones — for weight and mass conversions.</p></div>
  <div class="card"><h3>Volume</h3><p>Liters, gallons, cups, milliliters, cubic meters, fluid ounces — for liquid and volume conversions.</p></div>
  <div class="card"><h3>Temperature</h3><p>Celsius, Fahrenheit, Kelvin — with accurate formulas for temperature scale conversion.</p></div>
  <div class="card"><h3>Speed & More</h3><p>Speed, area, data size, time, and pressure units — comprehensive coverage for common conversion needs.</p></div>
</div>"""),

    "tools/url-parser": ("URL Parser", "Parse any URL into its components — scheme, host, port, path, query parameters, and fragment. Also build URLs from components.",
        "URL Parser",
        """<p>Enter a URL and see it broken down into all its components: protocol, domain, port, path, query string parameters, and fragment. Also use it to build URLs from individual components.</p>
<h2>Parsed Components</h2>
<div class="card-grid">
  <div class="card"><h3>Basic Parts</h3><p>Scheme, host, port, path, query, fragment — each component clearly identified and displayed.</p></div>
  <div class="card"><h3>Query Parameters</h3><p>Parse the query string into individual key-value pairs. See all parameters with their values.</p></div>
  <div class="card"><h3>URL Building</h3><p>Construct URLs from components — enter scheme, host, path, and parameters separately and get the combined URL.</p></div>
</div>"""),

    "tools/yaml-formatter": ("YAML Formatter", "Format, validate, and prettify YAML — with syntax checking, indentation correction, and key sorting options.",
        "YAML Formatter",
        """<p>Paste YAML and get clean, properly indented, validated output. Check for syntax errors, fix indentation, sort keys, and minify or pretty-print as needed.</p>
<h2>Features</h2>
<div class="card-grid">
  <div class="card"><h3>Formatting</h3><p>Correct indentation, consistent spacing, and clean structure. Turn messy YAML into readable, well-formatted documents.</p></div>
  <div class="card"><h3>Validation</h3><p>Check YAML syntax and catch errors — mismatched indentation, invalid characters, missing colons, and other common mistakes.</p></div>
  <div class="card"><h3>Key Sorting</h3><p>Sort keys alphabetically or by custom order. Useful for consistent output and diff-friendly configurations.</p></div>
  <div class="card"><h3>Output Modes</h3><p>Pretty-print with full formatting, or minify to compact single-line output for storage and transmission.</p></div>
</div>"""),

    "tools/base64-encoder": ("Base64 Encoder/Decoder", "Encode text and data to Base64, or decode Base64 back to original content — with UTF-8 support and file encoding.",
        "Base64 Encoder & Decoder",
        """<p>Convert text and data to and from Base64 encoding. Useful for embedding data in URLs, data URIs, configuration files, and any context where binary data needs a text-safe representation.</p>
<h2>Features</h2>
<div class="card-grid">
  <div class="card"><h3>Encoding</h3><p>Convert any text to Base64. Supports UTF-8 for non-ASCII characters — proper handling of international text.</p></div>
  <div class="card"><h3>Decoding</h3><p>Decode Base64 back to the original text. Validates input and reports errors for invalid Base64.</p></div>
  <div class="card"><h3>URL-Safe Variant</h3><p>Encode and decode using URL-safe Base64 — replaces + and / with - and _ for use in URLs and filenames.</p></div>
</div>"""),

    "tools/jwt-decoder": ("JWT Decoder", "Decode and inspect JSON Web Tokens — view header, payload, and signature info without verifying the signature.",
        "JWT Decoder",
        """<p>Paste a JWT and see its decoded header and payload in readable JSON. Inspect the claims, expiration, issuer, subject, and other fields — useful for debugging authentication and authorization issues.</p>
<h2>What You Get</h2>
<div class="card-grid">
  <div class="card"><h3>Header</h3><p>Algorithm, token type, key ID, and other header fields decoded from the first segment.</p></div>
  <div class="card"><h3>Payload</h3><p>All claims decoded — registered claims (iss, sub, aud, exp, nbf, iat, jti) and any custom claims your application uses.</p></div>
  <div class="card"><h3>Signature Info</h3><p>Shows the signature segment — note: this tool decodes but does NOT verify the signature. Verification requires the secret or public key.</p></div>
</div>"""),

    "tools/uuid-generator": ("UUID Generator", "Generate UUIDs — v1, v4, v5, and nil UUIDs — with batch generation, formatting options, and copy-to-clipboard.",
        "UUID Generator",
        """<p>Generate universally unique identifiers in multiple versions. UUID v4 for random IDs, v1 for time-based, v5 for namespace-based — with batch generation and multiple output formats.</p>
<h2>UUID Versions</h2>
<div class="card-grid">
  <div class="card"><h3>UUID v4</h3><p>Randomly generated UUIDs. Most common choice for general-purpose unique identifiers.</p></div>
  <div class="card"><h3>UUID v1</h3><p>Time-based UUIDs using MAC address and timestamp. Sortable by generation time.</p></div>
  <div class="card"><h3>UUID v5</h3><p>Namespace-based UUIDs using a namespace and name. Deterministic — same inputs produce same UUID.</p></div>
  <div class="card"><h3>Batch Generation</h3><p>Generate multiple UUIDs at once. Copy all or individually. Useful for seeding databases and test data.</p></div>
</div>"""),

    "tools/text-encrypt": ("Text Encryption Tool", "Encrypt and decrypt text with AES, DES, and other ciphers — with key management, encoding options, and mode selection.",
        "Text Encryption Tool",
        """<p>Encrypt text using symmetric ciphers and decrypt it back with the same key. Supports multiple algorithms and modes — useful for protecting data in transit, storing sensitive configuration, and learning about encryption.</p>
<h2>Supported Algorithms</h2>
<div class="card-grid">
  <div class="card"><h3>AES</h3><p>Advanced Encryption Standard — the most widely used symmetric cipher. Supports 128, 192, and 256-bit keys.</p></div>
  <div class="card"><h3>DES & 3DES</h3><p>Legacy ciphers for compatibility and learning. Not recommended for new security-sensitive applications.</p></div>
  <div class="card"><h3>Modes</h3><p>CBC, CTR, and other modes. Different modes have different properties — some require IVs, some provide authenticated encryption.</p></div>
</div>
<h2>Important</h2>
<p>This tool uses in-browser JavaScript crypto. Keys and data never leave your machine. But for production encryption, use established libraries with proper key management, authenticated encryption, and security review.</p>"""),

    "tools/word-counter": ("Word Counter", "Count words, characters, sentences, paragraphs, and readability metrics in any text — with live updates.",
        "Word Counter",
        """<p>Paste or type text and get instant counts: words, characters (with and without spaces), sentences, paragraphs, and estimated reading time. Also shows basic readability metrics.</p>
<h2>Counts Provided</h2>
<div class="card-grid">
  <div class="card"><h3>Word & Character Count</h3><p>Total words, total characters including spaces, and characters excluding spaces.</p></div>
  <div class="card"><h3>Structure</h3><p>Number of sentences and paragraphs detected automatically from the text.</p></div>
  <div class="card"><h3>Reading Time</h3><p>Estimated reading time at average reading speed (about 200 words per minute). Also speaking time estimate.</p></div>
  <div class="card"><h3>Density</h3><p>Most common words and their frequency. Useful for keyword analysis and spotting overused terms.</p></div>
</div>"""),

    "tools/color-picker": ("Color Picker", "Pick colors and convert between formats — HEX, RGB, HSL, HSV, and named colors. Generate palettes and check contrast.",
        "Color Picker",
        """<p>Pick colors visually or enter values in any format — HEX, RGB, HSL, HSV — and get conversions to all other formats. Generate color palettes, check contrast ratios, and find complementary colors.</p>
<h2>Features</h2>
<div class="card-grid">
  <div class="card"><h3>Format Conversion</h3><p>Enter a color in any format and get it in all others. HEX to RGB, RGB to HSL, named colors to every format.</p></div>
  <div class="card"><h3>Color Palettes</h3><p>Generate complementary, analogous, triadic, and monochromatic palettes from any base color.</p></div>
  <div class="card"><h3>Contrast Check</h3><p>Check WCAG contrast ratios between two colors. See whether text on a background passes accessibility standards.</p></div>
  <div class="card"><h3>Visual Picker</h3><p>Use the color wheel and sliders to pick colors visually. See the result in real time.</p></div>
</div>"""),

    "tools/robots-sitemap": ("Robots.txt & Sitemap Inspector", "Check your robots.txt and sitemap.xml — validate syntax, find issues, and preview how crawlers will interpret your directives.",
        "Robots.txt & Sitemap Inspector",
        """<p>Inspect your robots.txt and sitemap.xml for syntax issues, missing directives, and crawler interpretation. Enter a URL or paste your files to check them.</p>
<h2>What It Checks</h2>
<div class="card-grid">
  <div class="card"><h3>Robots.txt Validation</h3><p>Valid syntax, proper User-agent and Disallow/Allow directives, Sitemap directives, and common mistakes like typos in directive names.</p></div>
  <div class="card"><h3>Sitemap Validation</h3><p>Valid XML, correct namespace, proper <url> entries with <loc>, and optional <lastmod>, <changefreq>, and <priority>.</p></div>
  <div class="card"><h3>Crawler View</h3><p>Shows how different crawlers (Googlebot, Bingbot, etc.) would interpret your robots.txt based on their specific rules.</p></div>
</div>"""),

    "tools/number-base-converter": ("Number Base Converter", "Convert numbers between bases — binary, octal, decimal, hexadecimal, and any base from 2 to 36.",
        "Number Base Converter",
        """<p>Convert numbers between any bases from 2 to 36. Enter a number in any base and get it in all other common bases — binary, octal, decimal, hexadecimal, and beyond.</p>
<h2>Base Support</h2>
<div class="card-grid">
  <div class="card"><h3>Common Bases</h3><p>Binary (base 2), octal (base 8), decimal (base 10), hexadecimal (base 16) — the most commonly used number bases in computing.</p></div>
  <div class="card"><h3>Custom Bases</h3><p>Any base from 2 to 36. Uses digits 0-9 and letters A-Z for bases above 10.</p></div>
  <div class="card"><h3>Batch Conversion</h3><p>Convert multiple numbers at once. Paste a list and get all conversions together.</p></div>
</div>"""),
}

# === BLOG PAGES - mass enrich ===
blog_content = {
    "blog/cybersecurity-platform-msp-2026": ("Cybersecurity Platform for MSPs — 2026",
        "How managed service providers can deploy unified cybersecurity platforms that protect multiple clients without multiplying overhead.",
        "Cybersecurity Platform for MSPs",
        """<p>Managed service providers face a unique security challenge: protecting many client environments with limited internal security staff. A unified cybersecurity platform that serves all clients from one pane of glass is the answer — but choosing and deploying one requires care.</p>
<h2>What MSPs Need</h2>
<div class="card-grid">
  <div class="card"><h3>Multi-Tenant Visibility</h3><p>One dashboard that shows security posture across all clients — with client-level filtering so each customer sees only their own environment.</p></div>
  <div class="card"><h3> 표준화된 대응</h3><p>Consistent security policies and response playbooks that work across heterogeneous client environments — from small businesses to enterprises.</p></div>
  <div class="card"><h3> 자동화된 탐지 및 대응</h3><p>Automated threat detection, alerting, and response playbooks that scale across clients without requiring manual triage of every alert.</p></div>
  <div class="card"><h3> 컴플라이언스 지원</h3><p>Built-in support for common compliance frameworks — SOC 2, HIPAA, PCI DSS, GDPR — so MSP clients can demonstrate compliance without separate tooling.</p></div>
</div>
<h2>Deployment Considerations</h2>
<p>Start with a platform that integrates with the tools clients already use — endpoint protection, email security, identity providers, and cloud services. Build standardized onboarding processes so every new client gets the same security baseline. And invest in automation early — manual security operations don't scale across multiple clients.</p>"""),

    "blog/devops-gen-ai-cicd-2026": ("DevOps and Generative AI in CI/CD — 2026",
        "How generative AI is transforming CI/CD pipelines — from intelligent test selection to automated rollback decisions and change summarization.",
        "DevOps & Generative AI in CI/CD",
        """<p>CI/CD pipelines are ripe for generative AI augmentation. Unlike interactive development where AI assists a human, CI/CD is largely automated — making it easier to insert AI steps that improve reliability, speed, and developer experience without changing fundamental workflow patterns.</p>
<h2>AI in CI/CD</h2>
<div class="card-grid">
  <div class="card"><h3>Intelligent Test Selection</h3><p>AI can analyze code changes and select the most relevant tests to run — speeding up pipelines while maintaining coverage confidence.</p></div>
  <div class="card"><h3>Change Summarization</h3><p>Generate human-readable summaries of what a change does — diff analysis, affected services, and potential impact — for reviewers and approvers.</p></div>
  <div class="card"><h3>Rollback Decisions</h3><p>When a deployment fails, AI can analyze the failure pattern and recommend whether to roll back, patch forward, or investigate — with reasoning attached.</p></div>
  <div class="card"><h3>Pipeline Optimization</h3><p>Analyze pipeline history to find bottlenecks, suggest parallelization opportunities, and predict which stages are likely to fail.</p></div>
</div>
<h2>What to Watch For</h2>
<p>AI in CI/CD works best when the problem is well-defined and the context is available. It struggles when asked to make irreversible decisions without sufficient information. The best implementations use AI to recommend and inform, with humans retaining final authority over production changes.</p>"""),

    "blog/incident-response-retainer-2026": ("Incident Response Retainer — 2026",
        "Why incident response retainers matter in 2026 — and what to look for when choosing an IR partner for your organization.",
        "Incident Response Retainer",
        """<p>When a security incident hits, every minute of delay costs more. An incident response retainer gives you guaranteed access to experienced responders — before the incident happens, not while you're scrambling to find help.</p>
<h2>Why a Retainer</h2>
<div class="card-grid">
  <div class="card"><h3>Pre-Established Relationship</h3><p>When an incident hits, you already know the team, the process, and the escalation path. No time wasted establishing trust and context during a crisis.</p></div>
  <div class="card"><h3>Guaranteed Availability</h3><p>Retainers typically include guaranteed response times — so you know help is coming within the window you need, not when the responder happens to be available.</p></div>
  <div class="card"><h3>Preparedness Work</h3><p>Good IR retainers include pre-incident work — tabletop exercises, runbook reviews, contact list validation — that makes the actual response faster and more effective.</p></div>
</div>
<h2>Choosing a Retainer</h2>
<p>Look for responders with experience in your industry and technology stack. Confirm the scope — what's covered, response times, and limits. And treat the retainer as one part of your incident readiness, alongside internal runbooks, trained responders, and tested backup and recovery processes.</p>"""),

    "blog/api-management-gateway-2026": ("API Management and Gateway Platforms — 2026",
        "What to look for in API management and gateway platforms in 2026 — beyond rate limiting and authentication.",
        "API Management & Gateway Platforms",
        """<p>API gateways have evolved from simple traffic managers to comprehensive platforms that handle security, observability, transformation, and developer experience. In 2026, the best API platforms go well beyond rate limiting and authentication.</p>
<h2>Modern Platform Capabilities</h2>
<div class="card-grid">
  <div class="card"><h3>统一策略執行</h3><p>Consistent policy enforcement across all APIs — authentication, authorization, rate limiting, circuit breaking, and compliance — regardless of where the API runs.</p></div>
  <div class="card"><h3>可观测性</h3><p>Built-in logging, tracing, and metrics for every API call. Understand traffic patterns, latency, error rates, and dependency relationships across your API fleet.</p></div>
  <div class="card"><h3>Developer体験</h3><p>Developer portals, API documentation, sandbox environments, and self-service onboarding — making it easier for internal and external developers to consume your APIs.</p></div>
  <div class="card"><h3>轉換與編排</h3><p>Request/response transformation, protocol bridging, and API composition — letting you expose, adapt, and orchestrate APIs without changing backend services.</p></div>
</div>
<h2>Selection Criteria</h2>
<p>Evaluate platforms against your actual requirements — not feature checklists. Consider deployment model (managed, self-hosted, hybrid), integration with your existing infrastructure, operational overhead, and total cost of ownership. And remember that the best platform is the one your team can operate effectively, not the one with the most features.</p>"""),

    "blog/data-warehouse-modernization-2026": ("Data Warehouse Modernization — 2026",
        "Approaches to modernizing legacy data warehouses in 2026 — moving to cloud-native architectures without losing historical data or breaking downstream consumers.",
        "Data Warehouse Modernization",
        """<p>Legacy data warehouses accumulate years of historical data, hundreds of dependent reports, and deep institutional knowledge — which makes modernization both valuable and risky. The key is treating modernization as a migration discipline, not a big-bang replacement.</p>
<h2>Modernization Approaches</h2>
<div class="card-grid">
  <div class="card"><h3>Strangler Fig</h3><p>Incrementally migrate tables and workloads to the new platform while the legacy warehouse continues running. Route new workloads to the new platform, shift old ones over time.</p></div>
  <div class="card"><h3>Dual-Run</h3><p>Run old and new platforms in parallel for a period, comparing results to validate correctness before fully switching over. Higher cost but lower risk.</p></div>
  <div class="card"><h3> layered Migration</h3><p>Move storage and compute separately — lift storage to cloud object storage first, then modernize compute and query layers on top.</p></div>
</div>
<h2>Key Risks</h2>
<p>Breaking downstream reports and dashboards is the most common and most visible failure. Historical data migration is often harder than expected — especially when schemas have drifted. And team knowledge about the legacy system is often tacit and under-documented. Plan for these explicitly, not as afterthoughts.</p>"""),

    "blog/etl-pipeline-optimization-2026": ("ETL Pipeline Optimization — 2026",
        "Techniques for optimizing ETL pipelines in 2026 — reducing runtime, improving reliability, and lowering compute costs.",
        "ETL Pipeline Optimization",
        """<p>ETL pipelines are the backbone of data operations, and small inefficiencies compound across hundreds of pipelines running daily. Optimization isn't just about speed — it's about reliability, cost, and maintainability.</p>
<h2>Optimization Levers</h2>
<div class="card-grid">
  <div class="card"><h3>Incremental Processing</h3><p>Process only what changed since the last run, rather than re-processing entire datasets. Reduces runtime and compute cost dramatically for large datasets.</p></div>
  <div class="card"><h3>并行处理</h3><p>Identify independent stages and run them in parallel. Pipeline runtime often drops significantly with proper parallelization — if dependencies allow it.</p></div>
  <div class="card"><h3>资源优化</h3><p>Right-size compute for each stage. Not every stage needs the same resources — match compute to workload characteristics.</p></div>
  <div class="card"><h3>错误处理</h3><p>Build resilient error handling — retries with backoff, dead letter queues, and partial failure recovery — so pipelines don't fail entirely when one record is bad.</p></div>
</div>
<h2>Measuring Improvement</h2>
<p>Track pipeline runtime, success rate, compute cost, and data freshness. Optimization should improve one or more of these without degrading the others. Measure before and after each change — otherwise you're optimizing by feel, not by evidence.</p>"""),

    "blog/micro-saas-ai-social-media-manager-2026": ("Micro SaaS: AI Social Media Manager — 2026",
        "Building a micro SaaS for AI-powered social media management — architecture, features, and lessons from the 2026 landscape.",
        "Micro SaaS: AI Social Media Manager",
        """<p>Social media management is a crowded market, but AI opens room for micro SaaS products that do one thing well — scheduling, content generation, analytics, or community management — rather than trying to be everything to everyone.</p>
<h2>Product Positioning</h2>
<div class="card-grid">
  <div class="card"><h3>Niche Focus</h3><p>Pick a specific platform, audience, or use case. A tool for LinkedIn thought-leadership scheduling serves a different need than a tool for Instagram visual content planning.</p></div>
  <div class="card"><h3>AI as Enabler</h3><p>Use AI to reduce the friction that makes social media management tedious — draft generation, image suggestions, optimal posting time prediction, and engagement summarization.</p></div>
  <div class="card"><h3>Simple Pricing</h3><p>Micro SaaS products win with simple, transparent pricing. Per-seat, per-channel, or per-post pricing — pick one and keep it simple.</p></div>
</div>
<h2>Technical Considerations</h2>
<p>Social platform APIs change frequently and have rate limits. Build with that reality in mind — abstract platform integrations, handle rate limiting gracefully, and design for API version changes. And store minimal user data — social media content is transient by nature, and minimizing storage reduces liability.</p>"""),

    "blog/ai-customer-success-churn-2026": ("AI for Customer Success and Churn Prediction — 2026",
        "How AI helps customer success teams predict churn, identify at-risk accounts, and take action before customers leave.",
        "AI for Customer Success & Churn",
        """<p>Customer churn is expensive — acquiring a new customer costs far more than retaining an existing one. AI gives customer success teams the ability to identify at-risk accounts early and intervene before the customer decides to leave.</p>
<h2>What AI Can Do</h2>
<div class="card-grid">
  <div class="card"><h3>Churn Prediction</h3><p>Analyze usage patterns, support interactions, billing history, and engagement signals to predict which accounts are at elevated churn risk — with lead time to act.</p></div>
  <div class="card"><h3>Root Cause Analysis</h3><p>Understand why accounts are at risk — declining usage, unresolved support tickets, pricing concerns, or competitive threats — so interventions target the actual problem.</p></div>
  <div class="card"><h3>Action Recommendations</h3><p>Suggest specific interventions for at-risk accounts — check-in calls, training offers, feature introductions, or escalation to senior customer success managers.</p></div>
  <div class="card"><h3>Health Scoring</h3><p>Composite health scores that combine multiple signals into a single view — simpler for CSMs to triage and prioritize their daily work.</p></div>
</div>
<h2>Implementation Realities</h2>
<p>AI churn prediction is only useful if the customer success team acts on it. Build workflows around the predictions — CSM dashboards, automated alerts for high-risk accounts, and regular reviews of prediction accuracy. And remember that AI predicts patterns from historical data — unusual churn driven by external events may not show up in the model.</p>"""),
}

# === SERVICE PAGES ===
service_content = {
    "services/ai-observability-2026-6565": ("AI Observability — 2026",
        "Production AI observability: monitor model performance, token costs, latency, and reliability across your AI fleet.",
        "AI Observability Platform",
        """<p>AI systems in production need observability that goes beyond traditional monitoring. Zion Tech Group builds AI observability pipelines that give you visibility into model quality, cost, latency, failure patterns, and operational health across every AI system you run.</p>
<div class="card-grid">
  <div class="card"><h3>Model Performance</h3><p>Track accuracy, drift, and emerging failure modes. Get alerts when model quality drops below acceptable thresholds.</p></div>
  <div class="card"><h3>Cost & Token Analytics</h3><p>Break down token spend by model, endpoint, team, and use case. Identify waste and optimize where each dollar goes.</p></div>
  <div class="card"><h3>Latency Monitoring</h3><p>Track time-to-first-token, total response time, and percentile latencies. Identify which endpoints and models are slowing down.</p></div>
  <div class="card"><h3>Reliability</h3><p>Track uptime, error rates, and fallback behavior across AI providers. Build circuit breakers and redundant paths.</p></div>
</div>
<h2>For Production AI</h2>
<p>Whether you run a few models or an entire AI fleet, observability is what lets you run with confidence. We build the pipelines, dashboards, and alert systems that make your AI operations visible and manageable.</p>"""),

    "services/cloud-migration-services-2026-6572": ("Cloud Migration Services — 2026",
        "Plan and execute cloud migrations with minimal downtime — workload assessment, migration planning, execution, and post-migration optimization.",
        "Cloud Migration Services",
        """<p>Migrating to the cloud is a major initiative that touches infrastructure, applications, data, security, and operations. Zion Tech Group provides end-to-end migration services that move your workloads to the cloud safely and efficiently.</p>
<div class="card-grid">
  <div class="card"><h3>Assessment</h3><p>Inventory your current workloads, assess cloud readiness, identify dependencies, and define a migration strategy for each workload type.</p></div>
  <div class="card"><h3>Planning</h3><p>Build a detailed migration plan with timelines, resource requirements, downtime windows, rollback procedures, and validation criteria.</p></div>
  <div class="card"><h3>Execution</h3><p>Migrate workloads using the right pattern for each — rehost, replatform, refactor, or rebuild. Manage data migration, cutover, and validation.</p></div>
  <div class="card"><h3>Optimization</h3><p>After migration, optimize for cost, performance, and resilience. Right-size resources, implement automation, and establish ongoing operations.</p></div>
</div>
<h2>Cloud Platforms</h2>
<p>We work across AWS, Google Cloud, and Microsoft Azure. Every migration is tailored to your target platform, existing skill set, and business requirements.</p>"""),

    "services/cybersecurity-platform-msp-2026-6558": ("Cybersecurity Platform for MSPs — 2026",
        "A unified cybersecurity platform built for managed service providers — multi-tenant visibility, automated response, and compliance support.",
        "Cybersecurity Platform for MSPs",
        """<p>Managed service providers need security tooling that scales across many client environments without multiplying operational overhead. Our cybersecurity platform gives MSPs unified visibility, automated threat response, and compliance support across their entire client base.</p>
<div class="card-grid">
  <div class="card"><h3>Multi-Tenant Dashboard</h3><p>One pane of glass for all clients. Filter by client, see aggregate trends, and drill into individual environments — each client sees only their own data.</p></div>
  <div class="card"><h3>Automated Response</h3><p>Pre-built response playbooks for common threat scenarios. Automate containment, investigation, and notification — scaling security operations across clients.</p></div>
  <div class="card"><h3>Compliance Support</h3><p>Built-in support for SOC 2, HIPAA, PCI DSS, and other frameworks. Generate compliance evidence and reports for your clients.</p></div>
  <div class="card"><h3>Integration</h3><p>Integrates with the endpoint, email, identity, and cloud tools your clients already use — no rip-and-replace required.</p></div>
</div>"""),

    "services/ai-data-pipeline": ("AI Data Pipelines",
        "Build and operate data pipelines for AI — data ingestion, cleaning, feature engineering, and continuous data quality monitoring.",
        "AI Data Pipelines",
        """<p>AI systems need data — clean, reliable, continuously available data. Zion Tech Group builds and operates the data pipelines that feed AI models, agents, and analytics systems.</p>
<div class="card-grid">
  <div class="card"><h3>Data Ingestion</h3><p>Ingest data from databases, APIs, event streams, files, and third-party sources. Build connectors that keep data flowing reliably.</p></div>
  <div class="card"><h3>Data Quality</h3><p>Monitor data quality continuously — schema validation, anomaly detection, completeness checks, and freshness monitoring. Catch problems before they reach models.</p></div>
  <div class="card"><h3>Feature Engineering</h3><p>Transform raw data into features for ML models. Build reusable feature pipelines that serve training and inference consistently.</p></div>
  <div class="card"><h3>Pipeline Operations</h3><p>Monitor pipeline health, handle failures, manage backfills, and scale processing as data volumes grow.</p></div>
</div>"""),

    "services/it-staff-augmentation": ("IT Staff Augmentation",
        "Augment your IT team with experienced professionals — developers, DevOps engineers, security specialists, and AI practitioners on flexible engagement models.",
        "IT Staff Augmentation",
        """<p>When you need more capacity, specific expertise, or flexible staffing, Zion Tech Group provides IT professionals who integrate with your team and work on your priorities.</p>
<div class="card-grid">
  <div class="card"><h3>Developers</h3><p>Full-stack, backend, frontend, and mobile developers who can jump into your projects and start contributing quickly.</p></div>
  <div class="card"><h3>DevOps & Cloud</h3><p>DevOps engineers, cloud architects, and infrastructure specialists for migration, automation, and operational improvement.</p></div>
  <div class="card"><h3>Security</h3><p>Security engineers, analysts, and architects for assessments, implementation, monitoring, and incident response.</p></div>
  <div class="card"><h3>AI & Data</h3><p>AI engineers, data engineers, and ML practitioners for model development, pipeline building, and AI operations.</p></div>
</div>
<h2>Engagement Models</h2>
<p>Choose the engagement model that fits your needs — dedicated teams, individual contributors, project-based engagements, or ongoing augmentation. We handle the recruiting, onboarding, and management so you can focus on the work.</p>"""),

    "services/managed-it-operations": ("Managed IT Operations",
        "Comprehensive managed IT operations — infrastructure monitoring, incident response, patch management, and continuous improvement for your IT environment.",
        "Managed IT Operations",
        """<p>Outsource your IT operations to a team that manages your infrastructure proactively — preventing incidents, responding quickly when they occur, and continuously improving your environment.</p>
<div class="card-grid">
  <div class="card"><h3>Infrastructure Monitoring</h3><p>24/7 monitoring of servers, networks, cloud resources, and applications. Alerting, dashboards, and incident detection.</p></div>
  <div class="card"><h3>Incident Response</h3><p>Rapid response to IT incidents — triage, diagnosis, resolution, and post-incident review. Reducing MTTR and keeping your environment healthy.</p></div>
  <div class="card"><h3>Patch & Change Management</h3><p>Coordinated patching, updates, and changes — tested and scheduled to minimize disruption while keeping systems current and secure.</p></div>
  <div class="card"><h3>Continuous Improvement</h3><p>Regular reviews of your IT operations — identifying improvements, recommending changes, and implementing optimizations over time.</p></div>
</div>"""),

    "services/hermes-agent-platform": ("Hermes Agent Platform",
        "The Hermes Agent Platform — autonomous AI agents that coordinate, execute, and improve IT and business operations end-to-end.",
        "Hermes Agent Platform",
        """<p>The Hermes Agent Platform is Zion Tech Group's autonomous AI agent platform — agents that coordinate complex workflows, execute multi-step processes, and improve over time through continuous evaluation.</p>
<div class="card-grid">
  <div class="card"><h3>Multi-Agent Coordination</h3><p>Multiple specialized agents working together — triaging, researching, executing, and escalating — with shared context and clear handoff protocols.</p></div>
  <div class="card"><h3>Tool Integration</h3><p>Agents integrate with your existing tools — CRMs, ticketing, documentation, APIs, and cloud services — so they can act on your actual workflows.</p></div>
  <div class="card"><h3>Evaluation & Improvement</h3><p>Continuous evaluation against golden datasets and production metrics. Agents improve over time as you feed back results and refine prompts.</p></div>
  <div class="card"><h3>Observability</h3><p>Full visibility into what agents are doing — what decisions they're making, what tools they're using, and how they're performing against your KPIs.</p></div>
</div>
<h2>Built for Production</h2>
<p>Hermes Agent Platform isn't a demo — it's built for production use with real operational stakes. Security, reliability, observability, and evaluation are built in from the start.</p>"""),

    "services/hermes-agent-content-publishing-distribution": ("Hermes Agent — Content Publishing & Distribution",
        "Use Hermes Agent to create, optimize, and distribute content at scale — from ideation to publishing to multi-channel distribution.",
        "Hermes Agent Content Publishing",
        """<p>Content operations scale poorly when every piece requires manual creation, optimization, and distribution. Hermes Agent automates the full content lifecycle — generating content ideas, drafting optimized content, and distributing it across channels.</p>
<div class="card-grid">
  <div class="card"><h3>Content Ideation</h3><p>Generate content ideas based on your topics, audience, and SEO goals. Prioritize ideas by potential impact and alignment with your strategy.</p></div>
  <div class="card"><h3>Content Creation</h3><p>Draft blog posts, service pages, case studies, social content, and more — with your brand voice, factual accuracy, and SEO optimization built in.</p></div>
  <div class="card"><h3>Distribution</h3><p>Publish to your CMS, distribute to social channels, send to newsletters, and submit to search consoles — all coordinated by agent workflows.</p></div>
  <div class="card"><h3>Performance Tracking</h3><p>Track content performance — traffic, engagement, conversions — and feed results back into content improvement and future ideation.</p></div>
</div>"""),

    "services/hermes-agent-a2a-protocol": ("Hermes Agent — A2A Protocol",
        "Agent-to-Agent (A2A) protocol support in Hermes Agent — secure, structured communication between autonomous agents across teams and systems.",
        "Hermes Agent A2A Protocol",
        """<p>When multiple AI agents operate across your organization, they need to communicate with each other — sharing context, coordinating actions, and negotiating handoffs. The Hermes Agent A2A Protocol provides structured, secure agent-to-agent communication.</p>
<div class="card-grid">
  <div class="card"><h3>Structured Communication</h3><p>Defined message formats, schemas, and protocols for agent communication — so agents understand each other and coordination is reliable.</p></div>
  <div class="card"><h3>Security & Authorization</h3><p>Authenticated, authorized agent communication. Agents only access what they're permitted to — with audit trails for every interaction.</p></div>
  <div class="card"><h3>Cross-System Coordination</h3><p>Agents across different systems, teams, and environments can coordinate — breaking down silos while maintaining control and visibility.</p></div>
  <div class="card"><h3>Observability</h3><p>Every A2A interaction is logged and observable — what was communicated, between which agents, with what outcome.</p></div>
</div>"""),

    "services/hermes-agent-bot-mode": ("Hermes Agent — Bot Mode",
        "Hermes Agent Bot Mode — lightweight, task-focused agent execution for specific jobs, triggered on demand or by events.",
        "Hermes Agent Bot Mode",
        """<p>Not every workflow needs a full multi-agent orchestration. Bot Mode gives you lightweight, task-focused agent execution — single-purpose agents that execute specific jobs efficiently, triggered on demand or by events.</p>
<div class="card-grid">
  <div class="card"><h3>Triggered Execution</h3><p>Run agents in response to events — new tickets, incoming data, schedule triggers, or API calls. Bots execute when needed and idle when not.</p></div>
  <div class="card"><h3>Task Focus</h3><p>Each bot is focused on a specific task — data extraction, classification, summarization, validation, or transformation. Clear scope, reliable execution.</p></div>
  <div class="card"><h3>Resource Efficiency</h3><p>Bot Mode uses fewer resources than full orchestration — appropriate for high-volume, low-complexity tasks where overhead matters.</p></div>
  <div class="card"><h3>Integration</h3><p>Bots integrate with the same tools and systems as full agents — same connectors, same security, same observability.</p></div>
</div>"""),

    "services/hermes-agent-complete-guide": ("Hermes Agent — Complete Guide",
        "The complete guide to Hermes Agent — architecture, capabilities, use cases, and how to get started with autonomous AI agents.",
        "Hermes Agent Complete Guide",
        """<p>Hermes Agent is Zion Tech Group's autonomous AI agent platform — designed for production use across IT operations, business processes, and customer-facing workflows. This guide covers everything you need to know.</p>
<h2>What Is Hermes Agent?</h2>
<p>Hermes Agent is a platform for building, deploying, and operating autonomous AI agents. Agents can coordinate with each other, integrate with your tools, execute multi-step workflows, and improve over time through continuous evaluation.</p>
<div class="card-grid">
  <div class="card"><h3>Architecture</h3><p>Multi-agent architecture with specialized agents, shared context, coordinated execution, and centralized observability. Built for production reliability and scalability.</p></div>
  <div class="card"><h3>Capabilities</h3><p>Workflow automation, data processing, customer interaction, research and analysis, content operations, and IT operations — across any domain where structured AI execution adds value.</p></div>
  <div class="card"><h3>Use Cases</h3><p>Customer support automation, sales outreach, IT operations, content publishing, data pipeline management, and compliance workflows — among many others.</p></div>
  <div class="card"><h3>Getting Started</h3><p>Start with a specific workflow, integrate with your tools, define success criteria, and iterate. Hermes Agent is designed to grow with your needs.</p></div>
</div>"""),

    "services/hermes-agent-plugin-development": ("Hermes Agent — Plugin Development",
        "Develop custom plugins for Hermes Agent — extend agent capabilities with your tools, APIs, and domain-specific actions.",
        "Hermes Agent Plugin Development",
        """<p>Hermes Agent's capabilities grow through plugins — custom extensions that give agents access to your specific tools, APIs, and domain actions. Plugin development lets you tailor agents to your exact needs.</p>
<div class="card-grid">
  <div class="card"><h3>Plugin Architecture</h3><p>Well-defined plugin interface for adding tools, actions, and capabilities to agents. Plugins are isolated, versioned, and independently deployable.</p></div>
  <div class="card"><h3>Tool Integration</h3><p>Build plugins that connect agents to your databases, APIs, business systems, and custom services — giving agents the ability to act on your actual environment.</p></div>
  <div class="card"><h3>Domain Actions</h3><p>Define domain-specific actions that encode your business logic — approval workflows, data transformations, compliance checks, and any other structured operation.</p></div>
  <div class="card"><h3>Testing & Distribution</h3><p>Test plugins in isolation, version them appropriately, and distribute across your agent fleet. Manage plugin lifecycle from development to production.</p></div>
</div>"""),
}

def main():
    all_content = {}
    all_content.update(tool_content)
    all_content.update(blog_content)
    all_content.update(service_content)
    
    print(f"=== BATCH 3: ENRICHING {len(all_content)} PAGES ===\n")
    
    enriched = 0
    for path_key, (title, desc, h1, body) in all_content.items():
        full_path = PUBLIC / f"{path_key}/index.html"
        if full_path.exists():
            old = full_path.stat().st_size
            new_size = enrich(full_path, title, desc, h1, body)
            print(f"  ✓ {path_key}: {old} → {new_size} bytes")
            enriched += 1
        else:
            print(f"  ✗ {path_key} — FILE NOT FOUND")
    
    print(f"\n=== ENRICHED {enriched}/{len(all_content)} PAGES ===")

if __name__ == "__main__":
    main()
