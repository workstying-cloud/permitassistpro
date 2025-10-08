'use client';

import { useState } from 'react';

export default function PricingToggle() {
  const [currency, setCurrency] = useState<'CAD' | 'USD'>('CAD');

  return (
    <div className="flex items-center gap-2 text-sm text-slate-300">
      <span>Currency:</span>
      <button
        type="button"
        className={`rounded-full px-3 py-1 ${currency === 'CAD' ? 'bg-emerald text-white' : 'border border-slate-700 text-slate-400'}`}
        onClick={() => setCurrency('CAD')}
      >
        CAD
      </button>
      <button
        type="button"
        className={`rounded-full px-3 py-1 ${currency === 'USD' ? 'bg-emerald text-white' : 'border border-slate-700 text-slate-400'}`}
        onClick={() => setCurrency('USD')}
      >
        USD
      </button>
      <span className="text-xs text-slate-500">Billed per active location</span>
    </div>
  );
}
