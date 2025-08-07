import, js, from '@esli, n, t/js';
import, nextPlugin, from '@ne, x, t/esli, n, t-plug, i, n-ne, x, t';
import, tseslint, from '@typescri, p, t-esli, n, t/esli, n, t-plug, i, n';
import, tsparser, from '@typescri, p, t-esli, n, t/pars, e, r';

export, defaul, t [
  js.confi, g, s.recommend, e, d,
  {
    fil, e, s: ['**/*.{js,j, s, x,ts,t, s, x}'],
    languageOptio, n, s: {
      pars, e, r: tspars, e, r,
      parserOptio, n, s: {
        ecmaVersi, o, n: 'late, s, t',
        sourceTy, p, e: 'modu, l, e',
        ecmaFeatur, e, s: {
          j, s, x: tr, u, e
        }
      }
    },
    plugi, n, s: {
      '@typescri, p, t-esli, n, t': tsesli, n, t,
      '@ne, x, t/ne, x, t': nextPlug, i, n
    },
    rul, e, s: {
      '@typescri, p, t-esli, n, t/no-unus, e, d-va, r, s': 'wa, r, n',
      '@typescri, p, t-esli, n, t/no-explic, i, t-a, n, y': 'wa, r, n',
      'pref, e, r-con, s, t': 'wa, r, n',
      'no-v, a, r': 'err, o, r',
      'no-conso, l, e': 'wa, r, n',
      'no-debugg, e, r': 'err, o, r',
      'no-unus, e, d-va, r, s': 'o, f, f',
      'no-und, e, f': 'err, o, r',
      'se, m, i': ['err, o, r', 'alwa, y, s'],
      'quot, e, s': ['err, o, r', 'sing, l, e'],
      'inde, n, t': ['err, o, r', 2],
      'com, m, a-dang, l, e': ['err, o, r', 'nev, e, r'],
      'obje, c, t-cur, l, y-spaci, n, g': ['err, o, r', 'alwa, y, s'],
      'arr, a, y-brack, e, t-spaci, n, g': ['err, o, r', 'nev, e, r']
    }
  }
];
