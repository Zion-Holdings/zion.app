#!/usr/bin/env python3
"""Apply second visual-QA pass: aliases, thank-you, first-paint CSS, Discovery CTAs."""
from __future__ import annotations

import pathlib
import re
import shutil

ROOT = pathlib.Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"
SITE_CSS = (PUBLIC / "assets/css/site.css").read_text(encoding="utf-8")
STYLE_MARK = "<!-- qa-pass2-inline-site-css -->"

SKIP_LANDINGS = {
    "managed-it-services",
    "finops-consulting",
    "fintech-it-ai",
    "autonomous-ai-agents",
    "healthcare-it-hipaa",
    "ai-consulting-services",
    "agents",
}

CHROME_PAGES = [
    "contact/index.html",
    "contato/index.html",
    "about/index.html",
    "booking/index.html",
    "plans/index.html",
    "success-stories/index.html",
    "privacidade/index.html",
    "privacy/index.html",
    "pricing/index.html",
    "diagnostico/index.html",
    "inicio/index.html",
    "catalogo/index.html",
    "academy/index.html",
    "checkout/index.html",
    "como-trabalhamos/index.html",
    "resources/index.html",
    "telegram/index.html",
    "indique/index.html",
    "cookie-policy/index.html",
    "solutions/index.html",
    "solutions.html",
    "ai-services/index.html",
    "ai-services.html",
    "cpa/index.html",
    "partners/index.html",
    "services/index.html",
    "free-ai-it-tools/index.html",
    "roteiros/index.html",
    "para/index.html",
    "referral/index.html",
    "whatsapp/index.html",
]


def inline_site_css(html: str) -> str:
    if STYLE_MARK in html:
        return html
    block = f'<style>{STYLE_MARK}\n{SITE_CSS}\n</style>'
    link = '<link rel="stylesheet" href="/assets/css/site.css">'
    preload = '<link rel="preload" href="/assets/css/site.css" as="style">'
    if link in html:
        html = html.replace(link, preload + "\n" + link + "\n" + block, 1)
        return html
    # Already has other styles; still inject before </head>
    html = html.replace("</head>", block + "\n</head>", 1)
    return html


BOOK_REDIRECT = """<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Redirecionando para /booking/ · Zion Tech Group</title>
<link rel="canonical" href="https://ziontechgroup.com/booking/">
<meta name="robots" content="noindex,follow">
<meta http-equiv="refresh" content="0;url=/booking/">
<style>
body{margin:0;background:#070b16;color:#f4f7ff;font:16px/1.65 system-ui,-apple-system,sans-serif;padding:48px 24px}
a{color:#22d3ee}
</style>
<script>location.replace("/booking/" + location.search + location.hash);</script>
</head>
<body>
<p>Esta página agora é <a href="/booking/">/booking/</a>.</p>
<p>Discovery $99: <a href="/discovery/">/discovery/</a></p>
</body>
</html>
"""

