'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Nursing Care Checklist — Free Health Tool | Zion Tech Group',
  description: 'Generate a nursing care checklist from patient inputs: vitals, meds, mobility, wounds, fall risk, and discharge needs.',
};

export default function NursingCareChecklist() {
  const nameRef = useRef(null);
  const ageRef = useRef(null);
  const conditionRef = useRef(null);
  const mobilityRef = useRef(null);
  const fallRef = useRef(null);
  const woundRef = useRef(null);
  const medsRef = useRef(null);
  const outRef = useRef(null);

  useEffect(() => {
    const btn = document.getElementById('generate');
    const out = outRef.current;
    if (!btn || !out) return;
    btn.onclick = () => {
      const name = nameRef.current?.value || 'Patient';
      const age = ageRef.current?.value || 'N/A';
      const condition = conditionRef.current?.value || 'Not specified';
      const mobility = mobilityRef.current?.value || 'Unknown';
      const fallRisk = fallRef.current?.value || 'Not assessed';
      const wound = woundRef.current?.value || 'None reported';
      const meds = medsRef.current?.value || 'Not provided';
      const now = new Date().toISOString().slice(0, 10);
      out.textContent = `Nursing Care Checklist\nGenerated: ${now}\n\nPatient: ${name}\nAge: ${age}\nCondition: ${condition}\nMobility: ${mobility}\nFall risk: ${fallRisk}\nWound/skin: ${wound}\nMeds: ${meds}\n\nCare tasks\n- Vitals: q4-6h or per protocol\n- Mobility: assist/reposition every 2h\n- Skin/wound: inspect and document every shift\n- Pain: assess before and 30-60m after intervention\n- Meds: verify MAR, allergies, time, dose, route\n- Fall precautions: bed alarm, call light, floor mat\n- Discharge: review meds, follow-up, red flags, caregiver instructions`;
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="mx-auto max-w-5xl">
        <Link href="/free-tools" className="mb-6 inline-flex items-center gap-2 text-slate-400 hover:text-white">← Back to Free Tools</Link>
        <h1 className="text-3xl font-bold">Nursing Care Checklist</h1>
        <p className="mt-2 text-slate-400">Enter patient and context details to generate a structured nursing care checklist.</p>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Patient name or initials</label>
              <input ref={nameRef} className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-white focus:border-emerald-500 focus:outline-none" placeholder="e.g., John D." />
            </div>
            <div>
              <label className="block text-sm font-medium">Age</label>
              <input ref={ageRef} type="number" min="0" className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-white focus:border-emerald-500 focus:outline-none" placeholder="e.g., 67" />
            </div>
            <div>
              <label className="block text-sm font-medium">Primary condition or diagnosis</label>
              <input ref={conditionRef} className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-white focus:border-emerald-500 focus:outline-none" placeholder="e.g., CHF, post-op, COPD" />
            </div>
            <div>
              <label className="block text-sm font-medium">Mobility status</label>
              <select ref={mobilityRef} className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-white focus:border-emerald-500 focus:outline-none">
                <option>Independent</option>
                <option>Assistive device</option>
                <option>Wheelchair</option>
                <option>Bedbound</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium">Fall risk</label>
              <select ref={fallRef} className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-white focus:border-emerald-500 focus:outline-none">
                <option>Low</option>
                <option>Moderate</option>
                <option>High</option>
                <option>Not assessed</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium">Wound/skin status</label>
              <input ref={woundRef} className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-white focus:border-emerald-500 focus:outline-none" placeholder="e.g., Stage 2 pressure injury on sacrum" />
            </div>
            <div>
              <label className="block text-sm font-medium">Key medications/allergies</label>
              <textarea ref={medsRef} className="mt-2 w-full min-h-[120px] rounded-lg border border-slate-700 bg-slate-900 p-3 font-mono text-sm text-white focus:border-emerald-500 focus:outline-none" placeholder="List high-risk meds and allergies" />
            </div>
            <button id="generate" className="rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-500 transition-colors">Generate Checklist</button>
          </div>
          <div>
            <label className="block text-sm font-medium">Checklist</label>
            <div ref={outRef} className="mt-2 rounded-lg border border-slate-800 bg-slate-900 p-4 font-mono text-sm text-slate-200 min-h-[520px] whitespace-pre-wrap">Fill inputs and click generate.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
