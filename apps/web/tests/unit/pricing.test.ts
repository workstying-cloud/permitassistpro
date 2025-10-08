import { calculateSubscriptionTotal } from '@/lib/pricing';

describe('calculateSubscriptionTotal', () => {
  it('calculates CAD totals per location', () => {
    expect(calculateSubscriptionTotal('MONITOR', 3, 'CAD')).toBe(297);
  });

  it('converts to USD with FX adjustment', () => {
    expect(calculateSubscriptionTotal('CONCIERGE', 2, 'USD')).toBe(318);
  });
});
