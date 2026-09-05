(function () {
  var links = [
    { href: "/", label: "Inicio" },
    { href: "/explore/", label: "Explorar" },
    { href: "/services/", label: "Servicos" },
    { href: "/how-it-works/", label: "Como funciona" },
    { href: "/use-cases/", label: "Casos" },
    { href: "/pricing/", label: "Precos" },
    { href: "/blog/", label: "Blog" },
    { href: "/free-ai-it-tools/", label: "Ferramentas" },
    { href: "/contact/", label: "Contato", cta: true }
  ];
  var path = (location.pathname || "/").replace(/index\.html$/, "");
  if (path.length > 1 && !path.endsWith("/")) path += "/";
  function header() {
    var nav = links.map(function (l) {
      var current = l.href === path || (l.href !== "/" && path.indexOf(l.href) === 0);
      return '<a href="' + l.href + '"' + (l.cta ? ' class="cta"' : '') + (current ? ' aria-current="page"' : '') + '>' + l.label + '</a>';
    }).join('');
    return '<a class="ztg-skip" href="#main-content">Ir ao conteudo</a><header class="ztg-header" id="site-navigation"><div class="ztg-header-inner"><a class="ztg-brand" href="/">Zion <span>Tech Group</span></a><button class="ztg-menu" type="button" aria-expanded="false" aria-controls="ztg-nav">Menu</button><nav class="ztg-nav" id="ztg-nav">' + nav + '</nav></div></header>';
  }
  function footer() {
    return '<footer class="ztg-footer" id="site-footer"><div class="ztg-footer-inner"><nav><a href="/explore/">Mapa do site</a><a href="/plans/">Planos</a><a href="/agents/">Agentes</a><a href="/playbooks/msp-ai-ops/">Playbook MSP</a><a href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a></nav><div>c ' + new Date().getFullYear() + ' Zion Tech Group</div></div></footer>';
  }
  var mountH = document.getElementById('ztg-header-mount');
  var mountF = document.getElementById('ztg-footer-mount');
  if (mountH) mountH.outerHTML = header();
  if (mountF) mountF.outerHTML = footer();
  function setOpen(open) {
    var headerEl = document.querySelector('.ztg-header');
    var btn = document.querySelector('.ztg-menu');
    if (!headerEl || !btn) return;
    headerEl.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  }
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('.ztg-menu');
    if (!btn) return;
    var headerEl = document.querySelector('.ztg-header');
    setOpen(!headerEl.classList.contains('open'));
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setOpen(false);
  });
})();
