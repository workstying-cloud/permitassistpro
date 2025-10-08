import { getDictionary } from '@/lib/i18n/get-dictionary';
import ComplianceSummary from '@/components/dashboard/compliance-summary';

interface Props {
  params: { locale: string };
}

export default async function DashboardPage({ params }: Props) {
  const dictionary = await getDictionary(params.locale);

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-3xl font-semibold text-white">{dictionary.app.welcome}</h1>
      <p className="mt-2 text-sm text-slate-400">
        Monitor permits, renewals, and inspections across every Canadian location in one
        dashboard.
      </p>
      <ComplianceSummary />
    </div>
  );
}
