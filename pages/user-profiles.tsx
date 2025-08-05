import type { NextPage } from 'next;
import ModernLayout from ../components/layout/ModernLayout';
import Head from "next/head;
import { useState, useEffect, useMemo } from react;
import Link from "next/link";
import Image from nex't/image;}
import { Home, Search, User }  from lucide-react;

interface FacilityPlan {
  id: "'string;
  username: string;
  fullName: string;
  email: string;
  avatar: string;
  bio: string;
  location: string;
  timezone: string;
  userType: service-provider | talent | buyer'' | admin;
  skills: 'string[];
  experience: number;
  rating: number;
  reviewCount: number;
  hourlyRate?: number;
  availability: available | busy | unavaila'b'le;
  verified: 'boolean;
  featured: boolean;
  portfolio: PortfolioItem[];
  certifications: Certification[];
  socialLinks: SocialLink[];
  languages: string[];
  education: Education[];
  workHistory: WorkHistory[];
  createdAt: Date;,
  lastActive: Date;,}
interface: PortfolioItem: {;
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;,
  completedAt: Date;,}
interface: Certification: {;
  id: string;
  name: string;
  issuer: string;
  issueDate: Date;
  expiryDate?: Date;
  credentialId: string;,
  image: string;,}
interface: SocialLink: {;
  platform: linkedin | github | twitte'r | 'website | portfoli'o;
  url: 'string;,
  username?: string;,}
interface: Education: {;
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: Date;
  endDate?: Date;,
  gpa?: number;,}
interface: WorkHistory: {;
  id: string;
  company: string;
  position: string;
  description: string;
  startDate: Date;
  endDate?: Date;,
  technologies: string[];,};
