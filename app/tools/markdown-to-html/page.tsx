"use client";
import { useState } from "react";
export default function Page() {
  const [text, setText] = useState("");
  const [html, setHtml] = useState("");

  function escapeHtml(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function convert(e) {
    e.preventDefault();
    let out = escapeHtml(text);
    out = out
      .replace(/^###### (.*$)/gim, "<h6>$1</h6>")
      .replace(/^##### (.*$)/gim, "<h5>$1</h5>")
      .replace(/^#### (.*$)/gim, "<h4>$1</h4>")
      .replace(/^### (.*$)/gim, "<h3>$1</h3>")
      .replace(/^## (.*$)/gim, "<h2>$1</h2>")
      .replace(/^# (.*$)/gim, "<h1>$1</h1>")
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.*?)\*/g, "<em>$1</em>")
      .replace(/`([^`]+)`/g, "<code>$1</code>")
      .replace(/^\s*-\s(.*$)/gim, "<li>$1</li>")
      .replace(/(<li>.*<\/li>)/s, "<ul>$1</ul>")
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
      .replace(/\n/g, "<br>");
    setHtml(out);
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Markdown to HTML</h1>
        <p className="text-gray-600 mb-6">Convert markdown text to HTML instantly.</p>
        <form onSubmit={convert} className="space-y-4">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="# Heading&#10;**bold** *italic*&#10;- list item"
            className="w-full h-64 p-4 border rounded-lg font-mono text-sm"
          />
          <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-lg">
            Convert
          </button>
        </form>
        {html && (
          <div className="mt-6 p-4 bg-white border rounded-lg">
            <div className="text-sm font-semibold text-gray-700 mb-2">Output</div>
            <div className="prose" dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        )}
      </div>
    </div>
  );
}
