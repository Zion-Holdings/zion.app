import Link from 'next/link';
import { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const ref = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let raf = 0;
    const dpr = Math.max(1, window.devicePixelRatio || 1);
    const resize = () => {
      canvas.width = canvas.clientWidth * dpr;
      canvas.height = canvas.clientHeight * dpr;
    };
    const nodes = Array.from({ length: 60 }).map((_, i) => ({
      x: Math.random() * 1,
      y: Math.random() * 1,
      vx: (Math.random() - 0.5) * 0.0007,
      vy: (Math.random() - 0.5) * 0.0007,
    }));
    const draw = (t: number) => {
      if (!ctx) return;
      const w = canvas.width, h = canvas.height;
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = 'rgba(99,102,241,0.08)';
      ctx.fillRect(0, 0, w, h);
      // subtle grid glow
      ctx.strokeStyle = 'rgba(99,102,241,0.08)';
      for (let i = 0; i < 8; i++) {
        const y = Math.floor((i + ((t/7000)%1)) * h / 8);
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
      }
      // nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > 1) n.vx *= -1;
        if (n.y < 0 || n.y > 1) n.vy *= -1;
      }
      // links
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = (nodes[i].x - nodes[j].x);
          const dy = (nodes[i].y - nodes[j].y);
          const dist = Math.hypot(dx, dy);
          if (dist < 0.12) {
            ctx.globalAlpha = (0.12 - dist) * 3;
            ctx.strokeStyle = 'rgba(99,102,241,0.5)';
            ctx.beginPath();
            ctx.moveTo(nodes[i].x * w, nodes[i].y * h);
            ctx.lineTo(nodes[j].x * w, nodes[j].y * h);
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }
      // dots
      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x * w, n.y * h, 1.5 * dpr, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(199,210,254,0.8)';
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    const onResize = () => { resize(); };
    resize();
    raf = requestAnimationFrame(draw);
    window.addEventListener('resize', onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
    };
  }, []);
  return <canvas ref={ref} className="absolute inset-0 w-full h-full" aria-hidden />;
};

export default function HomePage() {
  const tiles = [
    { href: '/services/ai-development', title: 'AI Development', desc: 'LLM apps, RAG, agents, evaluation', icon: '🤖' },
    { href: '/services/cloud-services', title: 'Cloud & DevOps', desc: 'AWS, K8s, Terraform, Platform Eng', icon: '☁️' },
    { href: '/services/data-analytics', title: 'Data & Analytics', desc: 'Data products, dashboards, ML', icon: '📊' },
    { href: '/services/blockchain', title: 'Blockchain', desc: 'Secure ledgers, smart contracts', icon: '⛓️' },
    { href: '/talent', title: 'Hire Talent', desc: 'Verified experts on-demand', icon: '🧑‍💻' },
    { href: '/blog', title: 'Insights', desc: 'Tech strategy, research, guides', icon: '🧠' },
  ];

  const features = [
    { title: 'Operator GPT', desc: 'Natural language to intent & actions', icon: '🎯' },
    { title: 'Secure by Design', desc: 'RLS, isolation, audit & SSO ready', icon: '🔐' },
    { title: 'Global Scale', desc: 'Multi-region, edge-first delivery', icon: '🌍' },
    { title: 'Observability', desc: 'Dashboards, tracing, SLOs', icon: '📈' },
  ];

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950 via-black to-black -z-10" />
      <AnimatedBackground />
      <section className="pt-16 sm:pt-24">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs text-indigo-200">
            <span>Introducing</span>
            <span className="font-medium">Zion AI Marketplace</span>
          </div>
          <h1 className="mt-4 text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
            Build, Hire, and Ship AI faster
          </h1>
          <p className="mt-4 text-indigo-200/90 max-w-2xl mx-auto">
            Talent, jobs, and projects in one high‑performance platform. Natural‑language search, verified experts, and enterprise‑grade security.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Link href="/search"><a className="rounded-md bg-white text-gray-900 px-4 py-2 text-sm font-medium hover:bg-indigo-50">Start Searching</a></Link>
            <Link href="/talent"><a className="rounded-md border border-white/20 text-white px-4 py-2 text-sm font-medium hover:bg-white/5">Browse Talent</a></Link>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 mt-16 sm:mt-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tiles.map((t) => (
            <Link key={t.href} href={t.href}>
              <a className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur hover:border-indigo-400/40 transition">
                <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-indigo-500/10 blur-2xl group-hover:bg-indigo-400/20" />
                <div className="text-2xl">{t.icon}</div>
                <div className="mt-2 text-white font-medium">{t.title}</div>
                <div className="text-sm text-indigo-200/90">{t.desc}</div>
              </a>
            </Link>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 mt-16 sm:mt-24">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((f, i) => (
              <div key={i} className="rounded-lg border border-white/10 bg-black/20 p-4">
                <div className="text-xl">{f.icon}</div>
                <div className="mt-2 text-white font-medium">{f.title}</div>
                <div className="text-sm text-indigo-200/90">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 mt-16 sm:mt-24 mb-16">
        <div className="rounded-2xl bg-gradient-to-r from-indigo-600/20 via-indigo-500/10 to-transparent p-6 border border-indigo-400/30">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="text-white font-semibold text-lg">Ready to launch?</div>
              <div className="text-indigo-200/90 text-sm">Get matched to verified talent or post your project now.</div>
            </div>
            <div className="flex items-center gap-3">
              <Link href="/search"><a className="rounded-md bg-white text-gray-900 px-4 py-2 text-sm font-medium hover:bg-indigo-50">Find Talent</a></Link>
              <Link href="/contact"><a className="rounded-md border border-white/20 text-white px-4 py-2 text-sm font-medium hover:bg-white/5">Contact Sales</a></Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}