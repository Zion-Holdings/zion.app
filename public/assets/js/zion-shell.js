/* Zion Family A chrome — inject shared nav/footer when a page is missing them. */
(function () {
  if (window.__zionShell) return;
  window.__zionShell = true;

  function ensureCss() {
    if ([].some.call(document.querySelectorAll('link[rel="stylesheet"]'), function (l) {
      return /\/assets\/css\/site\.css/.test(l.getAttribute('href') || '');
    })) return;
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/assets/css/site.css';
    document.head.appendChild(link);
  }

  var HEADER = '<a class="skip" href="#conteudo">Ir para o conteúdo</a>' +
    '<header class="nav"><div class="wrap navin">' +
    '<a class="brand" href="/">Zion Tech Group</a>' +
    '<button class="menu" aria-label="Abrir menu" onclick="document.querySelector(\'.links\').classList.toggle(\'open\')">☰</button>' +
    '<nav class="links" aria-label="Principal">' +
    '<a href="/services/">Serviços</a><a href="/plans/">Planos</a><a href="/agents/">Agentes</a>' +
    '<a href="/resources/">Recursos</a><a href="/blog/">Blog</a><a href="/contact/">Contato</a>' +
    '<a class="cta" href="/discovery/">Discovery $99</a>' +
    '</nav></div></header>';

  var FOOTER = '<footer><div class="wrap foot">' +
    '<div><h3>Empresa</h3><a href="/about/">Sobre</a><a href="/partners/">Parceiros</a><a href="/contact/">Contato</a></div>' +
    '<div><h3>Oferta</h3><a href="/plans/">Planos</a><a href="/discovery/">Discovery $99</a><a href="/cpa/">CPA</a></div>' +
    '<div><h3>Recursos</h3><a href="/blog/">Blog</a><a href="/resources/">Recursos</a><a href="/whatsapp/">WhatsApp</a></div>' +
    '<div><h3>Legal</h3><a href="/privacy/">Privacidade</a><a href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a></div>' +
    '</div></footer>';

  function hideLegacyChrome() {
    var sels = ['nav.top', 'header#site-navigation', '#site-navigation'];
    for (var i = 0; i < sels.length; i++) {
      [].forEach.call(document.querySelectorAll(sels[i]), function (n) {
        n.setAttribute('hidden', '');
        n.style.display = 'none';
      });
    }
  }

  function inject() {
    ensureCss();
    hideLegacyChrome();
    if (!document.querySelector('header.nav')) {
      document.body.insertAdjacentHTML('afterbegin', HEADER);
    }
    if (!document.querySelector('footer .foot')) {
      [].forEach.call(document.querySelectorAll('footer'), function (f) {
        f.setAttribute('hidden', '');
        f.style.display = 'none';
      });
      document.body.insertAdjacentHTML('beforeend', FOOTER);
    }
    var mains = document.querySelectorAll('main');
    if (mains.length && !document.getElementById('conteudo')) {
      mains[0].id = 'conteudo';
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();
