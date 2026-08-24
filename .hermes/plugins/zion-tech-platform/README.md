# Zion Tech Platform Plugin for Hermes Agent

A Hermes Agent plugin that provides tools for interacting with the Zion Tech Group site (`ziontechgroup.com`).

## Installation

```bash
# Copy to Hermes plugins directory
cp -r ~/.hermes/plugins/zion-tech-platform/

# Or install from the zion-support repo
cp -r /Users/klebergarciaalcatrao/zion-support.github.io/.hermes/plugins/zion-tech-platform ~/.hermes/plugins/

# Restart Hermes
hermes

# Verify the plugin is loaded
/tools
```

## Configuration

Set the `ZION_SITE_PATH` environment variable to point to your local checkout of `zion-support.github.io`:

```bash
export ZION_SITE_PATH="/path/to/zion-support.github.io"
```

Add this to `~/.hermes/.env` for persistence.

## Tools

### `zion_service_lookup`

Look up services in the Zion Tech catalog (16,000+ services).

**Parameters:**
- `query` (string, optional): Search term across name, ID, description, and category
- `category` (string, optional): Filter by category (e.g., "ai", "automation")
- `industry` (string, optional): Filter by industry (e.g., "healthcare", "finance")
- `limit` (integer, default 10, max 50): Maximum results to return

**Example:**
```
zion_service_lookup(query="hermes agent", limit=5)
```

### `zion_blog_lookup`

Search Zion Tech blog posts (4,000+ posts).

**Parameters:**
- `query` (string, optional): Search term across slug, title, and tags
- `limit` (integer, default 10, max 50): Maximum results to return

**Example:**
```
zion_blog_lookup(query="hermes bot mode", limit=3)
```

### `zion_check_routes`

Check sitemap.xml for broken or orphaned routes.

**Parameters:**
- `sitemap_path` (string, optional): Path to sitemap.xml (defaults to site path)
- `verify_live` (boolean, default false): If true, make HTTP requests to verify URLs return 200

**Example:**
```
zion_check_routes(sitemap_path="/Users/.../sitemap.xml")
```

## Development

All tools are defined in `__init__.py`. To add a new tool:

1. Define the schema dict
2. Write the handler function
3. Call `ctx.register_tool()` inside `register(ctx)`

Handlers must return JSON strings (not dicts).

## License

MIT — maintained by Zion Tech Group