SUCCESS_HTML = """<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Pagamento recebido · Discovery · Zion Tech Group</title>
<meta name="description" content="Recebemos o pagamento do Discovery. Agende a sessão de 30 minutos no Calendly ou fale no WhatsApp.">
<link rel="canonical" href="https://ziontechgroup.com/success-stories/">
<meta name="robots" content="noindex,follow">
<link rel="preload" href="/assets/css/site.css" as="style">
<link rel="stylesheet" href="/assets/css/site.css">
<style><!-- qa-pass2-inline-site-css -->
__SITE_CSS__
</style>
<style>
.thanks{padding:28px;border-radius:16px;border:1px solid rgba(34,211,238,.45);background:linear-gradient(160deg,#101a31,#0c1222);margin:28px 0}
.thanks h1{margin-top:8px}
</style>
</head>
<body>
<a class="skip" href="#conteudo">Ir para o conteúdo</a>
<header class="nav">
  <div class="wrap navin">
    <a class="brand" href="/">Zion Tech Group</a>
    <button class="menu" aria-label="Abrir menu" onclick="document.querySelector('.links').classList.toggle('open')">☰</button>
    <nav class="links" aria-label="Principal">
      <a href="/services/">Serviços</a>
      <a href="/plans/">Planos</a>
      <a href="/discovery/">Discovery $99</a>
      <a href="/contact/">Contato</a>
      <a class="cta" href="https://calendly.com/kleber-ziontechgroup/zion-tech-group-ai-it-discovery-1" target="_blank" rel="noopener">Agendar sessão</a>
    </nav>
  </div>
</header>
<main id="conteudo" class="section">
  <div class="wrap">
    <p class="eyebrow">Obrigado</p>
    <article class="thanks">
      <p class="eyebrow">Discovery</p>
      <h1>Pagamento recebido. Obrigado.</h1>
      <p class="lead">Confirmamos o Discovery $99. Próximo passo: sessão de 30 minutos no Calendly — ou WhatsApp se preferir invoice.</p>
      <div class="actions">
        <a class="btn" href="https://calendly.com/kleber-ziontechgroup/zion-tech-group-ai-it-discovery-1" target="_blank" rel="noopener">Agendar no Calendly</a>
        <a class="btn alt" href="https://wa.me/13024640950?text=Paguei%20o%20Discovery" target="_blank" rel="noopener">WhatsApp</a>
        <a class="btn alt" href="/contact/">Contato</a>
      </div>
    </article>
    <p class="lead">Sem pagamento ainda? <a href="/discovery/">Pagar Discovery $99</a> · <a href="/booking/">Ver opções de sessão</a></p>
  </div>
</main>
<footer>
  <div class="wrap">© 2026 Zion Tech Group · 364 E Main St STE 1008, Middletown, DE 19709 · <a href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a> · +1 302 464 0950</div>
</footer>
</body>
</html>
""".replace("__SITE_CSS__", SITE_CSS)

PRIVACY_HTML = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Privacy · Zion Tech Group</title>
<meta name="description" content="Privacy policy for Zion Tech Group. B2B outreach under legitimate interest. Reply STOP to opt out.">
<link rel="canonical" href="https://ziontechgroup.com/privacy/">
<link rel="alternate" hreflang="en" href="https://ziontechgroup.com/privacy/">
<link rel="alternate" hreflang="pt-BR" href="https://ziontechgroup.com/privacidade/">
<meta name="robots" content="index,follow">
<link rel="preload" href="/assets/css/site.css" as="style">
<link rel="stylesheet" href="/assets/css/site.css">
<style><!-- qa-pass2-inline-site-css -->
__SITE_CSS__
</style>
</head>
<body>
<a class="skip" href="#conteudo">Skip to content</a>
<header class="nav">
  <div class="wrap navin">
    <a class="brand" href="/">Zion Tech Group</a>
    <button class="menu" aria-label="Open menu" onclick="document.querySelector('.links').classList.toggle('open')">☰</button>
    <nav class="links" aria-label="Primary">
      <a href="/services/">Services</a>
      <a href="/plans/">Plans</a>
      <a href="/contact/">Contact</a>
      <a class="cta" href="/discovery/">Discovery $99</a>
    </nav>
  </div>
</header>
<main id="conteudo" class="section">
  <div class="wrap">
    <p class="eyebrow">Legal</p>
    <h1>Privacy</h1>
    <p class="lead">Controller: Zion Tech Group · 364 E Main St STE 1008, Middletown, DE 19709 · USA. Contact: <a href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a> · +1 302 464 0950. Português: <a href="/privacidade/">/privacidade/</a>.</p>
    <article class="card featured">
      <h3>B2B outreach</h3>
      <p>We process name, title, work email, company, and the public source URL under legitimate interest (LGPD art. 7 IX) and CAN-SPAM for US recipients. We do not buy or sell lists. Opt out: reply <strong>STOP</strong> (US) or <strong>SAIR</strong> (Brazil). Retention: 12 months without a commercial relationship.</p>
    </article>
    <div class="grid" style="margin-top:24px">
      <article class="card"><h3>What we collect</h3><p>Data you send in forms, bookings, and email; and, for B2B outreach, corporate data published on contact pages.</p></article>
      <article class="card"><h3>How we use it</h3><p>To deliver AI and IT services, answer proposals, and talk about Discovery $99 or a 30-minute session.</p></article>
      <article class="card"><h3>Sharing</h3><p>We do not sell personal data. Email, calendar, and CRM providers only when needed to operate.</p></article>
      <article class="card"><h3>Your rights</h3><p>Access, correction, objection, and deletion. Email kleber@ziontechgroup.com with subject STOP or SAIR.</p></article>
    </div>
  </div>
