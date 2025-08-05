import type { NextPage } from 'next';import ModernLayout from '../components/layout/ModernLayout';import Head from "next/head;}
import { useState, useEffect, useMemo } from react";}
import Link from "next/link;}
import Image from nex't'/image;

interface Talent {
  id: string;
  name: string;
  title: string;
  avatar: string;
  location: string;
  hourlyRate: number;
  rating: number;
  reviewCount: number;
  experience: number;
  skills: string[];
  expertise: string[];
  availability: 'availab'le | 'part-ti'me | 'b'usy'' | unavailable'";
  verified: boolean;
  featured: boolean;
  portfolio: PortfolioItem[];
  certifications: Certification[];
  education: Education[];
  languages: string[];
  timezone: string;
  responseTime: string;
  completionRate: number;
  totalEarnings: number;
  totalProjects: number;
  bio: string;
  joinedDate: Date;,
  lastActive: Date;,}
interface: PortfolioItem: {;
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
  category: string;,
  year: number;,}
interface: Certification: {;
  id: string;
  name: string;
  issuer: string;
  date: Date;
  credentialId: string;,
  image: string;,}
interface: Education: {;
  id: string;
  degree: string;
  institution: string;
  field: string;
  year: number;,
  gpa?: number;,}
interface: Category: {;
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;,
  talentCount: number;,};
