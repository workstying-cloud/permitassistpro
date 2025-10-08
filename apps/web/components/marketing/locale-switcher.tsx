'use client';

import { locales } from '@/lib/i18n/config';
import { usePathname, useRouter } from 'next/navigation';
import { useTransition } from 'react';

interface Props {
  currentLocale: string;
}

export default function LocaleSwitcher({ currentLocale }: Props) {
  const pathname = usePathname();
  const router = useRouter();
  const [, startTransition] = useTransition();

  const pathWithoutLocale = pathname?.split('/').slice(2).join('/') ?? '';

  return (
    <select
      aria-label="Select language"
      className="rounded-full border border-slate-700 bg-midnight px-3 py-1 text-sm text-white"
      value={currentLocale}
      onChange={(event) => {
        const locale = event.target.value;
        startTransition(() => {
          router.push(`/${locale}/${pathWithoutLocale}`.replace(/\/$/, ''));
        });
      }}
    >
      {locales.map((locale) => (
        <option key={locale} value={locale}>
          {locale.toUpperCase()}
        </option>
      ))}
    </select>
  );
}