</main>
<footer><div class="wrap">© 2026 Zion Tech Group · <a href="/privacidade/">Privacidade (PT)</a> · kleber@ziontechgroup.com</div></footer>
</body>
</html>
""".replace("__SITE_CSS__", SITE_CSS)

COOKIE_HTML = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Cookie policy · Zion Tech Group</title>
<link rel="canonical" href="https://ziontechgroup.com/cookie-policy/">
<meta name="robots" content="index,follow">
<link rel="preload" href="/assets/css/site.css" as="style">
<link rel="stylesheet" href="/assets/css/site.css">
<style><!-- qa-pass2-inline-site-css -->
__SITE_CSS__
</style>
</head>
<body>
<a class="skip" href="#conteudo">Skip to content</a>
<header class="nav">
  <div class="wrap navin">
    <a class="brand" href="/">Zion Tech Group</a>
    <nav class="links" aria-label="Primary">
      <a href="/plans/">Plans</a>
      <a href="/privacy/">Privacy</a>
      <a class="cta" href="/contact/">Contact</a>
    </nav>
  </div>
</header>
<main id="conteudo" class="section">
  <div class="wrap">
    <p class="eyebrow">Legal</p>
    <h1>Cookies</h1>
    <p class="lead">This site uses essential cookies for hosting and, when you consent, analytics to understand page use. We do not sell cookie data. Full policy: <a href="/privacy/">/privacy/</a>.</p>
    <p><a class="btn" href="/privacy/">Privacy</a> <a class="btn alt" href="/contact/">Contact</a></p>
  </div>
</main>
<footer><div class="wrap">© 2026 Zion Tech Group · kleber@ziontechgroup.com</div></footer>
</body>
</html>
""".replace("__SITE_CSS__", SITE_CSS)


def rewrite_book_hrefs(text: str) -> str:
    def repl(match: re.Match[str]) -> str:
        before = text[max(0, match.start() - 180) : match.start()]
        after = text[match.end() : match.end() + 80]
        ctx = (before + after).lower()
        if any(token in ctx for token in ("discovery", "$99", "book $99", "agendar $99")):
            return '/discovery/'
        return '/booking/'

    return re.sub(r'(?<=href=["\'])/book/', repl, text)


def patch_booking(html: str) -> str:
    if 'id="paid-banner"' in html:
        return html
    banner = """
    <article id="paid-banner" hidden class="card featured" style="margin-bottom:24px">
      <h3>Pagamento recebido. Obrigado.</h3>
      <p>Discovery $99 confirmado. Agende a sessão de 30 minutos.</p>
      <p><a class="btn" href="https://calendly.com/kleber-ziontechgroup/zion-tech-group-ai-it-discovery-1" target="_blank" rel="noopener">Agendar no Calendly</a>
      <a class="btn alt" href="https://wa.me/13024640950?text=Paguei%20o%20Discovery" target="_blank" rel="noopener">WhatsApp</a></p>
    </article>
"""
    html = html.replace('<p class="eyebrow">Agendar</p>', banner + '    <p class="eyebrow">Agendar</p>', 1)
    script = """
<script>
(function () {
  try {
    var paid = new URLSearchParams(location.search).get("paid");
    if (paid === "discovery") {
      var el = document.getElementById("paid-banner");
      if (el) el.hidden = false;
    }
  } catch (e) {}
})();
</script>
"""
    html = html.replace("</body>", script + "</body>", 1)
    return html


def patch_redirects(path: pathlib.Path) -> None:
    extra = """
# QA pass 2 — durable aliases (Cloudflare / Netlify). GitHub Pages uses the HTML files.
/book /booking/ 301
/book/ /booking/ 301
/success-stories /success-stories/index.html 200
/success-stories/ /success-stories/index.html 200
/privacy /privacy/index.html 200
/privacy/ /privacy/index.html 200
/cookie-policy /cookie-policy/index.html 200
/cookie-policy/ /cookie-policy/index.html 200
/contact /contact/index.html 200
/contact/ /contact/index.html 200
/plans /plans/index.html 200
/plans/ /plans/index.html 200
"""
    text = path.read_text(encoding="utf-8")
    if "/book /booking/ 301" in text:
        return
    path.write_text(text.rstrip() + extra, encoding="utf-8")


