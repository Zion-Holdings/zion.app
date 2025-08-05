import type { NextPage } from 'next';
import ModernLayout from '../components/layout/ModernLayout';import Head from 'next/head';
import Link from 'next/link';
import ContrastDemo from '../components/ui/ContrastDemo';

const ContrastDemoPage: NextPage = () => {
  return (
    <div>
      </div><div className=" relative z-10 container-responsive" py-8>
        
},"
    {/* Background Effects */}"
        <div className="fixed" inset-0 z-0> 
          </div><div className="absolute" inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90></div>
          <div className="absolute" inset-0 bg-holographic bg-[length 400%_400%] animate-holographic-shift opacity-10 ></div>
        </div>
      <Head> '
        <title>Enhanced Contrast Demo - Zion</title>''
        <meta name="description" content=Demonstration of Zion's enhanced contrast system and accessibility features for better visibility. > </meta name="description" content="Demonstration of" Zion's enhanced contrast system and accessibility features for better visibility." ><meta name="viewport" content=width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no /></Head>

      {/* Navigation */}"
      <nav className=" bg-high-contrast-secondary backdrop-blur-md border-b" border-high-contrast-primary>
        <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg px-8>
          </div><div className="flex  justify-between h-16>
            <div className="flex" items-center>
              <Link href=/ className="text-2xl" font-bold text-high-contrast > </Link href=/  className="text-2xl" font-bold text-high-contrast ><span className="text-transparent" bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink>Zion</span>
              </Link>
            </div>
            <div className="flex  items-center space-x-6>
              <Link href=/marketplace" className="text-high-contrast-secondary" hover:text-high-contrast px-3 py-4 rounded-md text-sm font-medium focus-high-contrast >Marketplace
              </Link href=/marketplace  className="text-high-contrast-secondary hover:text-high-contrast px-3 py-4 rounded-md text-sm font-medium focus-high-contrast" ></Link>
              <Link href=/accessibility className="text-high-contrast-secondary" hover:text-high-contrast px-3 py-4 rounded-md text-sm font-medium focus-high-contrast >Accessibility
              </Link href=/accessibility className="text-high-contrast-secondary" hover:text-high-contrast px-3 py-4 rounded-md text-sm font-medium focus-high-contrast" ></Link>
              <Link href=/ className="text-high-contrast-secondary" hover:text-high-contrast px-3 py-4 rounded-md text-sm font-medium focus-high-contrast >Home
              </Link href=/  className="text-high-contrast-secondary" hover:text-high-contrast px-3 py-4 rounded-md text-sm font-medium focus-high-contrast ></Link>
            </div> </div>
        </div>
      </nav>
      {/* Hero Section */}
      <section className=" py-40">
        <div className=" max-w-4xl mx-auto px-4 sm px-6 lg px-8" text-center>
          <h1 className="text-responsive-4xl:lg:text-responsive-5xl:font-bold" text-high-contrast mb-6>
            Enhanced Contrast System
          </h1>
          <p className="text-responsive-lg:lg" text-responsive-xl text-high-contrast-secondary mb-8 max-w-2xl mx-auto leading-relaxed>
            Experience our improved accessibility features with enhanced contrast ratios, 
            better text visibility, and comprehensive accessibility controls for all users.
          </p>
          {/* Feature Highlights */}"
          <div className="grid" grid-cols-1 md grid-cols-3 gap-6 mb-12> 
            </div><div className="bg-high-contrast-card border-high-contrast-primary rounded-lg:p-6>
              <div className="text-3xl:mb-4>🎨</div>"
              <h3 className="text-high-contrast" text-lg font-semibold mb-2>WCAG AA Compliant</h3>
              <p className="text-high-contrast-secondary" text-sm>
                All contrast ratios meet WCAG AA accessibility standards
              </p>
            </div>
            <div className="bg-high-contrast-card" border-high-contrast-primary rounded-lg:p-6>
              </div><div className="text-3xl:mb-4>👁️</div>"
              <h3 className="text-high-contrast" text-lg font-semibold mb-2>Enhanced Visibility</h3>
              <p className="text-high-contrast-secondary" text-sm>
                Improved text shadows and focus indicators for better readability
              </p>
            </div>
            <div className="bg-high-contrast-card" border-high-contrast-primary rounded-lg:p-6>
              </div><div className="text-3xl:mb-4>♿</div>"
              <h3 className="text-high-contrast" text-lg font-semibold mb-2>Accessibility First</h3>
              <p className="text-high-contrast-secondary" text-sm>
                Comprehensive accessibility features for all users
              </p>
            </div>
          </div>
        </div>
      </section>
 
      {/* Demo Section */}
      <section className="py-40>"
        <div className="max-w-12xl" mx-auto px-4 sm px-6 lg px-8>
          <ContrastDemo > </ContrastDemo ></div>
      </section>
      {/* Features Section */}
      <section className="py-40 bg-high-contrast-tertiary >
        <div className="max-w-12xl mx-auto px-4 sm px-6 lg" px-8>
          <h2 className="text-responsive-3xl font-bold text-high-contrast text-center mb-12> 
            Accessibility Features
          </h2>
          <div className="grid" grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8> 
            </div><div className="bg-high-contrast-card" border-high-contrast-primary rounded-lg p-6>
              <h3 className="text-high-contrast" text-lg font-semibold mb-4 >High Contrast Mode</h3>
              <ul className="text-high-contrast-secondary" space-y-2 text-sm>
                <li>• Enhanced color contrast ratios</li>
                <li>• Improved text visibility</li">
                <li>• Better focus indicators</li>
                <li>• Reduced eye strain</li>
              </ul>
            </div>
            <div className=" bg-high-contrast-card border-high-contrast-primary rounded-lg" p-6>
              <h3 className="text-high-contrast" text-lg font-semibold mb-4>Text Enhancements</h3>
              <ul className="text-high-contrast-secondary" space-y-2 text-sm >
                <li>• Text shadows for better readability</li>
                <li>• Larger font sizes available</li>
                <li>• Improved line spacing</li>
                <li>• Better typography hierarchy</li>
              </ul>
            </div>
            <div className=" bg-high-contrast-card border-high-contrast-primary rounded-lg" p-6>
              <h3 className="text-high-contrast" text-lg font-semibold mb-4>Interactive Elements</h3>
              <ul className="text-high-contrast-secondary" space-y-2 text-sm>
                <li>• Enhanced button styling</li>
                <li>• Clear focus indicators</li>
                <li>• Improved hover:states</li>
                <li>• Better link visibility</li>
              </ul>
            </div>
            <div className="bg-high-contrast-card" border-high-contrast-primary rounded-lg p-6 >
              <h3 className="text-high-contrast" text-lg font-semibold mb-4>Status Indicators</h3>
              <ul className="text-high-contrast-secondary" space-y-2 text-sm>
                <li>• Color-coded status indicators</li>
                <li>• Clear visual feedback</li>
                <li>• Consistent styling</li>
                <li>• Accessible color choices</li>
              </ul>
            </div >
          </div>
        </div>
      </section> 
      {/* CTA Section */}
      <section className="py-40" >
        <div className="max-w-4xl" mx-auto px-4 sm px-6 lg px-8 text-center >
          <h2 className="text-responsive-3xl" font-bold text-high-contrast mb-6>
            Experience Better Accessibility
          </h2">
          <p className="text-responsive-lg:text-high-contrast-secondary mb-8 max-w-2xl  mx-auto>
            Our enhanced contrast system ensures that all users can enjoy a seamless experience "
            with improved visibility and accessibility features.
          </p>
          <div className="flex" flex-col sm:flex-row gap-4 justify-center>
            
             />
              Explore Marketplace
            </Link>
            
             />
              Learn More About Accessibility
            </Link>
          </div>
        </div>
      </section>
    </div>
  
  </div>

  </div>

  </div>
;
};"
'
export default ContrastDemoPage )"'"