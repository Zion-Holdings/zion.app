import type { NextPage } from 'next'
import Head from 'next/head'
import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'

interface VoiceCommand {
  id: string
  command: string
  description: string
  category: string
  status: 'active' | 'inactive' | 'processing' | 'error'
  accuracy: number
  responseTime: number
  usageCount: number
  aiAnalysis: CommandAnalysis
}

interface CommandAnalysis {
  confidence: number
  intentRecognition: number
  contextUnderstanding: number
  recommendations: string[]
}

interface SpeechToText {
  id: string
  title: string
  description: string
  audioFile: string
  transcription: string
  confidence: number
  language: string
  duration: number
  status: 'processing' | 'completed' | 'error'
  aiAnalysis: TranscriptionAnalysis
}

interface TranscriptionAnalysis {
  accuracy: number
  languageDetection: number
  noiseReduction: number
  recommendations: string[]
}

interface TextToSpeech {
  id: string
  title: string
  text: string
  audioOutput: string
  voice: string
  language: string
  speed: number
  pitch: number
  status: 'generating' | 'completed' | 'error'
  aiAnalysis: SpeechAnalysis
}

interface SpeechAnalysis {
  naturalness: number
  clarity: number
  emotionDetection: number
  recommendations: string[]
}

interface VoiceAssistant {
  id: string
  name: string
  personality: string
  capabilities: string[]
  status: 'online' | 'offline' | 'busy'
  responseTime: number
  accuracy: number
  aiAnalysis: AssistantAnalysis
}

interface AssistantAnalysis {
  performanceScore: number
  userSatisfaction: number
  responseQuality: number
  recommendations: string[]
}

interface VoiceAnalytics {
  totalCommands: number
  activeAssistants: number
  averageResponseTime: number
  accuracyRate: number
  aiInsights: VoiceInsight[]
}

interface VoiceInsight {
  id: string
  title: string
  description: string
  impact: 'positive' | 'negative' | 'neutral'
  confidence: number
  recommendations: string[]
}

