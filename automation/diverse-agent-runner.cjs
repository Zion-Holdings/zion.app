#!/usr/bin/env node

const { spawnSync } = require('child_process')
const fs = require('fs')
const path = require('path')

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
}

function run(cmd, args, options = {}) {
  const result = spawnSync(cmd, args, { stdio: 'pipe', encoding: 'utf-8', ...options })
  return { code: result.status ?? 0, stdout: result.stdout || '', stderr: result.stderr || '' }
}

function nowStamp() {
  const d = new Date()
  const pad = (n) => String(n).padStart(2, '0')
  return `${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())}_${pad(d.getUTCHours())}-${pad(d.getUTCMinutes())}-${pad(d.getUTCSeconds())}Z`
}

const task = process.argv[2]
if (!task) {
  console.error('Usage: diverse-agent-runner.cjs <task>')
  process.exit(0)
}

const taskToCommand = {
  seo: ['node', ['automation/seo-optimizer.cjs']],
  security: ['node', ['automation/security-scanner.cjs']],
  testgen: ['node', ['automation/test-generator.cjs']],
  'frontend-sync': ['node', ['automation/frontend-sync-orchestrator.cjs', 'once']],
  variation: ['node', ['automation/variation-orchestrator.cjs', 'once']],
  meta: ['node', ['automation/autonomous-meta-orchestrator.cjs', 'once']],
  responsive: ['npm', ['run', 'responsive:analyze']],
  monetization: ['npm', ['run', 'monetization:analyze']],
  saas: ['npm', ['run', 'saas:analyze']],
  'ui-evolution': ['node', ['automation/ui-evolution-orchestrator.cjs']]
}

if (!taskToCommand[task]) {
  console.log(`Unknown task '${task}', nothing to run.`)
  process.exit(0)
}

const logsDir = path.join('automation', 'logs', 'diverse-agent-matrix')
ensureDir(logsDir)
const logPath = path.join(logsDir, `${task}-${nowStamp()}.log`)

const [cmd, args] = taskToCommand[task]
const startedAt = new Date().toISOString()
const header = `=== Diverse Agent Runner ===\nTask: ${task}\nStarted: ${startedAt}\nCommand: ${cmd} ${args.join(' ')}\n===========================\n`
fs.writeFileSync(logPath, header)

const result = run(cmd, args)
const finishedAt = new Date().toISOString()
const footer = `\n=== Completed ===\nFinished: ${finishedAt}\nExit code: ${result.code}\n================\n`
fs.appendFileSync(logPath, result.stdout || '')
fs.appendFileSync(logPath, result.stderr ? `\n[stderr]\n${result.stderr}` : '')
fs.appendFileSync(logPath, footer)

// Never fail the matrix; errors are logged for later inspection
process.exit(0)