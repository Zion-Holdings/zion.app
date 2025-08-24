#!/usr/bin/env node
const fs = require('fs');

const [,, preAuditPath, postAuditPath, outdatedPath] = process.argv;
function readJsonSafe(p){ try { return JSON.parse(fs.readFileSync(p,'utf8')); } catch(_){ return null; } }
function readTextSafe(p){ try { return fs.readFileSync(p,'utf8'); } catch(_){ return ''; } }

const pre = readJsonSafe(preAuditPath) || {};
const post = readJsonSafe(postAuditPath) || {};
const outdatedTxt = readTextSafe(outdatedPath);

function sum(vuln){ if(!vuln) return {info:0,low:0,moderate:0,high:0,critical:0}; return vuln; }
const preSum = sum(pre.metadata && pre.metadata.vulnerabilities);
const postSum = sum(post.metadata && post.metadata.vulnerabilities);

function fmt(v){ return `info:${v.info||0} low:${v.low||0} moderate:${v.moderate||0} high:${v.high||0} critical:${v.critical||0}`; }

let msg = [];
msg.push('Weekly Dependency Audit & Update');
msg.push('');
msg.push(`Pre-update audit: ${fmt(preSum)}`);
msg.push(`Post-update audit: ${fmt(postSum)}`);
msg.push('');
msg.push('Outdated packages (snapshot):');
msg.push('```');
msg.push(outdatedTxt.trim().slice(0, 7000));
msg.push('```');

console.log(msg.join('\n'));