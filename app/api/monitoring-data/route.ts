import { NextResponse } from 'next/server'
import { readFile } from 'fs/promises'
import { join } from 'path'

// Import agent status and logs data
import { INITIAL_AGENT_STATUS, INITIAL_AGENT_LOGS } from '@/data/agent-logs'

const LOGS_FILE = join(process.cwd(), 'public', 'logs', 'agent-logs.json')

export async function GET() {
  try {
    // Read dynamic logs
    let dynamicLogs: any[] = []
    try {
      const logsData = await readFile(LOGS_FILE, 'utf-8')
      dynamicLogs = JSON.parse(logsData)
    } catch (error) {
      // File doesn't exist or is invalid, start with empty array
      dynamicLogs = []
    }

    // Map agent statuses to the shape expected by the dashboard
    const agents = INITIAL_AGENT_STATUS.map((status, index) => ({
      id: status.telegram.replace('@', '').toLowerCase(),
      name: status.name,
      status: status.status.charAt(0).toUpperCase() + status.status.slice(1),
      currentWave: 'Wave 213', // Placeholder; could be derived from wave data
      currentAction: status.currentTask,
      servicesDeployedToday: status.todayActions, // Using todayActions as proxy
      totalServices: 145, // Placeholder; ideally compute from servicesData
      avatar: status.emoji,
      color: getAgentColor(status.name)
    }))

    // Map logs to recent actions (most recent first)
    const recentActions = dynamicLogs.map((log: any) => ({
      timestamp: log.timestamp || new Date().toISOString(),
      agent: log.bot || 'Unknown',
      action: log.action || '',
      details: log.result || log.category || '',
      type: log.category || 'general'
    })).slice(0, 20) // Limit to 20 most recent

    // Calculate stats
    const totalAgents = agents.length
    const activeAgents = agents.filter(a => a.status.toLowerCase() === 'active').length
    const totalServices = agents.reduce((sum, a) => sum + a.servicesDeployedToday, 0) // This is today's total, not ideal
    const deploymentsToday = totalServices // Reusing for now
    const uptime = '99.9%' // Placeholder

    const stats = {
      totalServices: 1450, // Placeholder total services across all waves
      totalWaves: 213, // Placeholder
      activeAgents,
      uptime,
      deploymentsToday: deploymentsToday
    }

    return NextResponse.json({
      agents,
      recentActions,
      stats,
      lastUpdated: new Date().toISOString()
    })
  } catch (error) {
    console.error('Error in monitoring-data API:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

// Helper function to assign colors to agents
function getAgentColor(agentName: string): string {
  const colorMap: Record<string, string> = {
    'OWL Coordinator': 'from-purple-500 to-indigo-500',
    'Carol (Windows)': 'from-blue-500 to-cyan-500',
    'Kleber (Kilo)': 'from-gray-500 to-gray-600',
    'Neo': 'from-green-500 to-emerald-500',
    'Quel (Windows)': 'from-yellow-500 to-amber-500',
    'Rocket': 'from-red-500 to-orange-500'
  }
  return colorMap[agentName] || 'from-gray-500 to-gray-600'
}