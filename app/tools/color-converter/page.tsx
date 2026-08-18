import type { Metadata } from 'next';
import Link from 'next/link';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Color Converter | Zion Tech Group',
  description: 'Convert colors between HEX, RGB, and HSL formats with real-time previews and accessibility checks.',
  openGraph: {
    title: 'Color Converter | Zion Tech Group',
    description: 'Free online color converter — HEX, RGB, HSL with live preview.',
    url: 'https://ziontechgroup.com/tools/color-converter/',
    type: 'website',
  },
  alternates: { canonical: '/tools/color-converter/' },
};

const SCRIPT = `
function hexToRgb(hex) {
  hex = hex.replace('#','');
  if (hex.length === 3) hex = hex.split('').map(c => c+c).join('');
  const num = parseInt(hex, 16);
  return { r: (num >> 16) & 255, g: (num >> 8) & 255, b: num & 255 };
}
function rgbToHex(r,g,b) {
  return '#' + [r,g,b].map(x => Math.max(0,Math.min(255,parseInt(x))).toString(16).padStart(2,'0')).join('');
}
function rgbToHsl(r,g,b) {
  r/=255; g/=255; b/=255;
  const max=Math.max(r,g,b), min=Math.min(r,g,b);
  let h,s,l=(max+min)/2;
  if(max===min){h=s=0;}else{
    const d=max-min;
    s=l>0.5?d/(2-max-min):d/(max+min);
    switch(max){
      case r:h=((g-b)/d+(g<b?6:0))/6;break;
      case g:h=((b-r)/d+2)/6;break;
      case b:h=((r-g)/d+4)/6;break;
    }
  }
  return { h: Math.round(h*360), s: Math.round(s*100), l: Math.round(l*100) };
}
function hslToRgb(h,s,l) {
  h/=360;s/=100;l/=100;
  let r,g,b;
  if(s===0){r=g=b=l;}else{
    const hue2rgb=(p,q,t)=>{
      if(t<0)t+=1;if(t>1)t-=1;
      if(t<1/6)return p+(q-p)*6*t;
      if(t<1/2)return q;
      if(t<2/3)return p+(q-p)*(2/3-t)*6;
      return p;
    };
    const q=l<0.5?l*(1+s):l+s-l*s;
    const p=2*l-q;
    r=hue2rgb(p,q,h+1/3);
    g=hue2rgb(p,q,h);
    b=hue2rgb(p,q,h-1/3);
  }
  return { r: Math.round(r*255), g: Math.round(g*255), b: Math.round(b*255) };
}
function updateAll(src){
  let r,g,b;
  if(src==='hex'){
    const v=document.getElementById('hex').value;
    if(!/^#?[0-9a-fA-F]{3,6}$/.test(v)){return;}
    const rgb=hexToRgb(v);r=rgb.r;g=rgb.g;b=rgb.b;
    document.getElementById('hexError').style.display='none';
  } else if(src==='rgb'){
    r=parseInt(document.getElementById('r').value)||0;
    g=parseInt(document.getElementById('g').value)||0;
    b=parseInt(document.getElementById('b').value)||0;
  } else {
    const h=parseInt(document.getElementById('h').value)||0;
    const s=parseInt(document.getElementById('s').value)||0;
    const l=parseInt(document.getElementById('l').value)||0;
    const rgb=hslToRgb(h,s,l);r=rgb.r;g=rgb.g;b=rgb.b;
  }
  const hex=rgbToHex(r,g,b);
  const hsl=rgbToHsl(r,g,b);
  if(src!=='hex')document.getElementById('hex').value=hex;
  if(src!=='rgb'){document.getElementById('r').value=r;document.getElementById('g').value=g;document.getElementById('b').value=b;}
  if(src!=='hsl'){document.getElementById('h').value=hsl.h;document.getElementById('s').value=hsl.s;document.getElementById('l').value=hsl.l;}
  document.getElementById('preview').style.backgroundColor=hex;
  document.getElementById('contrast').style.color=hex;
  document.getElementById('contrast').style.backgroundColor = hsl.l > 50 ? '#000' : '#fff';
}
`;

