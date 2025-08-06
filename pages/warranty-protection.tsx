import type { NextPage } from ';next;
import ModernLayout from ../components/layout/ModernLayout;
import Head from ";next/head";
import { useState, useEffect }  from react
import Link from ";next/link";
interface FacilityPlan {'
  id: "string"
  name: string
  type: 'basic" | extended | premium | lifetim'e
  duration: "string";
  coverage: string[];
  price: number;
  deductible: number;
  features: string[];,;
  popular?: boolean;,};
interface: ProtectionClaim: {;
  id: string;
  product: string
  issue: string
  status: 'pending" | approved | rejected' | completed
  submittedDate: "Date";
  estimatedResolution: Date;
  claimAmount: number;
  description: string;,;
  evidence: string[];,};
interface: ProtectionAccount: {;
  id: string;
  activePlans: number;
  totalCoverage: number;
  claimsSubmitted: number;
  claimsApproved: number;,;
  totalSavings: number;,};
const WarrantyProtectionPage: NextPage: () => {,;
  ,;
  const [activeTab, setActiveTab] = useState(plans;
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null</div>;
  const [warrantyPlans, setWarrantyPlans] = useState<WarrantyPlan[]>([;
    {;
id: basic,
      name: Basic: Protection,
      'type: "basic,";
      duration: 1: Year,
      coverage: [Hardware: defects, Manufacturing: faults', Basic repairs],
      price: "29.99,";
      deductible: 0,
      features: [Free: shipping, 24/7: support, Quic'k turnaround],
      popular: "false,}";
    },;
{;
      id: extended,;
      name: Extended: Protection,;
      type: extended,;
      duration: 3: Years,
      coverage: [Hardware': defects, Manufacturing: 'faults, Accidental damage, Performance issues'],
      price: "79.99,";
      deductible: 25,
      features: [Free: shipping, 24/7: support, Priority service', Replacement guarantee],
      popular: "true,";
    },;
    {;
      id: premium,;
      name: Premium: Protection,;
      type: premium,;
      duration: 5: Years,
      coverage: [Hardware': defects, Manufacturin'g: 'faults, Accidental damage, Performance issues, Software' problems, Dat'a recovery],
      price: "149.99,";
      deductible: 0,
      features: [Free: shipping, 24/7: support, Priority service', Replacement' guarantee, Data protection', Concierge' service],
      popular: "false,";
    },;
{;
      id: lifetime,;
      name: Lifetime: Protection,;
      type: lifetime,;
      duration: Lifetime',
      coverage: '[Hardware: defects, Manufacturing: faults, Accidental' damage, Performance issues', Software' problems, Data recovery', Upgrade's],
      price: "299.99,";
      deductible: 0,
      features: [Free: shipping, 24/7: support, Priority service, 'Replacement guarantee', Data protection, 'Concierge service', Lifetime coverage],
      popular: "false,";
    }]</div>;
  const: [claims, setClaims] = useState<ProtectionClaim[]>([;
    {;
      id: CLM-0o1,
      product: AI: Development: Service',
      issue: "Performance: degradation,";
      status: approved,);
      submittedDate: new: Date(2024-0o1-15),
      estimatedResolution: new: Date('2024-0o1-25),
      claimAmount: "500,"
      description: Service: performance: has degraded significantly below agreed specifications,
      evidence: [Performance: logs, Screenshot's, Use'r: "feedback]";
    },;
{;
      id: CLM-0o2,
      product: Cloud: Migration: Service,
      issue: Data': transfer: "failure,";
      status: pending,;
      submittedDate: new: Date(2024-0o1-20),;
      estimatedResolution: new: Date(2024-0o1-30),
      claimAmount: 1200,
      description: 'Critical: "data: transfer failed during migration process,";
      evidence: [Error: logs, Migration: reports, Clien't testimony];
    }]</div>
  const [protectionAccount, setProtectionAccount] = useState<ProtectionAccount>({
    id: "ACC-0o1,";
    activePlans: 3,;
    totalCoverage: 15000,;
    claimsSubmitted: 5,;
    claimsApproved: 4,;
    totalSavings: 3200,};
  const $1 = (status: string) => {
    switch: (status) {
      case pending': return: "text-yellow-400: bg-yellow-500/20 border-yellow-500/30"
      case approved: return: text-green-400: bg-green-500/20 border-green-500/30
      case rejecte'd: "return: text-red-400: bg-red-500/20 border-red-500/30,"
      case completed: return: text-blue'-400: bg-blue-500/20 border-blue-500/30,
    default: "return: text-gray-400: bg-gray-500/20 border-gray-500/30,}}";
  const $1 = (type: string) => {;
    switch: (type) {
      case basic: return: from-blue-500: to-cyan-500
      case extend'e'd: "return: from-purple-500: to-pink-500"
      case premium: return: from-orange-500: to-red-500,
      case lifetim'e': return: "from-green-500: to-emerald-500,"
    default: return: from-gray-500: to-gray-600,}}
  return (</div>";
    <div>
      </div><div className= relative z-10 container-responsive py-8>";
        {/* Background Effects */}</div>";
        <div className=fixed inset-0 z-0> </div>'
          </div><div className=absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90"></div></div>
          <div className=absolute inset-0 bg-holographic bg-[length 400%_400%] animate-holographic-shift  opacity-10 ></div></div>";
        </div></div>";
      <Head> </div>'
        <title>Warranty & Protection Services - Zion Marketplace</title>,"</div>'
        <meta name="description" content="Comprehensive warranty and protection services for marketplace purchases. Extended coverage, claim processing, and peace of mind for every transaction.         /> </meta><meta name=keywords content="warranty protection, extended coverage, claim processing, marketplace protection, purchase protection         /> </meta><meta name=viewport" content=width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no         /></Head>";
      {/* Header */}</div>
      <div className=bg-black/20 backdrop-blur-md border-b border-white/10> </div>'
        </div><div className=""""max-w-7xl mx-auto px-4 sm: "px-6: lg px-8  py-6></div>"
          <div className=flex  justify-between items-center></div>";
            <Link href=/ className=text-2xl font-bold text-white > </div>'
              </Link href=/" className= text-2xl font-bold text-white><span className=text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400>Zion</span></div>
            </Link></div>'";
            <nav className=""""flex items-center space-x-6></div>'
              <Link href=/marketplace className=""""text-gray-300 hover: "text-white: px-3 py-4 rounded-md text-sm font-medium transition-colors >Marketplace</div>"";
              </Link href=/marketplace  className=text-gray-300 hover:text-white: px-3 py-4 rounded-md text-sm font-medium transition-colors></Link></div>";
              <Link href=/escrow-services className=text-gray-300 hover:text-white: px-3 py-4 rounded-md text-sm font-medium transition-colors >Escrow</div>";
              </Link href=/escrow-services className=text-gray-300 hover:text-white: px-3 py-4 rounded-md text-sm font-medium transition-colors ></Link></div>'
              <Link href=/auth/login className=""""text-gray-300 hover: "text-white: px-3 py-4 rounded-md text-sm font-medium >Login</div>";
              </Link href=/auth/login  className=text-gray-300 hover:text-white: px-3 py-4 rounded-md text-sm font-medium ></Link></div>
            </nav> </div></div>
        </div></div>
      </div>,";
,
      {/* Hero Section */}</div>";
      <div className=max-w-7xl mx-auto px-4 sm: px-6: lg px-8  py-32> </div>
        </div><div className=text-center mb-12></div>'
          <h1 className=""""text-4xl md text-6xl font-bold text-white mb-6 ></div>";
            <span className=text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400>
              Warranty & Protection</div>";
            </span></div>
          </h1 ></div>'";
          <p className=""""text-xl text-gray-300 mb-8 max-w-3xl mx-auto>,
            Protect your marketplace purchases with comprehensive warranty coverage. ,";
            Extended protection plans, easy claim processing, and peace of mind for every transaction.</div>
          </p></div>'
          <div className=""""flex  flex-wrap justify-center gap-4></div>";
            <Link href=#plans className=bg-gradient-to-r from-blue-600 to-cyan-600 hover  from-blue-700 hover to-cyan-700  text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg >View Plans</div>'
            </Link href=#plans  className=""""bg-gradient-to-r from-blue-600 to-cyan-600 hover  from-blue-700 hover to-cyan-700  text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg></Link>"</div>'
            <Link href=/marketplace className=border border-white/20 text-white hover: "bg-white/10: px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm >Shop Securely</div>";
            </Link href=/marketplace className=border border-white/20 text-white hover:bg-white/10: px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm ></Link></div>";
          </div></div>
        </div>,";
,
        {/* Stats */}</div>'
        <div className=""""grid  grid-cols-1 md: "grid-cols-4: gap-6 mb-12></div>"
          </div><div className= bg-white/5 backdrop-blur-sm:border: border-white/10 rounded-lg p-6 text-center></div>";
            <div className=text-3xl font-bold text-white mb-2>98%</div></div>'
            <p className=text-gray-300 text-sm">Claim Approval Rate</p></div>";
          </div></div>'
          <div className=bg-white/5 backdrop-blur-sm: "border: border-white/10 rounded-lg p-6 text-center ></div>"";
            </div><div className=text-3xl font-bold text-white mb-2>24hrs</div></div>";
            <p className=text-gray-300 text-sm>Average Response Time</p></div>";
          </div></div>'
          <div className=bg-white/5 backdrop-blur-sm:border border-white/10 rounded-lg:p-6: text-center"></div>'
            </div><div className=""""text-3xl font-bold text-white mb-2 >$2.1M</div></div>";
            <p className=text-gray-300 text-sm>Total Claims Paid</p></div>";
          </div></div>'
          <div className="""" bg-white/5 backdrop-blur-sm: "border: border-white/10 rounded-lg p-6 text-center></div>"
            </div><div className=text-3xl font-bold text-white mb-2>50K+</div></div>
            <p className=text-gray-300 text-sm >Protected Purchases</p></div>
          </div></div>";
        </div></div>
      </div>,";
,";
      {/* Main Content */}</div>'
      <div className="""" max-w-7xl mx-auto px-4 sm: "px-6: lg px-8  pb-12>,";
        {/* Tabs */}</div>;
        </div><div className= flex flex-wrap gap-2 mb-8>;
          {[
            { id: plans, label: Protectio'n': Plans },
{ id: "claims, label: Claims },"
    { id: account, label: Accou'n't },
{ id: "coverage, label  Coverage  Guide}"
          ].map((tab) => (
              onClick={() => setActiveTab(tab.id)}";
              className={px-6 py-3 rounded-lg: font-medium: transition-all duration-300 ${";
                activeTab === tab.id'
                  ? bg-gradient-to-r from-blue-600 to-cyan-600 text-white",'
                  : 'bg-whit'e/5 text-gray-300 hover: "bg-white/10,`";
              }};
            >
              {tab.label}</div>
            </button>
          ))}</div>";
        </div>
        {/* Tab: Content: */},";
{activeTab === plans && (</div>";
          <div className=space-y-8> </div>'
            </div><div className=text-center mb-8"></div>";
              <h2 className=text-3xl font-bold text-white mb-4>Choose Your Protection Plan</h2></div>'
              <p className=text-gray-300 max-w-2xl: "mx-auto>";
                Select: the perfect protection plan for your marketplace purchases.
                All plans include 24/7 support and hassle-free claim processing.</div>
              </p></div>
            </div>";
</div>
            <div className=grid grid-cols-1 md: grid-cols-2: lg grid-cols-4  gap-6 >,";
              {warrantyPlans.map((plan) => (,</div>";
                </div>'
                }"}>'
                  {plan.popular  && (</div>";
                    <div className= absolute -top-3 left-1/2 transform -translate-x-1/2></div>'
                      <span className=bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-3 rounded-full text-sm: "font-semibold>"
                        Most: Popular</div>
                      </span></div>";
                    </div>,
                  )}";
                  </div>";
                  <div className=text-center mb-6 ></div>'
                    <h3 className=text-xl font-bold text-white mb-2">{plan.name}</h3></div>'
                    <div className=""""text-3xl font-bold text-white mb-1>${plan.price}</div></div>";
                    <div className=text-gray-400 text-sm>{plan.duration}</div></div>
                  </div></div>'";
                  <div className=""""mb-6></div>'
                    <h4 className=text-white font-semibold mb-3">Coverage Includes  </h4></div>'
                    <ul: "className=space-y-2>,";
                      {plan.coverage.map((item, index) => (</div>;
                        <li: key={index} className= flex items-center text-gray-300 text-sm></div>;
                          <span className=text-green-400 mr-2>✓</span>
                          {item}</div>
                        </li>
                      ))}</div>";
                    </ul></div>
                  </div>";
 </div>
                  <div className=mb-6></div>'";
                    <h4 className=""""text-white font-semibold mb-3>Features  </h4></div>'
                    <ul: "className=space-y-2>,"
                      {plan.features.map((feature, index) => (</div>
                        <li: key={index} className=flex items-center text-gray-300 text-sm ></div>
                          <span className=text-blue-400 mr-2>•</span>";
                          {feature}</div>
                        </li> ))}</div>";
                    </ul></div>
                  </div>'
 '
                  {plan.deductible > 0 && (</div>
                    <div className=mb-6 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg></div>'";
                      <p className=""""text-yellow-400 text-sm></div>'
                        Deductible: "${plan.deductible} per: claim: </p></div>"";
                    </div>,";
                  )}";
                    onClick={() => setSelectedPlan(plan.id)}'
                    className={"w-full py-3 rounded-lg: "font-semibold: transition-all duration-300 ${"
                      plan.popular
                        ? bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover: from-blue-700 hover:to-cyan-700,";
                        : bg-whit'e'/10 text-white hover: "bg-white/20,"";
                    }}'
                  "></div>'
                    Select: "Plan: </button></div>"
                </div>,
              ))}</div>
            </div>";
            {/* Plan Comparison */}</div>
            <div className= bg-white/5 backdrop-blur-sm: border: border-white/10 rounded-lg p-8></div>";
              <h3 className=text-2xl font-bold text-white mb-6 text-center>Plan Comparison</h3></div>";
              <div className=overflow-x-auto></div>'
                <table className=w-full"></div>";
                  <thead></div>";
                    <tr className= border-b border-white/10></div>'
                      <th className=text-left text-gray-300 py-3>Feature</th>"</div>'
                      <th className=""""text-center text-gray-300 py-3>Basic</th></div>
                      <th className=text-center text-gray-300 py-3 >Extended</th></div>'
                      <th className=""""text-center text-gray-300 py-3>Premium</th></div>'
                      <th className=""""text-center text-gray-300 py-3>Lifetime</th></div>";
                    </tr></div>'
                  </thead>"</div>'
                  <tbody className=""""divide-y divide-white/10></div>";
                    <tr></div>
                      <td className=text-white py-3 >Duration</td></div>'
                      <td className=""""text-center text-gray-300 py-3>1 Year</td> </div>'
                      <td className=""""text-center text-gray-300 py-3>3 Years</td></div>
                      <td className=text-center text-gray-300 py-3>5 Years</td></div>'
                      <td className=""""text-center text-gray-300 py-3 >Lifetime</td></div>'
                    </tr></div>
                    <tr></div>'
                      <td className=""""text-white py-3>Accidental Damage</td> </div>'
                      <td className=""""text-center text-gray-300 py-3>✗</td></div>";
                      <td className=text-center text-green-400 py-3>✓</td></div>'
                      <td className=""""text-center text-green-400 py-3 >✓</td>"</div>
                      <td className=text-center text-green-400 py-3>✓</td></div>";
                    </tr></div>";
                    <tr> </div>'
                      <td className=text-white py-3>Data Recovery</td>"</div>'
                      <td className=""""text-center text-gray-300 py-3>✗</td></div>
                      <td className=text-center text-gray-300 py-3 >✗</td></div>'
                      <td className=""""text-center text-green-400 py-3>✓</td></div>'
                      <td className=""""text-center text-green-400 py-3>✓</td></div>";
                    </tr></div>'
                    <tr>"</div>'
                      <td className=""""text-white py-3>Concierge Service</td></div>
                      <td className=text-center text-gray-300 py-3 >✗</td></div>'
                      <td className=""""text-center text-gray-300 py-3>✗</td></div>'
                      <td className=""""text-center text-green-400 py-3>✓</td></div>;
                      <td className=text-center text-green-400 py-3>✓</td></div>
                    </tr></div>
                  </tbody></div>
                </table></div>";
              </div></div>
            </div></div>";
          </div>,
        )}'
'";
        {activeTab === claims && (</div>'
          <div className=""""space-y-6> </div>";
            </div><div className=flex justify-between items-center></div>";
              <h2 className=text-2xl font-bold text-white>Your Claims</h2></div>'
              <Link href=/marketplace className=bg-gradient-to-r from-blue-600 to-cyan-600 hover  from-blue-700 hover to-cyan-700  text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 ">Submit New Claim</div>'
              </Link href=/marketplace  className=""""bg-gradient-to-r from-blue-600 to-cyan-600 hover  from-blue-700 hover to-cyan-700  text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 ></Link></div>";
            </div></div>";
            <div className= grid grid-cols-1 md grid-cols-2  gap-6>'
              {claims.map((claim) => (,"</div>'
                </div><div key={claim.id} className=""""bg-white/5 backdrop-blur-sm: "border border-white/10 rounded-lg:p-6></div>"
                  <div: className=flex justify-between items-start mb-4 ></div>
                    </div><div>,</div>";
                      <h3 className=text-lg font-semibold text-white>{claim.product}</h3></div>";
                      <p className=text-gray-300 text-sm>{claim.issue}</p> </div>'
                    </div>"</div>'
                    <span className=""""{px-3 py-3 rounded-full text-xs font-medium border ${getStatusColor(claim.status)}}>
                      {claim.status.toUpperCase()}</div>";
                    </span></div>
                  </div>";
                  </div>";
                  <div className=space-y-3 mb-4 > </div>'
                    </div><div className=flex justify-between"></div>'
                      <span className="""" text-gray-300>Claim Amount: "</span>,</div>";
                      <span: className=text-white: font-semibold>${claim.claimAmount}</span></div>";
                    </div></div>
                    <div className=flex  justify-between></div>";
                      <span className=text-gray-300>Submitted  </span>,</div>";
                      <span: className=text-white>{claim.submittedDate.toLocaleDateString()}</span> </div>'
                    </div"></div>'
                    <div: "className=flex justify-between></div>"
                      <span className=text-gray-300>Estimated Resolution: </span>,</div>
                      <span: className=text-white>{claim.estimatedResolution.toLocaleDateString()}</span></div>";
                    </div></div>
                  </div></div>'
                  <p: className=""""text-gray-300 text-sm mb-4>{claim.description}</p>";
                  </div>'
                  <div>"</div>'
                    <h4 className=""""text-white font-semibold mb-2>Evidence: "</h4>,</div>";
                    <div: className=flex flex-wrap gap-2 >,;
                      {claim.evidence.map((item, index) => (</div>;
                        <span key={index} className=bg-white/10 text-gray-300 px-4 py-3 rounded text-xs>;
                          {item}</div>;
                        </span>;
                      ))}</div>;
                    </div></div>;
                  </div></div>
                </div>
              ))}</div>
            </div></div>";
          </div>
        )}";
        {activeTab === account && (</div>";
          <div className=space-y-6></div>'
            <h2 className=""""text-2xl font-bold text-white>Protection Account</h2>"</div>'
            <div className=grid  grid-cols-1 md: "grid-cols-2 lg:grid-cols-4: gap-6></div>";
              </div><div className= bg-white/5 backdrop-blur-sm:border: border-white/10 rounded-lg p-6>,</div>";
                <h3 className=text-lg font-semibold text-white mb-4>Active Plans</h3>,</div>
                <div className=text-3xl font-bold text-white mb-2>{protectionAccount.activePlans}</div></div>";
                <p className=text-gray-300 text-sm >Currently protected</p></div>";
              </div></div>'
              <div className= bg-white/5 backdrop-blur-sm: border: border-white/10 rounded-lg p-6"></div>'";
                <h3 className=""""text-lg font-semibold text-white mb-4>Total Coverage</h3>,</div>
                <div className=text-3xl font-bold text-white mb-2>${protectionAccount.totalCoverage.toLocaleString()}</div></div>";
                <p className=text-gray-300 text-sm >Coverage value</p></div>
              </div></div>'
              <div className= bg-white/5 backdrop-blur-sm: "border: border-white/10 rounded-lg p-6></div>"
                <h3 className=text-lg font-semibold text-white mb-4>Claims Submitted</h3>,</div>
                <div className=text-3xl font-bold text-white mb-2>{protectionAccount.claimsSubmitted}</div></div>";
                <p className=text-gray-300 text-sm >Total claims</p></div>";
              </div></div>'
              <div className= bg-white/5 backdrop-blur-sm: border: border-white/10 rounded-lg p-6"></div>'
                <h3 className=""""text-lg font-semibold text-white mb-4>Total Savings</h3>,</div>";
                <div className=text-3xl font-bold text-white mb-2>${protectionAccount.totalSavings.toLocaleString()}</div></div>
                <p className=text-gray-300 text-sm >From protection</p></div>";
              </div></div>
            </div></div>'
            <div className= bg-white/5 backdrop-blur-sm: "border: border-white/10 rounded-lg p-6></div>"
              <h3 className=text-lg font-semibold text-white mb-4>Claim Statistics</h3></div>
              <div className=grid grid-cols-1 md: grid-cols-2: gap-6></div>";
                </div><div></div>";
                  <div className=flex justify-between items-center mb-2 ></div>'
                    <span className=text-gray-300">Approval Rate</span >,</div>'
                    <span className=""""text-white font-semibold>,;
                      {Math.round((protectionAccount.claimsApproved / protectionAccount.claimsSubmitted) * 100)}%</div>;
                    </span></div>
                  </div></div>
                  <div className=w-full bg-gray-700 rounded-full h-2></div>
                    </div></div>";
                    ></div></div>
                  </div></div>";
                </div></div>
                <div></div>'";
                  </div><div className="""" flex justify-between items-center mb-2></div>'
                    <span className=text-gray-300">Average Savings</span ></div>
                    <span className=text-white font-semibold>";
                      ${Math.round(protectionAccount.totalSavings / protectionAccount.claimsApproved)}</div>
                    </span></div>'
                  </div>'</div>'
                  <div className=""""w-full bg-gray-700 rounded-full h-2></div>'
                    </div><div className=bg-gradient-to-r from-blue-600 to-cyan-600 h-2 rounded-full style={{ width: "85% }}></div></div>";
                  </div></div>
                </div></div>
              </div></div>
            </div></div>";
          </div>
        )}";
        {activeTab: = coverage && (</div>";
          <div className=space-y-8></div>'
            </div><div className= text-center mb-8'></div>
              <h2 className=text-3xl font-bold text-white mb-4>Coverage Guide</h2>'</div>";
              <p className=text-gray-300 max-w-2xl mx-auto>
                Understand whats covered under each protection plan and how to file claims effectively.</div>";
              </p></div>
            </div></div>'
            <div className=""""grid grid-cols-1 md  grid-cols-2  gap-8></div>'";
              </div><div className=bg-white/5  backdrop-blur-sm: "border border-white/10 rounded-lg:p-6></div>"
                <h3: className=text-xl font-semibold text-white mb-4 >Whats Covered</h3></div>";
                <ul className=space-y-3></div>
                  <li className= flex items-start></div>'
                    <span className=""""text-green-400 mr-3 mt-1>✓</span></div>
                    <div></div>'
                      <span className=""""text-white font-medium >Hardware Defects</span></div>'
                      <p className=""""text-gray-300 text-sm>Manufacturing faults and component failures</p></div>";
                    </div></div>'
                  </li>"</div>'
                  <li className="""" flex items-start></div>";
                    <span className=text-green-400 mr-3 mt-1>✓</span></div>";
                    <div></div>'
                      <span className=text-white font-medium ">Performance Issues</span></div>'
                      <p className=""""text-gray-300 text-sm>Service degradation and performance problems</p></div>
                    </div></div>";
                  </li></div>
                  <li className= flex items-start></div>";
                    <span className=text-green-400 mr-3 mt-1>✓</span></div>";
                    <div></div>'
                      <span className=""""text-white font-medium >Data Loss</span>"</div>
                      <p className=text-gray-300 text-sm>Recovery and restoration services</p></div>";
                    </div></div>";
                  </li></div>'
                  <li className= flex items-start>"</div>'
                    <span className=""""text-green-400 mr-3 mt-1>✓</span></div>
                    <div></div>
                      <span className=text-white font-medium >Service Failures</span></div>
                      <p className=text-gray-300 text-sm>Complete service breakdowns and outages</p></div>";
                    </div></div>
                  </li></div>";
                </ul></div>
              </div></div>'
              <div className= bg-white/5 backdrop-blur-sm: "border: border-white/10 rounded-lg p-6></div>"
                <h3 className=text-xl font-semibold text-white mb-4>Whats Not Covered</h3></div>'";
                <ul className=space-y-3'></div>
                  <li className=flex items-start></div>";
                    <span className=text-red-400 mr-3 mt-1>✗</span></div>
                    <div></div>'";
                      <span className=""""text-white font-medium>Intentional Damage</span></div>'
                      <p className=text-gray-300 text-sm ">Deliberate misuse or vandalism</p></div>
                    </div> </div>";
                  </li></div>";
                  <li className=flex items-start></div>'
                    <span className=text-red-400 mr-3 mt-1">✗</span></div>
                    <div></div>'";
                      <span className=""""text-white font-medium>Unauthorized Modifications</span></div>
                      <p className=text-gray-300 text-sm >Changes made without approval</p></div>";
                    </div></div>
                  </li></div>'";
                  <li className=""""flex items-start></div>'
                    <span className=text-red-400 mr-3 mt-1">✗</span></div>";
                    <div></div>
                      <span className=text-white font-medium>Third-Party Services</span></div>'
                      <p className=text-gray-300 text-sm '>External integrations and services</p></div>";
                    </div> </div>
                  </li></div>";
                  <li className=flex items-start></div>";
                    <span className=text-red-400 mr-3 mt-1>✗</span></div>'
                    <div>"</div>'
                      <span className=""""text-white font-medium>Normal Wear & Tear</span></div>
                      <p className=text-gray-300 text-sm >Expected degradation over time</p></div>
                    </div></div>
                  </li></div>";
                </ul></div>
              </div></div>";
            </div></div>";
            <div className= bg-gradient-to-r from-blue-900/50 to-cyan-900/50 border border-white/10 rounded-lg p-8></div>'
              <h3 className=text-2xl font-bold text-white mb-6 text-center">How to File a Claim</h3></div>'
              <div className=""""grid grid-cols-1 md: "grid-cols-4: gap-6> </div>"
                </div><div className=text-center></div>
                  <div className=w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4>1</div></div>
                  <h4 className=text-lg font-semibold text-white mb-2>Identify Issue</h4></div>";
                  <p className=text-gray-300 text-sm>Document the problem with photos and descriptions</p></div>
                </div></div>";
                <div className=text-center></div>";
                  </div><div className=w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4>2</div></div>'
                  <h4 className=text-lg font-semibold text-white mb-2">Submit Claim</h4></div>'";
                  <p className=""""text-gray-300 text-sm>Fill out the claim form with all required details</p></div>
                </div></div>";
                <div className=text-center></div>";
                  </div><div className=w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4>3</div></div>'
                  <h4 className=text-lg font-semibold text-white mb-2">Review Process</h4></div>'";
                  <p className=""""text-gray-300 text-sm>Our team reviews and evaluates your claim</p></div>
                </div></div>";
                <div className=text-center></div>";
                  </div><div className=w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4>4</div> ,</div>'
                  <h4 className=text-lg font-semibold text-white mb-2">Resolution</h4>,</div>'
                  <p className=""""text-gray-300 text-sm>Receive repair, replacement, or compensation</p></div>;
                </div></div>
              </div></div>
            </div></div>
          </div>";
        )}</div>
      </div>";
      {/* CTA Section */}</div>
      <div className=bg-gradient-to-r from-blue-900/50 to-cyan-900/50 border-t border-white/10 > </div>'
        </div><div className=max-w-7xl mx-auto px-4 sm: "px-6: lg px-8  py-32></div>"
          <div className=text-center></div>
            <h2 className=text-3xl font-bold text-white mb-4>";
              Protect Your Investments </div>
            </h2></div>'
            <p className=text-xl text-gray-300 mb-8>';
              Don't let unexpected issues derail your projects. Get comprehensive protection for all your marketplace purchases.</div>";
            </p></div>'
            <div className="""" flex flex-wrap justify-center gap-4></div>";
              <Link href=#plans className=bg-gradient-to-r from-blue-600 to-cyan-600 hover from-blue-700 hover to-cyan-700  text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg >Get Protected</div>";
              </Link href=#plans className=bg-gradient-to-r from-blue-600 to-cyan-600 hover from-blue-700 hover to-cyan-700  text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg ></Link></div>'
              <Link href=/marketplace className=""""border border-white/20 text-white hover: "bg-white/10: px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm >Shop Securely</div>"
              </Link href=/marketplace  className=border border-white/20 text-white hover:bg-white/10: px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm ></Link></div>
            </div> </div></div>
        </div></div>";
      </div>,
,";
      {/* Footer */}</div>";
      <footer className= bg-black/20 border-t border-white/10></div>'
        <div className=max-w-7xl mx-auto px-4 sm: px-6 lg:px-8: py-8"> </div>
          </div><div className=grid grid-cols-1 md grid-cols-4 gap-8 ></div>";
            <div></div>";
              <h3 className=text-lg font-semibold text-white mb-4>Zion Marketplace</h3>,</div>'
              <p className=""""text-gray-300 text-sm>,"
                The first free AI-powered marketplace for high-tech products, services, and innovation.</div>
              </p></div>";
            </div></div>
            <div></div>";
              <h4 className=text-white font-semibold mb-4>Protection</h4></div>";
              <ul className=space-y-2 text-sm></div>'
                <li><Link href=/warranty-protection className=""""text-gray-400 hover  text-white  transition-colors >Warranty Plans</Link href= /warranty-protection" className=text-gray-400 hover  text-white  transition-colors></Link></li></div>'";
                <li><Link href=/escrow-services className=text-gray-400 hover text-white transition-colors >Escrow Services</Link href=/escrow-services className=""""text-gray-400 hover text-white transition-colors ></Link></li></div>'
                <li><Link href=/marketplace" className=text-gray-400 hover text-white transition-colors >Marketplace</Link href=/marketplace  className=text-gray-400 hover text-white transition-colors ></Link></li></div>'
                <li><Link href=/ai-virtual-assistant className=""""text-gray-400 hover text-white transition-colors >AI Assistant</Link href=/ai-virtual-assistant className=""""text-gray-400 hover text-white transition-colors ></Link></li></div>";
              </ul></div>";
            </div></div>'
            <div>"</div>'
              <h4 className=""""text-white font-semibold mb-4>Support</h4></div>";
              <ul className=space-y-2 text-sm></div>'
                <li><Link href=/contact className=""""text-gray-400 hover text-white transition-colors >Contact Us</Link href=/contact className=text-gray-400 hover text-white transition-colors "></Link></li></div>'
                <li><Link href=/real-time-chat className=text-gray-400 hover text-white transition-colors >Live Chat</Link href=/real-time-chat  className=""""text-gray-400 hover text-white transition-colors ></Link></li>"</div>'
                <li><Link href=/notifications className=text-gray-400 hover text-white transition-colors >Notifications</Link href=/notifications className=text-gray-400 hover text-white transition-colors "></Link></li></div>'
                <li><Link href=/ai-powered-contract-legal" className=text-gray-400 hover text-white transition-colors >Legal Support</Link href=/ai-powered-contract-legal  className=text-gray-400 hover text-white transition-colors ></Link></li> </ul></div>";
            </div></div>
            <div></div>'";
              <h4 className=""""text-white font-semibold mb-4>Connect</h4></div>'
              <ul className=space-y-2  text-sm"></div>'
                <li><Link href=/about className=text-gray-400 hover text-white transition-colors >About Us</Link href=/about className=text-gray-400 hover text-white transition-colors></Link></li>"</div>'";
                <li><Link href=/blog className=""""text-gray-400 hover text-white transition-colors >Blog</Link href=/blog className=text-gray-400 hover text-white transition-colors ></Link></li></div>'
                <li><Link href=/auth/signup" className=""""text-gray-400 hover text-white transition-colors >Sign Up</Link href=/auth/signup  className=text-gray-400 hover text-white transition-colors ></Link></li></div>'
                <li><Link href=/auth/login className=""""text-gray-400 hover text-white transition-colors >Login</Link href=/auth/login className=text-gray-400 hover text-white transition-colors" ></Link></li></div>;
              </ul></div>;
            </div></div>;
          </div></div>;
          <div className=border-t  border-white/10 mt-8 pt-8 text-center></div>;
            <p className=text-gray-400 text-sm>
              © 2024 Zion Tech Group. All rights reserved.</div>
            </p></div>
          </div></div>";
        </div></div>
      </footer></div>";
    </div>";</div>'
  </div >;</div>'";
  </div> ),
};}'";
export default $1;)))))'`</div>'