import type { NextPage } from 'next';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useMemo, useState } from 'react';

// Dynamic import placeholder for future map component
const WorldHeatmap = dynamic(() => import('../../components/simulator/WorldHeatmap'), { ssr: false, loading: () => <div className="h-80 w-full bg-gray-50 dark:bg-gray-900 animate-pulse rounded" /> });

export type SimulationParams = {
  instances: number;
  globalUsageUsd: number;
  talentPassports: number;
  nationTokenIntegrations: number;
  daoVotesPerMonth: number;
  freelanceGdpSharePct: number;
};

const defaultParams: SimulationParams = {
  instances: 1200,
  globalUsageUsd: 12_000_000_000,
  talentPassports: 25_000_000,
  nationTokenIntegrations: 65,
  daoVotesPerMonth: 120_000_000,
  freelanceGdpSharePct: 18,
};

const Simulator2040: NextPage = () => {
  const [params, setParams] = useState<SimulationParams>(defaultParams);

  const narrativeThreads = useMemo(() => [
    'AI governs 40% of global micro-economies',
    'Zion is a protocol inside gov ID systems',
    'ZionGPT writes 70% of job contracts',
    'ZION$ is used for UN-backed work credits',
  ], []);

  return (
    <div>
      <Head>
        <title>Year 10 Simulator (2040) — Zion OS</title>
      </Head>

      <div className="space-y-8">
        <header className="space-y-2">
          <h1 className="text-2xl font-semibold">Year 10 Scenario Planner</h1>
          <p className="text-gray-600 dark:text-gray-300">Explore multiverse branches for Zion OS in Year 10.</p>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            <div className="rounded border border-gray-200 dark:border-gray-800 p-4">
              <h2 className="font-medium mb-3">Visual World Map</h2>
              <WorldHeatmap params={params} />
            </div>

            <div className="rounded border border-gray-200 dark:border-gray-800 p-4">
              <h2 className="font-medium mb-3">Narrative Threads</h2>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-200">
                {narrativeThreads.map((t) => (<li key={t}>{t}</li>))}
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded border border-gray-200 dark:border-gray-800 p-4">
              <h2 className="font-medium mb-3">Simulation Parameters</h2>
              <div className="grid grid-cols-1 gap-3">
                <ParamInput label="# of Zion instances" value={params.instances} onChange={(v)=>setParams(p=>({...p, instances:v}))} />
                <ParamInput label="ZION$ global usage" value={params.globalUsageUsd} onChange={(v)=>setParams(p=>({...p, globalUsageUsd:v}))} />
                <ParamInput label="Talent passport issuances" value={params.talentPassports} onChange={(v)=>setParams(p=>({...p, talentPassports:v}))} />
                <ParamInput label="Nation-token integrations" value={params.nationTokenIntegrations} onChange={(v)=>setParams(p=>({...p, nationTokenIntegrations:v}))} />
                <ParamInput label="DAO votes/month" value={params.daoVotesPerMonth} onChange={(v)=>setParams(p=>({...p, daoVotesPerMonth:v}))} />
                <ParamInput label="% of global freelance GDP on Zion" value={params.freelanceGdpSharePct} onChange={(v)=>setParams(p=>({...p, freelanceGdpSharePct:v}))} />
              </div>
            </div>

            <div className="rounded border border-gray-200 dark:border-gray-800 p-4 space-y-4">
              <h2 className="font-medium">Scenario Outputs</h2>
              <ScenarioCard title="Scenario 1: Protocol → Protocol Nation" summary="Zion transitions from a protocol to a sovereign protocol-nation layer with embedded compliance and labor treaties." />
              <ScenarioCard title="Scenario 2: Protocol under attack" summary="Coordinated regulatory and network attacks fragment liquidity; Zion forks governance to preserve mission." />
              <ScenarioCard title="Scenario 3: Protocol adopted by 10 UN countries" summary="UN-bloc pilots ZION$ for work credits and disaster response, standardizing identity and contract rails." />
            </div>

            <div className="rounded border border-gray-200 dark:border-gray-800 p-4 space-y-2">
              <h2 className="font-medium">GPT Timeline Prompt</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Project what Zion becomes by Year 10, assuming 1M users, global DAO sync, and AI-generated governance. Forecast tech, risk, and new use cases.
              </p>
              <textarea className="w-full h-40 rounded border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-black/40 p-2" defaultValue={defaultTimelinePrompt} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

function ParamInput({ label, value, onChange }: { label: string; value: number; onChange: (v: number) => void }) {
  return (
    <label className="text-sm space-y-1">
      <span className="block text-gray-600 dark:text-gray-300">{label}</span>
      <input type="number" className="w-full rounded border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-black/40 p-2" value={value} onChange={(e)=>onChange(Number(e.target.value))} />
    </label>
  );
}

function ScenarioCard({ title, summary }: { title: string; summary: string }) {
  return (
    <div className="rounded border border-gray-200 dark:border-gray-800 p-3">
      <div className="font-medium">{title}</div>
      <div className="text-sm text-gray-700 dark:text-gray-200">{summary}</div>
    </div>
  );
}

const defaultTimelinePrompt = `Project what Zion becomes by Year 10, assuming 1M users, global DAO sync, and AI-generated governance. Forecast tech, risk, and new use cases.`;

export default Simulator2040;