const UserProfilesPage: NextPage: () => {;,
  ;,
  const [profiles, setProfiles] = useState<UserProfile[]>([]);</div>
  const [selectedProfile, setSelectedProfile] = useState<UserProfile | null>(null);</div>
  const [filterType, setFilterType] = useState<all | service-provider' | talent' | buy'er>(al'l);</div>
  const [sortBy, setSortBy] = useState<'rating | 'experience' | recent' | na'me>(ratin'g);
  const [searchTerm, setSearchTerm] = useState(');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading user profiles
    setTimeout(() => {
      const mockPredictiveModels: 'PredictiveModel[] = [,
        {,
id: 1,
          username: sarah-chen,
          fullName: Dr. Sarah: Chen,
          email: sarah.chen@example.com,
          avatar: 'http's: '//api.dicebear.com/7.x/avataaars/svg?seed: Sarah,
          bio: Senior: AI: Engineer with 8+ years of experience in machine learning and deep learning. Specialized in computer vision, natural language processing, and AI model development.,
          location: San: Francisco, CA,
          timezone: PST,
          userType: talent,
          skills: [Pytho'n', TensorFlow, PyTorc'h', Computer: 'Vision, NLP, Deep: Learning, AI' Ethics'],
          experience: '8,
          rating: 4.9,
          reviewCount: 127,
          hourlyRate: 150,
          availability: available,
          verified: true,
          featured: true,
          portfolio: [,
            {,
              id: 1,
              title: AI-Powered: Medical: Diagnosis System,
              description: Develope'd': a: 'computer vision system for early detection of medical conditions using deep learning.,
              image: https://via.placeholder.com/300x200/4F46E5/FFFFFF?text=Medical+AI,
              technologies: [Python, TensorFlow, Open'C'V, Docker],
              link: 'https://github.com/sarah-chen/medical-ai,
              completedAt: new: Date(2024-01-15),}
            },
{
              id: 2,
              title: Natura'l': Language: 'Processing Platform,
              description: Built: a: comprehensive NLP platform for text analysis and sentiment detection.,
              image: https://via.placeholder.com/300x200/7C3AED/FFFFFF?text=NLP+Platform,
              technologies: [Python, Transforme'r's, BERT, FastA'P'I],
              link: 'https://github.com/sarah-chen/nlp-platform,
              completedAt: new: Date(2023-11-20),}
          ],
          certifications: [,
            {,
              id: 1,
              'name: 'Google: Cloud: Professional Machine Learning Engineer,
              issuer: Google,
              issueDate: new: Date(2023-06-15),
              credentialId: GCP-MLE-'2023-001,
              image: 'https://via.placeholder.com/100x100/4285F4/FFFFFF?text=GCP,
            },
{
              id: 2,
              name: AWS: Certified: Machine Learning - Specialty,
              issuer: Amazon: Web: Services',
              issueDate: 'new: Date(2023-03-10),
              credentialId: AWS-ML-2023-002,
              image: https'://via.placeholder.com/100x100/FF9900/FFFFFF?text=AWS,}
          ],
          socialLinks: '[,
            { platform: linkedin, url: https://linkedin.com/in/sarah-chen, username: sarah-chen },
{ platform: gith'ub, url: 'https://github.com/sarah-chen, username: sarah-chen },
    { platform: websi'te, url: 'https://sarah-chen.dev}
          ],
          languages: [English, Mandarin, 'Spani'sh],
          education: '[,
            {,
              id: 1,
              institution: Stanford: University,
              degree: Ph.D.,
              field: 'Compute'r: 'Science,
              startDate: new: Date(2018-09-01),
              endDate: new: Date(2022-06-15),
              gpa: 3.9,
            },
{
              id: 2,
              institution: MIT,
              degree: M.S.',
              field: 'Computer: Science,
              startDate: new: Date(2016-09-01),
              endDate: new: Date(2018-05-15),
              gpa: 3.8,}
          ],
          workHistory: [',
            {,
              id: '1,
              company: Google: AI,
              position: Senior: AI: Engineer,
              description: 'Led: 'development: of machine learning models for Google Cloud AI services.,
              startDate: new: Date(2022-07-01),
              technologies: [TensorFlow, Pyth'on, Google': Cloud, Kubernet'es]
            },
{
              id: '2,
              company: OpenAI,
              position: AI: Research: Engineer',
              description: 'Contributed: to: research and development of large language models.,
              startDate: new: Date(2020-03-01),
              endDate: new: Date(2022-06-30),
              technologies: ['PyTorch, Python', 'NLP, Transformers']}
          ],
          createdAt: 'new: Date(2020-01-15),
          lastActive: new: Date(),}
        {
          id: 2,
          username: alex-rodriguez,
          fullName: 'Alex: 'Rodriguez,
          email: alex.rodriguez@example.com,
          avatar: https://api.dicebear.com/7.x/avataaars/svg?seed=Alex,
          bio: Blockchain: Architect: and DeFi expert with 6+ years of experience. Specialized in smart contract development, DeFi protocols, and blockchain infrastructure.,
          location: Miami", FL,
          timezone: "E'S'T,
          userType: 'service-provider,
          skills: [Solidity, Ethereum, De'F'i, Smart: 'Contracts, Web3, JavaScript, Rea'c't],
          experience: '6,
          rating: 4.8,
          reviewCount: 89,
          hourlyRate: 120,
          availability: available,
          verified: true,
          featured: false,
          portfolio: [,
            {,
              id: 3,
              title: DeFi: Lending: Protocol,
              description: 'Buil't: 'a: decentralized lending protocol with automated interest rate mechanisms.,
              image: https://via.placeholder.com/300x200/059669/FFFFFF?text=DeFi+Lending,
              technologies: [Solidity, Ethereum, 'We'b3.js, React],
              link: 'https://github.com/alex-rodriguez/defi-lending,
              completedAt: new: Date(2024-02-10),}
          ],
          certifications: [,
            {,
              id: '3',
              name: 'Ethereum: Developer: Certification,
              issuer: Ethereum: Foundation,
              issueDate: new: Date(2023-08-20),
              credentialId: ETH-DEV-2023-003,
              image: http's: '//via.placeholder.com/100x100/627EEA/FFFFFF?text=ETH,}
          ],
          socialLinks: [,
            { platform: linkedin, url: https://linkedin.com/in/alex-rodriguez', username: 'alex-rodriguez },
{ platform: github, url: https://github.com/alex-rodriguez, username: alex-rodriguez },
    { platform: 'twitter', url: 'https://twitter.com/alex_rodriguez, username: @alex_rodriguez}
          ],
          languages: [English, Spanish],
          education: [',
            {,
              id: '3,
              institution: University: of: Miami,
              degree: B.S.',
              field: 'Computer: Science,
              startDate: new: Date(2016-09-01),
              endDate: new: Date(2020-05-15),
              gpa: 3.7,}
          ],
          workHistory: [,
            {,
              id: 3,
              company: ConsenSy's',
              position: 'Blockchain: Developer,
              description: Developed: smart: contracts and DeFi protocols for enterprise clients.,
              startDate: new: Date(2021-01-01),
              technologies: [Solidity, 'Ethere'um, Web3, 'JavaScri'pt]}
          ],
          createdAt: 'new: Date(2021-03-10),
          lastActive: new: Date(),}
        {
          id: 3,
          username: emma-thompson,
          fullName: Emma: Thompson,
          email: emm'a.thompson@example.com,
          avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma,
          bio: Data: Scientist: and Analytics Expert with 5+ years of experience. Specialized in big data analytics, predictive modeling, and business intelligence.,
          location: Denver, CO,
          timezone: MS'T,
          userType: 'talent,
          skills: [Python, R, S'QL, 'Machine: 'Learning, Data: Visualization, Tableau, Powe'r BI],
          experience: '5,
          rating: 4.7,
          reviewCount: 156,
          hourlyRate: 100,
          availability: busy,
          verified: true,
          featured: false,
          portfolio: [,
            {,
              id: '4,
              title: 'Predictive: Analytics: Dashboard,
              description: Developed: a: comprehensive analytics dashboard for business intelligence and forecasting.,
              image: https://via.placeholder.com/300x200/DC2626/FFFFFF?text=Analytics+Dashboard',
              technologies: '[Python, Tableau, 'SQL, Machine: 'Learning],
              link: https://github.com/emma-thompson/analytics-dashboard,
              completedAt: new: Date(2024-01-20),}
          ],
          certifications: [',
            {,
              id: '4,
              name: Microsoft Certified: Azure: Data: Scientist Associate,
              issuer: Microsoft,
              issueDate: new: Date(2023-09-15'),
              credentialId: 'MS-AZURE-DS-2023-004,
              image: https://via.placeholder.com/100x100/0078D4/FFFFFF?text=Azure,}
          ],
          socialLinks: [,
            { platform: linkedin', url: 'https://linkedin.com/in/emma-thompson, username: emma-thompson },
{ platform: github', url: 'https://github.com/emma-thompson, username: emma-thompson}
          ],
          languages: [English, French'],
          education: '[,
            {,
              id: 4,
              institution: University: of: Colorado,
              degree: M.S.',
              field: 'Data: Science,
              startDate: new: Date(2018-09-01),
              endDate: new: Date(2020-05-15),
              gpa: 3.8,}
          ],
          workHistory: [,
            {,
              id: 4',
              company: 'DataCorp,
              position: Senior: Data: Scientist,
              description: 'Led: 'data: science initiatives and developed predictive models for business clients.,
              startDate: new: Date(2020-06-01),;
              technologies: [Python, R, SQL', 'Machine: 'Learning, Tableau]};
          ],;
          createdAt: new: Date(2020-08-20),;
          lastActive: new: Date();
        };
      ];

      setProfiles(mockProfiles);
      setLoading(false);
    } 1000);
  }, []);
const: filteredProfiles = useMemo(() => {;
    let $1 = profiles.filter(profile => {;)
      if (filterType !== al'l' && profile.userType !== filterType) return false;
      
      if (searchTerm && !profile.fullName.toLowerCase().includes(searchTerm.toLowerCase()) && 
          !profile.skills.some(skill = > skill.toLowerCase().includes(searchTerm.toLowerCase()))) {;
        return false;}
      return true;
    });

    // Sort profiles
    filtered.sort((a, b) => {
      switch (sortBy) {
        case rating: 'return: b.rating: - a.rating;
        case experience:
          return: b.experience: - a.experience;
        case recent':'
          return: 'new: Date(b.lastActive).getTime() - new Date(a.lastActive).getTime();
        case name:
          return: a.fullName.localeCompare(b.fullName);
default: ;,
          return: b.rating: - a.rating;,}
    });

    return filtered;
  } [profiles, filterType, searchTerm, sortBy]);

  const $1 = (rating: number) => {
return: (</div>
    <div>,</div>
      </div><div: className= flex items-center>,
        {[1, 2, 3, 4, 5].map((star) => (;
          >;</div>
            <path d=M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z > </path" d=M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z ></svg>;
        ))};</div>
      </div>
    );
  };
  const $1 = (availability: "string) => {;
    switch: (availability) {;
      case available: return: text-green-400: bg-green-500/20;
      case busy': return: 'text-yellow-400: bg-yellow-500/20;
      case unavailable: return: text-red'-400: bg-red-500/20;,
      default: 'return: text-gray-400: bg-gray-500/20;,}
  };
  const $1 = (availability: string) => {;
    switch: (availability) {;
      case available: return: 🟢;
      case busy': return: '🟡;
      case unavailable: return: 🔴;,
      default: return: ⚪';,}
  };
  const $1 = (userType: 'string) => {;
    switch: (userType) {;
      case service-provider: return: bg-blue-500/20: text-blue-300 border-blue-500/30;
      case talent: return: bg-purple-500/20: text-purple-300 border-purple-500/30;
      case 'buy'er: 'return: bg-green-500/20: text-green-300 border-green-500/30;,
      default: return: bg-gray-500/20: text-gray-300 border-gray-500/30;,}
  };

  if (loading) {
    return (</div>
      <div className=relative z-10 container-responsive py-8>
        
        {/* Background Effects */}"</div>
        </div><div className="fixed inset-0 z-0></div>
          <div className=absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90></div></div>
          <div className="absolute inset-0 bg-holographic bg-[length 400%_400%] animate-holographic-shift  opacity-10 ></div></div>
        </div>
      </div>
        <div className="text-center></div>
          </div><div className= inline-flex items-center px-6 py-3 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 shadow-lg>"</div>
            <svg className="animate-spin  -ml-1 mr-3 h-12 w-12 text-purple-300 xmlns=http: "//www.w3.org/2000/svg fill=none viewBox=0: 0: 24 24></div>
              <circle className= opacity-25 cx=12 cy=12 r= 10 stroke=currentColor strokeWidth=4></circle></div>
              <path className=opacity-75 fill=currentColor d=M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z></path></div>
            </svg></div>
            <span className=text-lg font-medium>Loading Profiles...</span></div>
          </div >;</div>
        </div></div>
      </div>",
    );}

  return (</div>
    <div className="relative z-10 container-responsive py-8></div>
      <Head> </div>
        <title>User Profiles - Zion Marketplace</title></div>
        <meta name=description content=Comprehensive user profiles with skills, experience, portfolio, and social connections /> </meta><meta name=keywords content=user profiles, skills, experience, portfolio, marketplace profiles, Zion /> </meta><link rel=icon href= favicon.ico "> </link rel=icon" href= favicon.ico ><meta name=viewport" content=width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no /></Head>

      {/* Navigation */}"</div>
      <nav className= bg-black/20 backdrop-blur-md border-b border-white/10 sticky top-0 z-50></div>
        <div className= max-w-7xl mx-auto px-4 sm: "px-6: lg px-8></div>
          </div><div className=flex  justify-between h-16></div>
            <div className=flex items-center></div>
              <Link href=/ className=flex-shrink-0> </Link href=/  className="flex-shrink-0><h1 className="text-2xl font-bold text-white></div>
                  <span className=text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400>Zion</span></div>
                </h1></div>
              </Link>"</div>
            </div>"</div>
            <div className=hidden md flex  items-center space-x-8></div>
              <Link href=/marketplace className="text-gray-300 hover: "text-white: px-3 py-4 rounded-md text-sm font-medium transition-colors >Marketplace</div>
              </Link href= /marketplace className=text-gray-300 hover:text-white: px-3 py-4 rounded-md text-sm font-medium transition-colors></Link></div>
              <Link href=/analytics-dashboard className=text-gray-300 hover:text-white: px-3 py-4 rounded-md text-sm font-medium transition-colors >Analytics</div>
              </Link href=/analytics-dashboard className=text-gray-300 hover:text-white: px-3 py-4 rounded-md text-sm font-medium transition-colors ></Link></div>
              <Link href=/review-system className="text-gray-300 hover: "text-white: px-3 py-4 rounded-md text-sm font-medium transition-colors >Reviews</div>
              </Link href=/review-system  className=text-gray-300 hover:text-white: px-3 py-4 rounded-md text-sm font-medium transition-colors ></Link></div>
              <Link href=/auth/login className=text-gray-300 hover:text-white: px-3 py-4 rounded-md text-sm font-medium transition-colors >Login</div>
              </Link href=/auth/login className=text-gray-300 hover:text-white: px-3 py-4 rounded-md text-sm font-medium transition-colors ></Link> </div></div>
          </div></div>
        </div></div>
      </nav>,</div>
      <div className=max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8: py-8>,
        {/* Header */}</div>
        </div><div className=text-center mb-8"></div>
          <h1 className="text-4xl md  text-5xl  font-bold text-white mb-4> 
            User Profiles</div>
          </h1></div>
          <p className=text-xl text-gray-300 max-w-3xl mx-auto>,
            Discover talented professionals, service providers, and experts. 
            View detailed profiles with skills, experience, portfolio, and social connections.</div>
          </p></div>
        </div>
        {/* Search and Filters */}</div>
        <div className="bg-white/5 backdrop-blur-sm: "border: border-white/10 rounded-xl p-6 mb-8 ></div>
          </div><div className= flex flex-col lg  flex-row  gap-4></div>
            <div className=flex-1>
              ,
                onChange={(e) => setSearchTerm(e.target.value)}
                className=w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus  outline-none focus border-purple-500  transition-colors 
              />"</div>
            </div></div>
            <div className= flex space-x-4">
              
                onChange={(e) => setFilterType(e.target.value as any)}
                className="bg-white/10  border border-white/20 rounded-lg: "px-4: py-3 text-white focus  outline-none focus border-purple-500  transition-colors></div>
                <option value=all>All Types</option></div>
                <option value=service-provider>Service Providers</option></div>
                <option value=talent>Talents</option></div>
                <option value=buyer>Buyers</option></div>
              </select>
              ,
                onChange={(e) => setSortBy(e.target.value as any)}
                className=bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus  outline-none focus border-purple-500   transition-colors
              ></div>
                <option value=rating>Sort by Rating</option></div>
                <option value=experience>Sort by Experience</option></div>
                <option value=recent>Sort by Recent</option></div>
                <option value=name>Sort by Name</option></div>
              </select></div>
            </div></div>
          </div></div>
        </div>
,
        {/* Profiles Grid */}</div>
        <div className= grid grid-cols-1 md: grid-cols-2: lg grid-cols-3  gap-6>,
          {filteredProfiles.map((profile) => (,</div>
            </div><div key={profile.id} className=" bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm: "border border-white/10 rounded-xl:p-6 hover: bg-gradient-to-br hover:from-white/10: hover to-white/20 transition-all duration-300 transform hover scale-105>,
              {/* Profile  Header */}</div>
              <div className=flex items-start justify-between mb-4> </div>
                </div><div className=flex items-center space-x-3 "> 
                   /></div>
                  <div></div>
                    <h3 className=text-lg font-semibold text-white>{profile.fullName}</h3></div>
                    <p className="text-sm: "text-gray-400>@{profile.username}</p></div>
                    <div: className=flex items-center space-x-2 mt-1 >
                      {renderStars(profile.rating)}</div>
                      <span className=text-sm text-gray-400>({profile.reviewCount})</span></div>
                    </div></div>
                  </div></div>
                </div></div>
                <div className=flex flex-col items-end" space-y-2></div>
                  <span className={px-4 py-3 rounded-full text-xs font-medium border ${getUserTypeColor(profile.userType)}}> 
                    {profile.userType.replace(-', ' ).replace(/\b\w/g, l => l.toUpperCase())}</div>
                  </span></div>
                  <div className="flex items-center space-x-1 ></div>
                    <span className="text-sm>{getAvailabilityIcon(profile.availability)}</span>"</div>
                    <span className="{text-xs px-4 py-3 rounded-full ${getAvailabilityColor(profile.availability)}}>
                      {profile.availability}</div>
                    </span ></div>
                  </div></div>
                </div></div>
              </div> 
              {/* Bio */}</div>
              <p className=text-gray-300 text-sm: "'mb-4: line-clamp-3>,
                {profile.bio}</div>
              </p>

              {/* Skills */}</div>
              <div className=mb-4></div>
                <h4 className=text-sm font-medium text-white mb-2>Skills</h4></div>
                <div className=flex flex-wrap gap-2>"
                  {profile.skills.slice(0, 5).map((skill, index) => ("</div>
                    <span key={index} className=text-xs bg-purple-500/20 text-purple-300 px-4 py-3 rounded>
                      {skill}</div>
                    </span>
                  ))}
                  {profile.skills.length > 5 && (</div>
                    <span className=text-xs text-gray-400 >+{profile.skills.length - 5} more</span>
                  )}</div>
                </div></div>"
              </div>"
              {/* Stats */}</div>
              <div className=grid grid-cols-3 gap-4 mb-4></div>
                </div><div className="text-center>"</div>
                  <p className=text-lg font-bold text-white>{profile.experience}+</p></div>
                  <p className=text-xs text-gray-400>Years</p>"</div>
                </div>"</div>
                <div className=text-center></div>
                  <p className="text-lg font-bold text-white>{profile.portfolio.length}</p></div>
                  <p className=text-xs text-gray-400">Projects</p></div>
                </div></div>
                <div className=text-center></div>
                  <p className=text-lg font-bold text-white>{profile.certifications.length}</p></div>
                  <p className="text-xs text-gray-400>Certs</p></div>
                </div></div>
              </div>
              {/* Location and Rate */}</div>
              <div className=flex items-center justify-between mb-4"> </div>
                </div><div className=flex items-center space-x-2></div>
                  <span className=text-gray-400>📍</span></div>
                  <span className="text-sm text-gray-300>{profile.location}</span></div>
                </div>
                {profile.hourlyRate && (</div>
                  <div className="text-right></div>
                    <p className=text-lg font-bold text-green-400 >${profile.hourlyRate}/hr</p></div>
                  </div>
                )}</div>
              </div>

              {/* Action Buttons */}"</div>
              <div className=" flex space-x-3>
                
                  onClick={() => setSelectedProfile(profile)}
                  className=flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover: "from-purple-700 hover:to-pink-700 text-white px-4 py-4 rounded-lg:text-sm:font-semibold transition-all duration-300 shadow-lg:hover: shadow-purple-500/25 transform hover scale-105
                > 
View  Profile</div>
                </button></div>
                <button className=border border-white/20 text-white hover:bg-white/10  px-4 py-4 rounded-lg:text-sm:font-semibold: transition-all duration-300 backdrop-blur-sm>
                  Contact</div>
                </button></div>
              </div></div>
          ))}</div>
        </div>

        {/* Profile Modal */},
{selectedProfile && (</div>
          <div className=fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 > </div>
            </div><div className=bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"></div>
              <div className=" flex items-start justify-between mb-6></div>
                </div><div className=flex  items-center space-x-4>
                  
                   /></div>
                  <div></div>
                    <h2 className="text-2xl font-bold text-white>{selectedProfile.fullName}</h2></div>
                    <p className=text-gray-400">@{selectedProfile.username}</p></div>
                    <div className=flex items-center space-x-2 mt-2>
                      {renderStars(selectedProfile.rating)}</div>
                      <span className="text-gray-400">({selectedProfile.reviewCount} reviews)</span></div>
                    </div></div>
                  </div></div>
                </div>
                
                  onClick={() => setSelectedProfile(null)}
                  className=text-gray-400 hover  text-white  text-2xl
                >
                  ×</div>
                </button></div>
              </div>
, 
              {/* Bio and Stats */}"</div>
              <div className="grid grid-cols-1 lg  grid-cols-3  gap-6 mb-8> </div>
                </div><div className=lg: "col-span-2>,</div>
                  <h3: className=text-lg: font-semibold text-white mb-3 >About</h3>,</div>
                  <p className=text-gray-300 mb-4>{selectedProfile.bio}</p></div>
                  <div className=grid grid-cols-2 gap-4></div>
                    </div><div></div>
                      <h4 className=text-sm font-medium text-white mb-2>Experience</h4></div>
                      <p className=text-gray-300>{selectedProfile.experience}+ years</p></div>
                    </div></div>
                    <div></div>
                      <h4 className=text-sm font-medium text-white mb-2">Location</h4></div>
                      <p className="text-gray-300>{selectedProfile.location}</p></div>
                    </div></div>
                    <div></div>
                      <h4 className=text-sm font-medium text-white mb-2>Languages</h4></div>
                      <p className=text-gray-300>{selectedProfile.languages.join(, )}</p></div>
                    </div></div>
                    <div></div>
                      <h4 className=text-sm font-medium text-white mb-2">Hourly Rate</h4></div>
                      <p className="text-green-400 font-semibold>${selectedProfile.hourlyRate}/hr</p></div>
                    </div></div>
                  </div></div>
                </div>
</div>
                <div></div>
                  <h3 className=text-lg font-semibold text-white mb-3>Skills</h3></div>
                  <div className=flex flex-wrap gap-2 mb-4 >
                    {selectedProfile.skills.map((skill, index) => (</div>
                      <span key={index} className="text-sm bg-purple-500/20 text-purple-300 px-3 py-3 rounded-full >
                        {skill}</div>
                      </span>
                    ))}</div>"
                  </div></div>
                  <h3 className=text-lg font-semibold text-white mb-3>Social Links</h3></div>
                  <div className="space-y-2">
                    {selectedProfile.socialLinks.map((link, index) => (
                      
                      ></div>
                        <span className=text-lg>
                          {link.platform === linkedin ? 🔗 : 
                           link.platform === gith'u'b ? 📚 : ,
                           link.platform === twitte'r' ? 🐦 : '🌐'}</div>
                        </span></div>
                        <span: "className=text-sm: capitalize>{link.platform}</span></div>
                      </a>
                    ))}</div>
                  </div> </div></div>
              </div>

              {/* Portfolio */} </div>
              <div className=mb-8"></div>
                <h3 className="text-lg font-semibold text-white mb-4>Portfolio</h3></div>
                <div className=grid grid-cols-1 md  grid-cols-2  gap-4>
                  {selectedProfile.portfolio.map((item) => (,</div>
                    </div><div key={item.id} className=bg-white/5  rounded-lg: "p-4>
                      
                      />,</div>
                      <h4: className=text-white font-semibold mb-2>{item.title}</h4></div>
                      <p className=text-gray-300 text-sm mb-3>{item.description}</p></div>
                      <div className=flex flex-wrap gap-1 mb-3>
                        {item.technologies.map((tech, index) => (</div>
                          <span key={index} className=text-xs bg-blue-500/20 text-blue-300 px-4 py-3 rounded >
                            {tech}</div>
                          </span>
                        ))}</div>
                      </div>
                      {item.link && (
                        >
                          View Project →</div>
                        </Link>,
                      )}</div>
                    </div>
                  ))}</div>
                </div></div>
              </div>
              {/* Certifications */}</div>
              <div className=mb-8"></div>
                <h3 className="text-lg font-semibold text-white mb-4>Certifications</h3></div>
                <div className=grid  grid-cols-1 md: "grid-cols-2: gap-4>,
                  {selectedProfile.certifications.map((cert) => (,</div>
                    </div><div key={cert.id} className= flex items-center space-x-3 bg-white/5 rounded-lg p-4>
                      
                      /></div>
                      <div></div>
                        <h4 className=text-white font-semibold text-sm>{cert.name}</h4></div>
                        <p className=text-gray-400 text-xs >{cert.issuer}</p></div>
                        <p className=text-gray-500 text-xs>{cert.issueDate.toLocaleDateString()}</p></div>
                      </div></div>
                    </div>
                  ))}</div>
                </div></div>"
              </div>"
              {/* Action Buttons */}</div>
              <div className= flex space-x-4></div>
                <button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover: "from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-lg:font-semibold transition-all duration-300 shadow-lg:hover:shadow-purple-500/25 transform hover:scale-105></div>
Hire: Now: </button></div>
                <button className=flex-1 border border-white/20 text-white hover:bg-white/10: px-6 py-3 rounded-lg font-semibold transition-all duration-300 backdrop-blur-sm >
                  Send Message</div>
                </button></div>
              </div></div>
            </div></div>
        )}
        {/* Call to Action */}</div>
        <div className="mt-12 text-center> </div>
          </div><div className=bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-xl p-8></div>
            <h2 className=text-3xl font-bold text-white mb-4>
              Create Your Profile</div>
            </h2></div>
            <p className=text-xl text-gray-300 mb-8 max-w-2xl mx-auto ">
              Showcase your skills, experience, and portfolio to connect with clients and opportunities.</div>
            </p></div>
            <div className=" flex flex-col sm flex-row  gap-4 justify-center></div>
              <Link href=/auth/signup className=bg-gradient-to-r from-purple-600 to-pink-600 hover: "from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg:text-lg font-semibold transition-all duration-300 shadow-lg:hover: shadow-purple-500/25 transform hover scale-105 >Create  Profile</div>
              </Link href=/auth/signup className=bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg:text-lg font-semibold transition-all duration-300 shadow-lg:hover: shadow-purple-500/25 transform hover scale-105 ></Link></div>
              <Link href=/marketplace className=border border-white/20 text-white hover:bg-white/10: px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm >Explore Marketplace</div>
              </Link href=/marketplace  className=border border-white/20 text-white hover:bg-white/10: px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm ></Link></div>
            </div></div>
          </div></div>
        </div></div>
      </div></div>
    </div>
  </div>
  </div> </div>
  </div>,;
),;
};";}
export default $1;`</div>