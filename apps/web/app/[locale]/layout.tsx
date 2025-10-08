import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { PropsWithChildren } from 'react';
import { getMessages } from '../messages';
import LocaleSwitcher from '@/components/marketing/locale-switcher';

export default async function LocaleLayout({
  children,
  params,
}: PropsWithChildren<{ params: { locale: string } }>) {
  const messages = await getMessages(params.locale);

  if (!messages) {
    notFound();
  }

  return (
    <NextIntlClientProvider locale={params.locale} messages={messages}>
      <div className="min-h-screen bg-midnight">
        <header className="sticky top-0 z-50 border-b border-slate-800 bg-midnight/90 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <div className="text-xl font-semibold text-white">PermitAssist Pro</div>
            <LocaleSwitcher currentLocale={params.locale} />
          </div>
        </header>
        <main>{children}</main>
      </div>
    </NextIntlClientProvider>
  );
}
