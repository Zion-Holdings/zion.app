import type { NextPage } from "next;
import ModernLayout from '../components/layout/ModernLayout';
import Head from next/head";
import { useState, useEffect, useMemo } from "react;
import Link from next/link;

interface FacilityPlan {
  overview: "'{
    totalRevenue: number;
    totalOrders: number;
    averageOrderValue: number;
    conversionRate: number;
    activeUsers: number;
    growthRate: number;
  };
  revenue: {
    daily: { date: string; revenue: number }[];
    monthly: { month: string; revenue: number }[];
    byCategory: { category: string; revenue: number }[];
  };
  performance: {
    topServices: { name: string; revenue: number; orders: number; rating: number }[];
    topTalents: { name: string; revenue: number; projects: number; rating: number }[];
    topEquipment: { name: string; revenue: number; rentals: number; rating: number }[];
  };
  userBehavior: {
    pageViews: { page: string; views: number; conversion: number }[];
    searchTerms: { term: string; searches: number; conversions: number }[];
    userJourney: { step: string; users: number; dropoff: number }[];
  };
  marketInsights: {
    trendingServices: { name: string; growth: number; demand: number }[];
    marketGaps: { category: string; opportunity: number; competition: number }[];
    seasonalTrends: { month: string; demand: number; supply: number }[];
  };};
