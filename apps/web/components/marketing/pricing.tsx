'use client';
import { useTranslations } from 'next-intl';
import PricingToggle from './pricing-toggle';

interface PricingProps {
  locale: string;
  dictionary: any;
}

const plans = [
  {
    id: 'monitor',
    priceCad: 99,
    priceUsd: 79,
    description: 'Automated monitoring, renewal calendar, alerts.',
    features: ['Rules Graph snapshots', 'Renewal reminders', 'Email support'],
  },
  {
    id: 'concierge',
    priceCad: 199,
    priceUsd: 159,
    description: 'White-glove filing, inspections prep, dedicated manager.',
    features: ['Concierge filings', 'Inspection scheduling', 'Loan-ready Proof-Pack'],
  },
];

export default function Pricing({ locale, dictionary }: PricingProps) {
  const t = useTranslations('common');

  return (
    <div className="space-y-8">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div>
          <h2 className="text-3xl font-bold text-white">{dictionary.marketing.pricing_title}</h2>
          <p className="mt-2 text-sm text-slate-400">
            {`Every plan bills per location. Scale your compliance without surprises.`}
          </p>
        </div>
        <PricingToggle />
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {plans.map((plan) => (
          <div key={plan.id} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-white">{t(plan.id)}</h3>
              <span className="rounded-full border border-emerald px-3 py-1 text-xs text-emerald">
                CAD ${plan.priceCad}/mo/location
              </span>
            </div>
            <p className="mt-4 text-sm text-slate-300">{plan.description}</p>
            <ul className="mt-6 space-y-2 text-sm text-slate-200">
              {plan.features.map((feature) => (
                <li key={feature}>• {feature}</li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 md:flex-row">
              <a
                href="#demo"
                className="flex-1 rounded-2xl bg-emerald px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-emerald/90"
              >
                {t('cta_request_demo')}
              </a>
              <button
                type="button"
                className="flex-1 rounded-2xl border border-amber px-6 py-3 text-sm font-semibold text-amber transition hover:bg-amber/10"
              >
                Start Checkout
              </button>
            </div>
            <p className="mt-3 text-xs text-slate-500">
              Stripe-powered subscriptions with per-location multipliers.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
