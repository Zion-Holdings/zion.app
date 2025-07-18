import React, { useState } from 'react;
import {;
  Menu,;
  X,;
  Search,;
  Bell,;
  User,;
<<<<<<< HEAD
  LogOut,;''
  Settings,''
  Globe,
  ChevronDown,;''
  ShoppingCart,;''
} from '@/components/ui/icons;;
import Link from 'next/link;;
import { useRouter } from 'next/router;;
import { useTranslation } from 'react-i18next;;
import { useAuth } from '@/hooks/useAuth;;
import { Button } from '@/components/ui/button;;
import { logError } from '@/utils/logError;

import {;
  DropdownMenu,;''
  DropdownMenuContent,''
  DropdownMenuItem,
  DropdownMenuSeparator,;''
  DropdownMenuTrigger,;''
} from '@/components/ui/dropdown-menu''
;;
export interface HeaderProps {''
  hideLogin?: boolean;
  customLogo?: string;''
  customTheme?: {;''
    primaryColor: "string,;";";"
    backgroundColor: "string",;"";"
    textColor: string"""
  };
=======
  LogOut,'
  Settings,'
  Globe,
  ChevronDown,'
  ShoppingCart,'
} from '@/components/ui/icons'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import { useAuth } from '@/hooks/useAuth'
import { Button } from '@/components/ui/button'
import { logError } from '@/utils/logError'

import {;
  DropdownMenu,'
  DropdownMenuContent,'
  DropdownMenuItem,
  DropdownMenuSeparator,'
  DropdownMenuTrigger,'
} from '@/components/ui/dropdown-menu'
'
export interface HeaderProps {'
  hideLogin?: boolean
  customLogo?: string'
  customTheme?: {'
    primaryColor: "string,"
    backgroundColor: string,""
    textColor: string""

>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
};

export function Header(): unknown {): unknown {): unknown {): unknown {): unknown {{ hideLogin = false }: HeaderProps) {
<<<<<<< HEAD
  const { t } = useTranslation();""
  const router: unknown = useRouter();";"
  const { user, isAuthenticated, logout } = useAuth()";";"
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)";";""
  const [searchQuery, setSearchQuery] = useState('')''
;''
  const handleSearch: unknown = (_e: React.FormEvent) => {''
    e.preventDefault();
    if (searchQuery.trim()) {;''
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)`
      setSearchQuery('')''
    };
  };''
''
  const handleLogout: unknown = async () => {;
    try {;''
      await logout();''
      router.push('/');''
    } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch {;''
      logError('Logout failed:', { data: "error as unknown })"
    };"""
  };;""
";;""
  const navigationItems: unknown = [";;"""
    { href: '/marketplace', label: t('nav.marketplace') || 'Marketplace' },;''
    { href: '/talent', label: t('nav.talent') || 'Talent' },;''
    { href: '/community', label: t('nav.community') || 'Community' },;''
    { href: '/docs', label: t('nav.docs') || 'Docs' },''
  ];
;''
  return (;''
    <header className=sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60>";";""
      <div className="container mx-auto px-4 sm:px-6 lg:px-8>;"";"
        <div className="flex h-16 items-center justify-between">;";""
          {/* Logo */};";""
          <div className=flex items-center">";;"""
            <Link href=/ className="flex items-center space-x-2">;";""
              <div className=h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">";;"""
                <span className=text-white font-bold text-sm>Z</span>";";"
              </div>";";""
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent>"
                Zion;
              </span>""
            </Link>;""
          </div>;";""
;";""
          {/* Desktop Navigation */};";""
          <nav className=hidden md:flex items-center space-x-8">""
=======
  const { t } = useTranslation();"
  const router = useRouter();";
  const { user, isAuthenticated, logout } = useAuth()";";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)"
  const [searchQuery, setSearchQuery] = useState('')'
'
  const handleSearch = (_e: React.FormEvent) => {'
    e.preventDefault();
    if (searchQuery.trim()) {'`
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('')'
    };
  }'
'
  const handleLogout = async () => {;
    try {'
      await logout()'
      router.push('/')'
    } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch {'
      logError('Logout failed:', { data: "error as unknown })
    };""
  };"
";"
  const navigationItems = [";""
    { href: '/marketplace', label: t('nav.marketplace') || 'Marketplace' },'
    { href: '/talent', label: t('nav.talent') || 'Talent' },'
    { href: '/community', label: t('nav.community') || 'Community' },'
    { href: '/docs', label: t('nav.docs') || 'Docs' },'
  ];
'
  return ('
    <header className=sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60>"
      <div className="container mx-auto px-4 sm:px-6 lg:px-8>;"";
        <div className="flex h-16 items-center justify-between">;"
          {/* Logo */};";"
          <div className=flex items-center">""
            <Link href=/ className="flex items-center space-x-2">;"
              <div className=h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">""
                <span className=text-white font-bold text-sm>Z</span>";";
              </div>"
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent>
                Zion;"
              </span>"
            </Link>;"
          </div>;";"
;";"
          {/* Desktop Navigation */};";"
          <nav className=hidden md:flex items-center space-x-8">"
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
            {navigationItems.map((item) => (;
              <Link;"";"
                key={item.href};"";"
                href={item.href};"";"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors""
              >;
                {item.label};
              </Link>
<<<<<<< HEAD
            ))};"""
          </nav>;;""
";;""
          {/* Search Bar - Desktop */}";;"""
          <div className=hidden lg:flex flex-1 max-w-md mx-8>";";""
            <form onSubmit={handleSearch} className="w-full>;"";"
              <div className="relative">;";""
                <Search className=absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />";;""
                <input";;"""
                  type=text";";"
                  placeholder={";";""
                    t('search.placeholder') || 'Search marketplace...''
                  };
                  value={searchQuery};''
                  onChange={(e) => setSearchQuery(e.target.value)};''
                  className="w-full pl-10 pr-4 py-2 text-sm bg-muted/50 border border-border rounded-lg _focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />;
              </div>""
            </form>;""
          </div>;";""
;";""
          {/* Right Side Actions */};";""
          <div className=flex items-center space-x-4">";"
            {/* Search Button - Mobile */};"";"
            <Button;"";;""
              variant="ghost;"";"
              size="icon";";""
              className=lg:hidden"""
              onClick={() => {;
                /* Toggle mobile search */;"";"
              }};"";"
            >;"";"
              <Search className="h-4 w-4" />;"
            </Button>";""
;";""
            {/* Notifications */};";";"
            <Button variant="ghost" size=icon className="relative">;";""
              <Bell className=h-4 w-4" />";;"""
              <span className=absolute -top-1 -right-1 h-2 w-2 bg-red-500 rounded-full></span>";""
            </Button>;""
;";""
            {/* Cart */};";";""
            <Button variant=ghost size="icon" className=relative>";";""
              <ShoppingCart className="h-4 w-4 />;"";"
              <span className="absolute -top-1 -right-1 h-2 w-2 bg-blue-500 rounded-full"></span>"
            </Button>
;"""
            {/* Language Selector */};;""
            <DropdownMenu>";;""
              <DropdownMenuTrigger asChild>";;"""
                <Button variant=ghost size="icon">;";""
                  <Globe className=h-4 w-4" />";"
                </Button>;"";"
              </DropdownMenuTrigger>;"";;""
              <DropdownMenuContent align="end>"
=======
            ))};""
          </nav>;"
";"
          {/* Search Bar - Desktop */}";""
          <div className=hidden lg:flex flex-1 max-w-md mx-8>"
            <form onSubmit={handleSearch} className="w-full>;"";
              <div className="relative">;"
                <Search className=absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />"
                <input";""
                  type=text";";
                  placeholder={"
                    t('search.placeholder') || 'Search marketplace...'
                  };
                  value={searchQuery}'
                  onChange={(e) => setSearchQuery(e.target.value)}'
                  className="w-full pl-10 pr-4 py-2 text-sm bg-muted/50 border border-border rounded-lg _focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                />;"
              </div>"
            </form>;"
          </div>;";"
;";"
          {/* Right Side Actions */};";"
          <div className=flex items-center space-x-4">";
            {/* Search Button - Mobile */};"";
            <Button;""
              variant="ghost;"";
              size="icon"
              className=lg:hidden""
              onClick={() => {;
                /* Toggle mobile search */;"";
              }};"";
            >;"";
              <Search className="h-4 w-4" />;
            </Button>";"
;";"
            {/* Notifications */};";";
            <Button variant="ghost" size=icon className="relative">;"
              <Bell className=h-4 w-4" />""
              <span className=absolute -top-1 -right-1 h-2 w-2 bg-red-500 rounded-full></span>";"
            </Button>;"
;";"
            {/* Cart */};"
            <Button variant=ghost size="icon" className=relative>"
              <ShoppingCart className="h-4 w-4 />;"";
              <span className="absolute -top-1 -right-1 h-2 w-2 bg-blue-500 rounded-full"></span>
            </Button>
;""
            {/* Language Selector */};"
            <DropdownMenu>";"
              <DropdownMenuTrigger asChild>";""
                <Button variant=ghost size="icon">;"
                  <Globe className=h-4 w-4" />";
                </Button>;"";
              </DropdownMenuTrigger>;""
              <DropdownMenuContent align="end>
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
                <DropdownMenuItem>English</DropdownMenuItem>;
                <DropdownMenuItem>Espaol</DropdownMenuItem>;
                <DropdownMenuItem>Franais</DropdownMenuItem>;
              </DropdownMenuContent>;
<<<<<<< HEAD
            </DropdownMenu>;

