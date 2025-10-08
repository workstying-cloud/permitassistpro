const planRates = {
  MONITOR: 99,
  CONCIERGE: 199,
} as const;

type Plan = keyof typeof planRates;

type Currency = 'CAD' | 'USD';

export function calculateSubscriptionTotal(plan: Plan, locations: number, currency: Currency) {
  const rate = planRates[plan];
  const cadTotal = rate * locations;
  if (currency === 'CAD') {
    return cadTotal;
  }

  return Math.round(cadTotal * 0.8);
}
