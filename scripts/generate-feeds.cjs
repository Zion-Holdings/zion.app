#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const PUBLIC_DIR = path.join(ROOT, 'public');
const REGISTRY_PATH = path.join(PUBLIC_DIR, 'automation', 'content-registry.json');
const SITE_URL = process.env.SITE_BASE_URL || 'https://zion.app';

function loadRegistry() {
	try { return JSON.parse(fs.readFileSync(REGISTRY_PATH, 'utf8')); } catch { return { pages: [] }; }
}

function escapeXml(s) {
	return (s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function buildRss(items) {
	const rssItems = items.map(it => `
		<item>
			<title>${escapeXml(it.title || it.route)}</title>
			<link>${SITE_URL}${it.route}</link>
			<guid isPermaLink="true">${SITE_URL}${it.route}</guid>
			<description>${escapeXml(it.description || '')}</description>
			<pubDate>${new Date(it.lastmod || Date.now()).toUTCString()}</pubDate>
		</item>`).join('');
	return `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
	<channel>
		<title>Zion App Updates</title>
		<link>${SITE_URL}</link>
		<description>Latest content, features, and updates</description>
		${rssItems}
	</channel>
</rss>`;
}

function buildAtom(items) {
	const atomItems = items.map(it => `
		<entry>
			<title>${escapeXml(it.title || it.route)}</title>
			<link href="${SITE_URL}${it.route}" />
			<id>${SITE_URL}${it.route}</id>
			<updated>${new Date(it.lastmod || Date.now()).toISOString()}</updated>
			<summary>${escapeXml(it.description || '')}</summary>
		</entry>`).join('');
	return `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
	<title>Zion App Updates</title>
	<link href="${SITE_URL}" />
	<id>${SITE_URL}/</id>
	<updated>${new Date().toISOString()}</updated>
	${atomItems}
</feed>`;
}

(function main(){
	const registry = loadRegistry();
	const pages = (registry.pages || [])
		.filter(p => p.route && !/\[(slug|id|.+)\]/.test(p.route))
		.sort((a,b) => new Date(b.lastmod || 0) - new Date(a.lastmod || 0))
		.slice(0, 100);

	const rss = buildRss(pages);
	const atom = buildAtom(pages);
	fs.writeFileSync(path.join(PUBLIC_DIR, 'feed.xml'), rss);
	fs.writeFileSync(path.join(PUBLIC_DIR, 'atom.xml'), atom);
	console.log('Feeds generated: public/feed.xml, public/atom.xml');
})();