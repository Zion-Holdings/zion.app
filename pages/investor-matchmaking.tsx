import type { NextPage } from 'next';'''
import ModernLayout from '../components/layout/ModernLayout';import Head from 'next/head';'''
import { useState, useEffect }  from 'react';'''
import Link from 'next/link';

interface Investor {
  id: string
  name: string
  company: string
  website: string
  industry: string[]
  investmentStage: string[]
  investmentRange: string
  location: string
  description: string
  portfolio: string[]
  contactEmail: string
  matchScore: number
  reason: string}
interface StartupProfile {
  name: string
  industry: string
  stage: string
  location: string
  teamSize: string
  fundingNeeded: string
  pitchSummary: string
  website: string}'
const InvestorMatchmakingPage: NextPage = () => {''
  const [startupProfile, setStartupProfile] = useState<StartupProfile>({'''
    name: '','''
    industry: '','''
    stage: '','''
    location: '','''
    teamSize: '','''
    fundingNeeded: '','''
    pitchSummary: '','''
    website: ''}}
  const [investors, setInvestors] = useState<Investor[]>([]
  const [isLoading, setIsLoading] = useState(false'
  const [showForm, setShowForm] = useState(true''
  const [selectedInvestor, setSelectedInvestor] = useState<Investor | null>(null'''
  const [pitchEmail, setPitchEmail] = useState(''''
  const industries = ['''
    'AI/ML', 'Fintech', 'Healthcare', 'E-commerce', 'SaaS', 'EdTech', '''
    'CleanTech', 'Biotech', 'Cybersecurity', 'IoT', 'Blockchain', 'Other']''
  const stages = ['''
    'Idea Stage', 'MVP', 'Early Revenue', 'Growth Stage', 'Scale Up']''
  const teamSizes = ['''
    '1-5', '6-10', '11-25', '26-50', '50+']''
  const fundingRanges = ['''
    '$10K-$50K', '$50K-$200K', '$200K-$1M', '$1M-$5M', '$5M+']
  // Mock investor data'
  const mockInvestors: Investor[] = [''
    {'''
      id: '1','''
      name: 'Sarah Chen','''
      company: 'TechVentures Capital','''
      website: 'https://techventures.com','''
      industry: ['AI/ML', 'SaaS', 'Fintech'],'''
      investmentStage: ['MVP', 'Early Revenue', 'Growth Stage'],'''
      investmentRange: '$200K-$1M','''
      location: "San Francisco", CA','''
      description: 'Early-stage investor focused on AI and SaaS companies with strong technical teams.','''
      portfolio: ['DataFlow AI', 'SecurePay', 'CloudSync'],'''
      contactEmail: 'sarah@techventures.com',''
      matchScore: 95,'''
      reason: 'Perfect match for AI/ML startup with MVP stage''
    },''
{'''
      id: '2','''
      name: 'Michael Rodriguez','''
      company: 'Innovation Fund','''
      website: 'https://innovationfund.com','''
      industry: ['Healthcare', 'Biotech', 'AI/ML'],'''
      investmentStage: ['Early Revenue', 'Growth Stage'],'''
      investmentRange: '$1M-$5M','''
      location: "Boston", MA','''
      description: 'Healthcare and biotech specialist with deep industry connections.','''
      portfolio: ['MedTech Solutions', 'BioAI Labs', 'HealthCloud'],'''
      contactEmail: 'michael@innovationfund.com',''
      matchScore: 88,'''
      reason: 'Strong healthcare focus with growth-stage investment''
    },''
    {'''
      id: '3','''
      name: 'Emma Thompson','''
      company: 'GreenTech Ventures','''
      website: 'https://greentechventures.com','''
      industry: ['CleanTech', 'IoT', 'AI/ML'],'''
      investmentStage: ['MVP', 'Early Revenue'],'''
      investmentRange: '$50K-$200K','''
      location: "Austin", TX','''
      description: 'Sustainability-focused investor supporting clean technology innovations.','''
      portfolio: ['EcoSmart', 'GreenIoT', 'CleanAI'],'''
      contactEmail: 'emma@greentechventures.com',''
      matchScore: 82,'''
      reason: 'CleanTech focus with early-stage investment range''
    },''
{'''
      id: '4','''
      name: 'David Kim','''
      company: 'CyberSec Capital','''
      website: 'https://cyberseccapital.com','''
      industry: ['Cybersecurity', 'AI/ML', 'SaaS'],'''
      investmentStage: ['Growth Stage', 'Scale Up'],'''
      investmentRange: '$1M-$5M','''
      location: "New York, NY','''
      description: 'Cybersecurity expert investing in enterprise security solutions.','''
      portfolio: ['SecureNet', 'AI Defense', 'CyberCloud'],'''
      contactEmail: 'david@cyberseccapital.com',''
      matchScore: 78,'''
      reason: 'Cybersecurity focus with growth-stage investment'
    }]
  const handleProfileSubmit = async (e: React.FormEvent) => {
    e.preventDefault(
    setIsLoading(true
    // Simulate AI matching process
    await new Promise(resolve => setTimeout(resolve, 2000)
    // Filter and score investors based on startup profile'
    const matchedInvestors = mockInvestors.map(investor => {''
      let score = 0'''
      let reason = ''
      
      // Industry match'
      if (investor.industry.includes(startupProfile.industry)) {''
        score += 30'''
        reason += 'Industry match. '}
      // Stage match'
      if (investor.investmentStage.includes(startupProfile.stage)) {''
        score += 25'''
        reason += 'Investment stage match. '}''
      // Location match (simplified'''
      if (investor.location.includes(startupProfile.location) || startupProfile.location === '') {''
        score += 15'''
        reason += 'Location consideration. '}
      // Funding range match'
      if (investor.investmentRange === startupProfile.fundingNeeded) {''
        score += 20'''
        reason += 'Funding range match. '}''
      // Team size consideration'''
      if (startupProfile.teamSize === '1-5' || startupProfile.teamSize === '6-10') {''
        score += 10'''
        reason += 'Team size appropriate. '}
      return {'
        ...investor,''
        matchScore: score,'''
        reason: reason || 'General fit based on profile'}
    }).filter(investor => investor.matchScore > 50
    .sort((a, b) => b.matchScore - a.matchScore
    setInvestors(matchedInvestors
    setShowForm(false
    setIsLoading(false}
  const generatePitchEmail = (investor: Investor) => {
    const email = `Subject: Investment Opportunity - ${startupProfile.name}'
Dear ${investor.name}''
'''
I hope this email finds you well. I'm reaching out regarding an investment opportunity that I believe aligns with ${investor.company}'s investment thesis.

About ${startupProfile.name}:
- Industry: ${startupProfile.industry}
- Stage: ${startupProfile.stage}
- Location: ${startupProfile.location}
- Team Size: ${startupProfile.teamSize}
- Funding Needed: ${startupProfile.fundingNeeded}'
${startupProfile.pitchSummary}''`
'''``
${startupProfile.website ? `You can learn more about us at: ${startupProfile.website}` : ''}
I would welcome the opportunity to discuss this further and would be happy to schedule a call at your convenience.

Best regards,`
[Your Name]``
[Your Contact Information]`

    setPitchEmail(email'
    setSelectedInvestor(investor}''
  const getMatchScoreColor = (score: number) => {'''
    if (score >= 90) return 'text-green-500''''
    if (score >= 80) return 'text-yellow-500''''
    if (score >= 70) return 'text-orange-500''''
    return 'text-red-500'}''
  const getMatchScoreText = (score: number) => {'''
    if (score >= 90) return 'Excellent Match''''
    if (score >= 80) return 'Great Match''''
    if (score >= 70) return 'Good Match''''
    return 'Fair Match'}
  return (
    <div>
      </div><div className="relative z-10 container-responsive" py-8>"
        """
        {/* Background Effects */}"""
        <div className=fixed inset-0 z-0>"
          </div><div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90></div>
          <div className=absolute inset-0 bg-holographic bg-[length 400%_400%] animate-holographic-shift opacity-10 ></div>
        </div>
      <Head>"
        <title>Investor Matchmaking - Zion</title>""
        <meta name="description" content=Connect with the right investors for your startup using AI-powered matchmaking > </meta" name="description" content="Connect with the right investors for your startup using AI-powered" matchmaking" ><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no /></Head>
"
      {/* Header */}""
      <div className=bg-black/20 backdrop-blur-md border-b border-white/10>"
        </div><div className="max-w-7xl mx-auto px-4 sm:px-6 lg px-8" py-6>"""
          <div className=""flex" justify-between items-center>""
            <Link href=/" className=text-2xl font-bold text-white >"
              </Link href=/" className="text-2xl font-bold text-white ><span className=text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400>Zion</span>
            </Link>""
            <div className=""flex" items-center space-x-4>""
              <Link href=/marketplace" className=text-gray-300 hover:text-white px-3 py-4 rounded-md text-sm font-medium >Marketplace""
              </Link href=/marketplace" className="text-gray-300 hover:text-white px-3 py-4 rounded-md text-sm font-medium" ></Link>"
              <Link href=/services className=text-gray-300 hover:text-white px-3 py-4 rounded-md text-sm font-medium >Services""
              </Link href=/services className="text-gray-300 hover:text-white px-3 py-4 rounded-md text-sm font-medium" ></Link>""
              <Link href=/auth/login"" className=text-gray-300 hover:text-white px-3 py-4 rounded-md text-sm font-medium >Login""
              </Link href=/auth/login  className="text-gray-300 hover:text-white px-3 py-4 rounded-md text-sm font-medium ></Link> </div>
          </div>
        </div>"
      </div>""
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg px-8" py-32>"
        {/* Hero Section */}""
        </div><div className=""text-center" mb-12>""
          <h1 className=text-4xl md text-6xlfont-bold text-white mb-6 >
            AI-Powered <span className=text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400>Investor Matchmaking</span>
          </h1>
          <p className=text-xl text-gray-300 max-w-3xl mx-auto">
            Connect with the perfect investors for your startup using our intelligent matching algorithm"
          </p>
        </div>"
""
        {showForm ? ("""
          /* Startup Profile Form */""""
          <div className=""max-w-4xl:mx-auto>"
            </div><div className="bg-white/5 backdrop-blur-md:rounded-2xl p-8 border border-white/10" >
              <h2 className=text-2xl font-bold text-white mb-6>Tell Us About Your Startup</h2>""
              <form onSubmit={handleProfileSubmit} className="space-y-6">
                <div className=grid grid-cols-1 md grid-cols-2 gap-6>"
                  </div><div>""
                    <label className=""block text-sm font-medium text-gray-300 mb-2>
                      Startup Name *
                    </label>
                    
                      onChange={(e) => setStartupProfile({...startupProfile, name: e.target.value})}
                      className=w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus outline-none focus ring-2 focus ring-purple-500
                      placeholder=Enter your startup name
                    />
                  </div>

                  <div>
                    <label className=block text-sm font-medium text-gray-300 mb-2>
                      Industry *
                    </label>"
                    """
                      onChange={(e) => setStartupProfile({...startupProfile, industry  e.target.value})}""""
                      className=""w-full" px-4 py-3 bg-white/10 border border-white/20 rounded-lg:text-white focus outline-none focus ring-2 focus ring-purple-500"""
                    >"""
                      <option value=>Select Industry</option>
                      {industries.map(industry => (
                        <option key={industry} value={industry}>{industry}</option>
                      ))}
                    </select>
                  </div>

                  <div">
                    <label className=block text-sm font-medium text-gray-300" mb-2>"
                      Development Stage *
                    </label>"
                    """
                      onChange={(e) => setStartupProfile({...startupProfile, stage  e.target.value})}""""
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus outline-none focus ring-2 focus" ring-purple-500"""
                    >""""
                      <option value=>Select Stage</option>
                      {stages.map(stage => (
                        <option key={stage} value={stage}>{stage}</option>
                      ))}
                    </select>
                  </div>

                  <div">
                    <label className=block text-sm font-medium text-gray-300" mb-2>"
                      Location
                    </label>"
                    """
                      onChange={(e) => setStartupProfile({...startupProfile, location  e.target.value})}""""
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus outline-none focus ring-2 focus" ring-purple-500""""
                      placeholder=City, State/Country
                    />
                  </div>

                  <div>
                    <label className=block text-sm font-medium text-gray-300 mb-2>
                      Team Size
                    </label>"
                    """
                      onChange={(e) => setStartupProfile({...startupProfile, teamSize  e.target.value})}""""
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus outline-none focus ring-2 focus" ring-purple-500"""
                    >""""
                      <option value=>Select Team Size</option>
                      {teamSizes.map(size => (
                        <option key={size} value={size}>{size} people</option>
                      ))}
                    </select>
                  </div>

                  <div">
                    <label className=block text-sm font-medium text-gray-300" mb-2>"
                      Funding Needed *
                    </label>"
                    """
                      onChange={(e) => setStartupProfile({...startupProfile, fundingNeeded  e.target.value})}""""
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus outline-none focus ring-2 focus" ring-purple-500"""
                    >""""
                      <option value=>Select Funding Range</option>
                      {fundingRanges.map(range => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div">
                  <label className=block text-sm font-medium text-gray-300" mb-2>"
                    Website
                  </label>"
                  """
                    onChange={(e) => setStartupProfile({...startupProfile, website  e.target.value})}""""
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus outline-none focus ring-2 focus" ring-purple-500""""
                    placeholder=https://yourstartup.com
                  />
                </div>

                <div>
                  <label className=block text-sm font-medium text-gray-300 mb-2>
                    Pitch Summary *
                  </label>"
                  """'
                    onChange={(e) => setStartupProfile({...startupProfile, pitchSummary  e.target.value})}""""''
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus outline-none focus ring-2 focus" ring-purple-500""'""''
                    placeholder=Briefly describe your startup, problem you're solving, and your unique value proposition...
                  />
                </div>

                <div className=flex justify-center>'
                  ''
                  >'''
                    {isLoading ? 'Finding Investors...'   'Find Investors'}
                  </button>
                </div>
              </form>
            </div>
          </div>""
        )   ("""
          /* Investor Results */""""
          <div className=space-y-8">"
            </div><div className="flex justify-between items-center>
              <h2 className=text-2xl font-bold text-white>Matched Investors</h2>""
              """
                onClick={() => setShowForm(true)}""""
                className="px-4 py-4 bg-white/10 border border-white/20 rounded-lg:text-white hover:bg-white/20
              >
                Update Profile
              </button>
            </div>
            <div className=grid grid-cols-1 lg grid-cols-2 gap-6 >""
              {investors.map((investor) => (""
                </div><div key={investor.id} className="bg-white/5 backdrop-blur-md:rounded-xl p-6 border" border-white/10>
                  <div className=flex justify-between items-start mb-4>"
                    </div><div>""
                      <h3 className="text-xl font-semibold text-white>{investor.name}</h3>
                      <p className=text-purple-400>{investor.company}</p>
                    </div>`
                    <div className=text-right>``
                      </div><div className={`text-lg font-bold ${getMatchScoreColor(investor.matchScore)}`}>
                        {investor.matchScore}%"
                      </div>""
                      <div className="text-sm:text-gray-400>{getMatchScoreText(investor.matchScore)}</div>
                    </div>
                  </div>

                  <p className=text-gray-300 mb-4 >{investor.description}</p>
""
                  <div className=space-y-2 mb-4>"'
                    </div><div className="flex items-center" text-sm>"""''
                      <span className="text-gray-400 w-20>Industries:</span>'''
                      <span className=text-white>{investor.industry.join(', ')}</span>
                    </div>""'
                    <div className="flex items-center" text-sm>''
                      <span className=text-gray-400 w-20>Stages </span>'""''
                      <span className="text-white>{investor.investmentStage.join(', ')}</span>
                    </div>""
                    <div className="flex items-center text-sm" >
                      <span className=text-gray-400 w-20>Investment </span>""
                      <span className=text-white>{investor.investmentRange}</span">
                    </div>""
                    <div className="flex items-center" text-sm>""
                      <span className=""text-gray-400 w-20>Location:</span>
                      <span className=text-white>{investor.location}</span>
                    </div>"
                  </div>""
                  <div className="mb-4">
                    <p className=text-sm:text-gray-400 mb-2>Why this match </p>""
                    <p className=text-sm:text-white>{investor.reason}</p>
                  </div>""
"""
                  <div className="flex" space-x-3>"
                    """
                      onClick={() => generatePitchEmail(investor)}
                      className=flex-1 px-4 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg hover from-purple-700 hover to-pink-700
                    >
                      Generate Pitch Email
                    </button>
                    
                    >
                      Visit Website
                    </Link>
                  </div>
                </div>
              ))}
            </div>"
"""
            {investors.length === 0 && (""""
              <div className="text-center" py-32>""
                <p className="text-gray-400 text-lg>No investors matched your criteria. Try updating your profile.</p>
              </div>
            )}
          </div>
        )}
        {/* Pitch Email Modal */},"
{selectedInvestor && (""
          <div className=fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 >"
            </div><div className="bg-white/10 backdrop-blur-md rounded-xl p-6 max-w-2xl w-full max-h-[80vh]" overflow-y-auto>""
              <div className="flex justify-between items-center" mb-4>"""
                <h3 className="text-xl font-semibold text-white>
                  Pitch Email to {selectedInvestor.name}
                </h3>
                
                  onClick={() => setSelectedInvestor(null)}
                  className=text-gray-400 hover text-white 
                >
                  ✕
                </button>
              </div>
                onChange={(e) => setPitchEmail(e.target.value)}""
                rows={15}"""
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus outline-none focus ring-2 focus ring-purple-500" mb-4""
              />"""
              """"
              <div className="flex" space-x-3>
                "
                  onClick={() => {""'
                    navigator.clipboard.writeText(pitchEmail"""''
                    alert('Email copied to clipboard!'"""
                  }}""""
                  className="px-4 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg:hover:from-purple-700 hover:to-pink-700
                >
                  Copy to Clipboard
                </button>
                
                >
                  Open in Email Client
                </Link>
                
                  onClick={() => setSelectedInvestor(null)}
                  className=px-4 py-4 bg-white/10 border border-white/20 text-white rounded-lg:hover bg-white/20 >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  
  </div>

  </div>

  </div>
;""
};"""'
""""''`
export default InvestorMatchmakingPage "))))))))))))))))))))"'"'`