'use client';

import { useState } from 'react';

type Rule = {
  id: string;
  name: string;
  description: string;
  estFee?: number;
  dependencies: string[];
};

interface Props {
  locale: string;
}

const sectors = [
  'Agriculture',
  'Construction',
  'Healthcare',
  'Restaurants',
  'Retail',
  'Logistics',
  'Salon',
  'Tech',
];

const cities = [
  'Toronto',
  'Waterloo Region',
  'Niagara',
  'Ottawa',
  'Durham',
  'York',
  'Calgary',
  'Vancouver',
  'Montreal',
  'Halifax',
  'Winnipeg',
  'Saskatoon',
];

export default function RulesScanForm({ locale }: Props) {
  const [city, setCity] = useState('Toronto');
  const [sector, setSector] = useState('Restaurants');
  const [rules, setRules] = useState<Rule[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  async function handleScan() {
    setIsLoading(true);
    try {
      const response = await fetch('/api/rules/scan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ city, sector, locale }),
      });
      const data = await response.json();
      setRules(data.rules ?? []);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="mt-8 space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-sm text-slate-300">
          City
          <select
            value={city}
            onChange={(event) => setCity(event.target.value)}
            className="mt-2 w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-white"
          >
            {cities.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
        <label className="text-sm text-slate-300">
          Sector
          <select
            value={sector}
            onChange={(event) => setSector(event.target.value)}
            className="mt-2 w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-white"
          >
            {sectors.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
      </div>
      <button
        type="button"
        onClick={handleScan}
        disabled={isLoading}
        className="rounded-xl bg-emerald px-4 py-2 text-sm font-semibold text-white disabled:opacity-60"
      >
        {isLoading ? 'Scanning…' : 'Scan rules' }
      </button>
      <div className="mt-6 space-y-4">
        {rules.map((rule) => (
          <div key={rule.id} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">{rule.name}</h3>
              {typeof rule.estFee === 'number' && (
                <span className="text-sm text-amber">Estimated fee: ${rule.estFee}</span>
              )}
            </div>
            <p className="mt-2 text-sm text-slate-300">{rule.description}</p>
            {rule.dependencies.length > 0 && (
              <p className="mt-2 text-xs text-slate-500">
                Dependencies: {rule.dependencies.join(', ')}
              </p>
            )}
          </div>
        ))}
        {rules.length === 0 && !isLoading && (
          <p className="text-sm text-slate-500">No rules yet. Run a scan to preview permits.</p>
        )}
      </div>
    </div>
  );
}