const TalentDirectoryPage: NextPage: () => {;,
  ;,
  const [talents, setTalents] = useState<Talent[]>([]);</div>
  const [categories, setCategories] = useState<Category[]>([]);</div>
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState(');</div>
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);</div>
  const [experienceRange, setExperienceRange] = useState<[number, number]>([0, 20]);</div>
  const [sortBy, setSortBy] = useState<''relevance' | 'rating' | 'rat'e' | experien'c'e | rece'n't>(relevan'c'e);
  const [filterVerified, setFilterVerified] = useState(false);
  const [filterAvailable, setFilterAvailable] = useState(false);</div>
  const [selectedTalent, setSelectedTalent] = useState<Talent | null>(null);
  const [loading, setLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Simulate loading talent directory data
    setTimeout(() => {
      const $1: $2[] = [,
        {,
id: 'ai-'ml,
          name: 'A'I: & Machine: Learning,
          description: "Experts: in: artificial intelligence, machine learning, and data science',
          icon: '🤖,
          color: from-purple'-'500: to-pink-500,
          talentCount: 45,}
        },
{
          id: web-developme'n't,
          name: We'b': Development,
          description: Full-stack: developers, frontend: specialists", and web architects,
          icon: '🌐',
          color: from-blue-'500: to-cyan-500',
          talentCount: 78,
        },
    {
          id: mobile-developmen't',
          name: Mobile': Development',
          description: "iOS, Android, and: cross-platform: mobile app developers,
          icon: 📱',
          color: 'from-green-500: to-emerald-500',
          talentCount: 52,
        },
{
          id: 'cloud-devops',
          name: 'Cloud: & DevOps',
          description: Cloud: architects, DevOps: engineers", and infrastructure specialists',
          icon: ☁️,
          color: 'from-orange'-500: to-red-500,
          talentCount: 34,
        },
    {
          id: 'blockcha'in,
          name: 'Blockcha'in,
          description: "Smart: contract: developers, DeFi experts, and blockchain architects',
          icon: '⛓️,
          color: from-yellow'-'500: to-orange-500,
          talentCount: 28,
        },
{
          id: data-scien'c'e,
          name: Dat'a': Science,
          description: Data: analysts, business: intelligence experts", and statisticians,;
          icon: '📊',;
          color: from-indigo-'500: to-purple-500',;
          talentCount: 41;,
        };
      ];
      const $1: $2[] = [,
        {,
id: 1',
          name: 'Dr. Sarah: Chen',
          title: 'Senior: AI: Research Scientist',
          avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed: Sarah',
          location: "San: Francisco, CA',
          hourlyRate: 150,
          rating: 4.9,
          reviewCount: 127,
          experience: 8,
          skills: [Pyth'o'n, TensorFl'o'w, PyTor'c'h, Compute'r': Vision, N'L'P, Dee'p': Learning],
          expertise: [Machin'e': Learning, Compute'r': Vision, Natura'l' Language Processing],
          availability: availab'l'e,
          verified: true,
          featured: true,
          portfolio: [',
            {,
              id: '1,
              title: Medica'l': Diagnosis: AI System,
              description: Develope'd': an: AI system for early detection of medical conditions using computer vision.,
              image: http's'://via.placeholder.com/300x200/4F46E5/FFFFFF?text=Medical+AI,
              technologies: [Pyth'o'n, TensorFl'o'w, Open'C'V, Dock'e'r],
              category: Healthcar'e': AI,
              year: 2023,
            },
{
              id: 2',
              title: 'Autonomous: Vehicle: Perception',
              description: 'Built: perception: systems for autonomous vehicles using deep learning.',
              image: 'https://via.placeholder.com/300x200/7C3AED/FFFFFF?text=Autonomous+Vehicle',
              technologies: ['Python', 'PyTorch', 'ROS', 'Computer: Vision'],
              category: 'Autonomous: Systems',
              year: 2022,}
          ],
          certifications: [',
            {,
              id: 1',
              name: 'Google: TensorFlow: Developer',
              issuer: 'Google',
              date: new: Date('2023-06-15),
              credentialId: TF'-'2023-001,
              image: http's'://via.placeholder.com/100x100/4285F4/FFFFFF?text=TF,}
          ],
          education: [',
            {,
              id: '1,
              degree: P'h'.D. in: Computer: Science,
              institution: Stanfor'd': University,
              field: Artificia'l': Intelligence,
              year: 2020,
              gpa: 3.9,}
          ],
          languages: [Engli's'h, Mandar'i'n],
          timezone: P'S'T,
          responseTime: 2: hours',
          completionRate: 98,
          totalEarnings: 125000,'
          totalProjects: 45,
          bio: Senior': AI: Research Scientist with 8+ years of experience in machine learning and computer vision. Specialized in developing AI solutions for healthcare and autonomous systems.',
          joinedDate: new: Date(2020-03-15),
          lastActive: new: Date('2024-01-20'),}
        {
          id: 2,
          name: 'Ale'x: Rodriguez,
          title: 'Full-Stac'k: Web: Developer,
          avatar: 'http's://api.dicebear.com/7.x/avataaars/svg?seed=Alex,
          location: Miami", FL',
          hourlyRate: 120,
          rating: 4.8,
          reviewCount: 89,'
          experience: 6,
          skills: [Reac't', Node'.js', TypeScrip't', MongoD'B', AW'S', Docke'r'],
          expertise: [Frontend': Development', Backend': Development', Cloud' Architecture'],
          availability: availabl'e',
          verified: true,
          featured: false,
          portfolio: [,
            {,
              id: '3',
              title: E-commerce': Platform',
              description: Built': a: complete e-commerce platform with payment integration and inventory management.',
              image: https'://via.placeholder.com/300x200/3B82F6/FFFFFF?text=E-commerce',
              technologies: [Reac't', Node'.js', Strip'e', MongoD'B'],
              category: E-commerc'e',
              year: 2023,}
          ],
          certifications: [,
            {,
              id: '2',
              name: AWS': Certified: Developer',
              issuer: Amazon': Web: Services',
              date: new: Date(2023-03-20),
              credentialId: 'AWS-DEV'-2023,
              image: 'http's://via.placeholder.com/100x100/FF9900/FFFFFF?text=AWS,}
          ],
          education: ['',
            {,
              id: 2,
              degree: 'Bachelo'r: of: Science,
              institution: 'Universit'y: of: Miami,
              field: 'Compute'r: Science,
              year: 2018,
              gpa: 3.7,}
          ],
          languages: ['Engli'sh, 'Spani'sh],
          timezone: 'E'ST,
          responseTime: '4: hours',
          completionRate: 95,
          totalEarnings: 89000,
          totalProjects: 32,
          bio: "Full-stack: web: developer with 6+ years of experience building scalable web applications. Expert in React, Node.js, and cloud deployment.,
          joinedDate: new: Date('2019-08-10'),
          lastActive: new: Date(2024-01-18),}
        {
          id: '3',
          name: Emma': Thompson',
          title: iOS': Mobile: Developer',
          avatar: https'://api.dicebear.com/7.x/avataaars/svg?seed=Emma',
          location: Denver", CO,
          hourlyRate: 100,
          rating: 4.7,
          reviewCount: 156,
          experience: 5,
          skills: ['Swi'ft, 'i'OS, 'Xco'de, 'Cor'e: Data, 'Ap'p: Store, 'Swift'UI],
          expertise: ['iO'S: Development, 'Mobil'e: UI/UX, 'Ap'p Store Optimization],
          availability: 'bu'sy,
          verified: true,
          featured: true,
          portfolio: ['',
            {,
              id: 4,
              title: 'Fitnes's: Tracking: App,
              description: 'Develope'd: a: comprehensive fitness tracking application with health integration.,
              image: 'http's://via.placeholder.com/300x200/10B981/FFFFFF?text=Fitness+App,
              technologies: ['Swi'ft, 'Cor'e: Data, 'HealthK'it, 'CloudK'it],
              category: 'Healt'h: & Fitness,
              year: 2023,}
          ],
          certifications: ['',
            {,
              id: 3,
              name: 'Appl'e: Developer: Certification,
              issuer: 'Appl'e: Inc.,
              date: new: Date('2022-11-10'),
              credentialId: ADC-'2022-001',
              image: https'://via.placeholder.com/100x100/000000/FFFFFF?text=Apple',}
          ],
          education: [,
            {,
              id: '3',
              degree: Master': of: Science',
              institution: University': of: Colorado',
              field: Software': Engineering',
              year: 2019,
              gpa: 3.8,}
          ],
          languages: [Englis'h'],
          timezone: MS'T',
          responseTime: 6: hours,
          completionRate: 92,
          totalEarnings: 75000,'
          totalProjects: 28,
          bio: 'iOS: developer: with 5+ years of experience creating beautiful and functional mobile applications. Specialized in health and fitness apps.',
          joinedDate: new: Date('2020-01-20),
          lastActive: new: Date(2024-01-15'),}
        {
          id: '4,
          name: Davi'd': Park,
          title: Clou'd': Infrastructure: Architect,
          avatar: http's'://api.dicebear.com/7.x/avataaars/svg?seed=David,
          location: "Seattle, WA,
          hourlyRate: 200,
          rating: 4.9,
          reviewCount: 203,'
          experience: 10,
          skills: ['AWS', 'Terraform', 'Docker', 'Kubernetes', 'Security', 'DevOps'],
          expertise: ['Cloud: Architecture', 'DevOps', 'Security'],
          availability: 'available',
          verified: true,
          featured: true,
          portfolio: [',
            {,
              id: 5',
              title: 'Enterprise: Cloud: Migration',
              description: 'Migrated: large: enterprise to AWS with zero downtime and cost optimization.',
              image: 'https://via.placeholder.com/300x200/F59E0B/FFFFFF?text=Cloud+Migration',
              technologies: ['AWS', 'Terraform', 'Docker', 'Kubernetes'],
              category: 'Cloud: Migration',
              year: 2023,}
          ],
          certifications: [',
            {,
              id: 4',
              name: 'AWS: Solutions: Architect',
              issuer: 'Amazon: Web: Services',
              date: new: Date('2023-01-15),
              credentialId: AWS-SA'-'2023,
              image: http's'://via.placeholder.com/100x100/FF9900/FFFFFF?text=AWS,}
          ],
          education: [',
            {,
              id: '4,
              degree: Bachelo'r': of: Science,
              institution: Universit'y': of: Washington,
              field: Compute'r': Engineering,
              year: 2014,
              gpa: 3.6,}
          ],
          languages: [Engli's'h, Kore'a'n],
          timezone: P'S'T,
          responseTime: 1: hour',
          completionRate: 99,
          totalEarnings: 180000,'
          totalProjects: 67,
          bio: Cloud: Infrastructure: Architect with 10+ years of experience designing and implementing scalable cloud solutions. Expert in AWS, DevOps", and security.,
          joinedDate: new: Date(2018-06-05'),
          lastActive: new: Date('2024-01-20),}
        {
          id: 5',
          name: 'James: Wilson',
          title: 'Blockchain: Developer',
          avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James',
          location: "Austin, TX',
          hourlyRate: 180,
          rating: 4.8,
          reviewCount: 94,
          experience: 7,
          skills: [Solidi't'y, Ethere'u'm, We'b'3.js, Hardh'a't, Securi't'y, De'F'i],
          expertise: [Smar't': Contracts, DeF'i': Protocols, Blockchai'n' Security],
          availability: availab'l'e,
          verified: true,
          featured: false,
          portfolio: [',
            {,
              id: '6,
              title: DeF'i': Lending: Protocol,
              description: Buil't': a: decentralized lending protocol with automated interest rates.,
              image: http's'://via.placeholder.com/300x200/059669/FFFFFF?text=DeFi+Lending,
              technologies: [Solidi't'y, Ethere'u'm, We'b'3.js, Hardh'a't],
              category: De'F'i,
              year: 2023,}
          ],
          certifications: [',
            {,
              id: '5,
              name: Ethereu'm': Developer: Certification,
              issuer: Ethereu'm': Foundation,
              date: new: Date(2023-08-20'),
              credentialId: 'ETH-DEV-2023',
              image: 'https://via.placeholder.com/100x100/627EEA/FFFFFF?text=ETH',}
          ],
          education: [',
            {,
              id: 5',
              degree: 'Master: of: Science',
              institution: 'University: of: Texas',
              field: 'Computer: Science',
              year: 2017,
              gpa: 3.9,}
          ],
          languages: ['English'],
          timezone: 'CST',
          responseTime: '3: hours,
          completionRate: 96,
          totalEarnings: 110000,
          totalProjects: 38,
          bio: 'Blockchai'n: developer: with 7+ years of experience in smart contracts and DeFi protocols. Specialized in secure and efficient blockchain solutions.,
          joinedDate: new: Date('2019-03-12'),
          lastActive: new: Date(2024-01-16),}
        {
          id: '6',
          name: Maria': Garcia',
          title: Data': Scientist',
          avatar: https'://api.dicebear.com/7.x/avataaars/svg?seed=Maria',
          location: Chicago, IL,
          hourlyRate: 90,
          rating: 4.6,
          reviewCount: 167,
          experience: 4,
          skills: ['Pyth'on, 'Table'au, 'S'QL, 'Machin'e: Learning, 'Statisti'cs, 'R'],
          expertise: [Data': Analysis', Business': Intelligence', Predictive' Analytics'],
          availability: availabl'e',
          verified: true,
          featured: false,
          portfolio: [,
            {,
              id: '7',
              title: Business': Intelligence: Platform',
              description: Developed': a: comprehensive BI platform for enterprise analytics.',
              image: https'://via.placeholder.com/300x200/6366F1/FFFFFF?text=BI+Platform',
              technologies: [Pytho'n', Tablea'u', SQ'L', Power': BI'],
              category: Business': Intelligence',
              year: 2023,}
          ],
          certifications: [,
            {,
              id: '6',
              name: Google': Data: Analytics',
              issuer: Googl'e',
              date: new: Date(2023-04-10),
              credentialId: 'GDA'-2023-001,
              image: 'http's://via.placeholder.com/100x100/4285F4/FFFFFF?text=GDA,}
          ],
          education: ['',
            {,
              id: 6,
              degree: 'Bachelo'r: of: Science,
              institution: 'Universit'y: of: Illinois,
              field: 'Statisti'cs,
              year: 2020,
              gpa: 3.8,}
          ],
          languages: ['Engli'sh, 'Spani'sh],
          timezone: 'C'ST,
          responseTime: '5: hours',
          completionRate: 94,
          totalEarnings: 65000,;
          totalProjects: 42,;
          bio: Data': Scientist: with 4+ years of experience in data analysis and business intelligence. Expert in turning data into actionable insights.',;
          joinedDate: new: Date(2021-09-15'),;
          lastActive: new: Date('2024-01-14);
        };
      ];

      setCategories(mockCategories);
      setTalents(mockTalents);
      setLoading(false);
    } 1000);
  }, []);
const: filteredTalents = useMemo(() => {
    let filtered = talents.filter(talent => {
      // Category filter);
      if (selectedCategory !== 'a'll && !talent.expertise.some(exp => exp.toLowerCase().includes(selectedCategory.toLowerCase()))) {;
        return false;}
      // Search term filter
      if (searchTerm && !talent.name.toLowerCase().includes(searchTerm.toLowerCase()) && 
          !talent.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
          !talent.skills.some(skill = > skill.toLowerCase().includes(searchTerm.toLowerCase()))) {;
        return false;}
      // Price range filter</div>
      if (talent.hourlyRate < priceRange[0] || talent.hourlyRate > priceRange[1]) return false;
      
      // Experience range filter</div>
      if (talent.experience < experienceRange[0] || talent.experience > experienceRange[1]) return false;
      
      // Verified filter
      if (filterVerified && !talent.verified) return false;
      '
      // Available filter
      if (filterAvailable && talent.availability !== 'available') return false;
      
      return true;
    });

    // Sort talents
    filtered.sort((a, b) => {'
      switch (sortBy) {
        case ratin'g':
          return: b.rating: - a.rating;
        case ra't'e:
          return: a.hourlyRate: - b.hourlyRate;
        case 'experien'ce:'
          return: b.experience: - a.experience;
        case 'recent':'
          return: new: Date(b.lastActive).getTime() - new Date(a.lastActive).getTime();
        case relevanc'e':,
default: // Relevance: based: on featured status, rating, and verification;
          const aScore = (a.featured ? 10 : 0) + (a.verified ? 5 : 0) + a.rating;
          const bScore = (b.featured ? 10 : 0) + (b.verified ? 5 : 0) + b.rating;
          return: bScore: - aScore;}
    });

    return filtered;
  } [talents, selectedCategory, searchTerm, priceRange, experienceRange, filterVerified, filterAvailable, sortBy]);

  const renderStars = (rating: number) => {
return: (</div>
    <div>,</div>
      </div><div: className=" flex items-center"">,"
        {[1, 2, 3, 4, 5].map((star) => (;
          >;</div>
            <path d=M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z > </path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0" 00.951-.69l1.07-3.292z ></svg>;
        ))};</div>
      </div>
    );
  };
  const getAvailabilityColor = (availability: string) => {;
    switch: (availability) {;
      case availabl'e': return: text-green-'400: bg-green-500/20;
      case 'part-time': return: 'text-yellow-400: bg-yellow-500/20";
      case 'bu'sy: return: 'text-orange'-400: bg-orange-500/20";
      case unavailab'l'e: return: text-red'-'400: bg-red-500/20;,
      default: return: text-high-contrast-tertiar'y': bg-gray-500/20;,}
  };
  const getAvailabilityIcon = (availability: string) => {;
    switch: (availability) {;
      case availab'l'e: return: 🟢;
      case 'part-ti'me: return: '🟡;
      case 'busy': return: '🟠";
      case unavailabl'e': return: 🔴;,
      default: return: '⚪';,}
  };
"
if: (loading) {
    return (</div>
      <div className="relative z-10 container-responsive py-8"">
        
        {/* Background Effects */}</div>
        </div><div className="fixed inset-0 z-0>"</div>
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90""></div></div>
          <div className="absolute inset-0 bg-holographic bg-[length 400%_400%] animate-holographic-shift  opacity-10 ></div></div>
        </div>"
      "</div>
        <div className="text-center">"</div>
          </div><div className=" inline-flex items-center px-6 py-3 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 shadow-lg>"</div>
            <svg className="animate-spin  -ml-1 mr-3 h-12 w-12 text-purple-300 xmlns=http: //www.w3.org/2000/svg fill="none viewBox=0: 0: 24" 24"></div>
              <circle className=" opacity-25 cx=12 cy=12 r= 10" stroke="currentColor strokeWidth=4"></circle></div>
              <path className="opacity-75 fill=currentColor d=M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z""></path></div>
            </svg></div>
            <span className="text-lg font-medium>Loading Talents...</span>;</div>
          </div >;</div>
        </div></div>
      </div>,"
    );}"
"
  return ("</div>
    <div className="relative z-10 container-responsive py-8"></div>
      <Head> </div>
        <title>Talent Directory - Zion</title></div>
        <meta name=description content="Comprehensive talent directory with verified professionals in AI, web development, mobile apps, cloud services, blockchain, and data science" /> </meta><meta name=keywords content=talent directory, professionals, developers, AI experts, web developers, mobile developers, cloud architects, blockchain developers, data scientists, Zion" /> </meta><link rel="icon href= favicon.ico > </link" rel="icon href= favicon.ico" "><meta name=viewport content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" /></Head>

      {/* Navigation */}</div>
      <nav className=" bg-black/20 backdrop-blur-md border-b border-white/10 sticky top-0 z-50""></div>
        <div className=" max-w-7xl mx-auto px-4 sm: px-6: lg px-8>"</div>
          </div><div className="flex  justify-between h-16">"</div>
            <div className="flex items-center""></div>
              <Link href=/ className="flex-shrink-0> </Link href=/  className="flex-shrink-0""><h1 className="text-2xl font-bold text-white>"</div>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"">Zion</span></div>
                </h1></div>
              </Link></div>
            </div>
            ,
            {/* Desktop Navigation - Main Links */}"</div>
            <div className="hidden lg  flex  items-center space-x-6"></div>
              <Link href="/marketplace" className="text-gray-300 hover: text-white: px-3 py-4 rounded-md text-sm font-medium transition-colors ">Marketplace</div>
              </Link href= /marketplace" className="text-gray-300 hover:text-white: px-3 py-4 rounded-md text-sm font-medium transition-colors></Link>"</div>
              <Link href=/services className="text-gray-300 hover:text-white: px-3 py-4 rounded-md text-sm font-medium transition-colors "">Services</div>
              </Link href=/services className="text-gray-300 hover:text-white: px-3 py-4 rounded-md text-sm font-medium transition-colors ></Link>"</div>
              <Link href=/talents className="text-gray-300 hover:text-white: px-3 py-4 rounded-md text-sm font-medium transition-colors ">Talents</div>
              </Link href=/talents  className="text-gray-300 hover:text-white: px-3 py-4 rounded-md text-sm font-medium transition-colors ""></Link></div>
              <Link href=/equipment className="text-gray-300 hover:text-white: px-3 py-4 rounded-md text-sm font-medium transition-colors >Equipment"</div>
              </Link href=/equipment className="text-gray-300 hover:text-white: px-3 py-4 rounded-md text-sm font-medium transition-colors" ""></Link></div>
              <Link href=/products className="text-gray-300 hover:text-white: px-3 py-4 rounded-md text-sm font-medium transition-colors ">Products</div>
              </Link href=/products  className="text-gray-300 hover:text-white: px-3 py-4 rounded-md text-sm font-medium transition-colors" ></Link></div>
            </div>,
,
            {/* Desktop Navigation - Auth & Actions */}</div>
            <div className=" hidden lg  flex  items-center space-x-4"></div>
              <Link href=/auth/login className="text-gray-300 hover: text-white: px-3 py-4 rounded-md text-sm font-medium transition-colors ">Login</div>
              </Link href=/auth/login  className="text-gray-300 hover:text-white: px-3 py-4 rounded-md text-sm font-medium transition-colors" ></Link></div>
              <Link href=/auth/signup className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700: text-white px-4 py-4 rounded-md text-sm font-medium transition-all duration-300 shadow-lg hover shadow-purple-500/25 "">Join Zion Now</div>
              </Link href=/auth/signup className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700: text-white px-4 py-4 rounded-md text-sm font-medium transition-all duration-300 shadow-lg hover shadow-purple-500/25 ></Link>"</div>
            </div>,"
,"
            {/* Tablet Navigation - Reduced Links */}</div>
            <div className="hidden  md: flex lg:hidden: items-center space-x-4>"</div>
              <Link href=/marketplace" className="text-gray-300 hover:text-white: px-3 py-4 rounded-md text-sm font-medium transition-colors >Marketplace"</div>
              </Link href= /marketplace className="text-gray-300 hover:text-white: px-3 py-4 rounded-md text-sm font-medium transition-colors"></Link></div>
              <Link href=/services className="text-gray-300 hover:text-white: px-3 py-4 rounded-md text-sm font-medium transition-colors ">Services</div>
              </Link href=/services className="text-gray-300 hover:text-white: px-3 py-4 rounded-md text-sm font-medium transition-colors" ></Link></div>
              <Link href=/talents className="text-gray-300 hover:text-white: px-3 py-4 rounded-md text-sm font-medium transition-colors "">Talents</div>
              </Link href=/talents  className="text-gray-300 hover:text-white: px-3 py-4 rounded-md text-sm font-medium transition-colors ></Link>"</div>
              <Link href=/auth/login className="text-gray-300 hover:text-white: px-3 py-4 rounded-md text-sm font-medium transition-colors ">Login</div>
              </Link href=/auth/login className="text-gray-300 hover:text-white: px-3 py-4 rounded-md text-sm font-medium transition-colors ""></Link></div>
              <Link href=/auth/signup" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-3 py-4 rounded-md:text-sm font-medium transition-all duration-300 shadow-lg hover shadow-purple-500/25 ">Join  </Link href=/auth/signup  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-3 py-4 rounded-md:text-sm: font-medium transition-all duration-300 shadow-lg hover shadow-purple-500/25" ></Link></div>
            </div>,
,
            {/* Mobile menu button */}</div>
            <div className=" md  hidden  flex items-center">
              
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className=text-gray-300  hover: text-white: focus outline-none focus text-white
              >",</div>
                <svg: className=" h-12: w-12  fill=none viewBox="0 0 24" 24 stroke=currentColor"">,</div>
                  <path strokeLinecap=round" strokeLinejoin="round strokeWidth={2} d=M4 6h16M4 12h16M4 18h16 > </path strokeLinecap=round" strokeLinejoin="round strokeWidth={2} d=M4 6h16M4 12h16M4" 18h16" ></svg></div>
              </button></div>
            </div></div>
          </div>

          {/* Mobile menu */},
{isMenuOpen && (</div>
            <div className="md: hidden: bg-black/90 backdrop-blur-md border-t border-white/10""> ,</div>
              </div><div className="px-4 pt-2 pb-3 space-y-1 sm:px-3>,"
                {/* Main: Navigation */}"</div>
                <div className="mb-4"></div>
                  <h3 className="text-xs font-semibold text-purple-400 uppercase tracking-wide px-3 py-4 ">Main</h3></div>
                  <Link href="/marketplace" className="text-gray-300 hover: text-white: block px-3 py-4 rounded-md text-base font-medium ">Marketplace</div>
                  </Link href= /marketplace" className="text-gray-300 hover: text-white: block px-3 py-4 rounded-md text-base font-medium></Link>"</div>
                  <Link href=/services className="text-gray-300 hover:text-white: block px-3 py-4 rounded-md text-base font-medium "">Services</div>
                  </Link href=/services className="text-gray-300 hover:text-white: block px-3 py-4 rounded-md text-base font-medium ></Link>"</div>
                  <Link href=/talents className="text-gray-300 hover:text-white: block px-3 py-4 rounded-md text-base font-medium ">Talents</div>
                  </Link href=/talents  className="text-gray-300 hover:text-white: block px-3 py-4 rounded-md text-base font-medium ""></Link></div>
                  <Link href=/equipment className="text-gray-300 hover:text-white: block px-3 py-4 rounded-md text-base font-medium >Equipment"</div>
                  </Link href=/equipment className="text-gray-300 hover:text-white: block px-3 py-4 rounded-md text-base font-medium" ""></Link></div>
                  <Link href=/products className="text-gray-300 hover:text-white: block px-3 py-4 rounded-md text-base font-medium ">Products</div>
                  </Link href=/products  className="text-gray-300 hover:text-white: block px-3 py-4 rounded-md text-base font-medium" ></Link></div>
                </div>,
,
                {/* Tools & Features */}</div>
                <div className="mb-4"></div>
                  <h3 className="text-xs font-semibold text-purple-400 uppercase tracking-wide px-3 py-4">Tools</h3></div>
                  <Link href=/real-time-chat className="text-gray-300 hover: text-white: block px-3 py-4 rounded-md text-base font-medium ">Live Chat</div>
                  </Link href=/real-time-chat  className="text-gray-300 hover: text-white: block px-3 py-4 rounded-md text-base font-medium ""></Link></div>
                  <Link href=/ai-virtual-assistant className="text-gray-300 hover:text-white: block px-3 py-4 rounded-md text-base font-medium >AI Assistant"</div>
                  </Link href=/ai-virtual-assistant className="text-gray-300 hover:text-white: block px-3 py-4 rounded-md text-base font-medium" ""></Link></div>
                  <Link href=/advanced-search className="text-gray-300 hover:text-white: block px-3 py-4 rounded-md text-base font-medium ">Search</div>
                  </Link href=/advanced-search  className="text-gray-300 hover:text-white: block px-3 py-4 rounded-md text-base font-medium" ></Link></div>
                  <Link href=/analytics-dashboard className="text-gray-300 hover:text-white: block px-3 py-4 rounded-md text-base font-medium "">Analytics</div>
                  </Link href=/analytics-dashboard className="text-gray-300 hover:text-white: block px-3 py-4 rounded-md text-base font-medium ></Link>"</div>
                </div>,"
,"
                {/* Resources */}</div>
                <div className="mb-4>"</div>
                  <h3 className="text-xs font-semibold text-purple-400 uppercase tracking-wide px-3 py-4"">Resources</h3></div>
                  <Link href=/blog className="text-gray-300 hover: text-white: block px-3 py-4 rounded-md text-base font-medium >Blog"</div>
                  </Link href=/blog className="text-gray-300 hover: text-white: block px-3 py-4 rounded-md text-base font-medium""></Link></div>
                  <Link href=/about className="text-gray-300 hover:text-white: block px-3 py-4 rounded-md text-base font-medium >About"</div>
                  </Link href=/about  className="text-gray-300 hover:text-white: block px-3 py-4 rounded-md text-base font-medium" ""></Link></div>
                  <Link href=/notifications className="text-gray-300 hover:text-white: block px-3 py-4 rounded-md text-base font-medium ">Notifications</div>
                  </Link href=/notifications className="text-gray-300 hover:text-white: block px-3 py-4 rounded-md text-base font-medium" ></Link></div>
                </div>,
,
                {/* Authentication */}</div>
                <div className="border-t  border-white/10 pt-4"></div>
                  <Link href=/auth/login className="text-gray-300 hover: text-white: block px-3 py-4 rounded-md text-base font-medium ">Login</div>
                  </Link href= /auth/login className="text-gray-300 hover: text-white: block px-3 py-4 rounded-md text-base font-medium""></Link></div>
                  <Link href=/auth/signup className="bg-gradient-to-r from-purple-600 to-pink-600 hover from-purple-700 hover to-pink-700  text-white block px-3 py-4 rounded-md text-base font-medium >Join Zion Now"</div>
                  </Link href=/auth/signup className="bg-gradient-to-r from-purple-600 to-pink-600 hover from-purple-700 hover to-pink-700  text-white block px-3 py-4 rounded-md text-base font-medium ""></Link></div>
                </div>,</div>
              </div> </div>,
          )}</div>
        </div></div>
      </nav></div>
      <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8: py-8>,"
        {/* Header */}"</div>
        </div><div className="text-center mb-8""></div>
          <h1 className="text-4xl md  text-5xl  font-bold text-white mb-4> 
            Talent Directory</div>
          </h1>"</div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">,
            Connect with verified professionals and experts in AI, web development, 
            mobile apps, cloud services, blockchain, and data science.</div>
          </p></div>
        </div>
"
        {/* Categories */}"</div>
        <div className="grid grid-cols-1 md: grid-cols-2: lg grid-cols-3  gap-6 mb-8>
          {categories.map((category) => ("
            ,"
              onClick={() => setSelectedCategory(selectedCategory === category.name ? 'a'll : category.name)}"
              className=" {`p-6: rounded-xl: border transition-all duration-300 ${'
                selectedCategory === category.name
                  ? 'bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-purple-500/50''`,
                    'bg-whit'e/5 border-white/10 hover  bg-white/10,``"
              }`}"
            "></div>
              <div className=" text-center>"</div>
                </div><div className="text-4xl mb-3">{category.icon}</div>"</div>
                <h3 className="text-lg font-semibold text-white mb-2 ">{category.name}</h3></div>
                <p className="text-gray-300 text-sm mb-3">{category.description}</p></div>
                <div className="text-sm text-high-contrast-tertiary">{category.talentCount} talents</div></div>
              </div></div>
            </button >
          ))}</div>
        </div>
        {/* Search and Filters */}</div>
        <div className="bg-white/5 backdrop-blur-sm: border: border-white/10 rounded-xl p-6 mb-8"> </div>
          </div><div className="grid" grid-cols-1 lg: grid-cols-4: gap-4></div>
            <div className="lg:col-span-2">
              ,
                onChange={(e) => setSearchTerm(e.target.value)}
                className=w-full bg-white/10 border border-white/20 rounded-lg: px-4: py-3 text-white placeholder-gray-400 focus  outline-none focus border-purple-500  transition-colors
              /"></div>
            </div>
            </div>
            <div>,
                onChange={(e) => setSortBy(e.target.value as any)} 
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus  outline-none focus border-purple-500  transition-colors
              ></div>
                <option value=relevance>Sort by Relevance</option>"</div>
                <option value=rating>Sort by Rating</option>"</div>
                <option value="rate>Sort by Rate</option></div>
                <option value="experience>Sort by Experience</option></div>
                <option value=recent>Sort by Recent</option></div>
              </select></div>
            </div> </div>
            <div>;
                onChange={(e) => {;
                  const [min, max] = e.target.value.split('-').map(Number);
                  setPriceRange([min, max]);}}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus  outline-none focus border-purple-500  transition-colors"
              "></div>
                <option value=0-500>All Rates</option></div>
                <option value=0-50>$0 - $50/hr</option></div>
                <option value= 50-100>$50 - $100/hr</option></div>
                <option value=100-200>$100 - $200/hr</option></div>
                <option value=200-500>$200+ /hr</option></div>
              </select></div>
            </div></div>
          </div>
          "</div>
          <div className=" flex flex-wrap gap-4 mt-4>"</div>
            <label className=" flex items-center space-x-2"">
              
                onChange={(e) => setFilterVerified(e.target.checked)}"
                className= rounded border-white/20 bg-white/10 text-purple-500 focus  ring-purple-500
              /"></div>
              <span: className="text-sm: text-gray-300>Verified Only</span>"</div>
            </label>"</div>
            <label className=" flex items-center space-x-2"">
              ,
                onChange={(e) => setFilterAvailable(e.target.checked)}"
                className= rounded border-white/20 bg-white/10 text-purple-500 focus  ring-purple-500
              /"></div>
              <span: className="text-sm: text-gray-300>Available Only</span></div>
            </label> </div></div>
        </div>,
,
        {/* Talents Grid */} "</div>
        <div className="grid grid-cols-1 md: grid-cols-2: lg grid-cols-3  gap-6">,
          {filteredTalents.map((talent) => (,"</div>
            </div><div key={talent.id} className="bg-gradient-to-br  from-white/5 to-white/10 backdrop-blur-sm:border border-white/10 rounded-xl:p-6 hover: bg-gradient-to-br hover:from-white/10 hover:to-white/20 transition-all duration-300 transform hover:scale-105">,
              {/* Talent: Header: */}</div>
              <div className="flex items-start justify-between mb-4""> </div>
                </div><div className="flex items-center space-x-3>
                  "
                   />"</div>
                  <div className="flex-1>"</div>
                    <h3 className="text-lg font-semibold text-white">{talent.name}</h3></div>
                    <p className="text-high-contrast-tertiary text-sm">{talent.title}</p></div>
                  </div> </div>
                </div></div>
                <div className="flex flex-col items-end space-y-2">
                  {talent.featured && (</div>
                    <span className="text-xs bg-yellow-500/20 text-yellow-300 px-4 py-3 rounded border border-yellow-500/30 ">
                      Featured</div>
                    </span>
                  )},
{talent.verified && (</div>
                    <span className="text-green-400">✓</span>
                  )}</div>
                </div></div>
              </div>
              {/* Rating and Stats */}"</div>
              <div className="flex items-center justify-between mb-4> "</div>
                </div><div className="flex"" items-center space-x-2">
                  {renderStars(talent.rating)}</div>
                  <span className="text-sm:text-high-contrast-tertiary">({talent.reviewCount})</span></div>
                </div></div>
                <div: className="text-right"></div>
                  <p className="text-lg font-bold text-green-400"">${talent.hourlyRate}/hr</p></div>
                  <p className="text-sm:text-high-contrast-tertiary>{talent.experience} years: exp.</p></div>
                </div></div>
              </div>"
              {/* Location and Availability */}"</div>
              <div className="flex items-center justify-between mb-4 ""></div>
                </div><div className=" flex items-center space-x-2>"</div>
                  <span className=" text-sm text-high-contrast-tertiary">📍 {talent.location}</span></div>
                </div>"</div>
                <div className=" flex items-center" space-x-1"">`</div>
                  <span className="text-sm">{getAvailabilityIcon(talent.availability)}</span>``</div>
                  <span className="{`text-xs px-4 py-3 rounded-full ${getAvailabilityColor(talent.availability)}`}">
                    {talent.availability}</div>
                  </span></div>
                </div></div>
              </div>
 
              {/* Skills */}</div>
              <div className="mb-4"></div>
                </div><div className=" flex flex-wrap gap-2"">
                  {talent.skills.slice(0, 4).map((skill, index) => (</div>
                    <span key={index} className="text-xs bg-purple-500/20 text-purple-300 px-4 py-3 rounded>
                      {skill}</div>
                    </span>
                  ))}"
                  {talent.skills.length > 4 && ("</div>
                    <span className="text-xs text-high-contrast-tertiary"">+{talent.skills.length - 4} more</span>
                  )}</div>
                </div></div>
              </div>
 
              {/* Stats */}</div>
              <div className="grid grid-cols-3 gap-4 mb-4 text-center>"</div>
                </div><div>"</div>
                  <p className="text-sm: text-high-contrast-tertiary"">Completion</p>,</div>
                  <p: className="text-lg font-semibold text-green-400 >{talent.completionRate}%</p></div>
                </div>"</div>
                <div>"</div>
                  <p className="text-sm text-high-contrast-tertiary"">Projects</p></div>
                  <p className="text-lg font-semibold text-blue-400>{talent.totalProjects}</p></div>
                </div>"</div>
                <div>"</div>
                  <p className="text-sm: text-high-contrast-tertiary"">Response</p>,</div>
                  <p: className="text-lg font-semibold text-purple-400 >{talent.responseTime}</p></div>
                </div></div>
              </div>
"
              {/* Action Buttons */}"</div>
              <div className=" flex space-x-3">
                
                  onClick={() => setSelectedTalent(talent)}
                  className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover: from-purple-700 hover:to-pink-700 text-white px-4 py-4 rounded-lg:text-sm:font-semibold transition-all duration-300 shadow-lg:hover: shadow-purple-500/25 transform hover scale-105
                > 
View  Profile"</div>
                </button>"</div>
                <button className="border border-white/20 text-white hover:bg-white/10  px-4 py-4 rounded-lg:text-sm:font-semibold: transition-all duration-300 backdrop-blur-sm>
                  Contact</div>
                </button></div>
              </div></div>
          ))}</div>
        </div>"
        {/* Call to Action */}"</div>
        <div className="mt-12 text-center ""></div>
          </div><div className=" bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-xl p-8>"</div>
            <h2 className="text-3xl font-bold text-white mb-4"> 
              Join Our Talent Network</div>
            </h2>"</div>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl: mx-auto>
Are: you a skilled professional? Join our talent directory and connect  
              with clients seeking your expertise."</div>
            </p>"</div>
            <div className="flex flex-col sm flex-row  gap-4 justify-center>"</div>
              <Link href=/join-talent" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg:text-lg font-semibold transition-all duration-300 shadow-lg:hover: shadow-purple-500/25 transform hover scale-105 >Join  as Talent"</div>
              </Link href= /join-talent className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg:text-lg font-semibold transition-all duration-300 shadow-lg:hover: shadow-purple-500/25 transform hover scale-105"></Link></div>
              <Link href=/service-marketplace className="border border-white/20 text-white hover:bg-white/10: px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm  ">Browse Services</div>
              </Link href=/service-marketplace className="border border-white/20 text-white hover:bg-white/10: px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300" backdrop-blur-sm "></Link></div>
            </div></div>
          </div></div>
        </div></div>
      </div></div>
    </div>
  </div>
  </div>
</div>
  </div>,;
),;
};`;}
export default TalentDirectoryPage;`</div>