            {/* User Menu */}""
            {isAuthenticated && user ? (;""
              <DropdownMenu>;";""
                <DropdownMenuTrigger asChild>;";""
                  <Button;";""
                    variant=ghost"";;"""
                    className=flex items-center space-x-2";";"
                  >";";""
                    <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center>;"";"
                      <User className="h-4 w-4 text-white" />;";""
                    </div>;";""
                    <span className=hidden sm:block text-sm font-medium">";;"""
                      {user.name || user.email?.split('@')[0]};''
                    </span>;''
                    <ChevronDown className=h-4 w-4 />";""
                  </Button>;";""
                </DropdownMenuTrigger>;";";"
                <DropdownMenuContent align="end" className=w-56>";";""
                  <DropdownMenuItem onClick={() => router.push('/dashboard')}>;''
                    <User className="mr-2 h-4 w-4 />;"""
                    Dashboard;;"""
                  </DropdownMenuItem>;;"";"
                  <DropdownMenuItem onClick={() => router.push('/settings')}>;''
                    <Settings className=mr-2 h-4 w-4" />""
=======
            </DropdownMenu>;"
            {/* User Menu */}"
            {isAuthenticated && user ? (;"
              <DropdownMenu>;";"
                <DropdownMenuTrigger asChild>;";"
                  <Button;";"
                    variant=ghost"""
                    className=flex items-center space-x-2";";
                  >"
                    <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center>;"";
                      <User className="h-4 w-4 text-white" />;"
                    </div>;";"
                    <span className=hidden sm:block text-sm font-medium">""
                      {user.name || user.email?.split('@')[0]}'
                    </span>'
                    <ChevronDown className=h-4 w-4 />";"
                  </Button>;";"
                </DropdownMenuTrigger>;";";
                <DropdownMenuContent align="end" className=w-56>"
                  <DropdownMenuItem onClick={() => router.push('/dashboard')}>'
                    <User className="mr-2 h-4 w-4 />;""
                    Dashboard;""
                  </DropdownMenuItem>;"";
                  <DropdownMenuItem onClick={() => router.push('/settings')}>'
                    <Settings className=mr-2 h-4 w-4" />"
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
                    Settings;
                  </DropdownMenuItem>;"";"
                  <DropdownMenuSeparator />;"";"
                  <DropdownMenuItem onClick={handleLogout}>;"";"
                    <LogOut className="mr-2 h-4 w-4" />"
                    Logout
<<<<<<< HEAD
                  </DropdownMenuItem>;"""
                </DropdownMenuContent>;;""
              </DropdownMenu>";;""
            ) : !hideLogin ? (";;"""
              <div className=hidden sm:flex items-center space-x-2>";";"
                <Button";";""
                  variant="ghost;"";"
                  size="sm";";""
                  onClick={() => router.push('/auth/login')};''
                >;''
                  {t('auth.login') || 'Login'}''
                </Button>;''
                <Button;''
                  size=sm"";;"""
                  onClick={() => router.push('/signup')};''
                  className=bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700";";"
                >";";""
                  {t('auth.signup') || 'Sign Up'}''
                </Button>;
              </div>;''
            ) : null}''

            {/* Mobile Menu Button */};''
            <Button;''
              variant="ghost;"";"
              size="icon";";""
              className=md:hidden"";"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)};"""
            >;;"""
              {isMobileMenuOpen ? (;;"";"
                <X className=h-5 w-5" />";;""
              ) : (";;"""
                <Menu className=h-5 w-5 />""
              )};
            </Button>;
          </div>""
        </div>;
;"";"
        {/* Mobile Menu */};"";"
        {isMobileMenuOpen && (;"";"
          <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur">;";""
            <div className=px-4 py-4 space-y-4">";"
              {/* Mobile Search */};"";"
              <form onSubmit={handleSearch}>;"";;""
                <div className="relative>;"";"
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />;";""
                  <input;";""
                    type=text"";;""
                    placeholder={";;"""
                      t('search.placeholder') || 'Search marketplace...''
                    };
                    value={searchQuery};''
                    onChange={(e) => setSearchQuery(e.target.value)};''
                    className=w-full pl-10 pr-4 py-2 text-sm bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent""
                  />""
                </div>;
              </form>;"";"
;"";"
              {/* Mobile Navigation */};"";"
              <nav className="space-y-2">"
                {navigationItems.map((item) => (;""
                  <Link;";"
                    key={item.href}";";"
                    href={item.href}";";""
                    className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)};
                  >;
                    {item.label};
                  </Link>;
                ))}""
              </nav>;""
;";""
              {/* Mobile Auth Buttons */};";""
              {!isAuthenticated && !hideLogin && (;";""
                <div className=flex flex-col space-y-2 pt-4 border-t border-border/40">";;""
                  <Button";;"""
                    variant=outline";""
                    onClick={() => {;";""
                      setIsMobileMenuOpen(false);";";"
                      router.push('/auth/login')''
                    }};''
                  >;''
                    {t('auth.login') || 'Login'};''
                  </Button>''
                  <Button;
                    onClick={() => {;''
                      setIsMobileMenuOpen(false);''
                      router.push('/signup');''
                    }};''
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700";";""
                  >;";"""
                    {t('auth.signup') || 'Sign Up'}''
=======
                  </DropdownMenuItem>;""
                </DropdownMenuContent>;"
              </DropdownMenu>";"
            ) : !hideLogin ? (";""
              <div className=hidden sm:flex items-center space-x-2>";";
                <Button"
                  variant="ghost;"";
                  size="sm"
                  onClick={() => router.push('/auth/login')}'
                >'
                  {t('auth.login') || 'Login'}'
                </Button>'
                <Button'
                  size=sm"""
                  onClick={() => router.push('/signup')}'
                  className=bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700";";
                >"
                  {t('auth.signup') || 'Sign Up'}'
                </Button>;
              </div>'
            ) : null}'

            {/* Mobile Menu Button */}'
            <Button'
              variant="ghost;"";
              size="icon"
              className=md:hidden"";
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)};""
            >;""
              {isMobileMenuOpen ? (;"";
                <X className=h-5 w-5" />"
              ) : (";""
                <Menu className=h-5 w-5 />"
              )};
            </Button>;
          </div>"
        </div>;"";
        {/* Mobile Menu */};"";
        {isMobileMenuOpen && (;"";
          <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur">;"
            <div className=px-4 py-4 space-y-4">";
              {/* Mobile Search */};"";
              <form onSubmit={handleSearch}>;""
                <div className="relative>;"";
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />;"
                  <input;";"
                    type=text""
                    placeholder={";""
                      t('search.placeholder') || 'Search marketplace...'
                    };
                    value={searchQuery}'
                    onChange={(e) => setSearchQuery(e.target.value)}'
                    className=w-full pl-10 pr-4 py-2 text-sm bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />"
                </div>;
              </form>;"";"";
              {/* Mobile Navigation */};"";
              <nav className="space-y-2">
                {navigationItems.map((item) => (;"
                  <Link;";
                    key={item.href}";";
                    href={item.href}"
                    className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors
                    onClick={() => setIsMobileMenuOpen(false)};
                  >;
                    {item.label};
                  </Link>;"
                ))}"
              </nav>;"
;";"
              {/* Mobile Auth Buttons */};";"
              {!isAuthenticated && !hideLogin && (;";"
                <div className=flex flex-col space-y-2 pt-4 border-t border-border/40">"
                  <Button";""
                    variant=outline";"
                    onClick={() => {;";"
                      setIsMobileMenuOpen(false);";";
                      router.push('/auth/login')'
                    }}'
                  >'
                    {t('auth.login') || 'Login'}'
                  </Button>'
                  <Button;
                    onClick={() => {'
                      setIsMobileMenuOpen(false)'
                      router.push('/signup')'
                    }}'
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >;";""
                    {t('auth.signup') || 'Sign Up'}'
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
                  </Button>;
                </div>;
              )};
            </div>;
          </div>;
        )};
<<<<<<< HEAD
      </div>;''
    </header>''
  );
};

};''

}''
}''
=======
      </div>'
    </header>'
  );
};

}'

}'`
}'';;`
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
`