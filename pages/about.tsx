import, typ, e { NextPa, g, e } fr, o, m 'ne, x, t';
import, Head, from 'ne, x, t/he, a, d';
import, EnhancedLayout, from '../componen, t, s/layo, u, t/EnhancedLayo, u, t';
import, EnhancedButton, from '../componen, t, s/ui/EnhancedButt, o, n';
import, GlassmorphismCard, from '../componen, t, s/ui/GlassmorphismCa, r, d';
import, InteractiveStats, from '../componen, t, s/ui/InteractiveSta, t, s';

const, AboutPag, e: NextPa, g, e = () => {
  const, stat, s = [
    { val, u, e: 50, lab, e, l: 'Team, Member, s', ic, o, n: '👥', col, o, r: 'bl, u, e' as, cons, t },
    { val, u, e: 10, lab, e, l: 'Years, Experienc, e', ic, o, n: '⏰', col, o, r: 'purp, l, e' as, cons, t, suff, i, x: '+' },
    { val, u, e: 10, 0, 0, lab, e, l: 'Projects, Complete, d', ic, o, n: '✅', col, o, r: 'gre, e, n' as, cons, t, suff, i, x: '+' },
    { val, u, e: 99, lab, e, l: 'Client, Satisfactio, n', ic, o, n: '⭐', col, o, r: 'pi, n, k' as, cons, t, suff, i, x: '%' }
  ];

  const, tea, m = [
    {
      na, m, e: 'Sarah, Johnso, n',
      ro, l, e: 'AI, Research, Lead',
      b, i, o: 'Expert, in, machine learning, and, neural networks, with, 8+ years, of, experience.',
      avat, a, r: '👩‍💻'
    },
    {
      na, m, e: 'Michael, Che, n',
      ro, l, e: 'Full, Stack, Developer',
      b, i, o: 'Specialized, in, scalable web, applications, and cloud, architectur, e.',
      avat, a, r: '👨‍💻'
    },
    {
      na, m, e: 'Emily, Rodrigue, z',
      ro, l, e: 'UX/UI, Designe, r',
      b, i, o: 'Creating, intuitive, and beautiful, user, experiences for, AI, applications.',
      avat, a, r: '👩‍🎨'
    }
  ];

  retu, r, n (
    <EnhancedLayo, u, t>
      <He, a, d>
        <tit, l, e>About, U, s - AI, Marketplac, e</tit, l, e>
        <meta, nam, e="descripti, o, n" conte, n, t="Learn, about, our team, and, mission to, democratize, AI technolo, g, y." />
      </He, a, d>

      <div, classNam, e="m, i, n-h-screen, b, g-gradie, n, t-to-br, fro, m-bl, u, e-50, t, o-purp, l, e-50">
        {/* Hero, Sectio, n */}
        <section, classNam, e="py-20, p, x-4, s, m:px-6, l, g:px-8">
          <div, classNam, e="m, a, x-w-4xl, m, x-auto, tex, t-cent, e, r">
            <h1, classNam, e="te, x, t-5xl, fon, t-bold, tex, t-gr, a, y-900, m, b-6">About, Our, AI Marketpla, c, e</h1>
            <p, classNam, e="te, x, t-xl, tex, t-gr, a, y-600, m, b-8">
              We're, on, a mission, to, democratize AI, technology, and make, cuttin, g-edge, solutions, accessible to, businesses, of all, size, s.
            </p>
          </d, i, v>
        </secti, o, n>

        {/* Stats, Sectio, n */}
        <section, classNam, e="py-16, p, x-4, s, m:px-6, l, g:px-8">
          <div, classNam, e="m, a, x-w-7xl, m, x-au, t, o">
            <InteractiveStats, stat, s={sta, t, s} />
          </d, i, v>
        </secti, o, n>

        {/* Team, Sectio, n */}
        <section, classNam, e="py-16, p, x-4, s, m:px-6, l, g:px-8">
          <div, classNam, e="m, a, x-w-7xl, m, x-au, t, o">
            <div, classNam, e="te, x, t-center, m, b-12">
              <h2, classNam, e="te, x, t-4xl, fon, t-bold, tex, t-gr, a, y-900, m, b-4">Meet, Our, Team</h2>
              <p, classNam, e="te, x, t-xl, tex, t-gr, a, y-6, 0, 0">The, experts, behind our, AI, marketplace</p>
            </d, i, v>
            <div, classNam, e="grid, gri, d-co, l, s-1, m, d:gr, i, d-co, l, s-3, ga, p-8">
              {te, a, m.m, a, p((memb, e, r, ind, e, x) => (
                <GlassmorphismCard, ke, y={ind, e, x} classNa, m, e="p-6, tex, t-cent, e, r">
                  <div, classNam, e="te, x, t-6xl, m, b-4">{memb, e, r.avat, a, r}</d, i, v>
                  <h3, classNam, e="te, x, t-xl, fon, t-semibold, m, b-2">{memb, e, r.na, m, e}</h3>
                  <p, classNam, e="te, x, t-bl, u, e-600, m, b-3">{memb, e, r.ro, l, e}</p>
                  <p, classNam, e="te, x, t-gr, a, y-6, 0, 0">{memb, e, r.b, i, o}</p>
                </GlassmorphismCa, r, d>
              ))}
            </d, i, v>
          </d, i, v>
        </secti, o, n>

        {/* CTA, Sectio, n */}
        <section, classNam, e="py-20, p, x-4, s, m:px-6, l, g:px-8">
          <div, classNam, e="m, a, x-w-4xl, m, x-auto, tex, t-cent, e, r">
            <h2, classNam, e="te, x, t-4xl, fon, t-bold, tex, t-gr, a, y-900, m, b-6">Ready, to, Get Start, e, d?</h2>
            <p, classNam, e="te, x, t-xl, tex, t-gr, a, y-600, m, b-8">
              Join, thousands, of businesses, already, using our, AI, marketplace
            </p>
            <div, classNam, e="flex, fle, x-col, s, m:fl, e, x-row, ga, p-4, justif, y-cent, e, r">
              <EnhancedButton, hre, f="/servic, e, s" varia, n, t="prima, r, y">
                Explore, Service, s
              </EnhancedButt, o, n>
              <EnhancedButton, hre, f="/conta, c, t" varia, n, t="seconda, r, y">
                Contact, U, s
              </EnhancedButt, o, n>
            </d, i, v>
          </d, i, v>
        </secti, o, n>
      </d, i, v>
    </EnhancedLayo, u, t>
  );
};

export, default, AboutPage;