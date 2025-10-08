import Link from 'next/link';
import { getDictionary } from '@/lib/i18n/get-dictionary';
import Pricing from '@/components/marketing/pricing';
import RequestDemoForm from '@/components/marketing/request-demo-form';

const sectors = [
  'Agriculture & Greenhouse',
  'Construction',
  'Healthcare',
  'Restaurants',
  'Retail',
  'Logistics',
  'Salon & Spa',
  'Tech & Innovation',
];

const locations = [
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

interface Props {
  params: { locale: string };
}

export default async function MarketingPage({ params }: Props) {
  const dictionary = await getDictionary(params.locale);
  const marketing = dictionary.marketing;
  const common = dictionary.common;

  return (
    <div className="bg-midnight">
      <section className="bg-gradient-to-r from-navy via-emerald to-amber pb-24 pt-16 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 md:flex-row md:items-center">
          <div className="md:w-3/5">
            <h1 className="text-4xl font-bold md:text-5xl">{marketing.hero_title}</h1>
            <p className="mt-6 text-lg text-slate-100/90">{marketing.hero_subtitle}</p>
            <div className="mt-8 flex gap-4">
              <Link
                href={`/${params.locale}/portal`}
                className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-navy transition hover:bg-slate-100"
              >
                {common.portal}
              </Link>
              <a
                href="#pricing"
                className="rounded-2xl border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-white"
              >
                {common.pricing}
              </a>
            </div>
          </div>
          <div className="md:w-2/5">
            <RequestDemoForm locale={params.locale} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-semibold text-white">{marketing.sectors_title}</h2>
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {sectors.map((sector) => (
            <div
              key={sector}
              className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-100"
            >
              {sector}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-semibold text-white">{marketing.locations_title}</h2>
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {locations.map((city) => (
            <div
              key={city}
              className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-100"
            >
              {city}
            </div>
          ))}
        </div>
      </section>

      <section id="pricing" className="bg-slate-950/80 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Pricing locale={params.locale} dictionary={dictionary} />
        </div>
      </section>

      <section className="bg-slate-950 py-12">
        <div className="mx-auto max-w-6xl px-6 text-sm text-slate-400">
          <p>{marketing.request_demo_note}</p>
          <div className="mt-4 flex gap-6 text-xs">
            <Link href={`/${params.locale}/privacy`}>Privacy</Link>
            <Link href={`/${params.locale}/terms`}>Terms</Link>
            <Link href={`/${params.locale}/security`}>Security</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
