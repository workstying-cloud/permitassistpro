import { render, screen } from '@testing-library/react';
import MarketingPage from '@/app/[locale]/(marketing)/page';

jest.mock('next/link', () => {
  return function MockLink({ href, children, ...props }: any) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  };
});

describe('marketing page', () => {
  it('renders hero content and request demo call-to-action', async () => {
    const page = await MarketingPage({ params: { locale: 'en' } });

    render(page);

    expect(
      screen.getByRole('heading', { name: /Permit compliance without the guesswork/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Request Demo/i })).toBeInTheDocument();
  });
});