export default function ColorConverterPage() {
  return (
    <StandardPage
      title="Color Converter"
      subtitle="Convert between HEX, RGB, and HSL with live preview and contrast checks."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Tools', href: '/tools/' },
        { label: 'Color Converter' },
      ]}
      actions={[
        { label: 'Back to Tools', href: '/tools/', style: 'secondary' },
      ]}
    >
      <div className="max-w-3xl mx-auto">
        <div className="bg-slate-800/60 rounded-xl p-6 border border-slate-700 mb-6">
          <div id="preview" className="h-32 rounded-lg mb-4 border border-slate-600 flex items-center justify-center">
            <span id="contrast" className="text-lg font-semibold">Color Preview</span>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-sm font-medium text-slate-300 mb-2">HEX</h3>
              <input id="hex" type="text" defaultValue="#6366f1" placeholder="#6366f1"
                className="w-full bg-slate-900 border border-slate-600 rounded-lg px-3 py-2 text-white font-mono"
                onChange="updateAll('hex')" />
              <p id="hexError" className="text-red-400 text-xs mt-1" style={{display:'none'}}>Invalid HEX</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-slate-300 mb-2">RGB</h3>
              <div className="flex gap-2">
                <input id="r" type="number" min="0" max="255" defaultValue="99" placeholder="R"
                  className="w-full bg-slate-900 border border-slate-600 rounded-lg px-2 py-2 text-white font-mono text-center"
                  onChange="updateAll('rgb')" />
                <input id="g" type="number" min="0" max="255" defaultValue="102" placeholder="G"
                  className="w-full bg-slate-900 border border-slate-600 rounded-lg px-2 py-2 text-white font-mono text-center"
                  onChange="updateAll('rgb')" />
                <input id="b" type="number" min="0" max="255" defaultValue="241" placeholder="B"
                  className="w-full bg-slate-900 border border-slate-600 rounded-lg px-2 py-2 text-white font-mono text-center"
                  onChange="updateAll('rgb')" />
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium text-slate-300 mb-2">HSL</h3>
              <div className="flex gap-2">
                <input id="h" type="number" min="0" max="360" defaultValue="239" placeholder="H"
                  className="w-full bg-slate-900 border border-slate-600 rounded-lg px-2 py-2 text-white font-mono text-center"
                  onChange="updateAll('hsl')" />
                <input id="s" type="number" min="0" max="100" defaultValue="84" placeholder="S"
                  className="w-full bg-slate-900 border border-slate-600 rounded-lg px-2 py-2 text-white font-mono text-center"
                  onChange="updateAll('hsl')" />
                <input id="l" type="number" min="0" max="100" defaultValue="67" placeholder="L"
                  className="w-full bg-slate-900 border border-slate-600 rounded-lg px-2 py-2 text-white font-mono text-center"
                  onChange="updateAll('hsl')" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-800/40 rounded-xl p-6 border border-slate-700">
          <h2 className="text-xl font-semibold text-white mb-3">How It Works</h2>
          <ul className="space-y-2 text-slate-300">
            <li className="flex items-start gap-2"><span className="text-indigo-400">HEX</span> — Hexadecimal notation (#RRGGBB) used in CSS and design tools.</li>
            <li className="flex items-start gap-2"><span className="text-indigo-400">RGB</span> — Red, Green, Blue channels (0–255 each) for screen display.</li>
            <li className="flex items-start gap-2"><span className="text-indigo-400">HSL</span> — Hue (0–360), Saturation (0–100%), Lightness (0–100%) for intuitive color picking.</li>
          </ul>
          <p className="text-slate-400 text-sm mt-4">All conversions happen in your browser — no data is sent to any server.</p>
        </div>
      </div>
      <script dangerouslySetInnerHTML={{ __html: SCRIPT }} />
    </StandardPage>
  );
}