def main() -> None:
    # 1) Durable /book/ redirect + no-slash alias
    (PUBLIC / "book").mkdir(parents=True, exist_ok=True)
    (PUBLIC / "book/index.html").write_text(BOOK_REDIRECT, encoding="utf-8")
    (PUBLIC / "book.html").write_text(BOOK_REDIRECT, encoding="utf-8")

    # 2) Styled thank-you + no-slash alias
    (PUBLIC / "success-stories").mkdir(parents=True, exist_ok=True)
    (PUBLIC / "success-stories/index.html").write_text(SUCCESS_HTML, encoding="utf-8")
    (PUBLIC / "success-stories.html").write_text(SUCCESS_HTML, encoding="utf-8")

    # 3) Privacy / cookie-policy so Next leftovers never win
    (PUBLIC / "privacy").mkdir(parents=True, exist_ok=True)
    (PUBLIC / "privacy/index.html").write_text(PRIVACY_HTML, encoding="utf-8")
    (PUBLIC / "cookie-policy").mkdir(parents=True, exist_ok=True)
    (PUBLIC / "cookie-policy/index.html").write_text(COOKIE_HTML, encoding="utf-8")

    # 4) Shared CSS copies — first paint should not depend on one path
    css_dir = PUBLIC / "css"
    css_dir.mkdir(parents=True, exist_ok=True)
    (css_dir / "site.css").write_text(SITE_CSS, encoding="utf-8")
    style_css = css_dir / "style.css"
    existing_extra = ""
    if style_css.exists():
        old = style_css.read_text(encoding="utf-8")
        extra = re.sub(r'@import url\("/assets/css/site\.css"\);\s*', "", old)
        existing_extra = extra.strip()
    style_css.write_text(SITE_CSS + ("\n" + existing_extra + "\n" if existing_extra else "\n"), encoding="utf-8")

    # 5) Inline chrome CSS on shared pages
    for rel in CHROME_PAGES:
        path = PUBLIC / rel
        if not path.exists():
            continue
        parts = pathlib.Path(rel).parts
        if parts and parts[0] in SKIP_LANDINGS:
            continue
        html = path.read_text(encoding="utf-8")
        html = inline_site_css(html)
        if rel == "booking/index.html":
            html = patch_booking(html)
        path.write_text(html, encoding="utf-8")

    # 6) Services Book $99 → /discovery/
    services = PUBLIC / "services/index.html"
    html = services.read_text(encoding="utf-8")
    html = html.replace('<a href="/booking/">Book $99</a>', '<a href="/discovery/">Book $99</a>', 1)
    html = html.replace('<a class="btn" href="/booking/">Book $99 Discovery</a>', '<a class="btn" href="/discovery/">Book $99 Discovery</a>', 1)
    services.write_text(html, encoding="utf-8")

    # 7) Leftover /book/ hrefs (never touch named landings)
    for path in PUBLIC.rglob("*.html"):
        rel = path.relative_to(PUBLIC).as_posix()
        top = rel.split("/", 1)[0]
        if top in SKIP_LANDINGS:
            continue
        text = path.read_text(encoding="utf-8", errors="ignore")
        if "/book/" not in text:
            continue
        new = rewrite_book_hrefs(text)
        if new != text:
            path.write_text(new, encoding="utf-8")

    # 8) Redirect tables
    for redirects in (PUBLIC / "_redirects", ROOT / "_redirects"):
        if redirects.exists():
            patch_redirects(redirects)

    # 9) Sitemap entry for thank-you (optional crawl)
    sm = PUBLIC / "sitemap-0.xml"
    if sm.exists():
        xml = sm.read_text(encoding="utf-8")
        if "success-stories" not in xml:
            xml = xml.replace(
                "</urlset>",
                "<url><loc>https://ziontechgroup.com/success-stories/</loc><lastmod>2026-09-05T00:00:00.000Z</lastmod><changefreq>monthly</changefreq><priority>0.4</priority></url>\n</urlset>",
                1,
            )
            sm.write_text(xml, encoding="utf-8")

    print("qa-pass2 applied")


if __name__ == "__main__":
    main()
