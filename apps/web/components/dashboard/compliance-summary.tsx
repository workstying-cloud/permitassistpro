import { Suspense } from 'react';

const widgets = [
  {
    title: 'Active Filings',
    value: '12',
    description: 'Filings in progress across all locations.',
  },
  {
    title: 'Upcoming Renewals',
    value: '5',
    description: 'Due within the next 30 days.',
  },
  {
    title: 'Proof-Packs generated',
    value: '8',
    description: 'Ready to share with lenders and inspectors.',
  },
];

export default function ComplianceSummary() {
  return (
    <section className="mt-10 grid gap-6 md:grid-cols-3">
      {widgets.map((widget) => (
        <article
          key={widget.title}
          className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6"
          aria-label={widget.title}
        >
          <Suspense fallback={<div className="h-16 animate-pulse rounded-xl bg-slate-800" />}> 
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
                {widget.title}
              </h3>
              <p className="mt-4 text-3xl font-bold text-white">{widget.value}</p>
              <p className="mt-2 text-sm text-slate-400">{widget.description}</p>
            </div>
          </Suspense>
        </article>
      ))}
    </section>
  );
}
