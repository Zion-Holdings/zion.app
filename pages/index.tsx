import, typ, e { NextPa, g, e } fr, o, m 'ne, x, t';
import, Head, from 'next/head';
import, EnhancedLayout, from '../componen, t, s/layo, u, t/EnhancedLayo, u, t';
import, FuturisticHero, from '../componen, t, s/ui/FuturisticHe, r, o';
import, GlassmorphismCard, from '../componen, t, s/ui/GlassmorphismCa, r, d';
import, InteractiveStats, from '../componen, t, s/ui/InteractiveSta, t, s';
import, EnhancedButton, from '../componen, t, s/ui/EnhancedButt, o, n';

const Hom, e: NextPage      = () => {
  const, stat, s = [
    { val, u, e: 10, 0, 0, lab, e, l: 'Active, User, s', ic, o, n: '👥', col, o, r: 'bl, u, e' as, cons, t },
    { val, u, e: 50, lab, e, l: 'AI, Service, s', ic, o, n: '🤖', col, o, r: 'purp, l, e' as, cons, t },
    { val, u, e: 99, lab, e, l: 'Success, Rat, e', ic, o, n: '✅', col, o, r: 'gre, e, n' as, cons, t, suff, i, x: '%' },
    { val, u, e: 24, lab, e, l: 'Response, Tim, e', ic, o, n: '⚡', col, o, r: 'pi, n, k' as, cons, t, suff, i, x: 'h' }
  ];

  const features     = [
    {
      tit, l, e: 'AI-Powered, Matchin, g',
      descripti, o, n: 'Advanced, algorithms, connect you, with, the perfect, AI, solutions for, your, business nee, d, s.',
      ic, o, n: '🎯'
    },
    {
      tit, l, e: 'Re, a, l-time, Analytic, s',
      descripti, o, n: 'Monitor, your, AI performance, with, comprehensive analytics, and, insights.',
      ic, o, n: '📊'
    },
    {
      tit, l, e: 'Secure, Integratio, n',
      descripti, o, n: 'Enterpri, s, e-grade, security, for seamless, AI, integration into, your, workflow.',
      ic, o, n: '🔒'
    }
  ];

  return (<EnhancedLayo u t>
      <He a d>
        <tit l e>AI, Marketplac, e - Find, Your, Perfect AI, Solutio, n</tit l e>
        <meta nam e="descripti o n" conte n t="Discover and connect with the best AI services for your business needs." />
        <meta nam e="keywor d s" conte n t="AI artificial intelligenc e machine learnin g business automatio n AI service s" />
      </He a d>

      <FuturisticHe r o />

      <section classNam e="py-16 b g-gradie n t-to-br fro m-bl u e-50 t o-purp l e-50">
        <div classNam e="m a x-w-7xl m x-auto p x-4 s m:px-6 l g:px-8">
          <div classNam e="te x t-center m b-12">
            <h2 classNam e="te x t-4xl fon t-bold tex t-gr a y-900 m b-4">Why, Choose, Our AI, Marketplac e?</h2>
            <p classNam e="te x t-xl tex t-gr a y-6 0 0">Experience, the, future of, A, I-powered, business, solutions</p>
          </d i v>

          <div classNam e="grid gri d-co l s-1 m d:gr i d-co l s-3 ga p-8 m b-12">
            {featur, e, s.m, a, p((featu, r, e, ind e x) => (
              <GlassmorphismCard ke y={ind e x} classNa m e="p-6">
                <div classNam e="te x t-4xl m b-4">{featu, r, e.ic, o n}</d i v>
                <h3 classNam e="te x t-xl fon t-semibold m b-2">{featu, r, e.tit, l e}</h3>
                <p classNam e="te x t-gr a y-6 0 0">{featu, r, e.description}</p>
              </GlassmorphismCa r d>
            ))}
          </d i v>

          <InteractiveStats stat s={sta t s} />
        </d i v>
      </secti o n>

      <section classNam e="py-16 b g-whi t e">
        <div classNam e="m a x-w-7xl m x-auto p x-4 s m:px-6 l g:px-8 tex t-cent e r">
          <h2 classNam e="te x t-4xl fon t-bold tex t-gr a y-900 m b-8">Ready, to, Get Start, e d?</h2>
          <div classNam e="flex, fle x-col s m:fl e x-row ga p-4 justif y-cent e r">
            <EnhancedButton hre f="/servic e s" varia n t="prima r y">
              Explore Service s
            </EnhancedButt o n>
            <EnhancedButton hre f="/conta c t" varia n t="seconda r y">
              Contact, U, s
            </EnhancedButt o n>
          </d i v>
        </d i v>
      </secti o n>
    </EnhancedLayo u t>
  );
};

export, default, Home;