const AIPoweredVoiceAssistantSpeechRecognitionPage: NextPage = () => {
  const [commands, setCommands] = useState<VoiceCommand[]>([])
  const [transcriptions, setTranscriptions] = useState<SpeechToText[]>([])
  const [speechOutputs, setSpeechOutputs] = useState<TextToSpeech[]>([])
  const [assistants, setAssistants] = useState<VoiceAssistant[]>([])
  const [analytics, setAnalytics] = useState<VoiceAnalytics | null>(null)
  const [selectedView, setSelectedView] = useState<'overview' | 'commands' | 'transcription' | 'speech' | 'assistants' | 'analytics'>('overview')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [isLoading, setIsLoading] = useState(false)
  const [isListening, setIsListening] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)

  // Mock data
  const mockCommands: VoiceCommand[] = [
    {
      id: '1',
      command: 'Search for AI development services',
      description: 'Find AI development and machine learning services',
      category: 'Search',
      status: 'active',
      accuracy: 94.5,
      responseTime: 1.2,
      usageCount: 156,
      aiAnalysis: {
        confidence: 0.92,
        intentRecognition: 0.89,
        contextUnderstanding: 0.91,
        recommendations: ['Improve context awareness', 'Add more search filters', 'Enhance response speed']
      }
    },
    {
      id: '2',
      command: 'Schedule a meeting with Dr. Sarah Chen',
      description: 'Book a consultation with AI expert Dr. Sarah Chen',
      category: 'Scheduling',
      status: 'active',
      accuracy: 87.3,
      responseTime: 2.1,
      usageCount: 89,
      aiAnalysis: {
        confidence: 0.85,
        intentRecognition: 0.82,
        contextUnderstanding: 0.88,
        recommendations: ['Improve name recognition', 'Add calendar integration', 'Enhance scheduling logic']
      }
    },
    {
      id: '3',
      command: 'Show me the latest AI equipment',
      description: 'Display current AI hardware and computing equipment',
      category: 'Navigation',
      status: 'active',
      accuracy: 91.7,
      responseTime: 0.8,
      usageCount: 234,
      aiAnalysis: {
        confidence: 0.89,
        intentRecognition: 0.93,
        contextUnderstanding: 0.87,
        recommendations: ['Add equipment categories', 'Improve search relevance', 'Enhance visual display']
      }
    }
  ]

  const mockTranscriptions: SpeechToText[] = [
    {
      id: '1',
      title: 'AI Development Consultation',
      description: 'Transcription of AI development consultation call',
      audioFile: '/audio/ai-consultation.mp3',
      transcription: 'Hello, I\'m looking for AI development services for my startup. We need machine learning models for predictive analytics and natural language processing capabilities.',
      confidence: 96.2,
      language: 'English',
      duration: 45,
      status: 'completed',
      aiAnalysis: {
        accuracy: 0.94,
        languageDetection: 0.98,
        noiseReduction: 0.92,
        recommendations: ['Excellent clarity', 'Good noise reduction', 'Consider adding speaker identification']
      }
    },
    {
      id: '2',
      title: 'Technical Support Call',
      description: 'Customer support conversation transcription',
      audioFile: '/audio/tech-support.mp3',
      transcription: 'I\'m having issues with the quantum computing setup. The system is showing error codes and the performance is not meeting expectations.',
      confidence: 88.5,
      language: 'English',
      duration: 120,
      status: 'completed',
      aiAnalysis: {
        accuracy: 0.87,
        languageDetection: 0.95,
        noiseReduction: 0.89,
        recommendations: ['Improve technical term recognition', 'Enhance noise filtering', 'Add context analysis']
      }
    }
  ]

  const mockSpeechOutputs: TextToSpeech[] = [
    {
      id: '1',
      title: 'Welcome Message',
      text: 'Welcome to Zion, the first free AI-powered marketplace. I\'m your AI assistant, ready to help you find the perfect services and talents.',
      audioOutput: '/audio/welcome-message.mp3',
      voice: 'Sarah',
      language: 'English',
      speed: 1.0,
      pitch: 1.0,
      status: 'completed',
      aiAnalysis: {
        naturalness: 0.94,
        clarity: 0.96,
        emotionDetection: 0.89,
        recommendations: ['Excellent naturalness', 'Clear pronunciation', 'Consider adding emotional variation']
      }
    },
    {
      id: '2',
      title: 'Service Description',
      text: 'Our AI development services include machine learning model creation, deep learning implementation, and custom AI solutions tailored to your business needs.',
      audioOutput: '/audio/service-description.mp3',
      voice: 'Michael',
      language: 'English',
      speed: 0.9,
      pitch: 1.1,
      status: 'completed',
      aiAnalysis: {
        naturalness: 0.91,
        clarity: 0.93,
        emotionDetection: 0.85,
        recommendations: ['Good pace', 'Clear articulation', 'Add more emotional expression']
      }
    }
  ]

  const mockAssistants: VoiceAssistant[] = [
    {
      id: '1',
      name: 'Zion AI Assistant',
      personality: 'Professional and helpful',
      capabilities: ['Voice commands', 'Speech recognition', 'Natural language processing', 'Context awareness'],
      status: 'online',
      responseTime: 1.5,
      accuracy: 94.2,
      aiAnalysis: {
        performanceScore: 9.1,
        userSatisfaction: 8.9,
        responseQuality: 9.3,
        recommendations: ['Improve response speed', 'Add more personality', 'Enhance context understanding']
      }
    },
    {
      id: '2',
      name: 'Tech Support Assistant',
      personality: 'Technical and precise',
      capabilities: ['Technical troubleshooting', 'Error diagnosis', 'Solution recommendations', 'Documentation access'],
      status: 'online',
      responseTime: 2.1,
      accuracy: 91.8,
      aiAnalysis: {
        performanceScore: 8.7,
        userSatisfaction: 8.5,
        responseQuality: 8.9,
        recommendations: ['Improve technical accuracy', 'Add visual aids', 'Enhance solution explanations']
      }
    }
  ]

  const mockAnalytics: VoiceAnalytics = {
    totalCommands: 1247,
    activeAssistants: 5,
    averageResponseTime: 1.8,
    accuracyRate: 92.5,
    aiInsights: [
      {
        id: '1',
        title: 'High Voice Command Accuracy',
        description: 'Voice command recognition shows 92.5% accuracy rate, exceeding industry standards',
        impact: 'positive',
        confidence: 0.94,
        recommendations: ['Maintain current performance', 'Add more voice commands', 'Improve context awareness']
      },
      {
        id: '2',
        title: 'Fast Response Times',
        description: 'Average response time of 1.8 seconds provides excellent user experience',
        impact: 'positive',
        confidence: 0.91,
        recommendations: ['Optimize for even faster responses', 'Add predictive responses', 'Implement caching']
      }
    ]
  }

  useEffect(() => {
    setCommands(mockCommands)
    setTranscriptions(mockTranscriptions)
    setSpeechOutputs(mockSpeechOutputs)
    setAssistants(mockAssistants)
    setAnalytics(mockAnalytics)
  }, [])

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
      case 'online':
      case 'completed':
        return 'text-green-400'
      case 'processing':
      case 'generating':
        return 'text-yellow-400'
      case 'error':
      case 'offline':
        return 'text-red-400'
      case 'inactive':
      case 'busy':
        return 'text-gray-400'
      default:
        return 'text-gray-400'
    }
  }

  const getStatusBgColor = (status: string) => {
    switch (status) {
      case 'active':
      case 'online':
      case 'completed':
        return 'bg-green-500'
      case 'processing':
      case 'generating':
        return 'bg-yellow-500'
      case 'error':
      case 'offline':
        return 'bg-red-500'
      case 'inactive':
      case 'busy':
        return 'bg-gray-500'
      default:
        return 'bg-gray-500'
    }
  }

  const getInsightColor = (impact: string) => {
    switch (impact) {
      case 'positive': return 'text-green-400'
      case 'negative': return 'text-red-400'
      case 'neutral': return 'text-yellow-400'
      default: return 'text-gray-400'
    }
  }

  const getInsightIcon = (impact: string) => {
    switch (impact) {
      case 'positive': return '📈'
      case 'negative': return '📉'
      case 'neutral': return '📊'
      default: return '📊'
    }
  }

  const filteredCommands = useMemo(() => {
    return commands.filter(command => {
      const categoryMatch = selectedCategory === 'all' || command.category.toLowerCase() === selectedCategory.toLowerCase()
      return categoryMatch
    })
  }, [commands, selectedCategory])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Head>
        <title>AI-Powered Voice Assistant & Speech Recognition - Zion</title>
        <meta name="description" content="Advanced AI-powered voice assistant and speech recognition platform with voice commands, speech-to-text, text-to-speech, and intelligent voice interactions" />
        <meta name="keywords" content="voice assistant, speech recognition, speech-to-text, text-to-speech, AI voice, Zion" />
      </Head>

      {/* Header */}
      <div className="bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Zion</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="/ai-powered-live-streaming-broadcasting" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Streaming
              </Link>
              <Link href="/ai-powered-virtual-reality" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                VR
              </Link>
              <Link href="/ai-powered-holographic-display" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Holographic
              </Link>
              <Link href="/auth/login" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Login
              </Link>
              <Link href="/auth/signup" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-200">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-6">
            AI-Powered Voice Assistant & Speech Recognition
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Experience the future of voice interaction with AI-powered voice assistants, 
            advanced speech recognition, and intelligent voice commands. Communicate naturally 
            with cutting-edge technology.
          </p>
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => setIsListening(!isListening)}
              className={`px-8 py-3 rounded-lg font-medium transition-all duration-200 ${
                isListening
                  ? 'bg-red-600 text-white hover:bg-red-700'
                  : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
              }`}
            >
              {isListening ? 'Stop Listening' : 'Start Voice Assistant'}
            </button>
            <button
              onClick={() => setIsSpeaking(!isSpeaking)}
              className={`px-8 py-3 rounded-lg font-medium transition-all duration-200 ${
                isSpeaking
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700'
              }`}
            >
              {isSpeaking ? 'Stop Speaking' : 'Text to Speech'}
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-1 bg-black/20 rounded-lg p-1 mb-8">
          {[
            { id: 'overview', label: 'Overview', icon: '📊' },
            { id: 'commands', label: 'Voice Commands', icon: '🎤' },
            { id: 'transcription', label: 'Speech to Text', icon: '📝' },
            { id: 'speech', label: 'Text to Speech', icon: '🔊' },
            { id: 'assistants', label: 'Voice Assistants', icon: '🤖' },
            { id: 'analytics', label: 'Analytics', icon: '📈' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedView(tab.id as any)}
              className={`flex-1 flex items-center justify-center space-x-2 px-4 py-3 rounded-md text-sm font-medium transition-all duration-200 ${
                selectedView === tab.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content Sections */}
        {selectedView === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Voice Commands Overview */}
            <div className="bg-black/20 rounded-lg p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">Voice Commands</h3>
              <div className="space-y-4">
                {commands.slice(0, 3).map((command) => (
                  <div key={command.id} className="p-4 bg-white/5 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-white font-medium">{command.command}</h4>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusBgColor(command.status)} text-white`}>
                        {command.status}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm mb-2">{command.description}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span>{command.accuracy}% accuracy</span>
                      <span>{command.responseTime}s response</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Voice Assistants Overview */}
            <div className="bg-black/20 rounded-lg p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">Voice Assistants</h3>
              <div className="space-y-4">
                {assistants.slice(0, 2).map((assistant) => (
                  <div key={assistant.id} className="p-4 bg-white/5 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-white font-medium">{assistant.name}</h4>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusBgColor(assistant.status)} text-white`}>
                        {assistant.status}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm mb-2">{assistant.personality}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span>{assistant.accuracy}% accuracy</span>
                      <span>{assistant.responseTime}s response</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {selectedView === 'commands' && (
          <div className="space-y-6">
            {/* Category Filter */}
            <div className="flex space-x-2 overflow-x-auto pb-2">
              {['all', 'search', 'scheduling', 'navigation', 'control'].map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:text-white'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>

            {/* Commands Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCommands.map((command) => (
                <div key={command.id} className="bg-black/20 rounded-lg p-6 border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-white font-semibold">{command.command}</h3>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusBgColor(command.status)} text-white`}>
                      {command.status}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">{command.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Accuracy</span>
                      <span className="text-white">{command.accuracy}%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Response Time</span>
                      <span className="text-white">{command.responseTime}s</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Usage Count</span>
                      <span className="text-white">{command.usageCount}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Confidence</span>
                      <span className="text-white">{Math.round(command.aiAnalysis.confidence * 100)}%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Intent Recognition</span>
                      <span className="text-white">{Math.round(command.aiAnalysis.intentRecognition * 100)}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedView === 'transcription' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {transcriptions.map((transcription) => (
                <div key={transcription.id} className="bg-black/20 rounded-lg p-6 border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-white font-semibold text-lg">{transcription.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      transcription.status === 'completed' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {transcription.status}
                    </span>
                  </div>
                  <p className="text-gray-400 mb-4">{transcription.description}</p>
                  <div className="bg-white/5 rounded-lg p-4 mb-4">
                    <p className="text-gray-300 text-sm leading-relaxed">{transcription.transcription}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">{transcription.confidence}%</div>
                      <div className="text-gray-400 text-sm">Confidence</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">{transcription.duration}s</div>
                      <div className="text-gray-400 text-sm">Duration</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Accuracy</span>
                      <span className="text-white">{Math.round(transcription.aiAnalysis.accuracy * 100)}%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Language Detection</span>
                      <span className="text-white">{Math.round(transcription.aiAnalysis.languageDetection * 100)}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedView === 'speech' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {speechOutputs.map((speech) => (
                <div key={speech.id} className="bg-black/20 rounded-lg p-6 border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-white font-semibold text-lg">{speech.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      speech.status === 'completed' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {speech.status}
                    </span>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 mb-4">
                    <p className="text-gray-300 text-sm leading-relaxed">{speech.text}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">{speech.voice}</div>
                      <div className="text-gray-400 text-sm">Voice</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">{speech.language}</div>
                      <div className="text-gray-400 text-sm">Language</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Naturalness</span>
                      <span className="text-white">{Math.round(speech.aiAnalysis.naturalness * 100)}%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Clarity</span>
                      <span className="text-white">{Math.round(speech.aiAnalysis.clarity * 100)}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedView === 'assistants' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {assistants.map((assistant) => (
                <div key={assistant.id} className="bg-black/20 rounded-lg p-6 border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-white font-semibold text-lg">{assistant.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      assistant.status === 'online' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                    }`}>
                      {assistant.status}
                    </span>
                  </div>
                  <p className="text-gray-400 mb-4">{assistant.personality}</p>
                  <div className="mb-4">
                    <h4 className="text-white font-medium mb-2">Capabilities:</h4>
                    <div className="flex flex-wrap gap-2">
                      {assistant.capabilities.map((capability, index) => (
                        <span key={index} className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded">
                          {capability}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">{assistant.responseTime}s</div>
                      <div className="text-gray-400 text-sm">Response Time</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">{assistant.accuracy}%</div>
                      <div className="text-gray-400 text-sm">Accuracy</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Performance Score</span>
                      <span className="text-white">{assistant.aiAnalysis.performanceScore}/10</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">User Satisfaction</span>
                      <span className="text-white">{assistant.aiAnalysis.userSatisfaction}/10</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedView === 'analytics' && analytics && (
          <div className="space-y-6">
            {/* Analytics Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              <div className="bg-black/20 rounded-lg p-6 border border-white/10 text-center">
                <div className="text-3xl font-bold text-white">{analytics.totalCommands}</div>
                <div className="text-gray-400">Total Commands</div>
              </div>
              <div className="bg-black/20 rounded-lg p-6 border border-white/10 text-center">
                <div className="text-3xl font-bold text-white">{analytics.activeAssistants}</div>
                <div className="text-gray-400">Active Assistants</div>
              </div>
              <div className="bg-black/20 rounded-lg p-6 border border-white/10 text-center">
                <div className="text-3xl font-bold text-white">{analytics.averageResponseTime}s</div>
                <div className="text-gray-400">Avg Response Time</div>
              </div>
              <div className="bg-black/20 rounded-lg p-6 border border-white/10 text-center">
                <div className="text-3xl font-bold text-white">{analytics.accuracyRate}%</div>
                <div className="text-gray-400">Accuracy Rate</div>
              </div>
              <div className="bg-black/20 rounded-lg p-6 border border-white/10 text-center">
                <div className="text-3xl font-bold text-white">5</div>
                <div className="text-gray-400">Languages</div>
              </div>
            </div>

            {/* AI Insights */}
            <div className="bg-black/20 rounded-lg p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">AI Insights</h3>
              <div className="space-y-4">
                {analytics.aiInsights.map((insight) => (
                  <div key={insight.id} className="p-4 bg-white/5 rounded-lg">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-2xl">{getInsightIcon(insight.impact)}</span>
                      <h4 className={`text-lg font-medium ${getInsightColor(insight.impact)}`}>
                        {insight.title}
                      </h4>
                      <span className="text-sm text-gray-400">{Math.round(insight.confidence * 100)}% confidence</span>
                    </div>
                    <p className="text-gray-300 mb-3">{insight.description}</p>
                    <div className="space-y-2">
                      {insight.recommendations.map((rec, index) => (
                        <div key={index} className="flex items-center space-x-2 text-sm text-gray-400">
                          <span>•</span>
                          <span>{rec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="bg-black/20 border-t border-white/10 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Zion</h3>
              <p className="text-gray-400 text-sm">
                The first free AI-powered marketplace for high-tech products, IT services, AI talents, and innovation.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Features</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/ai-powered-live-streaming-broadcasting" className="hover:text-white">Live Streaming</Link></li>
                <li><Link href="/ai-powered-virtual-reality" className="hover:text-white">Virtual Reality</Link></li>
                <li><Link href="/ai-powered-holographic-display" className="hover:text-white">Holographic Display</Link></li>
                <li><Link href="/ai-powered-voice-assistant-speech-recognition" className="hover:text-white">Voice Assistant</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/marketplace" className="hover:text-white">Marketplace</Link></li>
                <li><Link href="/services" className="hover:text-white">IT Services</Link></li>
                <li><Link href="/talents" className="hover:text-white">AI Talents</Link></li>
                <li><Link href="/equipment" className="hover:text-white">Equipment</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/help-desk-support" className="hover:text-white">Help Desk</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                <li><Link href="/docs" className="hover:text-white">Documentation</Link></li>
                <li><Link href="/status" className="hover:text-white">Status</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AIPoweredVoiceAssistantSpeechRecognitionPage 