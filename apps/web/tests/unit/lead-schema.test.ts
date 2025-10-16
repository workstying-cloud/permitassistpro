import { leadSchema } from '@/lib/validation/leadSchema';

describe('leadSchema', () => {
  it('validates a complete payload', () => {
    const payload = {
      email: 'demo@example.com',
      name: 'Demo',
      orgName: 'Org',
      city: 'Toronto',
      sector: 'Restaurants',
      message: 'Help with permits',
    };

    expect(() => leadSchema.parse(payload)).not.toThrow();
  });

  it('rejects invalid email', () => {
    expect(() => leadSchema.parse({ email: 'bad-email' })).toThrow();
  });
});