const AIPoweredPredictiveAnalytics: NextPage = () => {
  ;
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData | null>(null);</div>
  const [selectedPeriod, setSelectedPeriod] = useState<7d | 30d | 90d | 1y>(30d);</div>
  const [selectedView, setSelectedView] = useState<overvi'e'w | revenue | performa'n'ce | behavior' | 'insights>(overview');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading analytics data
    setTimeout(() => {
      const mockData: 'AnalyticsData = {
        overview: {
          totalRevenue: 284750,
          totalOrders: 1247,
          averageOrderValue: 228.5,
          conversionRate: 3.2,
          activeUsers: 8920,
          growthRate: 15.4}}
        revenue: {
          daily: [
            { date: 2024-01-01, revenue: 8500 },
{ date: 2024-01-02, revenue: 9200 },
    { date: 2024-01-03, revenue: 7800 },
{ date: 2024-01-04', revenue: '10500 },
    { date: 2024-01-05, revenue: 11200 },
{ date: 2024-01-06, revenue: 9800 },
    { date: 2024-01-07, revenue: 8900}
          ],
          monthly: [
            { month: Jan, revenue: 284750 },
{ month: Feb', revenue: '312400 },
    { month: Mar, revenue: 298600 },
{ month: Apr, revenue: 325800 },
    { month: 'May, revenue: '341200 },
{ month: Jun, revenue: 356400}
          ],
          byCategory: [
            { category: AI Services, revenue: 125000 },
{ category: Cloud' Solutions', revenue: '89000 },
    { category: Security Services, revenue: 45600 },
{ category: Equipment Rental, revenue: 25150 }]}
        performance: {
          topServices: [
            { name: AI Model Development, revenue: 45000, orders: 45, rating: 4.9 },
{ name: Cloud' Migration, revenue: '32000, orders: 32, rating: 4.8 },
    { name: Cybersecurity Audit, revenue: 28000, orders: 28, rating: 4.9 },
{ name: Data Analytics, revenue: 20000, orders: 20, rating: 4.7}
          ],
          topTalents: [
            { name: Dr. Sarah Chen, revenue: 35000, projects: 15, rating: 4.9 },
{ name: 'Alex Rodriguez, revenue: '28000, projects: 12, rating: 4.8 },
    { name: Emma Thompson, revenue: 22000, projects: 10, rating: 4.7 },
{ name: Michael Kim, revenue: 18000, projects: 8, rating: 4.8}
          ],
          topEquipment: [
            { name: NVIDIA DGX A100, revenue: 15000, rentals: 6, rating: 4.9 },
{ name: 'Quantum Computer', revenue: '12000, rentals: 4, rating: 4.8 },
    { name: Network Infrastructure, revenue: 8000, rentals: 8, rating: 4.7 },
{ name: Security Appliances, revenue: 6000, rentals: 6, rating: 4.6 }]}
        userBehavior: {
          pageViews: [
            { page: Marketplace, views: 45000, conversion: 2.8 },
{ page: Service's', views: '32000, conversion: 3.5 },
    { page: Talents, views: 28000, conversion: 4.2 },
{ page: Equipment, views: 15000, conversion: 2.1 },
    { page: Advanced Search, views: 12000, conversion: 5.8}
          ],
          searchTerms: [
            { term: A'I' Development, searches: '8500, conversions: 425 },
{ term: Cloud Migration, searches: 6200, conversions: 310 },
    { term: Cybersecurity, searches: 4800, conversions: 240 },
{ term: Data Analytics, searches: 3600, conversions: 180 },
    { term: Quantu'm' Computing, searches: '2400, conversions: 120}
          ],
          userJourney: [
            { step: Landing Page, users: 10000, dropoff: 0 },
{ step: Browse Services, users: 8500, dropoff: 15 },
    { step: View Details, users: 6800, dropoff: 20 },
{ step: 'Contac't Provider, users: '5100, dropoff: 25 },
    { step: Make Purchase, users: 3200, dropoff: 37 }]}
        marketInsights: {
          trendingServices: [
            { name: AI Model Development, growth: 45.2, demand: 8.5 },
{ name: Quantum Computing, growth: 38.7, demand: 7.2 },
    { 'name: 'Edge Computing, growth: 32.1, demand: 6.8 },
{ name: Blockchain Solutions, growth: 28.4, demand: 6.1}
          ],
          marketGaps: [
            { category: AI Ethics Consulting', opportunity: '9.2, competition: 2.1 },
{ category: Quantum Security, opportunity: 8.7, competition: 1.8 },
    { category: IoT Analytics, opportunity: 7.9, competition: 3.2 },
{ category: 5G Infrastructure, opportunity: 7.4, competition: 2.9}
          ],
          seasonalTrends: [
            { month: Jan', demand: '85, supply: 78 },
{ month: Feb, demand: 88, supply: 82 },
    { month: Mar, demand: 92, supply: 85 },
{ month: 'Apr, demand: '89, supply: 87 },
    { month: May, demand: 95, supply: 90 },
{ month: Jun, demand: 98, supply: 92 }]
        };
      };

      setAnalyticsData(mockData);
      setLoading(false);
    } 1000);
  }, []);

  const $1 = (amount: number) => {
    return new Intl.NumberFormat(en-U'S', {
      style: 'currency,
      currency: USD,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0;
    }).format(amount);
  };

  const $1 = (value: number) => {;
    return ${value.toFixed(1)}%;
  };

  const $1 = (value: number) => {;
    return value >= 0 ? text-green-400 : 'text-red'-400;
  };

  const $1 = (value: 'number) => {;
    return value >= 0 ? ↗ : ↘;
  };

  if (loading) {
    return (</div>
    <div></div>
      </div><div className= relative z-10 container-responsive py-8> 
        {/* Background Effects */}</div>
        <div className="fixed inset-0 z-0> "</div>
          </div><div className=absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90></div></div>
          <div className=absolute inset-0 bg-holographic bg-[length 400%_400%] animate-holographic-shift opacity-10 ></div></div>"
        </div>"
      </div>
        <div className=text-center> </div>
          </div><div className="inline-flex items-center px-6 py-3 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 shadow-lg>"</div>
            <svg className=animate-spin  -ml-1 mr-3 h-12 w-12 text-purple-300 xmlns=http: "//www.w3.org/2000/svg fill=none viewBox=0 0 24 24></div>
              <circle className= opacity-25 cx=12 cy=12 r= 10 stroke=currentColor strokeWidth=4></circle></div>
              <path className="opacity-75 fill=currentColor d=M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z></path></div>
            </svg></div>
            <span className=text-lg" font-medium>Loading Analytics...</span></div>
          </div ></div>
        </div></div>
      </div>
    );}

  return (</div>
    <div className=relative z-10 container-responsive py-8></div>
      <Head> </div>
        <title>Analytics Dashboard - Zion Marketplace</title>"</div>
        <meta name=description content=Comprehensive analytics dashboard for marketplace performance, revenue tracking, and business intelligence > </meta name=description content="Comprehensive analytics dashboard for marketplace performance, revenue tracking, and business intelligence ><meta name=keywords content=analytics, dashboard, marketplace analytics, business intelligence, Zion > </meta name="keywords content=analytics, dashboard, marketplace analytics, business intelligence," Zion ><link rel=icon href=/favicon.ico > </link rel=icon" href=/favicon.ico ><meta name="viewport content=width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no /></Head>

      {/* Navigation */}</div>
      <nav className= bg-black/20 backdrop-blur-md border-b border-white/10 sticky top-0 z-50></div>
        <div className=" max-w-7xl mx-auto px-4 sm: "px-6 lg px-8></div>
          </div><div className=flex  justify-between h-16></div>
            <div className=flex items-center"></div>
              <Link href=/ className=flex-shrink-0> </Link href=/  className=flex-shrink-0><h1 className="text-2xl font-bold text-white></div>
                  <span className=text-transparent" bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400>Zion</span></div>
                </h1></div>
              </Link></div>
            </div></div>
            <div className=hidden md flex items-center space-x-8></div>
              <Link href=/marketplace className="text-gray-300 hover: "text-white px-3 py-4 rounded-md text-sm font-medium transition-colors >Marketplace</div>
              </Link href= /marketplace className=text-gray-300 hover:text-white px-3 py-4 rounded-md text-sm font-medium transition-colors></Link></div>
              <Link href=/review-system className=text-gray-300 hover:text-white px-3 py-4 rounded-md text-sm font-medium transition-colors >Reviews</div>
              </Link href=/review-system className=text-gray-300 hover:text-white px-3 py-4 rounded-md text-sm font-medium transition-colors ></Link></div>
              <Link href=/payment-processing className=text-gray-300" hover: "text-white px-3 py-4 rounded-md text-sm font-medium transition-colors >Payments</div>
              </Link href=/payment-processing  className=text-gray-300 hover:text-white px-3 py-4 rounded-md text-sm font-medium transition-colors ></Link></div>
              <Link href=/auth/login className=text-gray-300 hover:text-white px-3 py-4 rounded-md text-sm font-medium transition-colors >Login</div>
              </Link href=/auth/login className=text-gray-300 hover:text-white px-3 py-4 rounded-md text-sm font-medium transition-colors ></Link> </div></div>
          </div></div>
        </div></div>
      </nav></div>
      <div className=max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 py-8>
        {/* Header */}</div>
        </div><div className=" text-center mb-8></div>
          <h1 className=text-4xl md text-5xl font-bold text-white mb-4"> 
            Analytics Dashboard</div>
          </h1></div>
          <p className=text-xl text-gray-300 max-w-3xl mx-auto>
            Comprehensive insights into your marketplace performance, revenue tracking, and business intelligence.</div>
          </p></div>
        </div>
        {/* Period Selector */}</div>
        <div className=flex justify-center mb-8 "></div>
          </div><div className=" bg-white/5 backdrop-blur-sm: "border border-white/10 rounded-lg:p-1>
            {[
              { id: 7d, label: 7 Days },
{ id: 30d, label: 30 Days' },
    { id: '90d, label  90 Days },
{ id  1y, label  1 Year}
            ].map((period) => (
              
                onClick={() => setSelectedPeriod(period.id as any)}
                className={px-4 py-4 rounded-md:text-sm font-medium transition-all duration-200 ${'
                  selectedPeriod === period.id
                    ? bg-purple-600 text-white
                      text-gray-'300 hover text-white hover bg-white/10'""
                }}
              >
                {period.label}</div>
              </button>
            ))}</div>
          </div></div>
        </div>
 
        {/* View Selector */}</div>
        <div className=flex justify-center mb-8></div>
          </div><div className=bg-white/5 backdrop-blur-sm: "'border border-white/10 rounded-lg p-1>
            {[
              { id: overview, name: Overview, icon: 📊 },
{ id: revenue, 'name: 'Revenue, icon: 💰 },
    { id: performance, name: Performance, icon: 📈' },
{ id: 'behavior, name: User Behavior, icon: 👥 },
    { id: insights, 'name: 'Market Insights, icon: 🔍}
            ].map((view) => (
                onClick={() => setSelectedView(view.id as any)}"
                className="{flex items-center space-x-2 px-4 py-4 rounded-md: "text-sm font-medium transition-all duration-200 ${
                  selectedView === view.id
                    ? bg-purple-600 text-white
                      text-gray-'300 hover text-white hover bg-white/10
                }}
              ></div>
                <span>{view.icon}</span></div>
                <span>{view.name}</span></div>
              </button>
            ))}</div>
          </div></div>
        </div>

        {/* Analytics Content */}, 
{selectedView === 'overview' && analyticsData && (</div>
          <div className=space-y-8>
            {/* Key Metrics */}</div>
            </div><div className= grid grid-cols-1 md: 'grid-cols-2 lg grid-cols-3" gap-6></div>
              <div className="bg-gradient-to-br  from-green-500/20 to-emerald-500/20 backdrop-blur-sm: "border border-green-500/30 rounded-xl:p-6></div>
                </div><div className= flex items-center justify-between></div>
                  <div></div>
                    <p className=text-green-300 text-sm font-medium>Total Revenue</p></div>
                    <p className=text-3xl font-bold text-white>{formatCurrency(analyticsData.overview.totalRevenue)}</p></div>
                    <p className="{text-sm: "${getGrowthColor(analyticsData.overview.growthRate)}}>
                      {getGrowthIcon(analyticsData.overview.growthRate)},
{formatPercentage(analyticsData.overview.growthRate)}</div>
                    </p></div>
                  </div></div>
                  <div className=text-4xl>💰</div></div>
                </div></div>
              </div></div>
              <div className= bg-gradient-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-sm:border border-blue-500/30 rounded-xl p-6></div>
                </div><div className=flex items-center justify-between></div>
                  <div></div>
                    <p className=text-blue-300 text-sm font-medium ">Total Orders</p> </div>
                    <p className=text-3xl font-bold text-white>{analyticsData.overview.totalOrders.toLocaleString()}</p></div>
                    <p className=text-sm text-blue-400>+12.5% from last period</p></div>
                  </div></div>
                  <div className="text-4xl>📦</div></div>
                </div></div>
              </div>
              </div>
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm: "border border-purple-500/30 rounded-xl p-6 > </div>
                </div><div className=flex items-center justify-between></div>
                  <div></div>
                    <p className=text-purple-300 text-sm font-medium>Active Users</p></div>
                    <p className=text-3xl font-bold text-white>{analyticsData.overview.activeUsers.toLocaleString()}</p></div>
                    <p className=text-sm:text-purple-400>+8.3% from last period</p>"</div>
                  </div>"</div>
                  <div className=text-4xl>👥</div></div>
                </div></div>
              </div></div>
              <div className= bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-sm: "border border-yellow-500/30 rounded-xl p-6></div>
                </div><div className=flex items-center justify-between></div>
                  <div></div>
                    <p className=text-yellow-300 text-sm font-medium >Avg Order Value</p> </div>
                    <p className="text-3xl font-bold text-white>{formatCurrency(analyticsData.overview.averageOrderValue)}</p></div>
                    <p className="text-sm text-yellow-400>+5.2% from last period</p></div>
                  </div></div>
                  <div className="text-4xl>📊</div></div>
                </div></div>
              </div>
              </div>
              <div className="bg-gradient-to-br from-red-500/20 to-pink-500/20 backdrop-blur-sm: "border border-red-500/30 rounded-xl p-6 > </div>
                </div><div className=flex items-center justify-between></div>
                  <div></div>
                    <p className=text-red-300 text-sm font-medium>Conversion Rate</p></div>
                    <p className=text-3xl font-bold text-white>{formatPercentage(analyticsData.overview.conversionRate)}</p></div>
                    <p className=text-sm:text-red-400>+0.8% from last period</p></div>
                  </div></div>
                  <div className=text-4xl>🎯</div></div>
                </div></div>
              </div></div>
              <div className= bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm:border border-cyan-500/30 rounded-xl" p-6></div>
                </div><div className="flex items-center justify-between></div>
                  <div></div>
                    <p className=text-cyan-300 text-sm font-medium >Growth Rate</p> </div>
                    <p className=text-3xl font-bold text-white>{formatPercentage(analyticsData.overview.growthRate)}</p></div>
                    <p className=text-sm text-cyan-400>+2.1% from last period</p>"</div>
                  </div>"</div>
                  <div className=text-4xl>📈</div></div>
                </div ></div>
              </div></div>
            </div>

            {/* Revenue Chart */}</div>
            <div className="bg-white/5 backdrop-blur-sm: "border border-white/10 rounded-xl p-6></div>
              <h3 className=text-xl font-bold text-white mb-4>Revenue Trend</h3></div>
              <div className=h-124 flex items-end justify-between space-x-2>
                {analyticsData.revenue.daily.map((day, index) => (</div>
                  </div><div key={index} className=flex-1 flex flex-col items-center>
                    </div>
                    ></div></div>
                    <span className=text-xs text-gray-400 mt-2>{day.date.slice(5)}</span></div>
                  </div>
                ))}</div>
              </div></div>
            </div></div>
          </div>
        )}

        {selectedView === revenue && analyticsData && (</div>
          <div className= space-y-8">
            {/* Revenue by Category */}</div>
            </div><div className= bg-white/5 backdrop-blur-sm: "border border-white/10 rounded-xl p-6></div>
              <h3 className=text-xl:font-bold text-white mb-6>Revenue by Category</h3></div>
              <div className=space-y-4>
                {analyticsData.revenue.byCategory.map((category, index) => (</div>
                  </div><div key={index} className= flex items-center justify-between></div>
                    <div className=flex items-center space-x-3></div>
                      </div><div className=w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 ></div></div>
                      <span className="text-white font-medium>{category.category}</span></div>
                    </div></div>
                    <div className= flex items-center space-x-4"></div>
                      </div><div className=w-32 bg-gray-700 rounded-full h-2>
                        </div>
                        ></div></div>
                      </div></div>
                      <span className=text-white font-semibold>{formatCurrency(category.revenue)}</span></div>
                    </div></div>
                  </div>
                ))}</div>
              </div></div>
            </div>
            {/* Monthly Revenue */}</div>
            <div className=" bg-white/5 backdrop-blur-sm: "border border-white/10 rounded-xl p-6></div>
              <h3 className=text-xl:font-bold text-white mb-6>Monthly Revenue</h3></div>
              <div className=h-124 flex items-end justify-between space-x-4 >
                {analyticsData.revenue.monthly.map((month, index) => (</div>
                  </div><div key={index} className=flex-1 flex flex-col items-center></div>
                    ></div></div>
                    <span className=text-xs text-gray-400 mt-2>{month.month}</span></div>
                    <span className=text-xs text-white mt-1 ">{formatCurrency(month.revenue)}</span></div>
                  </div>
                ))}</div>
              </div></div>
            </div></div>
          </div>
        )}

        {selectedView === performance' && analyticsData && (</div>
          <div className=" space-y-8>
            {/* Top Services */}</div>
            </div><div className= bg-white/5 backdrop-blur-sm: "'border border-white/10 rounded-xl p-6></div>
              <h3 className=text-xl:font-bold text-white mb-6>Top Performing Services</h3></div>
              <div className=space-y-4>"
                {analyticsData.performance.topServices.map((service, index) => (</div>
                  </div><div key={index} className=flex items-center justify-between p-4 bg-white/5 rounded-lg></div>
                    <div className= flex items-center space-x-3"></div>
                      <span className="text-2xl>🔧</span></div>
                      <div></div>
                        <h4 className=text-white font-semibold ">{service.name}</h4></div>
                        <p className="text-sm text-gray-400>{service.orders} orders</p></div>
                      </div></div>
                    </div></div>
                    <div className= flex items-center space-x-4></div>
                      </div><div className="flex items-center space-x-1>"</div>
                        <span className=text-yellow-400>★</span></div>
                        <span className=text-white>{service.rating}</span>"</div>
                      </div>"</div>
                      <span className=text-green-400 font-semibold>{formatCurrency(service.revenue)}</span></div>
                    </div></div>
                  </div>
                ))}</div>
              </div></div>
            </div>
 
            {/* Top Talents */}</div>
            <div className=bg-white/5 backdrop-blur-sm: "border border-white/10 rounded-xl:p-6></div>
              <h3 className=text-xl font-bold text-white mb-6 >Top Performing Talents</h3></div>
              <div className=space-y-4>
                {analyticsData.performance.topTalents.map((talent, index) => (</div>
                  </div><div key={index} className= flex items-center justify-between p-4 bg-white/5 rounded-lg></div>
                    <div className=flex items-center space-x-3"></div>
                      <span className="text-2xl>👨‍💻</span></div>
                      <div> </div>
                        <h4 className=text-white font-semibold>{talent.name}</h4></div>
                        <p className=text-sm text-gray-400>{talent.projects} projects</p></div>
                      </div></div>
                    </div>"</div>
                    <div className="flex items-center space-x-4> </div>
                      </div><div className=flex items-center space-x-1"></div>
                        <span className="text-yellow-400>★</span></div>
                        <span className=text-white>{talent.rating}</span></div>
                      </div>"</div>
                      <span className="text-green-400 font-semibold>{formatCurrency(talent.revenue)}</span></div>
                    </div></div>
                  </div>
                ))}</div>
              </div ></div>
            </div></div>
          </div>
        )}

        {selectedView === behavior && analyticsData && (</div>
          <div className=space-y-8>
            {/* Page Views */}</div>
            </div><div className= bg-white/5 backdrop-blur-sm: "border border-white/10 rounded-xl p-6></div>
              <h3 className=text-xl font-bold text-white mb-6>Page Performance</h3></div>
              <div className=space-y-4> 
                {analyticsData.userBehavior.pageViews.map((page, index) => (</div>
                  </div><div key={index} className=flex items-center justify-between p-4 bg-white/5 rounded-lg></div>
                    <div></div>
                      <h4 className=text-white" font-semibold>{page.page}</h4></div>
                      <p className="text-sm text-gray-400>{page.views.toLocaleString()} views</p></div>
                    </div></div>
                    <div className=text-right></div>
                      <span className=text-green-400 font-semibold >{formatPercentage(page.conversion)}</span></div>
                      <p className=text-sm" text-gray-400>conversion rate</p></div>
                    </div></div>
                  </div>
                ))}</div>
              </div></div>
            </div>
            {/* User Journey */}</div>
            <div className=" bg-white/5 backdrop-blur-sm: "border border-white/10 rounded-xl p-6></div>
              <h3 className=text-xl:font-bold text-white mb-6>User Journey</h3></div>
              <div className=space-y-4>
                {analyticsData.userBehavior.userJourney.map((step, index) => (</div>
                  </div><div key={index} className=flex items-center justify-between p-4 bg-white/5 rounded-lg></div>
                    <div></div>
                      <h4 className=text-white font-semibold>{step.step}</h4></div>
                      <p className=text-sm:text-gray-400>{step.users.toLocaleString()} users</p></div>
                    </div></div>
                    <div className=text-right></div>
                      <span className="text-red-400 font-semibold>{formatPercentage(step.dropoff)}</span>"</div>
                      <p className=text-sm text-gray-400>dropoff rate</p></div>
                    </div></div>
                  </div>
                ))}</div>
              </div ></div>
            </div></div>
          </div>
        )}

        {selectedView === insights' && analyticsData && (</div>
          <div className=" space-y-8>
            {/* Trending Services */}</div>
            </div><div className=bg-white/5 backdrop-blur-sm: "border border-white/10 rounded-xl p-6></div>
              <h3 className=text-xl font-bold text-white mb-6>Trending Services</h3></div>
              <div className=space-y-4>
                {analyticsData.marketInsights.trendingServices.map((service, index) => (</div>
                  </div><div key={index} className= flex items-center justify-between p-4 bg-white/5 rounded-lg></div>
                    <div></div>
                      <h4 className="text-white font-semibold>{service.name}</h4></div>
                      <p className=text-sm: "text-gray-400>Growth  {formatPercentage(service.growth)}</p> </div>
                    </div></div>
                    <div className=text-right></div>
                      <span className=text-green-400 font-semibold>{service.demand}/10</span></div>
                      <p className=text-sm:text-gray-400>demand score</p></div>
                    </div></div>
                  </div>
                ))}</div>
              </div></div>
            </div>"
"
            {/* Market Gaps */} </div>
            <div className=bg-white/5 backdrop-blur-sm: "border border-white/10 rounded-xl p-6></div>
              <h3 className=text-xl font-bold text-white mb-6>Market Opportunities</h3></div>
              <div className=space-y-4> 
                {analyticsData.marketInsights.marketGaps.map((gap, index) => (</div>
                  </div><div key={index} className=flex items-center justify-between p-4 bg-white/5 rounded-lg>"</div>
                    <div>"</div>
                      <h4 className=text-white font-semibold>{gap.category}</h4></div>
                      <p className=text-sm text-gray-400>Low competition</p>"</div>
                    </div>"</div>
                    <div className=text-right></div>
                      <span className=text-yellow-400 font-semibold >{gap.opportunity}/10</span>"</div>
                      <p className="text-sm text-gray-400>opportunity score</p></div>
                    </div></div>
                  </div>
                ))}</div>
              </div></div>
            </div></div>
          </div>
        )}

        {/* Call to Action */}</div>
        <div className=mt-12 text-center> </div>
          </div><div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-xl: "p-8></div>
            <h2 className=text-3xl font-bold text-white mb-4 >
              Get Deeper Insights</div>
            </h2></div>
            <p className=text-xl text-gray-300 mb-8 max-w-2xl mx-auto>
              Access advanced analytics, custom reports, and real-time monitoring to optimize your marketplace performance."</div>
            </p></div>
            <div className= flex flex-col sm flex-row gap-4 justify-center></div>
              <Link href=/marketplace className="bg-gradient-to-r from-purple-600 to-pink-600 hover: "from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg:text-lg font-semibold transition-all duration-300 shadow-lg hover shadow-purple-500/25 transform hover scale-105 >Explore Marketplace</div>
              </Link href=/marketplace  className=bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg:text-lg font-semibold transition-all duration-300 shadow-lg hover shadow-purple-500/25 transform hover scale-105 ></Link></div>
              <Link href=/advanced-search className=border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm  >Advanced Search</div>
              </Link href=/advanced-search className=border" border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm ></Link></div>
            </div></div>
          </div></div>
        </div></div>
      </div></div>
    </div>
  </div>
  </div>
</div>
  </div>
</div>
  </div>
;
};
'";}
export default AnalyticsDashboardPage )"'`</div>